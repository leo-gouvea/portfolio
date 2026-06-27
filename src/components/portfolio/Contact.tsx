import { useLang } from "@/lib/i18n";
import { profile } from "@/data/site";
import { Button, SectionHeader } from "./ui";
import { Mail, Phone, Github, Linkedin, type LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* Contact section.
   - Email / phone / WhatsApp / socials: src/data/site.ts (profile)
   - Availability copy: i18n key `contact_lead`. */
export function Contact() {
  const { t } = useLang();

  const channels: Array<{
    label: string;
    value: string;
    href: string;
    Icon: LucideIcon;
    tone: "primary" | "secondary";
  }> = [
    { label: t("contact_email"),    value: profile.email,    href: `mailto:${profile.email}`, Icon: Mail,          tone: "primary"   },
    { label: t("contact_phone"),    value: profile.phone,    href: profile.phoneHref,         Icon: Phone,         tone: "secondary" },
    { label: t("contact_whatsapp"), value: profile.whatsapp, href: profile.whatsappHref,      Icon: FaWhatsapp as unknown as LucideIcon, tone: "primary" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader index="06" label={t("section_contact")} id="contact-title" />
        <div className="panel scanlines p-8 sm:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-4xl sm:text-5xl leading-tight">
              <span className="text-[color:var(--primary)]">{t("section_contact")}</span>
            </h3>
            <p className="mt-4 opacity-80 leading-relaxed">{t("contact_lead")}</p>
          </div>
          <address className="not-italic space-y-3 font-mono text-sm">
            {channels.map(({ label, value, href, Icon, tone }) => {
              const external = href.startsWith("http");
              const accent = tone === "secondary" ? "var(--secondary)" : "var(--primary)";
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 panel p-4 hover:opacity-90 transition-opacity"
                >
                  <Icon className="w-5 h-5 shrink-0" style={{ color: accent }} />
                  <div className="min-w-0">
                    <span className="block text-xs tracking-widest" style={{ color: accent }}>
                      {label}
                    </span>
                    <span className="block mt-0.5 break-all">{value}</span>
                  </div>
                </a>
              );
            })}
            <div className="flex gap-3">
              <Button href={profile.github} variant="primary" className="flex-1 justify-center">
                <Github className="w-4 h-4" /> GITHUB
              </Button>
              <Button href={profile.linkedin} variant="secondary" className="flex-1 justify-center">
                <Linkedin className="w-4 h-4" /> LINKEDIN
              </Button>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}