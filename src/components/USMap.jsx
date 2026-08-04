import { useMemo, useState } from "react";
import { geoPath, geoAlbersUsa } from "d3-geo";
import { feature } from "topojson-client";
import statesTopo from "us-atlas/states-10m.json";
import { uspsFromFips, nameFromFips } from "../data/fips.js";

const W = 975;
const H = 610;

// Build geometry once at module load — it's static.
const projection = geoAlbersUsa().scale(1300).translate([W / 2, H / 2]);
const path = geoPath(projection);
const STATES = feature(statesTopo, statesTopo.objects.states)
  .features.map((f) => ({
    id: String(f.id).padStart(2, "0"),
    usps: uspsFromFips(f.id),
    name: nameFromFips(f.id),
    d: path(f),
  }))
  // Territories aren't projectable by geoAlbersUsa and have no USPS entry.
  .filter((s) => s.usps && s.d);

/**
 * fills: { [usps]: cssColor } — computed by the parent from live odds.
 * selected: usps or null.
 */
export default function USMap({ fills, selected, onSelect }) {
  const [hovered, setHovered] = useState(null);

  const label = useMemo(() => {
    const s = STATES.find((x) => x.usps === hovered);
    return s ? s.name : null;
  }, [hovered]);

  return (
    <div className="usmap-wrap">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="US map of 2026 election markets"
        className="usmap"
      >
        {STATES.map((s) => (
          <path
            key={s.id}
            d={s.d}
            className={[
              "state",
              selected === s.usps ? "state--selected" : "",
              hovered === s.usps ? "state--hovered" : "",
            ].join(" ")}
            fill={fills[s.usps] || "var(--map-none)"}
            onMouseEnter={() => setHovered(s.usps)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(s.usps === selected ? null : s.usps)}
          >
            <title>{s.name}</title>
          </path>
        ))}
      </svg>
      <div className="usmap-hoverlabel">{label ?? " "}</div>
    </div>
  );
}
