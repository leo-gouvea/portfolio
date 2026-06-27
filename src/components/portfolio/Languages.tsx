import { useLang } from "@/lib/i18n";
import { languages } from "@/data/site";
import { SectionHeader } from "./ui";

/* Languages section.
   - Items: src/data/site.ts -> languages
   - Translated names / levels: src/lib/i18n.tsx (lang_* keys)
   - Optional `badgeUrl` renders an external link (e.g. EFSET / Cambridge).
   - To add a new language: append to `languages` in src/data/site.ts and
     add the matching `lang_*` keys to both EN and PT dicts. */
export function Languages() {
  const { t } = useLang();
  return (
    <section id="languages" aria-labelledby="languages-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="05" label={t("section_languages")} id="languages-title" />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {languages.map((l) => (
            <li key={l.nameKey} className="panel p-4 flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg">{t(l.nameKey as never)}</h3>
                <span className="font-mono text-xs text-[color:var(--secondary)] shrink-0">
                  {t(l.levelKey as never)}
                </span>
              </div>
              {l.badgeUrl && l.badgeLabelKey && (
                /* Reserved area for the EFSET / certification badge.
                   Drop an <img src={...} /> here to embed the visual badge. */
                <a
                  href={l.badgeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block border border-dashed border-[color:var(--border)] p-3 text-center font-mono text-[11px] tracking-widest text-[color:var(--primary)] hover:bg-[color:var(--surface-2)] transition-colors"
                >
                  {t(l.badgeLabelKey as never)}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}