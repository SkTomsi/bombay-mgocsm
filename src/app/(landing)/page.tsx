import About from "@/features/landing-page/components/about-bombay-mgocsm-section";
import DivineRagasBanner from "@/features/landing-page/components/divine-ragas-banner";
import { Events } from "@/features/landing-page/components/events-section";
import { Hero } from "@/features/landing-page/components/hero-section";
import History from "@/features/landing-page/components/history-section";
import Presidents from "@/features/landing-page/components/presidents-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <About />
      <Presidents />
      <History />
      <DivineRagasBanner />
    </>
  );
}
