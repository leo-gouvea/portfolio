import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/* =============================================================
   PALETTE / THEME PROVIDER
   The actual colors live in src/styles.css under
   :root[data-theme="..."]. This file only switches which one
   is active and persists the choice in localStorage.
   ============================================================= */

export type Theme = "p3" | "p4" | "p5" | "p6";

export const THEMES: { id: Theme; label: string; swatch: string }[] = [
  { id: "p3", label: "P3",  swatch: "#5ec8ff" },
  { id: "p4", label: "P4",  swatch: "#ffd400" },
  { id: "p5", label: "P5",  swatch: "#e1352b" },
  { id: "p6", label: "P6",  swatch: "#3ddc84" },
];

type Ctx = { theme: Theme; setTheme: (t: Theme) => void };
const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("p3");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    if (saved && ["p3", "p4", "p5", "p6"].includes(saved)) setThemeState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (typeof window !== "undefined") localStorage.setItem("theme", t);
  };

  return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}