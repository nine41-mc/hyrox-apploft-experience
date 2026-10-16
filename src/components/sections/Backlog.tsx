"use client";

import { useState } from "react";
import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/components/ui/cn";

type Phase = "explore" | "build" | "later";
type Filter = "all" | Phase;

const SPAN: Record<string, string> = {
  xl: "md:col-span-2 lg:row-span-2",
  md: "md:col-span-2",
  sm: "",
};

/** Vision & exploration backlog: epics as a bento grid, features marked by phase, filterable. */
export function Backlog({ c }: { c: Content }) {
  const { backlog } = c;
  const [filter, setFilter] = useState<Filter>("all");
  const all = backlog.epics.flatMap((e) => e.features);
  const count = (p: Filter) => (p === "all" ? all.length : all.filter((f) => f.p === p).length);

  return (
    <Section id="backlog" tone="ink">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{backlog.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={backlog.title} hl={backlog.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{backlog.body}</p>
          </Reveal>
        </div>

        <div role="group" aria-label={backlog.filterLabel} className="mt-10 flex flex-wrap gap-2">
          {(["all", "explore", "build", "later"] as const).map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={filter === p}
              onClick={() => setFilter(p)}
              className={cn(
                "eyebrow inline-flex min-h-11 items-center gap-2 rounded-full border px-4 !text-[12px] transition-colors",
                filter === p ? "border-yellow bg-yellow text-ink" : "border-paper/30 text-paper/80 hover:border-yellow hover:text-yellow",
              )}
            >
              {p !== "all" && <Dot phase={p} onYellow={filter === p} />}
              {backlog.phases[p]}
              <span className="opacity-60">{count(p)}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-flow-dense auto-rows-auto gap-3 md:grid-cols-2 lg:grid-cols-4">
          {backlog.epics.map((e, i) => {
            const tone = e.tone as "yellow" | "paper" | "ink";
            return (
              <Reveal
                key={e.id}
                delay={(i % 4) * 0.05}
                className={cn(
                  "flex flex-col rounded-[24px] p-6 md:p-7",
                  SPAN[e.size],
                  tone === "yellow" && "bg-yellow text-ink",
                  tone === "paper" && "bg-paper text-ink",
                  tone === "ink" && "border border-ink-600 bg-ink-800 text-paper",
                )}
              >
                <h3 className={cn("headline", e.size === "xl" ? "text-[48px] md:text-[64px]" : "text-[30px] md:text-[34px]")}>{e.name}</h3>
                <p className={cn("mt-2 text-[15px]", tone === "ink" ? "text-paper/70" : "text-ink/70")}>{e.desc}</p>
                {"highlights" in e && e.highlights && (
                  <p className="headline mt-8 text-[40px] leading-[0.95] md:text-[56px]" aria-hidden>
                    {e.highlights.map((h) => (
                      <span key={h} className="block">
                        {h}
                      </span>
                    ))}
                  </p>
                )}
                <ul className={cn("mt-6 flex flex-wrap gap-2", e.size === "xl" && "md:mt-auto")}>
                  {e.features.map((f) => {
                    const dim = filter !== "all" && f.p !== filter;
                    return (
                      <li
                        key={f.t}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] transition-opacity",
                          tone === "ink" ? "bg-ink-700" : "bg-ink/10",
                          dim && "opacity-25",
                        )}
                      >
                        <Dot phase={f.p as Phase} onYellow={tone !== "ink"} />
                        {f.t}
                        <span className="sr-only">({backlog.phases[f.p as Phase]})</span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            );
          })}

          {/* legend */}
          <Reveal className="flex flex-col justify-between rounded-[24px] border border-yellow/50 p-6 md:p-7">
            <p className="eyebrow text-yellow">{backlog.legend}_</p>
            <ul className="mt-6 space-y-3">
              {(["explore", "build", "later"] as const).map((p) => (
                <li key={p} className="flex items-center justify-between gap-3 text-[15px]">
                  <span className="flex items-center gap-2">
                    <Dot phase={p} />
                    {backlog.phases[p]}
                  </span>
                  <span className="headline text-[28px]">{count(p)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** Phase marker: Explore = hollow, Build = filled, Later = grey. */
function Dot({ phase, onYellow }: { phase: Phase; onYellow?: boolean }) {
  const c = onYellow ? "border-ink bg-ink" : "border-yellow bg-yellow";
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2",
        phase === "build" && c,
        phase === "explore" && (onYellow ? "border-ink" : "border-yellow"),
        phase === "later" && (onYellow ? "border-ink/40 bg-ink/40" : "border-grey-400 bg-grey-400"),
      )}
    />
  );
}
