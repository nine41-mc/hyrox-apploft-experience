import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { summary } from "@/content/en";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Executive summary – HYROX Experience 2027",
  robots: { index: false, follow: false },
};

export default function SummaryPage() {
  return (
    <>
      <Header base="/" />
      <main className="summary bg-ink pb-20 pt-28 text-paper md:pt-36">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink-600 pb-8">
            <div>
              <p className="eyebrow text-yellow">{summary.sub}_</p>
              <h1 className="headline mt-4 text-[48px] md:text-[80px] lg:text-[104px]">
                Executive <span className="hl">summary.</span>
              </h1>
            </div>
            <PrintButton />
          </div>
          <dl className="grid gap-px bg-ink-600 md:grid-cols-2">
            {summary.blocks.map((b, i) => (
              <div key={b.k} className={`bg-ink p-6 md:p-8 ${i === summary.blocks.length - 1 ? "summary-ask" : ""}`}>
                <dt className="flex items-baseline gap-4">
                  <span className="headline text-[16px] text-yellow">{String(i + 1).padStart(2, "0")}</span>
                  <span className="headline text-[30px] md:text-[36px]">{b.k}</span>
                </dt>
                <dd>
                  <ul className="mt-5 space-y-3">
                    {b.v.map((line) => (
                      <li key={line} className="flex gap-3 text-[16px] leading-relaxed text-paper/85">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-yellow" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[13px] text-grey-400">
            Sources and details: see the full story on the main page. Screens and data in the concept are illustrative.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
