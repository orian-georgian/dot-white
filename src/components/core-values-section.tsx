"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Scale, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SectionCard } from "@/components/section-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";

export function CoreValuesSection() {
  const t = useTranslations("CoreValues");
  const prefersReducedMotion = useReducedMotion();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const cards = [
    {
      title: t("clarity.title"),
      text: t("clarity.text"),
      Icon: Compass,
      iconText: "text-sky-400",
      iconRing: "border-sky-300/35",
      iconBg: "bg-sky-400/10",
      accent: "bg-sky-400/70",
      glow: "bg-sky-400/18",
      corner: "border-sky-400/55",
    },
    {
      title: t("ownership.title"),
      text: t("ownership.text"),
      Icon: ShieldCheck,
      iconText: "text-pink-brand",
      iconRing: "border-pink-brand/35",
      iconBg: "bg-pink-brand/10",
      accent: "bg-pink-brand/75",
      glow: "bg-pink-brand/16",
      corner: "border-pink-brand/60",
    },
    {
      title: t("balance.title"),
      text: t("balance.text"),
      Icon: Scale,
      iconText: "text-emerald-400",
      iconRing: "border-emerald-300/35",
      iconBg: "bg-emerald-400/10",
      accent: "bg-emerald-400/75",
      glow: "bg-emerald-400/18",
      corner: "border-emerald-400/55",
    },
  ];

  return (
    <SectionShell
      id="services"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.058] via-foreground/[0.05] to-foreground/[0.044] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={Compass}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-16 top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 24, 0], y: [0, -14, 0], opacity: [0.35, 0.55, 0.35] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-5%] top-1/3 h-72 w-72 rounded-full bg-pink-brand/18 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -20, 0], y: [0, 18, 0], opacity: [0.32, 0.52, 0.32] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/16 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -14, 0],
                  scale: [1, 1.08, 1],
                  opacity: [0.28, 0.48, 0.28],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          prefersReducedMotion={!!prefersReducedMotion}
          eyebrow={t("pretitle")}
          title={t("title")}
          subtitle={t("subtitle")}
          containerClassName="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          titleClassName="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          initialY={18}
          viewportAmount={0.6}
          duration={0.5}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {cards.map((card, index) => (
            <SectionCard
              key={card.title}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.03 }}
              onHoverStart={() => setHoveredCardIndex(index)}
              onHoverEnd={() => setHoveredCardIndex(null)}
              className="group relative rounded-2xl p-[1px]"
            >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-[linear-gradient(130deg,rgba(255,255,255,0.08),rgba(var(--pink-brand-rgb),0.32),rgba(255,255,255,0.08))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }
                    }
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ backgroundSize: "220% 220%" }}
                  />

                  <div
                    className={`relative flex h-full flex-col items-start rounded-[15px] border-2 bg-background/85 pb-6 pl-10 pr-6 pt-6 text-left shadow-lg transition-[border-color,box-shadow,filter,opacity,transform] duration-300 sm:pb-7 sm:pl-11 sm:pr-7 sm:pt-7 ${
                      hoveredCardIndex === index
                        ? "border-pink-brand shadow-[0_10px_30px_rgba(0,0,0,0.08)] opacity-100 blur-0"
                        : hoveredCardIndex !== null
                          ? "border-foreground/12 opacity-35 blur-[1px] saturate-75"
                          : "border-foreground/12 opacity-100 blur-0"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-5 left-4 w-[3px] rounded-full ${card.accent}`}
                    />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 ${card.glow} ${
                        hoveredCardIndex === index ? "opacity-90" : "opacity-50"
                      }`}
                    />
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-5 top-5 h-5 w-5 border-r-2 border-t-2 transition-opacity duration-300 ${card.corner} ${
                        hoveredCardIndex === index ? "opacity-100" : "opacity-55"
                      }`}
                    />
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-background/80",
                          card.iconText,
                          card.iconRing,
                          card.iconBg,
                        ].join(" ")}
                      >
                        <card.Icon
                          size={18}
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-foreground/78">
                      {card.text}
                    </p>
                  </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
