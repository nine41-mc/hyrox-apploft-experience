"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/en";
import { cn } from "@/components/ui/cn";
import { Lockup } from "./Lockup";
import { asset } from "@/lib/asset";

/** `base` = "" on the one-pager (pure anchors), "/" on sub-pages (back to the one-pager). */
export function Header({ base = "" }: { base?: string }) {
  const to = (id: string) => (base ? `${asset(base)}#${id}` : `#${id}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[72px]">
        <a href={to("top")} aria-label="Back to top">
          <Lockup />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Sections">
          {nav.map((item) => (
            <a key={item.id} href={to(item.id)} className="eyebrow !text-[12px] text-paper/80 transition-colors hover:text-yellow">
              {item.label}
            </a>
          ))}
          <a href={asset("/summary/")} className="eyebrow border border-paper/40 px-4 py-2.5 !text-[12px] transition-colors hover:border-yellow hover:text-yellow">
            Summary
          </a>
          <a href={to("talk")} className="eyebrow -ml-4 bg-yellow px-4 py-2.5 !text-[12px] text-ink transition-transform hover:-translate-y-0.5">
            Let’s talk
          </a>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="container-site flex flex-col gap-1 pb-6 lg:hidden" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={to(item.id)}
              onClick={() => setOpen(false)}
              className="headline border-b border-ink-600 py-3 text-[32px] md:text-[40px]"
            >
              {item.label}
            </a>
          ))}
          <a href={asset("/summary/")} onClick={() => setOpen(false)} className="headline mt-4 border border-paper/40 px-3 py-3 text-[32px]">
            Executive summary
          </a>
          <a href={to("talk")} onClick={() => setOpen(false)} className="headline mt-2 bg-yellow px-3 py-3 text-[32px] text-ink">
            Let’s talk
          </a>
        </nav>
      )}
    </header>
  );
}
