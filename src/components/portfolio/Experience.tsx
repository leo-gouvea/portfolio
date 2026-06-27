import { useLang } from "@/lib/i18n";
import { experience } from "@/data/site";
import { SectionHeader } from "./ui";

/* Experience list.
   - Items: src/data/site.ts -> experience
   - Translated text: src/lib/i18n.tsx (exp_* keys).
   - Dates are intentionally omitted per current preference.
   - Multi-line descriptions are split on `\n` and rendered as
     intro paragraph + bullet list. */
export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="04" label={t("section_experience")} id="experience-title" />
        <ul className="space-y-3">
          {experience.map((e) => {
            const lines = t(e.descKey as never).split("\n").filter(Boolean);
            const intro = lines.find((l) => !l.startsWith("•"));
            const bullets = lines.filter((l) => l.startsWith("•")).map((l) => l.replace(/^•\s*/, ""));
            return (
              <li key={e.roleKey} className="panel p-4">
                <h3 className="font-display text-lg">
                  {t(e.roleKey as never)}{" "}
                  <span className="text-[color:var(--primary)]">@ {t(e.orgKey as never)}</span>
                </h3>
                {intro && <p className="text-sm opacity-80 mt-2 leading-relaxed">{intro}</p>}
                {bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-sm opacity-85">
                    {bullets.map((b, i) => (
                      <li
                        key={i}
                        className="pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[color:var(--secondary)]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}