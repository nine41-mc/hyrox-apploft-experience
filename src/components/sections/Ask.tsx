import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content";
import { Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";

export function Ask({ c }: { c: Content }) {
  const { ask, ui } = c;
  return (
    <section id="talk" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Photo name="dumbbells" alt="" className="!absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="grain absolute inset-0" />
      <div className="container-site relative">
        <Eyebrow>{ask.eyebrow}</Eyebrow>
        <Reveal>
          <Headline lines={ask.title} hl={ask.titleHl} />
        </Reveal>
        <ol className="mt-12 grid gap-3 md:grid-cols-3">
          {ask.phases.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.08} className={`p-5 md:p-6 ${i === 1 ? "bg-yellow text-ink" : "border border-paper/30 bg-ink/60"}`}>
              <p className={`eyebrow !text-[11px] ${i === 1 ? "" : "text-grey-300"}`}>{p.when}</p>
              <p className="headline mt-4 text-[34px] md:text-[40px]">{p.name}</p>
              <p className={`mt-2 text-[15px] ${i === 1 ? "" : "text-paper/80"}`}>{p.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 md:flex-row">
          {ask.contacts.map((p) => (
            <div key={p.name} className="bg-paper px-5 py-4 text-ink md:min-w-[260px]">
              <p className="headline text-[24px]">{p.name}</p>
              <p className="eyebrow mt-1 !text-[11px] !tracking-[0.12em]">{p.role}</p>
            </div>
          ))}
          <a
            href={`https://${ask.site}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${ui.talk} – ${ask.site}`}
            className="group flex items-center justify-between gap-6 bg-yellow px-5 py-4 text-ink md:min-w-[220px]"
          >
            <span className="headline text-[24px]">{ask.site}</span>
            <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
