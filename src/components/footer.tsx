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
  const tNav = useTranslations("Navbar");
  const tFooter = useTranslations("Footer");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentLocale = useMemo(() => getCurrentLocale(pathname), [pathname]);
  const isDark = mounted ? resolvedTheme === "dark" : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { id: "story", label: tNav("links.story") },
    { id: "services", label: tNav("links.services") },
    { id: "process", label: tNav("links.process") },
    { id: "testimonials", label: tNav("links.testimonials") },
    { id: "contact", label: tNav("links.contact") },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com",
      label: tFooter("socialLabels.facebook"),
      Icon: Facebook,
    },
    {
      href: "https://www.instagram.com",
      label: tFooter("socialLabels.instagram"),
      Icon: Instagram,
    },
    {
      href: "https://wa.me/",
      label: tFooter("socialLabels.whatsapp"),
      Icon: MessageCircle,
    },
    {
      href: "https://www.linkedin.com",
      label: tFooter("socialLabels.linkedin"),
      Icon: Linkedin,
    },
    {
      href: "mailto:contact@dotwhite.com",
      label: tFooter("socialLabels.email"),
      Icon: Mail,
    },
  ];

  const legalLinks = [
    { href: `/${currentLocale}#`, label: tFooter("legalLinks.copyright") },
    { href: `/${currentLocale}#`, label: tFooter("legalLinks.privacy") },
    { href: `/${currentLocale}#`, label: tFooter("legalLinks.disclaimer") },
    { href: `/${currentLocale}#`, label: tFooter("legalLinks.cookies") },
    { href: `/${currentLocale}#`, label: tFooter("legalLinks.imprint") },
  ];

  return (
    <footer className="border-t border-foreground/12 bg-background/95 px-6 py-12 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4 md:gap-8">
        <div className="space-y-4 md:col-span-1">
          <Link href={`/${currentLocale}`} aria-label={tNav("homeAria")}>
            <Image
              src={isDark ? "/images/logo-white-line.png" : "/images/logo-dark-line.png"}
              alt="dotWhite"
              width={152}
              height={34}
              className="h-8 w-auto"
            />
          </Link>
          <div className="space-y-2 pt-2">
            <p className="text-sm text-foreground/68">{tFooter("tagline")}</p>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/62 lg:max-w-[220px]">
              {tFooter("description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground">
              {tFooter("navigation")}
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
              {tFooter("legal")}
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
            {tFooter("social")}
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
        <div>{tFooter("copyright", { year: new Date().getFullYear() })}</div>
        <div>{tFooter("company")}</div>
      </div>
    </footer>
  );
}
