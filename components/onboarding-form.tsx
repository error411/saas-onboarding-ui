"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = ["Account", "Goals", "Launch"];

type FieldName = "companyName" | "teamSize" | "launchGoal";

type FormValues = Record<FieldName, string>;

const initialValues: FormValues = {
  companyName: "",
  teamSize: "",
  launchGoal: "",
};

function validate(values: FormValues) {
  return {
    companyName: values.companyName.trim() ? "" : "Add a company name.",
    teamSize: values.teamSize ? "" : "Choose a team size.",
    launchGoal: values.launchGoal.trim() ? "" : "Describe the first launch goal.",
  };
}

export function OnboardingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const errors = useMemo(() => validate(values), [values]);
  const visibleErrors = Object.entries(errors).filter(
    ([field, message]) => touched[field as FieldName] && message,
  );
  const completedFields = Object.values(values).filter((value) => value.trim()).length;
  const currentStep = Math.min(completedFields, steps.length - 1);
  const hasErrors = Object.values(errors).some(Boolean);

  function updateField(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setIsComplete(false);
  }

  function markTouched(field: FieldName) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({
      companyName: true,
      teamSize: true,
      launchGoal: true,
    });

    if (hasErrors) {
      return;
    }

    setIsLoading(true);
    window.setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
    }, 700);
  }

  return (
    <form
      className="rounded-lg border border-background/15 bg-background p-5 text-foreground shadow-sm sm:p-6"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-accent">Onboarding plan</p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">
            Create your first journey
          </h3>
        </div>
        <Badge>Step {currentStep + 1}</Badge>
      </div>

      <ol className="mt-6 grid grid-cols-3 gap-2" aria-label="Onboarding progress">
        {steps.map((step, index) => (
          <li aria-current={index === currentStep ? "step" : undefined} key={step}>
            <div
              className={cn(
                "h-2 rounded-full bg-border",
                index <= currentStep && "bg-accent",
              )}
            />
            <p className="mt-2 text-xs font-medium text-muted">{step}</p>
          </li>
        ))}
      </ol>

      <div className="mt-7 space-y-5">
        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="companyName">
            Company name
          </label>
          <input
            aria-describedby={
              touched.companyName && errors.companyName ? "companyName-error" : undefined
            }
            aria-invalid={Boolean(touched.companyName && errors.companyName)}
            className="mt-2 min-h-11 w-full rounded-md border border-border bg-card px-3 text-base outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-soft"
            id="companyName"
            onBlur={() => markTouched("companyName")}
            onChange={(event) => updateField("companyName", event.target.value)}
            placeholder="Northstar Labs"
            value={values.companyName}
          />
          {touched.companyName && errors.companyName ? (
            <p className="mt-2 text-sm font-medium text-accent-strong" id="companyName-error">
              {errors.companyName}
            </p>
          ) : null}
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-foreground">
            Implementation team size
          </legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {["1-3", "4-8", "9+"].map((size) => (
              <label
                className={cn(
                  "flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-border bg-card px-3 text-sm font-semibold transition",
                  values.teamSize === size && "border-accent bg-accent-soft text-accent-strong",
                )}
                key={size}
              >
                <input
                  className="sr-only"
                  name="teamSize"
                  onBlur={() => markTouched("teamSize")}
                  onChange={() => updateField("teamSize", size)}
                  type="radio"
                  value={size}
                />
                {size}
              </label>
            ))}
          </div>
          {touched.teamSize && errors.teamSize ? (
            <p className="text-sm font-medium text-accent-strong">{errors.teamSize}</p>
          ) : null}
        </fieldset>

        <div>
          <label className="text-sm font-semibold text-foreground" htmlFor="launchGoal">
            First launch goal
          </label>
          <textarea
            aria-describedby={
              touched.launchGoal && errors.launchGoal ? "launchGoal-error" : undefined
            }
            aria-invalid={Boolean(touched.launchGoal && errors.launchGoal)}
            className="mt-2 min-h-24 w-full resize-none rounded-md border border-border bg-card px-3 py-3 text-base leading-6 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent-soft"
            id="launchGoal"
            onBlur={() => markTouched("launchGoal")}
            onChange={(event) => updateField("launchGoal", event.target.value)}
            placeholder="Launch the workspace for the first customer success team."
            value={values.launchGoal}
          />
          {touched.launchGoal && errors.launchGoal ? (
            <p className="mt-2 text-sm font-medium text-accent-strong" id="launchGoal-error">
              {errors.launchGoal}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          className="w-full sm:w-auto"
          disabled={visibleErrors.length > 0}
          isLoading={isLoading}
          type="submit"
        >
          Generate plan
        </Button>
        {isComplete ? (
          <p className="text-sm font-medium text-accent-strong">Plan draft ready for review.</p>
        ) : (
          <p className="text-sm text-muted">Takes less than a minute.</p>
        )}
      </div>
    </form>
  );
}
