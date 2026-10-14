import type { ReactNode } from "react";
import { cn } from "./cn";

/** iPhone-like device frame. Content is laid out for ~280px width. */
export function Phone({ children, className, label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "relative mx-auto aspect-[9/19.2] w-[272px] shrink-0 rounded-[46px] border border-ink-500 bg-ink p-[9px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-ink" aria-hidden>
        {/* status bar */}
        <div className="flex h-[34px] items-center justify-between px-6 pt-1 text-[11px] font-medium text-paper">
          <span>9:41</span>
          <span className="absolute left-1/2 top-[8px] h-[20px] w-[78px] -translate-x-1/2 rounded-full bg-[#0d0d0d] ring-1 ring-ink-600" />
          <span className="flex items-center gap-1">
            <span className="inline-block h-[7px] w-[14px] rounded-[2px] border border-paper/80" />
          </span>
        </div>
        <div className="h-[calc(100%-34px)] overflow-hidden">{children}</div>
        {/* home indicator */}
        <span className="absolute bottom-[6px] left-1/2 h-[4px] w-[96px] -translate-x-1/2 rounded-full bg-paper/70" />
      </div>
    </div>
  );
}
