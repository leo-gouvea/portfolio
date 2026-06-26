import { THEMES, useTheme } from "@/lib/theme";
import { useLang } from "@/lib/i18n";

/* Palette switcher: P3 / P4 / P5 / P6.
   Colors and labels are defined in src/lib/theme.tsx (THEMES). */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLang();
  return (
    <div role="group" aria-label={t("theme_label")} className="flex items-center gap-1 border border-[color:var(--border)] p-0.5">
      {THEMES.map((th) => (
        <button
          key={th.id}
          type="button"
          onClick={() => setTheme(th.id)}
          aria-label={`${t("theme_label")} ${th.label}`}
          aria-pressed={theme === th.id}
          title={th.label}
          className={`grid place-items-center w-7 h-7 font-display text-[10px] tracking-widest transition-all ${
            theme === th.id ? "ring-2 ring-[color:var(--secondary)]" : "opacity-70 hover:opacity-100"
          }`}
          style={{ background: th.swatch, color: "#0a0a0a" }}
        >
          {th.label}
        </button>
      ))}
    </div>
  );
}