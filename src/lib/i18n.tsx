import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  nav_about: "ABOUT",
  nav_projects: "PROJECTS",
  nav_skills: "SKILLS",
  nav_education: "EDUCATION",
  nav_experience: "EXPERIENCE",
  nav_contact: "CONTACT",
  tab_dev: "DEV",
  tab_data: "DATA & ANALYTICS",
  hero_title: "Full-Stack Developer & Data Analyst",
  hero_sub: "from code to insight",
  hero_cta_dev: "SEE DEV PROJECTS",
  hero_cta_data: "SEE DATA PROJECTS",
  hero_location: "São Bernardo do Campo · Brazil",
  hero_eyebrow: "PORTFOLIO · 2026",
  hero_lede: "Building production-grade web systems, AI-driven automations and decision-ready dashboards.",
  section_projects: "PROJECTS",
  section_about: "ABOUT ME",
  section_skills: "SKILLS",
  section_education: "EDUCATION",
  section_experience: "EXPERIENCE",
  section_contact: "CONTACT",
  about_body:
    "Full-stack developer and automation engineer with hands-on experience in React, Python, Java, SQL and AI-powered automation with n8n and LLMs. Currently expanding into data analysis and Power BI. Interned at Cafezinho delivering a full automation pipeline in production. Working at Grupo Casas Bahia in logistics operations. Studying Systems Analysis & Development at FSA. C1 Advanced English.",
  skills_dev: "DEVELOPMENT",
  skills_data: "DATA & BI",
  edu_title: "Systems Analysis & Development",
  edu_school: "FSA — Fundação Santo André",
  edu_status: "In progress",
  edu_eng_title: "English — C1 Advanced",
  edu_eng_school: "Cambridge Level",
  exp_1_role: "Logistics Operations",
  exp_1_org: "Grupo Casas Bahia",
  exp_1_desc: "Logistics ops and delivery performance analysis.",
  exp_2_role: "Automation Intern",
  exp_2_org: "Cafezinho",
  exp_2_desc: "Delivered a full automation pipeline in production using n8n + LLMs.",
  contact_lead: "Open to collaborations, freelance and full-time roles.",
  view_repo: "VIEW REPO",
  live_demo: "LIVE DEMO",
  open_dashboard: "OPEN DASHBOARD",
  more_soon: "More coming soon — currently learning.",
  metric_deliveries: "1,755 deliveries analyzed",
  footer: "Built by Leonardo José Alves Gouvea · 2026",
};

const pt: Dict = {
  nav_about: "SOBRE",
  nav_projects: "PROJETOS",
  nav_skills: "SKILLS",
  nav_education: "FORMAÇÃO",
  nav_experience: "EXPERIÊNCIA",
  nav_contact: "CONTATO",
  tab_dev: "DEV",
  tab_data: "DADOS & ANALYTICS",
  hero_title: "Desenvolvedor Full-Stack & Analista de Dados",
  hero_sub: "do código ao insight",
  hero_cta_dev: "VER PROJETOS DEV",
  hero_cta_data: "VER PROJETOS DE DADOS",
  hero_location: "São Bernardo do Campo · Brasil",
  hero_eyebrow: "PORTFÓLIO · 2026",
  hero_lede: "Construindo sistemas web de produção, automações com IA e dashboards prontos para decisão.",
  section_projects: "PROJETOS",
  section_about: "SOBRE MIM",
  section_skills: "HABILIDADES",
  section_education: "FORMAÇÃO",
  section_experience: "EXPERIÊNCIA",
  section_contact: "CONTATO",
  about_body:
    "Desenvolvedor full-stack e engenheiro de automação com experiência prática em React, Python, Java, SQL e automações com IA usando n8n e LLMs. Expandindo atualmente para análise de dados e Power BI. Estagiou no Cafezinho entregando um pipeline completo de automação em produção. Atua no Grupo Casas Bahia em operações logísticas. Cursando Análise e Desenvolvimento de Sistemas na FSA. Inglês C1 Avançado.",
  skills_dev: "DESENVOLVIMENTO",
  skills_data: "DADOS & BI",
  edu_title: "Análise e Desenvolvimento de Sistemas",
  edu_school: "FSA — Fundação Santo André",
  edu_status: "Em andamento",
  edu_eng_title: "Inglês — C1 Avançado",
  edu_eng_school: "Nível Cambridge",
  exp_1_role: "Operações Logísticas",
  exp_1_org: "Grupo Casas Bahia",
  exp_1_desc: "Operações logísticas e análise de performance de entregas.",
  exp_2_role: "Estagiário de Automação",
  exp_2_org: "Cafezinho",
  exp_2_desc: "Entreguei um pipeline completo de automação em produção com n8n + LLMs.",
  contact_lead: "Aberto a colaborações, freelas e vagas full-time.",
  view_repo: "VER REPO",
  live_demo: "DEMO AO VIVO",
  open_dashboard: "ABRIR DASHBOARD",
  more_soon: "Mais em breve — aprendendo agora.",
  metric_deliveries: "1.755 entregas analisadas",
  footer: "Feito por Leonardo José Alves Gouvea · 2026",
};

const dicts: Record<Lang, Dict> = { en, pt };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof en) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "pt") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof en) => dicts[lang][k] ?? String(k);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}