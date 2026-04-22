import type { ElementType } from "react";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  className?: string;
  description: string;
  eyebrow: string;
  headingLevel?: "h1" | "h2";
  size?: "default" | "hero";
  title: string;
};

const titleClasses = {
  default: "text-3xl md:text-5xl",
  hero: "text-5xl md:text-6xl lg:text-7xl",
};

const descriptionClasses = {
  default: "text-base leading-7 md:text-lg md:leading-8",
  hero: "text-lg leading-8 md:text-xl md:leading-9",
};

export function SectionIntro({
  className,
  description,
  eyebrow,
  headingLevel = "h2",
  size = "default",
  title,
}: SectionIntroProps) {
  const Heading = headingLevel as ElementType;

  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "mt-3 font-semibold leading-tight tracking-tight text-foreground",
          size === "hero" && "mt-4 leading-[1.05]",
          titleClasses[size],
        )}
      >
        {title}
      </Heading>
      <p className={cn("mt-5 text-muted", size === "hero" && "mt-6", descriptionClasses[size])}>
        {description}
      </p>
    </div>
  );
}
