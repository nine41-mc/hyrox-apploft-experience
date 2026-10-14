import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function Build({ c }: { c: Content }) {
  const { build } = c;
  return (
    <Section id="build" tone="ink">
      <div className="container-site">
        <Eyebrow>{build.eyebrow}</Eyebrow>
        <Reveal>
          <Headline lines={build.title} hl={build.titleHl} />
        </Reveal>

        <ol className="relative mt-14 grid gap-4 md:mt-20 lg:grid-cols-3 lg:gap-0">
          {build.phases.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 0.1}
              className={`relative p-6 md:p-8 ${i === 1 ? "bg-yellow text-ink" : "border border-ink-500"}`}
            >
              <p className={`eyebrow !text-[11px] ${i === 1 ? "" : "text-grey-300"}`}>{p.when}</p>
              <h3 className="headline mt-6 text-[44px] md:text-[56px]">{p.name}</h3>
              <p className={`mt-4 text-[16px] leading-relaxed ${i === 1 ? "" : "text-paper/80"}`}>{p.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <h3 className="headline text-[32px] md:text-[44px] lg:text-[56px]">{build.team.title}</h3>
          </Reveal>
          <ul className="mt-8 grid gap-px bg-ink-600 md:grid-cols-3">
            {build.team.items.map((t, i) => (
              <Reveal as="li" key={t.k} delay={i * 0.08} className="bg-ink-800 p-6 md:p-8">
                <p className="headline text-[30px]">{t.k}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-paper/80">{t.v}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
