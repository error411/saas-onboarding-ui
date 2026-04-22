import { CtaSection } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const features = [
  {
    title: "Guided setup",
    description:
      "Turn kickoff notes into clear tasks that customers and internal teams can follow.",
  },
  {
    title: "Progress signals",
    description:
      "Track what is complete, what is blocked, and where a launch needs attention.",
  },
  {
    title: "Team handoffs",
    description:
      "Give success, support, and implementation teams one place to coordinate next steps.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <section className="section-space border-y border-border bg-card" id="features">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Focused onboarding
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Everything needed to guide a customer to value.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Keep the early customer journey organized without adding another
              heavy process for your team to maintain.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
