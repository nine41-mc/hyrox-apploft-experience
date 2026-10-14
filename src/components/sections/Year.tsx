"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Content } from "@/content";
import { Eyebrow } from "@/components/ui/Section";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { Phone } from "@/components/ui/Phone";
import { AppScreen } from "@/components/screens/AppScreens";
import { cn } from "@/components/ui/cn";
import { YearCard } from "@/components/mocks/YearCard";

/** "A year as a racer": swipeable months, each with an app screen. */
export function Year({ year, ui }: { year: Content["year"]; ui: Content["ui"] }) {
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // keep the active month chip visible in the (scrollable) rail on small screens
  useEffect(() => {
    const r = rail.current;
    const chip = r?.children[active] as HTMLElement | undefined;
    if (!r || !chip) return;
    r.scrollTo({ left: chip.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  const scrollTo = useCallback((i: number) => {
    const el = track.current?.children[i] as HTMLElement | undefined;
    if (!el || !track.current) return;
    const first = track.current.children[0] as HTMLElement;
    track.current.scrollTo({ left: el.offsetLeft - first.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const onScroll = () => {
      const cards = Array.from(root.children) as HTMLElement[];
      const x = root.scrollLeft + 8;
      let idx = 0;
      cards.forEach((c, i) => {
        if (c.offsetLeft - root.offsetLeft - cards[0].offsetLeft + root.offsetLeft <= x) idx = i;
      });
      if (root.scrollLeft + root.clientWidth >= root.scrollWidth - 4) idx = cards.length - 1;
      setActive(idx);
    };
    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const last = year.steps.length - 1;

  return (
    <section id="year" className="relative bg-ink py-20 text-paper md:py-28 lg:py-36">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>{year.eyebrow}</Eyebrow>
            <Reveal>
              <Headline lines={year.title} hl={year.titleHl} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{year.body}</p>
            <p className="mt-3 text-[12px] text-grey-400">{year.note}</p>
          </Reveal>
        </div>

        {/* month rail */}
        <div className="mt-12 flex items-center justify-between gap-4">
          <div ref={rail} className="no-scrollbar relative -mx-1 flex gap-1 overflow-x-auto px-1">
            {year.steps.map((s, i) => (
              <button
                key={s.month}
                type="button"
                onClick={() => scrollTo(i)}
                aria-current={active === i}
                className={cn(
                  "eyebrow shrink-0 px-3 py-2 !text-[12px] transition-colors",
                  active === i ? "bg-yellow text-ink" : "text-grey-300 hover:text-paper",
                )}
              >
                {s.month}
              </button>
            ))}
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label={ui.prevMonth}
              disabled={active === 0}
              onClick={() => scrollTo(Math.max(0, active - 1))}
              className="grid h-12 w-12 place-items-center border border-paper/30 transition-colors hover:border-yellow hover:text-yellow disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={ui.nextMonth}
              disabled={active === last}
              onClick={() => scrollTo(Math.min(last, active + 1))}
              className="grid h-12 w-12 place-items-center border border-paper/30 transition-colors hover:border-yellow hover:text-yellow disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:gap-6 md:px-8 lg:px-[max(56px,calc((100vw-1440px)/2+56px))]"
      >
        {year.steps.map((s, i) => (
          <article
            key={s.month}
            data-index={i}
            className={cn(
              "flex w-[86vw] max-w-[420px] shrink-0 snap-start flex-col border bg-ink-800 transition-colors md:w-[400px]",
              active === i ? "border-yellow/60" : "border-ink-600",
            )}
          >
            <div className="p-6 md:p-7">
              <div className="flex items-baseline justify-between">
                <span className="headline text-[56px] text-yellow md:text-[64px]">{s.month}</span>
                <span className="eyebrow !text-[11px] text-grey-400">
                  {String(i + 1).padStart(2, "0")} / {String(year.steps.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="headline mt-3 text-[30px] md:text-[34px]">{s.title}</h3>
              <p className="mt-3 min-h-[96px] text-[15px] leading-relaxed text-paper/80 md:text-[16px]">{s.text}</p>
            </div>
            <div className="mt-auto bg-gradient-to-b from-ink-800 to-ink px-6 pb-8 pt-2">
              <div className="relative">
                <Phone className="w-[252px] md:w-[264px]">
                  <AppScreen screen={s.screen} />
                </Phone>
                {s.screen === "record" && (
                  <div className="absolute -bottom-3 -left-5 origin-bottom-left -rotate-6 scale-[0.85] md:-left-6">
                    <YearCard />
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
