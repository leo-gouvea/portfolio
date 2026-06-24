import { useLang } from "@/lib/i18n";
import { SITE } from "@/components/portfolio/content";
import { SectionHeader, SkewButton } from "@/components/portfolio/ui";

export function Contact() {
  const { c } = useLang();
  const { links } = SITE;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader id="contact-heading" label={c.contact.heading} />

        <div className="persona-panel p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-display text-4xl sm:text-5xl leading-tight text-white">
              {c.contact.titleLead}{" "}
              <span className="text-[var(--accent-red)]">{c.contact.titleAccent}</span>{" "}
              {c.contact.titleTail}
            </h3>
            <p className="mt-4 text-[var(--lavender)]/75">{c.contact.lead}</p>
          </div>

          <address className="not-italic space-y-3 font-mono text-sm">
            <a
              href={`mailto:${links.email}`}
              className="block persona-panel p-4 hover:border-[var(--accent-red)] transition-colors"
            >
              <span className="text-[var(--accent-red)] tracking-widest uppercase">
                ✉ {c.contact.emailLabel}
              </span>
              <div className="text-white mt-1 break-all">{links.email}</div>
            </a>

            <a
              href={links.phoneHref}
              className="block persona-panel p-4 hover:border-[var(--accent-red)] transition-colors"
            >
              <span className="text-[var(--accent-red)] tracking-widest uppercase">
                ☏ {c.contact.phoneLabel}
              </span>
              <div className="text-white mt-1">{links.phone}</div>
            </a>

            <div className="flex gap-3">
              <SkewButton href={links.github} variant="solid" className="flex-1 justify-center">
                GitHub
              </SkewButton>
              <SkewButton href={links.linkedin} variant="accent" className="flex-1 justify-center">
                LinkedIn
              </SkewButton>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}