import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { ServiceWorker } from "@/components/layout/ServiceWorker";
import { asset } from "@/lib/asset";
import { en } from "@/content/meta";

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

export const metadata: Metadata = {
  title: en.title,
  description: en.description,
  robots: { index: false, follow: false },
  manifest: asset("/manifest.webmanifest"),
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: brutalFaces }} />
      </head>
      <body>
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
