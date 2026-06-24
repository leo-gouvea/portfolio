import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { EDUCATION, EXPERIENCE } from "@/components/portfolio/content";
import { SectionHeader } from "@/components/portfolio/ui";

export function EduExp() {
  const { c, tr } = useLang();

  return (
    <section className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <section id="education" aria-labelledby="education-heading">
          <SectionHeader id="education-heading" label={c.education.heading} />
          <ol className="space-y-3 list-none">
            {EDUCATION.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-5 flex items-center gap-4"
              >
                <span aria-hidden className="block w-1 self-stretch bg-[var(--accent-red)]" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-white truncate">{tr(e.title)}</h3>
                  <p className="font-mono text-xs text-[var(--lavender)]/60">{tr(e.org)}</p>
                </div>
                <span className="font-mono text-xs text-[var(--accent-red)] shrink-0 uppercase tracking-widest">
                  {tr(e.status)}
                </span>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section id="experience" aria-labelledby="experience-heading">
          <SectionHeader id="experience-heading" label={c.experience.heading} />
          <ol className="space-y-3 list-none">
            {EXPERIENCE.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-5"
              >
                <h3 className="font-display text-lg text-white">
                  {tr(e.role)} <span className="text-[var(--accent-red)]">@ {tr(e.org)}</span>
                </h3>
                <p className="text-sm text-[var(--lavender)]/75 mt-1">{tr(e.desc)}</p>
              </motion.li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  );
}