"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Screen size the web views are designed for; the frame scales it to whatever width it gets. */
const W = 1024;
const H = 640;

/** MacBook-like frame with a browser window. Content is laid out for 1024×640 and scaled to fit. */
export function MacBook({ children, label, url }: { children: ReactNode; label: string; url: string }) {
  const screen = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = screen.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div role="img" aria-label={label} className="w-full">
      <div className="rounded-t-[18px] border border-ink-500 bg-[#0b0b0b] p-[2%] pb-[2.6%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        <div ref={screen} className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-ink" aria-hidden>
          <div
            className="absolute left-0 top-0 flex flex-col bg-ink text-paper"
            style={{ width: W, height: H, transform: `scale(${scale ?? 0})`, transformOrigin: "top left", visibility: scale ? "visible" : "hidden" }}
          >
            <div className="flex h-9 shrink-0 items-center gap-2 border-b border-ink-600 bg-ink-800 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-500" />
              <span className="mx-auto w-[380px] truncate rounded-md bg-ink-700 px-3 py-1 text-center text-[12px] text-grey-300">{url}</span>
            </div>
            <div className="min-h-0 flex-1">{children}</div>
          </div>
        </div>
      </div>
      {/* base */}
      <div className="relative -mx-[5%] h-[10px] rounded-b-[10px] bg-gradient-to-b from-grey-400 to-ink-600 md:h-[14px]">
        <span className="absolute left-1/2 top-0 h-[4px] w-[14%] -translate-x-1/2 rounded-b-[6px] bg-ink-500" />
      </div>
    </div>
  );
}
