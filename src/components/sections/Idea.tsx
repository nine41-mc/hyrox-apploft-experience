import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Phone } from "@/components/ui/Phone";
import { AppScreen } from "@/components/screens/AppScreens";
import { RecordWeb } from "@/components/mocks/RecordWeb";

export function Idea({ c }: { c: Content }) {
  const { idea, ui } = c;
  return (
    <Section id="idea" tone="ink" className="overflow-hidden">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{idea.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={idea.title} hl={idea.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{idea.body}</p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px bg-ink-600 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {idea.pillars.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.06} className="group flex flex-col bg-ink-800 p-6 md:p-7">
              <span className="headline text-[16px] text-grey-300">{p.n}</span>
              <h3 className="headline mt-6 text-[36px] md:text-[40px]">
                <span className="transition-colors group-hover:text-yellow">{p.name}</span>
              </h3>
              <p className="eyebrow mt-2 !text-[11px] text-grey-300">
                {ui.golf} {p.golf}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/80">{p.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-px flex flex-col gap-2 bg-yellow p-5 text-ink md:flex-row md:items-baseline md:gap-6 md:p-6">
          <p className="headline shrink-0 text-[22px] md:text-[26px]">{idea.standard.k}_</p>
          <p className="text-[16px] leading-relaxed md:text-[17px]">{idea.standard.v}</p>
        </Reveal>

        {/* Web + app: the record is the product */}
        <div className="mt-16 grid items-end gap-10 md:mt-24 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <Reveal>
            <div role="img" aria-label={ui.webCaption}>
              <div aria-hidden>
                <RecordWeb />
              </div>
            </div>
            <p className="mt-3 text-[13px] text-grey-300" aria-hidden>{ui.webCaption}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col items-center">
            <Phone className="w-[252px] md:w-[264px]" label={ui.appCaption}>
              <AppScreen screen="record" />
            </Phone>
            <p className="mt-3 text-[13px] text-grey-300" aria-hidden>{ui.appCaption}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <p className="headline text-[36px] md:text-[64px] lg:text-[84px]">
            {idea.quote.lines.map((l) => (
              <span key={l} className="block">
                {l === idea.quote.hl ? <span className="hl">{l}</span> : l}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
