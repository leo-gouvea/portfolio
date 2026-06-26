import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { projects, type Project } from "@/data/site";
import { Button, SectionHeader } from "./ui";

type Tab = "dev" | "data";

function ProjectCard({ p }: { p: Project }) {
  const { t } = useLang();
  return (
    <article className="panel scanlines p-5 hover:-translate-y-1 transition-transform anim-fade-up">
      <h3 className="font-display text-2xl leading-tight mb-2">{p.title}</h3>
      <p className="text-sm opacity-80 leading-relaxed mb-4">{p.desc}</p>

      <ul className="flex flex-wrap gap-1.5 mb-4">
        {p.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-[color:var(--border)] text-[color:var(--primary)]"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {p.repo && (
          <Button href={p.repo} variant="ghost" className="!px-4 !py-2 !text-[11px]">
            {t("view_repo")}
          </Button>
        )}
        {p.demo && (
          <Button href={p.demo} variant="secondary" className="!px-4 !py-2 !text-[11px]">
            {p.demo.includes("powerbi") ? t("open_dashboard") : t("live_demo")}
          </Button>
        )}
      </div>
    </article>
  );
}

/* Projects section with Dev / Data tabs.
   - Project entries: src/data/site.ts -> projects.dev / projects.data */
export function Projects() {
  const { t } = useLang();
  const [tab, setTab] = useState<Tab>("dev");
  const list = projects[tab];

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="02" label={t("section_projects")} id="projects-title" />

        <div role="tablist" aria-label={t("section_projects")} className="flex flex-wrap items-center gap-3 mb-10">
          {(["dev", "data"] as Tab[]).map((id) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`skew-tab px-6 py-3 font-display tracking-[0.25em] text-sm transition-all ${
                tab === id
                  ? "bg-[color:var(--secondary)] text-[color:var(--bg)]"
                  : "bg-[color:var(--surface-2)] text-[color:var(--primary)] border border-[color:var(--border)]"
              }`}
            >
              <span className="skew-tab-inner block">{id === "dev" ? t("tab_dev") : t("tab_data")}</span>
            </button>
          ))}
        </div>

        <div key={tab} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 anim-fade-in">
          {list.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {tab === "data" && (
            <article className="panel scanlines p-5 flex flex-col items-center justify-center text-center min-h-[200px]">
              <span className="font-display text-5xl text-[color:var(--primary)] opacity-40 mb-2">+</span>
              <p className="font-display tracking-widest opacity-70">{t("more_soon")}</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}