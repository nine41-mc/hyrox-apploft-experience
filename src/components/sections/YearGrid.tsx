"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/components/ui/useInView";

// Race weekends of an illustrative racer: 3 race days
const RACE_DAYS = new Set([104, 105, 318]);

/** 365 squares, 3 yellow. The point of the whole site in one picture. Animated in CSS (globals.css `.yeargrid`). */
export function YearGrid({ months, aria }: { months: readonly string[]; aria: string }) {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");
  const days = Array.from({ length: 365 }, (_, i) => i);

  return (
    <div ref={ref} role="img" aria-label={aria} className="yeargrid" data-in={inView ? "" : undefined}>
      <div className="mb-2 hidden grid-cols-12 text-[10px] text-grey-300 md:grid" aria-hidden>
        {months.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
      <div
        className="grid grid-cols-[repeat(23,minmax(0,1fr))] gap-[3px] md:grid-flow-col md:grid-cols-none md:grid-rows-7 md:gap-[3px] lg:gap-1"
        aria-hidden
      >
        {days.map((d) => {
          const race = RACE_DAYS.has(d);
          const delay = race ? 1.4 : (d % 53) * 0.012 + Math.floor(d / 53) * 0.02;
          return (
            <span
              key={d}
              className={race ? "yg-cell yg-race aspect-square bg-yellow" : "yg-cell aspect-square bg-ink-600"}
              style={{ "--d": `${delay.toFixed(3)}s` } as CSSProperties}
            />
          );
        })}
      </div>
      <div className="mt-6 flex items-baseline gap-4" aria-hidden>
        <span className="headline text-[64px] text-yellow md:text-[88px]">3</span>
        <span className="headline text-[40px] text-grey-300 md:text-[56px]">/ 365</span>
      </div>
    </div>
  );
}
