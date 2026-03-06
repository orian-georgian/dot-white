"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hammer, Check } from "lucide-react";
import { howItWorksSteps } from "@/content/how-it-works";
import { Badge } from "@/components/badge";
import { ProgressTimeline } from "@/components/progress-timeline";
import { SectionCard } from "@/components/section-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { useProgressCycle } from "@/hooks/use-progress-cycle";

const desktopTrackInset = "calc((100% - 3 * 1.25rem) / 8)";
const stepCenterY = "1.5rem";
const cycleDurationMs = 10000;
const endHoldMs = 1500;

export function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion();
  const progress = useProgressCycle({
    prefersReducedMotion: !!prefersReducedMotion,
    cycleDurationMs,
    endHoldMs,
  });
  const epsilon = 0.002;
  const isVisited = (index: number) => {
    if (prefersReducedMotion) {
      return index === 0;
    }

    if (index === 3) {
      return progress >= 1 - epsilon;
    }

    return progress >= index / 3 - epsilon;
  };

  return (
    <SectionShell
      id="how-it-works"
      ariaLabelledBy="how-it-works-heading"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.034] via-foreground/[0.03] to-foreground/[0.032] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={Hammer}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(82%_64%_at_100%_14%,rgb(var(--pink-brand-rgb)/0.042),transparent_70%),radial-gradient(90%_70%_at_0%_92%,rgb(var(--pink-brand-rgb)/0.02),transparent_76%)]"
      />

        <SectionHeading
          prefersReducedMotion={!!prefersReducedMotion}
          eyebrow="How It Works"
          title="Nearshore Process, Structured End-to-End"
          subtitle="A practical delivery rhythm designed to reduce uncertainty, keep alignment high, and move from discovery to long-term evolution."
          headingId="how-it-works-heading"
          containerClassName="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
          titleClassName="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          subtitleClassName="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg"
          initialY={16}
          viewportAmount={0.55}
          duration={0.45}
        />

        <div className="relative">
          <ProgressTimeline
            progress={progress}
            desktopTop={stepCenterY}
            desktopLeft={desktopTrackInset}
            desktopRight={desktopTrackInset}
          />

          <div className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
            {howItWorksSteps.map((step, index) => {
              const visited = isVisited(index);

              return (
                <SectionCard
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-foreground/12 bg-background/62 px-5 pb-5 pt-8 shadow-lg transition-colors duration-300 md:px-6 md:pb-6 md:pt-10"
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 14 }
                }
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
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b to-transparent opacity-65",
                    step.tone === "pink"
                      ? "from-pink-brand/10"
                      : step.tone === "sky"
                        ? "from-sky-400/10 dark:from-sky-300/14"
                        : "from-emerald-400/10 dark:from-emerald-300/14",
                  ].join(" ")}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute right-5 top-1/2 flex h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/28 bg-background/95 text-background md:left-1/2 md:right-auto md:top-6 md:-translate-x-1/2"
                  animate={{ scale: visited ? 1.9 : 1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{
                    backgroundColor: visited
                      ? "rgba(var(--pink-brand-rgb),1)"
                      : "rgba(var(--pink-brand-rgb),0.12)",
                    borderColor: visited
                      ? "rgba(var(--pink-brand-rgb),1)"
                      : "rgba(var(--foreground),0.28)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      opacity: visited ? 1 : 0,
                      transform: `scale(${visited ? 1 : 0.5})`,
                    }}
                  >
                    <Check size={8} strokeWidth={3} />
                  </span>
                </motion.span>

                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-background text-foreground/72"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : index === 0
                          ? { rotate: [0, 8, 0, -8, 0], y: [0, -1, 0] }
                          : index === 1
                            ? { scale: [1, 1.08, 1], y: [0, -1, 0] }
                            : index === 2
                              ? { rotate: [0, 5, 0, -5, 0], y: [0, -1, 0] }
                              : { y: [0, -2, 0], scale: [1, 1.05, 1] }
                    }
                    transition={{
                      duration: 3.6,
                      delay: index * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <step.Icon size={17} strokeWidth={2.1} />
                  </motion.div>

                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/74 md:text-base">
                  {step.text}
                </p>
                <p className="mt-3 text-sm font-medium text-foreground/84">
                  {step.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.badges.map((badge) => (
                    <Badge key={`${step.title}-${badge}`} tone={step.tone}>
                      {badge}
                    </Badge>
                  ))}
                </div>
              </SectionCard>
              );
            })}
          </div>
        </div>
    </SectionShell>
  );
}
