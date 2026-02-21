import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import GridBackground from "@/components/GridBackground";
import AskJay from "@/components/AskJay";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <GridBackground />
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <AskJay />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  </div>
);

export default Index;