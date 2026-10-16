import { ArrowLeft } from "lucide-react";
import { content, home, type Locale } from "@/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Prototype } from "@/components/prototype/Prototype";
import { asset } from "@/lib/asset";

/** Hidden concept prototype: "What the HYROX Pass could become" – reached from the idea section. */
export function PassView({ locale }: { locale: Locale }) {
  const c = content[locale];
  const p = c.prototype;
  return (
    <>
      <Header locale={locale} nav={c.nav} ui={c.ui} page="pass" />
      <main id="main" className="overflow-hidden bg-ink pb-20 pt-28 text-paper md:pt-36">
        <div className="container-site">
          <a
            href={`${asset(home[locale])}#idea`}
            className="eyebrow mb-8 inline-flex min-h-11 items-center gap-2 !text-[12px] text-grey-300 transition-colors hover:text-yellow"
          >
            <ArrowLeft className="h-4 w-4" /> {p.back}
          </a>
          <Prototype p={p} />
          <p className="mt-10 text-[13px] text-grey-300">{p.note}</p>
        </div>
      </main>
      <Footer c={c} locale={locale} />
    </>
  );
}
