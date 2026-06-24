import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { DATA_PROJECTS, DEV_PROJECTS, type Project } from "@/components/portfolio/content";
import { SectionHeader, SkewButton } from "@/components/portfolio/ui";

type Tab = "dev" | "data";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { c, tr } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="persona-panel p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all flex flex-col"
    >
      <header className="flex items-center gap-2 mb-3">
        <span aria-hidden className="block w-8 h-[2px] bg-[var(--accent-red)]" />
        {p.metric && (
          <span className="font-mono text-[10px] tracking-widest text-[var(--accent-red)]">
            ★ {tr(p.metric)}
          </span>
        )}
      </header>

      <h3 className="font-display text-2xl text-white leading-tight mb-3">{p.title}</h3>

      <p className="text-sm text-[var(--lavender)]/75 leading-relaxed mb-5 flex-1">{tr(p.desc)}</p>

      <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Tech stack">
        {p.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-[var(--lavender)]/25 text-[var(--lavender)]/80"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {p.repo && (
          <SkewButton href={p.repo} variant="ghost" className="!px-4 !py-2 !text-[11px]">
            {c.projects.viewRepo}
          </SkewButton>
        )}
        {p.demo && (
          <SkewButton href={p.demo} variant="accent" className="!px-4 !py-2 !text-[11px]">
            ▶ {p.demo.includes("powerbi") ? c.projects.openDashboard : c.projects.liveDemo}
          </SkewButton>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { c } = useLang();
  const [tab, setTab] = useState<Tab>("dev");
  const list = tab === "dev" ? DEV_PROJECTS : DATA_PROJECTS;
  const tabs: { id: Tab; label: string }[] = [
    { id: "dev", label: c.projects.tabDev },
    { id: "data", label: c.projects.tabData },
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="projects-heading" label={c.projects.heading} />

        <div role="tablist" className="flex flex-wrap items-center gap-3 mb-10 justify-center">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`relative skew-tab px-6 py-3 font-ui tracking-[0.25em] uppercase text-sm transition-all ${
                tab === id
                  ? "bg-[var(--accent-red)] text-white shadow-[var(--shadow-glow)]"
                  : "bg-[var(--deep-space)]/70 text-[var(--lavender)] border border-[var(--lavender)]/30 hover:border-[var(--accent-red)]"
              }`}
            >
              <span className="skew-tab-inner block">{label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {list.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
            {tab === "data" && (
              <div className="persona-panel p-6 flex flex-col items-center justify-center text-center min-h-[260px]">
                <span aria-hidden className="font-display text-5xl text-[var(--accent-red)]/60 mb-2">
                  +
                </span>
                <p className="font-ui tracking-widest uppercase text-[var(--lavender)]/70">
                  {c.projects.moreSoon}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}