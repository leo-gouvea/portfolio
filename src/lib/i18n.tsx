import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { COPY, type Lang, type TText } from "@/components/portfolio/content";

export type { Lang } from "@/components/portfolio/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: typeof COPY["en"];
  /** Pick the right side of a { en, pt } pair. */
  tr: (text: TText) => string;
};

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

  const value: Ctx = {
    lang,
    setLang,
    c: COPY[lang],
    tr: (text) => text[lang],
  };
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}