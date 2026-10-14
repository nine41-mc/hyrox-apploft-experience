import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Gap } from "@/components/sections/Gap";
import { Insight } from "@/components/sections/Insight";
import { Model } from "@/components/sections/Model";
import { Year } from "@/components/sections/Year";
import { Clubs } from "@/components/sections/Clubs";
import { ForHyrox } from "@/components/sections/ForHyrox";
import { Build } from "@/components/sections/Build";
import { Cta } from "@/components/sections/Cta";
import { Racers } from "@/components/sections/Racers";
import { Audiences } from "@/components/sections/Audiences";
import { Learn } from "@/components/sections/Learn";
import { Today } from "@/components/sections/Today";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gap />
        <Today />
        <Insight />
        <Model />
        <Racers />
        <Year />
        <Audiences />
        <Clubs />
        <ForHyrox />
        <Learn />
        <Build />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
