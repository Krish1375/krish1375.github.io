import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { LiveCounters } from "@/components/counters/LiveCounters";
import { OscDivider } from "@/components/oscilloscope/OscDivider";
import { Journey } from "@/components/journey/Journey";
import { Projects } from "@/components/projects/Projects";
import { Editorial } from "@/components/editorial/Editorial";
import { Skills } from "@/components/skills/Skills";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <LiveCounters />
      <OscDivider />
      <Journey />
      <Projects />
      <OscDivider />
      <Editorial />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
