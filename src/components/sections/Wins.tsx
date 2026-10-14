import type { Content } from "@/content";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { ClubOsMock } from "@/components/mocks/ClubMocks";

export function Wins({ c }: { c: Content }) {
  const { wins, ui } = c;
  return (
    <Section id="wins">
      <div className="container-site">
        <Eyebrow>{wins.eyebrow}</Eyebrow>
        <Reveal>
          <Headline lines={wins.title} hl={wins.titleHl} />
        </Reveal>

        <ul className="mt-14 grid gap-px bg-ink-600 md:grid-cols-3 lg:mt-16">
          {wins.columns.map((col, i) => (
            <Reveal as="li" key={col.k} delay={i * 0.08} className={`p-6 md:p-8 ${i === 2 ? "bg-yellow text-ink" : "bg-ink-800"}`}>
              <p className="headline text-[36px] md:text-[44px]">{col.k}</p>
              <ul className="mt-6 space-y-3">
                {col.items.map((it) => (
                  <li key={it} className={`flex gap-3 text-[16px] leading-snug ${i === 2 ? "" : "text-paper/85"}`}>
                    <span className={`mt-[8px] h-1.5 w-1.5 shrink-0 ${i === 2 ? "bg-ink" : "bg-yellow"}`} />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid items-center gap-10 md:mt-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <ClubOsMock note={ui.illustrativeData} />
            <p className="mt-3 text-[13px] text-grey-400">{ui.clubCaption}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-yellow">{wins.growth.k}</p>
            <p className="headline mt-5 text-[32px] leading-[1] md:text-[44px]">{wins.growth.v}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-ink-600 pt-10 md:mt-20">
          <p className="eyebrow text-grey-300">{wins.proof.title}</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {wins.proof.items.map((p) => (
              <li key={p.k}>
                <p className="headline text-[26px]">{p.k}</p>
                <p className="mt-2 text-[14px] leading-snug text-paper/75">
                  {p.v}
                  <Src n={p.source} />
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 border border-yellow/60 p-6 md:p-8">
          <p className="eyebrow text-yellow">{wins.rivals.title}</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {wins.rivals.items.map((r) => (
              <li key={r.k}>
                <p className="headline text-[24px]">{r.k}</p>
                <p className="mt-2 text-[14px] leading-snug text-paper/75">
                  {r.v}
                  <Src n={r.source} />
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
