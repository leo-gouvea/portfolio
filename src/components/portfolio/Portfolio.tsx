import { Navbar }     from "./Navbar";
import { Hero }       from "./Hero";
import { About }      from "./About";
import { Projects }   from "./Projects";
import { Education }  from "./Education";
import { Experience } from "./Experience";
import { Languages }  from "./Languages";
import { Contact }    from "./Contact";
import { Footer }     from "./Footer";

/* Root composition.
   To add or remove a section, edit only this file plus the
   matching component under src/components/portfolio/. */
export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}