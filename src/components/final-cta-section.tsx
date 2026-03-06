"use client";

import { useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { AnimatedArrow } from "@/components/animated-arrow";
import { Button } from "@/components/button";
import { SectionShell } from "@/components/section-shell";
import { useMediaQuery } from "@/hooks/use-media-query";

export function FinalCtaSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("FinalCta");
  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <SectionShell
      id="contact"
      ariaLabelledBy="final-cta-heading"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.042] via-foreground/[0.046] to-foreground/[0.05] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={MessageCircle}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_75%_at_100%_0%,rgb(var(--pink-brand-rgb)/0.045),transparent_70%),radial-gradient(78%_66%_at_0%_100%,rgb(var(--pink-brand-rgb)/0.022),transparent_74%)]"
      />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
            {t("eyebrow")}
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            {t("subtitle1")}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-foreground/68 sm:text-lg">
            {t("subtitle2")}
          </p>

          <div className={isMobile ? "mt-10 flex justify-center w-full" : "mt-10 flex justify-center"}>
            <Button
              aria-label={t("primaryAria")}
              variant="primary"
              size="md"
              className={
                isMobile
                  ? "relative overflow-hidden w-full max-w-xs text-base font-semibold py-3 rounded-lg"
                  : "relative overflow-hidden"
              }
            >
              <span className="relative z-10">{t("primaryCta")}</span>
              <AnimatedArrow prefersReducedMotion={!!prefersReducedMotion}>
                &rarr;
              </AnimatedArrow>
            </Button>
          </div>
        </div>
    </SectionShell>
  );
}
