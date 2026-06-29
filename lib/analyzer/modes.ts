import type { AnalysisMode } from "./types";

export const DEFAULT_ANALYSIS_MODE: AnalysisMode = "general";

export function isAnalysisMode(value: string | null): value is AnalysisMode {
  return (
    value === "general" ||
    value === "remote" ||
    value === "freelance" ||
    value === "local"
  );
}

export function resolveAnalysisMode(value: string | null): AnalysisMode {
  return isAnalysisMode(value) ? value : DEFAULT_ANALYSIS_MODE;
}
