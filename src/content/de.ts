/**
 * Alle Texte der Website (DE). Spiegelt exakt die Struktur von `en.ts` (geprüft in ./index.ts).
 * Die Pitch-Story in 8 Beats – die ganze Herleitung steht im Strategie-Dokument.
 * Fakten sind belegt (siehe `sources`); Personen, Clubs und App-Daten in den Screens sind illustrativ.
 */
export const meta = {
  title: "HYROX Experience 2027 – Eine Vision von apploft.",
  description:
    "Vom ersten Workout zum ersten Rennen: eine Plattform, die alle, die HYROX trainieren, das ganze Jahr mit ihrem Club und mit HYROX verbindet. Ein Visionskonzept von apploft.",
  summaryTitle: "Executive Summary – HYROX Experience 2027",
  prototypeTitle: "Der HYROX Pass – ein Konzept von apploft.",
};

export const ui = {
  summaryBtn: "Summary",
  talk: "Lasst uns reden",
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
  { id: "weekend", label: "Club Weekend" },
  { id: "wins", label: "Alle gewinnen" },
  { id: "backlog", label: "Backlog" },
  { id: "pass", label: "HYROX Pass" },
];

export const hero = {
  eyebrow: "Exploration HYROX Experience 2027_",
  lines: ["Jeder", "Tag", "zählt."],
  highlight: "zählt.",
  box: { title: "Eine Vision", sub: "von apploft." },
  lead: "Viele, die HYROX trainieren, sind noch nie gestartet. 2027 wird das Jahr, in dem HYROX ihnen den Weg zeigt – vom ersten Workout im Club zum ersten Rennen und wieder zurück.",
  cta: "Zur Vision",
};

export const ticker = ["Jeder Tag zählt", "Every body", "Jeder Club", "Erste Sim", "Erstes Rennen", "Be the record"];

export const statement = {
  lines: ["Sie trainieren HYROX.", "Jede Woche.", "Gestartet sind sie", "noch nicht."],
  hl: ["Jede Woche.", "noch nicht."],
  note: "Ihre HYROX-Geschichte könnte lange vor dem ersten Ticket beginnen – mit dem ersten Workout im Club.",
  source: 0,
};

export const gap = {
  eyebrow: "01_Die Lücke",
  title: ["365 Tage Training.", "3 Race Days."],
  titleHl: "3 Race Days.",
  sub: "Die anderen 362 sind die größte Chance für HYROX.",
  body: "Das meiste HYROX-Training passiert in den Clubs – mit eigenem Programm, eigenen Sims und eigener Community, geloggt in allen möglichen Apps. Viele dieser Athletes sind noch nicht gestartet. Diese Tage mit HYROX zu verbinden, ist der Weg zur nächsten Million Racer.",
  legend: { race: "Race-Wochenenden – für alle, die schon starten", club: "Trainingstage im Club – die Chance" },
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
  kicker: "Eine Plattform für alle, die trainieren",
  body: "Training Clubs, offizielles Programming, Race Sims, der HYROX Account – alles ist da. Es fehlt der rote Faden, der sie verbindet und Fortschritt sichtbar macht, lange vor dem ersten Ticket: vom ersten Workout zum ersten Rennen und wieder zurück.",
  pillars: [
    { n: "01", name: "Train", tag: "Programming · Tracking", text: "Offizielles Programming und On-Demand-Kurse, jede Einheit getrackt – in jedem Club, mit jedem Wearable." },
    { n: "02", name: "Fuel", tag: "Ernährung · Recovery", text: "Tägliche Ernährungstipps für Training und Race-Woche, dazu Partner-Angebote, die zum Ziel passen." },
    { n: "03", name: "Compete", tag: "Sims · Index · Rennen", text: "Gejudgte Sims nach Sim Standard, ein persönlicher Index, das Club Weekend – und der Weg zum ersten Rennen." },
    { n: "04", name: "Belong", tag: "Clubs weltweit · Teams", text: "Clubs weltweit – nicht nur HYROX-Clubs –, Crews und Firmen-Ligen, offen für alle Athletes." },
  ],
  pass: {
    k: "Der Schlüssel: der HYROX Pass",
    v: "Identität, Zugang und Benefit auf einer Karte – Check-in in Clubs weltweit, Credits, Bezahlen und Loyalty.",
    cta: "Zum HYROX Pass",
  },
  standard: {
    k: "Der eine harte Teil",
    v: "Der Sim Standard: definiertes Equipment, ein zertifizierter Judge, ein gerateter Club. Dann zählt eine Sim in Hamburg wie eine in Barcelona.",
  },
  quote: {
    lines: ["Nach dem ersten Rennen", "beginnt der Record:", "Schmerzen, Stolz, Städte."],
    hl: "beginnt der Record:",
  },
};

export const clubWeekend = {
  eyebrow: "03_Das Club Weekend",
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
    answer: "Die Antwort von HYROX: das Club Weekend – größer, offiziell, und der erste Schritt ins Rennen.",
  },
};

export const wins = {
  eyebrow: "04_Alle gewinnen",
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
        "Club OS – kostenlos, gebaut für den Club-Alltag",
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
        "Clubs als Partner und Vertriebskanal",
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
  title: ["Lasst es uns gemeinsam", "erkunden."],
  titleHl: "erkunden.",
  lead: "Eine Vision für H2 2027 und darüber hinaus – gebaut auf dem Fundament, das ihr gerade legt. Wir setzen dort an, wo eure Roadmap endet, und nutzen die Zeit bis dahin zum Erkunden.",
  phases: [
    { when: "Jetzt – H1 2027", name: "Explore", text: "Schlank und parallel zu eurer Roadmap: Daten, Interviews, Pass-Modelle und klickbare Prototypen – damit H2 2027 mit Antworten startet, nicht mit Annahmen." },
    { when: "Ab H2 2027", name: "Build", text: "Eine Stadt, 10 Clubs, das erste Club Weekend und die ersten Pass-Mitglieder – live und gemessen." },
    { when: "Saison 27/28+", name: "Run & Scale", text: "Region für Region, entlang des Race-Kalenders – von uns betrieben oder an euer Team übergeben." },
  ],
  explore: {
    k: "Was wir gemeinsam erkunden",
    items: [
      "Wer in den Clubs trainiert – und was zur ersten Sim oder zum ersten Rennen bewegt",
      "Wie der HYROX Pass zu eurer ID- und Account-Roadmap passt",
      "Pass-Modell: in EGYM Wellpass oder als eigener HYROX-Vertrag",
      "Credits, Bezahlen und die bunq x HYROX Card",
      "Ein faires Modell für Clubs: Auszahlungen, Revenue Share, Club OS",
      "Klickbare Prototypen, getestet mit Athletes und Clubs",
    ],
  },
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

export const prototype = {
  eyebrow: "Konzept-Prototyp · H2 2027+",
  title: ["Probier den Pass."],
  titleHl: "Probier den Pass.",
  lead: "Vier Momente mit dem HYROX Pass – wie Lena sie sieht und wie ihr Club sie sieht.",
  viewLabel: "Ansicht",
  views: { athlete: "Athletin", club: "Club" },
  stepsLabel: "Schritte",
  prev: "Voriger Schritt",
  next: "Nächster Schritt",
  restart: "Von vorn",
  steps: [
    {
      name: "Check-in",
      athlete: "Ein Pass für jeden Club: Check-in-Historie, Buchungen, Favoriten und On-Demand-Kurse an einem Ort.",
      club: "Der Club sieht, wer heute eingecheckt hat – und wird pro Kurs bezahlt, nicht mit Cent-Beträgen pro Besuch.",
    },
    {
      name: "Training",
      athlete: "Eine gejudgte Sim an der Station: Splits getrackt, Index aktualisiert.",
      club: "Coach Ana judgt nach Sim Standard; die Ergebnisse gehen direkt an HYROX – ohne Papierkram.",
    },
    {
      name: "Bezahlen & sammeln",
      athlete: "HYROX Credits bezahlen Shakes, Sims und Tickets; die verknüpfte bunq x HYROX Card bringt Cashback.",
      club: "Im Club ausgegebene Credits werden an den Club ausgezahlt; Tickets mit seinem Code bringen Revenue Share.",
    },
    {
      name: "Race Day",
      athlete: "Fast Track bei HYROX Berlin, Armband-Guthaben, Cashback im Shop – und das Ergebnis für den Record.",
      club: "Neun Mitglieder sind in Berlin zum ersten Mal gestartet; der Club feiert sie auf The Wall.",
    },
  ],
  macLabel: "Laptop: Web-Ansicht",
  phoneLabel: "Handy: Lenas App",
  note: "Konzept-Prototyp für ein Gespräch mit HYROX. Persona, Club und Daten sind illustrativ.",
  back: "Zurück zur Vision",
  open: "Zum HYROX Pass",
};

export const backlog = {
  eyebrow: "05_Vision-Backlog",
  title: ["Vision-Backlog."],
  titleHl: "Backlog.",
  body: "Alles, was die Vision tragen könnte, sortiert in Epics – ein Startpunkt für die Explore-Phase, kein Plan.",
  filterLabel: "Zeigen",
  legend: "Phasen",
  phases: { all: "Alle", explore: "Explore", build: "Build H2 2027", later: "Später" },
  tabs: { vision: "Vision-Backlog", pool: "Ideenpool" },
  poolIntro: "Alle 65 Ideen aus Recherche und Workshops – ohne Priorisierung, als Material für die Explore-Phase.",
  pool: [
    {
      k: "Athletes",
      items: [
        ["Record & Index", "Jedes Rennen, jede Sim, jeder Split in einem Record – mit laufendem Index."],
        ["Index-Prognose", "Eine erste Prognose aus dem Training, vor der ersten Sim."],
        ["Club-Sims", "Offiziell gemessene Race-Sims im Club, gejudgt von einem Coach."],
        ["Rewards & Status", "Punkte für Sims, Einheiten und Rennen – Occasional, Regular, All-in."],
        ["Coupons", "Rewards und Sims werden zu Event-Rabatten."],
        ["Punkte fürs Training", "Punkte auch für geloggte Workouts und Check-ins."],
        ["Training Record", "Workouts aus Programming und Wearables an einem Ort."],
        ["Season Planner", "Nächstes Rennen, Zielzeit, Countdown und Meilensteine."],
        ["Passport & Patches", "Städte und Rennen sammeln – digitale Patches für echte Momente."],
        ["Collectible Sets", "Komplette Patch-Sets schalten Verlosungen für Erlebnisse frei."],
        ["Partnersuche", "Trainings-, Sim-, Doubles- und Relay-Partner in der Nähe."],
        ["Crews & Tags", "Eigene Gruppen nach Club, Stadt oder Altersklasse."],
        ["Community", "Gruppen, Foren und Teams nach bewährten Community-Mustern."],
        ["First HYROX in 8 Wochen", "Ein klarer Einsteigerplan vom Gym zur ersten Sim und zum ersten Rennen."],
        ["Rookie-Division", "Skalierte Sims und eine Welcome Crew nach dem Motto „langsam ist willkommen“."],
        ["Start-Index vom Coach", "Ein Coach setzt einen vorläufigen Index, bis drei Ergebnisse vorliegen."],
        ["Ticket Priority", "Status öffnet früheren Zugang zu ausverkauften Rennen."],
        ["Vorteile am Race-Wochenende", "Punkte zahlen sich am Event aus: Ticket, Merch, Recovery."],
        ["Attendance Rewards", "Punkte für frühen Check-in, Judgen und Volunteering."],
        ["Judge- & Volunteer-Meilensteine", "Judgen und Volunteering zählen für den Status."],
        ["Dein HYROX-Jahr", "Ein persönlicher Jahresrückblick zum Teilen."],
        ["Elite-Guided Sims", "Audio-geführte Sims mit HYROX-Elite-Athletes."],
        ["AI Race Coach", "Pacing- und Trainingstipps aus den eigenen Splits."],
      ] as [string, string][],
    },
    {
      k: "Clubs",
      items: [
        ["Home Club & Club-Finder", "Jede:r hat einen Home Club; Clubs weltweit auf der Karte."],
        ["Network Pass", "Gastzugang in Partner-Clubs weltweit, auch auf Reisen."],
        ["Club OS", "Kostenloses Werkzeug für Sims, Leaderboards, Leads und Kampagnen."],
        ["HYROX Club Weekend", "Dieselbe Sim in jedem Club am selben Wochenende."],
        ["Club Season", "Club-Rankings, Club gegen Club, regionale Ligen."],
        ["Participation Awards", "Clubs nach Beteiligung gerankt, nicht nur nach Tempo."],
        ["Club Village & Starter-Ranking", "Clubs mit den meisten Startern bekommen ein Village am Event."],
        ["The Wall", "Ein Live-Leaderboard auf einem Screen im Club."],
        ["Local Legend", "Beständigkeit im Club zählt, nicht nur Tempo."],
        ["Club-Events", "HYROX Nights und Sim Days, gelistet im Netzwerk."],
        ["Wöchentliches Club-Format", "Ein fester, kostenloser Wochentermin mit Mini-Sim."],
        ["HYROX Week im Club", "Eine Event-Woche vor großen Rennen, mit Patch."],
        ["Club-Code & Revenue Share", "Über den Club gebuchte Tickets bringen ihm einen Anteil."],
        ["Club Payments", "Bezahlte Sim Nights und Events laufen über Club OS."],
        ["Gym Impact Report", "Zeigt jedem Club, was HYROX an Mitgliedern und Umsatz bringt."],
      ] as [string, string][],
    },
    {
      k: "Coaches",
      items: [
        ["Verified Coach", "Ein offizielles Coach-Profil mit sichtbarer Zertifizierung."],
        ["Coach Insights", "Fortschritt der eigenen Athletes, Sims und Index."],
      ] as [string, string][],
    },
    {
      k: "HYROX & Plattform",
      items: [
        ["Sim Standard", "Equipment, zertifizierter Judge und Club-Rating machen Sims vergleichbar."],
        ["Login with HYROX", "Ein offener Login und eine API für Partner-Apps."],
        ["Index-API für Gym-Software", "Index und Sim-Ergebnisse direkt in bestehender Gym-Software."],
        ["Zertifizierte Geräte & Apps", "Wearables und Apps, zertifiziert für HYROX-Daten."],
        ["Index mit Anerkennung", "Transparente Index-Regeln als Basis für Qualifikation."],
        ["Qualifikationswege", "Von der Club Season bis zu regionalen Finals."],
        ["Athletes- & Club-Insights", "Wer wo trainiert und wer wiederkommt."],
        ["Membership-Modell", "Ein kostenloses Konto plus ein bezahlter Tarif."],
        ["Experiences als Top-Reward", "Elite-Camps und Worlds-Reisen für den höchsten Status."],
        ["Sponsored Benchmark Day", "Das Club Weekend als Bühne für Partner."],
      ] as [string, string][],
    },
    {
      k: "Pass, Partner & Benefits",
      items: [
        ["HYROX Credits", "Eine interne Währung für Tickets, Shop und Armband."],
        ["bunq x HYROX Card verknüpft", "Die bestehende Karte im Pass: Fast Track und Cashback."],
        ["HYROX-Tarif in EGYM Wellpass", "Arbeitgeberfinanzierter Zugang zu Clubs, Sims und Events."],
        ["Firmen-Ligen", "Firmen treten als Teams an – gewertet im Pass."],
        ["Kurs „First HYROX“", "Ein zertifizierter Präventionskurs, der mit der ersten Sim endet."],
        ["HYROX in Benefit-Karten", "Tickets und Shop als Akzeptanzstelle in Benefit-Karten von Arbeitgebern."],
        ["Faire Club-Auszahlungen", "Pro Kurs und Revenue Share statt Cent-Beträgen pro Besuch."],
        ["Andere Sportarten über Partner", "Yoga, Padel und Recovery über Partnernetze."],
        ["Partner-Marktplatz", "Angebote für Gear, Ernährung und Training über Rewards."],
        ["Badges", "Auszeichnungen für echte Momente, wie bei der Apple Watch."],
        ["Euro-Guthaben", "Personal Training, Sims und Events mit dem Pass bezahlen."],
        ["Event-Buchung integriert", "Übersicht, Buchung, Service vor Ort und Post-Event-Marketing."],
        ["Merch-Shop", "Der HYROX-Shop im Pass."],
        ["Ernährungs-Tracking", "Mahlzeiten neben dem Training loggen."],
        ["Kommunikation", "Athletes tauschen sich in Gruppen und Crews aus."],
      ] as [string, string][],
    },
  ],
  epics: [
    {
      id: "pass",
      name: "HYROX Pass",
      desc: "Eine Karte für Identität, Zugang und Benefit.",
      size: "xl",
      tone: "yellow",
      highlights: ["Identität.", "Zugang.", "Benefit."],
      features: [
        { t: "Identität, Record & Index" },
        { t: "Zugang zu Clubs weltweit, wie Wellpass" },
        { t: "Check-in an der Tür und an der Station" },
        { t: "Loyalty-Status" },
        { t: "Badges für echte Momente" },
        { t: "Arbeitgeberfinanziert über Wellpass" },
      ],
    },
    {
      id: "train",
      name: "Train & Track",
      desc: "Programming rein, Daten zurück.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Offizielles Programming" },
        { t: "Tracking von HYROX-Workouts" },
        { t: "Splits & Analysen" },
        { t: "Wearables" },
        { t: "On-Demand- & Live-Kurse" },
      ],
    },
    {
      id: "fuel",
      name: "Fuel",
      desc: "Ernährung für Training und Race-Woche.",
      size: "md",
      tone: "paper",
      features: [
        { t: "Tägliche Ernährungstipps" },
        { t: "Ernährungs-Tracking" },
        { t: "Race-Week-Plan" },
        { t: "Partner-Angebote" },
      ],
    },
    {
      id: "wallet",
      name: "Wallet & Shop",
      desc: "Bezahlen mit dem Pass – im Club, online und am Event.",
      size: "md",
      tone: "paper",
      features: [
        { t: "Euro-Guthaben im Pass" },
        { t: "HYROX Credits" },
        { t: "bunq x HYROX Card verknüpft" },
        { t: "Personal Training, Sims und Events bezahlen" },
        { t: "Merch-Shop" },
      ],
    },
    {
      id: "race",
      name: "Events & Race Day",
      desc: "Von der Buchung bis zum Record – mit der Event App.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Event-Übersicht & Buchung" },
        { t: "Gleiches Konto in der Event App" },
        { t: "Fast-Track-Check-in" },
        { t: "Service vor Ort & Armband-Guthaben" },
        { t: "Post-Event-Marketing" },
      ],
    },
    {
      id: "compete",
      name: "Compete",
      desc: "Von der ersten Sim an die Startlinie.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Gejudgte Sims & Sim Standard" },
        { t: "Index-Prognose" },
        { t: "Club Weekend" },
        { t: "Firmen-Ligen" },
        { t: "Qualifikationswege" },
      ],
    },
    {
      id: "clubs",
      name: "Clubs & Community",
      desc: "Offen für alle Athletes, in jedem Club – wie Strava oder Peloton.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Club-Finder weltweit" },
        { t: "Club OS" },
        { t: "Gruppen & Bestenlisten" },
        { t: "Kommunikation untereinander" },
        { t: "Crews & Partnersuche" },
        { t: "Andere Sportarten über Partner" },
      ],
    },
    {
      id: "corporate",
      name: "Firmen & Benefits",
      desc: "Ein neuer B2B-Kanal.",
      size: "md",
      tone: "paper",
      features: [
        { t: "HYROX-Tarif in Wellpass" },
        { t: "Kurs „First HYROX“" },
        { t: "Firmenteams" },
      ],
    },
    {
      id: "platform",
      name: "Daten & Plattform",
      desc: "Der Kern gehört HYROX.",
      size: "md",
      tone: "outline",
      features: [
        { t: "Faire Club-Auszahlungen" },
        { t: "Login with HYROX" },
        { t: "Club- & Athletes-Insights" },
        { t: "Partner-APIs" },
      ],
    },
  ],
};

export const pass = {
  eyebrow: "HYROX Pass · Konzept",
  title: ["Eine Karte.", "Jeder Club.", "Jedes Rennen."],
  titleHl: "Jedes Rennen.",
  lead: "Was der HYROX Pass werden könnte: Identität, Zugang und Benefit auf einer Karte – einchecken in Clubs weltweit, trainieren, bezahlen, Credits sammeln und Rennen laufen. Gebaut auf dem HYROX Account, offen für alle, die trainieren.",
  back: "Zurück zur Vision",
  ecosystem: {
    k: "Der Pass im Zentrum",
    desc: "Der HYROX Pass verbindet Athletes, Partner und HYROX: Training, Partner-Gyms, Race Sims und Travel auf der Partnerseite; Payment, Loyalty und Credits im Pass; offizieller Record, Ticketing und Check-in auf der HYROX-Seite.",
    left: "Athletes & Partner",
    right: "HYROX",
    athlete: "Athlete",
    pass: ["HYROX", "Pass"],
    partner: [
      { icon: "gym", t: ["Partner-", "Gyms"] },
      { icon: "activity", t: ["Training &", "Tracking"] },
      { icon: "timer", t: ["Race Sims"] },
      { icon: "travel", t: ["Travel-", "Pakete"] },
    ],
    wallet: [
      { icon: "card", t: ["Payment"] },
      { icon: "coins", t: ["Loyalty &", "Credits"] },
    ],
    hyrox: [
      { icon: "trophy", t: ["Offizieller", "Record (ID)"] },
      { icon: "ticket", t: ["Ticketing"] },
      { icon: "qr", t: ["Check-in", "Events", "& Clubs"] },
    ],
  },
  story: {
    lead: ["Der Pass", "ist die Story:"],
    leadHl: "Story:",
    variants: [
      ["Schmerzen,", "Stolz,", "Städte."],
      ["Jede Einheit,", "jeder Club,", "jedes Rennen."],
      ["Vom ersten", "Workout", "bis ins Ziel."],
    ],
    end: "Über Jahre.",
    endHl: "Jahre.",
    pause: "Animation pausieren",
    play: "Animation abspielen",
    alt: "Ein Athlet sitzt erschöpft auf einer Bank zwischen Hantelablagen",
  },
  meanings: {
    k: "Drei Bedeutungen von Pass",
    items: [
      { k: "Identität", v: "Record und Index – ein Konto für jeden Club, jede Sim und jedes Rennen." },
      { k: "Zugang", v: "Check-in in Clubs weltweit, Buchungen und Events – mit Fast Track am Race Day." },
      { k: "Benefit", v: "Vom Arbeitgeber finanziert, mit HYROX Credits, Loyalty-Status und Partner-Angeboten." },
    ],
  },
  gap: {
    k: "Was allen anderen Pässen fehlt",
    v: "Fitness-Pässe zählen Besuche. Der HYROX Pass zählt Fortschritt: Events, Ranking, Teams und Fortschritt über Clubs hinweg – mit einem fairen Modell für Clubs statt Cent-Beträgen pro Check-in.",
  },
  features: {
    k: "Im Pass",
    items: [
      { icon: "scan", k: "Check-in", v: "An der Club-Tür und an der Sim-Station" },
      { icon: "history", k: "Check-in-Historie", v: "Jede Einheit, jeder Club" },
      { icon: "calendar", k: "Meine Buchungen", v: "Kurse, Sims, Events" },
      { icon: "map", k: "Club-Finder", v: "Clubs weltweit, mit Empfehlungen" },
      { icon: "heart", k: "Favoriten", v: "Clubs, Coaches, Kurse" },
      { icon: "play", k: "On-Demand-Workouts", v: "Offizielles Programming, überall" },
      { icon: "video", k: "Live-Online-Kurse", v: "Mit HYROX-Coaches" },
      { icon: "gift", k: "Partner-Angebote", v: "Gear, Ernährung, Recovery" },
      { icon: "trophy", k: "Challenges", v: "Club Weekend, Firmen-Ligen" },
      { icon: "activity", k: "Index & BioAge", v: "Fortschritt, den man sieht" },
      { icon: "coins", k: "HYROX Credits", v: "Interne Währung und Benefit-Guthaben" },
      { icon: "card", k: "bunq x HYROX Card", v: "Die bestehende HYROX-Karte – bezahlen und Cashback, mit dem Pass verknüpft" },
    ],
  },
  gallery: {
    k: "Der Pass in Bildern",
    close: "Schließen",
    prev: "Vorheriges Bild",
    next: "Nächstes Bild",
    items: [
      { src: "phone-checkin", caption: "Check-in mit dem Pass" },
      { src: "phone-sim", caption: "Gejudgte Sim an der Station" },
      { src: "phone-wallet", caption: "Wallet: HYROX Credits und die bunq x HYROX Card" },
      { src: "phone-rewards", caption: "Status und Rewards" },
      { src: "laptop-record", caption: "Der Record im Web" },
      { src: "phone-perks", caption: "Race-Wochenende: Fast Track und Vorteile" },
      { src: "phone-race", caption: "Race Day in der HYROX Event App" },
      { src: "phone-record", caption: "Mein Record" },
    ],
  },
  day: {
    eyebrow: "Lenas 24 Stunden",
    title: ["Der Tag vor", "HYROX Berlin."],
    titleHl: "HYROX Berlin.",
    body: "Eine Athletin, eine Karte – vom Club in Hamburg an die Startlinie in Berlin.",
    steps: [
      { time: "Fr 06:45", k: "Check-in im Club", v: "Ein Tap mit dem Pass bei Hafen Athletics – das klappt auch in Partner-Clubs weltweit.", tag: "Check-in" },
      { time: "Fr 07:00", k: "Check-in an der Station", v: "Sie tappt sich an der Sim-Station ein; Splits und Puls landen in ihrem Pass.", tag: "Tracking" },
      { time: "Fr 08:10", k: "Shake mit dem Pass", v: "Recovery-Shake an der Club-Bar, bezahlt mit HYROX Credits.", tag: "Bezahlen" },
      { time: "Fr 08:30", k: "Fuel für morgen", v: "Tipps für Frühstück, Mittag- und Abendessen am Tag vor dem Rennen – Kohlenhydrate hoch, nichts Neues.", tag: "Fuel" },
      { time: "Sa 08:00", k: "Fast Track in Berlin", v: "Check-in bei HYROX Berlin mit dem Pass – schnelle Spur, Armband-Guthaben schon aufgeladen.", tag: "Race Day" },
      { time: "Sa 11:42", k: "For the record", v: "Jeder Split landet direkt in ihrem Record und Index.", tag: "Record" },
      { time: "Sa 13:00", k: "Cashback und Credits", v: "10 % Cashback am Merch-Stand mit der bunq x HYROX Card; Rennen und Sims bringen Credits fürs nächste Ticket.", tag: "Credits" },
    ],
    note: "Wie es anfing: „First HYROX“, ein zertifizierter Einsteigerkurs in ihrem Club, der mit ihrer ersten Sim endete – bezahlt aus dem Gesundheitsbudget ihres Arbeitgebers.",
  },
  models: {
    k: "Zwei Wege zum Start",
    items: [
      { k: "Option 1 · In EGYM Wellpass", v: "Ein HYROX-Tarif in Wellpass: Clubs als Premium-Partner, Sims, Club Weekend und Event-Credits. Arbeitgeberverträge und Steuerlogik gibt es schon." },
      { k: "Option 2 · Ein eigener HYROX-Pass-Vertrag", v: "HYROX bietet den Pass selbst an – für Athletes und Arbeitgeber – und behält die ganze Kundenbeziehung." },
    ],
    extras: [
      { k: "Firmen-Ligen", v: "Firmen treten als Teams an: Sims im Club, Club Weekend und Firmenstaffel am Race Day – alles gewertet im Pass." },
      { k: "First HYROX", v: "Ein zertifizierter Präventionskurs im Club, der mit der ersten Sim endet – förderfähig über Gesundheitsbudgets der Arbeitgeber." },
      { k: "Steuerlich clever", v: "In Deutschland läuft arbeitgeberfinanzierte Fitness meist als steuerfreier Sachbezug bis 50 € im Monat." },
    ],
  },
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
        "Viele, die HYROX trainieren, sind noch nicht gestartet – die nächste Generation Racer ist schon in den Clubs.",
        "Sie trainieren in 11.000+ Training Clubs und vielen Apps; der erste direkte Kontakt zu HYROX ist heute meist das Ticket.",
        "Clubs machen eigene Programme und Sims, neue Formate werben um dieselben Gyms – ein Grund, HYROX noch näher an die Clubs zu bringen.",
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
        "Train, Fuel, Compete, Belong: Programming und Tracking, Ernährung, Sims und Rennen, Clubs weltweit und Firmen-Ligen.",
        "Der HYROX Pass als Schlüssel: Identität, Zugang und Benefit – Check-in, Credits, Bezahlen, Loyalty.",
        "Zwei Wege zum Start: in EGYM Wellpass oder als eigener HYROX-Vertrag.",
      ],
    },
    {
      k: "Mehrwert",
      v: [
        "Athletes: ein Ziel, sichtbarer Fortschritt, Partner und eine Karte für jeden Club und jedes Rennen.",
        "Clubs: kostenlose Tools, neue Mitglieder, faire Auszahlungen und Revenue Share.",
        "HYROX: ein größerer Sport, eine Beziehung vor dem ersten Ticket, mehr Erst- und Zweit-Starter, ein B2B-Kanal.",
      ],
    },
    {
      k: "Warum jetzt, warum apploft.",
      v: [
        "Neue Eigentümer seit Sep 2026: ein Konsortium unter Führung von L Catterton mit den Gründern und WNDR; 2 Mio.+ Racer erwartet; XENOM als zweites Format.",
        "apploft. hat PadelCity gebaut – mit integriertem EGYM Wellpass und Hansefit – und ist zertifizierter Premium-Entwicklungspartner von EGYM.",
      ],
    },
    {
      k: "Der Ask",
      v: [
        "Gemeinsam erkunden bis H1 2027, parallel zu eurer Roadmap → bauen ab H2 2027 (Pilot mit 10 Clubs in einer Stadt) → betreiben und skalieren ab Saison 27/28.",
        "Drei Prinzipien: Der Kern gehört HYROX, klein starten und mit Belegen skalieren, gebaut zum Übergeben.",
      ],
    },
  ],
};

