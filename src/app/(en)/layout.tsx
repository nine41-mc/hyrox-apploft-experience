import type { Metadata, Viewport } from "next";
import { RootDocument, rootViewport } from "@/components/layout/RootDocument";
import { asset } from "@/lib/asset";
import { en as meta } from "@/content/meta";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: { index: false, follow: false },
  manifest: asset("/manifest.webmanifest"),
  alternates: { languages: { en: asset("/"), de: asset("/de/") } },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "en_GB",
    images: [{ url: asset("/icon-512.png"), width: 512, height: 512 }],
  },
};

export const viewport: Viewport = rootViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
