"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import type { Content } from "@/content";
import { cn } from "@/components/ui/cn";
import { Reveal } from "@/components/ui/Reveal";

function toMinutes(t: string) {
  const [h, m, s] = t.split(":").map(Number);
  return h * 60 + m + s / 60;
}

/** Interactive: toggle results, watch the Index (best 5, benchmark ÷ time × 100) react. */
export function IndexDemo({ indexDemo, ui }: { indexDemo: Content["indexDemo"]; ui: Content["ui"] }) {
  const [on, setOn] = useState<Record<string, boolean>>(
    Object.fromEntries(indexDemo.results.map((r) => [r.id, r.on])),
  );

  const scored = indexDemo.results.map((r) => ({
    ...r,
    score: (indexDemo.benchmarkMinutes / toMinutes(r.time)) * 100,
  }));
  const active = scored.filter((r) => on[r.id]);
  const best = useMemo(() => [...active].sort((a, b) => b.score - a.score).slice(0, 5), [active]);
  const bestIds = new Set(best.map((b) => b.id));
  const index = best.length ? best.reduce((s, r) => s + r.score, 0) / best.length : 0;
  const reliable = best.length >= 3;

  return (
    <div className="mt-20 grid gap-10 border-t border-ink-600 pt-16 md:mt-28 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
      <Reveal>
        <p className="eyebrow text-yellow">{indexDemo.eyebrow}</p>
        <h3 className="headline mt-6 text-[36px] md:text-[52px] lg:text-[64px]">{indexDemo.title}</h3>
        <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-paper/80 md:text-[18px]">{indexDemo.body}</p>
        <div className="mt-10 flex items-end gap-5">
          <div>
            <p className="eyebrow !text-[11px] text-grey-300">{ui.indexLabel}</p>
            <p className="headline mt-2 text-[96px] leading-none md:text-[128px]" aria-live="polite">
              <span className={cn(index ? "hl" : "text-grey-400")}>{index ? index.toFixed(1) : "—"}</span>
            </p>
          </div>
          <span
            className={cn(
              "eyebrow mb-3 border px-2.5 py-1.5 !text-[11px]",
              reliable ? "border-yellow text-yellow" : "border-grey-400 text-grey-300",
            )}
          >
            {best.length === 0 ? ui.noResults : reliable ? `${ui.reliable} · ${best.length} ${ui.results}` : `${ui.provisional} · ${best.length} ${ui.of3}`}
          </span>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {indexDemo.rules.map((r) => (
            <li key={r} className="border border-ink-500 px-3 py-1.5 text-[13px] text-grey-200">
              {r}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="divide-y divide-ink-600 border-y border-ink-600">
          {scored.map((r) => {
            const isOn = on[r.id];
            const counts = bestIds.has(r.id);
            return (
              <li key={r.id}>
                <button
                  type="button"
                  aria-pressed={isOn}
                  onClick={() => setOn((s) => ({ ...s, [r.id]: !s[r.id] }))}
                  className={cn(
                    "flex w-full items-center gap-4 py-4 text-left transition-colors md:gap-6 md:py-5",
                    isOn ? "text-paper" : "text-grey-400 hover:text-grey-200",
                  )}
                >
                  <span
                    className={cn(
                      "grid h-7 w-7 shrink-0 place-items-center border transition-colors",
                      isOn ? "border-yellow bg-yellow text-ink" : "border-grey-400",
                    )}
                  >
                    {isOn && <Check className="h-4 w-4" />}
                  </span>
                  <span className="w-[72px] shrink-0 text-[13px] md:w-[84px] md:text-[14px]">{r.date}</span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block !text-[11px] !tracking-[0.14em]">{r.kind}</span>
                    <span className="block truncate text-[14px] md:text-[16px]">{r.place}</span>
                  </span>
                  <span className="hidden text-[15px] md:block">{r.time}</span>
                  <span className={cn("headline w-[52px] text-right text-[22px] md:text-[26px]", counts && "text-yellow")}>
                    {r.score.toFixed(1)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-[12px] text-grey-400">{ui.scoreNote}</p>
      </Reveal>
    </div>
  );
}
