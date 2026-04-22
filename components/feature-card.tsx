import { Card } from "@/components/ui/card";
import type { Feature } from "@/types/feature";

export function FeatureCard({ title, description }: Feature) {
  return (
    <Card>
      <div className="mb-5 size-10 rounded-md bg-accent-soft" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </Card>
  );
}
