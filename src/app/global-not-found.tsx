import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { asset } from "@/lib/asset";

export const metadata: Metadata = { title: "404 – HYROX Vision", robots: { index: false } };

/** One 404 document for both locales (static export → 404.html). */
export default function GlobalNotFound() {
  return (
    <RootDocument lang="en">
      <main className="container-site flex min-h-[100svh] flex-col justify-center gap-6">
        <p className="eyebrow text-yellow">404_</p>
        <h1 className="headline text-[48px] md:text-[96px]">
          Off the <span className="hl">course.</span>
        </h1>
        <a href={asset("/")} className="eyebrow self-start bg-yellow px-4 py-3 text-ink">
          Back to the vision
        </a>
      </main>
    </RootDocument>
  );
}
