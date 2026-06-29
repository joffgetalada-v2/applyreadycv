export type AnalysisMode = "general" | "remote" | "freelance" | "local";

export type AnalysisCategories = {
  atsReadability: number;
  jobMatch: number;
  clarityAchievements: number;
  modeFit: number;
  completeness: number;
};

export type RoleFitLevel = "strong" | "moderate" | "stretch" | "weak" | "mismatch";

export type RoleSuggestion = {
  title: string;
  reason: string;
  confidence: "high" | "medium" | "low";
};

export type RoleFitCompass = {
  targetFitLevel: RoleFitLevel;
  targetFitLabel: string;
  targetFitSummary: string;
  detectedResumeSignals: string[];
  detectedJobSignals: string[];
  alignedRoleFamilies: RoleSuggestion[];
  stretchRoleFamilies: RoleSuggestion[];
  lessAlignedRoles: RoleSuggestion[];
  missingProofForTarget: string[];
  nextBestAction: string;
};

export type AnalysisResult = {
  score: number;
  label: string;
  summary: string;
  categories: AnalysisCategories;
  roleFitCompass: RoleFitCompass;
  strengths: string[];
  topFixes: string[];
  missingKeywords: string[];
  matchedKeywords: string[];
  modeSpecificSuggestions: string[];
  warnings: string[];
};

export type ModeProfile = {
  name: string;
  shortName: string;
  description: string;
  signals: string[];
  suggestions: string[];
};
