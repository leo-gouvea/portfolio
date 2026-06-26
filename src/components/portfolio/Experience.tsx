import { useLang } from "@/lib/i18n";
import { SectionHeader } from "./ui";

/* Experience list. Text comes from i18n (exp_* keys). */
export function Experience() {
  const { t } = useLang();
  const items = [
    { role: t("exp_1_role"), org: t("exp_1_org"), desc: t("exp_1_desc") },
    { role: t("exp_2_role"), org: t("exp_2_org"), desc: t("exp_2_desc") },
  ];
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="04" label={t("section_experience")} id="experience-title" />
        <ul className="space-y-3">
          {items.map((e) => (
            <li key={e.role} className="panel p-4">
              <h3 className="font-display text-lg">
                {e.role} <span className="text-[color:var(--primary)]">@ {e.org}</span>
              </h3>
              <p className="text-sm opacity-80 mt-1">{e.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}