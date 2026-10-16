"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { home, passPath, summaryPath, type Content, type Locale } from "@/content";
import { cn } from "@/components/ui/cn";
import { asset } from "@/lib/asset";
import { Lockup } from "./Lockup";

const LOCALES: Locale[] = ["en", "de"];

/** EN/DE switch – keeps the current section (#hash) when changing language. */
type Page = "home" | "summary" | "pass";
const PATHS: Record<Page, Record<Locale, string>> = { home, summary: summaryPath, pass: passPath };

function LangSwitch({ locale, page, label }: { locale: Locale; page: Page; label: string }) {
  const pathFor = (l: Locale) => asset(PATHS[page][l]);
  return (
    <div className="flex items-center border border-paper/30" role="group" aria-label={label}>
      {LOCALES.map((l) => (
        <a
          key={l}
          href={pathFor(l)}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          onClick={(e) => {
            e.preventDefault();
            if (l !== locale) window.location.href = pathFor(l) + window.location.hash;
          }}
          className={cn(
            "eyebrow grid min-h-11 min-w-11 place-items-center px-2.5 !text-[11px] !tracking-[0.14em] transition-colors",
            l === locale ? "bg-paper text-ink" : "text-paper/80 hover:text-yellow",
          )}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

/**
 * `page` = "home" → section links are pure anchors; "summary" / "pass" → they jump back to the one-pager.
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
  page: Page;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  const to = (id: string) => (page === "home" ? `#${id}` : `${asset(home[locale])}#${id}`);
  // "pass" is its own page; every other nav entry is a section on the home page
  const hrefFor = (id: string) => (id === "pass" ? asset(passPath[locale]) : to(id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: focus the first link on open, close on Escape and return focus to the button
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="eyebrow sr-only z-[60] bg-yellow px-4 py-3 text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        {ui.skip}
      </a>
      <div className="container-site flex h-16 items-center justify-between md:h-[72px]">
        <a href={to("top")} className="flex min-h-11 items-center">
          <Lockup />
          <span className="sr-only"> – {ui.backToTop}</span>
        </a>
        <nav className="hidden items-center gap-[18px] whitespace-nowrap xl:flex" aria-label={ui.sections}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              aria-current={item.id === page ? "page" : undefined}
              className={cn(
                "eyebrow !text-[12px] transition-colors hover:text-yellow",
                item.id === "pass" ? "text-yellow" : "text-paper/80",
              )}
            >
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
          <LangSwitch locale={locale} page={page} label={ui.language} />
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <LangSwitch locale={locale} page={page} label={ui.language} />
          <button
            ref={menuButton}
            type="button"
            className="grid h-11 w-11 place-items-center"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          ref={menu}
          className="container-site flex max-h-[calc(100svh-64px)] flex-col gap-1 overflow-y-auto pb-6 xl:hidden"
          aria-label={ui.sections}
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              onClick={() => setOpen(false)}
              aria-current={item.id === page ? "page" : undefined}
              className={cn("headline border-b border-ink-600 py-3 text-[32px] md:text-[40px]", item.id === "pass" && "text-yellow")}
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
