import { ArrowRight } from "lucide-react";
import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

export function Insight({ c }: { c: Content }) {
  const { insight, ui } = c;
  return (
    <Section id="insight" tone="ink" className="overflow-hidden">
      <Photo name="moment" alt={ui.momentAlt} className="!absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-800 via-ink-800/70 to-ink-800" />
      <div className="container-site relative">
        <Eyebrow>{insight.eyebrow}</Eyebrow>
        <Reveal>
          <Headline lines={insight.title} hl={insight.titleHl} />
          <p className="headline mt-4 text-[28px] text-grey-300 md:text-[40px] lg:text-[52px]">{insight.sub}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[720px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{insight.body}</p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <Reveal className="border border-ink-500 p-6 md:p-8">
            <p className="eyebrow text-grey-300">{insight.today.label}_</p>
            <ul className="mt-5 space-y-4">
              {insight.today.items.map((t) => (
                <li key={t} className="text-[17px] text-grey-200 md:text-[19px]">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid place-items-center py-2 md:py-0" aria-hidden>
            <span className="grid h-14 w-14 rotate-90 place-items-center bg-yellow text-ink md:rotate-0">
              <ArrowRight className="h-6 w-6" />
            </span>
          </div>
          <Reveal delay={0.12} className="bg-yellow p-6 text-ink md:p-8">
            <p className="eyebrow">{insight.next.label}_</p>
            <ul className="mt-5 space-y-4">
              {insight.next.items.map((t) => (
                <li key={t} className="text-[17px] font-medium md:text-[19px]">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
