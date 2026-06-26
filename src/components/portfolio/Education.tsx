import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./ui";

/* Education list. Text comes from i18n (edu_* keys). */
export function Education() {
  const { t } = useLang();
  const items = [
    { title: t("edu_title"),     org: t("edu_school"),     status: t("edu_status") },
    { title: t("edu_eng_title"), org: t("edu_eng_school"), status: "C1" },
  ];
  return (
    <section id="education" aria-labelledby="education-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="03" label={t("section_education")} id="education-title" />
        <ul className="space-y-3">
          {items.map((e) => (
            <li key={e.title} className="panel p-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <h3 className="font-display text-lg truncate">{e.title}</h3>
                <p className="font-mono text-xs opacity-60 truncate">{e.org}</p>
              </div>
              <span className="font-mono text-xs text-[color:var(--secondary)] shrink-0">{e.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}