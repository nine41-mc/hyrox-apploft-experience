"use client";

import type { ReactNode } from "react";
import { Check, ChevronRight, Radio, Users, Bell, Lock } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { useScreenText } from "./ScreenLocale";
import type { ScreenText } from "./screenText";

/**
 * Illustrative HYROX app screens for Lena’s year – from first workout to first race.
 * All people, clubs and numbers are fictional.
 */

export type ScreenKey = "checkin" | "wallet" | "forecast" | "sim" | "league" | "race" | "rewards" | "perks" | "record";

/** `action` replaces the screen's last row – used by the concept prototype for its call to action. */
export function AppScreen({ screen, action }: { screen: ScreenKey; action?: ReactNode }) {
  switch (screen) {
    case "checkin":
      return <CheckinScreen action={action} />;
    case "wallet":
      return <WalletScreen action={action} />;
    case "forecast":
      return <ForecastScreen action={action} />;
    case "sim":
      return <SimScreen action={action} />;
    case "league":
      return <LeagueScreen />;
    case "race":
      return <RaceScreen action={action} />;
    case "rewards":
      return <RewardsScreen action={action} />;
    case "perks":
      return <PerksScreen action={action} />;
    case "record":
      return <RecordScreen />;
  }
}

export function Shell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col px-4 pb-6 text-paper">
      <div className="flex items-center justify-between py-2">
        <span className="wordmark text-[11px]">HYROX</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-ink-600 text-[10px] font-medium">LK</span>
      </div>
      <p className="eyebrow mb-3 mt-1 !text-[10px] text-grey-300">{title}</p>
      <div className="flex min-h-0 flex-1 flex-col gap-2.5">{children}</div>
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[14px] bg-ink-700 p-3", className)}>{children}</div>;
}

export function Tag({ children, tone = "yellow" }: { children: ReactNode; tone?: "yellow" | "grey" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider",
        tone === "yellow" ? "bg-yellow text-ink" : "bg-ink-500 text-paper",
      )}
    >
      {children}
    </span>
  );
}

/* ───────────── The HYROX Pass card (wallet style) – same card on phone and web ───────────── */
export function PassCard({
  name = "Lena K.",
  status,
  fields,
  size = "sm",
}: {
  name?: string;
  status?: string;
  fields: [string, string][];
  size?: "sm" | "lg";
}) {
  const lg = size === "lg";
  const t = useScreenText();
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-yellow text-ink shadow-[0_18px_40px_-18px_rgba(255,237,0,0.45)]",
        lg ? "rounded-[18px] p-6" : "rounded-[14px] p-4",
      )}
    >
      <div className="flex items-start justify-between">
        <p className={cn("wordmark", lg ? "text-[12px]" : "text-[10px]")}>HYROX</p>
        {status && (
          <div className={cn("text-right uppercase leading-tight", lg ? "mr-[72px] text-[11px]" : "mr-12 text-[9px]")}>
            <p className="opacity-60">{t.pass.status}</p>
            <p className="font-medium">{status}</p>
          </div>
        )}
      </div>
      <p className={cn("headline", lg ? "mt-6 text-[44px]" : "mt-4 text-[30px]")}>Pass_</p>
      <p className={cn("font-medium uppercase", lg ? "mt-3 text-[18px]" : "mt-2 text-[15px]")}>{name}</p>
      <div className={cn("grid grid-cols-2 gap-y-2 uppercase", lg ? "mt-4 text-[12px]" : "mt-3 text-[10px]")}>
        {fields.map(([k, v]) => (
          <div key={k}>
            <p className="opacity-60">{k}</p>
            <p className="font-medium">{v}</p>
          </div>
        ))}
      </div>
      <QrPattern className={cn("absolute", lg ? "right-5 top-5 h-14 w-14" : "right-3 top-3 h-11 w-11")} />
    </div>
  );
}

/* ───────────── Pass: check-in at the club and at the station ───────────── */
function CheckinScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const c = t.checkin;
  return (
    <Shell title={c.title}>
      <PassCard fields={passFields(t)} />
      <div className="flex items-center gap-2 rounded-[14px] bg-paper px-3 py-2.5 text-[11px] text-ink">
        <Check className="h-4 w-4 shrink-0" />
        <span className="flex-1 font-medium">{c.checkedIn}</span>
        <span className="text-[10px] opacity-60">{c.time}</span>
      </div>
      <Card className="!p-0">
        <p className="px-3 pb-1 pt-2.5 text-[10px] uppercase text-grey-300">{c.history}</p>
        <ul>
          {c.items.map(([d, club, time]) => (
            <li key={d + club} className="flex items-center gap-3 border-t border-ink-600 px-3 py-2 text-[11px]">
              <span className="w-9 text-grey-300">{d}</span>
              <span className="flex-1 truncate">{club}</span>
              <span className="text-grey-300">{time}</span>
            </li>
          ))}
        </ul>
      </Card>
      {action ?? (
        <Card className="flex items-center justify-between text-[11px]">
          <span>{c.station}</span>
          <ChevronRight className="h-4 w-4 text-yellow" />
        </Card>
      )}
    </Shell>
  );
}

/* ───────────── Pass: wallet with HYROX Credits and the linked card ───────────── */
function WalletScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const w = t.wallet;
  return (
    <Shell title={w.title}>
      <div className="rounded-[14px] bg-yellow p-4 text-ink">
        <p className="text-[10px] uppercase opacity-70">{w.credits}</p>
        <p className="headline mt-1 text-[40px] leading-none">{w.balance}</p>
        <p className="mt-2 text-[10px] uppercase">{w.earn}</p>
      </div>
      <div className="flex items-center gap-3 rounded-[14px] bg-gradient-to-br from-ink-500 to-ink-700 p-3">
        <span className="grid h-8 w-12 place-items-center rounded-[6px] bg-yellow text-[8px] font-medium text-ink">HYROX</span>
        <span className="text-[11px] leading-tight">
          {w.card}
          <span className="block text-[10px] text-grey-300">{w.cardSub}</span>
        </span>
      </div>
      <Card className="!p-0">
        <p className="px-3 pb-1 pt-2.5 text-[10px] uppercase text-grey-300">{w.latest}</p>
        <ul>
          {w.items.map(([k, d, v]) => (
            <li key={k} className="flex items-center gap-3 border-t border-ink-600 px-3 py-2 text-[11px]">
              <span className="flex-1">
                {k}
                <span className="block text-[9px] text-grey-300">{d}</span>
              </span>
              <span className={cn("headline text-[16px]", v.startsWith("+") ? "text-yellow" : "")}>{v}</span>
            </li>
          ))}
        </ul>
      </Card>
      {action}
    </Shell>
  );
}

/* ───────────── Jan: HYROX Pass, day one ───────────── */
function ForecastScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const f = t.forecast;
  return (
    <Shell title={f.title}>
      <PassCard fields={passFields(t)} />
      <Card>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase text-grey-300">{f.thisWeek}</p>
          <span className="text-[10px] text-grey-300">{f.programming}</span>
        </div>
        <p className="mt-1 text-[12px] font-medium">{f.sessions}</p>
        <Progress value={3} steps={3} />
      </Card>
      <Card>
        <p className="text-[10px] uppercase text-grey-300">{f.forecast}</p>
        <p className="headline mt-1 text-[30px]">~64</p>
        <p className="text-[10px] text-grey-300">{f.note}</p>
      </Card>
      {action ?? (
        <Card className="flex items-center justify-between">
          <span className="text-[12px]">{f.book}</span>
          <ChevronRight className="h-4 w-4 text-yellow" />
        </Card>
      )}
    </Shell>
  );
}

export const statusFields = (t: ScreenText): [string, string][] => [
  [t.pass.points, "860"],
  [t.pass.sims, t.pass.simsValue],
];

export const passFields = (t: ScreenText): [string, string][] => [
  [t.pass.homeClub, "Hafen Athletics"],
  [t.pass.athleteSince, t.pass.since],
];

/* ───────────── Feb: Club Sim ───────────── */
function SimScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const m = t.sim;
  const splits = [
    ["SkiErg", 72],
    ["Sled Push", 88],
    ["Sled Pull", 80],
    ["Burpee BJ", 64],
    ["Row", 70],
    ["Farmers", 46],
    ["Lunges", 84],
    ["Wall Balls", 92],
  ] as const;
  return (
    <Shell title={m.title}>
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase text-grey-300">{m.total}</p>
            <p className="headline text-[38px]">1:31:12</p>
          </div>
          <Tag>
            <Check className="h-2.5 w-2.5" /> {m.judged}
          </Tag>
        </div>
        <p className="mt-1 text-[10px] text-grey-300">{m.judgeLine}</p>
      </Card>
      <Card className="min-h-0 flex-1 overflow-hidden">
        <p className="mb-2 text-[10px] uppercase text-grey-300">{m.stations}</p>
        <ul className="space-y-1.5">
          {splits.map(([name, w]) => (
            <li key={name} className="flex items-center gap-2 text-[10px]">
              <span className="w-[62px] shrink-0">{name}</span>
              <span className="h-[5px] flex-1 bg-ink-500">
                <span className="block h-full bg-paper" style={{ width: `${w}%` }} />
              </span>
            </li>
          ))}
        </ul>
      </Card>
      <div className="flex items-center justify-between bg-yellow px-3 py-2.5 text-ink">
        <div>
          <p className="text-[9px] uppercase">{m.firstIndex}</p>
          <p className="headline text-[28px]">{t.num("65.8")}</p>
        </div>
        <span className="text-right text-[9px] uppercase leading-tight">
          {m.provisional}
          <br />
          {m.ofResults}
        </span>
      </div>
      {action}
    </Shell>
  );
}

/* ───────────── Mar: League ───────────── */
function LeagueScreen() {
  const t = useScreenText();
  const l = t.league;
  const rows = [
    ["1", "Elbe Engine", "1,284"],
    ["2", "Ottensen Hybrid", "1,231"],
    ["3", "Hafen Athletics", "1,198"],
    ["4", "Nordlicht Strength", "1,102"],
    ["5", "Altona Collective", "987"],
  ];
  return (
    <Shell title={l.title}>
      <Card className="!p-0">
        <div className="flex items-center justify-between px-3 py-2.5">
          <p className="text-[12px] font-medium uppercase">{l.ranking}</p>
          <Tag tone="grey">{l.kickoff}</Tag>
        </div>
        <ul>
          {rows.map(([pos, club, pts]) => {
            const me = club === "Hafen Athletics";
            return (
              <li
                key={club}
                className={cn(
                  "flex items-center gap-3 border-t border-ink-600 px-3 py-2 text-[11px]",
                  me && "bg-yellow text-ink",
                )}
              >
                <span className="w-3 font-medium">{pos}</span>
                <span className="flex-1">{club}</span>
                <span className="font-medium">{t.num(pts)}</span>
              </li>
            );
          })}
        </ul>
      </Card>
      <Card>
        <p className="text-[10px] uppercase text-grey-300">{l.contribution}</p>
        <p className="headline mt-1 text-[30px]">{l.pts}</p>
        <p className="text-[10px] text-grey-300">{l.note}</p>
      </Card>
      <Card className="flex items-center justify-between">
        <span className="text-[11px]">{l.next}</span>
        <span className="text-[10px] text-yellow">{l.going}</span>
      </Card>
    </Shell>
  );
}

/* ───────────── Oct: Race day ───────────── */
function RaceScreen({ action }: { action?: ReactNode }) {
  const r = useScreenText().race;
  return (
    <Shell title="HYROX Event App · Hamburg">
      <div className="flex items-center gap-2 bg-paper px-3 py-2 text-[10px] text-ink">
        <Bell className="h-3 w-3 shrink-0" />
        {r.signedIn}
      </div>
      <Card>
        <div className="flex items-center justify-between">
          <Tag>
            <Radio className="h-2.5 w-2.5" /> {r.live}
          </Tag>
          <span className="text-[10px] text-grey-300">{r.division}</span>
        </div>
        <p className="headline mt-3 text-[40px]">52:18</p>
        <p className="text-[11px]">{r.station}</p>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={cn("h-[6px] flex-1", i < 4 ? "bg-yellow" : i === 4 ? "bg-paper" : "bg-ink-500")} />
          ))}
        </div>
      </Card>
      {!action && (
        <Card className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-[11px]">
            <Users className="h-3.5 w-3.5 text-yellow" /> {r.supporters}
          </span>
          <ChevronRight className="h-4 w-4 text-grey-300" />
        </Card>
      )}
      <Card>
        <p className="text-[10px] uppercase text-grey-300">{r.after}</p>
        <p className="mt-1 text-[12px] font-medium">{r.syncs}</p>
        <p className="mt-1 text-[10px] text-grey-300">{r.recordStarts}</p>
      </Card>
      {action}
    </Shell>
  );
}

/* ───────────── Jun: Rewards ───────────── */
function RewardsScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const w = t.rewards;
  return (
    <Shell title={w.title}>
      <PassCard status="Regular" fields={statusFields(t)} />
      <Card>
        <div className="flex items-center justify-between text-[10px] uppercase text-grey-300">
          <span>Regular</span>
          <span>All-in</span>
        </div>
        <Progress value={6} steps={10} />
        <p className="mt-2 text-[10px] text-grey-300">{w.ladder}</p>
      </Card>
      <div className="rounded-[14px] border border-yellow p-3">
        <p className="text-[9px] uppercase text-yellow">{w.unlocked}</p>
        <p className="mt-1 text-[13px] font-medium uppercase leading-tight">{w.firstRace}</p>
        <p className="mt-1 text-[10px] uppercase text-grey-300">{w.clubCode}</p>
      </div>
      {action ?? (
        <Card className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-grey-300" /> {w.priority}
          </span>
          <span className="text-[10px] text-grey-300">{w.soon}</span>
        </Card>
      )}
    </Shell>
  );
}

/* ───────────── Sep: Race weekend perks ───────────── */
function PerksScreen({ action }: { action?: ReactNode }) {
  const t = useScreenText();
  const k = t.perks;
  const perks = k.items;
  return (
    <Shell title={k.title}>
      <div className="flex items-center gap-3 bg-paper p-3 text-ink">
        <QrPattern className="h-14 w-14 shrink-0" />
        <div className="text-[10px] uppercase leading-snug">
          <p className="font-medium">{k.checkin}</p>
          <p>Women Doubles · Wave 14</p>
          <p className="opacity-60">{k.scan}</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-yellow px-3 py-2.5 text-ink">
        <div>
          <p className="text-[9px] uppercase">{k.yourPoints}</p>
          <p className="headline text-[28px]">{t.num("1,020")}</p>
        </div>
        <span className="text-right text-[9px] uppercase leading-tight">
          {k.earned}
          <br />
          {k.sessions}
        </span>
      </div>
      <Card className="!p-0">
        <p className="px-3 pb-1 pt-2.5 text-[10px] uppercase text-grey-300">{k.list}</p>
        <ul>
          {perks.map(([k, v, d]) => (
            <li key={k} className="flex items-center gap-3 border-t border-ink-600 px-3 py-2 text-[11px]">
              <span className="flex-1">
                {k}
                <span className="block text-[9px] text-grey-300">{d}</span>
              </span>
              <span className="headline text-[18px] text-yellow">{v}</span>
            </li>
          ))}
        </ul>
      </Card>
      {action ?? (
        <Card className="flex items-center justify-between text-[11px]">
          <span>{k.village}</span>
          <ChevronRight className="h-4 w-4 text-yellow" />
        </Card>
      )}
    </Shell>
  );
}

/* ───────────── Dec: Record ───────────── */
function RecordScreen() {
  const t = useScreenText();
  const r = t.record;
  const patches = r.patchList;
  const pts = [64.0, 65.8, 66.4, 67.3, 68.1, 69.6];
  const max = 71;
  const min = 62;
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length - 1)) * 236} ${46 - ((p - min) / (max - min)) * 42}`)
    .join(" ");
  return (
    <Shell title={r.title}>
      <div>
        <p className="text-[10px] uppercase text-grey-300">HYROX Index</p>
        <p className="headline text-[56px] leading-none">
          <span className="hl">{t.num("69.6")}</span>
        </p>
        <p className="mt-1 text-[10px] text-grey-300">{r.delta}</p>
      </div>
      <svg viewBox="0 0 236 50" className="h-12 w-full" aria-hidden>
        <path d={path} fill="none" stroke="#FFED00" strokeWidth="2" />
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {r.stats.map(([v, k]) => (
          <Card key={k} className="!p-2 text-center">
            <p className="headline text-[24px]">{v}</p>
            <p className="text-[9px] uppercase text-grey-300">{k}</p>
          </Card>
        ))}
      </div>
      <p className="text-[10px] uppercase text-grey-300">{r.patches}</p>
      <div className="grid grid-cols-3 gap-2">
        {patches.map((p) => (
          <span key={p} className="grid aspect-square place-items-center border border-paper/30 text-[11px] font-medium">
            {p}
          </span>
        ))}
      </div>
    </Shell>
  );
}

/* ───────────── bits ───────────── */
export function Progress({ value, steps }: { value: number; steps: number }) {
  return (
    <div className="mt-2 flex gap-1">
      {Array.from({ length: steps }).map((_, i) => (
        <span key={i} className={cn("h-[5px] flex-1", i < value ? "bg-yellow" : "bg-ink-500")} />
      ))}
    </div>
  );
}

export function QrPattern({ className }: { className?: string }) {
  // Deterministic pseudo-QR (21×21) with three finder patterns – decoration only
  const n = 21;
  const finder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= n - 7 && y < 7) || (x < 7 && y >= n - 7);
  const cells: [number, number][] = [];
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) if (!finder(x, y) && (x * 7 + y * 13 + ((x * y) % 5)) % 3 === 0) cells.push([x, y]);
  const Finder = ({ x, y }: { x: number; y: number }) => (
    <g>
      <rect x={x} y={y} width="7" height="7" fill="#000" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#000" />
    </g>
  );
  return (
    <svg viewBox="-1 -1 23 23" className={className} aria-hidden shapeRendering="crispEdges">
      <rect x="-1" y="-1" width="23" height="23" fill="#fff" />
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#000" />
      ))}
      <Finder x={0} y={0} />
      <Finder x={n - 7} y={0} />
      <Finder x={0} y={n - 7} />
    </svg>
  );
}
