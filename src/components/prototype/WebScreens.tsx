"use client";

import type { ReactNode } from "react";
import { Check, ChevronRight, Star } from "lucide-react";
import { cn } from "@/components/ui/cn";
import { PassCard, passFields, statusFields } from "@/components/screens/AppScreens";
import { useScreenText } from "@/components/screens/ScreenLocale";

/**
 * Web views shown in the MacBook of the concept prototype (laid out for 1024×604).
 * Athlete = Lena's HYROX Pass on the web, Club = Club OS for Hafen Athletics. Illustrative data.
 * The yellow call to action advances the prototype (pointer shortcut only, tabIndex -1).
 */
export const webUrl = { athlete: "hyrox.com/pass", club: "club.hyrox.com/hafen-athletics" };

export function AthleteWeb({ step, onNext }: { step: number; onNext: () => void }) {
  const t = useScreenText();
  return (
    <Frame nav={t.web.athleteNav} active={[0, 2, 3, 0][step]} who="Lena K." sub="Hafen Athletics">
      {step === 0 && <AthleteTrain onNext={onNext} />}
      {step === 1 && <AthleteSim onNext={onNext} />}
      {step === 2 && <AthletePass onNext={onNext} />}
      {step === 3 && <AthleteRecord onNext={onNext} />}
    </Frame>
  );
}

export function ClubWeb({ step, onNext }: { step: number; onNext: () => void }) {
  const t = useScreenText();
  return (
    <Frame nav={t.web.clubNav} active={[1, 2, 3, 4][step]} who="Hafen Athletics" sub="Club OS" club>
      {step === 0 && <ClubTrain onNext={onNext} />}
      {step === 1 && <ClubSim onNext={onNext} />}
      {step === 2 && <ClubFunnel onNext={onNext} />}
      {step === 3 && <ClubRace onNext={onNext} />}
    </Frame>
  );
}

/* ───────────── layout bits ───────────── */
function Frame({ nav, active, who, sub, club, children }: { nav: string[]; active: number; who: string; sub: string; club?: boolean; children: ReactNode }) {
  return (
    <div className="flex h-full">
      <aside className="flex w-[196px] shrink-0 flex-col border-r border-ink-600 bg-ink-900 px-5 py-6">
        <p className="wordmark text-[12px]">HYROX</p>
        <p className="eyebrow mt-1 !text-[10px] text-yellow">{club ? "Club OS" : "Pass"}</p>
        <ul className="mt-8 space-y-1">
          {nav.map((n, i) => (
            <li key={n} className={cn("px-3 py-2 text-[14px]", i === active ? "bg-ink-700 text-paper" : "text-grey-300")}>
              {n}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-ink-600 text-[12px] font-medium">{club ? "HA" : "LK"}</span>
          <span className="min-w-0 text-[12px] leading-tight">
            <span className="block truncate">{who}</span>
            <span className="block truncate text-grey-300">{sub}</span>
          </span>
        </div>
      </aside>
      <main className="min-w-0 flex-1 overflow-hidden p-7">{children}</main>
    </div>
  );
}

function H({ k, title, right }: { k: string; title: string; right?: ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow !text-[11px] text-grey-300">{k}</p>
        <p className="headline mt-2 text-[40px]">{title}</p>
      </div>
      {right}
    </div>
  );
}

function Box({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("bg-ink-800 p-5", className)}>{children}</div>;
}

function Label({ children }: { children: ReactNode }) {
  return <p className="text-[11px] uppercase tracking-widest text-grey-300">{children}</p>;
}

function Go({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={onClick}
      className="inline-flex items-center gap-2 bg-yellow px-4 py-3 text-[13px] font-medium uppercase tracking-wide text-ink motion-safe:animate-[nudge_2.4s_ease-in-out_1.2s_infinite]"
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function Bar({ value, tone = "paper" }: { value: number; tone?: "paper" | "yellow" }) {
  return (
    <span className="block h-[6px] flex-1 bg-ink-600">
      <span className={cn("block h-full", tone === "yellow" ? "bg-yellow" : "bg-paper")} style={{ width: `${value}%` }} />
    </span>
  );
}

/* ───────────── athlete ───────────── */
function AthleteTrain({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.train;
  const log = w.days;
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 flex items-end">
          <H k={w.k} title={w.title} />
        </div>
        <div className="row-span-2">
          <PassCard fields={passFields(t)} />
          <Box className="mt-4">
            <Label>{t.forecast.forecast}</Label>
            <div className="mt-2 flex items-baseline gap-3">
              <p className="headline text-[48px] leading-none">~64</p>
              <p className="text-[12px] text-grey-300">{w.range}</p>
            </div>
            <p className="mt-2 text-[12px] text-grey-300">{w.forecastNote}</p>
          </Box>
        </div>
        <Box className="col-span-2">
          <Label>{w.log}</Label>
          <ul className="mt-3 divide-y divide-ink-600">
            {log.map(([d, session, src, dur]) => (
              <li key={d} className="flex items-center gap-4 py-3 text-[14px]">
                <span className="w-10 text-grey-300">{d}</span>
                <span className="flex-1">{session}</span>
                <span className="text-[12px] text-grey-300">{src}</span>
                <span className="w-16 text-right">{dur}</span>
                <Check className="h-4 w-4 text-yellow" />
              </li>
            ))}
          </ul>
        </Box>
        <div className="col-span-3 flex items-center justify-between bg-ink-700 p-5">
          <div>
            <Label>{w.next}</Label>
            <p className="headline mt-2 text-[28px]">{w.nextTitle}</p>
            <p className="mt-1 text-[14px] text-grey-300">{w.nextLine}</p>
          </div>
          <Go onClick={onNext}>{t.cta.bookSim}</Go>
        </div>
      </div>
    </>
  );
}

function AthleteSim({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.sim;
  const splits = [
    ["SkiErg", 72, "5:02"],
    ["Sled Push", 88, "4:11"],
    ["Sled Pull", 80, "5:36"],
    ["Burpee Broad Jumps", 64, "6:20"],
    ["Row", 70, "5:14"],
    ["Farmers Carry", 46, "2:31"],
    ["Sandbag Lunges", 84, "5:48"],
    ["Wall Balls", 92, "6:02"],
  ] as const;
  return (
    <>
      <H
        k={w.k}
        title="1:31:12"
        right={
          <span className="eyebrow flex items-center gap-1.5 bg-yellow px-3 py-2 !text-[11px] text-ink">
            <Check className="h-3.5 w-3.5" /> {w.badge}
          </span>
        }
      />
      <div className="grid grid-cols-[1.4fr_1fr] gap-4">
        <Box>
          <Label>{w.stations}</Label>
          <ul className="mt-3 space-y-2.5">
            {splits.map(([n, w, t]) => (
              <li key={n} className="flex items-center gap-3 text-[13px]">
                <span className="w-[150px] shrink-0">{n}</span>
                <Bar value={w} tone={w > 85 ? "yellow" : "paper"} />
                <span className="w-12 text-right text-grey-300">{t}</span>
              </li>
            ))}
          </ul>
        </Box>
        <div className="flex flex-col gap-4">
          <div className="bg-paper p-5 text-ink">
            <p className="text-[11px] uppercase tracking-widest">{w.first}</p>
            <p className="headline mt-2 text-[72px] leading-none">{t.num("65.8")}</p>
            <p className="mt-2 text-[12px]">{w.provisional}</p>
          </div>
          <Box className="flex flex-1 flex-col justify-between">
            <p className="text-[14px] text-grey-300">{w.top}</p>
            <Go onClick={onNext}>{t.cta.seePass}</Go>
          </Box>
        </div>
      </div>
    </>
  );
}

function AthletePass({ onNext }: { onNext: () => void }) {
  const pts = [64.0, 65.8, 66.4, 66.9, 67.3];
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${(i / (pts.length - 1)) * 300} ${70 - ((p - 63) / 5) * 64}`).join(" ");
  const t = useScreenText();
  const w = t.web.pass;
  const rewards = w.items.map(([k, d], i) => [k, d, i === 0] as const);
  return (
    <>
      <H k={w.k} title={w.title} />
      <div className="grid grid-cols-[1fr_1.2fr] gap-4">
        <div className="flex flex-col gap-4">
          <PassCard status="Regular" fields={statusFields(t)} />
          <Box>
            <div className="flex items-baseline justify-between">
              <Label>HYROX Index</Label>
              <p className="headline text-[36px] leading-none">{t.num("67.3")}</p>
            </div>
            <svg viewBox="0 0 300 72" className="mt-3 h-[56px] w-full" aria-hidden>
              <path d={path} fill="none" stroke="#FFED00" strokeWidth="2.5" />
            </svg>
          </Box>
        </div>
        <Box>
          <Label>{`${t.pass.status} · ${t.rewards.ladder}`}</Label>
          <div className="mt-3 grid grid-cols-3 gap-1 text-center text-[12px] uppercase">
            <span className="bg-ink-600 py-2 text-grey-300">Occasional</span>
            <span className="bg-paper py-2 font-medium text-ink">Regular</span>
            <span className="bg-ink-600 py-2 text-grey-300">All-in</span>
          </div>
          <div className="mt-5">
            <Label>{w.rewards}</Label>
          </div>
          <ul className="mt-3 divide-y divide-ink-600">
            {rewards.map(([k, d, hot]) => (
              <li key={k} className="flex items-center justify-between gap-4 py-3">
                <span>
                  <span className={cn("block text-[15px]", hot && "text-yellow")}>{k}</span>
                  <span className="block text-[12px] text-grey-300">{d}</span>
                </span>
                {hot ? <Go onClick={onNext}>{t.cta.bookCrew}</Go> : <span className="text-[12px] text-grey-300">{w.unlocked}</span>}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-grey-300">{w.crew}</p>
        </Box>
      </div>
    </>
  );
}

function AthleteRecord({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.record;
  const record = w.rows;
  return (
    <div className="grid h-full grid-cols-[1fr_1.5fr] gap-6">
      <div>
        <p className="eyebrow !text-[11px] text-grey-300">{w.k}</p>
        <p className="headline mt-3 text-[44px]">Lena K.</p>
        <div className="mt-3 flex gap-2">
          <span className="bg-paper px-2 py-1 text-[11px] font-medium uppercase text-ink">{w.badges[0]}</span>
          <span className="bg-grey-300 px-2 py-1 text-[11px] font-medium uppercase text-ink">{w.badges[1]}</span>
        </div>
        <p className="eyebrow mt-6 !text-[11px] text-grey-300">HYROX Index</p>
        <p className="headline mt-1 text-[80px] leading-none">
          <span className="hl">{t.num("69.6")}</span>
        </p>
        <div className="mt-8">
          <Go onClick={onNext}>{t.cta.restart}</Go>
        </div>
      </div>
      <Box>
        <Label>{w.record}</Label>
        <ul className="mt-3 divide-y divide-ink-600">
          {record.map(([d, k, place, time, score], i) => (
            <li key={d} className="flex items-center gap-4 py-3 text-[14px]">
              <span className="w-[72px] shrink-0 text-grey-300">{d}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-grey-300">{k}</span>
                <span className="block truncate">{place}</span>
              </span>
              <span className="text-grey-300">{time}</span>
              <span className={cn("headline w-12 text-right text-[20px]", i === 0 && "text-yellow")}>{t.num(score)}</span>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

/* ───────────── club ───────────── */
function Kpis({ items }: { items: [string, string, boolean?][] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {items.map(([v, k, hot]) => (
        <div key={k} className={cn("p-4", hot ? "bg-yellow text-ink" : "bg-ink-800")}>
          <p className="headline text-[34px] leading-none">{v}</p>
          <p className={cn("mt-2 text-[12px]", hot ? "" : "text-grey-300")}>{k}</p>
        </div>
      ))}
    </div>
  );
}

function ClubTrain({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.clubTrain;
  const ready = [
    ["Lena K.", "~64", `3× ${w.perWeek}`],
    ["Mia K.", "~62", `3× ${w.perWeek}`],
    ["Tom R.", "~66", `2× ${w.perWeek}`],
    ["Sara P.", "~61", `2× ${w.perWeek}`],
  ];
  return (
    <>
      <H
        k={w.k}
        title="Hafen Athletics_"
        right={
          <span className="eyebrow flex items-center gap-1.5 border border-paper/40 px-3 py-2 !text-[11px]">
            <Star className="h-3.5 w-3.5 text-yellow" /> {w.rated}
          </span>
        }
      />
      <Kpis items={w.kpis.map(([v, k], i) => [v, k, i === 1])} />
      <Box className="mt-4">
        <div className="flex items-center justify-between">
          <Label>{w.ready}</Label>
          <span className="text-[12px] text-grey-300">{w.more}</span>
        </div>
        <ul className="mt-2 divide-y divide-ink-600">
          {ready.map(([n, f, t]) => (
            <li key={n} className="flex items-center gap-4 py-2.5 text-[14px]">
              <span className="flex-1">{n}</span>
              <span className="w-24 text-grey-300">{t}</span>
              <span className="w-16 text-right">{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <Go onClick={onNext}>{w.invite}</Go>
        </div>
      </Box>
    </>
  );
}

function ClubSim({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.clubSim;
  const results = [
    ["Tom R.", "1:27:55", "66.9", true],
    ["Lena K.", "1:31:12", "65.8", true],
    ["Mia K.", "1:33:40", "64.7", true],
    ["Sara P.", "1:38:02", "62.1", true],
    ["Jan W.", "1:41:30", "60.4", false],
  ] as const;
  return (
    <>
      <H k={w.k} title={w.title} right={<p className="text-[14px] text-grey-300">{w.meta}</p>} />
      <div className="grid grid-cols-[1.5fr_1fr] gap-4">
        <Box>
          <Label>{w.results}</Label>
          <ul className="mt-2 divide-y divide-ink-600">
            {results.map(([n, time, idx, sent]) => (
              <li key={n} className="flex items-center gap-4 py-2.5 text-[14px]">
                <span className="flex-1">{n}</span>
                <span className="w-20 text-grey-300">{time}</span>
                <span className="w-12 text-right">{t.num(idx)}</span>
                <span className={cn("flex w-28 items-center justify-end gap-1 text-[12px]", sent ? "text-yellow" : "text-grey-300")}>
                  {sent ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> {w.sent}
                    </>
                  ) : (
                    w.judging
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Box>
        <div className="flex flex-col gap-4">
          <div className="bg-yellow p-5 text-ink">
            <p className="headline text-[56px] leading-none">7</p>
            <p className="mt-2 text-[13px]">{w.firsts}</p>
          </div>
          <Box className="flex flex-1 flex-col justify-between">
            <p className="text-[14px] text-grey-300">{w.paperwork}</p>
            <Go onClick={onNext}>{w.cta}</Go>
          </Box>
        </div>
      </div>
    </>
  );
}

function ClubFunnel({ onNext }: { onNext: () => void }) {
  const w = useScreenText().web.funnel;
  const funnel = ([
    [184, 100],
    [140, 76],
    [61, 33],
    [9, 5],
  ] as const).map(([v, pct], i) => [w.steps[i], v, pct] as const);
  return (
    <>
      <H k={w.k} title={w.title} />
      <div className="grid grid-cols-[1.5fr_1fr] gap-4">
        <Box>
          <ul className="space-y-4">
            {funnel.map(([k, v, w], i) => (
              <li key={k}>
                <div className="flex items-baseline justify-between text-[14px]">
                  <span>{k}</span>
                  <span className="headline text-[24px]">{v}</span>
                </div>
                <div className="mt-1.5 flex">
                  <Bar value={w} tone={i === funnel.length - 1 ? "yellow" : "paper"} />
                </div>
              </li>
            ))}
          </ul>
        </Box>
        <div className="flex flex-col gap-4">
          <Box>
            <Label>{w.code}</Label>
            <p className="headline mt-2 text-[44px] leading-none">9</p>
            <p className="mt-1 text-[13px] text-grey-300">{w.bookings}</p>
          </Box>
          <Box className="flex flex-1 flex-col justify-between">
            <div>
              <Label>{w.share}</Label>
              <p className="headline mt-2 text-[44px] leading-none">{w.shareValue}</p>
            </div>
            <Go onClick={onNext}>{w.cta}</Go>
          </Box>
        </div>
      </div>
    </>
  );
}

function ClubRace({ onNext }: { onNext: () => void }) {
  const t = useScreenText();
  const w = t.web.clubRace;
  const firsts = [
    ["Tom R.", "1:19:48"],
    ["Lena K. & Mia K.", "1:24:05"],
    ["Sara P.", "1:29:30"],
    ["Jan W.", "1:33:12"],
  ];
  return (
    <>
      <H k={w.k} title={w.title} right={<p className="headline text-[40px] text-yellow">#3</p>} />
      <div className="grid grid-cols-[1.5fr_1fr] gap-4">
        <Box>
          <Label>{w.wall}</Label>
          <ul className="mt-2 divide-y divide-ink-600">
            {firsts.map(([n, t]) => (
              <li key={n} className="flex items-center gap-4 py-2.5 text-[14px]">
                <Check className="h-4 w-4 text-yellow" />
                <span className="flex-1 uppercase">{n}</span>
                <span className="text-grey-300">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[12px] text-grey-300">{w.more}</p>
        </Box>
        <div className="flex flex-col gap-4">
          <Box>
            <Label>{w.share}</Label>
            <p className="headline mt-2 text-[44px] leading-none">{w.shareValue}</p>
            <p className="mt-1 text-[13px] text-grey-300">{w.shareNote}</p>
          </Box>
          <Box className="flex flex-1 flex-col justify-between">
            <p className="text-[14px] text-grey-300">{w.next}</p>
            <Go onClick={onNext}>{t.cta.restart}</Go>
          </Box>
        </div>
      </div>
    </>
  );
}
