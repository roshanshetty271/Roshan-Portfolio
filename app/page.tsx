import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider color="cream" />
      <About />
      <Experience />
      <WaveDivider color="charcoal" flip />
      <Projects />
      <CurrentlyBuilding />
      <WaveDivider color="cream" />
      <Skills />
      <Testimonials />
      <WaveDivider color="charcoal" flip />
      <Contact />
    </>
  );
}

