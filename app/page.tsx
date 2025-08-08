import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import ProgressiveBlurs from "@/components/magicui/progressive-blur";
import { Reveal } from "@/components/magicui/reveal";

export default function Home() {
  return (
    <main>

      {/* <Hero /> */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Resume />
      <Contact />


    </main>
  );
}
