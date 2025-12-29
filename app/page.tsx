import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <main className="snap-container bg-black text-white relative">
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
