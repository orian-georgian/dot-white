"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { HoverLift } from "@/components/hover-lift";
import { ThemeFlipIcon } from "@/components/theme-flip-icon";

const locales = ["en", "ro", "de"] as const;
const navItemIds = [
  "story",
  "services",
  "process",
  "testimonials",
  "contact",
] as const;

function getCurrentLocale(pathname: string) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as (typeof locales)[number]) ? segment : "en";
}

function getLocalePath(pathname: string, locale: (typeof locales)[number]) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  if (locales.includes(segments[0] as (typeof locales)[number])) {
    segments[0] = locale;
    return `/${segments.join("/")}`;
  }

  return `/${locale}/${segments.join("/")}`;
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("story");
  const [isThemeHoveredDesktop, setIsThemeHoveredDesktop] = useState(false);
  const [isThemeHoveredMobile, setIsThemeHoveredMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const navItems = useMemo(
    () => [
      { id: "story", label: t("links.story") },
      { id: "services", label: t("links.services") },
      { id: "process", label: t("links.process") },
      { id: "testimonials", label: t("links.testimonials") },
      { id: "contact", label: t("links.contact") },
    ],
    [t],
  );

  const currentLocale = useMemo(() => getCurrentLocale(pathname), [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const readHash = () => {
      const value = window.location.hash.replace("#", "").toLowerCase();
      const match = navItemIds.includes(value as (typeof navItemIds)[number]);
      setActiveSection(match ? value : "story");
    };

    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  useEffect(() => {
    for (const locale of locales) {
      if (locale !== currentLocale) {
        router.prefetch(getLocalePath(pathname, locale));
      }
    }
  }, [currentLocale, pathname, router]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);
  };

  const switchLocale = (locale: (typeof locales)[number]) => {
    if (locale === currentLocale) return;
    const targetPath = getLocalePath(pathname, locale);
    window.location.assign(targetPath);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.nav
        aria-label="Primary"
        initial={prefersReducedMotion ? undefined : { y: -16, opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={[
          "pointer-events-auto relative w-full px-6 sm:px-10 transition-shadow duration-300",
          isScrolled
            ? "bg-background/82 shadow-[0_8px_16px_-14px_rgba(0,0,0,0.22)] backdrop-blur-md"
            : "bg-transparent shadow-none",
        ].join(" ")}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-3 sm:py-4">
          <Link
            href={`/${currentLocale}`}
            className="relative z-10 inline-flex items-center rounded-md py-1 outline-none focus-visible:ring-2 focus-visible:ring-foreground/60"
            aria-label={t("homeAria")}
          >
            <Image
              src={
                isDark
                  ? "/images/logo-white-line.png"
                  : "/images/logo-dark-line.png"
              }
              alt="dotWhite"
              width={176}
              height={40}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="relative z-10 hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const key = item.id;
              const isActive = key === activeSection;

              return (
                <HoverLift key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(key);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "group relative inline-flex h-8 items-center rounded-md px-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-foreground/60",
                      isActive ? "" : "hover:bg-foreground/[0.08]",
                    ].join(" ")}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-md bg-foreground"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                      />
                    ) : null}
                    <span
                      className={[
                        "relative z-10 uppercase transition-colors duration-200",
                        isActive ? "text-background" : "text-foreground",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </Link>
                </HoverLift>
              );
            })}
          </div>

          <div className="relative z-10 hidden items-center gap-2 md:flex">
            <div
              className="inline-flex items-center gap-2 rounded-md p-1"
              role="group"
              aria-label={t("languageSwitcherAria")}
            >
              {locales.map((locale) => {
                const active = currentLocale === locale;
                return (
                  <HoverLift key={locale}>
                    <Link
                      href={getLocalePath(pathname, locale)}
                      prefetch={true}
                      onMouseEnter={() =>
                        router.prefetch(getLocalePath(pathname, locale))
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        switchLocale(locale);
                      }}
                      aria-label={t("switchLanguageAria", {
                        locale: locale.toUpperCase(),
                      })}
                      className={[
                        "inline-flex h-8 min-h-8 items-center justify-center rounded-md px-2 text-sm font-semibold leading-none transition",
                        active
                          ? "bg-foreground text-background"
                          : "bg-transparent text-foreground hover:bg-foreground/[0.08] hover:text-foreground",
                      ].join(" ")}
                    >
                      {locale.toUpperCase()}
                    </Link>
                  </HoverLift>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              onMouseEnter={() => setIsThemeHoveredDesktop(true)}
              onMouseLeave={() => setIsThemeHoveredDesktop(false)}
              aria-label={isDark ? t("switchToLight") : t("switchToDark")}
              className="inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-md bg-foreground px-2 text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/60"
            >
              <ThemeFlipIcon
                isDark={isDark}
                isHovered={isThemeHoveredDesktop}
                prefersReducedMotion={!!prefersReducedMotion}
                size={16}
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="relative z-10 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/20 bg-background/80 text-foreground/85 md:hidden"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="pointer-events-auto mt-0 w-full overflow-hidden border border-foreground/15 bg-background/92 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto w-full max-w-7xl px-6 py-3 sm:px-10">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={
                      prefersReducedMotion ? undefined : { opacity: 0, x: -8 }
                    }
                    animate={
                      prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
                    }
                    transition={{
                      duration: 0.2,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    whileTap={
                      prefersReducedMotion ? undefined : { scale: 0.99 }
                    }
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(item.id);
                        setIsOpen(false);
                      }}
                      className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition hover:bg-foreground/[0.05]"
                    >
                      <span className="uppercase">{item.label}</span>
                      <motion.span
                        aria-hidden="true"
                        className="text-foreground/45"
                        animate={
                          prefersReducedMotion
                            ? undefined
                            : { x: [0, 2, 0], opacity: [0.45, 0.9, 0.45] }
                        }
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-foreground/12 pt-3">
                <div
                  className="inline-flex items-center gap-1 rounded-md p-1"
                  role="group"
                  aria-label={t("languageSwitcherMobileAria")}
                >
                  {locales.map((locale) => {
                    const active = currentLocale === locale;
                    return (
                      <HoverLift key={locale} duration={0.18}>
                        <Link
                          href={getLocalePath(pathname, locale)}
                          prefetch={true}
                          onMouseEnter={() =>
                            router.prefetch(getLocalePath(pathname, locale))
                          }
                          onClick={(event) => {
                            event.preventDefault();
                            switchLocale(locale);
                            setIsOpen(false);
                          }}
                          className={[
                            "inline-flex h-8 min-h-8 items-center justify-center rounded-md px-2.5 text-sm font-semibold leading-none transition",
                            active
                              ? "bg-foreground text-background"
                              : "bg-transparent text-foreground hover:bg-foreground/[0.08] hover:text-foreground",
                          ].join(" ")}
                        >
                          {locale.toUpperCase()}
                        </Link>
                      </HoverLift>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  onMouseEnter={() => setIsThemeHoveredMobile(true)}
                  onMouseLeave={() => setIsThemeHoveredMobile(false)}
                  aria-label={isDark ? t("switchToLight") : t("switchToDark")}
                  className="inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-md bg-foreground px-2.5 text-background transition hover:bg-foreground/90"
                >
                  <ThemeFlipIcon
                    isDark={isDark}
                    isHovered={isThemeHoveredMobile}
                    prefersReducedMotion={!!prefersReducedMotion}
                    size={16}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
