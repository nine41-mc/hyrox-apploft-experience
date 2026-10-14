/**
 * All copy for the site (EN). `de.ts` mirrors this shape exactly (checked by the type in ./index.ts).
 * Pitch story in 8 beats – the full reasoning lives in the strategy doc.
 * Facts are sourced (see `sources`); people, clubs and app data in the screens are illustrative.
 */
import type { ScreenKey } from "@/components/screens/AppScreens";

type YearStep = { month: string; title: string; text: string; screen: ScreenKey };

export const meta = {
  title: "HYROX Experience 2027 – A vision by apploft.",
  description:
    "Every day counts: a year-round platform that connects every racer and every club to HYROX. A vision concept by apploft.",
  summaryTitle: "Executive summary – HYROX Experience 2027",
};

export const ui = {
  summaryBtn: "Summary",
  talk: "Let’s talk",
  summaryLong: "Executive summary",
  sources: "Sources_",
  summaryLink: "Executive summary →",
  print: "Print / save PDF",
  summaryHeadA: "Executive",
  summaryHeadB: "summary.",
  summaryNote: "Sources and details: see the full story on the main page. Screens and data in the concept are illustrative.",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  backToTop: "back to top",
  skip: "Skip to content",
  newTab: "(opens in a new tab)",
  source: "Source",
  carousel: "Lena’s year, month by month",
  appScreen: "App screen",
  sections: "Sections",
  language: "Language",
  illustrativeData: "Illustrative data.",
  wallCaption: "The Wall – a screen for the gym floor",
  prevMonth: "Previous month",
  nextMonth: "Next month",
  golf: "Golf:",
  gridAria: "A year of 365 days: 3 race days in yellow, 362 training days in grey",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  heroImgAlt: "Two athletes throwing wall balls, seen from above",
  statementAlt: "An athlete bent over a sled after giving everything",
  sledAlt: "An athlete pushing a sled, head down",
  webCaption: "Web: the public racer profile on hyrox.com",
  appCaption: "App: the same record in your pocket",
  clubCaption: "Web for clubs: Club OS",
};

export const nav = [
  { id: "gap", label: "The gap" },
  { id: "idea", label: "The idea" },
  { id: "year", label: "Lena’s 2027" },
  { id: "wins", label: "Everybody wins" },
];

export const hero = {
  eyebrow: "HYROX Experience 2027_",
  lines: ["Every", "day", "counts."],
  highlight: "counts.",
  box: { title: "A vision", sub: "by apploft." },
  lead: "Racers give everything on race day – then disappear into their gyms for months. 2027 is the year every training day, every club and every racer becomes part of HYROX.",
  cta: "See the vision",
};

export const ticker = ["Every day counts", "Be the record", "Every body", "Every club", "One record", "For life"];

export const statement = {
  lines: ["Racers give", "everything.", "They get a number.", "No account."],
  hl: ["everything.", "No account."],
  note: "Results on hyrox.com: search by name. No profile, no history, no status.",
  source: 3,
};

export const gap = {
  eyebrow: "01_The gap",
  title: ["HYROX owns", "3 days a year."],
  titleHl: "3 days",
  sub: "The clubs own the other 362.",
  body: "In between, racers train in gyms that run their own programme, their own sims, their own community. Third-party apps sell them profiles built on HYROX data. HYROX is nowhere in the conversation.",
  legend: { race: "Race weekends", club: "Training days in the club – invisible to HYROX" },
  stats: [
    { value: "1.4M+", label: "racers in season 25/26", source: 1 },
    { value: "11,000+", label: "HYROX Training Clubs", source: 2 },
    { value: "0", label: "public racer profiles", source: 3 },
  ],
};

export const idea = {
  eyebrow: "02_The idea",
  title: ["You already built it.", "Now open it."],
  titleHl: "Now open it.",
  body: "HYROX has a licence and a rolling points ranking – for a few thousand elites. Golf shows how it works for every body: one licence, one handicap, a home club, welcome everywhere.",
  pillars: [
    { n: "01", name: "HYROX ID", golf: "Membership card", text: "Your existing HYROX Account, turned into a record for life – the same ID in the Event App." },
    { n: "02", name: "Licence", golf: "Course licence", text: "Signed off in your club by a certified coach. Rookie to Elite." },
    { n: "03", name: "Index", golf: "Handicap", text: "Fed by races and judged club sims. Comparable everywhere." },
    { n: "04", name: "Home Club", golf: "Home club + green fee", text: "Your crew, your league – and guest access to every HYROX club." },
  ],
  standard: {
    k: "The one hard part",
    v: "The Sim Standard: defined equipment, a certified judge, a rated club. Then a sim in Hamburg counts like a sim in Barcelona.",
  },
  quote: {
    lines: ["The account is the story:", "pain, pride, cities.", "Over years."],
    hl: "Over years.",
  },
};

export const year = {
  eyebrow: "03_Lena’s 2027",
  title: ["Meet Lena.", "Her 2027."],
  titleHl: "Her 2027.",
  body: "34, Hamburg, two HYROX races behind her. This is what changes when HYROX is with her every week – not just on race day.",
  note: "Illustrative persona, club and data.",
  steps: <YearStep[]>[
    {
      month: "Jan",
      title: "Licence day",
      text: "Coach Ana signs off Lena’s Licence at her home club. She is now a Level 1 Racer – her record starts here.",
      screen: "licence",
    },
    {
      month: "Feb",
      title: "First judged sim",
      text: "A full race sim on a Thursday night, judged to the Sim Standard. It counts: her first Index appears.",
      screen: "sim",
    },
    {
      month: "Mar",
      title: "Club Weekend",
      text: "One weekend, one sim, every HYROX club worldwide. Hafen Athletics finishes #3 in Hamburg North – and the Club Season begins.",
      screen: "league",
    },
    {
      month: "Apr",
      title: "Race day",
      text: "HYROX Hamburg runs in the official HYROX Event App – same HYROX ID, no new sign-up. The result flows straight back into her record.",
      screen: "race",
    },
    {
      month: "Jun",
      title: "Away, still home",
      text: "Work trip to Barcelona. The Network Pass gets her into a local HYROX club as a guest – and a guest sim on the board.",
      screen: "pass",
    },
    {
      month: "Sep",
      title: "Silver status",
      text: "Consistency pays: Silver status unlocks priority access to the next sold-out race. No queue, no bots.",
      screen: "rewards",
    },
    {
      month: "Nov",
      title: "Race weekend, rewarded",
      text: "HYROX Berlin. Check-in is one scan with her HYROX ID – and the points from her club sims pay off on site.",
      screen: "perks",
    },
    {
      month: "Dec",
      title: "Her record",
      text: "Four cities, two races, nine judged sims, one Index that tells the story. Be the record.",
      screen: "record",
    },
  ],
};

export const wins = {
  eyebrow: "04_Everybody wins",
  title: ["Racers. Clubs.", "HYROX."],
  titleHl: "HYROX.",
  columns: [
    {
      k: "Racers",
      items: [
        "Never prepare alone: crews, partners, sim nights",
        "Official splits, Index and status – no third-party subscription",
        "A way into sold-out races",
        "One ID into the HYROX Event App",
      ],
    },
    {
      k: "Clubs",
      items: [
        "Club OS – free, no new rules",
        "New members through the network",
        "Revenue share on tickets and club events",
        "Points that travel to race weekends",
      ],
    },
    {
      k: "HYROX",
      items: [
        "A direct relationship with 2M+ racers",
        "Revenue between race weekends",
        "Data back home: Log in with HYROX",
        "Licensed members – the backbone of a federation",
        "A new B2B channel: corporate leagues via EGYM Wellpass",
      ],
    },
  ],
  growth: {
    k: "And the next million?",
    v: "They don’t race yet. They take HYROX classes. The Club Sim is their first race – in their own gym, with their crew.",
  },
  proof: {
    title: "Proven: community is built offline first.",
    items: [
      { k: "Strava", v: "1M clubs – new clubs almost 4× in 2025", source: 4 },
      { k: "Peloton", v: "1.8% monthly churn with hardware vs ~7–8% app‑only", source: 5 },
      { k: "IRONMAN", v: "Rewards clubs for every member who races", source: 6 },
      { k: "CrossFit", v: "Open sign-ups −32% after affiliate fees rose", source: 7 },
    ],
  },
  rivals: {
    title: "And others are already moving.",
    items: [
      { k: "DEKA Gym vs Gym", v: "All affiliates race the same workout on one weekend – global gym leaderboard.", source: 9 },
      { k: "F45 PEAK500", v: "One benchmark, the same day, in every F45 studio – scored in the F45 app. F45 is HYROX’s global gym partner.", source: 10 },
      { k: "TRYKA & GymRace", v: "HYROX-style race series with their own leagues for racers, gyms and companies.", source: 11 },
    ],
    answer: "HYROX’s answer: the Club Weekend – bigger, official, and it counts for the Index.",
  },
};

export const about = {
  k: "apploft.",
  desc: "Digital product studio from Hamburg since 2008. 250+ apps, 100M+ downloads – we design, build and run apps for the long haul.",
  refs: {
    k: "References",
    items: ["PadelCity", "qalcha", "SC Freiburg", "BVB", "HSV", "Dynamo Dresden", "FC Basel"],
  },
  partner: {
    k: "Premium partner",
    v: "Certified Premium development partner of EGYM – where HYROX Training+ already runs.",
    source: 8,
  },
};

export const ask = {
  eyebrow: "05_Let’s start",
  title: ["Let’s build", "the record."],
  titleHl: "the record.",
  phases: [
    { when: "Q1 2027", name: "Discovery", text: "6 weeks with racers, coaches, clubs. Validated prototypes." },
    { when: "Q2–Q3 2027", name: "Pilot", text: "One city, 10 clubs, one Club Season – live and measured." },
    { when: "Season 27/28", name: "Rollout", text: "Region by region, along the race calendar." },
  ],
  contacts: [
    { name: "Gary Boeing", role: "CEO, apploft." },
    { name: "Manuel Cramer", role: "CPO, apploft." },
  ],
  site: "apploft.de",
};

export const footer = {
  disclaimer:
    "A vision concept by apploft. for a conversation with HYROX. Screens, persona, clubs and data are illustrative. HYROX is a trademark of its owner; photography © HYROX, used for internal presentation only.",
};

export const sources = [
  { n: 1, label: "Infront press release, 8 Sep 2026", url: "https://www.infront.sport/news/participations-sports/consortium-led-by-l-catterton-in-partnership-with-hyrox-founders-acquires-infronts-majority-stake-in-hyrox-clone" },
  { n: 2, label: "Endurance.biz, 2 Dec 2025", url: "https://endurance.biz/2025/industry-news/hyrox-prepares-for-largest-ever-race-at-london-excel-and-unveils-london-week-of-fitness-featuring-hyrox-youngstars-in-2026/" },
  { n: 3, label: "hyrox.com – results searchable by name, no athlete profiles (Oct 2026)", url: "https://hyrox.com/" },
  { n: 4, label: "Strava Year in Sport 2025", url: "https://press.strava.com/articles/strava-releases-12th-annual-year-in-sport-trend-report-2025" },
  { n: 5, label: "Peloton Q4 FY25 shareholder letter", url: "https://www.sec.gov/Archives/edgar/data/1639825/000163982525000132/q42025shareholderletter.htm" },
  { n: 6, label: "Slowtwitch on IRONMAN TriClubs", url: "https://www.slowtwitch.com/triathlon/show-me-the-money-hardly-the-secret-to-ironman-and-zoots-successful-club-programs/" },
  { n: 7, label: "Morning Chalk Up, 4 Mar 2025", url: "https://morningchalkup.com/2025/03/04/2025-crossfit-open-registrations-down-32-percent/" },
  { n: 8, label: "Athletech News, 1 Oct 2026", url: "https://athletechnews.com/hyrox-pushes-deeper-into-gyms-hyrox-training-plus-abc-fitness-egym/" },
  { n: 9, label: "Spartan – DEKA Gym vs Gym", url: "https://cn.spartan.com/en/deka/gym-versus-gym" },
  { n: 10, label: "Athletech News – F45 PEAK500, Mar 2026", url: "https://athletechnews.com/f45-peak500-fitness-competition-red-bull/" },
  { n: 11, label: "Hybrid Fitness Media – UK/EU race market, Jul 2026", url: "https://hybridfitnessmedia.com/?p=4949" },
];

export const summary = {
  title: "Executive summary",
  sub: "HYROX Experience 2027 – the pitch on one page",
  blocks: [
    {
      k: "The problem",
      v: [
        "HYROX owns 3 days of a racer’s year; the clubs own the other 362.",
        "1.4M+ racers and 11,000+ Training Clubs – barely connected to each other or to HYROX.",
        "Third-party apps monetise HYROX data; clubs run their own sims and certificates; rival brands court the same gyms.",
      ],
    },
    {
      k: "The insight",
      v: [
        "HYROX already built Licence and a rolling points ranking – for the elite only.",
        "Every racer already has a HYROX Account (needed for every ticket) – the foundation exists, it just does nothing between races.",
        "Golf shows how to open it up: licence, handicap, home club, play anywhere.",
      ],
    },
    {
      k: "The idea",
      v: [
        "HYROX ID: the existing HYROX Account turned into a record for life – the same one the HYROX Event App uses.",
        "Licence + HYROX Index: fed by races and judged club sims (Sim Standard).",
        "Home Club + Network Pass, Club Season leagues, The Wall.",
        "Rewards that pay off at race weekends; Club OS free for every club.",
      ],
    },
    {
      k: "Value",
      v: [
        "Racers: community, official analytics, status, a way into sold-out races.",
        "Clubs: free tools, new members, revenue share – no new rules.",
        "HYROX: a direct relationship with 2M+ racers, year-round revenue, data back home, conversion into the Event App, a backbone for a federation.",
      ],
    },
    {
      k: "Why now, why apploft.",
      v: [
        "Founders back in control with L Catterton and WNDR (Sep 2026); 2M+ racers expected; XENOM as a second format.",
        "apploft. is a certified Premium development partner of EGYM, where HYROX Training+ already runs.",
      ],
    },
    {
      k: "The ask",
      v: ["Discovery in Q1 2027 (6 weeks) → pilot with 10 clubs in one city → rollout with season 27/28. Built by apploft."],
    },
  ],
};
