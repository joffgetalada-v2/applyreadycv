import type { AnalysisMode } from "@/lib/analyzer/types";

export type CheckerCtaContext = {
  sourceType: "homepage" | "landing_page" | "guide";
  sourcePath: string;
  ctaLocation: "hero" | "sidebar" | "article";
  targetMode: AnalysisMode;
  guideSlug?: string;
};

export function buildCheckerCtaEvent(context: CheckerCtaContext) {
  const properties: Record<string, string> = {
    source_type: context.sourceType,
    source_path: context.sourcePath,
    cta_location: context.ctaLocation,
    target_mode: context.targetMode,
  };

  if (context.guideSlug) {
    properties.guide_slug = context.guideSlug;
  }

  return {
    name: "checker_cta_clicked" as const,
    properties,
  };
}
