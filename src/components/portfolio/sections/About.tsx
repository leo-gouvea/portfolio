import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { SKILLS } from "@/components/portfolio/content";
import { SectionHeader } from "@/components/portfolio/ui";

export function About() {
  const { c } = useLang();
  const groups = [
    { title: c.skills.devTitle, items: SKILLS.dev },
    { title: c.skills.dataTitle, items: SKILLS.data },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="about-heading" label={c.about.heading} />

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="persona-panel p-7"
          >
            <header className="flex items-center gap-3 mb-4">
              <span aria-hidden className="block w-10 h-[2px] bg-[var(--accent-red)]" />
              <span className="font-ui tracking-[0.3em] uppercase text-xs text-[var(--accent-red)]">
                {c.about.label}
              </span>
            </header>
            <p className="text-[var(--lavender)]/90 leading-relaxed text-[15px]">{c.about.body}</p>
          </motion.article>

          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {groups.map((g) => (
              <article key={g.title} className="persona-panel p-5">
                <h3 className="skew-tab px-3 py-1 inline-block mb-4 bg-[var(--accent-red)] text-white">
                  <span className="skew-tab-inner block font-ui tracking-widest uppercase text-sm">
                    {g.title}
                  </span>
                </h3>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="border-l-2 border-[var(--accent-red)] px-3 py-1.5 bg-[var(--ink-black)]/60 font-ui tracking-wider text-sm text-[var(--lavender)]"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}