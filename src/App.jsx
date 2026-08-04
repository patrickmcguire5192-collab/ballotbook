import { useEffect, useMemo, useState } from "react";
import USMap from "./components/USMap.jsx";
import StatePanel from "./components/StatePanel.jsx";
import { SENATE_RACES } from "./data/races.js";
import { fetchEventOdds, fetchNationalOdds } from "./services/polymarket.js";
import { outcomeParty } from "./services/party.js";
import { FIPS } from "./data/fips.js";
import "./App.css";

const NAME_BY_USPS = Object.fromEntries(
  Object.values(FIPS).map((s) => [s.usps, s.name])
);

// Party base colors; confidence scales the mix toward the base.
const PARTY_RGB = { d: [56, 116, 245], r: [227, 66, 66], i: [222, 168, 62] };
const BG_RGB = [42, 47, 58]; // no-market / low-info tint

function fillColor(party, prob) {
  const base = PARTY_RGB[party];
  if (!base) return null;
  // Map prob 0.5 → 0.3 mix (tossup, clearly tinted vs. the neutral no-race
  // fill) up to 1.0 → full party color.
  const t = Math.max(0, Math.min(1, (prob - 0.5) / 0.5)) * 0.7 + 0.3;
  const c = base.map((v, i) => Math.round(BG_RGB[i] + (v - BG_RGB[i]) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

function ratingFromProb(prob) {
  if (prob >= 0.9) return "Safe";
  if (prob >= 0.75) return "Likely";
  if (prob >= 0.6) return "Lean";
  return "Tossup";
}

function NationalStrip({ national }) {
  const rows = [
    ["Senate control", national?.senate],
    ["House control", national?.house],
  ];
  return (
    <div className="national">
      {rows.map(([name, ev]) => (
        <div className="national-market" key={name}>
          <span className="national-name">{name}</span>
          {ev ? (
            ev.outcomes.slice(0, 2).map((o) => (
              <span className={`national-odds p-${outcomeParty(o.label)}`} key={o.label}>
                {o.label.replace("Party", "").trim()} {(o.prob * 100).toFixed(0)}¢
              </span>
            ))
          ) : (
            <span className="national-odds">…</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [national, setNational] = useState(null);
  // usps -> { party, prob } for the market favorite, drives map fill.
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    fetchNationalOdds().then(setNational).catch(() => {});

    // Load all race odds for the choropleth. Fired concurrently; each state
    // paints as its market answers, and failures just leave neutral fill.
    let alive = true;
    Object.entries(SENATE_RACES).forEach(([usps, race]) => {
      if (!race?.polymarketSlug) return;
      fetchEventOdds(race.polymarketSlug)
        .then((d) => {
          if (!alive || !d?.outcomes?.length) return;
          const top = d.outcomes[0];
          setFavorites((prev) => ({
            ...prev,
            [usps]: { party: outcomeParty(top.label, race), prob: top.prob, label: top.label },
          }));
        })
        .catch(() => {});
    });
    return () => {
      alive = false;
    };
  }, []);

  const fills = useMemo(() => {
    const out = {};
    for (const [usps, fav] of Object.entries(favorites)) {
      const c = fillColor(fav.party, fav.prob);
      if (c) out[usps] = c;
    }
    return out;
  }, [favorites]);

  const board = useMemo(() => {
    return Object.entries(favorites)
      .map(([usps, f]) => ({ usps, ...f }))
      .sort((a, b) => Math.abs(0.5 - a.prob) - Math.abs(0.5 - b.prob))
      .slice(0, 8);
  }, [favorites]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">Ballot</span>Book
          <span className="brand-sub">2026 midterm markets</span>
        </div>
        <NationalStrip national={national} />
      </header>

      <main className="layout">
        <section className="map-col">
          <USMap fills={fills} selected={selected} onSelect={setSelected} />

          <div className="legend">
            <span><i className="swatch sw-d" /> Dem favorite</span>
            <span><i className="swatch sw-r" /> GOP favorite</span>
            <span><i className="swatch sw-i" /> Independent</span>
            <span><i className="swatch sw-n" /> No 2026 Senate race</span>
            <span className="legend-note">deeper = more confident</span>
          </div>

          <div className="board">
            <h3>Closest races on the board</h3>
            {board.length === 0 && <div className="odds-loading">Loading markets…</div>}
            {board.map((r) => (
              <button
                key={r.usps}
                className={`board-row ${selected === r.usps ? "board-row--active" : ""}`}
                onClick={() => setSelected(r.usps)}
              >
                <span className="board-state">{NAME_BY_USPS[r.usps]}</span>
                <span className={`board-fav p-${r.party}`}>{r.label}</span>
                <span className="board-prob">{(r.prob * 100).toFixed(0)}¢</span>
                <span className={`board-rating rating-${ratingFromProb(r.prob).toLowerCase()}`}>
                  {ratingFromProb(r.prob)}
                </span>
              </button>
            ))}
          </div>
        </section>

        <aside className="panel-col">
          <StatePanel
            usps={selected}
            stateName={selected ? NAME_BY_USPS[selected] : null}
          />
        </aside>
      </main>

      <footer className="footer">
        Odds via Polymarket's public Gamma API · candidate info is an editorial
        snapshot, verify before relying on it · not investment or wagering advice
      </footer>
    </div>
  );
}
