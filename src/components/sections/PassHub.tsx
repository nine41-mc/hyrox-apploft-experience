"use client";

import { useState } from "react";
import { Fingerprint, IdCard, ScanLine, Gift, Wallet, Activity, type LucideIcon } from "lucide-react";
import type { Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/components/ui/cn";

const ICONS: Record<string, LucideIcon> = {
  identity: IdCard,
  access: ScanLine,
  benefit: Gift,
  wallet: Wallet,
  train: Activity,
};

/** Pentagon around the centre (percent of the square stage): the three meanings on top and right, the two extras on the left. */
const POS: Record<string, [number, number]> = {
  identity: [50, 14],
  access: [84.2, 38.9],
  benefit: [71.2, 79.1],
  wallet: [28.8, 79.1],
  train: [15.8, 38.9],
};

const MEANINGS = ["identity", "access", "benefit"];

type Hub = Content["pass"]["hub"];

/**
 * The Pass at the centre: a simple diagram first, details on demand.
 * Hover, focus or tap a topic and the panel shows its description and features.
 */
export function PassHub({ h }: { h: Hub }) {
  const [active, setActive] = useState<string | null>(null);
  const node = h.nodes.find((n) => n.id === active);

  return (
    <>
      <p className="eyebrow text-grey-300">{h.k}_</p>
      <div className="mt-5 grid items-center gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-16">
        {/* stage */}
        <Reveal className="relative mx-auto aspect-square w-full max-w-[560px]">
          <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 h-full w-full">
            <circle cx="50" cy="50" r="36" fill="none" className="stroke-ink-600" strokeWidth={0.3} />
            {h.nodes.map((n) => (
              <line
                key={n.id}
                x1="50"
                y1="50"
                x2={POS[n.id][0]}
                y2={POS[n.id][1]}
                strokeWidth={active === n.id ? 0.6 : 0.3}
                className={cn("transition-colors duration-300", active === n.id ? "stroke-yellow" : "stroke-paper/35")}
              />
            ))}
          </svg>

          {/* centre: the Pass */}
          <button
            type="button"
            onClick={() => setActive(null)}
            onMouseEnter={() => setActive(null)}
            aria-label={h.reset}
            className="absolute left-1/2 top-1/2 grid aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-dashed border-yellow bg-ink text-yellow"
          >
            <span className="flex flex-col items-center">
              <Fingerprint className="h-[28%] w-[28%] min-h-7 min-w-7" strokeWidth={1.5} aria-hidden />
              <span className="headline mt-1 text-center text-[clamp(14px,3.6vw,24px)] leading-[0.95] text-paper">
                HYROX
                <br />
                Pass
              </span>
            </span>
          </button>

          {h.nodes.map((n) => {
            const Icon = ICONS[n.id];
            const on = active === n.id;
            const meaning = MEANINGS.includes(n.id);
            return (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setActive(n.id)}
                onFocus={() => setActive(n.id)}
                onClick={() => setActive(n.id)}
                aria-pressed={on}
                aria-controls="pass-hub-panel"
                style={{ left: `${POS[n.id][0]}%`, top: `${POS[n.id][1]}%` }}
                className={cn(
                  "absolute flex aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full px-2 text-center transition-all duration-300",
                  meaning ? "bg-yellow text-ink" : "bg-paper text-ink",
                  on ? "scale-110 ring-4 ring-yellow/40" : active ? "opacity-60" : "",
                )}
              >
                <Icon className="h-[24%] w-[24%] min-h-5 min-w-5" strokeWidth={1.75} aria-hidden />
                <span className="mt-1 text-[clamp(11px,2.6vw,15px)] font-medium leading-tight">{n.k}</span>
              </button>
            );
          })}
        </Reveal>

        {/* detail panel */}
        <div id="pass-hub-panel" aria-live="polite" className="min-h-[280px] lg:min-h-[340px]">
          {node ? (
            <div key={node.id} className="animate-[fade-in_.35s_ease-out] motion-reduce:animate-none">
              <h3 className="headline text-[44px] md:text-[56px] lg:text-[64px]">{node.k}</h3>
              <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{node.v}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {node.chips.map((c) => (
                  <li key={c} className="inline-flex items-center gap-2 rounded-full bg-ink-700 px-3 py-1.5 text-[14px]">
                    <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key="intro" className="animate-[fade-in_.35s_ease-out] motion-reduce:animate-none">
              <h3 className="headline text-[44px] md:text-[64px] lg:text-[72px]">
                {h.title.map((t, i) => (
                  <span key={t} className="block">
                    {i === 0 ? <span className="hl">{t}</span> : t}
                  </span>
                ))}
              </h3>
              <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{h.lead}</p>
              <p className="mt-4 text-[14px] text-grey-300">{h.hint}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
