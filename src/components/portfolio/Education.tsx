import { useLang } from "@/lib/i18n";
import { education } from "@/data/site";
import { SectionHeader } from "./ui";

/* Education list.
   - Items + dates: src/data/site.ts -> education
   - Translated titles / orgs / descriptions: src/lib/i18n.tsx (edu_* keys) */
export function Education() {
  const { t } = useLang();
  return (
    <section id="education" aria-labelledby="education-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" label={t("section_education")} id="education-title" />
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.titleKey} className="panel p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-lg">{t(e.titleKey as never)}</h3>
                  <p className="font-mono text-xs opacity-60">{t(e.orgKey as never)}</p>
                </div>
                <span className="font-mono text-xs text-[color:var(--secondary)] shrink-0">
                  {e.date}
                </span>
              </div>
              {e.descKey && (
                <p className="mt-2 text-sm opacity-80 leading-relaxed">
                  {t(e.descKey as never)}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}