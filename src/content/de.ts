/**
 * Alle Texte der Website (DE). Spiegelt exakt die Struktur von `en.ts` (geprüft in ./index.ts).
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
  indexLabel: "Lenas HYROX Index",
  noResults: "Keine Ergebnisse",
  reliable: "Belastbar",
  results: "Ergebnisse",
  provisional: "Vorläufig",
  of3: "von 3",
  scoreNote: "Illustrative Ergebnisse. Score = Referenzzeit ÷ Ergebnis × 100.",
  prevMonth: "Voriger Monat",
  nextMonth: "Nächster Monat",
  loopNote: "…und die nächste Saison beginnt wieder im Club.",
  funnelNote: "Stufen, nicht maßstabsgetreu. Die Club Sim ist die Auffahrt.",
  funnelAria: "Weg vom Gym-Mitglied zum Wiederholungs-Racer",
  forHyrox: "Für HYROX",
  principles: "Fünf Prinzipien, nach denen wir gestalten_",
  golf: "Golf:",
  gridAria: "Ein Jahr mit 365 Tagen: 3 Race-Tage in Gelb, 362 Trainingstage in Grau",
  months: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  ecosystemAria: "HYROX ID verbunden mit",
  heroImgAlt: "Zwei Athleten werfen Wall Balls, von oben fotografiert",
  momentAlt: "Banner mit der Aufschrift: This is the moment you have been training for",
  arenaAlt: "Ein HYROX-Race in einer historischen Halle mit Glasdach",
  sledAlt: "Ein Athlet schiebt einen Schlitten, Kopf gesenkt",
};

export const nav = [
  { id: "gap", label: "Die Lücke" },
  { id: "today", label: "Heute" },
  { id: "model", label: "Das Modell" },
  { id: "racers", label: "Racer" },
  { id: "clubs", label: "Clubs" },
  { id: "hyrox", label: "HYROX" },
  { id: "build", label: "Wie" },
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

export const gap = {
  eyebrow: "01_Die Lücke",
  title: ["HYROX besitzt", "3 Tage im Jahr."],
  titleHl: "3 Tage",
  sub: "Die Clubs besitzen die anderen 362.",
  body: "Ein Racer erlebt die Marke an ein bis drei Race-Wochenenden im Jahr. Dazwischen trainiert er in einem Gym mit eigenem Programm, eigenen Sims, eigener Community – und HYROX kommt im Alltag nicht vor.",
  legend: { race: "Race-Wochenenden", club: "Trainingstage im Club – für HYROX unsichtbar" },
  stats: [
    { value: "1,4 Mio.+", label: "Racer in der Saison 25/26", source: 1 },
    { value: "2 Mio.+", label: "erwartet in der Saison 26/27", source: 2 },
    { value: "11.000+", label: "HYROX Training Clubs", source: 3 },
    { value: "0", label: "öffentliche Racer-Profile", source: 4 },
  ],
  meanwhile: {
    title: "Währenddessen füllen andere die Lücke.",
    items: [
      {
        k: "Daten",
        v: "Dritt-Apps bauen Profile, Splits und Rankings aus HYROX-Ergebnissen – eine nennt rund 600.000 Nutzer und hat gerade ein Abo gestartet.",
        source: 5,
      },
      {
        k: "Clubs",
        v: "Gyms veranstalten eigene „HYROX-style“-Sims und Team-Events, vergeben eigene Zertifikate – und konkurrierende Race-Marken werben um genau diese Gyms.",
        source: 6,
      },
      {
        k: "Racer",
        v: "Ausverkaufte Races, Warteschlangen „wie bei Glastonbury“ und selbstgebaute Bots, die freie Startplätze melden. Zwischen den Races ist das Top-Thema: einen Partner finden.",
        source: 7,
      },
    ],
  },
};

export const insight = {
  eyebrow: "03_Der Insight",
  title: ["Ihr habt es", "schon gebaut."],
  titleHl: "schon gebaut.",
  sub: "Für die Elite.",
  body: "HYROX hat eine Lizenz und ein rollierendes Punkte-Ranking – die besten Ergebnisse aus 365 Tagen, gewertet gegen das Feld. Faktisch ein Handicap. Heute nutzen es ein paar tausend Pros. Öffnet es, und es wird der Grund, warum 2 Millionen Racer das ganze Jahr verbunden bleiben.",
  today: {
    label: "Heute",
    items: ["Athlete License – nur Elite", "Punkte-Ranking – nur Races", "Ergebnisse – Suche per Name", "Clubs – Lizenznehmer"],
  },
  next: {
    label: "2027",
    items: ["HYROX Licence – for every body", "HYROX Index – Races + Club-Sims", "Racer Record – for life", "Clubs – Partner"],
  },
};

export const model = {
  eyebrow: "04_Das Modell",
  title: ["Golf hat das", "längst gelöst."],
  titleHl: "längst gelöst.",
  body: "Ein Golfer macht einmal die Platzreife, hat ein Handicap, das auf jedem Platz gilt, gehört zu einem Heimatclub – und ist überall willkommen. HYROX hat alle Zutaten, um dasselbe für Fitness Racing zu schaffen.",
  pillars: [
    {
      n: "01",
      name: "HYROX ID",
      golf: "Mitgliedsausweis",
      text: "Ein Konto für jedes Race, jeden Club, jeden Coach und jede Partner-App. Der Racer besitzt seinen Record – for life.",
    },
    {
      n: "02",
      name: "Licence",
      golf: "Platzreife",
      text: "Das Eintrittsticket, im eigenen Club von einem zertifizierten Coach abgenommen. Level von Rookie bis Elite.",
    },
    {
      n: "03",
      name: "Index",
      golf: "Handicap",
      text: "Ein lebendiger Leistungswert aus Races UND gejudgten Club-Sims. Vergleichbar in jedem Club, in jeder Stadt.",
    },
    {
      n: "04",
      name: "Home Club",
      golf: "Heimatclub + Greenfee",
      text: "Deine Crew, deine Liga, deine Local Legends. Unterwegs? Als Gast in jedem HYROX-Club trainieren.",
    },
  ],
  standard: {
    title: "Der eine harte Teil: der Sim Standard.",
    text: "Golf macht das Handicap über Course Ratings fair. HYROX braucht dasselbe für Club-Sims: definiertes Equipment, ein zertifizierter Judge, ein gerateter Club. Dann zählt eine Sim in Hamburg wie eine in Barcelona.",
  },
};

export const indexDemo = {
  eyebrow: "Der HYROX Index_",
  title: "Jedes Ergebnis bewegt die Zahl.",
  body: "Die besten 5 Ergebnisse der letzten 365 Tage, jeweils gegen eine Referenzzeit der Division gewertet – die Logik, die HYROX schon für Elite-Punkte nutzt. Club-Sims zählen, sobald sie nach Sim Standard gejudgt sind. Tippt die Ergebnisse an und seht, wie der Index reagiert.",
  benchmarkMinutes: 60,
  results: [
    { id: "r1", date: "Feb 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:31:12", on: true },
    { id: "r2", date: "Mär 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:28:40", on: true },
    { id: "r3", date: "Apr 2027", kind: "Race", place: "HYROX Hamburg", time: "1:24:05", on: true },
    { id: "r4", date: "Jun 2027", kind: "Club Sim", place: "Gast-Sim, Barcelona", time: "1:26:30", on: false },
    { id: "r5", date: "Sep 2027", kind: "Club Sim", place: "Hafen Athletics, Hamburg", time: "1:22:58", on: false },
    { id: "r6", date: "Nov 2027", kind: "Race", place: "HYROX Berlin", time: "1:20:41", on: false },
  ],
  rules: ["Beste 5 aus 365 Tagen", "Belastbar ab 3 Ergebnissen", "Verblasst bei Inaktivität", "Nicht kaufbar – nur verdient"],
};

export const year = {
  eyebrow: "06_Ein Jahr als Racer",
  title: ["Das ist Lena.", "Ihr 2027."],
  titleHl: "Ihr 2027.",
  body: "34, Hamburg, zwei HYROX-Races hinter sich. So verändert sich ihr Jahr, wenn HYROX jede Woche dabei ist – nicht nur am Race Day.",
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
      title: "Club Season",
      text: "Hafen Athletics startet in der Liga Hamburg Nord. Jede Sim eines Mitglieds zählt für den Club.",
      screen: "league",
    },
    {
      month: "Apr",
      title: "Race Day",
      text: "HYROX Hamburg läuft in der offiziellen HYROX Event App – gleiche HYROX ID, keine neue Registrierung. Ihre Crew fiebert mit, und das Ergebnis fließt direkt zurück in ihren Record.",
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
      text: "HYROX Berlin. Angemeldet mit ihrer HYROX ID, ist der Check-in ein Scan – und die Punkte aus ihren Club-Sims zahlen sich vor Ort aus: Ticket-Rabatt, Merch-Gutschein, Recovery Zone.",
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

export const clubs = {
  eyebrow: "08_Für Clubs",
  title: ["Wir geben.", "Wir diktieren nicht."],
  titleHl: "Wir geben.",
  body: "Clubs brauchen HYROX nicht mehr, um HYROX-Klassen anzubieten. Die Plattform muss sich also selbst lohnen: kostenlose Tools, neue Mitglieder, echter Umsatz – keine neuen Regeln.",
  benefits: [
    { k: "Club OS", v: "Gejudgte Sims durchführen, den Fortschritt jedes Mitglieds sehen, Club-Events ins Netzwerk stellen. Kostenlos für jeden Training Club." },
    { k: "Neue Mitglieder", v: "Racer mit Network Pass und Neue auf der Suche nach einem Home Club finden euch auf der Karte – mit euren Coaches und Sim Nights." },
    { k: "Revenue Share", v: "Tickets mit eurem Club-Code und bezahlte Club-Events bringen euch einen Anteil – das Modell, mit dem Konkurrenz-Marken schon Gyms gewinnen." },
    { k: "Punkte, die reisen", v: "Jede Sim und jede Session im Club bringt HYROX-Punkte – eingelöst beim nächsten Race-Wochenende. Club und Event fühlen sich wie eins an." },
    { k: "The Wall", v: "Ein Live-Leaderboard für die Trainingsfläche: Local Legends, Ligatabelle, nächste Sim Night. HYROX-Gefühl, eure Marke." },
    { k: "Impact Report", v: "Endlich die Zahl, die heute niemand hat: wie viele Mitglieder und wie viel Umsatz HYROX eurem Club bringt." },
  ],
};

export const forHyrox = {
  eyebrow: "09_Für HYROX",
  title: ["Von Events", "zur Bewegung."],
  titleHl: "zur Bewegung.",
  body: "Die HYROX-Gründer sagen es selbst: Community und Kultur entstehen lokal, im Gym, jeden Tag. Die Plattform macht daraus eine Beziehung, die HYROX sehen, bedienen und ausbauen kann.",
  outcomes: [
    { k: "Jeden Racer kennen", v: "Eine direkte, eingewilligte Beziehung zu 2 Mio.+ Racern – nicht nur eine Liste von Ticketkäufern." },
    { k: "Umsatz übers ganze Jahr", v: "Racer+-Mitgliedschaft, Partner-Rewards und Club-Umsätze zwischen den Race-Wochenenden – und Punkte, die Racer zum nächsten Event zurückbringen." },
    { k: "Die Daten nach Hause holen", v: "Login with HYROX: Dritt-Apps docken an den Racer Record an, statt um ihn herum zu scrapen." },
    { k: "Clubs auf eurer Seite", v: "11.000+ Clubs als Partner mit einem Grund zu bleiben – statt Lizenznehmer mit einem Grund zu gehen." },
    { k: "Bereit für einen Verband", v: "Lizenzierte Mitglieder, geratete Clubs, zertifizierte Judges – das Rückgrat, das eine anerkannte Sportart auf dem Weg zu Olympia braucht." },
  ],
};

export const ecosystem = {
  eyebrow: "Ein Record, offen für Partner_",
  title: "Die HYROX ID steht in der Mitte.",
  body: "Training bleibt bei den Partnern, die es am besten können. Der Record bleibt bei HYROX.",
  nodes: ["Races", "Clubs", "Coaches", "Training+", "Wearables", "Partner-Apps"],
};

export const build = {
  eyebrow: "11_Wie wir es bauen",
  title: ["Klein starten.", "Große Saison."],
  titleHl: "Große Saison.",
  phases: [
    {
      when: "Q1 2027",
      name: "Discovery",
      text: "Sechs Wochen mit Racern, Coaches und Club-Betreibern. Sim Standard, Index-Regeln und der Club-Deal – validiert mit klickbaren Prototypen.",
    },
    {
      when: "Q2–Q3 2027",
      name: "Pilot",
      text: "Eine Stadt, 10 Clubs, eine Club Season. HYROX ID, Licence, gejudgte Sims, Club OS – live, gemessen, iteriert.",
    },
    {
      when: "Saison 27/28",
      name: "Rollout",
      text: "Index für jeden Racer, Network Pass, Rewards und die offene API – Region für Region entlang des Race-Kalenders.",
    },
  ],
  team: {
    title: "Warum wir",
    items: [
      { k: "apploft.", v: "Hamburg, seit 2008. 250+ Apps, 100 Mio.+ Downloads – Produktteams, die Apps langfristig gestalten, bauen und betreiben." },
      { k: "Sport & Fans", v: "PadelCity (Clubs, Courts, Community), qalcha (die App hinter einem HYROX-Coach-Zertifizierungsprogramm), Fan-Apps und -Konten für SC Freiburg, BVB, HSV, Dynamo Dresden und FC Basel – wir machen aus Clubs und Events Alltagsprodukte." },
      { k: "Gebaut für Skalierung", v: "Produkte live in 108 Ländern und 18 Sprachen – bereit für einen Race-Kalender auf sechs Kontinenten." },
    ],
  },
};

export const cta = {
  title: ["Lasst uns den", "Record bauen."],
  titleHl: "Record bauen.",
  body: "Wir würden diese Vision gern gemeinsam mit euch in einen Pilot überführen.",
  contacts: [
    { name: "Gary Boeing", role: "Geschäftsführer, apploft." },
    { name: "Manuel Cramer", role: "apploft." },
  ],
  site: "apploft.de",
};

export const footer = {
  disclaimer:
    "Ein Visionskonzept von apploft. für ein Gespräch mit HYROX. Screens, Persona, Clubs und Daten sind illustrativ. HYROX ist eine Marke ihres Inhabers; Fotos © HYROX, nur zur internen Präsentation.",
};

export const sources = [
  { n: 1, label: "Infront-Pressemitteilung, 08.09.2026", url: "https://www.infront.sport/news/participations-sports/consortium-led-by-l-catterton-in-partnership-with-hyrox-founders-acquires-infronts-majority-stake-in-hyrox-clone" },
  { n: 2, label: "Athletech News, 15.07.2026", url: "https://athletechnews.com/hyrox-expands-global-race-calendar-plans-more-multi-week-events/" },
  { n: 3, label: "Endurance.biz, 02.12.2025", url: "https://endurance.biz/2025/industry-news/hyrox-prepares-for-largest-ever-race-at-london-excel-and-unveils-london-week-of-fitness-featuring-hyrox-youngstars-in-2026/" },
  { n: 4, label: "hyrox.com – Ergebnisse per Namenssuche, keine Athletenprofile (Okt 2026)", url: "https://hyrox.com/" },
  { n: 5, label: "ROXFIT-Ultra-Launch, Okt 2026", url: "https://insider.fitt.co/press-release/roxfit-launches-new-hybrid-training-experience-with-ultra-subscription/" },
  { n: 6, label: "Morning Chalk Up, 17.10.2025", url: "https://morningchalkup.com/2025/10/17/hyrox-is-booming-should-crossfit-gyms-add-hyrox-affiliation/" },
  { n: 7, label: "Business Insider via AOL", url: "https://www.aol.com/getting-tickets-fitness-competitions-hyrox-080001168.html" },
  { n: 8, label: "Deloitte / DSSV Eckdaten 2026, 03/2026", url: "https://www.deloitte.com/de/de/about/press-room/deutscher-fitnessmarkt-waechst-trotz-schwaechelnder-wirtschaft.html" },
  { n: 9, label: "Strava Year in Sport 2025", url: "https://press.strava.com/articles/strava-releases-12th-annual-year-in-sport-trend-report-2025" },
  { n: 10, label: "Nike Newsroom, Nov 2024", url: "https://about.nike.com/en/newsroom/releases/nike-run-club-app-new-features" },
  { n: 11, label: "Peloton Q4 FY25 Shareholder Letter", url: "https://www.sec.gov/Archives/edgar/data/1639825/000163982525000132/q42025shareholderletter.htm" },
  { n: 12, label: "Playtomic-Pressemitteilung, 16.12.2025", url: "https://www.dupr.com/post/playtomic-partners-with-dupr-to-power-the-next-era-of-community-driven-pickleball" },
  { n: 13, label: "Spond, 22.11.2024", url: "https://www.spond.com/news-and-blog/spond-3-million-monthly-active-users/" },
  { n: 14, label: "Slowtwitch über IRONMAN TriClubs", url: "https://www.slowtwitch.com/triathlon/show-me-the-money-hardly-the-secret-to-ironman-and-zoots-successful-club-programs/" },
  { n: 15, label: "Morning Chalk Up, 04.03.2025", url: "https://morningchalkup.com/2025/03/04/2025-crossfit-open-registrations-down-32-percent/" },
  { n: 16, label: "parkwalker-Studie, Univ. of Stirling", url: "https://www.cambrian-news.co.uk/sport/running/research-show-parkrun-participation-is-surging-thanks-to-parkwalkers-869489" },
  { n: 17, label: "hyrox.com – Eventseite INTERSPORT HYROX Hamburg", url: "https://hyrox.com/event/intersport-hyrox-hamburg/" },
  { n: 18, label: "HYROX365 Affiliation & Performance Coach", url: "https://www.hyrox365.com/affiliation" },
  { n: 19, label: "HYROX Academy", url: "https://www.hyrox365.com/academy" },
  { n: 20, label: "Health Club Management, 08.09.2026 (Zahlen nicht auditiert)", url: "https://www.healthclubmanagement.co.uk/health-club-management-news/L-Catterton-led-consortium-buys-Hyrox-stake-as-founders-regain-control/363576" },
  { n: 21, label: "HYROX Elites Portal (Athlete License)", url: "https://elites.hyrox.com/" },
];

export const racers = {
  eyebrow: "05_Für Racer",
  title: ["Warum Racer sie", "jede Woche öffnen."],
  titleHl: "jede Woche öffnen.",
  body: "Racer zahlen heute Dritt-Apps für Profile, Splits und Rankings – gebaut auf HYROX-Daten, ohne HYROX. Die Experience 2027 gibt ihnen all das offiziell und ergänzt, was keine App kann: die Trainingsfläche im Club und das Race.",
  pillars: [
    {
      k: "Community",
      title: "Nie allein vorbereiten.",
      items: ["Race-Crews für das nächste Event", "Partner-Finder für Doubles & Relay", "Sim Nights und Meetups im Club", "Reise-Crews für Auswärts-Races"],
    },
    {
      k: "Im Club",
      title: "Online trifft Trainingsfläche.",
      items: ["Splits, Pacing und Race-Prognosen – offiziell", "Gejudgte Sims, die für den Index zählen", "Dein Name auf The Wall", "Coach-Feedback zu jeder Sim"],
    },
    {
      k: "Zwischen den Races",
      title: "Partner, Plan, Status.",
      items: ["Season Planner: nächstes Race, Zielzeit, Countdown", "Trainingspläne der Partner an einem Ort", "Index und Status, die jeden Monat wachsen", "Vorkaufsrecht für ausverkaufte Races"],
    },
    {
      k: "Richtung Race Day",
      title: "Eine ID in die Event App.",
      items: ["Gleiches Konto in der offiziellen HYROX Event App", "Buchung und Check-in ohne neue Registrierung", "Punkte werden zu Race-Weekend-Perks", "Ergebnisse fließen zurück in den Record"],
    },
  ],
  loop: {
    title: "Der Kreislauf: Club → App → Race → Club.",
    steps: [
      { k: "Club", v: "Trainieren, simmen, gejudgt werden" },
      { k: "Experience App", v: "Record, Index, Plan, Crew" },
      { k: "HYROX Event App", v: "Buchen, einchecken, racen" },
      { k: "Zurück im Club", v: "Ergebnisse und Punkte fließen zurück" },
    ],
  },
};

export const audiences = {
  eyebrow: "07_Neue Racer",
  title: ["Die nächste Million", "racet noch nicht."],
  titleHl: "racet noch nicht.",
  body: "Die meisten Menschen in einer HYROX-Klasse haben nie ein Ticket gekauft. Sie sind das Wachstum. Die Club Sim ist ihr erstes Race – im eigenen Gym, mit der eigenen Crew, kostenlos – und der erste Schritt auf einem Weg, der an einer Startlinie endet.",
  funnel: [
    { k: "Gym-Mitglieder", v: "12,4 Mio. allein in Deutschland", source: 8 },
    { k: "In HYROX-Klassen", v: "in 11.000+ Training Clubs", source: 3 },
    { k: "Erste Club Sim", v: "das niedrigschwellige erste „Race“" },
    { k: "Licence", v: "vom eigenen Coach abgenommen" },
    { k: "Erstes Race", v: "mit der Crew, Perks inklusive" },
    { k: "Wiederholungs-Racer", v: "Index, Status, nächste Stadt" },
  ],
  segments: [
    { k: "Der Racer", v: "1–3 Races im Jahr. Will Fortschritt, Status und einen Weg in ausverkaufte Races." },
    { k: "Der Kurs-Stammgast", v: "Trainiert zweimal pro Woche HYROX-Style, nie gestartet. Braucht ein erstes Ziel, das machbar wirkt." },
    { k: "Der Supporter", v: "1,5 Mio.+ Zuschauer pro Saison. Feuert heute eine Freundin an – meldet sich morgen selbst an.", source: 1 },
    { k: "Der Coach", v: "Leitet die Klassen, judgt die Sims, hat die Beziehung – und bekommt dafür einen offiziellen Status." },
  ],
};

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
      k: "Wachstum",
      v: [
        "Die nächste Million racet noch nicht: Club-Sims machen Kurs-Stammgäste und Supporter zu Erst-Racern.",
        "Belegt von Strava, Peloton, Playtomic, IRONMAN: Community entsteht offline – die App verstärkt; der Partner-Club muss gewinnen.",
      ],
    },
    {
      k: "Der Ask",
      v: ["Discovery in Q1 2027 (6 Wochen) → Pilot mit 10 Clubs in einer Stadt → Rollout zur Saison 27/28. Gebaut von apploft."],
    },
  ],
};

export const learn = {
  eyebrow: "10_Von den Besten lernen",
  title: ["Community entsteht", "offline zuerst."],
  titleHl: "offline zuerst.",
  body: "Plattformen, die echte Communities bauen, machen alle dasselbe: Sie bringen Menschen an echten Orten zusammen – und nutzen die App, damit es hält.",
  models: [
    { k: "Strava", fact: "1 Mio. Clubs; neue Clubs 2025 fast vervierfacht", source: 9, how: "Clubs, Challenges, Local Legends – belohnt Dabeisein, nicht Tempo.", lesson: "Eine Local Legend in jedem HYROX-Club." },
    { k: "Nike Run Club", fact: "Gratis-App in 160+ Ländern", source: 10, how: "Guided Runs mit Coaches im Ohr, lokale Crews mit Treffpunkt im Store.", lesson: "Elite-Athleten als Stimme geführter Sessions; Clubs als wöchentlicher Treffpunkt." },
    { k: "Peloton", fact: "1,8 % Churn pro Monat mit Hardware vs. ~7–8 % nur App", source: 11, how: "Live-Leaderboards, Instruktoren als Community-Leader, Tags von Mitgliedern.", lesson: "Das Gym ist HYROX’ „Hardware“: offline binden, digital verstärken." },
    { k: "Playtomic", fact: "4,7 Mio.+ Spieler in 6.700+ Clubs", source: 12, how: "Level-System plus Open Matches mit Spielern auf deinem Level; SaaS für Clubs.", lesson: "Der Index treibt das Matchmaking: Doubles-Partner, offene Sims, Club-Tools." },
    { k: "Spond", fact: "3,3 Mio. monatlich aktive Nutzer", source: 13, how: "Für Vereine gratis – Termine, Anmeldungen, Zahlungen; verdient an Transaktionen.", lesson: "Kostenloses Club OS, das echte Orga-Arbeit abnimmt; Umsatz über Transaktionen, nicht Gebühren." },
    { k: "IRONMAN", fact: "TriClubs gerankt nach Mitgliedern, die starten", source: 14, how: "Kostenloses Club-Programm, Club Villages am Race, Priority Entry, Status-Stufen.", lesson: "Clubs dafür ranken und belohnen, dass sie Mitglieder an die Startlinie bringen." },
  ],
  warnings: [
    { k: "CrossFit Open", v: "Anmeldungen 2025 −32 % nach gestiegenen Affiliate-Gebühren – wer die Partner-Gyms auspresst, verliert das Netzwerk.", source: 15 },
    { k: "parkrun", v: "Eine „Langsam ist willkommen“-Rolle (parkwalker) hat die Zahl der Walker um ~55 % erhöht – Einsteiger brauchen eine Einladung.", source: 16 },
  ],
  principles: [
    "Offline zuerst, die App verstärkt",
    "Den Partner-Club zum Gewinner machen",
    "Dabeisein belohnen, nicht nur Tempo",
    "Eine klare Rampe vom Gym zur Startlinie",
    "Menschen ihre eigenen Crews bilden lassen",
  ],
};

export const today = {
  eyebrow: "02_HYROX heute",
  title: ["Wo Racer und Clubs", "HYROX begegnen."],
  titleHl: "HYROX begegnen.",
  body: "Die heutige Journey in einem Bild: ein starkes Event-Produkt, ein wachsendes Lizenzgeschäft – und dazwischen lange Funkstille. Preise von öffentlichen Seiten, Deutschland, sofern nicht anders angegeben.",
  racer: {
    label: "Racer",
    steps: [
      { k: "Entdecken", v: "HYROX-Klasse im Training Club, Gym Finder, Social", cost: "kostenlos" },
      { k: "Ticket", v: "Online-Shop, Dynamic Pricing, personalisiert", cost: "119 € Single · 114 € p. P. Doubles · 75 € p. P. Relay + Gebühren", source: 17 },
      { k: "Account", v: "HYROX Account: Name, Geburtsdatum, Division – Pflicht zum Starten", cost: "kostenlos", source: 17 },
      { k: "Vorbereiten", v: "Klassen im Gym, Trainings-Apps der Partner", cost: "Gym-Beitrag + App-Abos" },
      { k: "Race Day", v: "Check-in, Chip, Wave; Crew mit Zuschauertickets", cost: "Zuschauer 15 €/Tag", source: 17 },
      { k: "Danach", v: "Ergebnisse per Namenssuche, Race-Fotos zum Kaufen", cost: "Fotos extra" },
    ],
    end: "Dann: nichts – bis zum nächsten Ticket.",
  },
  club: {
    label: "Club & Coach",
    steps: [
      { k: "Training Club", v: "Markenrechte, Gym Finder, Performance Hub, Race Sims, PFT", cost: "~90 €/Monat EU · ~130 $ US (inoffiziell)", source: 18 },
      { k: "Performance Coach", v: "Einzel-Lizenz für Coaches", cost: "ab 1.150 € / Jahr", source: 18 },
      { k: "Academy", v: "Foundation kostenlos · Level 1 · Level 2", cost: "L1 299–499 $ · L1+L2 629 $", source: 19 },
      { k: "Performance Centre", v: "Gebietsschutz, Equipment-Paket", cost: "295 $/Monat + Equipment", source: 18 },
      { k: "Training+", v: "Offizielles Programming in der App des Gyms (Okt 2026)", cost: "nicht öffentlich" },
    ],
    end: "Was der Club zurückbekommt: Content – keine Mitglieder, keinen Umsatz.",
  },
  model: {
    title: "Das Geschäftsmodell",
    revenue: { value: "~135 Mio. €", label: "Umsatz 2025, ~30 Mio. € EBITDA – Prognose bis ~300 Mio. € für 2026 (berichtet, nicht auditiert)", source: 20 },
    streams: ["Startgelder & Add-ons", "Sponsoring (PUMA, Myprotein, Concept2, Centr, Amazfit …)", "Lizenzen: Clubs, Coaches, Academy", "Merchandise", "Zuschauer & Erlebnisse", "Elite Athlete License (347 € + MwSt.)"],
  },
  questions: {
    title: "Fragen, die wir euch gern stellen würden",
    items: [
      "Was kann der HYROX Account heute für Age-Grouper – und was steht auf der Roadmap?",
      "Wie viele Racer kommen zu einem zweiten Race – und wie schnell?",
      "Wisst ihr, in welchem Club ein Racer trainiert – und welcher Club das Ticket verkauft hat?",
      "Wie werden Event App und Account zusammenspielen?",
      "Welche Wearable- und Partnerdaten erreichen HYROX heute?",
      "Was fordern Clubs am häufigsten von euch?",
    ],
  },
};
