/* =============================================================
 * Portfolio — Leonardo José Alves Gouvea
 * FFXIV-promo inspired. Midnight Blues + #ff002b accent.
 *
 * QUICK-EDIT GUIDE
 * - Colors / theme tokens:   src/styles.css   (top :root block)
 * - Translations / copy:     src/lib/i18n.tsx (en + pt dicts)
 * - Social / contact links:  LINKS object below
 * - Project list & repos:    DEV_PROJECTS and DATA_PROJECTS below
 * - Page metadata / fonts:   src/routes/__root.tsx
 * ============================================================= */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type Lang } from "@/lib/i18n";

/* ---------- EDIT ME: external links ---------- */
const LINKS = {
  github: "https://github.com/leo-gouvea",
  linkedin: "https://linkedin.com/in/leonardo-gouvea-ti/",
  email: "leonardo.j.gouvea@outlook.com",
  phone: "+55 (11) 94268-2040",
  phoneHref: "tel:+5511942682040",
};

/* ---------- Tiny SVG flags ---------- */
function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((i) => (
        <rect key={i} y={i * 4} width="60" height="4" fill="#fff" />
      ))}
      <rect width="26" height="20" fill="#3c3b6e" />
    </svg>
  );
}
function FlagBR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <rect width="60" height="40" fill="#009b3a" />
      <polygon points="30,4 56,20 30,36 4,20" fill="#fedf00" />
      <circle cx="30" cy="20" r="7" fill="#002776" />
    </svg>
  );
}

/* ---------- Slanted button (FFXIV nav-style tab) ---------- */
function SkewButton({
  onClick,
  href,
  variant = "ghost",
  children,
  className = "",
}: {
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "accent" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  const fill =
    variant === "solid"
      ? "bg-[var(--lavender)] text-[var(--ink-black)] hover:bg-white"
      : variant === "accent"
      ? "bg-[var(--accent-red)] text-white hover:brightness-110"
      : "bg-transparent border border-[var(--lavender)]/40 text-[var(--lavender)] hover:border-[var(--accent-red)] hover:text-[var(--accent-red)]";
  const inner = (
    <span
      className={`group relative inline-flex skew-tab items-center px-6 py-3 font-display tracking-[0.25em] text-sm transition-all ${fill} ${className}`}
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
function Navbar() {
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
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/70 border-b border-[var(--accent-red)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <span className="relative grid place-items-center w-10 h-10 bg-[var(--accent-red)] skew-tab shadow-[0_0_20px_rgba(255,0,43,0.55)]">
            <span className="skew-tab-inner font-display text-white text-xl leading-none">LG</span>
          </span>
          <span className="hidden sm:block font-display tracking-[0.3em] text-[var(--lavender)] text-sm">
            LEONARDO.G
          </span>
        </a>

        <nav className="ml-auto hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative px-3 py-1.5 font-display tracking-[0.22em] text-xs text-[var(--lavender)]/80 hover:text-white transition-colors after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[var(--accent-red)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="ml-auto lg:ml-2 flex items-center gap-1 border border-[var(--lavender)]/30 p-0.5">
          {(["en", "pt"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-label={l === "en" ? "English" : "Português"}
              className={`p-1 transition-all ${
                lang === l ? "ring-2 ring-[var(--accent-red)] scale-105" : "opacity-60 hover:opacity-100"
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

/* ---------- Section header (FFXIV: red marker + ALL-CAPS title) ---------- */
function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-12 text-center">
      <div className="inline-flex items-center gap-3">
        <span className="block w-12 h-[3px] bg-[var(--accent-red)]" />
        <h2 className="font-display text-4xl sm:text-5xl tracking-[0.15em] text-white">{label}</h2>
        <span className="block w-12 h-[3px] bg-[var(--accent-red)]" />
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
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
          className="font-display tracking-[0.5em] text-xs sm:text-sm text-[var(--accent-red)]"
        >
          {t("hero_eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.95] text-white"
          style={{
            textShadow: "0 0 40px rgba(255,0,43,0.25), 0 2px 0 rgba(0,0,0,0.6)",
          }}
        >
          LEONARDO
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-[var(--lavender)] to-[var(--charcoal)]">
            GOUVEA
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-[var(--lavender)]/40" />
          <p className="font-display tracking-[0.3em] text-base sm:text-xl text-[var(--lavender)]">
            {t("hero_title")}
          </p>
          <span className="h-px w-12 bg-[var(--lavender)]/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 max-w-2xl mx-auto text-[var(--lavender)]/70 text-base"
        >
          {t("hero_lede")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <SkewButton href="#projects" variant="accent">
            ▶ {t("hero_cta_dev")}
          </SkewButton>
          <SkewButton href="#projects" variant="solid">
            ▶ {t("hero_cta_data")}
          </SkewButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 font-mono text-[11px] tracking-[0.3em] text-[var(--lavender)]/50"
        >
          {t("hero_location")}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo?: string;
  demo?: string;
  metric?: string;
};

/* EDIT ME: dev projects */
const DEV_PROJECTS: Project[] = [
  {
    title: "Transportadora & Logística CRUD",
    desc:
      "Full-stack web system with admin auth, multi-entity management, versioned SQL schema and UML documentation.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "https://github.com/leo-gouvea/transportadora-logistica-crud",
  },
  {
    title: "Busca Filmes",
    desc: "React SPA with Context API, React Router and async REST API consumption. Deployed to production.",
    tags: ["React", "Context API", "REST API"],
    repo: "https://github.com/leo-gouvea",
  },
  {
    title: "Java OOP Exercises",
    desc: "Practical OOP exercises covering encapsulation, inheritance, polymorphism and interfaces.",
    tags: ["Java", "OOP"],
    repo: "https://github.com/leo-gouvea",
  },
];

/* EDIT ME: data projects */
const DATA_PROJECTS: Project[] = [
  {
    title: "Dashboard Financeiro",
    desc:
      "Power BI dashboard for personal/business cash flow. KPI cards, combo chart by month/type, donut by category, drilldown by category → subcategory → supplier, full transaction table.",
    tags: ["Power BI", "DAX", "Cash Flow", "Financial Analysis"],
    demo:
      "https://app.powerbi.com/groups/me/reports/8c7c3bcf-e798-4605-88b1-464b9fcf0f70/dc440fe2840368d246e1?experience=power-bi",
  },
  {
    title: "Dashboard Logística & Transportes",
    desc:
      "Power BI dashboard tracking OTD (On Time Delivery), delivery deviation ranking, carrier performance and root cause insights across 1,755 deliveries in 2025.",
    tags: ["Power BI", "DAX", "KPI", "Logistics"],
    demo:
      "https://app.powerbi.com/groups/me/reports/2311d3dd-398f-4cc3-ba90-5f29be68628a/e8236f7c445a855810bc?experience=power-bi",
    metric: "1,755 deliveries analyzed",
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { t } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="persona-panel p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all flex flex-col"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="block w-8 h-[2px] bg-[var(--accent-red)]" />
        {p.metric && (
          <span className="font-mono text-[10px] tracking-widest text-[var(--accent-red)]">
            ★ {p.metric}
          </span>
        )}
      </div>
      <h3 className="font-display text-2xl text-white leading-tight mb-3 tracking-wide">
        {p.title}
      </h3>
      <p className="text-sm text-[var(--lavender)]/75 leading-relaxed mb-5 flex-1">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider px-2 py-0.5 border border-[var(--lavender)]/25 text-[var(--lavender)]/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {p.repo && (
          <SkewButton href={p.repo} variant="ghost" className="!px-4 !py-2 !text-[11px]">
            {t("view_repo")}
          </SkewButton>
        )}
        {p.demo && (
          <SkewButton href={p.demo} variant="accent" className="!px-4 !py-2 !text-[11px]">
            ▶ {p.demo.includes("powerbi") ? t("open_dashboard") : t("live_demo")}
          </SkewButton>
        )}
      </div>
    </motion.article>
  );
}

function Projects({ tab, setTab }: { tab: "dev" | "data"; setTab: (t: "dev" | "data") => void }) {
  const { t } = useLang();
  const list = tab === "dev" ? DEV_PROJECTS : DATA_PROJECTS;
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={t("section_projects")} />

        <div className="flex flex-wrap items-center gap-3 mb-10 justify-center">
          {(["dev", "data"] as const).map((id) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`relative skew-tab px-6 py-3 font-display tracking-[0.25em] text-sm transition-all ${
                tab === id
                  ? "bg-[var(--accent-red)] text-white shadow-[var(--shadow-glow)]"
                  : "bg-[var(--deep-space)]/70 text-[var(--lavender)] border border-[var(--lavender)]/30 hover:border-[var(--accent-red)]"
              }`}
            >
              <span className="skew-tab-inner block">{id === "dev" ? t("tab_dev") : t("tab_data")}</span>
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
                <span className="font-display text-5xl text-[var(--accent-red)]/60 mb-2">+</span>
                <p className="font-display tracking-widest text-[var(--lavender)]/70">
                  {t("more_soon")}
                </p>
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
    <section id="about" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={t("section_about")} />
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="persona-panel p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-10 h-[2px] bg-[var(--accent-red)]" />
              <span className="font-display tracking-[0.3em] text-xs text-[var(--accent-red)]">
                PROFILE
              </span>
            </div>
            <p className="text-[var(--lavender)]/90 leading-relaxed text-[15px]">{t("about_body")}</p>
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { title: t("skills_dev"), items: dev },
              { title: t("skills_data"), items: data },
            ].map((g) => (
              <div key={g.title} className="persona-panel p-5">
                <div className="skew-tab px-3 py-1 inline-block mb-4 bg-[var(--accent-red)] text-white">
                  <span className="skew-tab-inner block font-display tracking-widest text-sm">
                    {g.title}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 border-l-2 border-[var(--accent-red)] px-3 py-1.5 bg-[var(--ink-black)]/60"
                    >
                      <span className="font-display tracking-wider text-sm text-[var(--lavender)]">
                        {it}
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
    { title: t("edu_title"), org: t("edu_school"), status: t("edu_status") },
    { title: t("edu_eng_title"), org: t("edu_eng_school"), status: "C1" },
  ];
  const exp = [
    { role: t("exp_1_role"), org: t("exp_1_org"), desc: t("exp_1_desc") },
    { role: t("exp_2_role"), org: t("exp_2_org"), desc: t("exp_2_desc") },
  ];
  return (
    <section className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div id="education">
          <SectionHeader label={t("section_education")} />
          <div className="space-y-3">
            {edu.map((e) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-5 flex items-center gap-4"
              >
                <span className="block w-1 self-stretch bg-[var(--accent-red)]" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-lg tracking-wide text-white truncate">
                    {e.title}
                  </h4>
                  <p className="font-mono text-xs text-[var(--lavender)]/60">{e.org}</p>
                </div>
                <span className="font-mono text-xs text-[var(--accent-red)] shrink-0">
                  {e.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="experience">
          <SectionHeader label={t("section_experience")} />
          <div className="space-y-3">
            {exp.map((e) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="persona-panel p-5"
              >
                <h4 className="font-display text-lg tracking-wide text-white">
                  {e.role}{" "}
                  <span className="text-[var(--accent-red)]">@ {e.org}</span>
                </h4>
                <p className="text-sm text-[var(--lavender)]/75 mt-1">{e.desc}</p>
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
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={t("section_contact")} />
        <div className="persona-panel p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-4xl sm:text-5xl leading-tight text-white tracking-wide">
              LET&apos;S <span className="text-[var(--accent-red)]">BUILD</span>
              <br />
              SOMETHING.
            </h3>
            <p className="mt-4 text-[var(--lavender)]/75">{t("contact_lead")}</p>
          </div>
          <div className="space-y-3 font-mono text-sm">
            <a
              href={`mailto:${LINKS.email}`}
              className="block persona-panel p-4 hover:border-[var(--accent-red)] transition-colors"
            >
              <span className="text-[var(--accent-red)] tracking-widest">✉ EMAIL</span>
              <div className="text-white mt-1 break-all">{LINKS.email}</div>
            </a>
            <a
              href={LINKS.phoneHref}
              className="block persona-panel p-4 hover:border-[var(--accent-red)] transition-colors"
            >
              <span className="text-[var(--accent-red)] tracking-widest">☏ PHONE</span>
              <div className="text-white mt-1">{LINKS.phone}</div>
            </a>
            <div className="flex gap-3">
              <SkewButton href={LINKS.github} variant="solid" className="flex-1 justify-center">
                GITHUB
              </SkewButton>
              <SkewButton href={LINKS.linkedin} variant="accent" className="flex-1 justify-center">
                LINKEDIN
              </SkewButton>
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
    <footer className="border-t border-[var(--accent-red)]/40 bg-black py-8 px-4 text-center font-mono text-xs text-[var(--lavender)]/60">
      <div className="max-w-7xl mx-auto">{t("footer")}</div>
    </footer>
  );
}

/* ---------- Root ---------- */
export default function Portfolio() {
  const [tab, setTab] = useState<"dev" | "data">("dev");
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
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