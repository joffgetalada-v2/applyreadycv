import {
  ACTION_VERBS,
  GENERIC_PHRASES,
  MODE_PROFILES,
  extractMeaningfulKeywords,
  keywordAppears,
  normalizeText,
} from "./keywords";
import { analyzeRoleFit } from "./analyzeRoleFit";
import type { AnalysisCategories, AnalysisMode, AnalysisResult } from "./types";

type AnalyzeResumeInput = {
  mode: AnalysisMode;
  resumeText: string;
  jobDescription?: string;
};

const CATEGORY_MAX: AnalysisCategories = {
  atsReadability: 25,
  jobMatch: 25,
  clarityAchievements: 20,
  modeFit: 20,
  completeness: 10,
};

function clampScore(value: number, max: number) {
  return Math.max(0, Math.min(max, Math.round(value)));
}

function countPresentPhrases(text: string, phrases: string[]) {
  return phrases.filter((phrase) => keywordAppears(text, phrase)).length;
}

function hasSection(text: string, sectionNames: string[]) {
  const normalized = normalizeText(text);
  return sectionNames.some((section) =>
    new RegExp(`(^|\\s)${section.replace(/\s+/g, "\\s+")}(\\s|:|$)`, "i").test(
      normalized,
    ),
  );
}

function detectMeasurableLines(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) =>
      /(\b\d+([.,]\d+)?\s?(%|percent|k|m|x|users|clients|customers|projects|tickets|calls|hours|days|weeks|months|years|revenue|sales|budget|team|people)\b|[$]\s?\d+|\b(increased|reduced|improved|saved|grew|decreased|raised|cut|delivered)\b)/i.test(
        line,
      ),
    );
}

function hasFormattingWarning(text: string) {
  const lines = text.split(/\r?\n/);
  const veryLongLines = lines.filter((line) => line.length > 220).length;
  return (
    /[�]/.test(text) ||
    /(?:Ã|â€|Â)/.test(text) ||
    veryLongLines >= 3 ||
    text.replace(/\s/g, "").length < 60
  );
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function scoreLabel(score: number) {
  if (score >= 85) {
    return "Application-ready";
  }

  if (score >= 70) {
    return "Strong foundation";
  }

  if (score >= 50) {
    return "Getting there";
  }

  return "Needs work";
}

function buildSummary(score: number, mode: AnalysisMode, hasJobDescription: boolean) {
  const applicationType =
    mode === "general"
      ? "general application"
      : `${MODE_PROFILES[mode].name.toLowerCase()} application`;

  if (score >= 85) {
    return `Your CV is in strong shape for a ${applicationType}. Review the keyword and application-fit suggestions before sending it.`;
  }

  if (score >= 70) {
    return `Your CV has a solid base for a ${applicationType}, with a few practical gaps to close before applying.`;
  }

  if (score >= 50) {
    return `Your CV has useful material, but it needs clearer evidence, stronger structure, and ${hasJobDescription ? "better keyword alignment" : "a job post comparison"} before it is ready.`;
  }

  return `Your CV needs more complete content and clearer application fit before it will be easy for hiring teams to assess.`;
}

export function analyzeResume({
  mode,
  resumeText,
  jobDescription = "",
}: AnalyzeResumeInput): AnalysisResult {
  const normalizedResume = normalizeText(resumeText);
  const words = normalizedResume ? normalizedResume.split(/\s+/) : [];
  const wordCount = words.length;
  const lines = resumeText.split(/\r?\n/).filter((line) => line.trim().length > 0);
  const jobText = jobDescription.trim();
  const hasJobDescription = jobText.length > 0;

  const hasEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(resumeText);
  const hasPhone =
    /(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{4}/.test(
      resumeText,
    );
  const hasProfileLink = /(linkedin\.com|github\.com|behance\.net|dribbble\.com|portfolio|https?:\/\/)/i.test(
    resumeText,
  );
  const hasContactInfo = hasEmail || hasPhone || hasProfileLink;
  const hasExperience = hasSection(resumeText, [
    "experience",
    "work experience",
    "employment",
    "work history",
    "professional experience",
  ]);
  const hasEducation = hasSection(resumeText, [
    "education",
    "degree",
    "university",
    "college",
    "certification",
    "certifications",
  ]);
  const hasSkills = hasSection(resumeText, [
    "skills",
    "technical skills",
    "core skills",
    "tools",
    "technologies",
  ]);
  const hasProjects = hasSection(resumeText, [
    "projects",
    "selected projects",
    "portfolio",
    "case studies",
  ]);
  const formattingWarning = hasFormattingWarning(resumeText);
  const measurableLines = detectMeasurableLines(resumeText);
  const actionVerbCount = countPresentPhrases(resumeText, ACTION_VERBS);
  const genericPhraseCount = countPresentPhrases(resumeText, GENERIC_PHRASES);
  const bulletLikeLines = lines.filter((line) =>
    /^\s*(-|\*|\d+[.)])\s+/.test(line),
  ).length;

  const jobKeywords = hasJobDescription ? extractMeaningfulKeywords(jobText, 20) : [];
  const matchedKeywords = jobKeywords
    .filter((keyword) => keywordAppears(resumeText, keyword))
    .slice(0, 12);
  const missingKeywords = jobKeywords
    .filter((keyword) => !keywordAppears(resumeText, keyword))
    .slice(0, 12);

  const modeProfile = MODE_PROFILES[mode];
  const modeMatches = modeProfile.signals.filter((signal) =>
    keywordAppears(resumeText, signal),
  );

  let atsReadability = 0;
  atsReadability += wordCount >= 250 ? 4 : wordCount >= 140 ? 2 : 0;
  atsReadability += hasContactInfo ? 4 : 0;
  atsReadability += hasExperience ? 4 : 0;
  atsReadability += hasSkills ? 4 : 0;
  atsReadability += hasEducation ? 3 : 0;
  atsReadability += actionVerbCount >= 6 ? 3 : actionVerbCount >= 3 ? 1 : 0;
  atsReadability += formattingWarning ? 0 : 3;

  let jobMatch = 0;
  if (hasJobDescription) {
    const keywordRatio =
      jobKeywords.length > 0 ? matchedKeywords.length / jobKeywords.length : 0;
    jobMatch = clampScore(keywordRatio * 23 + (matchedKeywords.length >= 5 ? 2 : 0), 25);
  } else {
    jobMatch = wordCount >= 250 ? 10 : 7;
  }

  let clarityAchievements = 0;
  clarityAchievements += measurableLines.length >= 4 ? 6 : measurableLines.length >= 2 ? 4 : measurableLines.length >= 1 ? 2 : 0;
  clarityAchievements += actionVerbCount >= 9 ? 4 : actionVerbCount >= 5 ? 3 : actionVerbCount >= 2 ? 1 : 0;
  clarityAchievements += bulletLikeLines >= 4 || lines.length >= 8 ? 4 : lines.length >= 4 ? 2 : 0;
  clarityAchievements += genericPhraseCount <= 1 ? 3 : genericPhraseCount <= 3 ? 1 : 0;
  clarityAchievements += wordCount >= 180 && wordCount <= 1100 ? 3 : wordCount > 1100 ? 1 : 0;

  const modeThreshold = mode === "local" ? 8 : mode === "general" ? 6 : 7;
  const modeFit = clampScore((modeMatches.length / modeThreshold) * 20, 20);

  let completeness = 0;
  completeness += hasContactInfo ? 2 : 0;
  completeness += hasExperience ? 2 : 0;
  completeness += hasSkills ? 2 : 0;
  completeness += hasEducation ? 2 : 0;
  completeness += wordCount >= 320 || hasProjects || measurableLines.length >= 2 ? 2 : 0;

  const categories: AnalysisCategories = {
    atsReadability: clampScore(atsReadability, CATEGORY_MAX.atsReadability),
    jobMatch: clampScore(jobMatch, CATEGORY_MAX.jobMatch),
    clarityAchievements: clampScore(
      clarityAchievements,
      CATEGORY_MAX.clarityAchievements,
    ),
    modeFit,
    completeness: clampScore(completeness, CATEGORY_MAX.completeness),
  };
  const score = Object.values(categories).reduce((total, value) => total + value, 0);

  const warnings: string[] = [];
  if (wordCount < 140) {
    warnings.push("Resume text appears too short for a reliable review.");
  }
  if (!hasContactInfo) {
    warnings.push("Contact information was not clearly detected.");
  }
  if (!hasExperience) {
    warnings.push("Work experience section was not clearly detected.");
  }
  if (!hasSkills) {
    warnings.push("Skills section was not clearly detected.");
  }
  if (!hasEducation) {
    warnings.push("Education or certification details were not clearly detected.");
  }
  if (!hasJobDescription) {
    warnings.push("No job description provided; keyword matching is limited.");
  }
  if (formattingWarning) {
    warnings.push("Possible formatting or text extraction issues were detected.");
  }
  if (actionVerbCount < 4) {
    warnings.push("Few action verbs were detected.");
  }
  if (genericPhraseCount >= 3) {
    warnings.push("Several generic phrases were detected.");
  }

  const topFixes = unique([
    !hasContactInfo ? "Add clear contact details, such as email, phone, LinkedIn, or portfolio." : "",
    !hasExperience ? "Add a clearly labeled work experience or selected projects section." : "",
    !hasSkills ? "Add a skills section with tools, systems, and role-relevant capabilities." : "",
    measurableLines.length < 2
      ? "Turn responsibilities into measurable achievements with numbers, scope, or outcomes."
      : "",
    !hasJobDescription
      ? "Paste the job description to compare your CV against the actual role keywords."
      : "",
    missingKeywords.length > 0
      ? `Consider adding truthful evidence for missing keywords such as ${missingKeywords
          .slice(0, 3)
          .join(", ")}.`
      : "",
    modeMatches.length < 3 ? modeProfile.suggestions[0] : "",
    genericPhraseCount >= 3
      ? "Replace generic claims with concrete examples, tools, metrics, or results."
      : "",
    wordCount < 250
      ? "Add enough detail for hiring teams to understand scope, dates, tools, and outcomes."
      : "",
  ]).slice(0, 5);

  const strengths = unique([
    hasContactInfo ? "Contact details are visible enough for a recruiter to follow up." : "",
    hasSkills ? "A skills or tools section is present." : "",
    hasExperience ? "Experience history is labeled clearly." : "",
    measurableLines.length >= 2 ? "The CV includes measurable outcomes or concrete scope." : "",
    actionVerbCount >= 6 ? "Action-oriented language is present." : "",
    matchedKeywords.length >= 5 ? "Several job description keywords are already represented." : "",
    modeMatches.length >= 4
      ? `${modeProfile.name} signals are visible, including ${modeMatches
          .slice(0, 3)
          .join(", ")}.`
      : "",
    !formattingWarning && wordCount >= 180 ? "Extracted text looks readable for a basic ATS-style scan." : "",
  ]);

  const modeSpecificSuggestions = unique([
    ...modeProfile.suggestions,
    modeMatches.length > 0
      ? `Detected ${modeProfile.shortName.toLowerCase()} signals: ${modeMatches
          .slice(0, 5)
          .join(", ")}.`
      : `No strong ${modeProfile.shortName.toLowerCase()}-specific signals were detected yet.`,
  ]).slice(0, 5);

  return {
    score,
    label: scoreLabel(score),
    summary: buildSummary(score, mode, hasJobDescription),
    categories,
    roleFitCompass: analyzeRoleFit(resumeText, jobDescription, mode),
    strengths:
      strengths.length > 0
        ? strengths.slice(0, 6)
        : ["There is enough text to start a basic readability review."],
    topFixes:
      topFixes.length > 0
        ? topFixes
        : ["Review the report details and tailor the strongest points to the target role."],
    missingKeywords,
    matchedKeywords,
    modeSpecificSuggestions,
    warnings,
  };
}
