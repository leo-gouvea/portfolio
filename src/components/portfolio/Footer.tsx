import { useLang } from "@/lib/i18n";

/* Footer. Text comes from i18n key `footer`. */
export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[color:var(--border)] py-8 px-4 text-center font-mono text-xs opacity-70">
      <div className="max-w-7xl mx-auto">{t("footer")}</div>
    </footer>
  );
}