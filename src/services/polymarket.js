// Polymarket Gamma API client.
//
// Gamma is CORS-open (access-control-allow-origin: *), so the browser calls
// it directly — no serverless proxy needed (unlike phish.net in phanduel).
//
// Shape notes (verified against the live API, Aug 2026):
//   GET /events?slug=<slug>  -> [event]
//   event.markets[]          -> one Yes/No sub-market per candidate/party
//     .groupItemTitle        -> outcome label ("Democrat", "Jon Ossoff", ...)
//     .outcomePrices         -> JSON-encoded string '["0.915","0.085"]'
//                               index 0 = Yes price = implied probability.
//                               null for placeholder candidates ("Person A").
//     .lastTradePrice        -> number, 0 when never traded
//     .closed                -> sub-market resolved/withdrawn
//
// Placeholder sub-markets ("Person A".."Person N") carry null prices and are
// dropped by the price filter — do not special-case them by name.

const GAMMA = "https://gamma-api.polymarket.com";
const TTL_MS = 60_000; // odds refresh cadence; election odds don't move faster
const cache = new Map(); // slug -> { at, data }

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Gamma ${res.status} for ${url}`);
  return res.json();
}

/**
 * Fetch one event by slug and reduce it to renderable outcome rows.
 * Returns { title, volume, endDate, updatedAt, outcomes: [{label, prob}] }
 * or null when the event doesn't exist / has no priced outcomes.
 */
export async function fetchEventOdds(slug) {
  if (!slug) return null;
  const hit = cache.get(slug);
  if (hit && Date.now() - hit.at < TTL_MS) return hit.data;

  const events = await fetchJson(`${GAMMA}/events?slug=${encodeURIComponent(slug)}`);
  const ev = Array.isArray(events) ? events[0] : null;
  if (!ev) return null;

  const outcomes = (ev.markets || [])
    .filter((m) => !m.closed)
    .map((m) => {
      let prob = null;
      try {
        const prices = JSON.parse(m.outcomePrices ?? "null");
        if (Array.isArray(prices) && prices[0] != null) prob = Number(prices[0]);
      } catch {
        /* unpriced market — drop below */
      }
      return { label: m.groupItemTitle || m.question, prob };
    })
    .filter((o) => o.label && o.prob != null && Number.isFinite(o.prob))
    .sort((a, b) => b.prob - a.prob);

  const data = outcomes.length
    ? {
        title: ev.title,
        volume: Number(ev.volume) || 0,
        endDate: ev.endDate || null,
        updatedAt: Date.now(),
        outcomes,
      }
    : null;
  cache.set(slug, { at: Date.now(), data });
  return data;
}

/** National control markets shown in the header. Slugs verified live. */
export const NATIONAL_SLUGS = {
  senate: "which-party-will-win-the-senate-in-2026",
  house: "which-party-will-win-the-house-in-2026",
};

export async function fetchNationalOdds() {
  const [senate, house] = await Promise.all([
    fetchEventOdds(NATIONAL_SLUGS.senate).catch(() => null),
    fetchEventOdds(NATIONAL_SLUGS.house).catch(() => null),
  ]);
  return { senate, house };
}
