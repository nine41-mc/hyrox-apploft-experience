import type { Viewport } from "next";
import { Barlow } from "next/font/google";
import "@/app/globals.css";
import { ServiceWorker } from "@/components/layout/ServiceWorker";
import { asset } from "@/lib/asset";

// Brutal Type is licensed → served from /public/fonts/licensed (gitignored).
// When the files are missing the stack falls back to Barlow (next/font, OFL).
const brutalFaces = ([
  ["Regular", 400],
  ["Medium", 500],
  ["Bold", 700],
] as const)
  .map(
    ([file, weight]) =>
      `@font-face{font-family:"Brutal Type";src:url("${asset(`/fonts/licensed/BrutalType-${file}.woff2`)}") format("woff2");font-weight:${weight};font-style:normal;font-display:swap}`,
  )
  .join("");

// OFL fallback for the licensed Brutal Type (see globals.css)
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

export const rootViewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Shared <html> document for both root layouts – `lang` is set server-side per locale. */
export function RootDocument({ lang, children }: { lang: "en" | "de"; children: React.ReactNode }) {
  return (
    <html lang={lang} className={barlow.variable}>
      {/* eslint-disable-next-line @next/next/no-head-element -- shared root document for both locale layouts */}
      <head>
        {/* Mark JS as available before first paint: reveal animations only hide content when JS can show it again */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <style dangerouslySetInnerHTML={{ __html: brutalFaces }} />
      </head>
      <body>
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
