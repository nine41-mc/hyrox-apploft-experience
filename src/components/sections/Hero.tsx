import { ArrowDown } from "lucide-react";
import type { Content } from "@/content";
import { Photo } from "@/components/ui/Photo";
import { Headline } from "@/components/ui/Headline";

export function Hero({ c }: { c: Content }) {
  const { hero, ticker, ui } = c;
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <Photo
        name="wallball"
        alt={ui.heroImgAlt}
        priority
        className="!absolute inset-0"
        imgClassName="object-[60%_30%] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="grain absolute inset-0" />

      <div className="container-site relative z-10 mt-auto pb-10 pt-32 md:pb-14 lg:pb-16">
        <p className="eyebrow mb-5 text-yellow">{hero.eyebrow}</p>
        <Headline as="h1" size="xl" lines={hero.lines} hl={hero.highlight} />
        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[560px] text-[17px] leading-relaxed text-paper/90 md:text-[19px]">{hero.lead}</p>
          <div className="flex shrink-0 items-end gap-0 whitespace-nowrap">
            <div className="bg-paper px-4 py-3 text-ink [clip-path:polygon(0_0,100%_0,100%_100%,8px_100%,0_calc(100%-8px))]">
              <p className="headline text-[26px] md:text-[30px]">{hero.box.title}</p>
              <p className="eyebrow mt-1 !text-[11px]">{hero.box.sub}</p>
            </div>
          </div>
        </div>
        <a
          href="#gap"
          className="eyebrow group mt-10 inline-flex items-center gap-3 text-paper/80 transition-colors hover:text-yellow"
        >
          <span className="grid h-10 w-10 place-items-center border border-paper/40 transition-transform group-hover:translate-y-1">
            <ArrowDown className="h-4 w-4" />
          </span>
          {hero.cta}
        </a>
      </div>

      <div className="relative z-10 overflow-hidden bg-yellow py-3 text-ink" aria-hidden>
        <div className="flex w-max animate-ticker motion-reduce:animate-none">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={`${k}-${i}`} className="headline px-6 text-[22px] md:text-[26px]">
                  {t}_
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
