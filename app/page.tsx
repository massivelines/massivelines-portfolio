import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import WorkHistory from "@/components/WorkHistory/WorkHistory";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <WorkHistory />
        <Contact />
      </main>
    </>
  );
}
