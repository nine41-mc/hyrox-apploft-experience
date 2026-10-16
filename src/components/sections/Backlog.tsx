"use client";

import { useState } from "react";
import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/components/ui/cn";

const SPAN: Record<string, string> = {
  xl: "md:col-span-2 lg:row-span-2",
  md: "md:col-span-2",
  sm: "",
};

type Tone = "yellow" | "paper" | "ink" | "outline";

/** Vision backlog (epics as a bento grid) and the full idea pool, in two tabs. */
export function Backlog({ c }: { c: Content }) {
  const { backlog } = c;
  const [tab, setTab] = useState<"vision" | "pool">("vision");
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

        <div role="tablist" aria-label={backlog.eyebrow} className="mt-10 flex gap-2">
          {(["vision", "pool"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`backlog-tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`backlog-panel-${t}`}
              onClick={() => setTab(t)}
              className={cn(
                "eyebrow inline-flex min-h-11 items-center rounded-full border px-5 !text-[12px] transition-colors",
                tab === t ? "border-yellow bg-yellow text-ink" : "border-paper/30 text-paper/80 hover:border-yellow hover:text-yellow",
              )}
            >
              {backlog.tabs[t]}
              {t === "pool" && <span className="ml-2 opacity-60">{backlog.pool.reduce((n, g) => n + g.items.length, 0)}</span>}
            </button>
          ))}
        </div>

        {tab === "pool" && (
          <div role="tabpanel" id="backlog-panel-pool" aria-labelledby="backlog-tab-pool" className="mt-8">
            <p className="max-w-[640px] text-[16px] leading-relaxed text-paper/75">{backlog.poolIntro}</p>
            <div className="mt-8 space-y-10">
              {backlog.pool.map((g) => (
                <div key={g.k}>
                  <h3 className="eyebrow flex items-center gap-3 text-yellow">
                    {g.k}_ <span className="text-grey-300">{g.items.length}</span>
                  </h3>
                  <ul className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {g.items.map(([k, v]) => (
                      <li key={k} className="flex gap-3 rounded-[16px] border border-ink-600 bg-ink-800 p-4">
                        <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-yellow" />
                        <span>
                          <span className="block text-[15px] font-medium">{k}</span>
                          <span className="mt-0.5 block text-[14px] leading-snug text-paper/65">{v}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div
          role="tabpanel"
          id="backlog-panel-vision"
          aria-labelledby="backlog-tab-vision"
          hidden={tab !== "vision"}
          className="mt-8 grid grid-flow-dense gap-3 md:grid-cols-2 lg:grid-cols-4"
        >
          {backlog.epics.map((e, i) => {
            const tone = e.tone as Tone;
            const light = tone === "yellow" || tone === "paper";
            return (
              <Reveal
                key={e.id}
                delay={(i % 4) * 0.05}
                className={cn(
                  "flex flex-col rounded-[24px] p-6 md:p-7",
                  SPAN[e.size],
                  tone === "yellow" && "bg-yellow text-ink",
                  tone === "paper" && "bg-paper text-ink",
                  tone === "ink" && "bg-ink-800 text-paper",
                  tone === "outline" && "border border-yellow/70 bg-ink text-paper",
                )}
              >
                <h3 className={cn("headline", e.size === "xl" ? "text-[48px] md:text-[64px]" : "text-[30px] md:text-[34px]")}>{e.name}</h3>
                <p className={cn("mt-2 text-[15px]", light ? "text-ink/70" : "text-paper/70")}>{e.desc}</p>
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
                  {e.features.map((f) => (
                    <li
                      key={f.t}
                      className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px]", light ? "bg-ink/10" : "bg-ink-700")}
                    >
                      <span aria-hidden className={cn("h-2.5 w-2.5 shrink-0 rounded-full", light ? "bg-ink" : "bg-yellow")} />
                      {f.t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
