import type { ReactNode } from "react";
import { cn } from "./cn";

export function Section({
  id,
  children,
  className,
  tone = "black",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "black" | "ink" | "yellow" | "white";
}) {
  const tones = {
    black: "bg-ink text-paper",
    ink: "bg-ink-800 text-paper",
    yellow: "bg-yellow text-ink",
    white: "bg-paper text-ink",
  };
  return (
    <section id={id} className={cn("relative py-20 md:py-28 lg:py-36", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow mb-6 text-yellow", className)}>{children}</p>;
}

/** Footnote marker linking to the sources list in the footer */
export function Src({ n }: { n: number }) {
  return (
    <a href={`#source-${n}`} className="ml-0.5 align-super text-[10px] text-grey-300 hover:text-yellow">
      [{n}]
    </a>
  );
}
