"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import type { Content } from "@/content";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";

const INTERVAL = 3500;

/** Highlights the `hl` part of a line in a yellow box. */
function Line({ text, hl }: { text: string; hl: string }) {
  const i = text.indexOf(hl);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="hl">{hl}</span>
      {text.slice(i + hl.length)}
    </>
  );
}

/** Full-bleed statement "The Pass is the story" – the middle three lines rotate through the variants. */
export function PassStory({ s }: { s: Content["pass"]["story"] }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    // respect reduced motion: start paused, the button can still play it
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % s.variants.length), INTERVAL);
    return () => window.clearInterval(t);
  }, [playing, s.variants.length]);

  return (
    <section className="relative mt-20 overflow-hidden bg-ink py-24 md:mt-28 md:py-32 lg:py-40">
      <Photo name="dumbbells" alt={s.alt} className="!absolute inset-0 opacity-50" imgClassName="object-[70%_50%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="grain absolute inset-0" />
      <div className="container-site relative">
        <Reveal>
          <h2 className="headline text-[11.5vw] md:text-[80px] lg:text-[112px]">
            {s.lead.map((l) => (
              <span key={l} className="block">
                <Line text={l} hl={s.leadHl} />
              </span>
            ))}
            {/* screen readers get every variant once instead of a moving target */}
            <span className="sr-only">{s.variants.map((v) => v.join(" ")).join(" / ")}</span>
            <span aria-hidden className="relative block">
              {/* invisible longest variant reserves the height so the page doesn't jump */}
              <span className="invisible block">
                {[0, 1, 2].map((n) => (
                  <span key={n} className="block">
                    {s.variants.reduce((a, v) => (v[n].length > a.length ? v[n] : a), "")}
                  </span>
                ))}
              </span>
              {s.variants.map((v, n) => (
                <span
                  key={n}
                  className="absolute inset-0 block transition-all duration-700 ease-out motion-reduce:transition-none"
                  style={{ opacity: n === i ? 1 : 0, transform: n === i ? "none" : "translateY(0.15em)" }}
                >
                  {v.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              ))}
            </span>
            <span className="block">
              <Line text={s.end} hl={s.endHl} />
            </span>
          </h2>
        </Reveal>
        <div className="mt-8 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? s.pause : s.play}
            className="grid h-11 w-11 place-items-center rounded-full border border-paper/30 text-paper/80 transition-colors hover:border-yellow hover:text-yellow"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <div className="flex gap-2" aria-hidden>
            {s.variants.map((_, n) => (
              <span key={n} className={`h-1.5 rounded-full transition-all duration-500 ${n === i ? "w-8 bg-yellow" : "w-3 bg-paper/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
