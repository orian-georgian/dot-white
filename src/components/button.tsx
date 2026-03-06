"use client";

import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "iconSolid" | "iconSoft";
type ButtonSize = "md" | "sm" | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center rounded-md font-semibold outline-none transition-all duration-200 ease-out hover:-translate-y-[5px] focus-visible:ring-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background shadow-sm shadow-foreground/6 hover:bg-foreground/92 hover:shadow-md hover:shadow-foreground/12 focus-visible:ring-foreground/60",
  secondary:
    "border border-foreground/35 bg-transparent text-foreground shadow-sm shadow-foreground/6 transition-colors transition-shadow hover:border-foreground/60 hover:bg-foreground/[0.08] hover:shadow-md hover:shadow-foreground/12 focus-visible:ring-foreground/60",
  iconSolid:
    "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground/60",
  iconSoft:
    "rounded-full border border-foreground/20 bg-background/80 text-foreground/85",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
  icon: "h-8 min-w-8 px-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={[
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    );
  },
);
