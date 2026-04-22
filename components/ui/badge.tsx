import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "muted";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent-soft text-accent-strong",
  muted: "bg-background text-muted",
};

export function Badge({ className, variant = "accent", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-1 text-sm font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
