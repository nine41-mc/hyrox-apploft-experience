import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Phone } from "@/components/ui/Phone";
import { AppScreen } from "@/components/screens/AppScreens";
import { RecordWeb } from "@/components/mocks/RecordWeb";
import { ArrowRight } from "lucide-react";
import { PassFieldsCard } from "@/components/ui/PassFieldsCard";
import { IndexExplainer } from "@/components/sections/IndexExplainer";

export function Idea({ c, passHref }: { c: Content; passHref: string }) {
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
            <p className="eyebrow text-yellow">{idea.kicker}_</p>
            <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{idea.body}</p>
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
                {ui.builtOn} {p.tag}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/80">{p.text}</p>
            </Reveal>
          ))}
        </ol>
        {/* the key: the HYROX Pass – links to its own page */}
        <Reveal className="mt-px">
          <a
            href={passHref}
            className="group grid items-center gap-6 bg-yellow p-6 text-ink md:grid-cols-[1fr_auto] md:gap-10 md:p-8"
          >
            <span>
              <span className="headline block text-[30px] md:text-[40px]">{idea.pass.k}_</span>
              <span className="mt-2 block max-w-[640px] text-[16px] leading-relaxed md:text-[18px]">{idea.pass.v}</span>
              <span className="eyebrow mt-5 inline-flex min-h-11 items-center gap-2 bg-ink px-4 !text-[12px] text-paper">
                {idea.pass.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
            <span className="hidden w-[300px] -rotate-3 transition-transform group-hover:rotate-0 md:block" aria-hidden>
              <PassFieldsCard />
            </span>
          </a>
        </Reveal>

        {/* Web + app: the record is the product */}
        <div className="mt-16 grid grid-cols-1 items-end gap-10 md:mt-24 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
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

        {/* what the Index on the record means */}
        <div className="mt-10 md:mt-14">
          <IndexExplainer x={idea.index} />
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
