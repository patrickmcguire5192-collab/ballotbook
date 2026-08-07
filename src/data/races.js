// 2026 Senate race seed data, keyed by USPS state code.
//
// `polymarketSlug` values were each verified live against the Gamma API
// (Aug 2026) — several don't follow the common pattern (e.g. Alabama has a
// numeric suffix), so do NOT regenerate them from a template.
//
// Candidate bios / platforms / polling are a curated editorial snapshot
// (compiled Aug 3, 2026 from cited public reporting and independently
// fact-checked), NOT live data. Odds are live. Ratings are intentionally
// absent here: they are derived at runtime from market prices (see
// ratingFromProb in App) so they can never go stale.
//
// Candidate `status`: omitted = nominee; "presumptive" and "primary_pending"
// render as chips (several primaries are still ahead: MN & SC-special Aug 11,
// FL/WY Aug 18, OK-D runoff Aug 25, MA Sep 1, NH/RI Sep 8, DE Sep 15).

export const SNAPSHOT_DATE = "2026-08-07";

export const SENATE_RACES = {
  AL: {
    seat: "Class 2",
    status: "Open — Tommy Tuberville (R) is running for Governor",
    polymarketSlug: "alabama-senate-election-winner-154",
    primaryNote:
      "Primary May 19, runoffs June 16 — Moore won the GOP runoff with 58.7%; Wess won the Democratic runoff.",
    summary:
      "Deep-red open seat. Rep. Barry Moore won a Trump-backed runoff over ex-Navy SEAL Jared Hudson; the general is not expected to be competitive.",
    candidates: [
      {
        name: "Barry Moore",
        party: "R",
        bio: "U.S. Representative since 2021 (now AL-01) and former eight-year state legislator from Enterprise. Auburn agricultural-science graduate, Alabama National Guard veteran, and founder of an industrial waste-hauling company; one of the earliest Alabama officials to back Donald Trump.",
        platform: [
          "Border security and immigration enforcement",
          "Veterans' care and VA reform",
          "Gun rights",
          "Support for the Trump agenda",
        ],
      },
      {
        name: "Everett Wess",
        party: "D",
        bio: "Birmingham-area attorney and municipal court judge in Midfield; former city prosecutor and public defender. State president of the Alabama New South Coalition, a civic-engagement organization.",
        platform: [
          "Lowering the cost of living",
          "Voting rights and equal justice",
          "Affordable healthcare",
          "Quality public education",
        ],
      },
    ],
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
    primaryNote:
      "Primary was March 3 — Cotton won with 81.6%; Shoffner won the Democratic primary with 78.3%.",
    summary:
      "Safe Republican, though Democratic farmer Hallie Shoffner outraised Cotton in Q2 — a fundraising story, not yet a polling one.",
    candidates: [
      {
        name: "Tom Cotton",
        party: "R",
        bio: "Two-term incumbent, in the Senate since 2015 after one House term. Harvard Law graduate and Army veteran with combat tours in Iraq and Afghanistan; chairs the Senate Intelligence Committee and holds a GOP leadership post.",
        platform: [
          "National security and a hard line on China",
          "Border security",
          "Tough-on-crime policies",
          "Strengthening the military",
        ],
      },
      {
        name: "Hallie Shoffner",
        party: "D",
        bio: "Sixth-generation rice and soybean farmer from Newport with conservation and sustainable-agriculture experience. Vanderbilt graduate with a master's from the Clinton School of Public Service; outraised Cotton in Q2 2026 though he keeps a large cash advantage.",
        platform: [
          "A farm bill that supports family farmers",
          "Rural healthcare and keeping rural hospitals open",
          "An Arkansas-first economic plan",
          "Farmer- and community-owned renewable energy",
        ],
      },
    ],
    polls: [{ src: "GrayHouse", date: "Feb 2026", result: "Cotton +22 (58–36)" }],
  },
  CO: {
    seat: "Class 2",
    status: "Incumbent John Hickenlooper (D) seeking a second term",
    polymarketSlug: "colorado-senate-election-winner",
    primaryNote:
      "Primaries were June 30 — Hickenlooper beat progressive Julie Gonzales 52.8–47.2; Baisley was unopposed.",
    summary: "Safe Democratic. Colorado has moved steadily blue in federal races.",
    candidates: [
      {
        name: "John Hickenlooper",
        party: "D",
        bio: "Incumbent since 2020; two-term former governor and Denver mayor. Worked as a geologist and co-founded a Denver brewpub before politics. Survived a closer-than-expected primary against progressive state Sen. Julie Gonzales.",
        platform: [
          "Cost-of-living and affordability for Colorado families",
          "Climate and clean-energy investment",
          "Bipartisan dealmaking in the Senate",
        ],
      },
      {
        name: "Mark Baisley",
        party: "R",
        bio: "Colorado state senator (District 4) since 2023 and former state representative, with an aerospace/software career including Martin Marietta, Raytheon, and NASA JPL work. Switched from the governor's race in January 2026.",
        platform: [
          "Reliable energy, rural broadband, and water-storage infrastructure",
          "Health-care price transparency and competition",
          "Reducing federal regulation",
        ],
      },
    ],
    polls: [],
  },
  DE: {
    seat: "Class 2",
    status: "Incumbent Chris Coons (D) seeking a third full term",
    polymarketSlug: "delaware-senate-election-winner",
    primaryNote:
      "Primaries Sep 15 — Coons faces only minor opposition; the GOP primary is Katz (party-endorsed) vs. Shulli.",
    summary: "Safe Democratic.",
    candidates: [
      {
        name: "Chris Coons",
        party: "D",
        status: "presumptive",
        bio: "Incumbent since a 2010 special election; former New Castle County executive and a prominent Democratic foreign-policy voice. Announced re-election in June 2026 with about $6.7M raised by June 30.",
        platform: [
          "Lowering the cost of living for Delaware families",
          "Restoring U.S. standing internationally",
          "'Opportunity, security, and justice' agenda with a bipartisan approach",
        ],
      },
      {
        name: "Michael Katz",
        party: "R",
        status: "primary_pending",
        bio: "Anesthesiologist trained at Boston Children's/Harvard who also owns a real-estate company. Served in the Delaware State Senate as a Democrat and ran for U.S. Senate in 2024 as the Independent Party nominee; endorsed for 2026 by both the state GOP and the Independent Party of Delaware.",
        platform: [
          "Health-care affordability",
          "Economic opportunity",
          "Centrist coalition-building aimed at statewide electability",
        ],
      },
    ],
    polls: [],
  },
  FL: {
    seat: "Class 3 — special election",
    status: "Appointed incumbent Ashley Moody (R) defending Marco Rubio's old seat",
    polymarketSlug: "florida-senate-election-winner",
    primaryNote:
      "Both primaries Aug 18 — Moody heavily favored on the GOP side; the Democratic race is Vindman vs. Nixon.",
    summary:
      "Special election for the remainder of Rubio's term. Moody is favored, but the Democratic primary is a real story: impeachment-witness Alex Vindman has raised $16.7M against progressive state Rep. Angie Nixon's ~$625K.",
    candidates: [
      {
        name: "Ashley Moody",
        party: "R",
        status: "presumptive",
        bio: "Appointed U.S. Senator since Jan 2025 (named by Gov. DeSantis when Rubio became Secretary of State); previously Florida Attorney General (2019–2025), circuit judge, and federal prosecutor. About $10.8M raised through June 30.",
        platform: [
          "Border security and combating fentanyl trafficking (co-led the HALT Fentanyl Act)",
          "Law-and-order record from AG tenure",
          "Aligned with the Trump administration's agenda",
          "Disaster recovery and Florida agriculture",
        ],
      },
      {
        name: "Alex Vindman",
        party: "D",
        status: "primary_pending",
        bio: "Retired Army lieutenant colonel, Purple Heart recipient, and former NSC official known as a witness in the 2019 impeachment inquiry. Ukrainian-born immigrant and the Democratic field's fundraising leader (~$16.7M).",
        platform: [
          "Lowering housing, grocery, and insurance costs — incl. a federal homeowners-insurance backstop",
          "Adding dental and vision to Medicare; lower drug prices",
          "Immigration reform with a citizenship pathway for Dreamers",
          "Pragmatic, bipartisan framing",
        ],
      },
      {
        name: "Angie Nixon",
        party: "D",
        status: "primary_pending",
        bio: "Florida state representative from Jacksonville since 2020 and community organizer; a Democratic Socialists of America member running as the primary's progressive choice (~$625K raised through June).",
        platform: [
          "Reinstating ACA subsidies now; Medicare for All long-term",
          "Cracking down on corporate price-gouging; insurance reform",
          "Repealing the 2025 tax law's high-end cuts",
          "Expanding affordable-housing supply",
        ],
      },
    ],
    polls: [
      { src: "UNF PORL", date: "Jul 2026", result: "Moody +10 vs Vindman (50–40); +8 vs Nixon" },
      { src: "AIF Q2 poll", date: "Jun 2026", result: "Moody +7 vs Vindman (47–40)" },
    ],
  },
  GA: {
    seat: "Class 2",
    status: "Incumbent Jon Ossoff (D) seeking a second term",
    polymarketSlug: "georgia-senate-election-winner",
    primaryNote:
      "GOP runoff June 16 — Mike Collins beat Kemp-backed Derek Dooley by 10+.",
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
    primaryNote:
      "Primary was May 19 (Risch ~67%). Democratic nominee David Roth withdrew July 28 — no Democrat on the November ballot.",
    summary:
      "Safe Republican, with a twist: the Democratic nominee withdrew in July, leaving independent ex-legislator Todd Achilles as Risch's principal challenger.",
    candidates: [
      {
        name: "Jim Risch",
        party: "R",
        bio: "Senator since 2009 and chairman of the Senate Foreign Relations Committee; previously Idaho governor and lieutenant governor. Carries Trump's endorsement.",
        platform: [
          "America First agenda, including border security",
          "Foreign-policy leadership as Foreign Relations chairman",
          "Farmers, ranchers, and American energy dominance",
        ],
      },
      {
        name: "Todd Achilles",
        party: "I",
        bio: "Army veteran and former Republican who served as a Democratic state representative from Boise (2024–mid-2025), chairing the House Democratic caucus. Resigned to run for Senate as an independent with a 44-county 'Shake Up the System' tour.",
        platform: [
          "Protecting public lands",
          "Paying down the national debt",
          "Standing up to corporate monopolies",
          "Political reform outside the two-party system",
        ],
      },
    ],
    polls: [
      { src: "Peak Insights (Risch internal)", date: "Jun 2026", result: "Risch 55, nearest 15" },
      { src: "Bullfinch Group", date: "May–Jun 2026", result: "Risch +23 vs Achilles, 26% unsure" },
    ],
  },
  IL: {
    seat: "Class 2",
    status: "Open — Dick Durbin (D) retiring after five terms",
    polymarketSlug: "illinois-senate-election-winner",
    primaryNote:
      "Primary was March 17 — Stratton won the Democratic nomination with 40.4%; Tracy the GOP's with ~40%.",
    summary:
      "Lt. Gov. Juliana Stratton beat two sitting members of Congress for the nomination and is a heavy favorite in deep-blue Illinois.",
    candidates: [
      {
        name: "Juliana Stratton",
        party: "D",
        bio: "Illinois Lieutenant Governor since 2019 and former state representative from Chicago's South Side. Won the March primary with 40.4% over U.S. Reps. Raja Krishnamoorthi and Robin Kelly, backed by Gov. Pritzker and Sen. Duckworth. Would be Illinois' first Black woman senator.",
        platform: [
          "Raising the federal minimum wage (has floated $25/hour)",
          "Protecting health-care funding",
          "Rejecting corporate PAC money",
          "Jobs and infrastructure investment",
        ],
      },
      {
        name: "Don Tracy",
        party: "R",
        bio: "Springfield attorney and businessman, 75, and former chair of the Illinois Republican Party (2021–2024). Won the March primary with about 40%.",
        platform: [
          "Border security and immigration enforcement",
          "Tougher criminal-justice policies",
          "Restraining federal spending",
        ],
      },
      {
        name: "Tyrone Muhammad",
        party: "I",
        status: "presumptive",
        bio: "Chicago community activist and founder of Ex-Cons for Community and Social Change. If his petitions survive a legal challenge, he'd be the first formerly incarcerated person with a felony conviction on a statewide Illinois ballot as an independent Senate candidate.",
        platform: [
          "Reentry and second-chance advocacy",
          "Challenging the two-party establishment",
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
    primaryNote:
      "Primary was Aug 4 — Hamilton won the Democratic nomination with about 45% in an 11-candidate field (Schmidt finished in single digits); Marshall won the GOP primary with about 79% over Pond Naramore.",
    summary:
      "Likely Republican, but Democrats see an outside shot: Adam Hamilton, founding pastor of the largest United Methodist congregation in the U.S., won the Democratic nomination after setting a Kansas fundraising pace (~$3.7M); pre-primary polling had Marshall leading by high single digits.",
    candidates: [
      {
        name: "Roger Marshall",
        party: "R",
        bio: "Incumbent since 2021 and an OB-GYN who previously represented KS-01 in the House. Endorsed by Trump, AIPAC, and the Senate Conservatives Fund; ~$5.5M raised as of March.",
        platform: [
          "Support for the Trump administration's agenda",
          "Border security",
          "Kansas agriculture and the farm economy",
        ],
      },
      {
        name: "Adam Hamilton",
        party: "D",
        bio: "Founding senior pastor of Church of the Resurrection in Leawood (~22,000 members, the largest UMC congregation in the U.S.). Entered April 30, 2026 after exploring an independent bid; won the Aug 4 primary with ~$3.7M raised by June 30.",
        platform: [
          "'Independent-minded Democrat' leading from the center",
          "Service above self — 'country before party'",
          "Consensus-building modeled on a politically mixed congregation",
        ],
      },
    ],
    polls: [
      { src: "GQR (D)", date: "Apr 2026", result: "Marshall +4 vs Schmidt (49–45), hypothetical" },
      { src: "Tavern Research (D)", date: "Jan 2026", result: "Marshall +8 vs Hamilton (54–46), hypothetical" },
    ],
  },
  KY: {
    seat: "Class 2",
    status: "Open — Mitch McConnell retiring after seven terms",
    polymarketSlug: "kentucky-senate-election-winner",
    primaryNote:
      "Primary was May 19 — Barr won the GOP primary with 60.5%; Booker the Democratic primary with 47%.",
    summary:
      "Rep. Andy Barr emerged with the GOP nomination for McConnell's seat; former state Rep. Charles Booker carries the Democratic banner again. Kentucky remains solidly red federally — Democrats haven't won a Senate race here since 1992.",
    candidates: [
      {
        name: "Andy Barr",
        party: "R",
        bio: "U.S. Representative (KY-06) since 2013; Lexington attorney and senior House Financial Services member. Won the primary with 60.5%, defeating former state AG Daniel Cameron after businessman Nate Morris withdrew in May and endorsed him; Trump-endorsed.",
        platform: [
          "'Kentucky common sense' vs. 'the extreme far left' framing",
          "Banking/financial deregulation",
          "Keeping the Senate under Republican control",
          "Trump-agenda alignment",
        ],
      },
      {
        name: "Charles Booker",
        party: "D",
        bio: "Former state representative from Louisville and founder of Hood to the Holler; 2022 Senate nominee against Rand Paul. Won the primary with 47%, defeating 2020 nominee Amy McGrath and state Rep. Pamela Stevenson.",
        platform: [
          "Unity message — 'the politics of hate will not win'",
          "Economic relief for working Kentuckians",
          "Expanding access to health care",
        ],
      },
    ],
    polls: [{ src: "PPP (D)", date: "Dec 2025", result: "Barr +11 (49–38)" }],
  },
  LA: {
    seat: "Class 2",
    status: "GOP nominee Julia Letlow — incumbent Bill Cassidy lost renomination",
    polymarketSlug: "louisiana-senate-election-winner",
    primaryNote:
      "New closed primary May 16 — Cassidy finished THIRD (Letlow 45, Fleming 28, Cassidy 24); Letlow won the June 27 runoff.",
    summary:
      "The cycle's starkest primary casualty: three-term Sen. Bill Cassidy — who voted to convict Trump in 2021 — finished third in Louisiana's new closed party primary. Trump-endorsed Rep. Julia Letlow is a heavy favorite in November.",
    candidates: [
      {
        name: "Julia Letlow",
        party: "R",
        bio: "U.S. Representative (LA-05) since a 2021 special election held after her husband, Rep.-elect Luke Letlow, died of COVID-19 complications before taking office. Former University of Louisiana Monroe administrator with a Ph.D. in communication; sits on House Appropriations.",
        platform: [
          "Agriculture and rural Louisiana",
          "Parental rights in education",
          "Support for the Trump agenda",
        ],
      },
      {
        name: "Jamie Davis",
        party: "D",
        bio: "Third-generation row-crop farmer and small-business owner from Waterproof in Tensas Parish; former Tensas Parish Police Juror. Won the Democratic runoff with more than three-quarters of the vote.",
        platform: [
          "Education",
          "Healthcare access",
          "Affordability for working families",
        ],
      },
    ],
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
      { src: "Post-nomination", date: "Jul 2026", result: "Few public polls of Jackson–Collins yet" },
    ],
  },
  MA: {
    seat: "Class 2",
    status: "Incumbent Ed Markey (D) faces a primary challenge from Rep. Seth Moulton",
    polymarketSlug: "massachusetts-senate-election-winner",
    primaryNote:
      "Primaries Sep 1 — the Markey–Moulton Democratic primary is the real contest; Deaton is the MassGOP-endorsed Republican.",
    summary:
      "Safe Democratic in November, but the Sep 1 primary is a marquee generational fight: 80-year-old Green New Deal author Ed Markey vs. 47-year-old Marine veteran Seth Moulton.",
    candidates: [
      {
        name: "Ed Markey",
        party: "D",
        status: "primary_pending",
        bio: "Senator since a 2013 special election after 37 years in the House. Co-authored the Green New Deal resolution; one of the Senate's most prominent climate progressives. At 80, faces a generational-change challenge.",
        platform: [
          "Climate action and the Green New Deal",
          "Defending progressive priorities",
          "Protecting health-care programs",
        ],
      },
      {
        name: "Seth Moulton",
        party: "D",
        status: "primary_pending",
        bio: "U.S. Representative (MA-06) since 2015 and Marine veteran with four Iraq tours; briefly ran for president in 2020. Launched his challenge in October 2025 on a 'generational shift in leadership' message.",
        platform: [
          "Generational change in Democratic leadership",
          "National security and veterans' issues",
          "A more pragmatic, centrist direction",
        ],
      },
      {
        name: "John Deaton",
        party: "R",
        status: "presumptive",
        bio: "Attorney, Marine veteran, and cryptocurrency advocate; the 2024 GOP nominee against Sen. Elizabeth Warren. MassGOP-endorsed since November 2025, largely clearing the field.",
        platform: [
          "Economic affordability and growth",
          "Friendlier crypto/fintech regulation",
          "Outsider, working-class appeal",
        ],
      },
    ],
    polls: [
      { src: "Emerson (Dem primary)", date: "May 2026", result: "Markey +5 (37–32), 29% undecided" },
      { src: "Suffolk/Globe (Dem primary)", date: "Apr 2026", result: "Markey +17 (47–30)" },
    ],
  },
  MI: {
    seat: "Class 2",
    status: "Open — Gary Peters (D) retiring",
    polymarketSlug: "michigan-senate-election-winner",
    primaryNote:
      "Primary was Aug 4 — El-Sayed defeated Stevens by roughly two points (about 49–47%, AP called it Aug 5); Rogers was unopposed for the GOP.",
    summary:
      "Progressive Abdul El-Sayed narrowly beat moderate Rep. Haley Stevens in the Aug 4 Democratic primary, decided by about 15,000 votes out of 1.5M+ cast, after Mallory McMorrow suspended her campaign in July. He now faces Trump-backed Mike Rogers, with pre-primary general-election polling showing a close single-digit race.",
    candidates: [
      {
        name: "Abdul El-Sayed",
        party: "D",
        bio: "Physician and epidemiologist; former Detroit health commissioner and Wayne County health director, where he led an effort to relieve up to $700M in medical debt. 2018 gubernatorial candidate; endorsed by Sanders and AOC.",
        platform: [
          "Medicare for All — signature issue",
          "Getting corporate money out of politics",
          "Affordability agenda for working families",
        ],
      },
      {
        name: "Mike Rogers",
        party: "R",
        bio: "Former U.S. Representative and House Intelligence Committee chair; ex-FBI agent and Army veteran. Lost the 2024 Senate race to Elissa Slotkin by ~19,000 votes; unopposed for the GOP nod and Trump-endorsed.",
        platform: [
          "Manufacturing jobs and lower costs, working with Trump",
          "China hawk; national-security résumé",
          "Border security",
          "Skilled-trades investment",
        ],
      },
    ],
    polls: [
      { src: "Emerson (Dem primary)", date: "Jul 26–27, 2026", result: "El-Sayed 54–39 over Stevens" },
      { src: "EPIC-MRA (general)", date: "Jul 24–31, 2026", result: "Stevens +2 vs Rogers; Rogers +3 vs El-Sayed" },
      { src: "MEA/BLM–Glengariff (general)", date: "Jul 22–24, 2026", result: "Stevens 45.5–44.7 Rogers (tied); Rogers ~+10 vs El-Sayed" },
    ],
  },
  MN: {
    seat: "Class 2",
    status: "Open — Tina Smith (D) retiring",
    polymarketSlug: "minnesota-senate-election-winner",
    primaryNote:
      "Primaries Aug 11 — DFL: party-endorsed Flanagan vs. Rep. Angie Craig, widely called a coin flip; GOP: Tafoya leads the primary field.",
    summary:
      "Democrats favored to hold, but both primaries are live: Lt. Gov. Peggy Flanagan (would be the first Native American woman senator) against pragmatist Rep. Angie Craig, while ex-NFL broadcaster Michele Tafoya leads the GOP side despite losing the party endorsement.",
    candidates: [
      {
        name: "Peggy Flanagan",
        party: "D",
        status: "primary_pending",
        bio: "Lieutenant Governor since 2019 and former state legislator; a member of the White Earth Nation. Won the DFL endorsement in May 2026 and is backed by retiring Sen. Tina Smith.",
        platform: [
          "Protecting safety-net programs (Medicaid, SNAP, housing, child care)",
          "Abortion rights",
          "Raising wages; rejecting corporate PAC money",
        ],
      },
      {
        name: "Angie Craig",
        party: "D",
        status: "primary_pending",
        bio: "U.S. Representative (MN-02) since 2019 and former medical-device executive; would be the first openly gay woman to represent Minnesota in the Senate. Running an electability-focused campaign aimed at suburban and greater-Minnesota voters.",
        platform: [
          "Lowering household costs",
          "Pragmatic, bipartisan legislating",
          "Tougher immigration-enforcement posture than her primary rival",
        ],
      },
      {
        name: "Michele Tafoya",
        party: "R",
        status: "primary_pending",
        bio: "Former ESPN/NBC broadcaster best known as an NFL Sunday Night Football sideline reporter, now a conservative commentator. Leads GOP primary polling despite losing the party endorsement to Navy SEAL veteran Adam Schwarze; describes herself as a pro-abortion-rights Republican.",
        platform: [
          "Lowering grocery, prescription, and housing costs",
          "Fighting fraud in state-administered programs",
          "Immigration enforcement and police support",
        ],
      },
    ],
    polls: [
      { src: "Minnesota Poll (Mason-Dixon)", date: "Jul 2026", result: "Flanagan & Craig each ~+7 vs Tafoya" },
      { src: "Emerson", date: "Feb 2026", result: "Flanagan +6, Craig +7 vs Tafoya" },
    ],
  },
  MS: {
    seat: "Class 2",
    status: "Incumbent Cindy Hyde-Smith (R) seeking re-election",
    polymarketSlug: "mississippi-senate-election-winner",
    primaryNote:
      "Primary was March 10 — Hyde-Smith won with 80.8%; DA Scott Colom won the Democratic primary with 73%.",
    summary:
      "Markets say safe Republican (~93¢), but Democrats point to a spring D-aligned poll showing a 3-point race against DA Scott Colom — with 2024 Democratic nominee Ty Pinkins now running as an independent and complicating the anti-incumbent lane.",
    candidates: [
      {
        name: "Cindy Hyde-Smith",
        party: "R",
        bio: "Incumbent since a 2018 appointment and the first woman to represent Mississippi in Congress; former state agriculture commissioner. Running with Trump's endorsement.",
        platform: [
          "Agriculture and rural Mississippi",
          "Opposition to abortion",
          "Second Amendment rights",
        ],
      },
      {
        name: "Scott Colom",
        party: "D",
        bio: "District attorney for Mississippi's 16th Circuit since 2016, the first Black DA elected there. His 2023 federal judgeship nomination stalled in the Senate; outraised Hyde-Smith in Q2 2026 (~$945K).",
        platform: [
          "Lowering costs and raising wages",
          "Expanding healthcare access",
          "Public safety and criminal-justice reform",
        ],
      },
      {
        name: "Ty Pinkins",
        party: "I",
        bio: "Army veteran and Georgetown Law graduate from Rolling Fork; the 2024 Democratic Senate nominee against Roger Wicker, now qualified as an independent.",
        platform: [
          "Voting rights",
          "Economic opportunity in the Mississippi Delta",
        ],
      },
    ],
    polls: [
      { src: "Impact Research/SPLC (D-aligned)", date: "Apr 2026", result: "Hyde-Smith +3 vs Colom" },
    ],
  },
  MO: null,
  MT: {
    seat: "Class 2",
    status: "Open ballot — Steve Daines (R) withdrew March 4 and is serving out his term",
    polymarketSlug: "montana-senate-election-winner",
    primaryNote:
      "Primary June 2 — Daines withdrew March 4 and endorsed Alme, who won the GOP primary with 76.1%; Bankhead won the Dem primary; Bodnar qualified by petition.",
    summary:
      "A three-way with a real independent lane: former U.S. Attorney Kurt Alme (Trump- and Daines-endorsed) against independent ex-University of Montana president Seth Bodnar — backed by Jon Tester, two former governors of both parties, and the AFL-CIO — with Democrat Alani Bankhead splitting the opposition. Head-to-head polls are far closer than the 3-way.",
    candidates: [
      {
        name: "Kurt Alme",
        party: "R",
        bio: "U.S. Attorney for Montana (2017–2020, 2025–2026); Harvard-educated financial-crimes prosecutor who also served as state budget director. Filed March 4, 2026, minutes before Daines withdrew and endorsed him; also endorsed by Trump, Sen. Sheehy, and Gov. Gianforte.",
        platform: [
          "Conservative fiscal record — tax cuts, balanced budgets",
          "Law-and-order emphasis from prosecutorial career",
          "Alignment with the Trump administration",
        ],
      },
      {
        name: "Seth Bodnar",
        party: "I",
        bio: "President of the University of Montana 2018–Jan 2026; former Army Green Beret, Rhodes Scholar, and GE executive. Qualified by petition with 21,284 signatures; endorsed by Jon Tester, former Govs. Racicot (R) and Schweitzer (D), and the Montana AFL-CIO.",
        platform: [
          "Independent voice — 'the two-party system is failing us'",
          "Economic populism aimed at both parties",
          "Public-lands protection; housing affordability",
        ],
      },
      {
        name: "Alani Bankhead",
        party: "D",
        bio: "Air Force lieutenant colonel and leadership coach from Helena; won the June 2 Democratic primary with 43.6%. Some Democratic leaders openly favor Bodnar as the stronger challenger, complicating her position.",
        platform: [
          "Cutting government red tape",
          "Greater accountability in government",
          "Protecting children and the elderly",
        ],
      },
    ],
    polls: [
      { src: "Tavern Research (D)", date: "Jul 2026", result: "3-way: Alme 49, Bodnar 25, Bankhead 24; head-to-head Alme +5 vs Bodnar" },
      { src: "GQR (D)", date: "Jul 2026", result: "3-way: Alme 41, Bodnar 27, Bankhead 21" },
      { src: "Bullfinch (R)", date: "Jul 2026", result: "Alme 36, Bodnar 24, Bankhead 22" },
    ],
  },
  NE: {
    seat: "Class 2",
    status: "Incumbent Pete Ricketts (R) vs. independent Dan Osborn — no Democrat on the ballot",
    polymarketSlug: "nebraska-senate-election-winner",
    primaryNote:
      "Primary was May 12 (Ricketts 81.5%). Democratic winner Cindy Burbank withdrew July 17 to consolidate behind Osborn.",
    summary:
      "Osborn II: the industrial mechanic who came within ~7 of Deb Fischer in 2024 is back against Ricketts — and this time the Democratic nominee withdrew to clear his lane, with the state party endorsing him. D-aligned polls have ranged from Osborn +5 to Ricketts +1.",
    candidates: [
      {
        name: "Pete Ricketts",
        party: "R",
        bio: "Incumbent senator (appointed 2023, won the 2024 special) seeking a first full term; two-term former governor and former TD Ameritrade executive.",
        platform: [
          "Conservative record on taxes and spending",
          "Nebraska agriculture and trade",
          "Alignment with the Trump administration",
        ],
      },
      {
        name: "Dan Osborn",
        party: "I",
        bio: "Industrial mechanic, Navy veteran, and former local union president who led the 2021 Kellogg's strike in Omaha. His independent 2024 run was the shock overperformance of that cycle; the Democratic primary winner withdrew in July to consolidate opposition behind him.",
        platform: [
          "Working-class economic populism — 'Congress shouldn't be a playground for the rich'",
          "Cost of living as the top issue",
          "Refuses both parties' machinery; term limits",
        ],
      },
    ],
    polls: [
      { src: "Tavern Research (D)", date: "May 2026", result: "Osborn +5 (47–42)" },
      { src: "Impact Research (D)", date: "Feb 2026", result: "Ricketts +1 (48–47)" },
    ],
  },
  NV: null,
  NH: {
    seat: "Class 2",
    status: "Open — Jeanne Shaheen (D) retiring",
    polymarketSlug: "new-hampshire-senate-election-winner",
    primaryNote:
      "Primaries Sep 8 — Pappas dominates the Democratic side; Trump-endorsed John E. Sununu leads Scott Brown ~59–20 for the GOP.",
    summary:
      "Rep. Chris Pappas cleared the Democratic field, but the GOP recruited its strongest possible name: former Sen. John E. Sununu, attempting to reclaim the seat he lost to Shaheen in 2008. The latest UNH general poll: Pappas +3 — closer than earlier spring numbers.",
    candidates: [
      {
        name: "Chris Pappas",
        party: "D",
        status: "presumptive",
        bio: "U.S. Representative (NH-01) since 2019; family runs Manchester's Puritan Backroom restaurant. Endorsed by Shaheen and Sen. Hassan; led his nearest primary rival by 40+ in June UNH polling.",
        platform: [
          "Housing affordability and supply",
          "Extending ACA premium credits; reversing Medicaid cuts",
          "Lowering energy costs",
        ],
      },
      {
        name: "John E. Sununu",
        party: "R",
        status: "primary_pending",
        bio: "Former U.S. senator (2003–2009) and three-term congressman; son of former Gov. John H. Sununu and brother of former Gov. Chris Sununu. Entered in January 2026 seeking his old seat; Trump-endorsed.",
        platform: [
          "Reducing federal spending and the debt",
          "Lower cost of living; no new taxes",
          "Protecting Medicare and Social Security",
          "Energy independence",
        ],
      },
      {
        name: "Scott Brown",
        party: "R",
        status: "primary_pending",
        bio: "Former Massachusetts senator (2010–2013) and NH's 2014 GOP Senate nominee; U.S. ambassador to New Zealand in Trump's first term. First major Republican in the race but trails Sununu badly in primary polls.",
        platform: [
          "Affordability with an energy focus (natural gas, Seabrook nuclear)",
          "Border security",
          "Experience-and-independence pitch",
        ],
      },
    ],
    polls: [
      { src: "UNH Survey Center", date: "Late Jun 2026", result: "General: Pappas +3 vs Sununu (47–44)" },
      { src: "Emerson", date: "Mar 2026", result: "Pappas +1 vs Sununu; +9 vs Brown" },
    ],
  },
  NJ: {
    seat: "Class 2",
    status: "Incumbent Cory Booker (D) seeking a third full term",
    polymarketSlug: "new-jersey-senate-election-winner",
    primaryNote:
      "Primaries were June 2 — Booker unopposed; Murphy won the four-way GOP primary with ~33%.",
    summary: "Safe Democratic.",
    candidates: [
      {
        name: "Cory Booker",
        party: "D",
        bio: "Incumbent since 2013; former Newark mayor and 2020 presidential candidate. In 2025 he delivered the longest floor speech in Senate history.",
        platform: [
          "Protecting health-care programs incl. Medicaid",
          "Criminal-justice reform",
          "Opposing expanded ICE detention in New Jersey",
        ],
      },
      {
        name: "Justin Murphy",
        party: "R",
        bio: "Former township committeeman and deputy mayor of Tabernacle Township in Burlington County; finished third in the 2024 GOP Senate primary before winning the 2026 nomination.",
        platform: [
          "Tax cuts and spending reductions",
          "Border security and fighting crime",
          "Keeping the Jersey Shore 'windmill free'",
        ],
      },
    ],
    polls: [],
  },
  NM: {
    seat: "Class 2",
    status: "Incumbent Ben Ray Luján (D) seeking a second term",
    polymarketSlug: "new-mexico-senate-election-winner",
    primaryNote:
      "Primaries were June 2 — Luján won 84–16; the filed GOP candidate was disqualified and Marker advanced as a write-in.",
    summary:
      "Safe Democratic — the GOP's filed candidate was disqualified over petition signatures, leaving write-in winner Larry Marker to carry the banner.",
    candidates: [
      {
        name: "Ben Ray Luján",
        party: "D",
        bio: "Incumbent since 2020; previously represented NM-03 in the House (2009–2021), rising to Assistant Speaker. Member of a prominent New Mexico political family.",
        platform: [
          "Lowering health-care and drug costs",
          "Rural and tribal broadband",
          "Protecting Medicare, Medicaid, Social Security",
        ],
      },
      {
        name: "Larry Marker",
        party: "R",
        bio: "Oil-and-gas businessman from Hobbs with a background across energy, farming, and construction. Became the GOP standard-bearer via write-in votes after the party's filed candidate was disqualified.",
        platform: [
          "All-of-the-above energy: oil, gas, nuclear, hydrogen",
          "Cutting regulation; ending 'permitting paralysis'",
          "Border security and anti-cartel enforcement",
        ],
      },
    ],
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
    status: "Open — Markwayne Mullin resigned in March 2026 to lead DHS",
    polymarketSlug: "oklahoma-senate-election-winner",
    primaryNote:
      "GOP primary June 16 — Hern won outright with 69.8%; the Democratic runoff (Thomas vs. Priest) is Aug 25.",
    summary:
      "Safe Republican open seat: Rep. Kevin Hern, former Republican Study Committee chair, won the GOP primary outright with Trump's and Thune's endorsements after Mullin left to run Homeland Security.",
    candidates: [
      {
        name: "Kevin Hern",
        party: "R",
        bio: "U.S. Representative (OK-01) since 2018 and former longtime McDonald's franchisee in the Tulsa area; past chair of the Republican Study Committee, the House's largest conservative caucus.",
        platform: [
          "Tax cuts and pro-business policy",
          "Expanding U.S. energy production",
          "Border security",
        ],
      },
      {
        name: 'N\'Kiyla "Jasmine" Thomas',
        party: "D",
        status: "primary_pending",
        bio: "Nurse, active-duty military spouse, and Chickasaw Nation citizen from Ardmore; led the June Democratic primary with ~45% and faces an Aug 25 runoff.",
        platform: [
          "Expanding healthcare access",
          "Disability services and family support",
          "Government accountability",
        ],
      },
      {
        name: "Jim Priest",
        party: "D",
        status: "primary_pending",
        bio: "Longtime Oklahoma employment-law and civil-rights attorney and ordained minister; endorsed by former Oklahoma governors, campaigning on a 'New Fair Deal.'",
        platform: [
          "Lowering costs for working families",
          "Rural hospitals and mental-health care",
          "Banning congressional stock trading",
        ],
      },
    ],
    polls: [],
  },
  OR: {
    seat: "Class 2",
    status: "Incumbent Jeff Merkley (D) seeking a fourth term",
    polymarketSlug: "oregon-senate-election-winner",
    primaryNote:
      "Primary was May 19 — Merkley won with ~93%; Brock Smith won a seven-way GOP field with ~30%.",
    summary: "Safe Democratic.",
    candidates: [
      {
        name: "Jeff Merkley",
        party: "D",
        bio: "Incumbent since 2009 and former Speaker of the Oregon House.",
        platform: [
          "Housing affordability — curbing hedge-fund ownership of homes",
          "Climate action; 100% renewable transition",
          "Economic fairness for working families",
        ],
      },
      {
        name: "David Brock Smith",
        party: "R",
        bio: "Oregon state senator (District 1, south coast) since 2023 and former state representative; third-generation Port Orford resident and former family-restaurant owner.",
        platform: [
          "'Putting Oregon first' — affordability and lower costs",
          "Safer communities",
          "Accountable government",
        ],
      },
    ],
    polls: [],
  },
  RI: {
    seat: "Class 2",
    status: "Incumbent Jack Reed (D) seeking a sixth term",
    polymarketSlug: "rhode-island-senate-election-winner",
    primaryNote:
      "Primary Sep 8 — Reed faces only nominal opposition; McKay leads the declared GOP field.",
    summary: "Safe Democratic.",
    candidates: [
      {
        name: "Jack Reed",
        party: "D",
        status: "presumptive",
        bio: "Incumbent since 1997; West Point graduate, Army veteran, and senior Democrat on the Senate Armed Services Committee.",
        platform: [
          "National defense; servicemembers and veterans",
          "Education affordability",
          "Economic support for working families",
        ],
      },
      {
        name: "Raymond McKay",
        party: "R",
        status: "primary_pending",
        bio: "Network/telecom manager for the City of Warwick for 26 years and former president of the Rhode Island Republican Assembly; a 2024 Senate candidate.",
        platform: [
          "Inflation relief for working families",
          "Cutting wasteful federal spending",
          "America-first immigration policy",
        ],
      },
    ],
    polls: [
      { src: "UNH Survey Center", date: "Jun 2026", result: "Reed +17 (52–35)" },
    ],
  },
  SC: {
    seat: "Class 2",
    status: "Open — Sen. Lindsey Graham died July 11 after winning the GOP primary",
    polymarketSlug: "south-carolina-senate-election-winner",
    primaryNote:
      "Special GOP primary Aug 11 (runoff likely Aug 25). Late-July Emerson: Norman 22, Graham Nordone 19, Fry 12, Sanford 11. Andrews won the Dem primary June 9.",
    summary:
      "A race remade by tragedy: Lindsey Graham won his June primary with 56.8%, then died on July 11. Gov. McMaster appointed Graham's sister, Darline Graham Nordone, to hold the seat; she now runs Trump-endorsed in a crowded Aug 11 special primary against Reps. Ralph Norman and Russell Fry. Pediatrician Annie Andrews is the Democratic nominee.",
    candidates: [
      {
        name: "Annie Andrews",
        party: "D",
        bio: "Charleston pediatrician who won the June 9 Democratic primary with 61.5%; would be the first pediatrician in the Senate. Entered politics on gun-violence prevention after Parkland through Moms Demand Action.",
        platform: [
          "Lowering health-care, child-care, and grocery costs",
          "Health-system reform",
          "Gun safety led by universal background checks",
        ],
      },
      {
        name: "Ralph Norman",
        party: "R",
        status: "primary_pending",
        bio: "U.S. Representative (SC-05) since 2017, House Freedom Caucus member, and real-estate developer. Led the late-July Emerson special-primary poll at 22%.",
        platform: [
          "Deep federal spending cuts",
          "Hardline conservative record",
        ],
      },
      {
        name: "Darline Graham Nordone",
        party: "R",
        status: "primary_pending",
        bio: "Sister of the late Sen. Lindsey Graham, appointed by Gov. McMaster on July 13 to hold the seat until January. Running Trump-endorsed for the full term; polled second at 19% in late July.",
        platform: [
          "Carrying forward her brother's Senate service",
          "Aligned with the Trump administration",
        ],
      },
      {
        name: "Russell Fry",
        party: "R",
        status: "primary_pending",
        bio: "U.S. Representative (SC-07) since 2023 and former state legislator from the Grand Strand; polled 12% in late July.",
        platform: [
          "Stalwart support for Trump policies",
          "Conservative House record",
        ],
      },
    ],
    polls: [
      { src: "Emerson (GOP special primary)", date: "Jul 28–29, 2026", result: "Norman 22, Graham Nordone 19, Fry 12, Sanford 11" },
    ],
  },
  SD: {
    seat: "Class 2",
    status: "Incumbent Mike Rounds (R) seeking a third term",
    polymarketSlug: "south-dakota-senate-election-winner",
    primaryNote:
      "Primary was June 2 — Rounds won ~77–23; Beaudion was unopposed. Independent Brian Bengs also qualified.",
    summary:
      "Safe Republican, with a three-way undercard: 2022 Democratic nominee Brian Bengs returns as an independent alongside Democrat Julian Beaudion.",
    candidates: [
      {
        name: "Mike Rounds",
        party: "R",
        bio: "Senator since 2015 and two-term former governor; Armed Services member who touts the B-21 bomber's arrival at Ellsworth AFB. Trump-endorsed.",
        platform: [
          "Cutting taxes",
          "Agricultural markets and a new farm bill",
          "Defense readiness (B-21 at Ellsworth)",
        ],
      },
      {
        name: "Julian Beaudion",
        party: "D",
        bio: "Sioux Falls business owner and former South Dakota Highway Patrol trooper; says his first priority is reversing budget provisions he blames for rural hospital closures.",
        platform: [
          "Universal coverage with a public option",
          "Housing affordability",
          "Protecting Social Security",
        ],
      },
      {
        name: "Brian Bengs",
        party: "I",
        bio: "Retired Air Force lieutenant colonel, Navy veteran, attorney, and former professor; the 2022 Democratic nominee against Thune (26%), now independent with 4,300+ ballot signatures.",
        platform: [
          "Campaign-finance reform",
          "Opposing VA health-care privatization",
          "Rebalancing the tax code",
        ],
      },
    ],
    polls: [
      { src: "PPP", date: "May 2026", result: "Rounds 43, Bengs 23, Beaudion 18" },
    ],
  },
  TN: {
    seat: "Class 2",
    status: "Incumbent Bill Hagerty (R) seeking a second term",
    polymarketSlug: "tennessee-senate-election-winner",
    primaryNote:
      "Primary was Aug 6 — Hagerty was unopposed for the GOP; Bradshaw won the Democratic primary with 54.8% over Maria Brewer's 18.0% in a five-way field.",
    summary: "Safe Republican — a rematch of 2020, when Hagerty won by 27 points.",
    candidates: [
      {
        name: "Bill Hagerty",
        party: "R",
        bio: "Senator since 2021; former U.S. ambassador to Japan, private-equity executive, and Tennessee economic development commissioner. Trump-endorsed with nearly $9M raised this cycle.",
        platform: [
          "Lower taxes",
          "Energy independence",
          "Secure borders",
          "Delivering on the America First agenda",
        ],
      },
      {
        name: "Marquita Bradshaw",
        party: "D",
        bio: "Memphis environmental-justice activist and the 2020 Democratic Senate nominee — the first Black woman to win a major-party statewide nomination in Tennessee. Won the Aug 6 primary with 54.8% of the vote.",
        platform: [
          "Environmental justice and climate action",
          "Health care for all",
          "$15 minimum wage",
        ],
      },
    ],
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
    primaryNote:
      "Primary was Aug 4 — Warner was unopposed; Mizusawa won the GOP primary with 50.71%, beating David Williams (29.5%) and Kim Farington (19.8%).",
    summary:
      "Safe Democratic. Warner sits on a $25M+ war chest; Mizusawa, a retired Army major general, emerged from a low-profile GOP field.",
    candidates: [
      {
        name: "Mark Warner",
        party: "D",
        bio: "Senator since 2009 and former governor (2002–2006); telecom businessman before politics and top Democrat on Senate Intelligence. $25M+ war chest.",
        platform: [
          "Lowering costs — groceries, housing, energy, child care",
          "Preparing workers for AI-driven change",
          "Expanding health coverage",
        ],
      },
      {
        name: "Bert Mizusawa",
        party: "R",
        bio: "Retired Army major general who commanded forces in Afghanistan; former Senate Armed Services staffer and CIA adviser. Leads the GOP field in fundraising (~$376K).",
        platform: [
          "National security",
          "Military readiness",
        ],
      },
    ],
    polls: [
      { src: "Public Sentiment Institute", date: "Jun 2026", result: "Warner +18 vs Farington (51–33)" },
    ],
  },
  WV: {
    seat: "Class 2",
    status: "Incumbent Shelley Moore Capito (R) seeking a third term",
    polymarketSlug: "west-virginia-senate-election-winner",
    primaryNote:
      "Primary was May 12 — Capito won with 66.5%; Fetty Anderson won the Democratic primary with ~33%.",
    summary: "Safe Republican.",
    candidates: [
      {
        name: "Shelley Moore Capito",
        party: "R",
        bio: "Senator since 2015 and the first woman elected to the Senate from West Virginia; chairs Environment and Public Works and ranks fourth in GOP leadership. Daughter of former Gov. Arch Moore.",
        platform: [
          "Energy production and permitting",
          "Broadband and infrastructure",
          "Fighting the drug epidemic",
        ],
      },
      {
        name: "Rachel Fetty Anderson",
        party: "D",
        bio: "Public-interest attorney in Morgantown representing people with disabilities, abuse survivors, and low-income clients; former Morgantown City Council member.",
        platform: [
          "Medicare for All",
          "Congressional term limits",
          "Expanded services for the homeless and working poor",
        ],
      },
    ],
    polls: [],
  },
  WY: {
    seat: "Class 2",
    status: "Open — Cynthia Lummis (R) not seeking re-election",
    polymarketSlug: "wyoming-senate-election-winner",
    primaryNote:
      "Primary Aug 18 — Hageman is the heavy GOP favorite; Byrd faces Billy Benavidez for the Democrats.",
    summary:
      "Safe Republican open seat: Rep. Harriet Hageman — who unseated Liz Cheney in 2022 — was endorsed by Trump within hours of announcing, and by Lummis herself.",
    candidates: [
      {
        name: "Harriet Hageman",
        party: "R",
        status: "primary_pending",
        bio: "Wyoming's at-large U.S. representative since 2023, who won the seat by beating Liz Cheney in the 2022 primary; longtime natural-resources and water-rights attorney and 2018 gubernatorial candidate.",
        platform: [
          "Defending Wyoming's natural-resource access",
          "Energy and food-production leadership",
          "America First agenda in the Senate",
        ],
      },
      {
        name: "James Byrd",
        party: "D",
        status: "primary_pending",
        bio: "Former state representative from Cheyenne (2009–2019), serving as minority whip and caucus leader; 2018 secretary-of-state candidate.",
        platform: [
          "All-of-the-above energy: nuclear, solar, wind alongside fossil fuels",
          "Representation reflecting Wyoming's values",
        ],
      },
    ],
    polls: [],
  },
};

// Primary dates for races whose fields were NOT settled as of SNAPSHOT_DATE.
// The staleness detector compares these against today to flag seed data the
// calendar has outrun — see src/services/staleness.js. Remove a state's entry
// once its race is updated to real nominees (no more *_pending candidates).
// After the last date here (DE, Sep 15) every field is set until Nov 3.
export const PRIMARY_DATES = {
  MN: "2026-08-11",
  SC: "2026-08-11", // special GOP primary after Graham's death; runoff ~Aug 25
  FL: "2026-08-18",
  WY: "2026-08-18",
  OK: "2026-08-25", // Democratic runoff
  MA: "2026-09-01",
  NH: "2026-09-08",
  RI: "2026-09-08",
  DE: "2026-09-15",
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
