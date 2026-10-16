"use client";

import { Check, TrendingUp, UserPlus, Euro, Timer } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { useScreenText } from "@/components/screens/ScreenLocale";

/** Browser-framed dashboard for a club owner (illustrative data) */
export function ClubOsMock({ note }: { note: string }) {
  const o = useScreenText().mocks.clubOs;
  const icons = [TrendingUp, Timer, UserPlus, Euro];
  const kpis = o.kpis.map(([k, v, d], i) => ({ icon: icons[i], k, v, d }));
  const sims = o.sims.map(([when, what, slots], i) => [when, what, slots, i === 0] as const);
  return (
    <div className="overflow-hidden rounded-[14px] border border-ink-500 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-ink-600 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
        <span className="ml-3 truncate text-[12px] text-grey-300">club.hyrox.com / hafen-athletics</span>
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="wordmark text-[11px] text-grey-300">HYROX Club OS</p>
            <p className="headline mt-2 text-[30px] md:text-[36px]">Hafen Athletics</p>
          </div>
          <span className="eyebrow flex items-center gap-1.5 bg-yellow px-2.5 py-1.5 !text-[11px] text-ink">
            <Check className="h-3.5 w-3.5" /> {o.rated}
          </span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {kpis.map(({ icon: Icon, k, v, d }) => (
            <div key={k} className="bg-ink-700 p-4">
              <Icon className="h-4 w-4 text-yellow" />
              <p className="headline mt-3 text-[30px] md:text-[34px]">{v}</p>
              <p className="text-[12px] text-paper/80">{k}</p>
              <p className="text-[11px] text-grey-300">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 bg-ink-700">
          <p className="eyebrow border-b border-ink-600 px-4 py-3 !text-[11px] text-grey-300">{o.upcoming}</p>
          <ul>
            {sims.map(([when, what, slots, hot]) => (
              <li key={when} className="flex items-center gap-4 border-b border-ink-600 px-4 py-3 text-[14px] last:border-0">
                <span className="w-[80px] shrink-0 text-grey-300">{when}</span>
                <span className="flex-1">{what}</span>
                <span className={hot ? "text-yellow" : "text-grey-300"}>{slots}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[11px] text-grey-300">{note}</p>
      </div>
    </div>
  );
}

/** The gym-floor leaderboard screen */
export function WallMock({ caption }: { caption: string }) {
  const t = useScreenText();
  const w = t.mocks.wall;
  const legends = [
    ["Jonas B.", `11 ${w.sims}`, t.num("78.9")],
    ["Mara S.", `10 ${w.sims}`, t.num("69.2")],
    ["Deniz A.", `9 ${w.sims}`, t.num("81.0")],
    ["Tom R.", `8 ${w.sims}`, t.num("74.5")],
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[10px] border-[10px] border-ink-700 bg-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        <Photo name="dumbbells" alt="" className="!absolute inset-0 opacity-30" />
        <div className="relative p-5 md:p-6">
          <div className="flex items-center justify-between">
            <span className="wordmark text-[11px]">HYROX</span>
            <span className="eyebrow !text-[10px] text-grey-300">Hafen Athletics · Wall</span>
          </div>
          <p className="headline mt-5 text-[34px] md:text-[40px]">
            <span className="hl">{w.title}</span>
          </p>
          <p className="eyebrow mt-2 !text-[10px] text-grey-300">{w.sub}</p>
          <ol className="mt-5 space-y-2">
            {legends.map(([n, s, idx], i) => (
              <li key={n} className="flex items-center gap-3 bg-ink/80 px-3 py-2.5 text-[14px] backdrop-blur-sm">
                <span className="headline w-5 text-[20px] text-yellow">{i + 1}</span>
                <span className="flex-1 uppercase">{n}</span>
                <span className="text-[12px] text-grey-300">{s}</span>
                <span className="headline w-12 text-right text-[18px]">{idx}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 bg-paper px-3 py-2 text-[12px] uppercase text-ink">{w.next}</div>
        </div>
      </div>
      <div className="mx-auto h-6 w-24 bg-ink-700" aria-hidden />
      <p className="mt-2 text-center text-[12px] text-grey-300">{caption}</p>
    </div>
  );
}
