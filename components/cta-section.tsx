import { ButtonLink } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section-space" id="start">
      <div className="container-page">
        <div className="grid gap-8 rounded-lg border border-foreground bg-foreground p-8 text-background shadow-lg md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Start with one customer journey.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-background/75 md:text-lg md:leading-8">
              Create a repeatable plan for sales handoff, setup, training, and
              launch readiness.
            </p>
          </div>
          <ButtonLink href="#features" variant="light" className="w-full sm:w-auto">
            Review plan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
