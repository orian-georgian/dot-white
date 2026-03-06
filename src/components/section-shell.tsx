"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { SectionSeparator } from "@/components/section-separator";

type SectionShellProps = {
  id: string;
  ariaLabelledBy?: string;
  sectionClassName: string;
  separatorIcon: LucideIcon;
  overlays?: ReactNode;
  containerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  ariaLabelledBy,
  sectionClassName,
  separatorIcon,
  overlays,
  containerClassName = "relative mx-auto max-w-7xl",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={sectionClassName}
    >
      <SectionSeparator Icon={separatorIcon} />
      {overlays}
      <div className={containerClassName}>{children}</div>
    </section>
  );
}
