/**
 * All copy for the site (EN). A German version will mirror this shape later.
 * Facts are sourced (see `sources`); people, clubs and app data in the screens are illustrative.
 */

export const nav = [
  { id: "gap", label: "The gap" },
  { id: "today", label: "Today" },
  { id: "model", label: "The model" },
  { id: "racers", label: "Racers" },
  { id: "clubs", label: "Clubs" },
  { id: "hyrox", label: "HYROX" },
  { id: "build", label: "How" },
] as const;

export const hero = {
  eyebrow: "HYROX Experience 2027_",
  lines: ["Every", "day", "counts."],
  highlight: "counts.",
  box: { title: "A vision", sub: "by apploft." },
  lead: "Racers give everything on race day – then disappear into their gyms for months. 2027 is the year every training day, every club and every racer becomes part of HYROX.",
  cta: "See the vision",
};

export const ticker = ["Every day counts", "Be the record", "Every body", "Every club", "One record", "For life"];

export const gap = {
  eyebrow: "01_The gap",
  title: ["HYROX owns", "3 days a year."],
  titleHl: "3 days",
  sub: "The clubs own the other 362.",
  body: "A racer lives the brand at one to three race weekends a year. In between, they train in a gym that runs its own programme, its own sims, its own community – and HYROX is nowhere in the conversation.",
  legend: { race: "Race weekends", club: "Training days in the club – invisible to HYROX" },
  stats: [
    { value: "1.4M+", label: "racers in season 25/26", source: 1 },
    { value: "2M+", label: "expected in season 26/27", source: 2 },
    { value: "11,000+", label: "HYROX Training Clubs", source: 3 },
    { value: "0", label: "public racer profiles", source: 4 },
  ],
  meanwhile: {
    title: "Meanwhile, others fill the gap.",
    items: [
      {
        k: "Data",
        v: "Third-party apps build profiles, splits and rankings from HYROX results – one reports around 600,000 users and just launched a subscription.",
        source: 5,
      },
      {
        k: "Clubs",
        v: "Gyms host their own “HYROX-style” sims and team events, issue their own certificates – and rival race brands court the very same gyms.",
        source: 6,
      },
      {
        k: "Racers",
        v: "Sold-out races, queues “like Glastonbury”, and community-built bots that alert when a slot frees up. Between races, the #1 topic is finding a partner.",
        source: 7,
      },
    ],
  },
};

export const insight = {
  eyebrow: "03_The insight",
  title: ["You already", "built it."],
  titleHl: "built it.",
  sub: "For the elite.",
  body: "HYROX has a licence and a rolling points ranking – best results over 365 days, scored against the field. It is a handicap in all but name. Today it serves a few thousand pros. Open it up, and it becomes the reason 2 million racers stay connected all year.",
  today: {
    label: "Today",
    items: ["Athlete License – elite only", "Points ranking – races only", "Results – search by name", "Clubs – licensees"],
  },
  next: {
    label: "2027",
    items: ["HYROX Licence – for every body", "HYROX Index – races + club sims", "Racer Record – for life", "Clubs – partners"],
  },
};

export const model = {
  eyebrow: "04_The model",
  title: ["Golf figured", "this out."],
  titleHl: "this out.",
  body: "A golfer earns a licence once, keeps a handicap that counts at every course, belongs to a home club – and is welcome everywhere. HYROX has every ingredient to do the same for fitness racing.",
  pillars: [
    {
      n: "01",
      name: "HYROX ID",
      golf: "Membership card",
      text: "One account for every race, club, coach and partner app. The racer owns their record – for life.",
    },
    {
      n: "02",
      name: "Licence",
      golf: "Course licence",
      text: "Your entry ticket, signed off in your club by a certified coach. Levels from Rookie to Elite.",
    },
    {
      n: "03",
      name: "Index",
      golf: "Handicap",
      text: "A living performance number fed by races AND judged club sims. Comparable in every club, every city.",
    },
    {
      n: "04",
      name: "Home Club",
      golf: "Home club + green fee",
      text: "Your crew, your league, your local legends. Travel? Train as a guest in any HYROX club.",
    },
  ],
  standard: {
    title: "The one hard part: the Sim Standard.",
    text: "Golf makes a handicap fair with course ratings. HYROX needs the same for club sims: defined equipment, a certified judge, a rated club. Then a sim in Hamburg counts like a sim in Barcelona.",
  },
};

export const indexDemo = {
  eyebrow: "The HYROX Index_",
  title: "Every result moves the number.",
  body: "Best 5 results in the last 365 days, each scored against a benchmark time for the division – the logic HYROX already uses for elite points. Club sims count once they are judged to the Sim Standard. Tap the results to see the Index react.",
  benchmarkMinutes: 60,
  results: [
    { id: "r1", date: "Feb 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:31:12", on: true },
    { id: "r2", date: "Mar 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:28:40", on: true },
    { id: "r3", date: "Apr 2027", kind: "Race", place: "HYROX Hamburg", time: "1:24:05", on: true },
    { id: "r4", date: "Jun 2027", kind: "Club Sim", place: "Guest sim, Barcelona", time: "1:26:30", on: false },
    { id: "r5", date: "Sep 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:22:58", on: false },
    { id: "r6", date: "Nov 2027", kind: "Race", place: "HYROX Berlin", time: "1:20:41", on: false },
  ],
  rules: ["Best 5 of 365 days", "Reliable from 3 results", "Fades when inactive", "Can’t be bought – only earned"],
};

export const year = {
  eyebrow: "06_A year as a racer",
  title: ["Meet Lena.", "Her 2027."],
  titleHl: "Her 2027.",
  body: "34, Hamburg, two HYROX races behind her. Here is what changes when HYROX is with her every week – not just on race day.",
  note: "Illustrative persona, club and data.",
  steps: [
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
      title: "Club Season",
      text: "Hafen Athletics enters the Hamburg North league. Every member’s sim adds to the club’s score.",
      screen: "league",
    },
    {
      month: "Apr",
      title: "Race day",
      text: "HYROX Hamburg runs in the official HYROX Event App – same HYROX ID, no new sign-up. Her crew follows along, and the result flows straight back into her record.",
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
      text: "HYROX Berlin. She registered with her HYROX ID, so check-in is one scan – and the points from her club sims pay off on site: ticket discount, merch voucher, recovery zone.",
      screen: "perks",
    },
    {
      month: "Dec",
      title: "Her record",
      text: "Four cities, two races, nine judged sims, one Index that tells the story. Be the record.",
      screen: "record",
    },
  ],
} as const;

export const clubs = {
  eyebrow: "08_For clubs",
  title: ["We give.", "We don’t dictate."],
  titleHl: "We give.",
  body: "Clubs don’t need HYROX to run HYROX classes anymore. So the platform has to be worth it on its own: free tools, new members, real revenue – no new rules.",
  benefits: [
    { k: "Club OS", v: "Run judged sims, see every member’s progress, publish club events into the network. Free for every Training Club." },
    { k: "New members", v: "Racers on a Network Pass and newcomers looking for a home club find you on the map – with your coaches and your sim nights." },
    { k: "Revenue share", v: "Tickets booked with your club code and paid club events earn you a share – the model rival brands already use to win gyms." },
    { k: "Points that travel", v: "Every sim and session in your club earns HYROX points – redeemed at the next race weekend. Your members feel the club and the event as one." },
    { k: "The Wall", v: "A live leaderboard screen for the gym floor: local legends, league table, next sim night. HYROX feeling, your brand." },
    { k: "Impact report", v: "Finally the number nobody has today: how many members and how much revenue HYROX brings to your club." },
  ],
};

export const forHyrox = {
  eyebrow: "09_For HYROX",
  title: ["From events", "to a movement."],
  titleHl: "a movement.",
  body: "HYROX founders put it simply: community and culture happen locally, in the gym, every day. The platform turns that into a relationship HYROX can see, serve and grow.",
  outcomes: [
    { k: "Know every racer", v: "A direct, consented relationship with 2M+ racers – not just a ticket buyer list." },
    { k: "Year-round revenue", v: "Racer+ membership, partner rewards and club revenue between the race weekends – and points that bring racers back to the next event." },
    { k: "Bring the data home", v: "Login with HYROX: third-party apps connect to the racer record instead of scraping around it." },
    { k: "Clubs on your side", v: "11,000+ clubs as partners with a reason to stay – instead of licensees with a reason to leave." },
    { k: "Ready for a federation", v: "Licensed members, rated clubs, certified judges – the backbone a recognised sport needs on the road to the Olympics." },
  ],
};

export const ecosystem = {
  eyebrow: "One record, open to partners_",
  title: "The HYROX ID sits in the middle.",
  body: "Training stays with the partners who do it best. The record stays with HYROX.",
  nodes: ["Races", "Clubs", "Coaches", "Training+", "Wearables", "Partner apps"],
};

export const build = {
  eyebrow: "11_How we build it",
  title: ["Small start.", "Big season."],
  titleHl: "Big season.",
  phases: [
    {
      when: "Q1 2027",
      name: "Discovery",
      text: "Six weeks with racers, coaches and club owners. Sim Standard, Index rules and the club deal – validated with clickable prototypes.",
    },
    {
      when: "Q2–Q3 2027",
      name: "Pilot",
      text: "One city, 10 clubs, one Club Season. HYROX ID, Licence, judged sims, Club OS – live, measured, iterated.",
    },
    {
      when: "Season 27/28",
      name: "Rollout",
      text: "Index for every racer, Network Pass, rewards and the open API – rolled out region by region with the race calendar.",
    },
  ],
  team: {
    title: "Why us",
    items: [
      { k: "apploft.", v: "Hamburg, since 2008. 250+ apps, 100M+ downloads – product teams that design, build and run apps for the long haul." },
      { k: "Sport & fans", v: "Apps and fan accounts for SC Freiburg, BVB and HSV, the OMR Festival app – we know how to turn events and clubs into everyday products." },
      { k: "Built for scale", v: "Products live in 108 countries and 18 languages – ready for a race calendar on six continents." },
    ],
  },
};

export const cta = {
  title: ["Let’s build", "the record."],
  titleHl: "the record.",
  body: "We would love to take this from vision to a pilot with you.",
  contacts: [
    { name: "Gary Boeing", role: "Managing Director, apploft." },
    { name: "Manuel Cramer", role: "apploft." },
  ],
  site: "apploft.de",
};

export const footer = {
  disclaimer:
    "A vision concept by apploft. for a conversation with HYROX. Screens, persona, clubs and data are illustrative. HYROX is a trademark of its owner; photography © HYROX, used for internal presentation only.",
};

export const sources = [
  { n: 1, label: "Infront press release, 08.09.2026", url: "https://www.infront.sport/news/participations-sports/consortium-led-by-l-catterton-in-partnership-with-hyrox-founders-acquires-infronts-majority-stake-in-hyrox-clone" },
  { n: 2, label: "Athletech News, 15.07.2026", url: "https://athletechnews.com/hyrox-expands-global-race-calendar-plans-more-multi-week-events/" },
  { n: 3, label: "Endurance.biz, 02.12.2025", url: "https://endurance.biz/2025/industry-news/hyrox-prepares-for-largest-ever-race-at-london-excel-and-unveils-london-week-of-fitness-featuring-hyrox-youngstars-in-2026/" },
  { n: 4, label: "hyrox.com – results searchable by name, no athlete profiles (Oct 2026)", url: "https://hyrox.com/" },
  { n: 5, label: "ROXFIT Ultra launch, Oct 2026", url: "https://insider.fitt.co/press-release/roxfit-launches-new-hybrid-training-experience-with-ultra-subscription/" },
  { n: 6, label: "Morning Chalk Up, 17.10.2025", url: "https://morningchalkup.com/2025/10/17/hyrox-is-booming-should-crossfit-gyms-add-hyrox-affiliation/" },
  { n: 7, label: "Business Insider via AOL", url: "https://www.aol.com/getting-tickets-fitness-competitions-hyrox-080001168.html" },
  { n: 8, label: "Deloitte / DSSV Eckdaten 2026, 03/2026", url: "https://www.deloitte.com/de/de/about/press-room/deutscher-fitnessmarkt-waechst-trotz-schwaechelnder-wirtschaft.html" },
  { n: 9, label: "Strava Year in Sport 2025", url: "https://press.strava.com/articles/strava-releases-12th-annual-year-in-sport-trend-report-2025" },
  { n: 10, label: "Nike newsroom, Nov 2024", url: "https://about.nike.com/en/newsroom/releases/nike-run-club-app-new-features" },
  { n: 11, label: "Peloton Q4 FY25 shareholder letter", url: "https://www.sec.gov/Archives/edgar/data/1639825/000163982525000132/q42025shareholderletter.htm" },
  { n: 12, label: "Playtomic press release, 16.12.2025", url: "https://www.dupr.com/post/playtomic-partners-with-dupr-to-power-the-next-era-of-community-driven-pickleball" },
  { n: 13, label: "Spond, 22.11.2024", url: "https://www.spond.com/news-and-blog/spond-3-million-monthly-active-users/" },
  { n: 14, label: "Slowtwitch on IRONMAN TriClubs", url: "https://www.slowtwitch.com/triathlon/show-me-the-money-hardly-the-secret-to-ironman-and-zoots-successful-club-programs/" },
  { n: 15, label: "Morning Chalk Up, 04.03.2025", url: "https://morningchalkup.com/2025/03/04/2025-crossfit-open-registrations-down-32-percent/" },
  { n: 16, label: "parkwalker study, Univ. of Stirling", url: "https://www.cambrian-news.co.uk/sport/running/research-show-parkrun-participation-is-surging-thanks-to-parkwalkers-869489" },
  { n: 17, label: "hyrox.com – INTERSPORT HYROX Hamburg event page", url: "https://hyrox.com/event/intersport-hyrox-hamburg/" },
  { n: 18, label: "HYROX365 affiliation & Performance Coach pages", url: "https://www.hyrox365.com/affiliation" },
  { n: 19, label: "HYROX Academy", url: "https://www.hyrox365.com/academy" },
  { n: 20, label: "Health Club Management, 08.09.2026 (figures unaudited)", url: "https://www.healthclubmanagement.co.uk/health-club-management-news/L-Catterton-led-consortium-buys-Hyrox-stake-as-founders-regain-control/363576" },
  { n: 21, label: "HYROX Elites portal (Athlete License)", url: "https://elites.hyrox.com/" },
];

export const racers = {
  eyebrow: "05_For racers",
  title: ["Why racers open it", "every week."],
  titleHl: "every week.",
  body: "Racers already pay third-party apps for profiles, splits and rankings – built on HYROX data, without HYROX. The Experience 2027 gives them all of it officially, and adds what no app can: the club floor and the race.",
  pillars: [
    {
      k: "Community",
      title: "Never prepare alone.",
      items: ["Race crews for the next event", "Doubles & relay partner finder", "Sim nights and meetups in your club", "Travel crews for away races"],
    },
    {
      k: "In the club",
      title: "Online meets the gym floor.",
      items: ["Splits, pacing and race predictions – official", "Judged sims that count for your Index", "Your name on The Wall", "Coach feedback on every sim"],
    },
    {
      k: "Between races",
      title: "Partner, plan, status.",
      items: ["Season planner: next race, target time, countdown", "Partner training plans in one place", "Index and status that grow every month", "Priority access to sold-out races"],
    },
    {
      k: "On to race day",
      title: "One ID into the Event App.",
      items: ["Same account in the official HYROX Event App", "Booking and check-in without a new sign-up", "Points become race-weekend perks", "Results flow back into your record"],
    },
  ],
  loop: {
    title: "The loop: club → app → race → club.",
    steps: [
      { k: "Club", v: "Train, sim, get judged" },
      { k: "Experience app", v: "Record, Index, plan, crew" },
      { k: "HYROX Event App", v: "Book, check in, race" },
      { k: "Back home", v: "Results and points flow back" },
    ],
  },
};

export const audiences = {
  eyebrow: "07_New racers",
  title: ["The next million", "don’t race yet."],
  titleHl: "don’t race yet.",
  body: "Most people in a HYROX class have never bought a ticket. They are the growth. The Club Sim is their first race – in their own gym, with their crew, at no cost – and the first step on a path that ends at a start line.",
  funnel: [
    { k: "Gym members", v: "12.4M in Germany alone", source: 8 },
    { k: "In HYROX classes", v: "at 11,000+ Training Clubs", source: 3 },
    { k: "First Club Sim", v: "the low-barrier first ‘race’" },
    { k: "Licence", v: "signed off by their coach" },
    { k: "First race", v: "with their crew, perks included" },
    { k: "Repeat racer", v: "Index, status, next city" },
  ],
  segments: [
    { k: "The racer", v: "1–3 races a year. Wants progress, status and a way into sold-out races." },
    { k: "The class regular", v: "Trains HYROX-style twice a week, never raced. Needs a first goal that feels doable." },
    { k: "The supporter", v: "1.5M+ spectators a season. Follows a friend today – signs up for the next race tomorrow.", source: 1 },
    { k: "The coach", v: "Runs the classes, judges the sims, owns the relationship – and gets an official status for it." },
  ],
};

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
      k: "Growth",
      v: [
        "The next million don’t race yet: Club Sims turn class regulars and supporters into first-time racers.",
        "Proven by Strava, Peloton, Playtomic, IRONMAN: community is built offline first – the app amplifies; the partner club must win.",
      ],
    },
    {
      k: "The ask",
      v: ["Discovery in Q1 2027 (6 weeks) → pilot with 10 clubs in one city → rollout with season 27/28. Built by apploft."],
    },
  ],
};

export const learn = {
  eyebrow: "10_Learning from the best",
  title: ["Community is built", "offline first."],
  titleHl: "offline first.",
  body: "The platforms that build real communities all do the same thing: they organise people in real places – and use the app to make it stick.",
  models: [
    { k: "Strava", fact: "1M clubs; new clubs almost 4× in 2025", source: 9, how: "Clubs, challenges, Local Legends – rewards showing up, not speed.", lesson: "A Local Legend in every HYROX club." },
    { k: "Nike Run Club", fact: "Free app in 160+ countries", source: 10, how: "Guided runs with coaches in your ear, local crews meeting at the store.", lesson: "Elite athletes as the voice of guided sessions; clubs as the weekly meeting point." },
    { k: "Peloton", fact: "1.8% monthly churn with hardware vs. ~7–8% app-only", source: 11, how: "Live leaderboards, instructors as community leaders, member-made tags.", lesson: "The gym is HYROX’s ‘hardware’: offline bonds, digital reinforcement." },
    { k: "Playtomic", fact: "4.7M+ players at 6,700+ clubs", source: 12, how: "Level system plus open matches with players of your level; SaaS for clubs.", lesson: "The Index powers matchmaking: doubles partners, open sims, club tools." },
    { k: "Spond", fact: "3.3M monthly active users", source: 13, how: "Free for clubs – sessions, sign-ups, payments; earns on transactions.", lesson: "Free Club OS that removes real admin work; revenue from transactions, not fees." },
    { k: "IRONMAN", fact: "TriClubs ranked by members who race", source: 14, how: "Free club programme, club villages at races, priority entry, status tiers.", lesson: "Rank and reward clubs for bringing members to the start line." },
  ],
  warnings: [
    { k: "CrossFit Open", v: "Registrations −32% in 2025 after affiliate fees rose – squeeze the partner gyms and the network shrinks.", source: 15 },
    { k: "parkrun", v: "A ‘slow is welcome’ role (parkwalker) lifted walker numbers by ~55% – beginners need permission to join.", source: 16 },
  ],
  principles: [
    "Offline first, the app amplifies",
    "Make the partner club the winner",
    "Reward showing up, not just speed",
    "A clear ramp from gym to start line",
    "Let people form their own crews",
  ],
};

export const today = {
  eyebrow: "02_HYROX today",
  title: ["Where racers and", "clubs meet HYROX."],
  titleHl: "meet HYROX.",
  body: "Today’s journey in one picture: a strong event product, a growing licence business – and a long silence in between. Prices from public pages, Germany unless stated.",
  racer: {
    label: "Racer",
    steps: [
      { k: "Discover", v: "HYROX class in a Training Club, gym finder, social", cost: "free" },
      { k: "Ticket", v: "Online shop, dynamic pricing, personalised", cost: "€119 single · €114 p.p. doubles · €75 p.p. relay + fees", source: 17 },
      { k: "Account", v: "HYROX Account: name, birth date, division – needed to race", cost: "free", source: 17 },
      { k: "Prepare", v: "Classes in the gym, partner training apps", cost: "gym fee + app subscriptions" },
      { k: "Race day", v: "Check-in, chip, wave; crew on spectator tickets", cost: "spectators €15/day", source: 17 },
      { k: "After", v: "Results by name search, race photos to buy", cost: "photos extra" },
    ],
    end: "Then: nothing – until the next ticket.",
  },
  club: {
    label: "Club & coach",
    steps: [
      { k: "Training Club", v: "Brand rights, gym finder, Performance Hub, race sims, PFT", cost: "~€90/month EU · ~$130 US (unofficial)", source: 18 },
      { k: "Performance Coach", v: "Individual coach licence", cost: "from €1,150 / year", source: 18 },
      { k: "Academy", v: "Foundation free · Level 1 · Level 2", cost: "L1 $299–499 · L1+L2 $629", source: 19 },
      { k: "Performance Centre", v: "Territory exclusivity, equipment package", cost: "$295/month + equipment", source: 18 },
      { k: "Training+", v: "Official programming inside the gym’s own app (Oct 2026)", cost: "not public" },
    ],
    end: "What the club gets back: content – not members, not revenue.",
  },
  model: {
    title: "The business model",
    revenue: { value: "~€135M", label: "revenue 2025, ~€30M EBITDA – forecast up to ~€300M for 2026 (reported, unaudited)", source: 20 },
    streams: ["Race entries & add-ons", "Sponsorship (PUMA, Myprotein, Concept2, Centr, Amazfit …)", "Licences: clubs, coaches, Academy", "Merchandise", "Spectators & experiences", "Elite Athlete License (€347 + VAT)"],
  },
  questions: {
    title: "Questions we’d love to ask you",
    items: [
      "What does the HYROX Account do for age-groupers today – and what is on its roadmap?",
      "How many racers come back for a second race – and how fast?",
      "Do you know which club a racer trains in – and which club sold the ticket?",
      "How will the Event App and the account work together?",
      "Which wearable and partner data reaches HYROX today?",
      "What do clubs ask you for most?",
    ],
  },
};
