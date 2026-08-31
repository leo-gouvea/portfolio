/* =============================================================
   SITE CONTENT — single source of truth for portfolio data
   -------------------------------------------------------------
   Edit this file to update:
     - `profile`    : personal info, contact channels, socials
     - `projects`   : dev & data project cards (titles, links,
                      tags, preview images)
     - `skills`     : grouped skill lists rendered in About
     - `education`  : academic / course entries (with dates)
     - `experience` : work history (dates intentionally omitted
                      on render)
     - `languages`  : spoken-language proficiency + optional
                      external certificate link

   Every translated string (nav labels, section titles, About
   bio, CTAs, education / experience / language copy) lives in
   src/lib/i18n.tsx and is referenced here by key only.
   ============================================================= */

import dashboardFinanceiroImg from "@/assets/images/dashboardFinanceiroImg.png";
import dashboardLogisticaImg from "@/assets/images/dashboardLogisticaImg.png";
import customerAnalysisImg from "@/assets/images/customerAnalysisImg.png";
import buscaFilmesImg from "@/assets/images/buscaFilmesGif.gif";
import crudImg from "@/assets/images/crudImg.png";
import javaImg from "@/assets/images/javaImg.png";
import fundoMagicoImg from "@/assets/images/fundoMagicoImg.gif";
import entrelinhasImg from "@/assets/images/entrelinhas.gif";
import clubemescLogo from "@/assets/logos/clubemesc_logo.jpg";
import etecLogo from "@/assets/logos/eteclaurogomes_logo.jpg";
import fsaLogo from "@/assets/logos/fsaoficial_logo.jpg";
import casasbahiaLogo from "@/assets/logos/grupocasasbahia_logo.jpg";
import proaLogo from "@/assets/logos/instituto_proa_logo.jpg";
import pratiLogo from "@/assets/logos/maisprati_logo.jpg";
import wizardLogo from "@/assets/logos/wizard_by_pearson_logo.jpg";
import cafezinhoLogo from "@/assets/logos/cafezinho_logo.jpg"

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
  /* i18n key resolved via useLang().t(descKey) — descriptions are
     translated (EN/PT) while titles remain identical in both langs. */
  descKey: string;
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
      descKey: "proj_crud_desc",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      repo: "https://github.com/leo-gouvea/transportadora-logistica-crud",
      image: crudImg,
    },
    {
      title: "Busca Filmes",
      descKey: "proj_busca_desc",
      tags: ["React", "Context API", "REST API"],
      repo: "https://github.com/leo-gouvea/busca-filmes",
      image: buscaFilmesImg,
    },
    {
      title: "Java OOP Exercises",
      descKey: "proj_java_desc",
      tags: ["Java", "OOP"],
      repo: "https://github.com/leo-gouvea/curso-devfullstackjr-prati/tree/main/Lista%20de%20Tarefas%207%20-%20Java%20OO",
      image: javaImg,
    },
     {
      title: "Fundo Mágico",
      descKey: "proj_fundo_desc",
      tags: ["JavaScript", "n8n", "Groq API", "HTML", "CSS"],
      repo: "https://github.com/leo-gouvea/magical-background-ai",
      demo: "https://magical-background-ai.vercel.app/",
      image: fundoMagicoImg,
},
    {
      title: "Entrelinhas",
      descKey: "proj_entrelinhas_desc",
      tags: ["JavaScript", "HTML", "CSS", "Quiz"],
      repo: "https://github.com/leo-gouvea/entrelinhas-quiz",
      demo: "https://leo-gouvea.github.io/entrelinhas-quiz/",
      image: entrelinhasImg,
    },
  ],
  data: [
    {
    title: "Customer Shopping Behavior Analysis",
    descKey: "proj_customer_desc",
    tags: ["Python", "SQL", "PostgreSQL", "Power BI", "Pandas"],
    repo: "https://github.com/leo-gouvea/customer-behavior-data-analysis",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiY2UzNWIyZmMtNzJhMS00YWQwLWI4OWEtMGM3OGIzNDI4NmJhIiwidCI6Ijg4ZDAwMzRjLTViNDctNGNkNy1iOTU2LTk0NjdlODY2MjM3NyJ9&embedImagePlaceholder=true",
    image: customerAnalysisImg,
    },
    {
      title: "Dashboard Financeiro",
      descKey: "proj_dash_fin_desc",
      tags: ["Power BI", "DAX", "Cash Flow"],
      demo: "https://app.powerbi.com/view?r=eyJrIjoiMjg5MzJmMjgtZTg0My00MGMyLWEyOTctNTliMmI2YjZkM2VhIiwidCI6Ijg4ZDAwMzRjLTViNDctNGNkNy1iOTU2LTk0NjdlODY2MjM3NyJ9",
      image: dashboardFinanceiroImg,
    },
    {
      title: "Dashboard Logística & Transportes",
      descKey: "proj_dash_log_desc",
      tags: ["Power BI", "DAX", "KPI", "Logistics"],
      demo: "https://app.powerbi.com/view?r=eyJrIjoiNTc5MTEwZWYtNTgwOC00MTllLTkxMTgtMGY3MDc4NDc5Y2ZhIiwidCI6Ijg4ZDAwMzRjLTViNDctNGNkNy1iOTU2LTk0NjdlODY2MjM3NyJ9",
      image: dashboardLogisticaImg,
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
  logo: string;
  descKey?: string;
};

export const education: EducationItem[] = [
  { titleKey: "edu_ads_title",   orgKey: "edu_ads_org",   date: "Feb 2025 – Dec 2026", logo: fsaLogo },
  { titleKey: "edu_prati_title", orgKey: "edu_prati_org", date: "Apr 2025 – Nov 2025", logo: pratiLogo },
  { titleKey: "edu_etec_title",  orgKey: "edu_etec_org",  date: "Feb 2022 – Dec 2024", logo: etecLogo },
  { titleKey: "edu_proa_title",  orgKey: "edu_proa_org",  date: "Sep 2024 – Nov 2024", descKey: "edu_proa_desc", logo: proaLogo },
  { titleKey: "edu_wizard_title",orgKey: "edu_wizard_org",date: "Feb 2022 – Dec 2023", logo: wizardLogo },
];

/* =============================================================
   EXPERIENCE — same pattern as education.
   `descKey` text supports multi-line bullets (split on `\n`).
   ============================================================= */
export type ExperienceItem = {
  roleKey: string;
  orgKey: string;
  descKey: string;
  logo: string;
};

export const experience: ExperienceItem[] = [
  {
    roleKey: "exp_cb_role",
    orgKey: "exp_cb_org",
    descKey: "exp_cb_desc",
    logo: casasbahiaLogo,
  },
  {
    roleKey: "exp_mesc_role",
    orgKey: "exp_mesc_org",
    descKey: "exp_mesc_desc",
    logo: clubemescLogo,
  },
  {
    roleKey: "exp_cafe_role",
    orgKey: "exp_cafe_org",
    descKey: "exp_cafe_desc",
    logo: cafezinhoLogo,
  },
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
