/* =============================================================
 * Portfolio — Leonardo José Alves Gouvea
 * FFXIV-promo inspired. Midnight Blues + #ff002b accent.
 *
 * QUICK-EDIT GUIDE
 * - All text, projects, education, experience, contact:
 *     → src/components/portfolio/content.ts
 * - Colors / theme tokens:
 *     → src/styles.css (top :root block)
 * - Page metadata / fonts:
 *     → src/routes/__root.tsx
 * - Section visuals live in:
 *     → src/components/portfolio/sections/<Name>.tsx
 * ============================================================= */

import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { EduExp } from "./sections/EduExp";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <EduExp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}