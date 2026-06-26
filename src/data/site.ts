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
      repo: "https://github.com/leo-gouvea",
    },
    {
      title: "Java OOP Exercises",
      desc: "Practical OOP exercises covering encapsulation, inheritance, polymorphism and interfaces.",
      tags: ["Java", "OOP"],
      repo: "https://github.com/leo-gouvea",
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