import type { Content } from "@/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Src } from "@/components/ui/Section";

/** The punch from "THIS IS YOUR RECORD.": one full-bleed statement. */
export function Statement({ c }: { c: Content }) {
  const { statement, ui } = c;
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32 lg:py-40">
      <Photo name="sled" alt={ui.statementAlt} className="!absolute inset-0 opacity-50" imgClassName="object-[50%_30%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="grain absolute inset-0" />
      <div className="container-site relative">
        <Reveal>
          <h2 className="headline text-[48px] md:text-[88px] lg:text-[128px]">
            {statement.lines.map((l) => (
              <span key={l} className="block">
                {statement.hl.includes(l) ? <span className="hl">{l}</span> : l}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[520px] text-[16px] text-paper/80 md:text-[18px]">
            {statement.note}
            <Src n={statement.source} />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
