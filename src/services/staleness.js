// Self-staleness detection.
//
// The editorial layer (bios/platforms/polls/nominees) is a dated snapshot,
// while odds are live. This module lets the page notice — for free, from data
// it already fetched — when the snapshot has fallen behind reality, so a
// reader is never shown "primary pending" for a primary that already happened.
//
// Two independent signals, deliberately kept separate:
//
//  1. CALENDAR (deterministic): the race has a known primary date in
//     PRIMARY_DATES, that date has passed, and the seed still lists
//     unresolved (primary_pending) candidates. This needs no network at all.
//
//  2. MARKET (corroborating): Polymarket relabels these events from
//     party-level outcomes ("Democrat") to named candidates
//     ("Haley Stevens (D)") once a primary resolves. So if the market names
//     people our seed doesn't know about, the seed is behind.
//
// Signal 1 is the primary trigger; signal 2 catches races whose date we
// didn't record and confirms signal 1. Neither costs tokens or compute.

import { PRIMARY_DATES } from "../data/races.js";

const PARTY_LABELS = new Set(["democrat", "republican", "independent", "other"]);

/** Compare YYYY-MM-DD strings; avoids timezone drift from Date parsing. */
function isPast(isoDate, todayIso) {
  return isoDate < todayIso;
}

export function todayIso(now = new Date()) {
  // Election dates are US-centric; use ET so a late-evening PT check doesn't
  // roll the date forward early.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Does this race still carry candidates whose nomination isn't settled? */
function hasUnresolvedCandidates(race) {
  return (race?.candidates ?? []).some(
    (c) => c.status === "primary_pending"
  );
}

/** Market outcome labels that name a person rather than a party. */
function namedOutcomes(odds) {
  return (odds?.outcomes ?? [])
    .map((o) => o.label)
    .filter((l) => l && !PARTY_LABELS.has(l.trim().toLowerCase()));
}

/**
 * Evaluate one race.
 * `odds` is optional — pass it to enable the market signal.
 * Returns null when the seed looks current, else a reason object.
 */
export function checkRace(usps, race, odds = null, today = todayIso()) {
  if (!race) return null;

  const primaryDate = PRIMARY_DATES[usps];
  const unresolved = hasUnresolvedCandidates(race);

  if (primaryDate && unresolved && isPast(primaryDate, today)) {
    return {
      usps,
      signal: "calendar",
      primaryDate,
      message: `Primary was ${primaryDate}; candidate list here hasn't been updated yet.`,
    };
  }

  // Market signal. Only meaningful once the market has switched from
  // party-level outcomes to named candidates.
  if (unresolved && odds) {
    const named = namedOutcomes(odds);
    if (named.length > 0) {
      const namedLower = named.map((n) => n.toLowerCase());
      const surname = (full) => full.toLowerCase().split(" ").pop();
      const inMarket = (c) => namedLower.some((n) => n.includes(surname(c.name)));

      // (a) The market prices someone we've never heard of — e.g. a
      //     replacement nominee chosen after our snapshot.
      const unknown = named.filter(
        (n) =>
          !(race.candidates ?? []).some((c) => n.toLowerCase().includes(surname(c.name)))
      );
      if (unknown.length > 0) {
        return {
          usps,
          signal: "market-new",
          message: `Market prices a candidate not in this snapshot (${unknown
            .slice(0, 2)
            .join(", ")}) — candidate list is behind.`,
        };
      }

      // (b) A candidate we still show as "primary pending" has vanished from
      //     the market — they lost the primary or withdrew.
      const dropped = (race.candidates ?? []).filter(
        (c) => c.status === "primary_pending" && !inMarket(c)
      );
      if (dropped.length > 0) {
        return {
          usps,
          signal: "market-dropped",
          message: `${dropped
            .map((c) => c.name)
            .join(", ")} no longer priced by the market — likely out of the race.`,
        };
      }
    }
  }

  return null;
}

/**
 * Sweep every seeded race using calendar signal only (no odds needed), for the
 * global banner. Returns an array of reason objects, empty when all current.
 */
export function checkAll(races, today = todayIso()) {
  const out = [];
  for (const [usps, race] of Object.entries(races)) {
    const r = checkRace(usps, race, null, today);
    if (r) out.push(r);
  }
  return out;
}
