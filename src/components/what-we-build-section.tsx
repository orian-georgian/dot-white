"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  Check,
} from "lucide-react";
import {
  whatWeBuildBulletPoints,
  whatWeBuildNodePositions,
} from "@/content/what-we-build";
import { SectionShell } from "@/components/section-shell";
import { TechsCarousel } from "@/components/techs-carousel";

export function WhatWeBuildSection() {
  const prefersReducedMotion = useReducedMotion();
  const audienceTags = ["For CIOs", "For Operations", "For Product Teams"];

  return (
    <SectionShell
      id="process"
      ariaLabelledBy="what-we-build-heading"
      sectionClassName="relative isolate overflow-visible bg-gradient-to-b from-foreground/[0.044] via-foreground/[0.04] to-foreground/[0.034] px-6 py-24 sm:px-10 sm:py-32"
      separatorIcon={Boxes}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_65%_at_0%_18%,rgb(var(--pink-brand-rgb)/0.05),transparent_68%),radial-gradient(80%_68%_at_100%_82%,rgb(var(--pink-brand-rgb)/0.026),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-44 -translate-y-1/2 bg-foreground/[0.018] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
        <div className="max-w-2xl lg:max-w-none">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            What We Build
          </motion.p>

          <motion.h2
            id="what-we-build-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Enterprise Software Built Around Your Real Business Constraints
          </motion.h2>

          <motion.p
            className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/78 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
            You get systems designed for your governance model, your workflows,
            and your pace of change, so your teams can execute with less
            friction and better predictability.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-2"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          >
            {audienceTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-md bg-foreground/[0.06] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground/72"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <ul className="mt-8 space-y-4.5">
            {whatWeBuildBulletPoints.map((item, index) => (
              <motion.li
                key={item.title}
                className="flex items-start gap-3"
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 12 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.75 }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : 0.14 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-foreground/[0.04] text-foreground/70"
                >
                  <Check size={12} strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground/92">
                    {item.title}
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-foreground/74">
                    {item.text}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative mx-auto h-[500px] w-full max-w-[430px] overflow-visible rounded-2xl sm:h-[620px]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-4 sm:inset-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M8 10 L38 8 L52 46 L92 62"
                stroke="currentColor"
                strokeOpacity="0.34"
                strokeWidth="0.56"
                fill="none"
                strokeDasharray="2 2"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: [0.28, 0.56, 0.28],
                        pathLength: [0.86, 1, 0.86],
                        strokeDashoffset: [0, -16],
                      }
                }
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M88 16 L38 8 L14 52 L60 90"
                stroke="currentColor"
                strokeOpacity="0.34"
                strokeWidth="0.56"
                fill="none"
                strokeDasharray="2 2"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: [0.28, 0.56, 0.28],
                        pathLength: [0.84, 1, 0.84],
                        strokeDashoffset: [0, -18],
                      }
                }
                transition={{
                  duration: 4.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <motion.path
                d="M8 10 L14 52 L52 46 L88 16"
                stroke="currentColor"
                strokeOpacity="0.34"
                strokeWidth="0.56"
                fill="none"
                strokeDasharray="2 2"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: [0.28, 0.56, 0.28],
                        pathLength: [0.82, 1, 0.82],
                        strokeDashoffset: [0, -20],
                      }
                }
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </svg>

            <motion.span
              aria-hidden="true"
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/85"
              style={{ left: "8%", top: "10%" }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      left: ["8%", "38%", "52%", "92%", "8%"],
                      top: ["10%", "8%", "46%", "62%", "10%"],
                    }
              }
              transition={{
                duration: 8.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/75"
              style={{ left: "88%", top: "16%" }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      left: ["88%", "38%", "14%", "60%", "88%"],
                      top: ["16%", "8%", "52%", "90%", "16%"],
                    }
              }
              transition={{
                duration: 7.2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.6,
              }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-brand/90"
              style={{ left: "14%", top: "52%" }}
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      left: ["14%", "52%", "88%", "60%", "14%"],
                      top: ["52%", "46%", "16%", "90%", "52%"],
                    }
              }
              transition={{
                duration: 6.6,
                repeat: Infinity,
                ease: "linear",
                delay: 0.35,
              }}
            />

            {whatWeBuildNodePositions.map((node, index) => (
              <div
                key={`${node.left}-${node.top}-${index}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.left, top: node.top }}
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-brand/25"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { scale: [0.9, 1.35, 0.9], opacity: [0.5, 0.08, 0.5] }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.22,
                  }}
                />
                <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-foreground/45 bg-background/90 text-foreground/80 shadow-sm ring-1 ring-pink-brand/20">
                  <node.Icon size={14} strokeWidth={2.1} />
                </span>
                <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[120%] whitespace-nowrap rounded-md border border-foreground/18 bg-background/92 px-2 py-1 text-[10px] font-medium text-foreground/80 opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100">
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl">
        <div className="mb-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">
            Technology Landscape
          </p>
          <h3 className="mt-2 text-balance text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Platforms and Tools We Integrate With
          </h3>
        </div>
        <TechsCarousel />
      </div>
    </SectionShell>
  );
}
