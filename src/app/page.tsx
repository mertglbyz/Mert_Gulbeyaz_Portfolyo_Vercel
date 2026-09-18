import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Footer />
    </main>
  );
}
