import * as en from "./en";
import * as de from "./de";

export type Locale = "en" | "de";
export type Content = typeof en;

// `de` must have exactly the shape of `en` – a missing or extra key fails the type check here.
export const content: Record<Locale, Content> = { en: { ...en }, de: { ...de } };

export const home: Record<Locale, string> = { en: "/", de: "/de/" };
export const summaryPath: Record<Locale, string> = { en: "/summary/", de: "/de/summary/" };
