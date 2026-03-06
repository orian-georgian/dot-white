"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  type LucideIcon,
  HeartHandshake,
  Network,
  Orbit,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Badge } from "@/components/badge";
import { InViewReveal } from "@/components/in-view-reveal";
import { SectionCard } from "@/components/section-card";

type StoryArtType = "origin" | "enterprise" | "feeling" | "client";

type StoryArtLayer = {
  Icon: LucideIcon;
  size: number;
  strokeWidth: number;
  className: string;
  animate: Record<string, number[]>;
  transition: {
    duration: number;
    repeat: number;
    ease: "easeInOut" | "linear";
    delay?: number;
  };
};

type StoryArtConfig = {
  main: StoryArtLayer;
  accents: StoryArtLayer[];
};

function StoryCardArt({
  type,
  prefersReducedMotion,
  isActive,
}: {
  type: StoryArtType;
  prefersReducedMotion: boolean;
  isActive: boolean;
}) {
  const shouldAnimate = isActive && !prefersReducedMotion;
  const artConfigs: Record<StoryArtType, StoryArtConfig> = {
    origin: {
      main: {
        Icon: Orbit,
        size: 56,
        strokeWidth: 1.8,
        className:
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/65",
        animate: { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] },
        transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
      },
      accents: [
        {
          Icon: Sparkles,
          size: 20,
          strokeWidth: 2,
          className: "absolute left-[36%] top-[36%] text-pink-brand/85",
          animate: { y: [0, -6, 0] },
          transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        },
        {
          Icon: Workflow,
          size: 24,
          strokeWidth: 1.9,
          className: "absolute right-[32%] bottom-[20%] text-foreground/60",
          animate: { y: [0, -4, 0], x: [0, 2, 0] },
          transition: {
            duration: 2.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          },
        },
      ],
    },
    enterprise: {
      main: {
        Icon: Building2,
        size: 54,
        strokeWidth: 1.9,
        className:
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/65",
        animate: { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] },
        transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
      },
      accents: [
        {
          Icon: Workflow,
          size: 22,
          strokeWidth: 2,
          className: "absolute left-[24%] top-[24%] text-pink-brand/85",
          animate: { rotate: [0, 15, 0, -15, 0] },
          transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        },
        {
          Icon: Network,
          size: 22,
          strokeWidth: 1.9,
          className: "absolute right-[20%] bottom-[18%] text-foreground/60",
          animate: { rotate: [0, 360], opacity: [0.35, 0.75, 0.35] },
          transition: { duration: 6, repeat: Infinity, ease: "linear" },
        },
      ],
    },
    feeling: {
      main: {
        Icon: HeartHandshake,
        size: 56,
        strokeWidth: 1.8,
        className:
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/65",
        animate: { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] },
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      },
      accents: [
        {
          Icon: Sparkles,
          size: 18,
          strokeWidth: 2.1,
          className: "absolute left-[22%] bottom-[20%] text-pink-brand/80",
          animate: { x: [0, 8, 0], opacity: [0.4, 1, 0.4] },
          transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        },
        {
          Icon: Orbit,
          size: 24,
          strokeWidth: 1.8,
          className: "absolute right-[20%] top-[22%] text-foreground/60",
          animate: { rotate: [0, -18, 0, 18, 0] },
          transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
        },
      ],
    },
    client: {
      main: {
        Icon: Network,
        size: 56,
        strokeWidth: 1.9,
        className:
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/65",
        animate: { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.55] },
        transition: { duration: 2.3, repeat: Infinity, ease: "easeInOut" },
      },
      accents: [
        {
          Icon: Workflow,
          size: 20,
          strokeWidth: 2,
          className: "absolute left-[22%] top-[24%] text-pink-brand/85",
          animate: { y: [0, -5, 0], opacity: [0.45, 1, 0.45] },
          transition: { duration: 1.9, repeat: Infinity, ease: "easeInOut" },
        },
        {
          Icon: Orbit,
          size: 22,
          strokeWidth: 1.9,
          className: "absolute right-[18%] bottom-[18%] text-foreground/60",
          animate: { rotate: [0, 360], opacity: [0.35, 0.75, 0.35] },
          transition: { duration: 5.8, repeat: Infinity, ease: "linear" },
        },
      ],
    },
  };

  const config = artConfigs[type];
  const MainIcon = config.main.Icon;

  return (
    <div className="relative h-28 w-full">
      <motion.div
        className={config.main.className}
        animate={shouldAnimate ? config.main.animate : undefined}
        transition={config.main.transition}
      >
        <MainIcon size={config.main.size} strokeWidth={config.main.strokeWidth} />
      </motion.div>
      {config.accents.map((layer, index) => {
        const LayerIcon = layer.Icon;
        return (
          <motion.div
            key={`${type}-layer-${index}`}
            className={layer.className}
            animate={shouldAnimate ? layer.animate : undefined}
            transition={layer.transition}
          >
            <LayerIcon size={layer.size} strokeWidth={layer.strokeWidth} />
          </motion.div>
        );
      })}
    </div>
  );
}

export function StorySection() {
  const t = useTranslations("Story");
  const prefersReducedMotion = useReducedMotion();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const cards = [
    {
      art: "origin" as const,
      title: t("cards.origin.title"),
      text: t("cards.origin.text"),
      details: t("cards.origin.details"),
      badges: [
        t("cards.origin.badges.one"),
        t("cards.origin.badges.two"),
        t("cards.origin.badges.three"),
      ],
      badgeTone: "pink" as const,
      cornerClass: "left-0 top-0 rounded-br-[110px]",
      cornerTone: "bg-pink-brand/10",
    },
    {
      art: "enterprise" as const,
      title: t("cards.enterprise.title"),
      text: t("cards.enterprise.text"),
      details: t("cards.enterprise.details"),
      badges: [
        t("cards.enterprise.badges.one"),
        t("cards.enterprise.badges.two"),
        t("cards.enterprise.badges.three"),
      ],
      badgeTone: "sky" as const,
      cornerClass: "right-0 top-0 rounded-bl-[110px]",
      cornerTone: "bg-sky-400/10",
    },
    {
      art: "feeling" as const,
      title: t("cards.feeling.title"),
      text: t("cards.feeling.text"),
      details: t("cards.feeling.details"),
      badges: [
        t("cards.feeling.badges.one"),
        t("cards.feeling.badges.two"),
        t("cards.feeling.badges.three"),
      ],
      badgeTone: "pink" as const,
      cornerClass: "left-0 bottom-0 rounded-tr-[110px]",
      cornerTone: "bg-pink-brand/10",
    },
    {
      art: "client" as const,
      title: t("cards.client.title"),
      text: t("cards.client.text"),
      details: t("cards.client.details"),
      badges: [
        t("cards.client.badges.one"),
        t("cards.client.badges.two"),
        t("cards.client.badges.three"),
      ],
      badgeTone: "emerald" as const,
      cornerClass: "right-0 bottom-0 rounded-tl-[110px]",
      cornerTone: "bg-emerald-400/10",
    },
  ];

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-foreground/[0.06] px-6 py-24 sm:px-10 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgb(var(--pink-brand-rgb)/0.02),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_85%_at_0%_0%,rgb(var(--foreground)/0.06),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_85%_at_100%_100%,rgb(var(--foreground)/0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl">
        <InViewReveal
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
          prefersReducedMotion={!!prefersReducedMotion}
          initialY={10}
          amount={0.7}
          duration={0.4}
        >
          <p className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
            {t("eyebrow")}
          </p>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-foreground/8 blur-2xl"
          />

          <motion.h2
            id="story-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className="mt-5 text-pretty text-base leading-relaxed text-foreground/78 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
          >
            {t("intro")}
          </motion.p>
        </InViewReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {cards.map((card, index) => (
            <SectionCard
              key={card.title}
              className={[
                "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border-2 border-foreground/12 bg-background/88 p-6 shadow-lg transition-transform transition-colors duration-300 hover:-translate-y-2 sm:min-h-[320px] sm:p-7",
                card.badgeTone === "pink"
                  ? "hover:border-pink-brand/90"
                  : card.badgeTone === "sky"
                    ? "hover:border-sky-400/90"
                    : "hover:border-emerald-400/90",
              ].join(" ")}
              onHoverStart={() => setHoveredCardIndex(index)}
              onHoverEnd={() => setHoveredCardIndex(null)}
            >
              <div
                aria-hidden="true"
                className={[
                  "pointer-events-none absolute h-20 w-20 blur-xl transition-opacity duration-300 group-hover:opacity-85",
                  card.cornerClass,
                  card.cornerTone,
                ].join(" ")}
              />
              <div className="border-b border-foreground/10 pb-4">
                <StoryCardArt
                  type={card.art}
                  prefersReducedMotion={!!prefersReducedMotion}
                  isActive={hoveredCardIndex === index}
                />
              </div>
              <h3 className="relative z-10 mt-5 text-lg font-semibold tracking-tight text-foreground">
                {card.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-foreground/74 sm:text-base">
                {card.text}
              </p>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-foreground/66">
                {card.details}
              </p>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {card.badges.map((badge) => (
                  <Badge key={`${card.title}-${badge}`} tone={card.badgeTone}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
