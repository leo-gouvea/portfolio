import { useLang } from "@/lib/i18n";
import { skills } from "@/data/site";
import { SectionHeader } from "./ui";
import { skillIcons } from "./skillIcons";

/* About + Skills.
   - Bio paragraph: i18n key `about_body` (src/lib/i18n.tsx).
   - Skill items:   src/data/site.ts -> skills.dev / skills.data */
export function About() {
  const { t } = useLang();
  const groups = [
    { title: t("skills_dev"), items: skills.dev, tone: "primary" as const },
    { title: t("skills_data"), items: skills.data, tone: "secondary" as const },
  ];

  /* Highlight chips rendered under the bio paragraph so the left
     column doesn't feel empty. Add / remove entries here freely —
     each label/value is an i18n key in src/lib/i18n.tsx. */
  const highlights = [
    { label: t("about_stack_label"), value: t("about_stack"), tone: "secondary" as const },
    { label: t("about_focus_label"), value: t("about_focus"), tone: "primary" as const },
    { label: t("about_status_label"), value: t("about_status"), tone: "primary" as const },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="01" label={t("section_about")} id="about-title" />

        <div className="grid lg:grid-cols-2 gap-6">
          <article className="panel scanlines p-6 flex flex-col gap-5">
            <p className="leading-relaxed text-[15px]">{t("about_body")}</p>
            <ul className="grid gap-3 mt-auto">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="border-l-4 pl-3 py-1 bg-[color:var(--surface-2)]"
                  style={{
                    borderColor: h.tone === "secondary" ? "var(--secondary)" : "var(--primary)",
                  }}
                >
                  <span
                    className="block font-display text-[10px] tracking-[0.25em]"
                    style={{
                      color: h.tone === "secondary" ? "var(--secondary)" : "var(--primary)",
                    }}
                  >
                    {h.label}
                  </span>
                  <span className="block font-mono text-[13px] mt-0.5">{h.value}</span>
                </li>
              ))}
            </ul>
          </article>

          <div id="skills" className="grid sm:grid-cols-2 gap-4">
            {groups.map((g) => (
              <article key={g.title} className="panel p-5">
                <h3
                  className={`skew-tab px-3 py-1 inline-block mb-4 font-display tracking-widest text-sm ${
                    g.tone === "secondary"
                      ? "bg-[color:var(--secondary)] text-[color:var(--bg)]"
                      : "bg-[color:var(--primary)] text-[color:var(--bg)]"
                  }`}
                >
                  <span className="skew-tab-inner block">{g.title}</span>
                </h3>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center justify-between gap-3 border-l-4 px-3 py-1.5 bg-[color:var(--surface-2)] font-display tracking-wider text-sm"
                      style={{
                        borderColor: g.tone === "secondary" ? "var(--secondary)" : "var(--primary)",
                      }}
                    >
                      <span>{it}</span>
                      <SkillIcon name={it} tone={g.tone} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small icon flipped on hover (180° coin flip).
   Animation styles live in src/styles.css (.flip-icon). */
function SkillIcon({ name, tone }: { name: string; tone: "primary" | "secondary" }) {
  const Icon = skillIcons[name];
  if (!Icon) return null;
  const color = tone === "secondary" ? "var(--secondary)" : "var(--primary)";
  return (
    <span className="flip-icon shrink-0" aria-hidden="true" style={{ color }}>
      <Icon className="w-4 h-4" />
    </span>
  );
}
