/* =============================================================
 * SITE CONTENT — single source of truth.
 * Every editable text/link/project lives here.
 * Strings shaped as { en, pt } are translated; pick with item[lang].
 * ============================================================= */

export type Lang = "en" | "pt";
export type TText = { en: string; pt: string };

/* ---------- Identity & external links ---------- */
export const SITE = {
  name: "Leonardo Gouvea",
  fullName: "Leonardo José Alves Gouvea",
  initials: "LG",
  year: 2026,
  links: {
    github: "https://github.com/leo-gouvea",
    linkedin: "https://linkedin.com/in/leonardo-gouvea-ti/",
    email: "leonardo.j.gouvea@outlook.com",
    phone: "+55 (11) 94268-2040",
    phoneHref: "tel:+5511942682040",
  },
};

/* ---------- Static UI copy (per language) ---------- */
export const COPY = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Portfolio · 2026",
      role: "Full-Stack Developer & Data Analyst",
      lede: "Building production-grade web systems, AI-driven automations and decision-ready dashboards.",
      location: "São Bernardo do Campo · Brazil",
      ctaDev: "See dev projects",
      ctaData: "See data projects",
    },
    about: {
      heading: "About me",
      label: "Profile",
      body:
        "Full-stack developer and automation engineer with hands-on experience in React, Python, Java, SQL and AI-powered automation with n8n and LLMs. Currently expanding into data analysis and Power BI. Interned at Cafezinho delivering a full automation pipeline in production. Working at Grupo Casas Bahia in logistics operations. Studying Systems Analysis & Development at FSA. C1 Advanced English.",
    },
    skills: {
      heading: "Skills",
      devTitle: "Development",
      dataTitle: "Data & BI",
    },
    projects: {
      heading: "Projects",
      tabDev: "Dev",
      tabData: "Data & Analytics",
      viewRepo: "View repo",
      liveDemo: "Live demo",
      openDashboard: "Open dashboard",
      moreSoon: "More coming soon — currently learning.",
    },
    education: { heading: "Education" },
    experience: { heading: "Experience" },
    contact: {
      heading: "Contact",
      titleLead: "Let's",
      titleAccent: "build",
      titleTail: "something.",
      lead: "Open to collaborations, freelance and full-time roles.",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
    footer: `Built by Leonardo José Alves Gouvea · 2026`,
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      education: "Formação",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Portfólio · 2026",
      role: "Desenvolvedor Full-Stack & Analista de Dados",
      lede: "Construindo sistemas web de produção, automações com IA e dashboards prontos para decisão.",
      location: "São Bernardo do Campo · Brasil",
      ctaDev: "Ver projetos dev",
      ctaData: "Ver projetos de dados",
    },
    about: {
      heading: "Sobre mim",
      label: "Perfil",
      body:
        "Desenvolvedor full-stack e engenheiro de automação com experiência prática em React, Python, Java, SQL e automações com IA usando n8n e LLMs. Expandindo atualmente para análise de dados e Power BI. Estagiou no Cafezinho entregando um pipeline completo de automação em produção. Atua no Grupo Casas Bahia em operações logísticas. Cursando Análise e Desenvolvimento de Sistemas na FSA. Inglês C1 Avançado.",
    },
    skills: {
      heading: "Habilidades",
      devTitle: "Desenvolvimento",
      dataTitle: "Dados & BI",
    },
    projects: {
      heading: "Projetos",
      tabDev: "Dev",
      tabData: "Dados & Analytics",
      viewRepo: "Ver repositório",
      liveDemo: "Demo ao vivo",
      openDashboard: "Abrir dashboard",
      moreSoon: "Mais em breve — aprendendo agora.",
    },
    education: { heading: "Formação" },
    experience: { heading: "Experiência" },
    contact: {
      heading: "Contato",
      titleLead: "Vamos",
      titleAccent: "construir",
      titleTail: "algo.",
      lead: "Aberto a colaborações, freelas e vagas full-time.",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
    },
    footer: `Feito por Leonardo José Alves Gouvea · 2026`,
  },
};

/* ---------- Skill chips ---------- */
export const SKILLS = {
  dev: ["React", "JavaScript", "Python", "Java", "PHP", "Node.js", "SQL", "n8n", "REST APIs"],
  data: ["Power BI", "DAX", "Excel Advanced", "ERP TOTVS RM"],
};

/* ---------- Projects ---------- */
export type Project = {
  title: string;
  desc: TText;
  tags: string[];
  repo?: string;
  demo?: string;
  metric?: TText;
};

export const DEV_PROJECTS: Project[] = [
  {
    title: "Transportadora & Logística CRUD",
    desc: {
      en: "Full-stack web system with admin auth, multi-entity management, versioned SQL schema and UML documentation.",
      pt: "Sistema web full-stack com autenticação de admin, gestão multi-entidade, schema SQL versionado e documentação UML.",
    },
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "https://github.com/leo-gouvea/transportadora-logistica-crud",
  },
  {
    title: "Busca Filmes",
    desc: {
      en: "React SPA with Context API, React Router and async REST API consumption. Deployed to production.",
      pt: "SPA em React com Context API, React Router e consumo assíncrono de API REST. Em produção.",
    },
    tags: ["React", "Context API", "REST API"],
    repo: "https://github.com/leo-gouvea",
  },
  {
    title: "Java OOP Exercises",
    desc: {
      en: "Practical OOP exercises covering encapsulation, inheritance, polymorphism and interfaces.",
      pt: "Exercícios práticos de POO cobrindo encapsulamento, herança, polimorfismo e interfaces.",
    },
    tags: ["Java", "OOP"],
    repo: "https://github.com/leo-gouvea",
  },
];

export const DATA_PROJECTS: Project[] = [
  {
    title: "Dashboard Financeiro",
    desc: {
      en: "Power BI dashboard for personal/business cash flow. KPI cards, combo chart by month/type, donut by category, drilldown by category → subcategory → supplier, full transaction table.",
      pt: "Dashboard Power BI para fluxo de caixa pessoal/empresarial. Cards de KPI, gráfico combo por mês/tipo, donut por categoria, drilldown por categoria → subcategoria → fornecedor, tabela completa de transações.",
    },
    tags: ["Power BI", "DAX", "Cash Flow", "Financial Analysis"],
    demo:
      "https://app.powerbi.com/groups/me/reports/8c7c3bcf-e798-4605-88b1-464b9fcf0f70/dc440fe2840368d246e1?experience=power-bi",
  },
  {
    title: "Dashboard Logística & Transportes",
    desc: {
      en: "Power BI dashboard tracking OTD (On Time Delivery), delivery deviation ranking, carrier performance and root cause insights across 1,755 deliveries in 2025.",
      pt: "Dashboard Power BI com OTD (On Time Delivery), ranking de desvios, performance de transportadoras e causa-raiz em 1.755 entregas em 2025.",
    },
    tags: ["Power BI", "DAX", "KPI", "Logistics"],
    demo:
      "https://app.powerbi.com/groups/me/reports/2311d3dd-398f-4cc3-ba90-5f29be68628a/e8236f7c445a855810bc?experience=power-bi",
    metric: { en: "1,755 deliveries analyzed", pt: "1.755 entregas analisadas" },
  },
];

/* ---------- Education ---------- */
export type EduItem = { title: TText; org: TText; status: TText };

export const EDUCATION: EduItem[] = [
  {
    title: { en: "Systems Analysis & Development", pt: "Análise e Desenvolvimento de Sistemas" },
    org: { en: "FSA — Fundação Santo André", pt: "FSA — Fundação Santo André" },
    status: { en: "In progress", pt: "Em andamento" },
  },
  {
    title: { en: "English — C1 Advanced", pt: "Inglês — C1 Avançado" },
    org: { en: "Cambridge level", pt: "Nível Cambridge" },
    status: { en: "C1", pt: "C1" },
  },
];

/* ---------- Experience ---------- */
export type ExpItem = { role: TText; org: TText; desc: TText };

export const EXPERIENCE: ExpItem[] = [
  {
    role: { en: "Logistics Operations", pt: "Operações Logísticas" },
    org: { en: "Grupo Casas Bahia", pt: "Grupo Casas Bahia" },
    desc: {
      en: "Logistics ops and delivery performance analysis.",
      pt: "Operações logísticas e análise de performance de entregas.",
    },
  },
  {
    role: { en: "Automation Intern", pt: "Estagiário de Automação" },
    org: { en: "Cafezinho", pt: "Cafezinho" },
    desc: {
      en: "Delivered a full automation pipeline in production using n8n + LLMs.",
      pt: "Entreguei um pipeline completo de automação em produção com n8n + LLMs.",
    },
  },
];
