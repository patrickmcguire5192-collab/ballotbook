import { useEffect, useState } from "react";
import {
  SENATE_RACES,
  HOUSE_DISTRICTS,
  HOUSE_NOTES,
  SNAPSHOT_DATE,
} from "../data/races.js";
import { fetchEventOdds } from "../services/polymarket.js";
import { outcomeParty } from "../services/party.js";
import { checkRace } from "../services/staleness.js";

const PARTY_LABEL = { D: "Democrat", R: "Republican", I: "Independent" };

function OddsBars({ odds, race }) {
  if (!odds) return null;
  const shown = odds.outcomes.filter((o) => o.prob >= 0.005).slice(0, 6);
  return (
    <div className="oddsbars">
      {shown.map((o) => (
        <div className="oddsbar" key={o.label}>
          <span className="oddsbar-label">{o.label}</span>
          <div className="oddsbar-track">
            <div
              className={`oddsbar-fill p-${outcomeParty(o.label, race)}`}
              style={{ width: `${Math.max(o.prob * 100, 1.5)}%` }}
            />
          </div>
          <span className="oddsbar-pct">{(o.prob * 100).toFixed(0)}¢</span>
        </div>
      ))}
      <div className="odds-meta">
        Polymarket · ${Math.round(odds.volume).toLocaleString()} traded ·
        prices = implied probability
      </div>
    </div>
  );
}

const STATUS_LABEL = {
  presumptive: "presumptive nominee",
  primary_pending: "primary pending",
};

function CandidateCard({ c }) {
  return (
    <div className={`candidate p-border-${c.party.toLowerCase()}`}>
      <div className="candidate-head">
        <span className="candidate-name">{c.name}</span>
        <span className="candidate-chips">
          {STATUS_LABEL[c.status] && (
            <span className="status-chip">{STATUS_LABEL[c.status]}</span>
          )}
          <span className={`party-chip p-${c.party.toLowerCase()}`}>
            {PARTY_LABEL[c.party] ?? c.party}
          </span>
        </span>
      </div>
      <p className="candidate-bio">{c.bio}</p>
      {c.platform?.length > 0 && (
        <ul className="platform">
          {c.platform.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function StatePanel({ usps, stateName, onOdds }) {
  const race = SENATE_RACES[usps] || null;
  const [odds, setOdds] = useState(null);
  const [oddsErr, setOddsErr] = useState(false);

  useEffect(() => {
    setOdds(null);
    setOddsErr(false);
    if (!race?.polymarketSlug) return;
    let alive = true;
    fetchEventOdds(race.polymarketSlug)
      .then((d) => {
        if (!alive) return;
        setOdds(d);
        onOdds?.(usps, d);
      })
      .catch(() => alive && setOddsErr(true));
    return () => {
      alive = false;
    };
  }, [usps]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!usps) {
    return (
      <div className="panel panel-empty">
        <h2>Select a state</h2>
        <p>
          Click any state to see its 2026 Senate race — candidates, platforms,
          latest polling, and live prediction-market odds — plus a House
          outlook.
        </p>
        <p className="fineprint">
          35 Senate seats are on the ballot Nov 3, 2026. Colors on the map show
          the live market favorite; deeper color = higher confidence.
        </p>
      </div>
    );
  }

  const houseSeats = HOUSE_DISTRICTS[usps];
  const houseNote = HOUSE_NOTES[usps];
  // Free: compares the dated seed against the calendar and the live odds we
  // already fetched. No extra network, no background job.
  const stale = checkRace(usps, race, odds);

  return (
    <div className="panel" key={usps}>
      <div className="panel-header">
        <h2>{stateName}</h2>
        {race && <span className="seat-tag">{race.seat}</span>}
      </div>

      {race ? (
        <>
          <section className="panel-section">
            <h3>Senate 2026</h3>
            <div className="race-status">{race.status}</div>
            {stale && <div className="stale-flag">⚠ {stale.message}</div>}
            {race.primaryNote && (
              <div className="primary-note">{race.primaryNote}</div>
            )}
            <p className="race-summary">{race.summary}</p>

            {oddsErr && (
              <div className="odds-error">
                Live odds unavailable right now — Polymarket may be
                rate-limiting. Try again shortly.
              </div>
            )}
            {odds ? (
              <OddsBars odds={odds} race={race} />
            ) : (
              !oddsErr && <div className="odds-loading">Loading live odds…</div>
            )}
          </section>

          {race.candidates.length > 0 && (
            <section className="panel-section">
              <h3>Candidates</h3>
              {race.candidates.map((c) => (
                <CandidateCard c={c} key={c.name} />
              ))}
            </section>
          )}

          {race.polls.length > 0 && (
            <section className="panel-section">
              <h3>Recent polling</h3>
              <table className="polls">
                <tbody>
                  {race.polls.map((p, i) => (
                    <tr key={i}>
                      <td>{p.src}</td>
                      <td>{p.date}</td>
                      <td className="poll-result">{p.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </>
      ) : (
        <section className="panel-section">
          <h3>Senate</h3>
          <p className="race-summary">
            No U.S. Senate seat from {stateName} is on the 2026 ballot.
          </p>
        </section>
      )}

      <section className="panel-section">
        <h3>House 2026</h3>
        <p className="race-summary">
          {stateName} elects {houseSeats === 1 ? "its single member" : `${houseSeats} members`} of
          the U.S. House this November.
          {houseNote ? ` ${houseNote}` : ""}
        </p>
      </section>

      <div className="fineprint">
        Bios, platforms &amp; polls: editorial snapshot as of {SNAPSHOT_DATE}.
        Odds: live from Polymarket. Nothing here is wagering advice.
      </div>
    </div>
  );
}
