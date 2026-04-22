import { CtaSection } from "@/components/cta-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeatureCard } from "@/components/feature-card";
import { HeroSection } from "@/components/hero-section";
import { SectionIntro } from "@/components/section-intro";
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
          <SectionIntro
            description="Keep the early customer journey organized without adding another heavy process for your team to maintain."
            eyebrow="Focused onboarding"
            title="Everything needed to guide a customer to value."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <DashboardPreview />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
