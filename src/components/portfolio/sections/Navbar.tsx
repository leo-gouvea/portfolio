import { useLang, type Lang } from "@/lib/i18n";
import { SITE } from "@/components/portfolio/content";
import { FlagBR, FlagUS } from "@/components/portfolio/ui";

export function Navbar() {
  const { c, lang, setLang } = useLang();
  const links = [
    { id: "about", label: c.nav.about },
    { id: "projects", label: c.nav.projects },
    { id: "skills", label: c.nav.skills },
    { id: "education", label: c.nav.education },
    { id: "experience", label: c.nav.experience },
    { id: "contact", label: c.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/70 border-b border-[var(--accent-red)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <span className="relative grid place-items-center w-10 h-10 bg-[var(--accent-red)] skew-tab shadow-[0_0_20px_rgba(255,0,43,0.55)]">
            <span className="skew-tab-inner font-display text-white text-lg leading-none">
              {SITE.initials}
            </span>
          </span>
          <span className="hidden sm:block font-ui tracking-[0.3em] uppercase text-[var(--lavender)] text-sm">
            {SITE.name}
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative px-3 py-1.5 font-ui tracking-[0.22em] uppercase text-xs text-[var(--lavender)]/80 hover:text-white transition-colors after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-[var(--accent-red)] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div
          className="ml-auto lg:ml-2 flex items-center gap-1 border border-[var(--lavender)]/30 p-0.5"
          role="group"
          aria-label="Language"
        >
          {(["en", "pt"] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-label={l === "en" ? "English" : "Português"}
              aria-pressed={lang === l}
              className={`p-1 transition-all ${
                lang === l ? "ring-2 ring-[var(--accent-red)] scale-105" : "opacity-60 hover:opacity-100"
              }`}
            >
              {l === "en" ? <FlagUS className="w-7 h-5" /> : <FlagBR className="w-7 h-5" />}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}