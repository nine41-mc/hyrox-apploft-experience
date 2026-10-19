import type { Content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

/** What the HYROX Index is – one explainer box, used on the home page and on /pass. */
export function IndexExplainer({ x }: { x: Content["idea"]["index"] }) {
  return (
    <Reveal className="rounded-[24px] border border-yellow/50 p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14">
        <div>
          <span className="eyebrow inline-block rounded-full border border-paper/30 px-2.5 py-1 !text-[10px] text-paper/80">{x.tag}</span>
          <h3 className="headline mt-4 text-[32px] text-yellow md:text-[44px]">{x.k}_</h3>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/85 md:text-[18px]">{x.v}</p>
        </div>
        <ul className="grid gap-3 self-end md:grid-cols-3 lg:grid-cols-1">
          {x.facts.map((f) => (
            <li key={f.k} className="flex gap-3 rounded-[16px] bg-ink-800 p-4">
              <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-yellow" />
              <span>
                <span className="block text-[15px] font-medium">{f.k}</span>
                <span className="mt-0.5 block text-[14px] leading-snug text-paper/70">{f.v}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
