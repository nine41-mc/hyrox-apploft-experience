import type { Content } from "@/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

export function ForHyrox({ c }: { c: Content }) {
  const { forHyrox, ui } = c;
  return (
    <Section id="hyrox" className="overflow-hidden">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>{forHyrox.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={forHyrox.title} hl={forHyrox.titleHl} />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[560px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{forHyrox.body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Photo name="arena" alt={ui.arenaAlt} className="mt-10 aspect-[4/5] w-full md:aspect-[16/10] lg:aspect-[4/5]" />
            </Reveal>
          </div>
          <ol className="lg:pt-4">
            {forHyrox.outcomes.map((o, i) => (
              <Reveal as="li" key={o.k} delay={i * 0.06} className="border-t border-ink-600 py-7 last:border-b md:py-9">
                <div className="flex gap-5 md:gap-8">
                  <span className="headline text-[18px] text-yellow">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="headline text-[30px] md:text-[40px]">{o.k}</h3>
                    <p className="mt-3 max-w-[520px] text-[16px] leading-relaxed text-paper/80 md:text-[17px]">{o.v}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Ecosystem ecosystem={c.ecosystem} aria={ui.ecosystemAria} />
      </div>
    </Section>
  );
}

/** Orbit: HYROX ID in the middle, partners and clubs around it */
function Ecosystem({ ecosystem, aria }: { ecosystem: Content["ecosystem"]; aria: string }) {
  const r = 150;
  const nodes = ecosystem.nodes.map((label, i) => {
    const a = (i / ecosystem.nodes.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: 200 + r * Math.cos(a), y: 200 + r * Math.sin(a) };
  });
  return (
    <div className="mt-20 grid items-center gap-10 border-t border-ink-600 pt-16 md:mt-28 lg:grid-cols-[1fr_1fr] lg:gap-20">
      <Reveal>
        <p className="eyebrow text-yellow">{ecosystem.eyebrow}</p>
        <h3 className="headline mt-6 text-[36px] md:text-[52px] lg:text-[64px]">{ecosystem.title}</h3>
        <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-paper/80 md:text-[19px]">{ecosystem.body}</p>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto w-full max-w-[520px]">
        <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label={`${aria} ${ecosystem.nodes.join(", ")}`}>
          <circle cx="200" cy="200" r={r} fill="none" stroke="#3a3a3a" strokeDasharray="3 6" />
          <circle cx="200" cy="200" r="96" fill="none" stroke="#262626" />
          {nodes.map((n) => (
            <line key={`l-${n.label}`} x1="200" y1="200" x2={n.x} y2={n.y} stroke="#3a3a3a" />
          ))}
          <circle cx="200" cy="200" r="62" fill="#FFED00" />
          <text x="200" y="194" textAnchor="middle" fontSize="13" fontWeight="500" letterSpacing="5" fill="#000">
            HYROX
          </text>
          <text x="200" y="217" textAnchor="middle" fontSize="20" fontWeight="500" fill="#000">
            ID
          </text>
          {nodes.map((n) => (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="38" fill="#121212" stroke="#ffffff" strokeOpacity="0.5" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10.5" fontWeight="500" letterSpacing="1" fill="#fff">
                {n.label.toUpperCase()}
              </text>
            </g>
          ))}
        </svg>
      </Reveal>
    </div>
  );
}
