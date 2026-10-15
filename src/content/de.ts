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
    "Vom ersten Workout zum ersten Rennen: eine Plattform, die alle, die HYROX trainieren, das ganze Jahr mit ihrem Club und mit HYROX verbindet. Ein Visionskonzept von apploft.",
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
  backToTop: "nach oben",
  skip: "Zum Inhalt springen",
  newTab: "(öffnet in neuem Tab)",
  source: "Quelle",
  carousel: "Lenas Jahr, Monat für Monat",
  appScreen: "App-Screen",
  sections: "Kapitel",
  language: "Sprache",
  illustrativeData: "Illustrative Daten.",
  wallCaption: "The Wall – ein Screen für die Trainingsfläche",
  prevMonth: "Voriger Monat",
  nextMonth: "Nächster Monat",
  builtOn: "Baut auf:",
  gridAria: "Ein Jahr mit 365 Tagen: 3 Race-Tage in Gelb, 362 Trainingstage in Grau",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  heroImgAlt: "Zwei Athleten werfen Wall Balls, von oben fotografiert",
  statementAlt: "Ein Athlet über einen Schlitten gebeugt, nachdem er alles gegeben hat",
  sledAlt: "Ein Athlet schiebt einen Schlitten, Kopf gesenkt",
  webCaption: "Web: das öffentliche Athletenprofil auf hyrox.com",
  appCaption: "App: derselbe Record in der Hosentasche",
  clubCaption: "Web für Clubs: Club OS",
};

export const nav = [
  { id: "gap", label: "Die Lücke" },
  { id: "idea", label: "Die Idee" },
  { id: "year", label: "Lenas 2027" },
  { id: "weekend", label: "Club Weekend" },
  { id: "wins", label: "Alle gewinnen" },
];

export const hero = {
  eyebrow: "HYROX Experience 2027_",
  lines: ["Jeder", "Tag", "zählt."],
  highlight: "zählt.",
  box: { title: "Eine Vision", sub: "von apploft." },
  lead: "Die meisten, die HYROX trainieren, sind noch nie gestartet. 2027 wird das Jahr, in dem HYROX ihnen den Weg zeigt – vom ersten Workout im Club zum ersten Rennen und wieder zurück.",
  cta: "Zur Vision",
};

export const ticker = ["Jeder Tag zählt", "Every body", "Jeder Club", "Erste Sim", "Erstes Rennen", "Be the record"];

export const statement = {
  lines: ["Sie trainieren HYROX.", "Jede Woche.", "Gestartet sind sie nie.", "Niemand zeigt ihnen den Weg."],
  hl: ["Jede Woche.", "Niemand zeigt ihnen den Weg."],
  note: "Vor dem ersten Ticket gibt es kein Profil, keinen Fortschritt, kein Ziel. Ergebnisse gibt es erst nach einem Rennen – per Namenssuche.",
  source: 3,
};

export const gap = {
  eyebrow: "01_Die Lücke",
  title: ["HYROX sieht", "3 Tage im Jahr."],
  titleHl: "3 Tage",
  sub: "Und nur von denen, die schon starten.",
  body: "Alle anderen trainieren das ganze Jahr – in Clubs mit eigenem Programm, eigenen Sims, eigener Community, ihre Workouts in Dritt-Apps. Niemand zeigt ihnen den Weg zum ersten Rennen. HYROX lernt sie erst kennen, wenn sie ein Ticket kaufen – falls sie es je tun.",
  legend: { race: "Race-Wochenenden – für alle, die schon starten", club: "Trainingstage im Club – für HYROX unsichtbar" },
  stats: [
    { value: "1,4 Mio.+", label: "Racer in der Saison 25/26", source: 1 },
    { value: "11.000+", label: "HYROX Training Clubs", source: 2 },
    { value: "0", label: "öffentliche Athletenprofile", source: 3 },
  ],
};

export const idea = {
  eyebrow: "02_Die Idee",
  title: ["Die Teile gibt es.", "Verbindet sie."],
  titleHl: "Verbindet sie.",
  kicker: "Was der HYROX Pass werden könnte",
  body: "Training Clubs, offizielles Programming, Race Sims, der HYROX Account – alles ist da. Es fehlt der rote Faden, der sie verbindet und Fortschritt sichtbar macht, lange vor dem ersten Ticket: vom ersten Workout zum ersten Rennen und wieder zurück.",
  pillars: [
    { n: "01", name: "Trainieren", tag: "Home Club · offizielles Programming", text: "Im eigenen Club, mit dem Programming, das du schon nutzt. Jede Einheit landet im Pass – ohne zusätzliche Trainings-App." },
    { n: "02", name: "Erste Sim", tag: "Sim Standard · Club Weekend", text: "Ein machbares erstes Ziel: eine offizielle, gejudgte Sim im eigenen Gym, mit der eigenen Crew. Rookies willkommen." },
    { n: "03", name: "Pass", tag: "Index · Rewards · Status", text: "Eine Index-Prognose ab Tag eins, ein echter Index nach der ersten Sim – und Punkte von gelegentlich bis voll dabei." },
    { n: "04", name: "Erstes Rennen", tag: "HYROX Event App", text: "Punkte werden zu Ticket-Vorteilen, die Crew zum Doubles-Partner – und die Event App übernimmt mit derselben ID." },
  ],
  standard: {
    k: "Der eine harte Teil",
    v: "Der Sim Standard: definiertes Equipment, ein zertifizierter Judge, ein gerateter Club. Dann zählt eine Sim in Hamburg wie eine in Barcelona.",
  },
  quote: {
    lines: ["Nach dem ersten Rennen", "beginnt der Record:", "Schmerzen, Stolz, Städte."],
    hl: "beginnt der Record:",
  },
};

export const year = {
  eyebrow: "03_Lenas 2027",
  title: ["Das ist Lena.", "Ihr erstes Rennen."],
  titleHl: "Ihr erstes Rennen.",
  body: "34, Hamburg, zweimal pro Woche HYROX-Klasse – noch nie gestartet. So bringt HYROX sie in einem Jahr von der Trainingsfläche an die Startlinie.",
  note: "Illustrative Persona, Club und Daten.",
  steps: <YearStep[]>[
    {
      month: "Jan",
      title: "Tag eins",
      text: "Lena kommt über ihren Home Club zum HYROX Pass. Ihre Workouts aus dem offiziellen Programming landen dort – und eine erste Index-Prognose erscheint.",
      screen: "forecast",
    },
    {
      month: "Feb",
      title: "Erste gejudgte Sim",
      text: "Donnerstagabend, Rookie-Division, im eigenen Gym. Gejudgt nach Sim Standard – aus der Prognose wird ein echter HYROX Index.",
      screen: "sim",
    },
    {
      month: "Mär",
      title: "Club Weekend",
      text: "Ein Wochenende, eine Sim, jeder HYROX-Club weltweit. Lena startet mit ihrer Crew – Hafen Athletics wird Dritter in Hamburg Nord.",
      screen: "league",
    },
    {
      month: "Jun",
      title: "Punkte, die sich lohnen",
      text: "Sims, Einheiten, Club Weekend: Lena ist jetzt Regular. Ihre Punkte bringen 20 % auf ihr erstes Rennen – gebucht mit dem Code ihres Clubs.",
      screen: "rewards",
    },
    {
      month: "Sep",
      title: "Race-Wochenende mit Rewards",
      text: "HYROX Hamburg, Doubles mit Mia aus ihrer Klasse. Der Check-in ist ein Scan – und ihre Punkte zahlen sich vor Ort aus.",
      screen: "perks",
    },
    {
      month: "Okt",
      title: "Race Day",
      text: "Ihr erstes Rennen läuft in der offiziellen HYROX Event App – gleiche ID, keine neue Registrierung. Das Ergebnis fließt direkt zurück in ihren Record.",
      screen: "race",
    },
    {
      month: "Dez",
      title: "Ihr Record",
      text: "Ein Rennen, vier gejudgte Sims, 86 Workouts – und das nächste Rennen ist schon gebucht. Be the record.",
      screen: "record",
    },
  ],
};

export const clubWeekend = {
  eyebrow: "04_Der Club Weekend",
  title: ["Ein Wochenende.", "Jeder Club."],
  titleHl: "Jeder Club.",
  body: "Zweimal pro Saison läuft jeder HYROX-Club weltweit am selben Wochenende dieselbe Sim – gejudgt, live im Leaderboard, und sie zählt für den Index aller Athletes. Für viele ist es ihr erstes HYROX-„Rennen“ – im eigenen Gym.",
  steps: [
    { k: "Ankündigen", v: "Vier Wochen vorher: Clubs melden sich im Club OS an, Athletes buchen einen Slot – zu Hause oder als Gast." },
    { k: "Sim laufen", v: "Freitag bis Sonntag: überall dieselbe Sim, gejudgt von zertifizierten Coaches. Wer zum ersten Mal dabei ist, startet in der skalierten Rookie-Division." },
    { k: "Live mitfiebern", v: "Leaderboards nach Club, Stadt und Land – auf The Wall und in der App." },
    { k: "Es zählt", v: "Ergebnisse landen in jedem Pass und Index. Awards für Fastest Club und Highest Participation." },
  ],
  wins: [
    { k: "Athletes", v: "Ein erstes offizielles Ergebnis – oder ein echtes Ziel zwischen den Rennen." },
    { k: "Clubs", v: "Volles Haus, neue Leads und ein Revenue Share." },
    { k: "HYROX", v: "Alle Clubs auf einmal aktiviert – und der erste Schritt zum Ticket." },
  ],
  mock: {
    caption: "Live-Leaderboard – Web und The Wall",
    title: "Club Weekend · Season kick-off",
    live: "Live",
    stats: [
      ["4.212", "Clubs"],
      ["48", "Länder"],
      ["196.580", "Athletes"],
    ],
    tabs: ["Fastest Club", "Highest Participation"],
  },
  rivals: {
    title: "Und andere bewegen sich schon.",
    items: [
      { k: "DEKA Gym vs Gym", v: "Alle Affiliates laufen am selben Wochenende dasselbe Workout – weltweites Gym-Leaderboard.", source: 9 },
      { k: "F45 PEAK500", v: "Ein Benchmark, am selben Tag, in jedem F45-Studio – gewertet in der F45-App. F45 ist globaler Gym-Partner von HYROX.", source: 10 },
      { k: "TRYKA & GymRace", v: "Race-Serien im HYROX-Stil mit eigenen Ligen für Racer, Gyms und Firmen.", source: 11 },
    ],
    answer: "Die Antwort von HYROX: der Club Weekend – größer, offiziell, und der erste Schritt ins Rennen.",
  },
};

export const wins = {
  eyebrow: "05_Alle gewinnen",
  title: ["Athletes. Clubs.", "HYROX."],
  titleHl: "HYROX.",
  columns: [
    {
      k: "Athletes",
      items: [
        "Ein machbares erstes Ziel: eine offizielle Sim im eigenen Gym",
        "Fortschritt, den man sieht: Index, Status, Rewards",
        "Nie allein vorbereiten: Trainings- und Sim-Partner",
        "Ein Weg ins erste Rennen – und ins nächste",
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
        "Mehr Erst-Starter – und mehr zweite Rennen",
        "Eine direkte Beziehung schon vor dem ersten Ticket",
        "Clubs als Kanal, nicht nur als Lizenznehmer",
        "Daten zurück: Login with HYROX",
        "Ein neuer B2B-Kanal: Firmen-Ligen über EGYM Wellpass",
      ],
    },
  ],
  growth: {
    k: "Und die Racer?",
    v: "Record, Status und ein Weg in ausverkaufte Rennen sind das Ziel der Reise. Racer werden die Vorbilder in jedem Club.",
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
  eyebrow: "06_Los geht’s",
  title: ["Lasst uns den", "Weg ins Rennen bauen."],
  titleHl: "Weg ins Rennen bauen.",
  lead: "Eine Vision für H2 2027 und darüber hinaus – gebaut auf dem Fundament, das ihr gerade legt. Wir setzen dort an, wo eure Roadmap endet.",
  phases: [
    { when: "Jetzt – H1 2027", name: "Explore", text: "Gemeinsam und schlank: Funnel-Daten, Athletes ohne Rennerfahrung, Clubs, Coaches. Validierte Prototypen." },
    { when: "Ab H2 2027", name: "Build", text: "Eine Stadt, 10 Clubs, der erste Club Weekend – live und gemessen, von der ersten Sim bis zum ersten Ticket." },
    { when: "Saison 27/28+", name: "Run & Scale", text: "Region für Region, entlang des Race-Kalenders – von uns betrieben oder an euer Team übergeben." },
  ],
  principles: {
    k: "Wie wir bauen und betreiben",
    items: [
      { k: "Der Kern gehört euch", v: "ID, Pass, Index und Daten gehören HYROX – egal, wer baut." },
      { k: "Klein starten, mit Belegen skalieren", v: "Ein Pilot pro Schritt, klare Kennzahlen, dann ausrollen." },
      { k: "Gebaut zum Übergeben", v: "Dokumentiert und automatisiert, damit euer Team jederzeit übernehmen kann." },
    ],
  },
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
        "Die meisten, die HYROX trainieren, sind noch nie gestartet – und niemand zeigt ihnen den Weg.",
        "Sie trainieren in 11.000+ Training Clubs, Chatgruppen und Dritt-Apps; HYROX lernt sie erst beim Ticketkauf kennen.",
        "Clubs machen eigene Programme und Sims; Konkurrenz-Marken werben das ganze Jahr um dieselben Gyms.",
      ],
    },
    {
      k: "Der Insight",
      v: [
        "Die Teile für den Weg ins Rennen gibt es schon: offizielles Programming, Race Sims, den HYROX Account, Licence und Ranking für die Elite.",
        "Es fehlt der rote Faden, der sie verbindet und Fortschritt vor dem ersten Rennen sichtbar macht.",
        "Die zwei Zahlen, die zählen: Wie viele starten zum ersten Mal – und wie viele kommen ein zweites Mal?",
      ],
    },
    {
      k: "Die Idee",
      v: [
        "Trainieren: im Home Club, verbunden mit dem offiziellen Programming – ohne zusätzliche Trainings-App.",
        "Erste Sim: offiziell und gejudgt nach Sim Standard, z. B. beim weltweiten HYROX Club Weekend.",
        "Pass: was der HYROX Pass werden könnte – Index-Prognose, echter Index, Rewards und Status.",
        "Erstes Rennen und zurück: Punkte werden zu Ticket-Vorteilen, die Event App übernimmt, der Record beginnt.",
      ],
    },
    {
      k: "Mehrwert",
      v: [
        "Athletes: ein machbares erstes Ziel, sichtbarer Fortschritt, Partner und ein Weg ins erste Rennen.",
        "Clubs: kostenlose Tools, neue Mitglieder, Revenue Share – keine neuen Regeln.",
        "HYROX: mehr Erst- und Zweit-Starter, eine Beziehung schon vor dem ersten Ticket, Clubs als Kanal.",
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
      v: [
        "Eine Vision für H2 2027 und darüber hinaus: gemeinsam explorieren bis H1 2027 → bauen ab H2 2027 (Pilot mit 10 Clubs in einer Stadt) → betreiben und skalieren ab Saison 27/28.",
        "Drei Prinzipien: Der Kern gehört HYROX, klein starten und mit Belegen skalieren, gebaut zum Übergeben.",
      ],
    },
  ],
};
