import { useLang } from "@/lib/i18n";
import { profile } from "@/data/site";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

/* Top navigation bar.
   - Section anchor links are derived from `links` below.
   - Logo initials come from src/data/site.ts (profile.initials).
   - Language and palette switchers are separate components. */
export function Navbar() {
  const { t } = useLang();
  /* To add a nav link: append { href, key } here and add the matching
     key to BOTH dicts in src/lib/i18n.tsx. */
  const links = [
    { href: "#about",      key: "nav_about" as const },
    { href: "#projects",   key: "nav_projects" as const },
    { href: "#skills",     key: "nav_skills" as const },
    { href: "#education",  key: "nav_education" as const },
    { href: "#experience", key: "nav_experience" as const },
    { href: "#languages",  key: "nav_languages" as const },
    { href: "#contact",    key: "nav_contact" as const },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:var(--surface-2)]/80 border-b border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">
        <a href="#top" className="flex items-center gap-3 shrink-0" aria-label={profile.shortName}>
          <span className="grid place-items-center w-10 h-10 skew-tab bg-[color:var(--secondary)]">
            <span className="skew-tab-inner font-display text-[color:var(--bg)] text-xl leading-none">
              {profile.initials}
            </span>
          </span>
          <span className="hidden xl:block font-display tracking-[0.25em] text-[color:var(--primary)] text-[11px] truncate">
            {profile.shortName.toUpperCase()}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center justify-center gap-3 xl:gap-5.5 min-w-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display tracking-[0.18em] text-[11px] uppercase text-[color:var(--text)] opacity-80 hover:opacity-100 hover:text-[color:var(--primary)] transition-colors whitespace-nowrap"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}