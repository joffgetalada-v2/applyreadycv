"use client";

import { MapPin, MonitorCheck, PenTool } from "lucide-react";
import type { AnalysisMode } from "@/lib/analyzer/types";

export const checkerModes: Array<{
  value: AnalysisMode;
  label: string;
  description: string;
  detail: string;
  icon: typeof MonitorCheck;
}> = [
  {
    value: "remote",
    label: "Remote",
    description: "Remote Job",
    detail: "Async, tools, ownership, distributed teams.",
    icon: MonitorCheck,
  },
  {
    value: "freelance",
    label: "Freelance",
    description: "Freelance / Gig",
    detail: "Projects, deliverables, portfolio, client outcomes.",
    icon: PenTool,
  },
  {
    value: "local",
    label: "Local",
    description: "Local Job",
    detail: "Availability, location, qualifications, work history.",
    icon: MapPin,
  },
];

export function ModeSelector({
  value,
  onChange,
}: {
  value: AnalysisMode;
  onChange: (mode: AnalysisMode) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-950">
        Application mode
      </legend>
      <div className="mt-3 grid rounded-lg border border-slate-200 bg-slate-100 p-1 sm:grid-cols-3">
        {checkerModes.map(({ value: modeValue, label, description, icon: Icon }) => {
          const selected = value === modeValue;

          return (
            <button
              key={modeValue}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(modeValue)}
              className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${
                selected
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-600 hover:bg-white/60 hover:text-slate-950"
              }`}
              title={description}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
