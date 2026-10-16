import {
  Activity,
  ArrowLeft,
  CalendarDays,
  Coins,
  CreditCard,
  Gift,
  Heart,
  History,
  MapPin,
  PlayCircle,
  ScanLine,
  Trophy,
  Video,
  type LucideIcon,
} from "lucide-react";
import { content, home, type Locale } from "@/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Prototype } from "@/components/prototype/Prototype";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { PassFieldsCard } from "@/components/ui/PassFieldsCard";
import { cn } from "@/components/ui/cn";
import { asset } from "@/lib/asset";

const ICONS: Record<string, LucideIcon> = {
  scan: ScanLine,
  history: History,
  calendar: CalendarDays,
  map: MapPin,
  heart: Heart,
  play: PlayCircle,
  video: Video,
  gift: Gift,
  trophy: Trophy,
  activity: Activity,
  coins: Coins,
  card: CreditCard,
};

/** The HYROX Pass page: what the Pass is, what's inside, Lena's 24 hours, the prototype and two ways to launch. */
export function PassView({ locale }: { locale: Locale }) {
  const c = content[locale];
  const p = c.pass;
  return (
    <>
      <Header locale={locale} nav={c.nav} ui={c.ui} page="pass" />
      <main id="main" className="overflow-hidden bg-ink pb-20 pt-28 text-paper md:pt-36">
        {/* hero */}
        <section className="container-site">
          <a
            href={`${asset(home[locale])}#idea`}
            className="eyebrow mb-8 inline-flex min-h-11 items-center gap-2 !text-[12px] text-grey-300 transition-colors hover:text-yellow"
          >
            <ArrowLeft className="h-4 w-4" /> {p.back}
          </a>
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="eyebrow text-yellow">{p.eyebrow}_</p>
              <Headline as="h1" lines={p.title} hl={p.titleHl} className="mt-4" />
              <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{p.lead}</p>
            </div>
            <Reveal className="mx-auto w-full max-w-[380px] rotate-[-4deg]">
              <PassFieldsCard />
            </Reveal>
          </div>
        </section>

        {/* three meanings + the gap */}
        <section className="container-site mt-20 md:mt-28">
          <p className="eyebrow text-grey-300">{p.meanings.k}_</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {p.meanings.items.map((m, i) => (
              <Reveal
                as="li"
                key={m.k}
                delay={i * 0.06}
                className={cn(
                  "rounded-[24px] p-6 md:p-8",
                  i === 0 && "bg-yellow text-ink",
                  i === 1 && "border border-ink-600 bg-ink-800",
                  i === 2 && "bg-paper text-ink",
                )}
              >
                <h2 className="headline text-[40px] md:text-[48px]">{m.k}</h2>
                <p className={cn("mt-3 text-[16px] leading-relaxed", i === 1 ? "text-paper/80" : "text-ink/80")}>{m.v}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-3 rounded-[24px] border border-yellow/50 p-6 md:flex md:items-baseline md:gap-8 md:p-8">
            <p className="headline shrink-0 text-[24px] text-yellow md:text-[28px]">{p.gap.k}_</p>
            <p className="mt-3 text-[16px] leading-relaxed text-paper/85 md:mt-0 md:text-[18px]">{p.gap.v}</p>
          </Reveal>
        </section>

        {/* inside the Pass */}
        <section className="container-site mt-20 md:mt-28">
          <p className="eyebrow text-grey-300">{p.features.k}_</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {p.features.items.map((f, i) => {
              const Icon = ICONS[f.icon] ?? ScanLine;
              const accent = f.icon === "coins" || f.icon === "card";
              return (
                <Reveal
                  as="li"
                  key={f.k}
                  delay={(i % 4) * 0.04}
                  className={cn("rounded-[20px] p-5", accent ? "bg-yellow text-ink" : "border border-ink-600 bg-ink-800")}
                >
                  <Icon className={cn("h-6 w-6", accent ? "text-ink" : "text-yellow")} aria-hidden />
                  <h3 className="mt-4 text-[17px] font-medium">{f.k}</h3>
                  <p className={cn("mt-1 text-[14px]", accent ? "text-ink/75" : "text-paper/70")}>{f.v}</p>
                </Reveal>
              );
            })}
          </ul>
        </section>

        {/* Lena's 24 hours */}
        <section className="container-site mt-20 md:mt-28">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
            <div>
              <p className="eyebrow text-yellow">{p.day.eyebrow}_</p>
              <Headline lines={p.day.title} hl={p.day.titleHl} className="mt-4" />
            </div>
            <p className="max-w-[520px] text-[17px] leading-relaxed text-paper/85 md:text-[19px]">{p.day.body}</p>
          </div>
          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {p.day.steps.map((s, i) => {
              const raceDay = i >= 4;
              return (
                <Reveal
                  as="li"
                  key={s.k}
                  delay={(i % 4) * 0.05}
                  className={cn(
                    "flex flex-col rounded-[20px] p-5",
                    raceDay ? "border border-yellow/60 bg-ink-800" : "border border-ink-600 bg-ink-900",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="headline text-[26px] text-yellow">{s.time}</span>
                    <span className="eyebrow rounded-full bg-ink-700 px-2.5 py-1 !text-[10px] text-paper/80">{s.tag}</span>
                  </div>
                  <h3 className="headline mt-4 text-[24px]">{s.k}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-paper/75">{s.v}</p>
                </Reveal>
              );
            })}
            <Reveal as="li" className="flex items-end rounded-[20px] bg-yellow p-5 text-ink">
              <p className="text-[15px] leading-relaxed">{p.day.note}</p>
            </Reveal>
          </ol>
        </section>

        {/* interactive prototype */}
        <section className="container-site mt-20 md:mt-28">
          <Prototype p={c.prototype} />
        </section>

        {/* two ways to launch */}
        <section className="container-site mt-20 md:mt-28">
          <p className="eyebrow text-grey-300">{p.models.k}_</p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {p.models.items.map((m, i) => (
              <Reveal
                as="li"
                key={m.k}
                delay={i * 0.06}
                className={cn("rounded-[24px] p-6 md:p-8", i === 0 ? "bg-yellow text-ink" : "border border-ink-600 bg-ink-800")}
              >
                <h2 className="headline text-[28px] md:text-[34px]">{m.k}</h2>
                <p className={cn("mt-3 text-[16px] leading-relaxed", i === 0 ? "text-ink/80" : "text-paper/80")}>{m.v}</p>
              </Reveal>
            ))}
          </ul>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {p.models.extras.map((m, i) => (
              <Reveal as="li" key={m.k} delay={i * 0.05} className="rounded-[20px] border border-ink-600 p-5 md:p-6">
                <h3 className="headline text-[22px]">{m.k}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-paper/75">{m.v}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-[13px] text-grey-300">{c.prototype.note}</p>
        </section>
      </main>
      <Footer c={c} locale={locale} />
    </>
  );
}
