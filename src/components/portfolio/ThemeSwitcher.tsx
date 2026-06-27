import { THEMES, useTheme } from "@/lib/theme";
import { useLang } from "@/lib/i18n";

/* Palette switcher — pure color swatches (no text labels).

   To re-introduce the text labels (P3 / P4 / P5 / P6) inside each
   swatch, swap the empty content for {th.label} below and add back
   a font class. Each `th.label` is defined in src/lib/theme.tsx
   (THEMES) — that's also where you add new themes:

     { id: "p7", label: "P7", swatch: "#ff8800" }

   then create a matching `:root[data-theme="p7"]` block in
   src/styles.css and the new swatch will appear here automatically. */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useLang();
  return (
    <div
      role="group"
      aria-label={t("theme_label")}
      className="flex items-center gap-1 border border-[color:var(--border)] p-0.5"
    >
      {THEMES.map((th) => (
        <button
          key={th.id}
          type="button"
          onClick={() => setTheme(th.id)}
          aria-label={`${t("theme_label")} ${th.label}`}
          aria-pressed={theme === th.id}
          title={th.label}
          className={`block w-5 h-5 transition-all ${
            theme === th.id ? "ring-2 ring-[color:var(--secondary)] scale-110" : "opacity-70 hover:opacity-100"
          }`}
          style={{ background: th.swatch }}
        />
      ))}
    </div>
  );
}