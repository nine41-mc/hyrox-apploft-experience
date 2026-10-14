import { cn } from "@/components/ui/cn";

/**
 * Text lock-up "HYROX | apploft." (stand-in for the official logo files).
 * Optical alignment: both words share one baseline; "apploft." is sized so its ascenders
 * match the cap height of HYROX; the tracked caps lose their trailing letter-spacing so
 * the divider sits exactly between the two words and is centred on the caps.
 */
export function Lockup({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline text-paper", className)}>
      <span className="wordmark mr-[-0.42em] text-[13px] leading-none md:text-[15px]">HYROX</span>
      <span className="sr-only"> </span>
      <span
        className="mx-3 h-[15px] w-px translate-y-[2px] self-start bg-paper/60 md:mx-3.5 md:h-[17px] md:translate-y-[1px]"
        aria-hidden
      />
      <span
        className="-translate-y-[1.5px] text-[14px] leading-none tracking-[-0.01em] md:-translate-y-[2px] md:text-[16px]"
        style={{ fontFamily: "var(--font-barlow), Arial, sans-serif" }}
      >
        app<span className="font-semibold">loft.</span>
      </span>
    </span>
  );
}
