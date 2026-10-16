"use client";

import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { AppScreen, type ScreenKey } from "@/components/screens/AppScreens";
import { cn } from "@/components/ui/cn";
import { useScreenText } from "@/components/screens/ScreenLocale";

/**
 * Lena's app in the concept prototype – the same screens as "Lena's 2027" on the main page,
 * with a call to action that advances the prototype. The button is a pointer shortcut only
 * (tabIndex -1); the accessible controls live outside the device frame.
 */
const STEPS: { screen: ScreenKey; cta: "bookSim" | "seePass" | "bookCrew" | "restart" }[] = [
  { screen: "forecast", cta: "bookSim" },
  { screen: "sim", cta: "seePass" },
  { screen: "rewards", cta: "bookCrew" },
  { screen: "race", cta: "restart" },
];

export function PhoneStep({ step, onNext }: { step: number; onNext: () => void }) {
  const s = STEPS[step];
  const t = useScreenText();
  return (
    <AppScreen
      screen={s.screen}
      action={
        <Cta onClick={onNext} tone={step === STEPS.length - 1 ? "paper" : "yellow"}>
          {t.cta[s.cta]}
        </Cta>
      }
    />
  );
}

function Cta({ children, onClick, tone }: { children: ReactNode; onClick: () => void; tone: "yellow" | "paper" }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={onClick}
      className={cn(
        "mt-auto flex w-full shrink-0 items-center justify-between rounded-[14px] px-3 py-3 text-left text-[12px] font-medium uppercase tracking-wide text-ink transition-transform active:scale-[0.98]",
        tone === "yellow" ? "bg-yellow" : "bg-paper",
        "motion-safe:animate-[nudge_2.4s_ease-in-out_1.2s_infinite]",
      )}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
