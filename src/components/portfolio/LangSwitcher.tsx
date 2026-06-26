import { useLang, type Lang } from "@/lib/i18n";

/* Tiny inline SVG flags so we don't ship image assets. */
function FlagUS() {
  return (
    <svg viewBox="0 0 60 40" className="w-7 h-5" aria-hidden="true">
      <rect width="60" height="40" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((i) => (
        <rect key={i} y={i * 4} width="60" height="4" fill="#fff" />
      ))}
      <rect width="26" height="20" fill="#3c3b6e" />
    </svg>
  );
}
function FlagBR() {
  return (
    <svg viewBox="0 0 60 40" className="w-7 h-5" aria-hidden="true">
      <rect width="60" height="40" fill="#009b3a" />
      <polygon points="30,4 56,20 30,36 4,20" fill="#fedf00" />
      <circle cx="30" cy="20" r="7" fill="#002776" />
    </svg>
  );
}

export function LangSwitcher() {
  const { lang, setLang, t } = useLang();
  const langs: { id: Lang; label: string; flag: JSX.Element }[] = [
    { id: "en", label: "English",   flag: <FlagUS /> },
    { id: "pt", label: "Português", flag: <FlagBR /> },
  ];
  return (
    <div role="group" aria-label={t("lang_label")} className="flex items-center gap-1 border border-[color:var(--border)] p-0.5">
      {langs.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => setLang(l.id)}
          aria-label={l.label}
          aria-pressed={lang === l.id}
          className={`p-1 transition-all ${
            lang === l.id ? "ring-2 ring-[color:var(--secondary)]" : "opacity-60 hover:opacity-100"
          }`}
        >
          {l.flag}
        </button>
      ))}
    </div>
  );
}