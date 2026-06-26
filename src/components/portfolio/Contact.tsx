import { useLang } from "@/lib/i18n";
import { profile } from "@/data/site";
import { Button, SectionHeader } from "./ui";

/* Contact section.
   - Email / phone / socials: src/data/site.ts (profile) */
export function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="05" label={t("section_contact")} id="contact-title" />
        <div className="panel scanlines p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-4xl sm:text-5xl leading-tight">
              <span className="text-[color:var(--primary)]">{t("section_contact")}</span>
            </h3>
            <p className="mt-4 opacity-80">{t("contact_lead")}</p>
          </div>
          <address className="not-italic space-y-3 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className="block panel p-4 hover:opacity-90">
              <span className="text-[color:var(--primary)]">{t("contact_email")}</span>
              <div className="mt-1 break-all">{profile.email}</div>
            </a>
            <a href={profile.phoneHref} className="block panel p-4 hover:opacity-90">
              <span className="text-[color:var(--secondary)]">{t("contact_phone")}</span>
              <div className="mt-1">{profile.phone}</div>
            </a>
            <div className="flex gap-3">
              <Button href={profile.github} variant="primary" className="flex-1 justify-center">GITHUB</Button>
              <Button href={profile.linkedin} variant="secondary" className="flex-1 justify-center">LINKEDIN</Button>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}