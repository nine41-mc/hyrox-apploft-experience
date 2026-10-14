import { today } from "@/content/en";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

type Step = { k: string; v: string; cost: string; source?: number };

export function Today() {
  return (
    <Section id="today" tone="ink">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{today.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={today.title} hl={today.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{today.body}</p>
          </Reveal>
        </div>

        <Lane label={today.racer.label} steps={today.racer.steps} end={today.racer.end} />
        <Lane label={today.club.label} steps={today.club.steps} end={today.club.end} />

        <div className="mt-16 grid gap-4 md:mt-24 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="border border-ink-500 p-6 md:p-8">
            <p className="eyebrow text-yellow">{today.model.title}_</p>
            <p className="headline mt-6 text-[64px] md:text-[88px]">{today.model.revenue.value}</p>
            <p className="mt-2 max-w-[420px] text-[14px] text-grey-300">
              {today.model.revenue.label}
              <Src n={today.model.revenue.source} />
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {today.model.streams.map((s) => (
                <li key={s} className="border border-ink-500 px-3 py-1.5 text-[13px] text-grey-200">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="bg-yellow p-6 text-ink md:p-8">
            <p className="eyebrow">{today.questions.title}_</p>
            <ol className="mt-6 space-y-4">
              {today.questions.items.map((q, i) => (
                <li key={q} className="flex gap-4 text-[16px] font-medium leading-snug md:text-[17px]">
                  <span className="headline text-[18px]">{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Lane({ label, steps, end }: { label: string; steps: readonly Step[]; end: string }) {
  return (
    <Reveal className="mt-14 md:mt-20">
      <p className="headline text-[28px] md:text-[36px]">{label}</p>
      <ol className="mt-6 grid gap-px bg-ink-600 md:grid-cols-3 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr">
        {steps.map((s, i) => (
          <li key={s.k} className="flex flex-col bg-ink p-5">
            <span className="eyebrow !text-[11px] text-grey-400">{String(i + 1).padStart(2, "0")}</span>
            <p className="headline mt-4 text-[24px]">{s.k}</p>
            <p className="mt-2 text-[14px] leading-snug text-paper/75">{s.v}</p>
            <p className="mt-auto pt-4 text-[13px] font-medium text-yellow">
              {s.cost}
              {s.source ? <Src n={s.source} /> : null}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-3 border-l-2 border-yellow pl-3 text-[15px] text-paper/85">{end}</p>
    </Reveal>
  );
}
