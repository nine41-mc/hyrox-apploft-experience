import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

export function Cta({ c }: { c: Content }) {
  const { cta, ui } = c;
  return (
    <section id="talk" className="relative overflow-hidden bg-ink py-24 md:py-32 lg:py-40">
      <Photo name="sled" alt={ui.sledAlt} className="!absolute inset-0" imgClassName="object-[50%_30%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="grain absolute inset-0" />
      <div className="container-site relative">
        <Reveal>
          <Headline lines={cta.title} hl={cta.titleHl} size="lg" className="lg:!text-[136px]" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[480px] text-[18px] leading-relaxed text-paper/90 md:text-[20px]">{cta.body}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-12 flex flex-col gap-3 md:flex-row">
          {cta.contacts.map((c) => (
            <div key={c.name} className="bg-paper px-5 py-4 text-ink md:min-w-[260px]">
              <p className="headline text-[26px]">{c.name}</p>
              <p className="eyebrow mt-1 !text-[11px] !tracking-[0.12em]">{c.role}</p>
            </div>
          ))}
          <a
            href={`https://${cta.site}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 bg-yellow px-5 py-4 text-ink md:min-w-[220px]"
          >
            <span className="headline text-[26px]">{cta.site}</span>
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
