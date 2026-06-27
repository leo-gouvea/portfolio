/* =============================================================
   SITE CONTENT — EDIT TEXT, LINKS, PROJECTS HERE
   -------------------------------------------------------------
   - Personal info (name, email, phone, socials) -> `profile`
   - Project cards (dev & data)                  -> `projects`
   - Skills lists                                -> `skills`
   - Education entries                           -> `education`
   - Experience entries                          -> `experience`

   Translated strings (nav labels, section titles, About bio,
   CTAs) live in src/lib/i18n.tsx.
   ============================================================= */

export const profile = {
  name: "Leonardo José Alves Gouvea",
  shortName: "Leonardo Gouvea",
  initials: "LG",
  email: "leonardo.j.gouvea@outlook.com",
  phone: "+55 (11) 94268-2040",
  phoneHref: "tel:+5511942682040",
  /* WhatsApp deep-link. wa.me uses international format, digits only. */
  whatsapp: "+55 (11) 94268-2040",
  whatsappHref: "https://wa.me/5511942682040",
  github: "https://github.com/leo-gouvea",
  githubHandle: "leo-gouvea",
  linkedin: "https://linkedin.com/in/leonardo-gouvea-ti/",
  linkedinHandle: "leonardo-gouvea-ti",
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo?: string;
  demo?: string;
  /* Optional preview image (relative URL, asset import, or remote URL).
     Leave empty to render the placeholder icon panel.
     Add your screenshots here when ready. */
  image?: string;
};

export const projects: { dev: Project[]; data: Project[] } = {
  dev: [
    {
      title: "Transportadora & Logística CRUD",
      desc: "Full-stack web system with admin auth, multi-entity management, versioned SQL schema and UML documentation.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      repo: "https://github.com/leo-gouvea/transportadora-logistica-crud",
    },
    {
      title: "Busca Filmes",
      desc: "React SPA with Context API, React Router and async REST API consumption. Deployed to production.",
      tags: ["React", "Context API", "REST API"],
      repo: "https://github.com/leo-gouvea/busca-filmes",
    },
    {
      title: "Java OOP Exercises",
      desc: "Practical OOP exercises covering encapsulation, inheritance, polymorphism and interfaces.",
      tags: ["Java", "OOP"],
      repo: "https://github.com/leo-gouvea/curso-devfullstackjr-prati/tree/main/Lista%20de%20Tarefas%207%20-%20Java%20OO",
    },
  ],
  data: [
    {
      title: "Dashboard Financeiro",
      desc: "Power BI dashboard for personal/business cash flow. KPI cards, combo chart by month/type, donut by category, drilldown by category → subcategory → supplier, full transaction table.",
      tags: ["Power BI", "DAX", "Cash Flow"],
      demo: "https://app.powerbi.com/groups/me/reports/8c7c3bcf-e798-4605-88b1-464b9fcf0f70/dc440fe2840368d246e1?experience=power-bi",
    },
    {
      title: "Dashboard Logística & Transportes",
      desc: "Power BI dashboard tracking OTD (On Time Delivery), delivery deviation ranking, carrier performance and root cause insights across 1,755 deliveries in 2025.",
      tags: ["Power BI", "DAX", "KPI", "Logistics"],
      demo: "https://app.powerbi.com/groups/me/reports/2311d3dd-398f-4cc3-ba90-5f29be68628a/e8236f7c445a855810bc?experience=power-bi",
    },
  ],
};

export const skills = {
  dev: ["Python", "Java", "JavaScript", "React", "PHP", "Node.js", "SQL", "n8n", "REST APIs"],
  data: ["Power BI", "DAX", "Excel Advanced", "ERP TOTVS RM"],
};

/* =============================================================
   EDUCATION — order matters (rendered top-down).
   Each entry references i18n keys defined in src/lib/i18n.tsx
   so titles/orgs/descriptions translate, while `date` stays
   identical in both languages (locale-neutral months).
   ============================================================= */
export type EducationItem = {
  titleKey: string;
  orgKey: string;
  date: string;
  descKey?: string;
};

export const education: EducationItem[] = [
  { titleKey: "edu_ads_title",   orgKey: "edu_ads_org",   date: "Feb 2025 – Dec 2026" },
  { titleKey: "edu_prati_title", orgKey: "edu_prati_org", date: "Apr 2025 – Dec 2026" },
  { titleKey: "edu_etec_title",  orgKey: "edu_etec_org",  date: "Feb 2022 – Dec 2024" },
  { titleKey: "edu_proa_title",  orgKey: "edu_proa_org",  date: "Sep 2024 – Nov 2024", descKey: "edu_proa_desc" },
  { titleKey: "edu_wizard_title",orgKey: "edu_wizard_org",date: "Feb 2022 – Dec 2023" },
];

/* =============================================================
   EXPERIENCE — same pattern as education.
   `descKey` text supports multi-line bullets (split on `\n`).
   ============================================================= */
export type ExperienceItem = {
  roleKey: string;
  orgKey: string;
  descKey: string;
};

export const experience: ExperienceItem[] = [
  { roleKey: "exp_cb_role",    orgKey: "exp_cb_org",    descKey: "exp_cb_desc" },
  { roleKey: "exp_mesc_role",  orgKey: "exp_mesc_org",  descKey: "exp_mesc_desc" },
  { roleKey: "exp_cafe_role",  orgKey: "exp_cafe_org",  descKey: "exp_cafe_desc" },
];

/* =============================================================
   LANGUAGES — rendered in the new Languages section.
   `badgeUrl` is an optional external certificate link
   (e.g. EFSET / Cambridge). Add or remove entries freely.
   ============================================================= */
export type LanguageItem = {
  nameKey: string;
  levelKey: string;
  badgeUrl?: string;
  badgeLabelKey?: string;
};

export const languages: LanguageItem[] = [
  { nameKey: "lang_pt_name", levelKey: "lang_pt_level" },
  {
    nameKey: "lang_en_name",
    levelKey: "lang_en_level",
    badgeUrl: "https://cert.efset.org/zcHVAD",
    badgeLabelKey: "lang_en_badge",
  },
  { nameKey: "lang_es_name", levelKey: "lang_es_level" },
];