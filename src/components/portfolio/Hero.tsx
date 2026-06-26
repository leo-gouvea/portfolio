import { useLang } from "@/lib/i18n";
import { profile } from "@/data/site";
import { Button, Tag } from "./ui";

/* Hero section.
   - Big name comes from profile.name (src/data/site.ts).
   - Title/sub/location come from i18n keys hero_title / hero_sub / hero_location. */
export function Hero() {
  const { t } = useLang();
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.pop() ?? "";
  const middle = rest.join(" ");

  return (
    <section id="top" aria-labelledby="hero-title" className="relative min-h-[88vh] pt-24 pb-16 flex items-center overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-10 -left-10 text-[28vw] font-display text-[color:var(--primary)] opacity-10 leading-none -rotate-6">
          HELLO
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 anim-fade-up">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <Tag>{t("hero_location")}</Tag>
        </div>

        <h1 id="hero-title" className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9]">
          {first.toUpperCase()}
          <br />
          <span className="text-[color:var(--primary)]">{middle.toUpperCase()}</span>{" "}
          <span className="text-[color:var(--secondary)]">{last.toUpperCase()}</span>
        </h1>

        <p className="mt-6 font-display text-2xl sm:text-3xl tracking-wider">{t("hero_title")}</p>
        <p className="mt-2 font-mono text-sm text-[color:var(--primary)]">// {t("hero_sub")}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">{t("hero_cta_dev")}</Button>
          <Button href="#projects" variant="secondary">{t("hero_cta_data")}</Button>
        </div>
      </div>
    </section>
  );
}