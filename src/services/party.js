// Map a Polymarket outcome label to a party bucket: 'd' | 'r' | 'i' | 'u'.
// Labels come in three shapes:
//   "Democrat" / "Republican" / "Independent"   (party-level markets)
//   "Juliana Stratton (D)"                      (candidate w/ suffix)
//   "Mary Peltola"                              (bare candidate name)
// For bare names we fall back to the seeded candidate list for that race.
export function outcomeParty(label, race) {
  const l = (label || "").toLowerCase();
  if (l.includes("democrat")) return "d";
  if (l.includes("republican")) return "r";
  if (l.includes("independent") || l.includes("other")) return "i";
  const suffix = l.match(/\((d|r|i)\)/);
  if (suffix) return suffix[1];
  const hit = race?.candidates?.find((c) =>
    l.includes(c.name.toLowerCase().split(" ").pop())
  );
  return hit ? hit.party.toLowerCase() : "u";
}
