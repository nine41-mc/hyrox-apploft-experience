/**
 * All copy for the site (EN). `de.ts` mirrors this shape exactly (checked by the type in ./index.ts).
 * Pitch story in 8 beats – the full reasoning lives in the strategy doc.
 * Facts are sourced (see `sources`); people, clubs and app data in the screens are illustrative.
 */
export const meta = {
  title: "HYROX Experience 2027 – A vision by apploft.",
  description:
    "From the first workout to the first race: a year-round platform that connects everyone who trains HYROX with their club and with HYROX. A vision concept by apploft.",
  summaryTitle: "Executive summary – HYROX Experience 2027",
  prototypeTitle: "The HYROX Pass – a concept by apploft.",
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
  { id: "weekend", label: "Club Weekend" },
  { id: "wins", label: "Everybody wins" },
  { id: "backlog", label: "Backlog" },
  { id: "pass", label: "HYROX Pass" },
];

export const hero = {
  eyebrow: "Exploration HYROX Experience 2027_",
  lines: ["Every", "day", "counts."],
  highlight: "counts.",
  box: { title: "A vision", sub: "by apploft." },
  lead: "Many people who train HYROX have never raced. 2027 is the year HYROX shows them the way in – from the first workout in their club to the first race, and back.",
  cta: "See the vision",
};

export const ticker = ["Every day counts", "Every body", "Every club", "First sim", "First race", "Be the record"];

export const statement = {
  lines: ["They train HYROX.", "Every week.", "They haven’t raced.", "Yet."],
  hl: ["Every week.", "Yet."],
  note: "Their HYROX story could start long before the first ticket – with the first workout in the club.",
  source: 0,
};

export const gap = {
  eyebrow: "01_The gap",
  title: ["365 days of training.", "3 race days."],
  titleHl: "3 race days.",
  sub: "The other 362 are HYROX’s biggest opportunity.",
  body: "Most HYROX training happens in the clubs – with their own programme, sims and community, logged in all kinds of apps. Many of these athletes haven’t raced yet. Connecting those days with HYROX is where the next million racers come from.",
  legend: { race: "Race weekends – for those who already race", club: "Training days in the club – the opportunity" },
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
  kicker: "One platform for everyone who trains",
  body: "Training clubs, official programming, race sims, the HYROX Account – they are all there. What’s missing is the thread that connects them and makes progress visible long before the first ticket: from the first workout to the first race, and back.",
  pillars: [
    { n: "01", name: "Train", tag: "Programming · tracking", text: "Official programming and on-demand classes, every session tracked – in any club, with any wearable." },
    { n: "02", name: "Fuel", tag: "Nutrition · recovery", text: "Daily nutrition tips for training and race week, plus partner offers that fit the goal." },
    { n: "03", name: "Compete", tag: "Sims · Index · races", text: "Judged sims to the Sim Standard, a personal Index, the Club Weekend – and the way to the first race." },
    { n: "04", name: "Belong", tag: "Clubs worldwide · teams", text: "Clubs worldwide – not just HYROX clubs – crews and corporate leagues, open to every athlete." },
  ],
  pass: {
    k: "The key: the HYROX Pass",
    v: "Identity, access and benefit in one card – check-in at clubs worldwide, credits, payments and loyalty.",
    cta: "Explore the HYROX Pass",
  },
  standard: {
    k: "The one hard part",
    v: "The Sim Standard: defined equipment, a certified judge, a rated club. Then a sim in Hamburg counts like a sim in Barcelona.",
  },
  quote: {
    lines: ["After the first race,", "the record begins:", "pain, pride, cities."],
    hl: "the record begins:",
  },
};

export const clubWeekend = {
  eyebrow: "03_The Club Weekend",
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
  eyebrow: "04_Everybody wins",
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
        "Club OS – free, built for their day-to-day",
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
        "Clubs as partners and a sales channel",
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
  title: ["Let’s explore", "it together."],
  titleHl: "it together.",
  lead: "A vision for H2 2027 and beyond – built on the foundation you’re laying now. We start where your roadmap ends, and use the time until then to explore.",
  phases: [
    { when: "Now – H1 2027", name: "Explore", text: "Light-touch and alongside your roadmap: data, interviews, Pass models and clickable prototypes – so H2 2027 starts with answers, not assumptions." },
    { when: "From H2 2027", name: "Build", text: "One city, 10 clubs, the first Club Weekend and the first Pass members – live and measured." },
    { when: "Season 27/28+", name: "Run & Scale", text: "Region by region, along the race calendar – run by us or handed over to your team." },
  ],
  explore: {
    k: "What we explore together",
    items: [
      "Who trains in the clubs – and what moves them to a first sim or race",
      "How the HYROX Pass fits your ID and account roadmap",
      "Pass model: inside EGYM Wellpass or a HYROX contract",
      "Credits, payments and the bunq x HYROX card",
      "A fair deal for clubs: payouts, revenue share, Club OS",
      "Clickable prototypes, tested with athletes and clubs",
    ],
  },
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
  title: ["Try the Pass."],
  titleHl: "Try the Pass.",
  lead: "Four moments with the HYROX Pass – as Lena sees them, and as her club sees them.",
  viewLabel: "View",
  views: { athlete: "Athlete", club: "Club" },
  stepsLabel: "Steps",
  prev: "Previous step",
  next: "Next step",
  restart: "Start again",
  steps: [
    {
      name: "Check-in",
      athlete: "One Pass for every club: check-in history, bookings, favourites and on-demand classes in one place.",
      club: "The club sees who checked in today – and is paid per class, not cents per visit.",
    },
    {
      name: "Train",
      athlete: "A judged sim at the station: splits tracked, Index updated.",
      club: "Coach Ana judges to the Sim Standard; results go straight to HYROX – no paperwork.",
    },
    {
      name: "Pay & earn",
      athlete: "HYROX Credits pay for shakes, sims and tickets; the linked bunq x HYROX card adds cashback.",
      club: "Credits spent in the club are paid out to the club; tickets booked with its code earn a revenue share.",
    },
    {
      name: "Race day",
      athlete: "Fast track at HYROX Berlin, wristband wallet, cashback at the shop – and the result for the record.",
      club: "Nine members raced Berlin for the first time; the club celebrates them on The Wall.",
    },
  ],
  macLabel: "Laptop: web view",
  phoneLabel: "Phone: Lena’s app",
  note: "Concept prototype for a conversation with HYROX. Persona, club and data are illustrative.",
  back: "Back to the vision",
  open: "Open the HYROX Pass",
};

export const backlog = {
  eyebrow: "05_Vision backlog",
  title: ["Vision backlog."],
  titleHl: "backlog.",
  body: "Everything the vision could hold, sorted into epics – a starting point for the Explore phase, not a plan.",
  filterLabel: "Show",
  legend: "Phases",
  phases: { all: "All", explore: "Explore", build: "Build H2 2027", later: "Later" },
  tabs: { vision: "Vision backlog", pool: "Idea pool" },
  poolIntro: "All 65 ideas from our research and workshops – unsorted by priority, as material for the Explore phase.",
  pool: [
    {
      k: "Athletes",
      items: [
        ["Record & Index", "Every race, sim and split in one record – with a running Index."],
        ["Index forecast", "A first forecast from training, before the first sim."],
        ["Club sims", "Officially measured race sims in the club, judged by a coach."],
        ["Rewards & status", "Points for sims, sessions and races – Occasional, Regular, All-in."],
        ["Coupons", "Rewards and sims turn into event discounts."],
        ["Earn by training", "Points for logged workouts and check-ins, too."],
        ["Training record", "Workouts from programming and wearables in one place."],
        ["Season planner", "Next race, target time, countdown and milestones."],
        ["Passport & patches", "Collect cities and races – digital patches for real moments."],
        ["Collectible sets", "Complete sets of patches unlock draws for experiences."],
        ["Partner finder", "Training, sim, Doubles and Relay partners nearby."],
        ["Crews & tags", "Own groups by club, city or age group."],
        ["Community", "Groups, forums and teams, built on proven community patterns."],
        ["First HYROX in 8 weeks", "A clear beginner plan from gym to first sim and race."],
        ["Rookie division", "Scaled sims and a “slow is welcome” welcome crew."],
        ["Coach-assigned start Index", "A coach sets a provisional Index until three results exist."],
        ["Ticket priority", "Status opens early access to sold-out races."],
        ["Race weekend perks", "Points pay off at the event: ticket, merch, recovery."],
        ["Attendance rewards", "Points for early check-in, judging and volunteering."],
        ["Judge & volunteer milestones", "Judging and volunteering count for status."],
        ["Your HYROX Year", "A personal year in review to share."],
        ["Elite-guided sims", "Audio-guided sims with HYROX elite athletes."],
        ["AI race coach", "Pacing and training tips from your own splits."],
      ] as [string, string][],
    },
    {
      k: "Clubs",
      items: [
        ["Home club & club finder", "Every athlete has a home club; clubs worldwide on the map."],
        ["Network pass", "Guest access to partner clubs worldwide, also when travelling."],
        ["Club OS", "Free tool for sims, leaderboards, leads and campaigns."],
        ["HYROX Club Weekend", "The same sim in every club on the same weekend."],
        ["Club season", "Club rankings, club vs club, regional leagues."],
        ["Participation awards", "Clubs ranked by participation, not only by speed."],
        ["Club village & starter ranking", "Clubs with the most starters get a village at the event."],
        ["The Wall", "A live leaderboard on a screen in the club."],
        ["Local legend", "Consistency in the club counts, not just speed."],
        ["Club events", "HYROX Nights and Sim Days, listed in the network."],
        ["Weekly club format", "A free weekly slot with a mini sim."],
        ["HYROX Week in the club", "An event week before big races, with a patch."],
        ["Club code & revenue share", "Tickets booked via the club earn it a share."],
        ["Club payments", "Paid sim nights and events run through Club OS."],
        ["Gym impact report", "Shows each club what HYROX brings in members and revenue."],
      ] as [string, string][],
    },
    {
      k: "Coaches",
      items: [
        ["Verified coach", "An official coach profile with visible certification."],
        ["Coach insights", "Progress of their athletes, sims and Index."],
      ] as [string, string][],
    },
    {
      k: "HYROX & platform",
      items: [
        ["Sim Standard", "Equipment, certified judge and club rating make sims comparable."],
        ["Login with HYROX", "An open login and API for partner apps."],
        ["Index API for gym software", "Index and sim results inside existing gym software."],
        ["Certified devices & apps", "Wearables and apps certified for HYROX data."],
        ["Index with recognition", "Transparent Index rules as a basis for qualification."],
        ["Qualification paths", "From the club season to regional finals."],
        ["Athlete & club insights", "Who trains where and who comes back."],
        ["Membership model", "A free account plus a paid tier."],
        ["Experiences as top rewards", "Elite camps and Worlds trips for top status."],
        ["Sponsored benchmark day", "The Club Weekend as a stage for partners."],
      ] as [string, string][],
    },
    {
      k: "Pass, partners & benefits",
      items: [
        ["HYROX Credits", "An in-app currency for tickets, shop and wristband."],
        ["bunq x HYROX card linked", "The existing card in the Pass: fast track and cashback."],
        ["HYROX tier in EGYM Wellpass", "Employer-funded access to clubs, sims and events."],
        ["Corporate leagues", "Companies compete as teams – scored in the Pass."],
        ["“First HYROX” course", "A certified prevention course that ends with the first sim."],
        ["HYROX in benefit cards", "Tickets and shop as an acceptance point in employer benefit cards."],
        ["Fair club payouts", "Per class and revenue share instead of cents per visit."],
        ["Other sports via partners", "Yoga, padel and recovery through partner networks."],
        ["Partner marketplace", "Gear, nutrition and training offers via rewards."],
        ["Badges", "Achievements for real moments, like Apple Watch awards."],
        ["Euro balance", "Pay for personal training, sims and events with the Pass."],
        ["Event booking integration", "Overview, booking, on-site service and post-event marketing."],
        ["Merch shop", "The HYROX shop inside the Pass."],
        ["Nutrition tracking", "Log meals next to training."],
        ["Messaging", "Athletes talk to each other in groups and crews."],
      ] as [string, string][],
    },
  ],
  epics: [
    {
      id: "pass",
      name: "HYROX Pass",
      desc: "One card for identity, access and benefit.",
      size: "xl",
      tone: "yellow",
      highlights: ["Identity.", "Access.", "Benefit."],
      features: [
        { t: "Identity, record & Index" },
        { t: "Access to clubs worldwide, like Wellpass" },
        { t: "Check-in at the door and the station" },
        { t: "Loyalty status" },
        { t: "Badges for real moments" },
        { t: "Employer-funded via Wellpass" },
      ],
    },
    {
      id: "train",
      name: "Train & track",
      desc: "Programming in, data back.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Official programming" },
        { t: "HYROX workout tracking" },
        { t: "Splits & analytics" },
        { t: "Wearables" },
        { t: "On-demand & live classes" },
      ],
    },
    {
      id: "fuel",
      name: "Fuel",
      desc: "Nutrition for training and race week.",
      size: "md",
      tone: "paper",
      features: [
        { t: "Daily nutrition tips" },
        { t: "Nutrition tracking" },
        { t: "Race-week plan" },
        { t: "Partner offers" },
      ],
    },
    {
      id: "wallet",
      name: "Wallet & shop",
      desc: "Pay with the Pass – in the club, online and at events.",
      size: "md",
      tone: "yellow",
      features: [
        { t: "Euro balance on the Pass" },
        { t: "HYROX Credits" },
        { t: "bunq x HYROX card linked" },
        { t: "Pay for PT, sims and events" },
        { t: "Merch shop" },
      ],
    },
    {
      id: "race",
      name: "Events & race day",
      desc: "From booking to the record – with the Event App.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Event overview & booking" },
        { t: "Same account in the Event App" },
        { t: "Fast-track check-in" },
        { t: "On-site service & wristband wallet" },
        { t: "Post-event marketing" },
      ],
    },
    {
      id: "compete",
      name: "Compete",
      desc: "From the first sim to the start line.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Judged sims & Sim Standard" },
        { t: "Index forecast" },
        { t: "Club Weekend" },
        { t: "Corporate leagues" },
        { t: "Qualification paths" },
      ],
    },
    {
      id: "clubs",
      name: "Clubs & community",
      desc: "Open to every athlete, in every club – like Strava or Peloton.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Club finder worldwide" },
        { t: "Club OS" },
        { t: "Groups & leaderboards" },
        { t: "Messaging between athletes" },
        { t: "Crews & partner finder" },
        { t: "Other sports via partners" },
      ],
    },
    {
      id: "corporate",
      name: "Corporate & benefits",
      desc: "A new B2B channel.",
      size: "md",
      tone: "paper",
      features: [
        { t: "HYROX tier in Wellpass" },
        { t: "“First HYROX” course" },
        { t: "Company teams" },
      ],
    },
    {
      id: "platform",
      name: "Data & platform",
      desc: "HYROX owns the core.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Fair club payouts" },
        { t: "Login with HYROX" },
        { t: "Club & athlete insights" },
        { t: "Partner APIs" },
      ],
    },
  ],
};

export const pass = {
  eyebrow: "HYROX Pass · concept",
  title: ["One card.", "Every club.", "Every race."],
  titleHl: "Every race.",
  lead: "What the HYROX Pass could become: identity, access and benefit in one card – check in at clubs worldwide, train, pay, earn credits and race. Built on the HYROX account, open to everyone who trains.",
  back: "Back to the vision",
  meanings: {
    k: "Three meanings of Pass",
    items: [
      { k: "Identity", v: "Record and Index – one account for every club, sim and race." },
      { k: "Access", v: "Check-in at clubs worldwide, bookings and events – with fast track on race day." },
      { k: "Benefit", v: "Employer-funded, with HYROX Credits, loyalty status and partner offers." },
    ],
  },
  gap: {
    k: "What every other pass is missing",
    v: "Fitness passes count visits. The HYROX Pass counts progress: events, ranking, teams and progress across clubs – with a fair deal for clubs instead of cents per check-in.",
  },
  features: {
    k: "Inside the Pass",
    items: [
      { icon: "scan", k: "Check-in", v: "At the club door and at the sim station" },
      { icon: "history", k: "Check-in history", v: "Every session, every club" },
      { icon: "calendar", k: "My bookings", v: "Classes, sims, events" },
      { icon: "map", k: "Club finder", v: "Clubs worldwide, with recommendations" },
      { icon: "heart", k: "Favourites", v: "Clubs, coaches, classes" },
      { icon: "play", k: "On-demand workouts", v: "Official programming, anywhere" },
      { icon: "video", k: "Live online classes", v: "With HYROX coaches" },
      { icon: "gift", k: "Partner offers", v: "Gear, nutrition, recovery" },
      { icon: "trophy", k: "Challenges", v: "Club Weekend, corporate leagues" },
      { icon: "activity", k: "Index & BioAge", v: "Progress you can see" },
      { icon: "coins", k: "HYROX Credits", v: "An in-app currency and benefit balance" },
      { icon: "card", k: "bunq x HYROX card", v: "The existing HYROX card – pay and earn cashback, linked to the Pass" },
    ],
  },
  gallery: {
    k: "The Pass in pictures",
    close: "Close",
    prev: "Previous image",
    next: "Next image",
    items: [
      { src: "phone-checkin", caption: "Check-in with the Pass" },
      { src: "phone-sim", caption: "A judged sim at the station" },
      { src: "phone-wallet", caption: "Wallet: HYROX Credits and the bunq x HYROX card" },
      { src: "phone-rewards", caption: "Status and rewards" },
      { src: "laptop-record", caption: "The record on the web" },
      { src: "phone-perks", caption: "Race weekend: fast track and perks" },
      { src: "phone-race", caption: "Race day in the HYROX Event App" },
      { src: "phone-record", caption: "My record" },
    ],
  },
  day: {
    eyebrow: "Lena’s 24 hours",
    title: ["The day before", "HYROX Berlin."],
    titleHl: "HYROX Berlin.",
    body: "One athlete, one card – from the club in Hamburg to the start line in Berlin.",
    steps: [
      { time: "Fri 06:45", k: "Check-in at the club", v: "One tap with the Pass at Hafen Athletics – it works at partner clubs worldwide, too.", tag: "Check-in" },
      { time: "Fri 07:00", k: "Station check-in", v: "She taps in at the sim station; splits and heart rate land in her Pass.", tag: "Tracking" },
      { time: "Fri 08:10", k: "Shake on the Pass", v: "Recovery shake at the club bar, paid with HYROX Credits.", tag: "Pay" },
      { time: "Fri 08:30", k: "Fuel for tomorrow", v: "Breakfast, lunch and dinner tips for the day before a race – carbs up, nothing new.", tag: "Fuel" },
      { time: "Sat 08:00", k: "Fast track in Berlin", v: "Check-in at HYROX Berlin with the Pass – fast lane, wristband wallet already topped up.", tag: "Race day" },
      { time: "Sat 11:42", k: "For the record", v: "Every split goes straight into her record and Index.", tag: "Record" },
      { time: "Sat 13:00", k: "Cashback and credits", v: "10% cashback at the merch stand with the bunq x HYROX card; the race and her sims earn credits for the next ticket.", tag: "Credits" },
    ],
    note: "How it started: “First HYROX”, a certified beginner course in her club that ended with her first sim – paid from her employer’s health budget.",
  },
  models: {
    k: "Two ways to launch",
    items: [
      { k: "Option 1 · Inside EGYM Wellpass", v: "A HYROX tier in Wellpass: clubs as premium partners, sims, Club Weekend and event credits. Employer contracts and tax logic already exist." },
      { k: "Option 2 · A HYROX Pass contract", v: "HYROX offers the Pass itself – to athletes and employers – and keeps the full relationship." },
    ],
    extras: [
      { k: "Corporate leagues", v: "Companies compete as teams: sims in the club, the Club Weekend and the corporate relay on race day – all scored in the Pass." },
      { k: "First HYROX", v: "A certified prevention course in the club that ends with the first sim – eligible for employer health budgets." },
      { k: "Tax-smart", v: "In Germany, employer-funded fitness usually runs as a tax-free benefit of up to €50 a month." },
    ],
  },
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
        "Many people who train HYROX haven’t raced yet – the next generation of racers is already in the clubs.",
        "They train in 11,000+ Training Clubs and many apps; today the first direct touchpoint with HYROX is usually the ticket.",
        "Clubs run their own programmes and sims, and new formats court the same gyms – a reason to bring HYROX even closer to the clubs.",
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
        "Train, Fuel, Compete, Belong: programming and tracking, nutrition, sims and races, clubs worldwide and corporate leagues.",
        "The HYROX Pass as the key: identity, access and benefit – check-in, credits, payments, loyalty.",
        "Two ways to launch the Pass: inside EGYM Wellpass or as a HYROX contract.",
      ],
    },
    {
      k: "Value",
      v: [
        "Athletes: a goal, visible progress, partners and one card for every club and race.",
        "Clubs: free tools, new members, fair payouts and revenue share.",
        "HYROX: a bigger sport, a relationship before the first ticket, more first- and second-time racers, a B2B channel.",
      ],
    },
    {
      k: "Why now, why apploft.",
      v: [
        "New owners since Sep 2026: a consortium led by L Catterton with the founders and WNDR; 2M+ racers expected; XENOM as a second format.",
        "apploft. built PadelCity – with EGYM Wellpass and Hansefit integrated – and is a certified Premium development partner of EGYM.",
      ],
    },
    {
      k: "The ask",
      v: [
        "Explore together until H1 2027, alongside your roadmap → build from H2 2027 (pilot with 10 clubs in one city) → run and scale from season 27/28.",
        "Three principles: HYROX owns the core, start small and scale on proof, built to hand over.",
      ],
    },
  ],
};

