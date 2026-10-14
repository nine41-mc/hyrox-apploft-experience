"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

// Race weekends of an illustrative racer: Hamburg (Apr), Berlin (Nov) + a 3rd day = 3 race days
const RACE_DAYS = new Set([104, 105, 318]);
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

/** 365 squares, 3 yellow. The point of the whole site in one picture. */
export function YearGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const days = Array.from({ length: 365 }, (_, i) => i);

  return (
    <div ref={ref} role="img" aria-label="A year of 365 days: 3 race days in yellow, 362 training days in grey">
      <div className="mb-2 hidden grid-cols-12 text-[10px] text-grey-400 md:grid">
        {MONTHS.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(23,minmax(0,1fr))] gap-[3px] md:grid-flow-col md:grid-cols-none md:grid-rows-7 md:gap-[3px] lg:gap-1">
        {days.map((d) => {
          const race = RACE_DAYS.has(d);
          return (
            <motion.span
              key={d}
              className={race ? "aspect-square bg-yellow" : "aspect-square bg-ink-600"}
              initial={reduce ? false : { opacity: 0, scale: race ? 2.4 : 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                duration: race ? 0.5 : 0.25,
                delay: race ? 1.4 : (d % 53) * 0.012 + Math.floor(d / 53) * 0.02,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>
      <div className="mt-6 flex items-baseline gap-4">
        <span className="headline text-[64px] text-yellow md:text-[88px]">3</span>
        <span className="headline text-[40px] text-grey-400 md:text-[56px]">/ 365</span>
      </div>
    </div>
  );
}
