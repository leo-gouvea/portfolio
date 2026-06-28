import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = Record<string, string>;

const en: Dict = {
  nav_about: "ABOUT",
  nav_projects: "PROJECTS",
  nav_skills: "SKILLS",
  nav_education: "EDUCATION",
  nav_experience: "EXPERIENCE",
  nav_languages: "LANGUAGES",
  nav_contact: "CONTACT",
  tab_dev: "DEV",
  tab_data: "DATA",
  hero_title: "Full-Stack Developer & Data Analyst",
  hero_sub: "from code to insight.",
  hero_cta_dev: "SEE DEV PROJECTS",
  hero_cta_data: "SEE DATA PROJECTS",
  hero_location: "São Bernardo do Campo · Brazil",
  hero_bg_main: "WHAT A BEAUTIFUL WORLD",
  hero_bg_alt: "CARPE DIEM",
  section_projects: "PROJECTS",
  section_about: "ABOUT ME",
  section_skills: "SKILLS",
  section_education: "EDUCATION",
  section_experience: "EXPERIENCE",
  section_languages: "LANGUAGES",
  section_contact: "CONTACT",
  about_body:
    "Full-stack developer and automation engineer with hands-on experience in React, Python, Java, SQL, PHP and AI-powered automation with n8n and LLMs. Currently expanding into data analysis and Power BI. Interned at Cafezinho delivering a full automation pipeline in production. Working at Grupo Casas Bahia in logistics operations. Studying Systems Analysis & Development at FSA. C1 Advanced English.",
  about_focus_label: "ANALYSIS TOOLS",
  about_focus: "Data Analytics · Power BI · DAX · ERP TOTVS RM",
  about_stack_label: "CORE STACK",
  about_stack: "React · Python · Java · SQL · n8n · LLMs",
  about_status_label: "STATUS",
  about_status: "Open to opportunities — remote, hybrid (SP / ABC) and international.",
  skills_dev: "DEVELOPMENT",
  skills_data: "DATA & ANALYTICS",
  /* Education entries — keys referenced from src/data/site.ts (education) */
  edu_ads_title: "Systems Analysis & Development (Technologist)",
  edu_ads_org: "Centro Universitário Fundação Santo André",
  edu_prati_title: "Dev Fullstack Jr.",
  edu_prati_org: "+praTI",
  edu_etec_title: "Technical High-School Diploma — Electronics",
  edu_etec_org: "Etec Lauro Gomes",
  edu_proa_title: "Professional Training Program",
  edu_proa_org: "Instituto PROA",
  edu_proa_desc:
    "100h online program built on four pillars: Self-awareness, Professional Project, Logical Reasoning and Communication.",
  edu_wizard_title: "English Language & Literature",
  edu_wizard_org: "Wizard by Pearson",
  /* Experience entries — keys referenced from src/data/site.ts (experience).
     descKey strings use `\n` to split bullets. */
  exp_cb_role: "Logistics Assistant",
  exp_cb_org: "Grupo Casas Bahia",
  exp_cb_desc:
    "High-volume operation with intensive use of an ERP system, ensuring full asset traceability and strict deadlines at one of Brazil's largest retail chains.\n• Logged ~120 inbound/outbound movements per shift in the ERP with 100% traceability — practice directly applicable to Systems Analyst and ERP User Support roles.\n• Audited and organized internal demands within tight SLAs in a high-pressure environment.\n• Maintained constant communication with cross-functional teams, sharpening mediation and fast information-alignment skills.",
  exp_mesc_role: "Administrative Assistant",
  exp_mesc_org: "Clube Mesc",
  exp_mesc_desc:
    "• Built and organized purchase-request tracking reports in Excel and Power BI, supporting decision-making with structured data and clear visualizations.\n• Managed physical and digital documents, ensuring standardization and easy retrieval — real-world data control in an administrative setting.\n• Followed purchase flows end-to-end, developing an analytical mindset focused on operational efficiency and process organization.",
  exp_cafe_role: "Automation Intern",
  exp_cafe_org: "Cafezinho",
  exp_cafe_desc:
    "End-to-end automation in a real production environment using n8n and LLMs.\n• Designed and shipped an automation pipeline that replaced repetitive manual flows, cutting hands-on time on the affected process by an estimated ~70%.\n• Integrated REST APIs, LLM prompts and webhook triggers into a single n8n workflow running in production.\n• Documented the pipeline and handover so the operations team could maintain it independently.",
  /* Languages section */
  lang_pt_name: "Portuguese",
  lang_pt_level: "Native",
  lang_en_name: "English",
  lang_en_level: "C1 Advanced",
  lang_en_badge: "VIEW EFSET CERTIFICATE",
  lang_es_name: "Spanish",
  lang_es_level: "Basic",
  /* Contact */
  contact_whatsapp: "WHATSAPP",
  view_repo: "VIEW REPO",
  live_demo: "LIVE DEMO",
  open_dashboard: "OPEN DASHBOARD",
  more_soon: "More coming soon — currently learning.",
  metric_deliveries: "1,755 deliveries analyzed",
  footer: "Designed & Built by Leonardo Gouvea · React · TypeScript · 2026",
  contact_email: "EMAIL",
  contact_phone: "PHONE",
  theme_label: "Theme",
  lang_label: "Language",
  project_preview_placeholder: "PREVIEW COMING SOON",
};

const pt: Dict = {
  nav_about: "SOBRE",
  nav_projects: "PROJETOS",
  nav_skills: "SKILLS",
  nav_education: "FORMAÇÃO",
  nav_experience: "EXPERIÊNCIA",
  nav_languages: "IDIOMAS",
  nav_contact: "CONTATO",
  tab_dev: "DEV",
  tab_data: "DADOS",
  hero_title: "Desenvolvedor Full-Stack & Analista de Dados",
  hero_sub: "do código à análise.",
  hero_cta_dev: "VER PROJETOS DEV",
  hero_cta_data: "VER PROJETOS DE DADOS",
  hero_location: "São Bernardo do Campo · Brasil",
  hero_bg_main: "WHAT A BEAUTIFUL WORLD",
  hero_bg_alt: "CARPE DIEM",
  section_projects: "PROJETOS",
  section_about: "SOBRE MIM",
  section_skills: "HABILIDADES",
  section_education: "FORMAÇÃO",
  section_experience: "EXPERIÊNCIA",
  section_languages: "IDIOMAS",
  section_contact: "CONTATO",
  about_body:
    "Desenvolvedor full-stack e engenheiro de automação com experiência prática em React, Python, Java, SQL e automações com IA usando n8n e LLMs. Expandindo atualmente para análise de dados e Power BI. Estagiou no Cafezinho entregando um pipeline completo de automação em produção. Atua no Grupo Casas Bahia em operações logísticas. Cursando Análise e Desenvolvimento de Sistemas na FSA. Inglês C1 Avançado.",
  about_focus_label: "FERRAMENTAS DE ANÁLISE",
  about_focus: "Análise de Dados · Power BI · DAX · ERP TOTVS RM",
  about_stack_label: "STACK PRINCIPAL",
  about_stack: "React · Python · Java · SQL · n8n · LLMs",
  about_status_label: "STATUS",
  about_status: "Aberto a oportunidades remotas, híbridas e presenciais. Tenho preferência por modelos remoto ou híbrido, especialmente em São Paulo e região do ABC, mas permaneço disponível para discutir diferentes formatos de trabalho.",
  skills_dev: "DESENVOLVIMENTO",
  skills_data: "DADOS & ANALYTICS",
  edu_ads_title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  edu_ads_org: "Centro Universitário Fundação Santo André",
  edu_prati_title: "Dev Fullstack Jr.",
  edu_prati_org: "+praTI",
  edu_etec_title: "Curso Técnico Integrado — Eletrônica",
  edu_etec_org: "Etec Lauro Gomes",
  edu_proa_title: "Formação Profissionalizante",
  edu_proa_org: "Instituto PROA",
  edu_proa_desc:
    "Programa online de 100h em quatro pilares: Autoconhecimento, Projeto Profissional, Raciocínio Lógico e Comunicação.",
  edu_wizard_title: "Língua e Literatura Inglesa",
  edu_wizard_org: "Wizard by Pearson",
  exp_cb_role: "Auxiliar em Logística",
  exp_cb_org: "Grupo Casas Bahia",
  exp_cb_desc:
    "Operação em ambiente de alto volume com uso intensivo de sistema ERP, garantindo rastreabilidade completa de ativos e cumprimento rigoroso de prazos em uma das maiores redes de varejo do Brasil.\n• Registrei cerca de 120 entradas e saídas por turno no sistema ERP com 100% de rastreabilidade — base prática diretamente aplicável a funções de Analista de Sistemas e Suporte a Usuários de ERP.\n• Conferi, organizei e acompanhei demandas internas dentro de prazos estabelecidos em ambiente de alta pressão operacional.\n• Mantive comunicação constante com equipes multidisciplinares, desenvolvendo habilidade de mediação e alinhamento rápido de informações.",
  exp_mesc_role: "Auxiliar Administrativo",
  exp_mesc_org: "Clube Mesc",
  exp_mesc_desc:
    "• Elaborei e organizei relatórios de acompanhamento de solicitações de compras com Excel e Power BI, apoiando a tomada de decisão com dados estruturados e visualizações claras.\n• Gerenciei documentos físicos e digitais garantindo padronização e fácil acesso às informações — controle e estruturação de dados em ambiente administrativo real.\n• Controlei pedidos e acompanhei fluxos de compras, desenvolvendo visão analítica voltada à eficiência operacional e organização de processos administrativos.",
  exp_cafe_role: "Estagiário de Automação",
  exp_cafe_org: "Cafezinho",
  exp_cafe_desc:
    "Automação de ponta a ponta em ambiente real de produção usando n8n e LLMs.\n• Projetei e entreguei um pipeline de automação que substituiu fluxos manuais repetitivos, reduzindo em cerca de 70% o tempo manual no processo afetado.\n• Integrei APIs REST, prompts de LLM e gatilhos via webhook em um único workflow n8n rodando em produção.\n• Documentei o pipeline e o handover para que o time de operações pudesse mantê-lo de forma independente.",
  lang_pt_name: "Português",
  lang_pt_level: "Nativo",
  lang_en_name: "Inglês",
  lang_en_level: "C1 Avançado",
  lang_en_badge: "VER CERTIFICADO EFSET",
  lang_es_name: "Espanhol",
  lang_es_level: "Básico",
  contact_whatsapp: "WHATSAPP",
  view_repo: "VER REPO",
  live_demo: "DEMO AO VIVO",
  open_dashboard: "ABRIR DASHBOARD",
  more_soon: "Mais em breve — aprendendo agora.",
  metric_deliveries: "1.755 entregas analisadas",
  footer: "Feito e Designado por Leonardo Gouvea · React · TypeScript · 2026",
  contact_email: "EMAIL",
  contact_phone: "TELEFONE",
  theme_label: "Tema",
  lang_label: "Idioma",
  project_preview_placeholder: "PREVIEW EM BREVE",
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