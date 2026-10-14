/**
 * Alle Texte der Website (DE). Spiegelt exakt die Struktur von `en.ts` (geprüft in ./index.ts).
 * Die Pitch-Story in 8 Beats – die ganze Herleitung steht im Strategie-Dokument.
 * Fakten sind belegt (siehe `sources`); Personen, Clubs und App-Daten in den Screens sind illustrativ.
 */
import type { ScreenKey } from "@/components/screens/AppScreens";

type YearStep = { month: string; title: string; text: string; screen: ScreenKey };

export const meta = {
  title: "HYROX Experience 2027 – Eine Vision von apploft.",
  description:
    "Jeder Tag zählt: eine Plattform, die jeden Racer und jeden Club das ganze Jahr mit HYROX verbindet. Ein Visionskonzept von apploft.",
  summaryTitle: "Executive Summary – HYROX Experience 2027",
};

export const ui = {
  summaryBtn: "Summary",
  talk: "Lass uns reden",
  summaryLong: "Executive Summary",
  sources: "Quellen_",
  summaryLink: "Executive Summary →",
  print: "Drucken / als PDF",
  summaryHeadA: "Executive",
  summaryHeadB: "Summary.",
  summaryNote: "Quellen und Details: siehe die ganze Story auf der Hauptseite. Screens und Daten im Konzept sind illustrativ.",
  openMenu: "Menü öffnen",
  closeMenu: "Menü schließen",
  backToTop: "Nach oben",
  sections: "Kapitel",
  language: "Sprache",
  illustrativeData: "Illustrative Daten.",
  wallCaption: "The Wall – ein Screen für die Trainingsfläche",
  prevMonth: "Voriger Monat",
  nextMonth: "Nächster Monat",
  golf: "Golf:",
  gridAria: "Ein Jahr mit 365 Tagen: 3 Race-Tage in Gelb, 362 Trainingstage in Grau",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  heroImgAlt: "Zwei Athleten werfen Wall Balls, von oben fotografiert",
  statementAlt: "Ein Athlet über einen Schlitten gebeugt, nachdem er alles gegeben hat",
  sledAlt: "Ein Athlet schiebt einen Schlitten, Kopf gesenkt",
  webCaption: "Web: das öffentliche Racer-Profil auf hyrox.com",
  appCaption: "App: derselbe Record in der Hosentasche",
  clubCaption: "Web für Clubs: Club OS",
};

export const nav = [
  { id: "gap", label: "Die Lücke" },
  { id: "idea", label: "Die Idee" },
  { id: "year", label: "Lenas 2027" },
  { id: "wins", label: "Alle gewinnen" },
  { id: "talk", label: "Start" },
];

export const hero = {
  eyebrow: "HYROX Experience 2027_",
  lines: ["Jeder", "Tag", "zählt."],
  highlight: "zählt.",
  box: { title: "Eine Vision", sub: "von apploft." },
  lead: "Racer geben am Race Day alles – und verschwinden danach für Monate in ihre Gyms. 2027 wird das Jahr, in dem jeder Trainingstag, jeder Club und jeder Racer Teil von HYROX wird.",
  cta: "Zur Vision",
};

export const ticker = ["Jeder Tag zählt", "Be the record", "Every body", "Jeder Club", "Ein Record", "For life"];

export const statement = {
  lines: ["Racer geben", "alles.", "Sie kriegen eine Zahl.", "Kein Konto."],
  hl: ["alles.", "Kein Konto."],
  note: "Ergebnisse auf hyrox.com: Suche per Name. Kein Profil, keine Historie, kein Status.",
  source: 3,
};

export const gap = {
  eyebrow: "01_Die Lücke",
  title: ["HYROX besitzt", "3 Tage im Jahr."],
  titleHl: "3 Tage",
  sub: "Die Clubs besitzen die anderen 362.",
  body: "Dazwischen trainieren Racer in Gyms mit eigenem Programm, eigenen Sims, eigener Community. Dritt-Apps verkaufen ihnen Profile auf Basis von HYROX-Daten. HYROX kommt im Alltag nicht vor.",
  legend: { race: "Race-Wochenenden", club: "Trainingstage im Club – für HYROX unsichtbar" },
  stats: [
    { value: "1,4 Mio.+", label: "Racer in der Saison 25/26", source: 1 },
    { value: "11.000+", label: "HYROX Training Clubs", source: 2 },
    { value: "0", label: "öffentliche Racer-Profile", source: 3 },
  ],
};

export const idea = {
  eyebrow: "02_Die Idee",
  title: ["Ihr habt es gebaut.", "Jetzt öffnet es."],
  titleHl: "Jetzt öffnet es.",
  body: "HYROX hat eine Lizenz und ein rollierendes Punkte-Ranking – für ein paar tausend Elite-Athleten. Golf zeigt, wie es für alle funktioniert: eine Platzreife, ein Handicap, ein Heimatclub, überall willkommen.",
  pillars: [
    { n: "01", name: "HYROX ID", golf: "Mitgliedsausweis", text: "Der bestehende HYROX Account als Record fürs Leben – dieselbe ID in der Event App." },
    { n: "02", name: "Licence", golf: "Platzreife", text: "Im eigenen Club von einem zertifizierten Coach abgenommen. Rookie bis Elite." },
    { n: "03", name: "Index", golf: "Handicap", text: "Aus Races und gejudgten Club-Sims. Überall vergleichbar." },
    { n: "04", name: "Home Club", golf: "Heimatclub + Greenfee", text: "Deine Crew, deine Liga – und Gastrecht in jedem HYROX-Club." },
  ],
  standard: {
    k: "Der eine harte Teil",
    v: "Der Sim Standard: definiertes Equipment, ein zertifizierter Judge, ein gerateter Club. Dann zählt eine Sim in Hamburg wie eine in Barcelona.",
  },
  quote: {
    lines: ["Das Konto ist die Story:", "Schmerzen, Stolz, Städte.", "Über Jahre."],
    hl: "Über Jahre.",
  },
};

export const year = {
  eyebrow: "03_Lenas 2027",
  title: ["Das ist Lena.", "Ihr 2027."],
  titleHl: "Ihr 2027.",
  body: "34, Hamburg, zwei HYROX-Races hinter sich. Das ändert sich, wenn HYROX jede Woche dabei ist – nicht nur am Race Day.",
  note: "Illustrative Persona, Club und Daten.",
  steps: <YearStep[]>[
    {
      month: "Jan",
      title: "Licence Day",
      text: "Coach Ana nimmt Lenas Licence in ihrem Home Club ab. Sie ist jetzt Level-1-Racer – hier beginnt ihr Record.",
      screen: "licence",
    },
    {
      month: "Feb",
      title: "Erste gejudgte Sim",
      text: "Eine komplette Race-Sim am Donnerstagabend, gejudgt nach Sim Standard. Sie zählt: ihr erster Index erscheint.",
      screen: "sim",
    },
    {
      month: "Mär",
      title: "Club Weekend",
      text: "Ein Wochenende, eine Sim, jeder HYROX-Club weltweit. Hafen Athletics wird Dritter in Hamburg Nord – und die Club Season beginnt.",
      screen: "league",
    },
    {
      month: "Apr",
      title: "Race Day",
      text: "HYROX Hamburg läuft in der offiziellen HYROX Event App – gleiche HYROX ID, keine neue Registrierung. Das Ergebnis fließt direkt zurück in ihren Record.",
      screen: "race",
    },
    {
      month: "Jun",
      title: "Unterwegs und doch zu Hause",
      text: "Dienstreise nach Barcelona. Mit dem Network Pass trainiert sie als Gast in einem HYROX-Club vor Ort – inklusive Gast-Sim auf dem Board.",
      screen: "pass",
    },
    {
      month: "Sep",
      title: "Silver-Status",
      text: "Dranbleiben zahlt sich aus: Silver-Status bringt Vorkaufsrecht für das nächste ausverkaufte Race. Keine Warteschlange, keine Bots.",
      screen: "rewards",
    },
    {
      month: "Nov",
      title: "Race-Wochenende mit Rewards",
      text: "HYROX Berlin. Der Check-in ist ein Scan mit ihrer HYROX ID – und die Punkte aus ihren Club-Sims zahlen sich vor Ort aus.",
      screen: "perks",
    },
    {
      month: "Dez",
      title: "Ihr Record",
      text: "Vier Städte, zwei Races, neun gejudgte Sims, ein Index, der die Geschichte erzählt. Be the record.",
      screen: "record",
    },
  ],
};

export const wins = {
  eyebrow: "04_Alle gewinnen",
  title: ["Racer. Clubs.", "HYROX."],
  titleHl: "HYROX.",
  columns: [
    {
      k: "Racer",
      items: [
        "Nie allein vorbereiten: Crews, Partner, Sim Nights",
        "Offizielle Splits, Index und Status – ohne Dritt-Abo",
        "Ein Weg in ausverkaufte Races",
        "Eine ID für die HYROX Event App",
      ],
    },
    {
      k: "Clubs",
      items: [
        "Club OS – kostenlos, keine neuen Regeln",
        "Neue Mitglieder über das Netzwerk",
        "Revenue Share auf Tickets und Club-Events",
        "Punkte, die mit zum Race-Wochenende reisen",
      ],
    },
    {
      k: "HYROX",
      items: [
        "Eine direkte Beziehung zu 2 Mio.+ Racern",
        "Umsatz zwischen den Race-Wochenenden",
        "Daten zurück: Login with HYROX",
        "Lizenzierte Mitglieder – das Rückgrat eines Verbands",
        "Ein neuer B2B-Kanal: Firmen-Ligen über EGYM Wellpass",
      ],
    },
  ],
  growth: {
    k: "Und die nächste Million?",
    v: "Die racet noch nicht. Sie macht HYROX-Klassen. Die Club Sim ist ihr erstes Race – im eigenen Gym, mit der eigenen Crew.",
  },
  proof: {
    title: "Belegt: Community entsteht offline zuerst.",
    items: [
      { k: "Strava", v: "1 Mio. Clubs – neue Clubs 2025 fast vervierfacht", source: 4 },
      { k: "Peloton", v: "1,8 % Churn pro Monat mit Hardware vs. ~7–8 % nur App", source: 5 },
      { k: "IRONMAN", v: "Belohnt Clubs für jedes Mitglied, das startet", source: 6 },
      { k: "CrossFit", v: "Open-Anmeldungen −32 % nach höheren Affiliate-Gebühren", source: 7 },
    ],
  },
  rivals: {
    title: "Und andere bewegen sich schon.",
    items: [
      { k: "DEKA Gym vs Gym", v: "Alle Affiliates laufen am selben Wochenende dasselbe Workout – weltweites Gym-Leaderboard.", source: 9 },
      { k: "F45 PEAK500", v: "Ein Benchmark, am selben Tag, in jedem F45-Studio – gewertet in der F45-App. F45 ist globaler Gym-Partner von HYROX.", source: 10 },
      { k: "TRYKA & GymRace", v: "Race-Serien im HYROX-Stil mit eigenen Ligen für Racer, Gyms und Firmen.", source: 11 },
    ],
    answer: "Die Antwort von HYROX: der Club Weekend – größer, offiziell, und er zählt für den Index.",
  },
};

export const about = {
  k: "apploft.",
  desc: "Digitales Produktstudio aus Hamburg, seit 2008. 250+ Apps, 100 Mio.+ Downloads – wir gestalten, bauen und betreiben Apps langfristig.",
  refs: {
    k: "Referenzen",
    items: ["PadelCity", "qalcha", "SC Freiburg", "BVB", "HSV", "Dynamo Dresden", "FC Basel"],
  },
  partner: {
    k: "Premium-Partner",
    v: "Zertifizierter Premium-Entwicklungspartner von EGYM – dort läuft HYROX Training+ bereits.",
    source: 8,
  },
};

export const ask = {
  eyebrow: "05_Los geht’s",
  title: ["Lasst uns den", "Record bauen."],
  titleHl: "Record bauen.",
  phases: [
    { when: "Q1 2027", name: "Discovery", text: "6 Wochen mit Racern, Coaches, Clubs. Validierte Prototypen." },
    { when: "Q2–Q3 2027", name: "Pilot", text: "Eine Stadt, 10 Clubs, eine Club Season – live und gemessen." },
    { when: "Saison 27/28", name: "Rollout", text: "Region für Region, entlang des Race-Kalenders." },
  ],
  contacts: [
    { name: "Gary Boeing", role: "CEO, apploft." },
    { name: "Manuel Cramer", role: "CPO, apploft." },
  ],
  site: "apploft.de",
};

export const footer = {
  disclaimer:
    "Ein Visionskonzept von apploft. für ein Gespräch mit HYROX. Screens, Persona, Clubs und Daten sind illustrativ. HYROX ist eine Marke ihres Inhabers; Fotos © HYROX, nur zur internen Präsentation.",
};

export const sources = [
  { n: 1, label: "Infront-Pressemitteilung, 08.09.2026", url: "https://www.infront.sport/news/participations-sports/consortium-led-by-l-catterton-in-partnership-with-hyrox-founders-acquires-infronts-majority-stake-in-hyrox-clone" },
  { n: 2, label: "Endurance.biz, 02.12.2025", url: "https://endurance.biz/2025/industry-news/hyrox-prepares-for-largest-ever-race-at-london-excel-and-unveils-london-week-of-fitness-featuring-hyrox-youngstars-in-2026/" },
  { n: 3, label: "hyrox.com – Ergebnisse per Namenssuche, keine Athletenprofile (Okt 2026)", url: "https://hyrox.com/" },
  { n: 4, label: "Strava Year in Sport 2025", url: "https://press.strava.com/articles/strava-releases-12th-annual-year-in-sport-trend-report-2025" },
  { n: 5, label: "Peloton Q4 FY25 Shareholder Letter", url: "https://www.sec.gov/Archives/edgar/data/1639825/000163982525000132/q42025shareholderletter.htm" },
  { n: 6, label: "Slowtwitch über IRONMAN TriClubs", url: "https://www.slowtwitch.com/triathlon/show-me-the-money-hardly-the-secret-to-ironman-and-zoots-successful-club-programs/" },
  { n: 7, label: "Morning Chalk Up, 04.03.2025", url: "https://morningchalkup.com/2025/03/04/2025-crossfit-open-registrations-down-32-percent/" },
  { n: 8, label: "Athletech News, 01.10.2026", url: "https://athletechnews.com/hyrox-pushes-deeper-into-gyms-hyrox-training-plus-abc-fitness-egym/" },
  { n: 9, label: "Spartan – DEKA Gym vs Gym", url: "https://cn.spartan.com/en/deka/gym-versus-gym" },
  { n: 10, label: "Athletech News – F45 PEAK500, 03/2026", url: "https://athletechnews.com/f45-peak500-fitness-competition-red-bull/" },
  { n: 11, label: "Hybrid Fitness Media – UK/EU-Racemarkt, 07/2026", url: "https://hybridfitnessmedia.com/?p=4949" },
];

export const summary = {
  title: "Executive Summary",
  sub: "HYROX Experience 2027 – der Pitch auf einer Seite",
  blocks: [
    {
      k: "Das Problem",
      v: [
        "HYROX besitzt 3 Tage im Jahr eines Racers; die Clubs besitzen die anderen 362.",
        "1,4 Mio.+ Racer und 11.000+ Training Clubs – kaum miteinander oder mit HYROX verbunden.",
        "Dritt-Apps monetarisieren HYROX-Daten; Clubs machen eigene Sims und Zertifikate; Konkurrenz-Marken werben um dieselben Gyms.",
      ],
    },
    {
      k: "Der Insight",
      v: [
        "HYROX hat Licence und ein rollierendes Punkte-Ranking schon gebaut – nur für die Elite.",
        "Jeder Racer hat bereits einen HYROX Account (Pflicht für jedes Ticket) – das Fundament steht, es tut zwischen den Races nur nichts.",
        "Golf zeigt, wie man es öffnet: Platzreife, Handicap, Heimatclub, überall spielen.",
      ],
    },
    {
      k: "Die Idee",
      v: [
        "HYROX ID: der bestehende HYROX Account als Record fürs Leben – dieselbe ID, die auch die HYROX Event App nutzt.",
        "Licence + HYROX Index: gespeist aus Races und gejudgten Club-Sims (Sim Standard).",
        "Home Club + Network Pass, Club-Season-Ligen, The Wall.",
        "Rewards, die sich am Race-Wochenende auszahlen; Club OS kostenlos für jeden Club.",
      ],
    },
    {
      k: "Mehrwert",
      v: [
        "Racer: Community, offizielle Analytics, Status, ein Weg in ausverkaufte Races.",
        "Clubs: kostenlose Tools, neue Mitglieder, Revenue Share – keine neuen Regeln.",
        "HYROX: direkte Beziehung zu 2 Mio.+ Racern, Umsatz übers ganze Jahr, Daten zurück, Conversion in die Event App, ein Rückgrat für einen Verband.",
      ],
    },
    {
      k: "Warum jetzt, warum apploft.",
      v: [
        "Gründer wieder am Steuer mit L Catterton und WNDR (Sep 2026); 2 Mio.+ Racer erwartet; XENOM als zweites Format.",
        "apploft. ist zertifizierter Premium-Entwicklungspartner von EGYM, wo HYROX Training+ bereits läuft.",
      ],
    },
    {
      k: "Der Ask",
      v: ["Discovery in Q1 2027 (6 Wochen) → Pilot mit 10 Clubs in einer Stadt → Rollout zur Saison 27/28. Gebaut von apploft."],
    },
  ],
};
