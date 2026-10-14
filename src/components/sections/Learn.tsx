import type { Content } from "@/content";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function Learn({ c }: { c: Content }) {
  const { learn, ui } = c;
  return (
    <Section id="learn">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{learn.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={learn.title} hl={learn.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{learn.body}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px bg-ink-600 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {learn.models.map((m, i) => (
            <Reveal as="li" key={m.k} delay={(i % 3) * 0.06} className="flex flex-col bg-ink p-6 md:p-8">
              <p className="headline text-[34px] md:text-[40px]">{m.k}</p>
              <p className="eyebrow mt-3 !text-[11px] !tracking-[0.12em] text-grey-300">
                {m.fact}
                <Src n={m.source} />
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/75">{m.how}</p>
              <p className="mt-auto pt-6 text-[15px] font-medium leading-snug">
                <span className="hl">{ui.forHyrox}</span> {m.lesson}
              </p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {learn.warnings.map((w) => (
            <Reveal key={w.k} className="border border-ink-500 p-6 md:p-7">
              <p className="eyebrow text-yellow">{w.k}_</p>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/80">
                {w.v}
                <Src n={w.source} />
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 bg-yellow p-6 text-ink md:p-10">
          <p className="eyebrow">{ui.principles}</p>
          <ol className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-5">
            {learn.principles.map((p, i) => (
              <li key={p} className="flex gap-3">
                <span className="headline text-[18px]">{String(i + 1).padStart(2, "0")}</span>
                <span className="headline text-[22px] leading-[1.05] md:text-[24px]">{p}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
