# BallotBook — notes for future Claude sessions

## Stack
- Vite + React 19 SPA. No backend, no proxy, no key.
- Odds: Polymarket Gamma API (`gamma-api.polymarket.com`), which is CORS-open
  (`access-control-allow-origin: *`) — the browser calls it directly. Do NOT
  add a serverless proxy "for consistency" with other projects; it isn't
  needed here.

## Polymarket shape (verified Aug 2026)
- `GET /events?slug=<slug>` → `[event]`; `event.markets[]` = one Yes/No
  sub-market per candidate/party.
- `outcomePrices` is a JSON-encoded STRING (`'["0.915","0.085"]'`); index 0 is
  the Yes price = implied probability. It is `null` for placeholder
  candidates ("Person A"…) — filter on null price, never on the label.
- Slugs are pinned in `src/data/races.js` because they're inconsistent:
  e.g. `alabama-senate-election-winner-154` (numeric suffix),
  `<state>-senate-election-winner` (2026) vs `<state>-us-senate-election-winner`
  (mostly RESOLVED 2024 markets — the `us` variants are stale; check
  `closed`/`endDate` before ever adding one).

## Data discipline
- Live data = odds only. Bios/platforms/polls are a curated editorial
  snapshot with `SNAPSHOT_DATE` in `src/data/races.js` — update the date when
  updating the content. Don't generate candidate facts from model memory;
  verify with current reporting (primaries reshuffled several races in 2026:
  Maine's nominee was replaced by convention in July, Paxton beat Cornyn,
  etc.).
- Map ratings (Safe/Likely/Lean/Tossup) are DERIVED from live prices in
  `App.jsx` (`ratingFromProb`) — do not hardcode per-state ratings; they'd go
  stale.
- 35 races in 35 states (33 Class 2 + OH & FL Class 3 specials). States with
  no 2026 Senate race are listed in `NO_SENATE_RACE` and render neutral.

## Map
- d3-geo `geoAlbersUsa` + `us-atlas/states-10m.json` via topojson-client,
  rendered as plain SVG paths (`src/components/USMap.jsx`). Geometry builds
  once at module load. Territories are filtered (not projectable).
