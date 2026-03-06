"use client";
"use client";

import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FocusDot } from "@/components/focus-dot";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";

export function KpisSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("KPIs");
  const kpis = [
    {
      value: t("items.one.value"),
      label: t("items.one.label"),
      text: t("items.one.text"),
    },
    {
      value: t("items.two.value"),
      label: t("items.two.label"),
      text: t("items.two.text"),
    },
    {
      value: t("items.three.value"),
      label: t("items.three.label"),
      text: t("items.three.text"),
    },
    {
      value: t("items.four.value"),
      label: t("items.four.label"),
      text: t("items.four.text"),
    },
  ];
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setFocusedIndex(0);
      return;
    }

    const intervalId = window.setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % kpis.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion, kpis.length]);

  return (
    <SectionShell
      id="kpis"
      ariaLabelledBy="kpis-heading"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.06] via-foreground/[0.058] to-foreground/[0.058] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={BarChart3}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_0%_18%,rgb(var(--pink-brand-rgb)/0.045),transparent_70%),radial-gradient(82%_66%_at_100%_84%,rgb(var(--pink-brand-rgb)/0.022),transparent_74%)]"
      />

      <SectionHeading
        prefersReducedMotion={!!prefersReducedMotion}
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        headingId="kpis-heading"
        containerClassName="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        titleClassName="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        subtitleClassName="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg"
        initialY={16}
        viewportAmount={0.6}
        duration={0.45}
      />

      <LayoutGroup id="kpi-focus-ball">
        <div className="relative grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {kpis.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative px-2 text-center lg:px-8"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={
                prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="mb-2 flex h-8 items-end justify-center">
                <FocusDot
                  focused={focusedIndex === index}
                  prefersReducedMotion={!!prefersReducedMotion}
                />
              </div>
              <div className="w-full relative inline-block overflow-hidden">
                <motion.p
                  className={`relative z-10 text-6xl font-extrabold tracking-tight transition-colors duration-700 ease-out sm:text-7xl ${
                    focusedIndex === index
                      ? "text-pink-brand"
                      : "text-foreground"
                  }`}
                >
                  {item.value}
                </motion.p>
              </div>
              <p className="mt-3 text-base font-semibold text-foreground sm:text-lg">
                {item.label}
              </p>
              <p className="mx-auto mt-2 max-w-[18rem] text-sm leading-relaxed text-foreground/74">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </SectionShell>
  );
}
