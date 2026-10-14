import { footer, sources } from "@/content/en";
import { Lockup } from "./Lockup";
import { asset } from "@/lib/asset";

export function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink py-14 text-paper">
      <div className="container-site grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Lockup />
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-grey-300">{footer.disclaimer}</p>
          <a href={asset("/summary/")} className="eyebrow mt-6 inline-block bg-yellow px-4 py-2.5 !text-[12px] text-ink">
            Executive summary →
          </a>
        </div>
        <div>
          <p className="eyebrow mb-4 text-grey-300">Sources_</p>
          <ol className="space-y-2 text-[13px] text-grey-300">
            {sources.map((s) => (
              <li key={s.n} id={`source-${s.n}`} data-n={s.n} className="scroll-mt-24">
                <span className="mr-2 text-paper">[{s.n}]</span>
                <a href={s.url} target="_blank" rel="noreferrer" className="underline decoration-ink-500 underline-offset-4 hover:text-yellow">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </footer>
  );
}
