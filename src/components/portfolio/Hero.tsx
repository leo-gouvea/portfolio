import { useLang } from "@/lib/i18n";
import { profile } from "@/data/site";
import { Button, Tag } from "./ui";
import { useState } from "react";
import minhaFoto from "@/assets/images/minha-foto.png";
import minhaFotoVerso from "@/assets/images/minha-fotoVerso.png";

import {
  CodeXml,
  BarChart3
} from "lucide-react";

/* Hero section.
   - Big name comes from profile.name (src/data/site.ts).
   - Title/sub/location come from i18n keys hero_title / hero_sub / hero_location. */
export function Hero() {
  const { t } = useLang();
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.pop() ?? "";
  const middle = rest.join(" ");
  const [rotation, setRotation] = useState(0);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] pt-24 pb-16 flex items-center overflow-visible"
    >
      {/* Decorative background type — two diagonals for contrast.
          Text strings live in i18n: hero_bg_main / hero_bg_alt. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-visible"
      >
        <div className="absolute top-12 left-0 right-0 text-[11vw] font-display text-[color:var(--primary)] opacity-[0.06] leading-none -rotate-6">
          {t("hero_bg_main")}
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-[6vw] font-display text-[color:var(--secondary)] opacity-[0.08] leading-none rotate-8 whitespace-nowrap text-right pr-8">
          {t("hero_bg_alt")}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 anim-fade-up">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Lado esquerdo */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Tag>{t("hero_location")}</Tag>
            </div>

            <h1
              id="hero-title"
              className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9]"
            >
              {first.toUpperCase()}
              <br />
              <span className="text-[color:var(--primary)]">{middle.toUpperCase()}</span>{" "}
              <span className="text-[color:var(--secondary)]">{last.toUpperCase()}</span>
            </h1>

            <p className="mt-6 font-display text-2xl sm:text-3xl tracking-wider">
              {t("hero_title")}
            </p>

            <p className="mt-2 font-mono text-sm text-[color:var(--primary)]">// {t("hero_sub")}</p>

            <div className="mt-8 flex flex-wrap sm:flex-nowrap gap-4">
              <Button href="#projects" variant="primary">
                <CodeXml className="w-4 h-4" />
                {t("hero_cta_dev")}
              </Button>

              <Button href="#projects" variant="secondary">
                <BarChart3 className="w-4 h-4" />
                {t("hero_cta_data")}
              </Button>
            </div>
          </div>

          {/* Lado direito */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Aura luminosa */}
              <div
                className="
            absolute
            inset-0
            bg-[color:var(--primary)]
            opacity-20
            blur-3xl
            rounded-full
            scale-110
          "
              />
              <div
                className="relative perspective-[1000px]"
                onMouseEnter={() => setRotation(540)}
                onMouseLeave={() => setRotation(0)}
              >
                <div
                  className="
    relative
    w-72 h-72 lg:w-96 lg:h-96
    transition-all
    duration-1400
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
    [transform-style:preserve-3d]
  "
                  style={{
                    transform: `rotateY(${rotation}deg)`,
                  }}
                >
                  {/* Frente */}
                  <img
                    src={minhaFoto}
                    alt="Foto de Leonardo"
                    className="
        absolute inset-0
        w-full h-full
        rounded-full
        object-cover
        border-4 border-[color:var(--primary)]
        shadow-2xl
        [backface-visibility:hidden]
      "
                  />

                  {/* Verso */}
                  <img
                    src={minhaFotoVerso}
                    alt="Versão épica"
                    className="
        absolute inset-0
        w-full h-full
        rounded-full
        object-cover
        border-4 border-[color:var(--primary)]
        shadow-2xl

        [transform:rotateY(180deg)]
        [backface-visibility:hidden]
      "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
