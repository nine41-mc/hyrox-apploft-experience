import { summaryPath, type Content, type Locale } from "@/content";
import { asset } from "@/lib/asset";
import { Lockup } from "./Lockup";

export function Footer({ c, locale }: { c: Content; locale: Locale }) {
  const { footer, sources, ui } = c;
  return (
    <footer className="border-t border-ink-600 bg-ink py-14 text-paper">
      <div className="container-site grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Lockup />
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-grey-300">{footer.disclaimer}</p>
          <a href={asset(summaryPath[locale])} className="eyebrow mt-6 inline-block bg-yellow px-4 py-2.5 !text-[12px] text-ink">
            {ui.summaryLink}
          </a>
        </div>
        <div>
          <p className="eyebrow mb-4 text-grey-300">{ui.sources}</p>
          <ol className="space-y-0.5 text-[13px] text-grey-300">
            {sources.map((s) => (
              <li key={s.n} id={`source-${s.n}`} className="scroll-mt-24">
                <span className="mr-2 text-paper">[{s.n}]</span>
                <a href={s.url} target="_blank" rel="noreferrer" className="inline-block py-1.5 underline decoration-ink-500 underline-offset-4 hover:text-yellow">
                  {s.label}
                  <span className="sr-only"> {ui.newTab}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* IP disclaimer + legal notice – also printed, so every PDF carries it */}
      <div className="legal container-site mt-12 grid gap-8 border-t border-ink-600 pt-8 text-[13px] leading-relaxed text-grey-300 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow mb-3 !text-[11px] text-paper">{footer.ip.k}</p>
          <p className="max-w-[640px]">{footer.ip.v}</p>
        </div>
        <address className="not-italic">
          <p className="eyebrow mb-3 !text-[11px] text-paper">{footer.imprint.k}</p>
          {footer.imprint.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
          <a href={`tel:${footer.imprint.phone.replace(/\s/g, "")}`} className="mt-2 inline-block py-1 hover:text-yellow">
            {footer.imprint.phone}
          </a>
          <br />
          <a href={`mailto:${footer.imprint.email}`} className="inline-block py-1 hover:text-yellow">
            {footer.imprint.email}
          </a>
          <br />
          <a href={`https://${footer.imprint.web}`} target="_blank" rel="noreferrer" className="inline-block py-1 underline decoration-ink-500 underline-offset-4 hover:text-yellow">
            {footer.imprint.web}
            <span className="sr-only"> {ui.newTab}</span>
          </a>
        </address>
      </div>
    </footer>
  );
}
