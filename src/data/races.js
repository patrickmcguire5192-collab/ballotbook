// 2026 Senate race seed data, keyed by USPS state code.
//
// `polymarketSlug` values were each verified live against the Gamma API
// (Aug 2026) — several don't follow the common pattern (e.g. Alabama has a
// numeric suffix), so do NOT regenerate them from a template.
//
// Candidate bios / platforms / polling are a curated editorial snapshot
// (compiled Aug 3, 2026 from cited public reporting), NOT live data. Odds are
// live. Ratings are intentionally absent here: they are derived at runtime
// from market prices (see ratingFromProb in App) so they can never go stale.
//
// `polls` entries are point-in-time snapshots with source + date so readers
// can judge freshness themselves.

export const SNAPSHOT_DATE = "2026-08-03";

export const SENATE_RACES = {
  AL: {
    seat: "Class 2",
    status: "Open — Tommy Tuberville (R) is running for Governor",
    polymarketSlug: "alabama-senate-election-winner-154",
    summary:
      "Deep-red open seat. The May primaries have already settled the nominees; the general is not expected to be competitive.",
    candidates: [],
    polls: [],
  },
  AK: {
    seat: "Class 2",
    status: "Incumbent Dan Sullivan (R) seeking a third term",
    polymarketSlug: "alaska-senate-election-winner",
    summary:
      "A genuine tossup. Former Rep. Mary Peltola's entry made this one of Democrats' best pickup chances; Alaska's ranked-choice general adds extra uncertainty.",
    candidates: [
      {
        name: "Mary Peltola",
        party: "D",
        bio: "Former U.S. Representative for Alaska at-large (2022–2025), the first Alaska Native elected to Congress. Yup'ik, from Bethel; former state legislator and fisheries manager.",
        platform: [
          "Fish, family, freedom — fisheries protection as economic policy",
          "Pro-resource-development but with local/Native consultation",
          "Abortion rights; frames it as government staying out of personal decisions",
          "Bipartisan record — touts votes with both parties in House",
        ],
      },
      {
        name: "Dan Sullivan",
        party: "R",
        bio: "Two-term incumbent senator, retired Marine Corps colonel, former Alaska attorney general and DNR commissioner. Elected 2014, re-elected 2020.",
        platform: [
          "Unlock Alaska resource projects (ANWR, Willow-style oil & gas)",
          "Military buildup in the Arctic; strong on defense",
          "Backs the Trump administration's energy agenda",
          "Public-lands transfers and permitting reform",
        ],
      },
    ],
    polls: [
      { src: "NYT/Siena", date: "Jun 2026", result: "Sullivan +2" },
      { src: "Multiple H1 polls", date: "Jan–Jun 2026", result: "Peltola led most" },
    ],
  },
  AR: {
    seat: "Class 2",
    status: "Incumbent Tom Cotton (R) seeking a third term",
    polymarketSlug: "arkansas-senate-election-winner",
    summary: "Safe Republican. Cotton faces no serious general-election threat.",
    candidates: [],
    polls: [],
  },
  CO: {
    seat: "Class 2",
    status: "Incumbent John Hickenlooper (D) seeking a second term",
    polymarketSlug: "colorado-senate-election-winner",
    summary: "Safe Democratic. Colorado has moved steadily blue in federal races.",
    candidates: [],
    polls: [],
  },
  DE: {
    seat: "Class 2",
    status: "Incumbent Chris Coons (D) seeking re-election",
    polymarketSlug: "delaware-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  FL: {
    seat: "Class 3 — special election",
    status: "Appointed incumbent Ashley Moody (R) defending Marco Rubio's old seat",
    polymarketSlug: "florida-senate-election-winner",
    summary:
      "Special election for the remainder of Rubio's term (he became Secretary of State). Moody, appointed in Jan 2025, is favored in a state that has trended red.",
    candidates: [
      {
        name: "Ashley Moody",
        party: "R",
        bio: "Appointed U.S. Senator since Jan 2025; previously Florida Attorney General (2019–2025) and a circuit judge.",
        platform: [
          "Border security and immigration enforcement",
          "Law-and-order record from AG tenure",
          "Aligned with the Trump administration's agenda",
        ],
      },
    ],
    polls: [],
  },
  GA: {
    seat: "Class 2",
    status: "Incumbent Jon Ossoff (D) seeking a second term",
    polymarketSlug: "georgia-senate-election-winner",
    summary:
      "Once billed as the GOP's top target, the race moved sharply toward Ossoff after Gov. Kemp passed and Rep. Mike Collins won a bruising June runoff over Kemp-backed Derek Dooley. Markets now price Ossoff as a heavy favorite.",
    candidates: [
      {
        name: "Jon Ossoff",
        party: "D",
        bio: "First-term senator, elected in the Jan 2021 runoff; former investigative journalist. At 39, the youngest sitting Democratic senator.",
        platform: [
          "Anti-corruption: stock-trading ban for members of Congress",
          "Health care costs — insulin caps, ACA subsidy extension",
          "Infrastructure and Georgia jobs (touts CHIPS-era wins)",
          "Voting rights legislation",
        ],
      },
      {
        name: "Mike Collins",
        party: "R",
        bio: "U.S. Representative (GA-10) since 2023; trucking-company owner and son of former Rep. Mac Collins. Won the GOP runoff with a late Trump endorsement.",
        platform: [
          "Full alignment with the Trump agenda",
          "Immigration enforcement hard-liner",
          "Trucking/small-business deregulation",
          "Culture-war messaging is central to the campaign",
        ],
      },
    ],
    polls: [
      { src: "GOP runoff result", date: "Jun 2026", result: "Collins beat Dooley by 10+" },
    ],
  },
  HI: null,
  ID: {
    seat: "Class 2",
    status: "Incumbent Jim Risch (R) seeking a fourth term",
    polymarketSlug: "idaho-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  IL: {
    seat: "Class 2",
    status: "Open — Dick Durbin (D) retiring after five terms",
    polymarketSlug: "illinois-senate-election-winner",
    summary:
      "Lt. Gov. Juliana Stratton won the Democratic primary and is a heavy favorite in deep-blue Illinois.",
    candidates: [
      {
        name: "Juliana Stratton",
        party: "D",
        bio: "Illinois Lieutenant Governor since 2019; former state representative from Chicago's South Side. Would be Illinois' first Black woman senator.",
        platform: [
          "Criminal-justice reform (led IL justice initiatives as Lt. Gov.)",
          "Abortion rights and maternal health",
          "Union labor and minimum-wage protections",
        ],
      },
      {
        name: "Don Tracy",
        party: "R",
        bio: "Springfield attorney and businessman; former chair of the Illinois Republican Party (2021–2024).",
        platform: [
          "Tax and spending restraint",
          "Crime and public-safety messaging aimed at Chicago",
        ],
      },
    ],
    polls: [],
  },
  IA: {
    seat: "Class 2",
    status: "Open — Joni Ernst (R) retiring",
    polymarketSlug: "iowa-senate-election-winner",
    summary:
      "Sleeper tossup. Rep. Ashley Hinson consolidated the GOP side after Ernst's retirement; state Rep. and Paralympian Josh Turek has kept polls essentially tied since March.",
    candidates: [
      {
        name: "Ashley Hinson",
        party: "R",
        bio: "U.S. Representative (IA-02) since 2021; former TV news anchor and state legislator from Marion. Trump-endorsed for the open seat.",
        platform: [
          "Farm economy: ethanol/E15, trade deals for ag exports",
          "Border security; fentanyl interdiction",
          "Parental rights in education",
          "Cut federal spending outside farm programs",
        ],
      },
      {
        name: "Josh Turek",
        party: "D",
        bio: "Two-term state representative from Council Bluffs and two-time Paralympic gold medalist in wheelchair basketball. Runs on a blue-collar, rural-revival message.",
        platform: [
          "Rural hospital rescue and Medicaid protection — his signature issue",
          "Disability rights and veterans' care",
          "Anti-corporate-consolidation in agriculture (packer reform)",
          "Social Security protection",
        ],
      },
    ],
    polls: [
      { src: "Poll average", date: "Mar–Jul 2026", result: "Tied ~46–46" },
      { src: "NYT/Siena", date: "Jun–Jul 2026", result: "Slight GOP edge" },
    ],
  },
  KS: {
    seat: "Class 2",
    status: "Incumbent Roger Marshall (R) seeking a second term",
    polymarketSlug: "kansas-senate-election-winner",
    summary:
      "Likely Republican, but Democrats see an outside shot in a strong national environment — Kansas has elected Democratic governors and markets give the GOP only ~5-in-6 odds.",
    candidates: [],
    polls: [],
  },
  KY: {
    seat: "Class 2",
    status: "Open — Mitch McConnell retiring after seven terms",
    polymarketSlug: "kentucky-senate-election-winner",
    summary:
      "Rep. Andy Barr emerged with the GOP nomination for McConnell's seat; former state Rep. Charles Booker carries the Democratic banner again. Kentucky remains solidly red federally.",
    candidates: [
      {
        name: "Andy Barr",
        party: "R",
        bio: "U.S. Representative (KY-06) since 2013; senior member of House Financial Services. Won a competitive primary with Trump's backing.",
        platform: [
          "Banking/financial deregulation",
          "Coal and energy-state economics",
          "Trump-agenda alignment",
        ],
      },
      {
        name: "Charles Booker",
        party: "D",
        bio: "Former state representative from Louisville; 2022 Senate nominee (lost to Rand Paul). Progressive, known for the 'hood to the holler' message.",
        platform: [
          "Medicare for All",
          "Universal basic income pilots; anti-poverty focus",
          "Criminal-justice reform",
        ],
      },
    ],
    polls: [],
  },
  LA: {
    seat: "Class 2",
    status: "Incumbent Bill Cassidy (R) seeking a third term",
    polymarketSlug: "louisiana-senate-election-winner",
    summary:
      "Safe Republican seat, though Cassidy's impeachment vote made his primary the real contest.",
    candidates: [],
    polls: [],
  },
  ME: {
    seat: "Class 2",
    status: "Incumbent Susan Collins (R) seeking a sixth term",
    polymarketSlug: "maine-senate-election-winner",
    summary:
      "The wildest race of the cycle — and Polymarket's highest-volume state market ($1.1M+). Oysterman Graham Platner won the June primary, then withdrew amid an assault allegation; a July 25 convention nominated Troy Jackson. Markets still favor the Democratic side ~2:1 in a state Collins has never lost.",
    candidates: [
      {
        name: "Troy Jackson",
        party: "D",
        bio: "Logger from Allagash and former President of the Maine Senate. Chosen by convention on July 25, 2026 after primary winner Graham Platner withdrew. Blue-collar populist with deep rural-Maine roots.",
        platform: [
          "Prescription-drug importation and price caps (led Maine bills)",
          "Pro-union labor record; forest-products economy",
          "Rural broadband and heating-cost relief",
          "Runs against 'out-of-state money' in Maine politics",
        ],
      },
      {
        name: "Susan Collins",
        party: "R",
        bio: "Six-term incumbent, first elected 1996; chair of Senate Appropriations. The last New England Republican in Congress and famous for outrunning polls — won 2020 by 8 after trailing all year.",
        platform: [
          "Appropriations seniority delivers for Maine (shipbuilding, bases)",
          "Moderate brand: pro-choice votes, occasional Trump breaks",
          "Bipartisan dealmaking record",
        ],
      },
    ],
    polls: [
      { src: "NYT/Siena", date: "Jun–Jul 2026", result: "Democrat led pre-swap" },
      { src: "Post-nomination", date: "Jul 2026", result: "Few public polls of Jackson-Collins yet" },
    ],
  },
  MA: {
    seat: "Class 2",
    status: "Incumbent Ed Markey (D) seeking re-election",
    polymarketSlug: "massachusetts-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  MI: {
    seat: "Class 2",
    status: "Open — Gary Peters (D) retiring",
    polymarketSlug: "michigan-senate-election-winner",
    summary:
      "Democratic primary is TOMORROW (Aug 4): progressive Abdul El-Sayed (Sanders/AOC-backed) vs. moderate Rep. Haley Stevens, after Mallory McMorrow suspended her campaign in July. Winner faces Trump-backed Mike Rogers, the 2024 near-miss nominee.",
    candidates: [
      {
        name: "Abdul El-Sayed",
        party: "D",
        bio: "Physician and epidemiologist; former Detroit health director and Wayne County health chief; 2018 gubernatorial candidate. Frontrunner in late primary polls.",
        platform: [
          "Medicare for All — signature issue",
          "Anti-corporate-money campaign (no corporate PAC funds)",
          "Water infrastructure (Flint/Detroit legacy focus)",
        ],
      },
      {
        name: "Haley Stevens",
        party: "D",
        bio: "U.S. Representative (MI-11) since 2019; former Obama auto-rescue task force chief of staff. Runs on manufacturing and suburban-moderate appeal.",
        platform: [
          "Auto-industry and advanced-manufacturing jobs",
          "Anti-tariff-chaos economic message",
          "Abortion rights",
        ],
      },
      {
        name: "Mike Rogers",
        party: "R",
        bio: "Former U.S. Representative and House Intelligence Committee chair; former FBI agent. Lost the 2024 Senate race to Elissa Slotkin by ~19,000 votes. Unopposed for the GOP nod, Trump-endorsed.",
        platform: [
          "China hawk; national-security résumé",
          "Manufacturing tax incentives",
          "Border enforcement",
        ],
      },
    ],
    polls: [
      { src: "Primary polling", date: "Jul 2026", result: "El-Sayed emerged as frontrunner" },
      { src: "General matchups", date: "H1 2026", result: "Either Democrat leads Rogers modestly" },
    ],
  },
  MN: {
    seat: "Class 2",
    status: "Open — Tina Smith (D) retiring",
    polymarketSlug: "minnesota-senate-election-winner",
    summary:
      "Democrats favored to hold; the DFL primary (Aug 11) has Lt. Gov. Peggy Flanagan as the highest-profile name in the field.",
    candidates: [],
    polls: [],
  },
  MS: {
    seat: "Class 2",
    status: "Incumbent Cindy Hyde-Smith (R) seeking re-election",
    polymarketSlug: "mississippi-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  MO: null,
  MT: {
    seat: "Class 2",
    status: "Incumbent Steve Daines (R) seeking a third term",
    polymarketSlug: "montana-senate-election-winner",
    summary:
      "Watch the independent lane: former University of Montana president Seth Bodnar is running as an independent with Jon Tester's blessing, and markets give him a real ~1-in-5 shot — Democrats are effectively ceding the two-way.",
    candidates: [
      {
        name: "Steve Daines",
        party: "R",
        bio: "Two-term incumbent; former Procter & Gamble executive and congressman. Chaired the NRSC in 2024's GOP sweep.",
        platform: [
          "Public-lands access with resource development",
          "Tax cuts; Trump-agenda alignment",
        ],
      },
      {
        name: "Seth Bodnar",
        party: "I",
        bio: "Former University of Montana president (2018–2025); ex-Green Beret and Rhodes Scholar; former GE executive. Running as an independent with backing from former Sen. Jon Tester.",
        platform: [
          "Anti-partisan 'Montana first' framing",
          "Public-lands protection",
          "Housing affordability — top state issue",
        ],
      },
    ],
    polls: [],
  },
  NE: {
    seat: "Class 2",
    status: "Incumbent Pete Ricketts (R) seeking a full term",
    polymarketSlug: "nebraska-senate-election-winner",
    summary:
      "Osborn II: industrial mechanic Dan Osborn — who came within 7 of Deb Fischer in 2024 while Trump won the state by 20+ — qualified for the November ballot on July 16 to face Ricketts. No Democrat in the race; markets price the independent at ~25%.",
    candidates: [
      {
        name: "Pete Ricketts",
        party: "R",
        bio: "Incumbent senator (appointed 2023, won 2024 special); two-term former governor; son of TD Ameritrade founder Joe Ricketts.",
        platform: [
          "Ag trade and ethanol",
          "Fiscal conservatism; family-business framing",
          "Trump-agenda alignment",
        ],
      },
      {
        name: "Dan Osborn",
        party: "I",
        bio: "Steamfitter and Navy veteran who led the 2021 Kellogg's strike in Omaha. His independent 2024 run against Fischer was the shock overperformance of that cycle.",
        platform: [
          "Pro-labor: right-to-organize, rail-safety, overtime protections",
          "Term limits and anti-corporate-PAC message",
          "Refuses both parties' endorsements",
        ],
      },
    ],
    polls: [
      { src: "2024 baseline", date: "Nov 2024", result: "Osborn lost to Fischer by <7" },
    ],
  },
  NV: null,
  NH: {
    seat: "Class 2",
    status: "Open — Jeanne Shaheen (D) retiring",
    polymarketSlug: "new-hampshire-senate-election-winner",
    summary:
      "Rep. Chris Pappas cleared the Democratic field and holds consistent mid-single-digit leads. The September GOP primary features Scott Brown among others.",
    candidates: [
      {
        name: "Chris Pappas",
        party: "D",
        bio: "U.S. Representative (NH-01) since 2019; family runs Manchester's Puritan Backroom restaurant. First openly gay member of Congress from NH.",
        platform: [
          "Affordability: housing, energy, child care",
          "Veterans' services (leads House VA panel work)",
          "Abortion rights codification",
        ],
      },
    ],
    polls: [
      { src: "Public polls", date: "H1 2026", result: "Pappas +4 to +6 consistently" },
    ],
  },
  NJ: {
    seat: "Class 2",
    status: "Incumbent Cory Booker (D) seeking a third full term",
    polymarketSlug: "new-jersey-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  NM: {
    seat: "Class 2",
    status: "Incumbent Ben Ray Luján (D) seeking a second term",
    polymarketSlug: "new-mexico-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  NC: {
    seat: "Class 2",
    status: "Open — Thom Tillis (R) retiring",
    polymarketSlug: "north-carolina-senate-election-winner",
    summary:
      "Democrats' clearest flip opportunity. Former two-term Gov. Roy Cooper — who has never lost a statewide race — faces former RNC chair Michael Whatley. July polls range Cooper +4 to +9, and markets have moved to ~90/10.",
    candidates: [
      {
        name: "Roy Cooper",
        party: "D",
        bio: "Governor of North Carolina 2017–2025; four-term attorney general before that. Undefeated statewide since 2000 in a state Trump carried three times.",
        platform: [
          "Medicaid expansion legacy (signed NC's 2023 expansion)",
          "Public-school funding; teacher pay",
          "Clean-energy economy (offshore wind, EV plants)",
          "Centrists-first campaign style, rural outreach",
        ],
      },
      {
        name: "Michael Whatley",
        party: "R",
        bio: "Former RNC chairman (2024–2025) and former NC GOP chair. First run for public office; recruited by Trump for the seat.",
        platform: [
          "Full Trump-agenda alignment",
          "Election-integrity messaging (his RNC portfolio)",
          "Energy dominance / offshore drilling",
        ],
      },
    ],
    polls: [
      { src: "Fox News", date: "Jul 23–27, 2026", result: "Cooper +9 (53–44)" },
      { src: "PPP", date: "Jul 10–11, 2026", result: "Cooper +4 (48–44)" },
    ],
  },
  ND: null,
  OH: {
    seat: "Class 3 — special election",
    status: "Appointed incumbent Jon Husted (R) defending JD Vance's old seat",
    polymarketSlug: "ohio-senate-election-winner",
    summary:
      "The closest race in the country — markets literally 51/49. Sherrod Brown attempts a comeback for the seat's final two years against appointed Sen. Jon Husted. Polls whipsaw: Emerson had Husted +6 early; Fox News had Brown +8 in June.",
    candidates: [
      {
        name: "Sherrod Brown",
        party: "D",
        bio: "Three-term senator (2007–2025) who lost to Bernie Moreno in 2024; former congressman and Ohio secretary of state. The last Democrat to win statewide in Ohio.",
        platform: [
          "'Dignity of work' economic populism",
          "Anti-NAFTA/pro-tariff trade record predating Trump",
          "Social Security and pension protection (Butch Lewis Act)",
          "Rail safety (East Palestine legacy)",
        ],
      },
      {
        name: "Jon Husted",
        party: "R",
        bio: "Appointed senator since Jan 2025; former lieutenant governor, secretary of state, and speaker of the Ohio House. First statewide loss would end a 25-year unbeaten run.",
        platform: [
          "Tech/workforce development (InnovateOhio brand)",
          "Deregulation and business climate",
          "Trump-agenda alignment on immigration and energy",
        ],
      },
    ],
    polls: [
      { src: "Fox News", date: "Jun 2026", result: "Brown +8 (53–45)" },
      { src: "Emerson", date: "Early 2026", result: "Husted +6" },
    ],
  },
  OK: {
    seat: "Class 2",
    status: "Incumbent Markwayne Mullin (R) seeking a full term",
    polymarketSlug: "oklahoma-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  OR: {
    seat: "Class 2",
    status: "Incumbent Jeff Merkley (D) seeking a fourth term",
    polymarketSlug: "oregon-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  RI: {
    seat: "Class 2",
    status: "Incumbent Jack Reed (D) seeking re-election",
    polymarketSlug: "rhode-island-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  SC: {
    seat: "Class 2",
    status: "Incumbent Lindsey Graham (R) seeking a fifth term",
    polymarketSlug: "south-carolina-senate-election-winner",
    summary:
      "Safe-to-likely Republican; Graham's real fight was the primary. Markets give Democrats ~10%.",
    candidates: [],
    polls: [],
  },
  SD: {
    seat: "Class 2",
    status: "Incumbent Mike Rounds (R) seeking a third term",
    polymarketSlug: "south-dakota-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  TN: {
    seat: "Class 2",
    status: "Incumbent Bill Hagerty (R) seeking a second term",
    polymarketSlug: "tennessee-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  TX: {
    seat: "Class 2",
    status: "Open for the GOP — Ken Paxton beat John Cornyn in the primary",
    polymarketSlug: "texas-senate-election-winner",
    summary:
      "The marquee race of the cycle by volume ($650k+). AG Ken Paxton ousted four-term Sen. John Cornyn for the nomination; state Rep. James Talarico leads recent polls (+5 TPOR in July, up from +3 in May) with the best net favorability of any Texas figure tested. Markets still narrowly favor Paxton — a fascinating polls-vs-markets divergence.",
    candidates: [
      {
        name: "Ken Paxton",
        party: "R",
        bio: "Texas Attorney General since 2015. Survived a 2023 impeachment (acquitted by the state Senate) and a securities-fraud saga. Beat Cornyn with grassroots MAGA support.",
        platform: [
          "Sue-the-feds litigation record (100+ suits vs. Biden admin)",
          "Election-fraud enforcement",
          "Border: Operation Lone Star legal architecture",
          "Anti-ESG, anti-Big-Tech suits",
        ],
      },
      {
        name: "James Talarico",
        party: "D",
        bio: "State representative from Austin since 2019; former middle-school teacher and Presbyterian seminarian. Viral for scripture-quoting floor speeches; at 37 would be one of the youngest senators.",
        platform: [
          "Public-school funding; vouchers opposition — signature fight",
          "Faith-forward progressive framing ('Christianity is about the poor')",
          "Teacher pay raises",
          "Marijuana legalization; abortion-ban rollback",
        ],
      },
    ],
    polls: [
      { src: "TPOR", date: "Jul 15–17, 2026", result: "Talarico +5 (45–40)" },
      { src: "TPOR", date: "May 2026", result: "Talarico +3" },
    ],
  },
  UT: null,
  VA: {
    seat: "Class 2",
    status: "Incumbent Mark Warner (D) seeking a fourth term",
    polymarketSlug: "virginia-senate-election-winner",
    summary: "Safe Democratic.",
    candidates: [],
    polls: [],
  },
  WV: {
    seat: "Class 2",
    status: "Incumbent Shelley Moore Capito (R) seeking a third term",
    polymarketSlug: "west-virginia-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
  WY: {
    seat: "Class 2",
    status: "Incumbent Cynthia Lummis (R) seeking a second term",
    polymarketSlug: "wyoming-senate-election-winner",
    summary: "Safe Republican.",
    candidates: [],
    polls: [],
  },
};

// States with NO 2026 Senate race (Class 1/3 seats not up). Shown in the
// panel with House info only.
export const NO_SENATE_RACE = new Set([
  "AZ", "CA", "CT", "HI", "IN", "MD", "MO", "NV", "NY", "ND",
  "PA", "UT", "VT", "WA", "WI", "DC",
]);

// House: per-state district counts (2020 apportionment) + curated notes for
// states with marquee 2026 House battlegrounds. National control odds come
// from the live Polymarket header market, not from here.
export const HOUSE_DISTRICTS = {
  AL: 7, AK: 1, AZ: 9, AR: 4, CA: 52, CO: 8, CT: 5, DE: 1, FL: 28, GA: 14,
  HI: 2, ID: 2, IL: 17, IN: 9, IA: 4, KS: 4, KY: 6, LA: 6, ME: 2, MD: 8,
  MA: 9, MI: 13, MN: 8, MS: 4, MO: 8, MT: 2, NE: 3, NV: 4, NH: 2, NJ: 12,
  NM: 3, NY: 26, NC: 14, ND: 1, OH: 15, OK: 5, OR: 6, PA: 17, RI: 2, SC: 7,
  SD: 1, TN: 9, TX: 38, UT: 4, VT: 1, VA: 11, WA: 10, WV: 2, WI: 8, WY: 1,
  DC: 0,
};

export const HOUSE_NOTES = {
  AZ: "AZ-01 and AZ-06 (both Phoenix/Tucson suburbs) are perennial tossups.",
  CA: "A handful of Central Valley and Orange County seats (CA-13, CA-22, CA-27, CA-45) anchor the national battleground.",
  CO: "CO-08, the state's newest district, has flipped every cycle since it was created.",
  IA: "All four districts are R-held but IA-01 and IA-03 are competitive in wave years.",
  ME: "ME-02 (the Trump-won northern district) is open if its incumbent runs statewide, and is always contested.",
  MI: "MI-07 and MI-08 (mid-Michigan) plus MI-10 (Macomb) are among the country's most contested open/swing seats.",
  NE: "NE-02 ('the blue dot') around Omaha is a top Democratic target every cycle.",
  NJ: "NJ-07 has flipped repeatedly; a top DCCC target.",
  NY: "NY-04, NY-17, NY-19, NY-22 — the Hudson Valley/Long Island cluster that decided the House in 2022 and 2024.",
  NC: "Post-redistricting map leaves NC-01 as the main competitive seat.",
  OH: "OH-09 (Kaptur) and OH-13 (Sykes) are top GOP targets under the redrawn map.",
  PA: "PA-07, PA-08, PA-10 — the Lehigh Valley/NEPA trio remains decisive.",
  TX: "Mid-decade redistricting (2025) redrew several Democratic seats — south Texas (TX-28, TX-34) and the new maps are under litigation.",
  VA: "VA-02 and VA-07 are the commonwealth's swing seats.",
  WA: "WA-03 (Gluesenkamp Perez) is the House's most famous crossover district.",
  WI: "WI-01 and WI-03 are competitive under the less-gerrymandered map.",
};
