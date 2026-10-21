import type { Content } from "@/content";
import { cn } from "@/components/ui/cn";

type Bento = Content["summary"]["bento"];

/** The HYROX Pass at a glance: twelve illustrative moments around the Pass – used on the summary page (prints in colour). */
export function PassBento({ b }: { b: Bento }) {
  return (
    <section className="bento mt-12 break-inside-avoid">
      <p className="eyebrow text-yellow">{b.k}_</p>
      <ul className="mt-5 grid grid-flow-dense grid-cols-2 gap-2 md:grid-cols-4">
        {b.tiles.map((t) => {
          const pass = t.id === "pass";
          return (
            <li
              key={t.id}
              className={cn(
                "tile flex flex-col justify-between rounded-[14px] p-4 md:p-5",
                pass && "col-span-2 row-span-2 items-center justify-center text-center",
                t.tone === "yellow" && "tile-yellow bg-yellow text-ink",
                t.tone === "paper" && "tile-paper bg-paper text-ink",
                t.tone === "ink" && "tile-ink border border-ink-600 bg-ink-800 text-paper",
              )}
            >
              <span className={cn("eyebrow !text-[10px]", pass ? "tracking-[0.5em]" : "opacity-70")}>{t.top}</span>
              <span
                className={cn(
                  "headline mt-3",
                  pass ? "tile-accent text-[64px] text-yellow md:text-[96px]" : t.big.length > 7 ? "text-[24px] md:text-[28px]" : "text-[36px] md:text-[44px]",
                )}
              >
                {t.big}
              </span>
              <span className="mt-2 text-[13px] font-medium leading-snug">{t.k}</span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-[12px] text-grey-300">{b.note}</p>
    </section>
  );
}
