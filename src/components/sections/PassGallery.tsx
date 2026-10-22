"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/asset";

type Item = { src: string; caption: string };

/** Gallery of rendered device mockups for the HYROX Pass, with a simple lightbox. */
export function PassGallery({ k, items, labels }: { k: string; items: Item[]; labels: { close: string; prev: string; next: string } }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const src = (s: string) => asset(`/images/gallery/${s}.webp`);

  useEffect(() => {
    if (open === null) return;
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, items.length]);

  return (
    <>
      <p className="eyebrow text-grey-300">{k}_</p>
      <ul className="mt-5 grid grid-cols-1 items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal
            as="li"
            key={it.src}
            delay={(i % 4) * 0.05}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-[20px] text-left"
              aria-label={it.caption}
            >
              <span className="relative block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src(it.src)}
                  alt=""
                  loading="lazy"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-[14px] text-paper">
                  {it.caption}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[open].caption}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-ink/95 p-4 md:p-10"
          onClick={() => setOpen(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src(items[open].src)}
            alt={items[open].caption}
            className="max-h-[80vh] max-w-full rounded-[16px] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-[15px] text-paper/85">{items[open].caption}</p>
          <div className="absolute right-4 top-4 flex gap-2 md:right-8 md:top-8" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label={labels.prev}
              onClick={() => setOpen((open - 1 + items.length) % items.length)}
              className="grid h-12 w-12 place-items-center border border-paper/30 hover:border-yellow hover:text-yellow"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={labels.next}
              onClick={() => setOpen((open + 1) % items.length)}
              className="grid h-12 w-12 place-items-center border border-paper/30 hover:border-yellow hover:text-yellow"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              ref={closeBtn}
              type="button"
              aria-label={labels.close}
              onClick={() => setOpen(null)}
              className="grid h-12 w-12 place-items-center bg-yellow text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
