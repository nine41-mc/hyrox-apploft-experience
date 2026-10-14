import { content, type Locale } from "@/content";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gap } from "@/components/sections/Gap";
import { Today } from "@/components/sections/Today";
import { Insight } from "@/components/sections/Insight";
import { Model } from "@/components/sections/Model";
import { Racers } from "@/components/sections/Racers";
import { Year } from "@/components/sections/Year";
import { Audiences } from "@/components/sections/Audiences";
import { Clubs } from "@/components/sections/Clubs";
import { ForHyrox } from "@/components/sections/ForHyrox";
import { Learn } from "@/components/sections/Learn";
import { Build } from "@/components/sections/Build";
import { Cta } from "@/components/sections/Cta";

export function HomeView({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <Header locale={locale} nav={c.nav} ui={c.ui} page="home" />
      <main>
        <Hero c={c} />
        <Gap c={c} />
        <Today c={c} />
        <Insight c={c} />
        <Model c={c} />
        <Racers c={c} />
        <Year year={c.year} ui={c.ui} />
        <Audiences c={c} />
        <Clubs c={c} />
        <ForHyrox c={c} />
        <Learn c={c} />
        <Build c={c} />
        <Cta c={c} />
      </main>
      <Footer c={c} locale={locale} />
    </>
  );
}
