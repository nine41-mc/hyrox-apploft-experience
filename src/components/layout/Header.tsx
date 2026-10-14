"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { home, summaryPath, type Content, type Locale } from "@/content";
import { cn } from "@/components/ui/cn";
import { asset } from "@/lib/asset";
import { Lockup } from "./Lockup";

const LOCALES: Locale[] = ["en", "de"];

/**
 * `page` = "home" → section links are pure anchors; "summary" → they jump back to the one-pager.
 * The EN/DE switch keeps the current section (#hash) when changing language.
 */
export function Header({
  locale,
  nav,
  ui,
  page,
}: {
  locale: Locale;
  nav: Content["nav"];
  ui: Content["ui"];
  page: "home" | "summary";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const to = (id: string) => (page === "home" ? `#${id}` : `${asset(home[locale])}#${id}`);
  const pathFor = (l: Locale) => asset(page === "home" ? home[l] : summaryPath[l]);

  useEffect(() => {
    document.documentElement.lang = locale;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [locale]);

  const switchTo = (l: Locale) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (l === locale) return e.preventDefault();
    e.preventDefault();
    window.location.href = pathFor(l) + window.location.hash;
  };

  const LangSwitch = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center border border-paper/30", className)} role="group" aria-label={ui.language}>
      {LOCALES.map((l) => (
        <a
          key={l}
          href={pathFor(l)}
          hrefLang={l}
          lang={l}
          onClick={switchTo(l)}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "eyebrow px-2.5 py-2 !text-[11px] !tracking-[0.14em] transition-colors",
            l === locale ? "bg-paper text-ink" : "text-paper/70 hover:text-yellow",
          )}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-[72px]">
        <a href={to("top")} aria-label={ui.backToTop}>
          <Lockup />
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label={ui.sections}>
          {nav.map((item) => (
            <a key={item.id} href={to(item.id)} className="eyebrow !text-[12px] text-paper/80 transition-colors hover:text-yellow">
              {item.label}
            </a>
          ))}
          <a
            href={asset(summaryPath[locale])}
            className="eyebrow border border-paper/40 px-4 py-2.5 !text-[12px] transition-colors hover:border-yellow hover:text-yellow"
          >
            {ui.summaryBtn}
          </a>
          <a href={to("talk")} className="eyebrow -ml-4 bg-yellow px-4 py-2.5 !text-[12px] text-ink transition-transform hover:-translate-y-0.5">
            {ui.talk}
          </a>
          <LangSwitch />
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="container-site flex flex-col gap-1 pb-6 lg:hidden" aria-label={ui.sections}>
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
          <a href={asset(summaryPath[locale])} onClick={() => setOpen(false)} className="headline mt-4 border border-paper/40 px-3 py-3 text-[32px]">
            {ui.summaryLong}
          </a>
          <a href={to("talk")} onClick={() => setOpen(false)} className="headline mt-2 bg-yellow px-3 py-3 text-[32px] text-ink">
            {ui.talk}
          </a>
        </nav>
      )}
    </header>
  );
}
