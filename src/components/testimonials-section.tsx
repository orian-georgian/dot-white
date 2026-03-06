"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, ThumbsUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { type UIEvent, useEffect, useRef, useState } from "react";
import { testimonials } from "@/content/testimonials";
import { AnimatedArrow } from "@/components/animated-arrow";
import { Button } from "@/components/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SectionCard } from "@/components/section-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";

function PersonAvatar({ type }: { type: "male" | "female" }) {
  const ring = type === "female" ? "border-pink-brand/40" : "border-sky-300/40";
  const accent = type === "female" ? "text-pink-brand" : "text-sky-400";

  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background/90 ${ring}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 ${accent}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="3.2" />
        {type === "female" ? (
          <path d="M6.6 19.2c.7-3.4 2.8-5 5.4-5s4.7 1.6 5.4 5M9.6 10.2c-.8-.3-1.5-.9-1.9-1.7M14.4 10.2c.8-.3 1.5-.9 1.9-1.7" />
        ) : (
          <path d="M6.3 19.2c.8-3.2 2.9-4.9 5.7-4.9s4.9 1.7 5.7 4.9M10.1 7.2h3.8" />
        )}
      </svg>
    </span>
  );
}

export function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();
  const t = useTranslations("Testimonials");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const loadLockRef = useRef(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleTestimonials = testimonials.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((count) => Math.min(count + 3, testimonials.length));
  };

  useEffect(() => {
    loadLockRef.current = false;
  }, [visibleCount]);

  const handleMobileSwipeLoad = (event: UIEvent<HTMLDivElement>) => {
    if (!isMobile || visibleCount >= testimonials.length || loadLockRef.current) {
      return;
    }

    const target = event.currentTarget;
    const remaining = target.scrollWidth - target.scrollLeft - target.clientWidth;

    if (remaining < 120) {
      loadLockRef.current = true;
      handleShowMore();
    }
  };

  return (
    <SectionShell
      id="testimonials"
      ariaLabelledBy="testimonials-heading"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.032] via-foreground/[0.036] to-foreground/[0.042] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={ThumbsUp}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_75%_at_100%_0%,rgb(var(--pink-brand-rgb)/0.045),transparent_70%),radial-gradient(78%_66%_at_0%_100%,rgb(var(--pink-brand-rgb)/0.022),transparent_74%)]"
      />

      <SectionHeading
        prefersReducedMotion={!!prefersReducedMotion}
        eyebrow={t("eyebrow")}
        title={t("title")}
        headingId="testimonials-heading"
        containerClassName="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        titleClassName="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        initialY={16}
        viewportAmount={0.55}
        duration={0.45}
      />

      <div
        className="-mx-6 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-10 sm:px-10 md:mx-0 md:overflow-visible md:px-0"
        onScroll={handleMobileSwipeLoad}
      >
        <div className="flex snap-x snap-mandatory gap-4 pb-2 md:grid md:grid-cols-3 md:gap-5 md:pb-0">
          {visibleTestimonials.map((item, index) => (
            <SectionCard
              key={`${item.name}-${index}`}
              className="group relative min-w-[calc(100%-1rem)] snap-start overflow-visible rounded-2xl border-2 border-foreground/12 bg-background/88 p-6 shadow-lg transition-colors duration-300 hover:border-pink-brand md:min-w-0 sm:min-w-[82%]"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.45,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-pink-brand/10 blur-2xl"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.08, 1], opacity: [0.22, 0.36, 0.22] }
                }
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0">
                  <span className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0">
                    <PersonAvatar type={item.avatar} />
                  </span>
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 inline-flex items-center justify-center rounded-full border border-pink-brand/45 bg-background/92 text-pink-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            scale: [1, 1.08, 1],
                            y: [0, -1.5, 0],
                          }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ThumbsUp size={16} strokeWidth={2.1} />
                  </motion.span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="mt-0.5 text-xs text-foreground/68">{item.company}</p>
                </div>
              </div>

              <p className="relative z-10 mt-5 text-base leading-relaxed text-foreground/82">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="relative z-10 mt-5 border-t border-foreground/10 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.16em] text-foreground/50 transition-colors duration-200 group-hover:text-pink-brand">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-foreground/[0.04] text-foreground/70 transition-colors duration-200 group-hover:border-pink-brand/45 group-hover:bg-pink-brand/10 group-hover:text-pink-brand"
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {t("verifiedClient")}
                </span>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>

      {!isMobile && visibleCount < testimonials.length ? (
        <div className="mt-8 hidden justify-center md:flex">
          <Button
            onClick={handleShowMore}
            variant="primary"
            size="sm"
            className="relative overflow-hidden border border-foreground/35 !bg-transparent !text-foreground !shadow-none hover:!bg-foreground/[0.08] hover:!shadow-none"
          >
            <span className="relative z-10">{t("showMore")}</span>
            <AnimatedArrow
              prefersReducedMotion={!!prefersReducedMotion}
              axis="y"
              distance={3}
            >
              <ChevronDown size={14} />
            </AnimatedArrow>
          </Button>
        </div>
      ) : null}
    </SectionShell>
  );
}
