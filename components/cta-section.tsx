import { OnboardingForm } from "@/components/onboarding-form";

export function CtaSection() {
  return (
    <section className="section-space" id="start">
      <div className="container-page">
        <div className="grid gap-8 rounded-lg border border-foreground bg-foreground p-8 text-background shadow-lg lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-12">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Start with one customer journey.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-background/75 md:text-lg md:leading-8">
              Create a repeatable plan for sales handoff, setup, training, and
              launch readiness.
            </p>
            <p className="mt-6 max-w-xl text-sm font-medium text-background/70">
              Capture the essentials first, then turn them into a launch plan your team can refine.
            </p>
          </div>
          <OnboardingForm />
        </div>
      </div>
    </section>
  );
}
