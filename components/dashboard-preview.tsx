import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active launches", value: "12", detail: "+3 this week" },
  { label: "Tasks completed", value: "84%", detail: "Across all plans" },
  { label: "At-risk accounts", value: "2", detail: "Needs attention" },
];

const launches = [
  {
    company: "Northstar Labs",
    owner: "Maya Chen",
    progress: 72,
    status: "On track",
  },
  {
    company: "Atlas Health",
    owner: "Jordan Lee",
    progress: 48,
    status: "Waiting on data",
  },
];

export function DashboardPreview() {
  return (
    <section className="section-space" id="dashboard">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Dashboard clarity
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Know what needs attention before launch day.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">
              Give implementation teams a concise view of progress, ownership,
              and blockers without burying them in operational noise.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <Card className="bg-background p-5" key={stat.label}>
                  <p className="text-sm font-medium text-muted">{stat.label}</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.detail}</p>
                </Card>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
              <Card className="bg-background p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Launch pipeline
                    </h3>
                    <p className="mt-1 text-sm text-muted">Next customer milestones</p>
                  </div>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-strong">
                    2 active
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {launches.map((launch) => (
                    <div
                      className="rounded-md border border-border bg-card p-4"
                      key={launch.company}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{launch.company}</p>
                          <p className="mt-1 text-sm text-muted">Owner: {launch.owner}</p>
                        </div>
                        <span
                          className={cn(
                            "w-fit rounded-full px-3 py-1 text-sm font-medium",
                            launch.progress >= 70
                              ? "bg-accent-soft text-accent-strong"
                              : "bg-background text-muted",
                          )}
                        >
                          {launch.status}
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-border">
                        <div
                          className="h-2 rounded-full bg-accent"
                          style={{ width: `${launch.progress}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-muted">
                        {launch.progress}% complete
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="flex min-h-full flex-col justify-between bg-background p-5">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Blocked work</h3>
                  <div className="mt-5 rounded-md border border-dashed border-border bg-card p-5 text-center">
                    <div
                      className="mx-auto grid size-10 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent-strong"
                      aria-hidden="true"
                    >
                      0
                    </div>
                    <p className="mt-4 font-semibold text-foreground">
                      No blocked launches
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      New blockers will appear here with owner and next-step context.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted">
                  Empty states keep quiet dashboards useful instead of looking unfinished.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
