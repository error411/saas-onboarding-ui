import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionIntro } from "@/components/section-intro";

export function HeroSection() {
  return (
    <section className="section-space pt-12 md:pt-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <SectionIntro
            className="max-w-3xl"
            description="Coordinate setup tasks, owner handoffs, and launch milestones in a workspace that keeps teams aligned from kickoff to go-live."
            eyebrow="Customer onboarding"
            headingLevel="h1"
            size="hero"
            title="Launch every customer with a clear, shared plan."
          />
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#start">Create a plan</ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              See what is included
            </ButtonLink>
          </div>
        </div>
        <div
          aria-label="Onboarding progress preview"
          className="rounded-lg border border-border bg-card p-3 shadow-sm sm:p-4 lg:p-5"
        >
          <div className="rounded-md border border-border bg-background p-4 sm:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">Workspace setup</p>
                <p className="mt-1 text-sm text-muted">3 of 5 tasks complete</p>
              </div>
              <Badge>60%</Badge>
            </div>
            <div className="mt-6 space-y-5">
              {["Invite team", "Connect data", "Define first workflow"].map(
                (task, index) => (
                  <div className="grid grid-cols-[1.75rem_1fr] items-center gap-x-3 gap-y-2 sm:grid-cols-[1.75rem_1fr_8rem]" key={task}>
                    <span className="grid size-7 place-items-center rounded-full bg-accent text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="h-3 flex-1 rounded-full bg-border">
                      <div
                        className="h-3 rounded-full bg-accent"
                        style={{ width: `${90 - index * 22}%` }}
                      />
                    </div>
                    <span className="col-start-2 text-sm font-medium text-muted sm:col-start-auto">
                      {task}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
