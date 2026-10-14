import { model } from "@/content/en";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { IndexDemo } from "./IndexDemo";

export function Model() {
  return (
    <Section id="model">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{model.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={model.title} hl={model.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{model.body}</p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px bg-ink-600 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {model.pillars.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.08} className="group flex flex-col bg-ink p-6 transition-colors hover:bg-ink-800 md:p-8">
              <span className="headline text-[18px] text-grey-400">{p.n}</span>
              <h3 className="headline mt-8 text-[40px] md:text-[48px]">
                <span className="transition-colors group-hover:text-yellow">{p.name}</span>
              </h3>
              <p className="eyebrow mt-3 !text-[11px] text-grey-300">Golf: {p.golf}</p>
              <p className="mt-6 text-[16px] leading-relaxed text-paper/80">{p.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-4 grid gap-4 bg-yellow p-6 text-ink md:grid-cols-[1fr_1.4fr] md:items-center md:p-10">
          <h3 className="headline text-[32px] md:text-[44px]">{model.standard.title}</h3>
          <p className="text-[17px] leading-relaxed md:text-[19px]">{model.standard.text}</p>
        </Reveal>

        <IndexDemo />
      </div>
    </Section>
  );
}
