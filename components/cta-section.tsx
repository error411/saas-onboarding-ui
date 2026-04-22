import { ButtonLink } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section-space" id="start">
      <div className="container-page">
        <div className="grid gap-8 rounded-lg border border-border bg-foreground p-8 text-background md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Start with one customer journey.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-background/75">
              Create a repeatable plan for sales handoff, setup, training, and
              launch readiness.
            </p>
          </div>
          <ButtonLink href="#features" variant="light">
            Review plan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
