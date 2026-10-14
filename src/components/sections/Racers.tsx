import { ArrowRight, RotateCcw } from "lucide-react";
import { racers } from "@/content/en";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function Racers() {
  return (
    <Section id="racers" tone="ink">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{racers.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={racers.title} hl={racers.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{racers.body}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px bg-ink-600 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {racers.pillars.map((p, i) => (
            <Reveal as="li" key={p.k} delay={i * 0.08} className="flex flex-col bg-ink-800 p-6 md:p-8">
              <p className="eyebrow text-yellow">{p.k}_</p>
              <h3 className="headline mt-6 text-[32px] md:text-[36px]">{p.title}</h3>
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-snug text-paper/80">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-yellow" />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 md:mt-24">
          <h3 className="headline text-[32px] md:text-[44px] lg:text-[56px]">{racers.loop.title}</h3>
          <ol className="mt-10 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {racers.loop.steps.map((s, i) => (
              <Step key={s.k} i={i} last={i === racers.loop.steps.length - 1} k={s.k} v={s.v} />
            ))}
          </ol>
          <p className="mt-4 flex items-center gap-2 text-[13px] text-grey-300">
            <RotateCcw className="h-4 w-4 text-yellow" /> …and the next season starts in the club again.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function Step({ i, last, k, v }: { i: number; last: boolean; k: string; v: string }) {
  const event = k.includes("Event");
  return (
    <>
      <li className={`flex flex-col justify-between p-5 md:p-6 ${event ? "border border-paper/60" : i === 1 ? "bg-yellow text-ink" : "bg-ink"}`}>
        <span className={`eyebrow !text-[11px] ${i === 1 ? "" : "text-grey-300"}`}>{String(i + 1).padStart(2, "0")}</span>
        <div className="mt-6">
          <p className="headline text-[26px] md:text-[28px]">{k}</p>
          <p className={`mt-2 text-[14px] ${i === 1 ? "" : "text-paper/75"}`}>{v}</p>
        </div>
      </li>
      {!last && (
        <li aria-hidden className="grid place-items-center py-1 text-yellow md:py-0">
          <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
        </li>
      )}
    </>
  );
}
