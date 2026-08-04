# BallotBook

A live dashboard for the 2026 US midterm election markets. Click any state on
the map to see its Senate race — candidates, platforms, latest polling, and
real-time prediction-market odds — plus a House outlook.

## What it does

- **Clickable US map** (d3-geo + us-atlas, plain SVG — no map library) colored
  by the live market favorite in each state's Senate race; deeper color =
  higher market confidence.
- **Live odds** from Polymarket's public Gamma API for all 35 Senate races on
  the 2026 ballot, plus the national Senate/House control markets in the
  header. No API key, no backend — Gamma is CORS-open, so the SPA calls it
  directly.
- **Curated race intel**: candidate bios, platform planks, and recent polling
  snapshots for every competitive race, compiled from public reporting and
  clearly dated. Editorial data is deliberately static (seeded JSON) so the
  live odds are the only thing that can silently change.
- **"Closest races" board** ranks all markets by distance from 50¢.

## Stack

Vite + React 19. No server, no state library, no CSS framework.

```
npm install
npm run dev
```

## Data honesty notes

- Odds are implied probabilities from real-money markets; they are displayed
  in cents (51¢ = 51%).
- Market slugs were each verified against the live API — several don't follow
  the common naming pattern, so they're pinned in `src/data/races.js`, not
  generated.
- Bios/platforms/polls carry a visible snapshot date and are not presented as
  live data. Nothing here is wagering advice.
