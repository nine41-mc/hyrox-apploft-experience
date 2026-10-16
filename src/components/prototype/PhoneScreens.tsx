import type { ReactNode } from "react";
import { Bell, Check, ChevronRight, Radio, Users } from "lucide-react";
import { Card, Progress, QrPattern, Shell, Tag } from "@/components/screens/AppScreens";
import { cn } from "@/components/ui/cn";

/**
 * Lena's app in the concept prototype – one screen per step.
 * The yellow call to action advances the prototype; it is a pointer shortcut only
 * (tabIndex -1), the accessible controls live outside the device frame.
 */
export function PhoneStep({ step, onNext }: { step: number; onNext: () => void }) {
  switch (step) {
    case 0:
      return <Train onNext={onNext} />;
    case 1:
      return <FirstSim onNext={onNext} />;
    case 2:
      return <Pass onNext={onNext} />;
    default:
      return <FirstRace onNext={onNext} />;
  }
}

function Cta({ children, onClick, tone = "yellow" }: { children: ReactNode; onClick: () => void; tone?: "yellow" | "paper" }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={onClick}
      className={cn(
        "mt-auto flex w-full items-center justify-between px-3 py-3 text-left text-[12px] font-medium uppercase tracking-wide text-ink transition-transform active:scale-[0.98]",
        tone === "yellow" ? "bg-yellow" : "bg-paper",
        "motion-safe:animate-[nudge_2.4s_ease-in-out_1.2s_infinite]",
      )}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function Train({ onNext }: { onNext: () => void }) {
  return (
    <Shell title="My HYROX Pass">
      <div className="relative overflow-hidden bg-ink-700 p-3">
        <p className="text-[10px] uppercase text-grey-300">Hafen Athletics · week 3</p>
        <p className="headline mt-1 text-[24px]">Hi Lena_</p>
        <QrPattern className="absolute right-3 top-3 h-9 w-9" />
      </div>
      <Card>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase text-grey-300">This week</p>
          <span className="text-[10px] text-grey-300">Official programming</span>
        </div>
        <p className="mt-1 text-[12px] font-medium">3 of 3 sessions</p>
        <Progress value={3} steps={3} />
      </Card>
      <Card>
        <p className="text-[10px] uppercase text-grey-300">Index forecast</p>
        <p className="headline mt-1 text-[34px]">~64</p>
        <p className="text-[10px] text-grey-300">From 12 workouts · a judged sim makes it real</p>
      </Card>
      <Cta onClick={onNext}>Book your first sim · Thu</Cta>
    </Shell>
  );
}

function FirstSim({ onNext }: { onNext: () => void }) {
  return (
    <Shell title="Rookie Sim · Hafen Athletics">
      <Card>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase text-grey-300">Total time</p>
            <p className="headline text-[38px]">1:31:12</p>
          </div>
          <Tag>
            <Check className="h-2.5 w-2.5" /> Judged
          </Tag>
        </div>
        <p className="mt-1 text-[10px] text-grey-300">Sim Standard ✓ · Judge: Coach Ana M.</p>
      </Card>
      <Card>
        <p className="text-[10px] uppercase text-grey-300">Your fastest stations</p>
        <ul className="mt-2 space-y-1 text-[11px]">
          <li className="flex justify-between"><span>Wall Balls</span><span className="text-yellow">top 20 %</span></li>
          <li className="flex justify-between"><span>Sled Push</span><span className="text-yellow">top 30 %</span></li>
        </ul>
      </Card>
      <div className="flex items-center justify-between bg-paper px-3 py-2.5 text-ink">
        <div>
          <p className="text-[9px] uppercase">Forecast ~64 → first Index</p>
          <p className="headline text-[30px]">65.8</p>
        </div>
        <span className="text-right text-[9px] uppercase leading-tight">
          Provisional
          <br />1 of 3 results
        </span>
      </div>
      <Cta onClick={onNext}>See your Pass</Cta>
    </Shell>
  );
}

function Pass({ onNext }: { onNext: () => void }) {
  return (
    <Shell title="Status & rewards">
      <div className="bg-gradient-to-br from-grey-200 to-grey-400 p-3 text-ink">
        <p className="wordmark text-[10px]">HYROX</p>
        <p className="headline mt-3 text-[30px]">Regular_</p>
        <p className="text-[10px] uppercase">860 points · 2 sims · Club Weekend</p>
      </div>
      <Card>
        <div className="flex items-center justify-between text-[10px] uppercase text-grey-300">
          <span>Regular</span>
          <span>All-in</span>
        </div>
        <Progress value={6} steps={10} />
      </Card>
      <div className="border border-yellow p-3">
        <p className="text-[9px] uppercase text-yellow">Unlocked</p>
        <p className="mt-1 text-[13px] font-medium uppercase leading-tight">−20 % on your first race</p>
        <p className="mt-1 text-[10px] uppercase text-grey-300">HYROX Hamburg · club code HAFEN</p>
      </div>
      <Card className="flex items-center gap-2 text-[11px]">
        <Users className="h-3.5 w-3.5 text-yellow" /> Mia wants to race Doubles with you
      </Card>
      <Cta onClick={onNext}>Book with Mia</Cta>
    </Shell>
  );
}

function FirstRace({ onNext }: { onNext: () => void }) {
  return (
    <Shell title="HYROX Event App · Hamburg">
      <div className="flex items-center gap-2 bg-paper px-3 py-2 text-[10px] text-ink">
        <Bell className="h-3 w-3 shrink-0" />
        Signed in with your HYROX ID · Your first race
      </div>
      <Card>
        <div className="flex items-center justify-between">
          <Tag>
            <Radio className="h-2.5 w-2.5" /> Finished
          </Tag>
          <span className="text-[10px] text-grey-300">Women Doubles · Wave 14</span>
        </div>
        <p className="headline mt-3 text-[40px]">1:24:05</p>
        <p className="text-[11px]">7:07 faster than your first sim</p>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="h-[6px] flex-1 bg-yellow" />
          ))}
        </div>
      </Card>
      <Card>
        <p className="text-[10px] uppercase text-grey-300">Back in your Pass</p>
        <p className="mt-1 text-[12px] font-medium">Index 69.6 · record started</p>
        <p className="mt-1 text-[10px] text-grey-300">Hafen Athletics · 9 first-timers today</p>
      </Card>
      <Cta onClick={onNext} tone="paper">
        Start again
      </Cta>
    </Shell>
  );
}
