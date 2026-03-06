"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatedArrow } from "@/components/animated-arrow";
import { Button } from "@/components/button";
import { HeroAmbientLayer } from "@/components/hero-ambient-layer";
import { HeroImageBubble } from "@/components/hero-image-bubble";
import { WordRevealTitle } from "@/components/word-reveal-title";
import { useMediaQuery } from "@/hooks/use-media-query";
import { memo, useState } from "react";

function HeroHeaderComponent() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const t = useTranslations("Hero");
  const headline = t("headline");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 sm:px-10"
      onMouseEnter={() => setIsHeroHovered(true)}
      onMouseLeave={() => setIsHeroHovered(false)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-foreground/10"
      />

      <HeroAmbientLayer
        prefersReducedMotion={!!prefersReducedMotion}
        shouldAnimate={shouldAnimate}
        isMobile={isMobile}
        isHeroHovered={isHeroHovered}
      />

      <div className="relative mx-auto w-full max-w-7xl py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="max-w-none space-y-8 lg:space-y-9">
            <WordRevealTitle
              id="hero-heading"
              className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
              text={headline}
              prefersReducedMotion={!!prefersReducedMotion}
            />

            <div className="grid max-w-3xl grid-cols-2 items-start gap-4 lg:max-w-none lg:grid-cols-1">
              <motion.p
                className="text-base leading-relaxed text-foreground/80 sm:text-lg lg:pr-14"
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 10 }
                }
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
              >
                {t("subheadline")}
              </motion.p>

              <HeroImageBubble
                wrapperClassName="relative mx-auto aspect-square w-full overflow-hidden rounded-full border border-foreground/20 lg:hidden"
                wrapperInitial={
                  prefersReducedMotion ? undefined : { opacity: 0, scale: 0.92 }
                }
                wrapperAnimate={
                  prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
                }
                wrapperTransition={{ duration: 0.45, ease: "easeOut", delay: 0.5 }}
                innerClassName="relative h-full w-full"
                innerAnimate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                        x: [0, 2, 0],
                        rotate: [0, 0.8, 0, -0.6, 0],
                        scale: [1, 1.01, 1, 0.995, 1],
                      }
                }
                innerTransition={{
                  duration: 8.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Hero visual"
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </HeroImageBubble>
            </div>

            <motion.div
              className="flex flex-col gap-3 pt-2 sm:flex-row"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.35 }}
            >
              <div className="w-full sm:w-auto">
                <Button
                  aria-label={t("primaryCta")}
                  variant="primary"
                  size="md"
                  className="relative w-full justify-center overflow-hidden sm:w-auto"
                >
                  <span className="relative z-10">{t("primaryCta")}</span>
                  <AnimatedArrow prefersReducedMotion={!!prefersReducedMotion}>
                    &rarr;
                  </AnimatedArrow>
                </Button>
              </div>
              <div className="w-full sm:w-auto">
                <Button
                  aria-label={t("secondaryCta")}
                  variant="primary"
                  size="md"
                  className="relative w-full justify-center overflow-hidden border border-foreground/35 !bg-transparent !text-foreground !shadow-none hover:!bg-foreground/[0.08] hover:!shadow-none sm:w-auto"
                >
                  <span className="relative z-10">{t("secondaryCta")}</span>
                  <AnimatedArrow prefersReducedMotion={!!prefersReducedMotion}>
                    &rarr;
                  </AnimatedArrow>
                </Button>
              </div>
            </motion.div>

          </div>

          <motion.div
            className="relative mx-auto hidden w-full max-w-[520px] lg:block lg:justify-self-end"
            initial={prefersReducedMotion ? undefined : { x: 180, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <HeroImageBubble
              wrapperClassName="relative aspect-square overflow-hidden rounded-full border border-foreground/10"
              wrapperAnimate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -20, 0, 10, 0],
                      x: [0, 10, 0, -8, 0],
                      rotate: [0, 1.6, 0, -1.4, 0],
                      scale: [1, 1.02, 1, 0.992, 1],
                    }
              }
              wrapperTransition={{
                duration: 11.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              innerClassName="relative h-full w-full overflow-hidden rounded-full"
            >
              <Image
                src="/images/hero.png"
                alt="Hero visual"
                width={1160}
                height={980}
                priority
                className="h-full w-full object-cover"
              />
            </HeroImageBubble>

            <motion.div
              aria-hidden="true"
              className="absolute -left-8 top-[14%] h-4 w-4 rounded-full border border-foreground/35"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, -12, 0], opacity: [0.35, 0.8, 0.35] }
              }
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -right-6 bottom-[18%] h-3 w-3 rounded-full bg-foreground/35"
              animate={
                prefersReducedMotion
                  ? undefined
                  : { y: [0, 10, 0], opacity: [0.4, 0.9, 0.4] }
              }
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 8, 0], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative flex h-10 w-6 items-start justify-center rounded-full border border-foreground/45 p-1">
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-foreground/25"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="h-2 w-1 rounded-full bg-foreground/80" />
        </div>
      </motion.div>
    </section>
  );
}

export const HeroHeader = memo(HeroHeaderComponent);


