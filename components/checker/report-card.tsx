import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  Compass,
  Copy,
  RotateCcw,
  Target,
} from "lucide-react";
import type {
  AnalysisResult,
  RoleFitLevel,
  RoleSuggestion,
} from "@/lib/analyzer/types";
import { ScoreMeter } from "@/components/checker/score-meter";

type ReportCardProps = {
  result: AnalysisResult;
  copied: boolean;
  onCopy: () => void;
  onStartOver: () => void;
};

const categoryRows = [
  { key: "atsReadability", label: "ATS readability", max: 25 },
  { key: "jobMatch", label: "Job match", max: 25 },
  { key: "clarityAchievements", label: "Clarity and achievements", max: 20 },
  { key: "modeFit", label: "Mode fit", max: 20 },
  { key: "completeness", label: "Completeness", max: 10 },
] as const;

function labelClass(label: string) {
  if (label === "Application-ready") {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (label === "Strong foundation") {
    return "border-blue-200 bg-blue-50 text-blue-700";
  }

  if (label === "Getting there") {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  return "border-rose-200 bg-rose-50 text-rose-700";
}

function roleFitClass(level: RoleFitLevel) {
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

export function ReportCard({
  result,
  copied,
  onCopy,
  onStartOver,
}: ReportCardProps) {
  return (
    <section
      aria-labelledby="report-heading"
      className="rounded-lg border border-slate-200 bg-white"
    >
      <div className="grid gap-5 border-b border-slate-200 p-5 md:grid-cols-[auto_1fr] md:items-center">
        <ScoreMeter value={result.score} label="readiness" size="sm" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 id="report-heading" className="text-2xl font-semibold text-slate-950">
              CV readiness report
            </h3>
            <span
              className={`rounded-md border px-3 py-1 text-sm font-semibold ${labelClass(
                result.label,
              )}`}
            >
              {result.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{result.summary}</p>
        </div>
      </div>

      <div className="grid gap-6 p-5 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-6">
          <section aria-labelledby="category-breakdown">
            <h4 id="category-breakdown" className="text-sm font-semibold text-slate-950">
              Score breakdown
            </h4>
            <div className="mt-4 space-y-4">
              {categoryRows.map((category) => {
                const value = result.categories[category.key];
                const percent = Math.round((value / category.max) * 100);

                return (
                  <div key={category.key}>
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-700">
                        {category.label}
                      </span>
                      <span className="font-semibold text-slate-950">
                        {value} / {category.max}
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-md bg-slate-100">
                      <div
                        className="h-2 rounded-md bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="keyword-results">
            <h4 id="keyword-results" className="text-sm font-semibold text-slate-950">
              Job keywords
            </h4>
            <div className="mt-3 grid gap-3">
              <KeywordGroup title="Matched" items={result.matchedKeywords} />
              <KeywordGroup title="Missing" items={result.missingKeywords} />
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section
            aria-labelledby="role-fit-suggestions"
            className="rounded-lg border border-indigo-100 bg-indigo-50/40 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4
                id="role-fit-suggestions"
                className="flex items-center gap-2 text-sm font-semibold text-slate-950"
              >
                <Compass className="h-4 w-4 text-indigo-700" aria-hidden="true" />
                Role fit suggestions
              </h4>
              <span
                className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${roleFitClass(
                  result.roleFitCompass.targetFitLevel,
                )}`}
              >
                {result.roleFitCompass.targetFitLabel}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {result.roleFitCompass.targetFitSummary}
            </p>
            <div className="mt-4 grid gap-3">
              {result.roleFitCompass.alignedRoleFamilies.slice(0, 3).map((role) => (
                <div
                  key={role.title}
                  className="rounded-lg border border-slate-200 bg-white p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="flex gap-2 text-sm font-semibold text-slate-950">
                      <Target
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-700"
                        aria-hidden="true"
                      />
                      <span>{role.title}</span>
                    </p>
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[11px] font-semibold capitalize ${confidenceClass(
                        role.confidence,
                      )}`}
                    >
                      {role.confidence}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {role.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="top-fixes">
            <h4 id="top-fixes" className="text-sm font-semibold text-slate-950">
              Top recommended fixes
            </h4>
            <ol className="mt-3 space-y-2">
              {result.topFixes.map((fix, index) => (
                <li
                  key={fix}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-950 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{fix}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="strengths">
            <h4 id="strengths" className="text-sm font-semibold text-slate-950">
              Strengths detected
            </h4>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700">
              {result.strengths.map((strength) => (
                <li key={strength} className="flex gap-2">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="grid gap-5 border-t border-slate-200 p-5 lg:grid-cols-2">
        <section aria-labelledby="mode-suggestions">
          <h4 id="mode-suggestions" className="text-sm font-semibold text-slate-950">
            Mode-specific suggestions
          </h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {result.modeSpecificSuggestions.map((suggestion) => (
              <li key={suggestion} className="border-l-2 border-indigo-200 pl-3">
                {suggestion}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="warnings">
          <h4 id="warnings" className="text-sm font-semibold text-slate-950">
            Warnings and disclaimer
          </h4>
          {result.warnings.length > 0 && (
            <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-800">
              {result.warnings.map((warning) => (
                <li key={warning} className="flex gap-2">
                  <AlertTriangle
                    className="mt-1 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
            This tool cannot guarantee interviews or ATS approval. It checks
            readability, relevance, completeness, and common application issues.
          </p>
        </section>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200 p-5 sm:flex-row">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          <Copy className="h-4 w-4" aria-hidden="true" />
          {copied ? "Copied" : "Copy recommendations"}
        </button>
        <button
          type="button"
          onClick={onStartOver}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Start over
        </button>
      </div>
    </section>
  );
}

function KeywordGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-slate-500">
        <ClipboardList className="h-3.5 w-3.5" aria-hidden="true" />
        {title}
      </div>
      {items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500">None detected yet.</p>
      )}
    </div>
  );
}
