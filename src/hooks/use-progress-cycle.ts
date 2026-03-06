"use client";

import { useEffect, useState } from "react";

type UseProgressCycleArgs = {
  prefersReducedMotion: boolean;
  cycleDurationMs: number;
  endHoldMs: number;
};

export function useProgressCycle({
  prefersReducedMotion,
  cycleDurationMs,
  endHoldMs,
}: UseProgressCycleArgs) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(0);
      return;
    }

    const travelDurationMs = cycleDurationMs - endHoldMs;
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) % cycleDurationMs;
      if (elapsed < travelDurationMs) {
        setProgress(elapsed / travelDurationMs);
      } else {
        setProgress(1);
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [cycleDurationMs, endHoldMs, prefersReducedMotion]);

  return prefersReducedMotion ? 0 : progress;
}
