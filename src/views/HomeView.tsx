import { content, passPath, type Locale } from "@/content";
import { asset } from "@/lib/asset";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Gap } from "@/components/sections/Gap";
import { Idea } from "@/components/sections/Idea";
import { Wins } from "@/components/sections/Wins";
import { ClubWeekend } from "@/components/sections/ClubWeekend";
import { Ask } from "@/components/sections/Ask";
import { About } from "@/components/sections/About";
import { Backlog } from "@/components/sections/Backlog";

/** The pitch: hero · punch · gap · idea · Club Weekend · everybody wins · backlog · start · apploft. The HYROX Pass has its own page. */
export function HomeView({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} nav={c.nav} ui={c.ui} page="home" />
      <main id="main">
        <Hero c={c} />
        <Statement c={c} />
        <Gap c={c} />
        <Idea c={c} passHref={asset(passPath[locale])} />
        <ClubWeekend c={c} />
        <Wins c={c} />
        <Backlog c={c} />
        <Ask c={c} />
        <About c={c} />
      </main>
      <Footer c={c} locale={locale} />
    </>
  );
}
