"use client";

import { PassCard, passFields } from "@/components/screens/AppScreens";
import { useScreenText } from "@/components/screens/ScreenLocale";

/** The wallet-style HYROX Pass card with Lena's default fields, localised. */
export function PassFieldsCard() {
  const t = useScreenText();
  return <PassCard size="lg" fields={passFields(t)} />;
}
