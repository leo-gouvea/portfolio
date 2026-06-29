/* =============================================================
   FOOTER
   -------------------------------------------------------------
   Single-line site footer.
   - Copy: src/lib/i18n.tsx -> `footer` key (EN & PT)
   ============================================================= */

import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[color:var(--border)] py-8 px-4 text-center font-mono text-xs opacity-70">
      <div className="max-w-7xl mx-auto">{t("footer")}</div>
    </footer>
  );
}