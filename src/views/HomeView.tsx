import { content, type Locale } from "@/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Gap } from "@/components/sections/Gap";
import { Idea } from "@/components/sections/Idea";
import { Year } from "@/components/sections/Year";
import { Wins } from "@/components/sections/Wins";
import { ClubWeekend } from "@/components/sections/ClubWeekend";
import { Ask } from "@/components/sections/Ask";
import { About } from "@/components/sections/About";

/** The pitch in 8 beats: hero · punch · gap · idea · Lena · Club Weekend · everybody wins · start · apploft. */
export function HomeView({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} nav={c.nav} ui={c.ui} page="home" />
      <main id="main">
        <Hero c={c} />
        <Statement c={c} />
        <Gap c={c} />
        <Idea c={c} />
        <Year year={c.year} ui={c.ui} />
        <ClubWeekend c={c} />
        <Wins c={c} />
        <Ask c={c} />
        <About c={c} />
      </main>
      <Footer c={c} locale={locale} />
    </>
  );
}
