import { audiences } from "@/content/en";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

export function Audiences() {
  const n = audiences.funnel.length;
  return (
    <Section id="growth">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{audiences.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={audiences.title} hl={audiences.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{audiences.body}</p>
          </Reveal>
        </div>

        {/* path from gym member to repeat racer – a staircase, not to scale */}
        <ol className="mt-14 flex flex-col gap-2 lg:mt-20" aria-label="Path from gym member to repeat racer">
          {audiences.funnel.map((f, i) => {
            const width = 100 - (i * 52) / (n - 1);
            const club = i === 2;
            return (
              <Reveal as="li" key={f.k} delay={i * 0.06}>
                <div
                  className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-4 py-4 md:px-6 ${club ? "bg-yellow text-ink" : "bg-ink-700"}`}
                  style={{ width: `max(${width}%, 280px)` }}
                >
                  <span className="headline text-[24px] md:text-[30px]">{f.k}</span>
                  <span className={`text-[14px] md:text-[15px] ${club ? "" : "text-paper/75"}`}>
                    {f.v}
                    {"source" in f && f.source ? <Src n={f.source} /> : null}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ol>
        <p className="mt-3 text-[12px] text-grey-400">Stages, not to scale. The Club Sim is the on-ramp.</p>

        <ul className="mt-14 grid gap-px bg-ink-600 md:grid-cols-2 lg:grid-cols-4">
          {audiences.segments.map((s, i) => (
            <Reveal as="li" key={s.k} delay={i * 0.06} className="bg-ink p-6 md:p-7">
              <p className="headline text-[26px] md:text-[28px]">{s.k}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-paper/75">
                {s.v}
                {"source" in s && s.source ? <Src n={s.source} /> : null}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
