import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type Lang } from "@/lib/i18n";

/* ---------- Tiny SVG flags ---------- */
function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((i) => (
        <rect key={i} y={i * 4} width="60" height="4" fill="#fff" />
      ))}
      <rect width="26" height="20" fill="#3c3b6e" />
      {Array.from({ length: 50 }).map((_, i) => {
        const r = Math.floor(i / 10);
        const c = i % 10;
        const x = 2 + c * 2.4 + (r % 2 ? 1.2 : 0);
        const y = 2 + r * 3.6;
        return <circle key={i} cx={x} cy={y} r="0.8" fill="#fff" />;
      })}
    </svg>
  );
}
function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#009b3a" />
      <polygon points="30,4 56,20 30,36 4,20" fill="#fedf00" />
      <circle cx="30" cy="20" r="7" fill="#002776" />
      <path d="M23 19 Q30 16 37 19" stroke="#fff" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

/* ---------- Game-style chip ---------- */
function PersonaTag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-block skew-tab font-display text-[11px] tracking-widest px-3 py-1 ${
        accent ? "bg-[color:var(--crimson)] text-white" : "bg-[color:var(--cyan)] text-[color:var(--navy-deep)]"
      }`}
    >
      <span className="block skew-tab-inner">{children}</span>
    </span>
  );
}

/* ---------- Slanted persona button ---------- */
function PersonaButton({
  onClick,
  href,
  variant = "cyan",
  children,
  className = "",
}: {
  onClick?: () => void;
  href?: string;
  variant?: "cyan" | "crimson" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  const fill =
    variant === "cyan"
      ? "bg-gradient-to-r from-[color:var(--cyan)] to-[color:oklch(0.65_0.18_210)] text-[color:var(--navy-deep)]"
      : variant === "crimson"
      ? "bg-gradient-to-r from-[color:var(--crimson)] to-[color:var(--crimson-deep)] text-white"
      : "bg-transparent border border-[color:var(--cyan)] text-[color:var(--cyan)]";
  const inner = (
    <span
      className={`group relative inline-flex skew-tab items-center px-6 py-3 font-display tracking-[0.2em] text-sm shadow-[0_8px_0_0_oklch(0.10_0.06_268)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_oklch(0.10_0.06_268)] transition-all ${fill} ${className}`}
    >
      <span className="skew-tab-inner flex items-center gap-2">{children}</span>
    </span>
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    );
  return <button onClick={onClick}>{inner}</button>;
}

/* ---------- Navbar ---------- */
function Navbar({ activeTab, setTab }: { activeTab: "dev" | "data"; setTab: (t: "dev" | "data") => void }) {
  const { t, lang, setLang } = useLang();
  const links: { id: string; key: any }[] = [
    { id: "about", key: "nav_about" },
    { id: "projects", key: "nav_projects" },
    { id: "skills", key: "nav_skills" },
    { id: "education", key: "nav_education" },
    { id: "experience", key: "nav_experience" },
    { id: "contact", key: "nav_contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:oklch(0.10_0.06_268/0.78)] border-b border-[color:var(--cyan)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative grid place-items-center w-10 h-10 bg-[color:var(--crimson)] skew-tab shadow-[0_0_20px_oklch(0.55_0.22_20/0.6)]">
            <span className="skew-tab-inner font-display text-white text-xl leading-none">LG</span>
          </span>
          <span className="hidden sm:block font-display tracking-[0.3em] text-[color:var(--cyan)] text-sm">
            LEONARDO.G
          </span>
        </a>

        {/* Tabs */}
        <div className="ml-2 hidden md:flex items-center gap-2">
          {(["dev", "data"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setTab(tab);
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`relative skew-tab px-4 py-2 text-xs font-display tracking-[0.25em] transition-all ${
                activeTab === tab
                  ? "bg-[color:var(--cyan)] text-[color:var(--navy-deep)]"
                  : "bg-[color:var(--navy-deep)]/60 text-[color:var(--cyan)] border border-[color:var(--cyan)]/40 hover:bg-[color:var(--cyan)]/10"
              }`}
            >
              <span className="skew-tab-inner block">{tab === "dev" ? t("tab_dev") : t("tab_data")}</span>
            </button>
          ))}
        </div>

        {/* Nav links */}
        <nav className="ml-auto hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-1.5 font-display tracking-[0.2em] text-xs text-foreground/80 hover:text-[color:var(--cyan)] transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        {/* Language */}
        <div className="ml-auto lg:ml-2 flex items-center gap-1 border border-[color:var(--cyan)]/40 p-0.5">
          {(["en", "pt"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-label={l === "en" ? "English" : "Português"}
              className={`p-1 transition-all ${
                lang === l ? "ring-2 ring-[color:var(--crimson)] scale-105" : "opacity-60 hover:opacity-100"
              }`}
            >
              {l === "en" ? <FlagUS className="w-7 h-5" /> : <FlagBR className="w-7 h-5" />}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- Section header (Persona "list" bar) ---------- */
function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        <div className="skew-tab bg-[color:var(--crimson)] text-white px-3 py-1 font-display text-xl">
          <span className="skew-tab-inner block">{index}</span>
        </div>
      </div>
      <div className="skew-tab bg-[color:var(--cyan)] text-[color:var(--navy-deep)] px-5 py-2 font-display text-2xl sm:text-3xl tracking-[0.15em] shadow-[0_6px_0_0_oklch(0.10_0.06_268)]">
        <span className="skew-tab-inner block">{label}</span>
      </div>
      <div className="flex-1 h-[2px] bg-gradient-to-r from-[color:var(--cyan)] to-transparent" />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      {/* Big slanted backdrop letters */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-10 -left-10 text-[28vw] font-display text-[color:var(--cyan)]/10 leading-none rotate-[-8deg]">
          STATUS
        </div>
        <div className="absolute bottom-0 right-0 text-[18vw] font-display text-[color:var(--crimson)]/15 leading-none rotate-[8deg]">
          START
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-2 mb-4">
            <PersonaTag>{t("press_start")}</PersonaTag>
            <PersonaTag accent>{t("hero_location")}</PersonaTag>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-foreground">
            LEONARDO
            <br />
            <span className="text-[color:var(--cyan)]">JOSÉ A.</span> <span className="text-[color:var(--crimson)]">GOUVEA</span>
          </h1>
          <p className="mt-6 font-display text-2xl sm:text-3xl tracking-wider text-foreground/90">
            {t("hero_title")}
          </p>
          <p className="mt-2 font-mono text-sm text-[color:var(--cyan)]/90">// {t("hero_sub")}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PersonaButton href="#projects" variant="cyan">
              ▶ {t("hero_cta_dev")}
            </PersonaButton>
            <PersonaButton href="#projects" variant="crimson">
              ▶ {t("hero_cta_data")}
            </PersonaButton>
          </div>

          <div className="mt-8 flex items-center gap-4 font-mono text-xs">
            <a
              href="https://github.com/leo-gouvea"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--cyan)] transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[color:var(--cyan)] rotate-45" /> GITHUB / leo-gouvea
            </a>
            <a
              href="https://linkedin.com/in/leonardo-gouvea-ti/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--crimson)] transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[color:var(--crimson)] rotate-45" /> LINKEDIN / leonardo-gouvea-ti
            </a>
          </div>
        </motion.div>

        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="persona-panel scanlines p-6 shadow-[var(--shadow-glow)]">
            <div className="flex items-center justify-between mb-4">
              <PersonaTag>STATUS</PersonaTag>
              <span className="font-mono text-xs text-[color:var(--cyan)]">LV. 04</span>
            </div>
            <div className="space-y-3">
              {[
                { k: "FULL-STACK", v: "RANK 4", c: "var(--cyan)" },
                { k: "DATA ANALYST", v: "RANK 3", c: "var(--cyan)" },
                { k: "AUTOMATION / AI", v: "RANK 4", c: "var(--crimson)" },
                { k: "ENGLISH", v: "C1 · RANK 5", c: "var(--cyan)" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between bg-[color:var(--navy-deep)]/60 border-l-4 px-3 py-2"
                  style={{ borderColor: `oklch(0.78 0.17 220)` }}
                >
                  <span className="font-display tracking-widest text-sm">{row.k}</span>
                  <span className="font-mono text-xs" style={{ color: `oklch(0.55 0.22 20)` }}>
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[color:var(--cyan)]/30 font-mono text-[11px] text-foreground/60">
              ◆ READY · select a path to continue
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Project Card ---------- */
type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo?: string;
  demo?: string;
  metric?: string;
  rank: string;
  arcana: string;
};

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { t } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="persona-panel scanlines p-5 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="skew-tab bg-[color:var(--crimson)] text-white px-2 py-0.5 font-display text-xs">
            <span className="skew-tab-inner block">{p.arcana}</span>
          </span>
          <span className="font-mono text-[10px] text-[color:var(--cyan)] tracking-widest">{p.rank}</span>
        </div>
        {p.metric && (
          <span className="font-display text-xs text-[color:var(--crimson)]">★ {p.metric}</span>
        )}
      </div>
      <h3 className="font-display text-2xl text-foreground leading-tight mb-2">{p.title}</h3>
      <p className="text-sm text-foreground/75 leading-relaxed mb-4">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-[color:var(--cyan)]/40 text-[color:var(--cyan)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {p.repo && (
          <PersonaButton href={p.repo} variant="ghost" className="!px-4 !py-2 !text-[11px]">
            ⌥ {t("view_repo")}
          </PersonaButton>
        )}
        {p.demo && (
          <PersonaButton href={p.demo} variant="crimson" className="!px-4 !py-2 !text-[11px]">
            ▶ {p.demo.includes("powerbi") ? t("open_dashboard") : t("live_demo")}
          </PersonaButton>
        )}
      </div>
    </motion.article>
  );
}

/* ---------- Projects ---------- */
function Projects({ tab, setTab }: { tab: "dev" | "data"; setTab: (t: "dev" | "data") => void }) {
  const { t } = useLang();

  const dev: Project[] = [
    {
      title: "Transportadora & Logística CRUD",
      desc:
        "Full-stack web system with admin auth, multi-entity management, versioned SQL schema and UML documentation.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      repo: "https://github.com/leo-gouvea/transportadora-logistica-crud",
      rank: "RANK 4",
      arcana: "0 · FOOL",
    },
    {
      title: "Busca Filmes",
      desc: "React SPA with Context API, React Router and async REST API consumption. Deployed to production.",
      tags: ["React", "Context API", "REST API"],
      repo: "https://github.com/leo-gouvea",
      demo: "https://github.com/leo-gouvea",
      rank: "RANK 3",
      arcana: "I · MAGICIAN",
    },
    {
      title: "Java OOP Exercises",
      desc: "Practical OOP exercises covering encapsulation, inheritance, polymorphism and interfaces.",
      tags: ["Java", "OOP"],
      repo: "https://github.com/leo-gouvea",
      rank: "RANK 3",
      arcana: "IV · EMPEROR",
    },
  ];

  const data: Project[] = [
    {
      title: "Dashboard Financeiro",
      desc:
        "Power BI dashboard for personal/business cash flow. KPI cards, combo chart by month/type, donut by category, drilldown by category → subcategory → supplier, full transaction table.",
      tags: ["Power BI", "DAX", "Cash Flow", "Financial Analysis"],
      demo:
        "https://app.powerbi.com/groups/me/reports/8c7c3bcf-e798-4605-88b1-464b9fcf0f70/dc440fe2840368d246e1?experience=power-bi",
      rank: "RANK 4",
      arcana: "V · HIEROPHANT",
    },
    {
      title: "Dashboard Logística & Transportes",
      desc:
        "Power BI dashboard tracking OTD (On Time Delivery), delivery deviation ranking, carrier performance and root cause insights across 1,755 deliveries in 2025.",
      tags: ["Power BI", "DAX", "KPI", "Logistics"],
      demo:
        "https://app.powerbi.com/groups/me/reports/2311d3dd-398f-4cc3-ba90-5f29be68628a/e8236f7c445a855810bc?experience=power-bi",
      metric: t("metric_deliveries"),
      rank: "RANK 5",
      arcana: "VII · CHARIOT",
    },
  ];

  const list = tab === "dev" ? dev : data;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="02" label={t("section_projects")} />

        <div className="flex flex-wrap items-center gap-3 mb-10">
          {(["dev", "data"] as const).map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`relative skew-tab px-6 py-3 font-display tracking-[0.25em] text-sm transition-all ${
                tab === id
                  ? "bg-[color:var(--crimson)] text-white shadow-[var(--shadow-crimson)]"
                  : "bg-[color:var(--navy-deep)]/70 text-[color:var(--cyan)] border border-[color:var(--cyan)]/40 hover:bg-[color:var(--cyan)]/10"
              }`}
            >
              <span className="skew-tab-inner block">{id === "dev" ? t("tab_dev") : t("tab_data")}</span>
            </button>
          ))}
          <span className="font-mono text-xs text-foreground/50 ml-2">
            ◀ LB · RB ▶ switch arsenal
          </span>
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
              <div className="persona-panel scanlines p-5 flex flex-col items-center justify-center text-center min-h-[260px] border-dashed">
                <span className="font-display text-5xl text-[color:var(--cyan)]/40 mb-2">+</span>
                <p className="font-display tracking-widest text-foreground/70">{t("more_soon")}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------- About + Skills ---------- */
function About() {
  const { t } = useLang();
  const dev = ["React", "JavaScript", "Python", "Java", "PHP", "Node.js", "SQL", "n8n", "REST APIs"];
  const data = ["Power BI", "DAX", "Excel Advanced", "ERP TOTVS RM"];
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="01" label={t("section_about")} />
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="persona-panel scanlines p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <PersonaTag accent>BIO</PersonaTag>
              <span className="font-mono text-xs text-[color:var(--cyan)]">// profile.md</span>
            </div>
            <p className="text-foreground/85 leading-relaxed text-[15px]">{t("about_body")}</p>
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { title: t("skills_dev"), items: dev, color: "var(--cyan)" },
              { title: t("skills_data"), items: data, color: "var(--crimson)" },
            ].map((g) => (
              <div key={g.title} className="persona-panel p-5">
                <div
                  className="skew-tab px-3 py-1 inline-block mb-4 font-display tracking-widest text-sm"
                  style={{ background: `oklch(0.78 0.17 220)`, color: `oklch(0.13 0.08 268)` }}
                >
                  <span className="skew-tab-inner block">{g.title}</span>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it, i) => (
                    <li
                      key={it}
                      className="flex items-center justify-between border-l-4 px-3 py-1.5 bg-[color:var(--navy-deep)]/60"
                      style={{ borderColor: g.color }}
                    >
                      <span className="font-display tracking-wider text-sm">{it}</span>
                      <span className="font-mono text-[10px] text-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Education + Experience ---------- */
function EduExp() {
  const { t } = useLang();
  const edu = [
    { title: t("edu_title"), org: t("edu_school"), status: t("edu_status"), rank: "RANK 4" },
    { title: t("edu_eng_title"), org: t("edu_eng_school"), status: "C1", rank: "RANK 5" },
  ];
  const exp = [
    { role: t("exp_1_role"), org: t("exp_1_org"), desc: t("exp_1_desc"), tag: "PARTY" },
    { role: t("exp_2_role"), org: t("exp_2_org"), desc: t("exp_2_desc"), tag: "LEADER" },
  ];
  return (
    <section className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div id="education">
          <SectionHeader index="03" label={t("section_education")} />
          <div className="space-y-3">
            {edu.map((e) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-4 flex items-center gap-4"
              >
                <div className="skew-tab bg-[color:var(--cyan)] text-[color:var(--navy-deep)] px-3 py-2 font-display text-lg">
                  <span className="skew-tab-inner block">{e.rank}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-lg">{e.title}</h4>
                  <p className="font-mono text-xs text-foreground/60">{e.org}</p>
                </div>
                <span className="font-mono text-xs text-[color:var(--crimson)]">{e.status}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="experience">
          <SectionHeader index="04" label={t("section_experience")} />
          <div className="space-y-3">
            {exp.map((e) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="skew-tab bg-[color:var(--crimson)] text-white px-2 py-0.5 font-display text-xs">
                    <span className="skew-tab-inner block">{e.tag}</span>
                  </span>
                  <h4 className="font-display text-lg">
                    {e.role} <span className="text-[color:var(--cyan)]">@ {e.org}</span>
                  </h4>
                </div>
                <p className="text-sm text-foreground/75">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="05" label={t("section_contact")} />
        <div className="persona-panel scanlines p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-4xl sm:text-5xl leading-tight">
              LET&apos;S <span className="text-[color:var(--crimson)]">BUILD</span>
              <br />
              <span className="text-[color:var(--cyan)]">SOMETHING.</span>
            </h3>
            <p className="mt-4 text-foreground/75">{t("contact_lead")}</p>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <a
              href="mailto:leonardo.j.gouvea@outlook.com"
              className="block persona-panel p-4 hover:bg-[color:var(--cyan)]/5"
            >
              <span className="text-[color:var(--cyan)]">✉ EMAIL</span>
              <div className="text-foreground mt-1">leonardo.j.gouvea@outlook.com</div>
            </a>
            <a
              href="tel:+5511942682040"
              className="block persona-panel p-4 hover:bg-[color:var(--crimson)]/5"
            >
              <span className="text-[color:var(--crimson)]">☏ PHONE</span>
              <div className="text-foreground mt-1">+55 (11) 94268-2040</div>
            </a>
            <div className="flex gap-3">
              <PersonaButton href="https://github.com/leo-gouvea" variant="cyan" className="flex-1 justify-center">
                GITHUB
              </PersonaButton>
              <PersonaButton
                href="https://linkedin.com/in/leonardo-gouvea-ti/"
                variant="crimson"
                className="flex-1 justify-center"
              >
                LINKEDIN
              </PersonaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[color:var(--cyan)]/20 py-8 px-4 text-center font-mono text-xs text-foreground/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>{t("footer")}</span>
        <span className="text-[color:var(--cyan)]">◆ END OF FILE ◆</span>
      </div>
    </footer>
  );
}

/* ---------- Root ---------- */
export default function Portfolio() {
  const [tab, setTab] = useState<"dev" | "data">("dev");

  // Sync URL hash so deep links work
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#data") setTab("data");
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);
  void year;

  return (
    <div className="min-h-screen text-foreground">
      <Navbar activeTab={tab} setTab={setTab} />
      <main className="pt-0">
        <Hero />
        <About />
        <Projects tab={tab} setTab={setTab} />
        <EduExp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}