"use client";

import { useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { AnimatedArrow } from "@/components/animated-arrow";
import { Button } from "@/components/button";
import { SectionShell } from "@/components/section-shell";

export function FinalCtaSection() {
  const prefersReducedMotion = useReducedMotion();

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
            Built Around Your Goals
          </p>
          <h2
            id="final-cta-heading"
            className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Ready to make an impact? Let&apos;s meet.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            Schedule a meeting and discover how we can build something great
            together.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-foreground/68 sm:text-lg">
            We&apos;ll align on your goals, constraints, and the best path from
            idea to meaningful delivery.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              aria-label="Start a Conversation"
              variant="primary"
              size="md"
              className="relative overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <AnimatedArrow prefersReducedMotion={!!prefersReducedMotion}>
                &rarr;
              </AnimatedArrow>
            </Button>
          </div>
        </div>
    </SectionShell>
  );
}
