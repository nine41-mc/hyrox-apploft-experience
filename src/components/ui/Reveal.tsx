"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./useInView";

/**
 * Fade-up on scroll, driven by CSS (see globals.css `[data-reveal]`).
 * Content is only hidden while JS runs (`html.js`), so it stays visible without JS,
 * in print and for prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal=""
      data-in={inView ? "" : undefined}
      className={className}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
