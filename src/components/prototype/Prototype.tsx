"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Content } from "@/content";
import { Headline } from "@/components/ui/Headline";
import { MacBook } from "@/components/ui/MacBook";
import { Phone } from "@/components/ui/Phone";
import { cn } from "@/components/ui/cn";
import { AthleteWeb, ClubWeb, webUrl } from "./WebScreens";
import { PhoneStep } from "./PhoneScreens";

type View = "athlete" | "club";

/** HYROX Pass concept prototype: one athlete, one club, four steps – laptop and phone in sync. */
export function Prototype({ p }: { p: Content["prototype"] }) {
  const [step, setStep] = useState(0);
  const [view, setView] = useState<View>("athlete");
  const last = p.steps.length - 1;
  const next = () => setStep((s) => (s === last ? 0 : s + 1));
  const s = p.steps[step];

  return (
    <>
      <p className="eyebrow text-yellow">{p.eyebrow}_</p>
      <Headline as="h1" lines={p.title} hl={p.titleHl} className="mt-4" />
      <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{p.lead}</p>

      {/* controls */}
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <div role="group" aria-label={p.viewLabel} className="flex border border-paper/30">
            {(["athlete", "club"] as const).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={view === v}
                onClick={() => setView(v)}
                className={cn(
                  "eyebrow min-h-11 px-4 !text-[12px] transition-colors",
                  view === v ? "bg-paper text-ink" : "text-paper/80 hover:text-yellow",
                )}
              >
                {p.views[v]}
              </button>
            ))}
          </div>
          <ol aria-label={p.stepsLabel} className="no-scrollbar -mx-1 flex max-w-full gap-1 overflow-x-auto px-1">
            {p.steps.map((st, i) => (
              <li key={st.name} className="shrink-0">
                <button
                  type="button"
                  aria-current={step === i ? "step" : undefined}
                  onClick={() => setStep(i)}
                  className={cn(
                    "eyebrow min-h-11 px-3 !text-[12px] transition-colors",
                    step === i ? "bg-yellow text-ink" : "text-grey-300 hover:text-paper",
                  )}
                >
                  {String(i + 1).padStart(2, "0")} {st.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={p.prev}
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="grid h-12 w-12 place-items-center border border-paper/30 transition-colors hover:border-yellow hover:text-yellow disabled:opacity-30"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={step === last ? p.restart : p.next}
            onClick={next}
            className="grid h-12 w-12 place-items-center border border-paper/30 transition-colors hover:border-yellow hover:text-yellow"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* devices */}
      {/* light "studio" stage so the black devices stand out from the black page */}
      <div className="mt-10 grid items-center gap-10 bg-[radial-gradient(ellipse_at_50%_35%,#fafafa_0%,#e6e6e6_55%,#cfcfcf_100%)] px-4 py-10 md:px-10 md:py-14 lg:grid-cols-[1fr_auto] lg:gap-14 lg:px-14 lg:py-16">
        <div className="px-[5%] lg:px-[3%]">
          <MacBook label={`${p.macLabel} – ${p.views[view]}: ${s.name}`} url={webUrl[view]}>
            <div key={`${view}-${step}`} className="h-full motion-safe:animate-[fade-in_0.35s_ease-out]">
              {view === "athlete" ? <AthleteWeb step={step} onNext={next} /> : <ClubWeb step={step} onNext={next} />}
            </div>
          </MacBook>
        </div>
        <Phone className="w-[252px] !shadow-[0_40px_70px_-30px_rgba(0,0,0,0.55)] md:w-[272px]" label={`${p.phoneLabel}: ${s.name}`}>
          <div key={step} className="h-full motion-safe:animate-[fade-in_0.35s_ease-out]">
            <PhoneStep step={step} onNext={next} />
          </div>
        </Phone>
      </div>

      {/* caption */}
      <div aria-live="polite" className="mt-10 grid gap-4 border-t border-ink-600 pt-6 md:grid-cols-[auto_1fr] md:gap-10">
        <p className="headline text-[40px] text-yellow md:text-[48px]">
          {s.month} · {s.name}
        </p>
        <p className="max-w-[720px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">
          <span className="eyebrow mr-2 !text-[11px] text-grey-300">{p.views[view]}_</span>
          {view === "athlete" ? s.athlete : s.club}
        </p>
      </div>
    </>
  );
}
