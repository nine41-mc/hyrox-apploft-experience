import { cn } from "@/components/ui/cn";

/** Text lock-up "HYROX | apploft." (stand-in for the official logo files) */
export function Lockup({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-paper", className)} aria-label="HYROX and apploft">
      <span className="wordmark text-[13px] md:text-[15px]">HYROX</span>
      <span className="h-5 w-px bg-paper/70" aria-hidden />
      <span className="text-[17px] tracking-tight md:text-[19px]" style={{ fontFamily: "var(--font-barlow), Arial, sans-serif" }}>
        app<span className="font-semibold">loft.</span>
      </span>
    </span>
  );
}
