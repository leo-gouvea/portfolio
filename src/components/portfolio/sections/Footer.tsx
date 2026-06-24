import { useLang } from "@/lib/i18n";

export function Footer() {
  const { c } = useLang();
  return (
    <footer className="border-t border-[var(--accent-red)]/40 bg-black py-8 px-4 text-center font-mono text-xs text-[var(--lavender)]/60">
      <div className="max-w-7xl mx-auto">{c.footer}</div>
    </footer>
  );
}