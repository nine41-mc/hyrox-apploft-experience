"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/content";
import { screenText } from "./screenText";

const Ctx = createContext<Locale>("en");

/** Provides the page language to the illustrative screens (set once in the root document). */
export function ScreenLocale({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <Ctx.Provider value={locale}>{children}</Ctx.Provider>;
}

export function useScreenText() {
  return screenText[useContext(Ctx)];
}
