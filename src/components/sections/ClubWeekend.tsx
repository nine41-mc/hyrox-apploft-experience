import type { Content } from "@/content";
import { Section, Eyebrow, Src } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { LeaderboardMock } from "@/components/mocks/LeaderboardMock";

export function ClubWeekend({ c }: { c: Content }) {
  const { clubWeekend: cw, ui } = c;
  return (
    <Section id="weekend" tone="ink">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{cw.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={cw.title} hl={cw.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{cw.body}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal className="min-w-0">
            <div role="img" aria-label={`${cw.mock.caption}. ${ui.illustrativeData}`}>
              <div aria-hidden>
                <LeaderboardMock mock={cw.mock} />
              </div>
            </div>
            <p className="mt-3 text-[13px] text-grey-300" aria-hidden>
              {cw.mock.caption} · {ui.illustrativeData}
            </p>
          </Reveal>
          <ol className="space-y-px bg-ink-600">
            {cw.steps.map((s, i) => (
              <Reveal as="li" key={s.k} delay={i * 0.06} className="flex gap-5 bg-ink-800 p-5 md:p-6">
                <span className="headline text-[18px] text-yellow">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="headline text-[26px] md:text-[30px]">{s.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/80">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <ul className="mt-px grid gap-px bg-ink-600 md:grid-cols-3">
          {cw.wins.map((w, i) => (
            <Reveal as="li" key={w.k} delay={i * 0.06} className={`p-5 md:p-6 ${i === 2 ? "bg-yellow text-ink" : "bg-ink"}`}>
              <h3 className="headline text-[24px]">{w.k}</h3>
              <p className={`mt-2 text-[15px] ${i === 2 ? "" : "text-paper/80"}`}>{w.v}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 border border-yellow/60 p-6 md:mt-16 md:p-8">
          <p className="eyebrow text-yellow">{cw.rivals.title}</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {cw.rivals.items.map((r) => (
              <li key={r.k}>
                <h3 className="headline text-[24px]">{r.k}</h3>
                <p className="mt-2 text-[14px] leading-snug text-paper/75">
                  {r.v}
                  <Src label={ui.source} n={r.source} />
                </p>
              </li>
            ))}
          </ul>
          <p className="headline mt-8 border-t border-paper/15 pt-6 text-[24px] leading-[1.05] md:text-[26px] xl:text-[32px]">
            <span className="hl">{cw.rivals.answer}</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
