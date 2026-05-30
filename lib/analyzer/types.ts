export type AnalysisMode = "remote" | "freelance" | "local";

export type AnalysisCategories = {
  atsReadability: number;
  jobMatch: number;
  clarityAchievements: number;
  modeFit: number;
  completeness: number;
};

export type AnalysisResult = {
  score: number;
  label: string;
  summary: string;
  categories: AnalysisCategories;
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
