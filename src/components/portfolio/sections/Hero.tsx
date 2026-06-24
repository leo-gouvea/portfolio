import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/components/portfolio/content";
import { SkewButton } from "@/components/portfolio/ui";

export function Hero() {
  const { c } = useLang();
  const [firstName, lastName] = SITE.name.split(" ");

  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Atmospheric glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] rounded-full bg-[var(--accent-red)]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full bg-[var(--charcoal)]/40 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 80px, rgba(204,201,220,0.4) 80px 81px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-ui tracking-[0.5em] uppercase text-xs sm:text-sm text-[var(--accent-red)]"
        >
          {c.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.95] text-white"
          style={{ textShadow: "0 0 40px rgba(255,0,43,0.25), 0 2px 0 rgba(0,0,0,0.6)" }}
        >
          {firstName}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[var(--lavender)] to-[var(--charcoal)]">
            {lastName}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 inline-flex items-center justify-center gap-4 font-ui tracking-[0.3em] uppercase text-base sm:text-xl text-[var(--lavender)]"
        >
          <span aria-hidden className="h-px w-12 bg-[var(--lavender)]/40" />
          {c.hero.role}
          <span aria-hidden className="h-px w-12 bg-[var(--lavender)]/40" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 max-w-2xl mx-auto text-[var(--lavender)]/70 text-base"
        >
          {c.hero.lede}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <SkewButton href="#projects" variant="accent">
            ▶ {c.hero.ctaDev}
          </SkewButton>
          <SkewButton href="#projects" variant="solid">
            ▶ {c.hero.ctaData}
          </SkewButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--lavender)]/50"
        >
          {c.hero.location}
        </motion.p>
      </div>
    </section>
  );
}