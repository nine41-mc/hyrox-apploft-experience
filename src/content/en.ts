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
    "From the first workout to the first race: a year-round platform that connects everyone who trains HYROX with their club and with HYROX. A vision concept by apploft.",
  summaryTitle: "Executive summary – HYROX Experience 2027",
  prototypeTitle: "HYROX Pass – concept prototype",
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
  builtOn: "Built on:",
  gridAria: "A year of 365 days: 3 race days in yellow, 362 training days in grey",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  heroImgAlt: "Two athletes throwing wall balls, seen from above",
  statementAlt: "An athlete bent over a sled after giving everything",
  sledAlt: "An athlete pushing a sled, head down",
  webCaption: "Web: the public athlete profile on hyrox.com",
  appCaption: "App: the same record in your pocket",
  clubCaption: "Web for clubs: Club OS",
};

export const nav = [
  { id: "gap", label: "The gap" },
  { id: "idea", label: "The idea" },
  { id: "year", label: "Lena’s 2027" },
  { id: "weekend", label: "Club Weekend" },
  { id: "wins", label: "Everybody wins" },
];

export const hero = {
  eyebrow: "HYROX Experience 2027_",
  lines: ["Every", "day", "counts."],
  highlight: "counts.",
  box: { title: "A vision", sub: "by apploft." },
  lead: "Many people who train HYROX have never raced. 2027 is the year HYROX shows them the way in – from the first workout in their club to the first race, and back.",
  cta: "See the vision",
};

export const ticker = ["Every day counts", "Every body", "Every club", "First sim", "First race", "Be the record"];

export const statement = {
  lines: ["They train HYROX.", "Every week.", "They’ve never raced.", "No one shows them how."],
  hl: ["Every week.", "No one shows them how."],
  note: "Before the first ticket there is no profile, no progress, no goal. Results exist only after a race – searchable by name.",
  source: 3,
};

export const gap = {
  eyebrow: "01_The gap",
  title: ["365 days of training.", "HYROX sees 3."],
  titleHl: "HYROX sees 3.",
  sub: "And only of those who already race.",
  body: "Everyone else trains all year – in clubs with their own programme, their own sims, their own community, logging workouts in third-party apps. Nobody shows them the way to their first race. HYROX only meets them once they buy a ticket – if they ever do.",
  legend: { race: "Race weekends – for those who already race", club: "Training days in the club – invisible to HYROX" },
  stats: [
    { value: "1.4M+", label: "racers in season 25/26", source: 1 },
    { value: "11,000+", label: "HYROX Training Clubs", source: 2 },
    { value: "0", label: "public athlete profiles", source: 3 },
  ],
};

export const idea = {
  eyebrow: "02_The idea",
  title: ["The pieces exist.", "Connect them."],
  titleHl: "Connect them.",
  kicker: "What the HYROX Pass could become",
  body: "Training clubs, official programming, race sims, the HYROX Account – they are all there. What’s missing is the thread that connects them and makes progress visible long before the first ticket: from the first workout to the first race, and back.",
  pillars: [
    { n: "01", name: "Train", tag: "Home Club · official programming", text: "Train in your club with the programming you already use. Every session lands in your Pass – no extra training app." },
    { n: "02", name: "First sim", tag: "Sim Standard · Club Weekend", text: "A doable first goal: an official, judged sim in your own gym, with your crew. Rookies welcome." },
    { n: "03", name: "Pass", tag: "Index · rewards · status", text: "An Index forecast from day one, a real Index after your first sim – and points from occasional to all-in." },
    { n: "04", name: "First race", tag: "HYROX Event App", text: "Points become ticket perks, your crew becomes your Doubles partner – and the Event App takes over with the same ID." },
  ],
  standard: {
    k: "The one hard part",
    v: "The Sim Standard: defined equipment, a certified judge, a rated club. Then a sim in Hamburg counts like a sim in Barcelona.",
  },
  quote: {
    lines: ["After the first race,", "the record begins:", "pain, pride, cities."],
    hl: "the record begins:",
  },
};

export const year = {
  eyebrow: "03_Lena’s 2027",
  title: ["Meet Lena.", "Her first race."],
  titleHl: "Her first race.",
  body: "34, Hamburg, HYROX classes twice a week – never raced. This is how HYROX takes her from the gym floor to the start line in one year.",
  note: "Illustrative persona, club and data.",
  steps: <YearStep[]>[
    {
      month: "Jan",
      title: "Day one",
      text: "Lena joins the HYROX Pass through her home club. Her workouts from the official programming land in it – and a first Index forecast appears.",
      screen: "forecast",
    },
    {
      month: "Feb",
      title: "First judged sim",
      text: "Thursday night, rookie division, her own gym. Judged to the Sim Standard – her forecast turns into a real HYROX Index.",
      screen: "sim",
    },
    {
      month: "Mar",
      title: "Club Weekend",
      text: "One weekend, one sim, every HYROX club worldwide. Lena races with her crew – Hafen Athletics finishes #3 in Hamburg North.",
      screen: "league",
    },
    {
      month: "Jun",
      title: "Points that pay",
      text: "Sims, sessions, Club Weekend: Lena is now a Regular. Her points unlock 20% off her first race – booked with her club code.",
      screen: "rewards",
    },
    {
      month: "Sep",
      title: "Race weekend, rewarded",
      text: "Ticket booked: HYROX Hamburg in October, Doubles with Mia from her class. Check-in will be one scan – and her points pay off on site.",
      screen: "perks",
    },
    {
      month: "Oct",
      title: "Race day",
      text: "Her first race runs in the official HYROX Event App – same ID, no new sign-up. The result flows straight back into her record.",
      screen: "race",
    },
    {
      month: "Dec",
      title: "Her record",
      text: "One race, four judged sims, 86 workouts – and the next race already booked. Be the record.",
      screen: "record",
    },
  ],
};

export const clubWeekend = {
  eyebrow: "04_The Club Weekend",
  title: ["One weekend.", "Every club."],
  titleHl: "Every club.",
  body: "Twice a season, every HYROX club in the world runs the same sim on the same weekend – judged, live on the leaderboard, counting for every athlete’s Index. For many, it’s their first HYROX ‘race’ – in their own gym.",
  steps: [
    { k: "Announce", v: "Four weeks out: clubs sign up in Club OS, athletes book a slot – at home or as a guest." },
    { k: "Race the sim", v: "Friday to Sunday: the same sim everywhere, judged by certified coaches. First-timers race a scaled rookie division." },
    { k: "Watch it live", v: "Leaderboards by club, city and country – on The Wall and in the app." },
    { k: "Make it count", v: "Results land in every Pass and Index. Awards for Fastest Club and Highest Participation." },
  ],
  wins: [
    { k: "Athletes", v: "A first official result – or a real goal between races." },
    { k: "Clubs", v: "A full house, new leads and a revenue share." },
    { k: "HYROX", v: "Every club activated at once – and the first step to a ticket." },
  ],
  mock: {
    caption: "Live leaderboard – web and The Wall",
    title: "Club Weekend · Season kick-off",
    live: "Live",
    stats: [
      ["4,212", "clubs"],
      ["48", "countries"],
      ["196,580", "athletes"],
    ],
    tabs: ["Fastest Club", "Highest Participation"],
  },
  rivals: {
    title: "And others are already moving.",
    items: [
      { k: "DEKA Gym vs Gym", v: "All affiliates race the same workout on one weekend – global gym leaderboard.", source: 9 },
      { k: "F45 PEAK500", v: "One benchmark, the same day, in every F45 studio – scored in the F45 app. F45 is HYROX’s global gym partner.", source: 10 },
      { k: "TRYKA & GymRace", v: "HYROX-style race series with their own leagues for racers, gyms and companies.", source: 11 },
    ],
    answer: "HYROX’s answer: the Club Weekend – bigger, official, and the first step to a race.",
  },
};

export const wins = {
  eyebrow: "05_Everybody wins",
  title: ["Athletes. Clubs.", "HYROX."],
  titleHl: "HYROX.",
  columns: [
    {
      k: "Athletes",
      items: [
        "A doable first goal: an official sim in their own gym",
        "Progress they can see: Index, status, rewards",
        "Never prepare alone: training and sim partners",
        "A way into the first race – and the next",
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
        "More first-time racers – and more second races",
        "A direct relationship before the first ticket",
        "Clubs as a channel, not just licensees",
        "Data back home: Login with HYROX",
        "A new B2B channel: corporate leagues via EGYM Wellpass",
      ],
    },
  ],
  growth: {
    k: "And the racers?",
    v: "Their record, status and a way into sold-out races are where the journey leads. They become the role models in every club.",
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
  eyebrow: "06_Let’s start",
  title: ["Let’s build", "the way in."],
  titleHl: "the way in.",
  lead: "A vision for H2 2027 and beyond – built on the foundation you’re laying now. We start where your roadmap ends.",
  phases: [
    { when: "Now – H1 2027", name: "Explore", text: "Together and light-touch: funnel data, athletes who have never raced, clubs, coaches. Validated prototypes." },
    { when: "From H2 2027", name: "Build", text: "One city, 10 clubs, the first Club Weekend – live and measured, from first sim to first ticket." },
    { when: "Season 27/28+", name: "Run & scale", text: "Region by region, along the race calendar – run by us or handed over to your team." },
  ],
  principles: {
    k: "How we build and run",
    items: [
      { k: "You own the core", v: "ID, Pass, Index and data belong to HYROX – whoever builds them." },
      { k: "Start small, scale on proof", v: "One pilot per step, clear numbers, then roll out." },
      { k: "Built to hand over", v: "Documented and automated, so your team can take over at any time." },
    ],
  },
  contacts: [
    { name: "Gary Boeing", role: "CEO, apploft." },
    { name: "Manuel Cramer", role: "CPO, apploft." },
  ],
  site: "apploft.de",
};

export const prototype = {
  eyebrow: "Concept prototype · H2 2027+",
  title: ["What the HYROX Pass", "could become."],
  titleHl: "could become.",
  lead: "One athlete, one club, four steps. Tap through Lena’s way from her first workout to her first race – as she sees it, and as her club sees it.",
  viewLabel: "View",
  views: { athlete: "Athlete", club: "Club" },
  stepsLabel: "Steps",
  prev: "Previous step",
  next: "Next step",
  restart: "Start again",
  steps: [
    {
      name: "Train",
      month: "Jan",
      athlete: "Lena trains in her home club with the official programming. Every session lands in her Pass – and a first Index forecast appears.",
      club: "Hafen Athletics sees who trains HYROX but has never raced – and invites them to a rookie sim with one click.",
    },
    {
      name: "First sim",
      month: "Feb",
      athlete: "Her first judged sim, rookie division, in her own gym. The forecast becomes a real HYROX Index.",
      club: "Coach Ana judges the sim to the Sim Standard. Results go straight to HYROX – no paperwork.",
    },
    {
      name: "Pass",
      month: "Jun",
      athlete: "Sims, sessions and the Club Weekend make Lena a Regular. Her points unlock 20% off her first race.",
      club: "The club sees its funnel – from class to sim to ticket – and earns a share on every race booked with its code.",
    },
    {
      name: "First race",
      month: "Oct",
      athlete: "Race day runs in the HYROX Event App with the same ID. The result flows back – her record begins.",
      club: "Nine members raced for the first time. The club celebrates them on The Wall – and earns its revenue share.",
    },
  ],
  macLabel: "Laptop: web view",
  phoneLabel: "Phone: Lena’s app",
  note: "Concept prototype for a conversation with HYROX. Persona, club and data are illustrative.",
  back: "Back to the vision",
  open: "Open the concept prototype",
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
        "Many people who train HYROX have never raced – and nobody shows them the way in.",
        "They train in 11,000+ Training Clubs, chat groups and third-party apps; HYROX only meets them once they buy a ticket.",
        "Clubs run their own programmes and sims; rival brands court the same gyms all year round.",
      ],
    },
    {
      k: "The insight",
      v: [
        "The pieces of the way in already exist: official programming, race sims, the HYROX Account, Licence and ranking for the elite.",
        "What’s missing is the thread that connects them and makes progress visible before the first race.",
        "The two numbers that matter: how many race for the first time – and how many come back for a second.",
      ],
    },
    {
      k: "The idea",
      v: [
        "Train: in the home club, connected to the official programming – no extra training app.",
        "First sim: an official, judged sim to the Sim Standard, e.g. at the worldwide HYROX Club Weekend.",
        "Pass: what the HYROX Pass could become – Index forecast, a real Index, rewards and status.",
        "First race and back: points become ticket perks, the Event App takes over, the record begins.",
      ],
    },
    {
      k: "Value",
      v: [
        "Athletes: a doable first goal, visible progress, partners and a way into the first race.",
        "Clubs: free tools, new members, revenue share – no new rules.",
        "HYROX: more first-time and second-time racers, a relationship before the first ticket, clubs as a channel.",
      ],
    },
    {
      k: "Why now, why apploft.",
      v: [
        "New owners since Sep 2026: a consortium led by L Catterton with the founders and WNDR; 2M+ racers expected; XENOM as a second format.",
        "apploft. is a certified Premium development partner of EGYM, where HYROX Training+ already runs.",
      ],
    },
    {
      k: "The ask",
      v: [
        "A vision for H2 2027 and beyond: explore together until H1 2027 → build from H2 2027 (pilot with 10 clubs in one city) → run and scale from season 27/28.",
        "Three principles: HYROX owns the core, start small and scale on proof, built to hand over.",
      ],
    },
  ],
};
