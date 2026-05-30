"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Compass,
  Lightbulb,
  LockKeyhole,
  Route,
  Target,
} from "lucide-react";
import { checkerModes } from "@/components/checker/mode-selector";
import type {
  AnalysisMode,
  RoleFitCompass,
  RoleFitLevel,
  RoleSuggestion,
} from "@/lib/analyzer/types";

type RoleFitCompassPanelProps = {
  mode: AnalysisMode;
  compass: RoleFitCompass | null;
  hasResumeText: boolean;
  hasJobDescription: boolean;
  isExtracting?: boolean;
  fileName?: string;
};

function fitLevelClass(level: RoleFitLevel) {
  const classes: Record<RoleFitLevel, string> = {
    strong: "border-emerald-200 bg-emerald-50 text-emerald-800",
    moderate: "border-indigo-200 bg-indigo-50 text-indigo-800",
    stretch: "border-amber-200 bg-amber-50 text-amber-800",
    weak: "border-orange-200 bg-orange-50 text-orange-800",
    mismatch: "border-rose-200 bg-rose-50 text-rose-800",
  };

  return classes[level];
}

function confidenceClass(confidence: RoleSuggestion["confidence"]) {
  if (confidence === "high") {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }

  if (confidence === "medium") {
    return "border-blue-200 bg-blue-50 text-blue-800";
  }

  return "border-slate-200 bg-slate-50 text-slate-600";
}

export function RoleFitCompassPanel({
  mode,
  compass,
  hasResumeText,
  hasJobDescription,
  isExtracting = false,
  fileName = "",
}: RoleFitCompassPanelProps) {
  const selectedMode =
    checkerModes.find((item) => item.value === mode) ?? checkerModes[0];

  return (
    <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-indigo-700">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Role Fit Compass
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">
              {compass ? "Target-role decision aid" : "Preview before analysis"}
            </h2>
          </div>
          <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {selectedMode.label}
          </span>
        </div>

        {compass ? (
          <CompassResults compass={compass} />
        ) : (
          <CompassPreview
            hasResumeText={hasResumeText}
            hasJobDescription={hasJobDescription}
            isExtracting={isExtracting}
            fileName={fileName}
            modeDetail={selectedMode.detail}
          />
        )}
      </div>

      <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4">
        <p className="flex items-start gap-2 text-sm leading-6 text-emerald-900">
          <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Resume and job text stay in this browser session. The compass uses
          local, deterministic rules and does not fetch live job listings.
        </p>
      </div>
    </aside>
  );
}

function CompassPreview({
  hasResumeText,
  hasJobDescription,
  isExtracting,
  fileName,
  modeDetail,
}: {
  hasResumeText: boolean;
  hasJobDescription: boolean;
  isExtracting: boolean;
  fileName: string;
  modeDetail: string;
}) {
  const checklist = [
    {
      label: hasResumeText ? "CV text ready" : "Add CV text or upload a file",
      active: hasResumeText,
    },
    {
      label: hasJobDescription
        ? "Job description ready"
        : "Paste a job description for target fit",
      active: hasJobDescription,
    },
    {
      label: `Mode signals: ${modeDetail}`,
      active: true,
    },
  ];

  return (
    <div className="mt-5 space-y-5">
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <Target className="h-4 w-4 text-indigo-700" aria-hidden="true" />
          What it will check
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
          {checklist.map((item) => (
            <li key={item.label} className="flex gap-2">
              <CheckCircle2
                className={`mt-1 h-4 w-4 shrink-0 ${
                  item.active ? "text-emerald-700" : "text-slate-300"
                }`}
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        {isExtracting && (
          <p className="mt-3 rounded-md border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-800">
            Extracting text locally{fileName ? ` from ${fileName}` : ""}.
          </p>
        )}
      </div>

      <div className="rounded-lg border border-indigo-100 bg-indigo-50/70 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-indigo-950">
          <Route className="h-4 w-4" aria-hidden="true" />
          After analysis
        </p>
        <p className="mt-2 text-sm leading-6 text-indigo-950/80">
          You will see a fit badge, role-family directions that appear aligned,
          possible stretch paths, missing proof for the target role, and one next
          best action.
        </p>
      </div>
    </div>
  );
}

function CompassResults({ compass }: { compass: RoleFitCompass }) {
  return (
    <div className="mt-5 space-y-5">
      <div>
        <span
          className={`inline-flex rounded-md border px-3 py-1 text-sm font-semibold ${fitLevelClass(
            compass.targetFitLevel,
          )}`}
        >
          {compass.targetFitLabel}
        </span>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {compass.targetFitSummary}
        </p>
      </div>

      <SignalBox title="CV signals" items={compass.detectedResumeSignals} />
      <SignalBox title="Target signals" items={compass.detectedJobSignals} />

      <SuggestionList
        title="Best aligned roles"
        icon="check"
        suggestions={compass.alignedRoleFamilies}
      />

      {compass.stretchRoleFamilies.length > 0 && (
        <SuggestionList
          title="Stretch or adjacent roles"
          icon="route"
          suggestions={compass.stretchRoleFamilies}
        />
      )}

      <MissingProof items={compass.missingProofForTarget} />

      {compass.lessAlignedRoles.length > 0 && (
        <SuggestionList
          title="Less aligned target"
          icon="alert"
          suggestions={compass.lessAlignedRoles}
        />
      )}

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-950">
          <Lightbulb className="h-4 w-4 text-indigo-700" aria-hidden="true" />
          Next best action
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {compass.nextBestAction}
        </p>
      </div>
    </div>
  );
}

function SignalBox({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <ul className="mt-2 space-y-2 text-xs leading-5 text-slate-600">
        {items.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SuggestionList({
  title,
  icon,
  suggestions,
}: {
  title: string;
  icon: "check" | "route" | "alert";
  suggestions: RoleSuggestion[];
}) {
  const Icon =
    icon === "check" ? CheckCircle2 : icon === "route" ? Route : AlertTriangle;
  const iconColor =
    icon === "check"
      ? "text-emerald-700"
      : icon === "route"
        ? "text-amber-700"
        : "text-rose-700";

  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 space-y-3">
        {suggestions.slice(0, 3).map((suggestion) => (
          <div
            key={`${title}-${suggestion.title}`}
            className="rounded-lg border border-slate-200 bg-white p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="flex gap-2 text-sm font-semibold text-slate-950">
                <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconColor}`} aria-hidden="true" />
                <span>{suggestion.title}</span>
              </p>
              <span
                className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-semibold capitalize ${confidenceClass(
                  suggestion.confidence,
                )}`}
              >
                {suggestion.confidence}
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              {suggestion.reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissingProof({ items }: { items: string[] }) {
  if (items.length === 0) {
    return (
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-sm font-semibold text-slate-950">
          Missing proof for target job
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          No major missing proof was detected from the available target-role
          signals. Review the job description manually before applying.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h3 className="text-sm font-semibold text-slate-950">
        Missing proof for target job
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.slice(0, 7).map((item) => (
          <span
            key={item}
            className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
