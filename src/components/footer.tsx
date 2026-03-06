"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { HoverLift } from "@/components/hover-lift";

const locales = ["en", "ro", "de"] as const;

function getCurrentLocale(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as (typeof locales)[number]) ? segment : "en";
}

export function Footer() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentLocale = useMemo(() => getCurrentLocale(pathname), [pathname]);
  const isDark = mounted ? resolvedTheme === "dark" : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { id: "story", label: t("links.story") },
    { id: "services", label: t("links.services") },
    { id: "process", label: t("links.process") },
    { id: "testimonials", label: t("links.testimonials") },
    { id: "contact", label: t("links.contact") },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", label: "Facebook", Icon: Facebook },
    { href: "https://www.instagram.com", label: "Instagram", Icon: Instagram },
    {
      href: "https://wa.me/",
      label: "WhatsApp",
      Icon: MessageCircle,
    },
    { href: "https://www.linkedin.com", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:contact@dotwhite.com", label: "Email", Icon: Mail },
  ];

  const legalLinks = [
    { href: `/${currentLocale}#`, label: "Copyright" },
    { href: `/${currentLocale}#`, label: "Privacy" },
    { href: `/${currentLocale}#`, label: "Disclaimer" },
    { href: `/${currentLocale}#`, label: "Cookies" },
    { href: `/${currentLocale}#`, label: "Imprint" },
  ];

  return (
    <footer className="border-t border-foreground/12 bg-background/95 px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4 md:gap-8">
        <div className="space-y-4 md:col-span-1">
          <Link href={`/${currentLocale}`} aria-label={t("homeAria")}>
            <Image
              src={isDark ? "/images/logo-white-line.png" : "/images/logo-dark-line.png"}
              alt="dotWhite"
              width={152}
              height={34}
              className="h-8 w-auto"
            />
          </Link>
          <div className="pt-2 space-y-2">
            <p className="text-sm text-foreground/68">
              Clarity. Ownership. Balance.
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/62 lg:max-w-[220px]">
              We design dependable enterprise software and integrations for
              teams that need calm execution and measurable outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/${currentLocale}#${link.id}`}
                    className="text-sm text-foreground/74 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/74 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
            Social
          </p>
          <div className="mt-4 flex items-center gap-2">
            {socialLinks.map(({ href, label, Icon }) => (
              <HoverLift key={label}>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="group relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-foreground/20 text-foreground/70 transition-colors hover:text-foreground"
                >
                  <Icon size={15} />
                </Link>
              </HoverLift>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-foreground/10 pt-5 text-xs text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>© {new Date().getFullYear()} dotWhite. All rights reserved.</div>
        <div>DOT WHITE SRL · VAT RO 33705350</div>
      </div>
    </footer>
  );
}
