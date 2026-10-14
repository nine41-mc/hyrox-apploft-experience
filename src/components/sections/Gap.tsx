import type { Content } from "@/content";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { YearGrid } from "./YearGrid";

export function Gap({ c }: { c: Content }) {
  const { gap, ui } = c;
  return (
    <Section id="gap">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{gap.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={gap.title} hl={gap.titleHl} />
              <p className="headline mt-4 text-[28px] text-grey-300 md:text-[40px] lg:text-[52px]">{gap.sub}</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{gap.body}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-4 lg:col-span-2 lg:mt-10">
            <YearGrid months={ui.months} aria={ui.gridAria} />
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-grey-300">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 bg-yellow" /> {gap.legend.race}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 bg-ink-500" /> {gap.legend.club}
              </span>
            </div>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 border-t border-ink-600 md:mt-24 lg:grid-cols-4">
          {gap.stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.08} className="border-b border-ink-600 py-8 pr-4 lg:border-b-0 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
              <p className={`headline text-[48px] md:text-[72px] lg:text-[88px] ${s.value === "0" ? "text-yellow" : ""}`}>
                {s.value}
              </p>
              <p className="mt-2 text-[14px] text-grey-300 md:text-[16px]">
                {s.label}
                <Src n={s.source} />
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <h3 className="headline text-[32px] md:text-[44px] lg:text-[56px]">{gap.meanwhile.title}</h3>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {gap.meanwhile.items.map((m, i) => (
              <Reveal key={m.k} delay={i * 0.08} className="border border-ink-600 bg-ink-800 p-6 md:p-7">
                <p className="eyebrow text-yellow">{m.k}_</p>
                <p className="mt-4 text-[16px] leading-relaxed text-paper/85">
                  {m.v}
                  <Src n={m.source} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
