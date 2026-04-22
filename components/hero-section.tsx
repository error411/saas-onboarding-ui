import { ButtonLink } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Customer onboarding
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            Launch every customer with a clear, shared plan.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Coordinate setup tasks, owner handoffs, and launch milestones in a
            workspace that keeps teams aligned from kickoff to go-live.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#start">Create a plan</ButtonLink>
            <ButtonLink href="#features" variant="secondary">
              See what is included
            </ButtonLink>
          </div>
        </div>
        <div
          aria-label="Onboarding progress preview"
          className="rounded-lg border border-border bg-card p-4 shadow-sm"
        >
          <div className="rounded-md border border-border bg-background p-5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-sm font-semibold text-foreground">Workspace setup</p>
                <p className="mt-1 text-sm text-muted">3 of 5 tasks complete</p>
              </div>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-strong">
                60%
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {["Invite team", "Connect data", "Define first workflow"].map(
                (task, index) => (
                  <div className="flex items-center gap-3" key={task}>
                    <span className="grid size-7 place-items-center rounded-full bg-accent text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="h-3 flex-1 rounded-full bg-border">
                      <div
                        className="h-3 rounded-full bg-accent"
                        style={{ width: `${90 - index * 22}%` }}
                      />
                    </div>
                    <span className="w-28 text-sm font-medium text-muted sm:w-32">
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
