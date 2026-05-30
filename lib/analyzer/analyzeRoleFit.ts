import { keywordAppears, normalizeText } from "./keywords";
import { roleFamilies, type RoleFamily } from "./roleTaxonomy";
import type {
  AnalysisMode,
  RoleFitCompass,
  RoleFitLevel,
  RoleSuggestion,
} from "./types";

type RoleScore = {
  family: RoleFamily;
  score: number;
  matchedTitles: string[];
  matchedKeywords: string[];
  matchedProofSignals: string[];
  matchedSenioritySignals: string[];
};

const RELATED_ROLE_FAMILIES: Record<string, string[]> = {
  "it-support-helpdesk": [
    "technical-support",
    "qa-software-testing",
    "software-development",
  ],
  "technical-support": [
    "it-support-helpdesk",
    "customer-support",
    "qa-software-testing",
  ],
  "software-development": [
    "web-development",
    "qa-software-testing",
    "it-support-helpdesk",
  ],
  "web-development": [
    "software-development",
    "qa-software-testing",
    "graphic-design-creative",
  ],
  "qa-software-testing": [
    "software-development",
    "web-development",
    "technical-support",
    "it-support-helpdesk",
  ],
  "data-entry-admin-support": [
    "virtual-assistant",
    "operations",
    "accounting-bookkeeping",
  ],
  "virtual-assistant": [
    "data-entry-admin-support",
    "customer-support",
    "marketing-content",
    "operations",
  ],
  "customer-support": [
    "technical-support",
    "virtual-assistant",
    "sales-business-development",
  ],
  "sales-business-development": ["marketing-content", "customer-support"],
  "marketing-content": [
    "graphic-design-creative",
    "sales-business-development",
    "virtual-assistant",
  ],
  "graphic-design-creative": ["marketing-content", "web-development"],
  "hr-recruitment": [
    "operations",
    "data-entry-admin-support",
    "project-management",
  ],
  "accounting-bookkeeping": ["data-entry-admin-support", "operations"],
  "project-management": ["operations", "software-development", "marketing-content"],
  operations: [
    "project-management",
    "data-entry-admin-support",
    "hr-recruitment",
  ],
  "healthcare-support": ["customer-support", "data-entry-admin-support"],
  "education-training": ["hr-recruitment", "customer-support"],
};

const SENIOR_TERMS = [
  "manager",
  "lead",
  "senior",
  "head",
  "director",
  "supervisor",
  "team management",
  "people management",
  "strategy",
  "budget ownership",
];

const JUNIOR_TERMS = [
  "intern",
  "entry level",
  "junior",
  "assistant",
  "associate",
  "trainee",
  "0-1 year",
  "1-2 years",
];

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function scoreTextAgainstFamily(text: string, family: RoleFamily, mode: AnalysisMode): RoleScore {
  if (!text.trim()) {
    return {
      family,
      score: 0,
      matchedTitles: [],
      matchedKeywords: [],
      matchedProofSignals: [],
      matchedSenioritySignals: [],
    };
  }

  const matchedTitles = family.titles.filter((title) => keywordAppears(text, title));
  const matchedKeywords = family.keywords.filter((keyword) =>
    keywordAppears(text, keyword),
  );
  const matchedProofSignals = family.proofSignals.filter((signal) =>
    keywordAppears(text, signal),
  );
  const matchedSenioritySignals = family.senioritySignals.filter((signal) =>
    keywordAppears(text, signal),
  );
  const modeBoost = family.modeFit.includes(mode) ? 1 : 0;
  const score =
    matchedTitles.length * 3 +
    matchedKeywords.length * 2 +
    matchedProofSignals.length * 1.5 +
    matchedSenioritySignals.length +
    modeBoost;

  return {
    family,
    score,
    matchedTitles,
    matchedKeywords,
    matchedProofSignals,
    matchedSenioritySignals,
  };
}

function scoreRoleFamilies(text: string, mode: AnalysisMode) {
  return roleFamilies
    .map((family) => scoreTextAgainstFamily(text, family, mode))
    .sort((a, b) => b.score - a.score || a.family.name.localeCompare(b.family.name));
}

function detectSeniority(text: string) {
  const normalized = normalizeText(text);
  const seniorTerms = SENIOR_TERMS.filter((term) => keywordAppears(normalized, term));
  const juniorTerms = JUNIOR_TERMS.filter((term) => keywordAppears(normalized, term));

  if (/\b(?:[5-9]|1\d)\+?\s*(?:years|yrs)\b/i.test(text)) {
    seniorTerms.push("5+ years");
  }

  if (/\b(?:0\s*-\s*1|1\s*-\s*2)\s*(?:years|yrs)\b/i.test(text)) {
    juniorTerms.push("0-2 years");
  }

  return {
    isSenior: seniorTerms.length > 0,
    isJunior: juniorTerms.length > 0,
    seniorTerms: unique(seniorTerms),
    juniorTerms: unique(juniorTerms),
  };
}

function areRelated(firstId: string, secondId: string) {
  return RELATED_ROLE_FAMILIES[firstId]?.includes(secondId) ?? false;
}

function confidenceForScore(score: number): RoleSuggestion["confidence"] {
  if (score >= 10) {
    return "high";
  }

  if (score >= 5) {
    return "medium";
  }

  return "low";
}

function matchPreview(score: RoleScore) {
  return unique([
    ...score.matchedTitles,
    ...score.matchedKeywords,
    ...score.matchedProofSignals,
  ]).slice(0, 4);
}

function buildRoleSuggestion(score: RoleScore, fallbackReason?: string): RoleSuggestion {
  const matches = matchPreview(score);
  const reason =
    matches.length > 0
      ? `Based on the text provided, this appears aligned with ${matches.join(", ")}.`
      : fallbackReason ??
        "This may be a better fit for the selected application mode, but the CV should add clearer proof.";

  return {
    title: score.family.titles[0],
    reason,
    confidence: confidenceForScore(score.score),
  };
}

function buildSignalSummaries(scores: RoleScore[], emptyLabel: string) {
  const summaries = scores
    .filter((score) => score.score > 1)
    .slice(0, 3)
    .map((score) => {
      const matches = matchPreview(score);
      return matches.length > 0
        ? `${score.family.name}: ${matches.join(", ")}`
        : score.family.name;
    });

  return summaries.length > 0 ? summaries : [emptyLabel];
}

function getTargetFitLabel(level: RoleFitLevel) {
  const labels: Record<RoleFitLevel, string> = {
    strong: "Strong target fit",
    moderate: "Moderate target fit",
    stretch: "Stretch target",
    weak: "Weak target fit",
    mismatch: "Likely mismatch",
  };

  return labels[level];
}

function buildSummary({
  level,
  resumeTop,
  jobTop,
  hasJobDescription,
  seniorStretch,
}: {
  level: RoleFitLevel;
  resumeTop: RoleScore;
  jobTop: RoleScore | null;
  hasJobDescription: boolean;
  seniorStretch: boolean;
}) {
  if (!hasJobDescription || !jobTop) {
    return `No job description was provided, so this uses the CV text and selected mode only. The CV appears most aligned with ${resumeTop.family.name}; consider targeting role families close to that evidence.`;
  }

  if (level === "strong") {
    return `Your CV and the pasted job description both appear aligned with ${jobTop.family.name} based on the text provided. Tighten the strongest matching proof before applying.`;
  }

  if (level === "moderate") {
    return `Your CV appears closest to ${resumeTop.family.name}, while the pasted role appears aligned with ${jobTop.family.name}. These directions are related, but the CV should make the target evidence easier to see.`;
  }

  if (level === "stretch" || seniorStretch) {
    return `The pasted role appears to ask for senior or broader ${jobTop.family.name} evidence. This may be a stretch unless the CV shows clearer ownership, scope, and missing proof for the target role.`;
  }

  if (level === "mismatch") {
    return `Your CV appears more aligned with ${resumeTop.family.name}, while the pasted job description appears more aligned with ${jobTop.family.name}. This does not mean you cannot apply, but the CV would need stronger target-role evidence.`;
  }

  return `The pasted job description appears different from the strongest CV signals. Consider targeting closer role families first, or add truthful evidence for the target role before applying.`;
}

function getModeFallbackScores(mode: AnalysisMode) {
  return roleFamilies
    .filter((family) => family.modeFit.includes(mode))
    .slice(0, 3)
    .map((family) => ({
      family,
      score: 1,
      matchedTitles: [],
      matchedKeywords: [],
      matchedProofSignals: [],
      matchedSenioritySignals: [],
    }));
}

function uniqueRoleScores(scores: RoleScore[]) {
  return scores.filter((score, index, list) => {
    const firstIndex = list.findIndex((item) => item.family.id === score.family.id);
    return firstIndex === index;
  });
}

function missingProofFor(family: RoleFamily, resumeText: string, seniorStretch: boolean) {
  const missing = family.proofSignals
    .filter((signal) => !keywordAppears(resumeText, signal))
    .slice(0, 7);

  if (seniorStretch) {
    return unique([
      "senior-level ownership or team leadership",
      ...missing,
    ]).slice(0, 7);
  }

  return missing;
}

function nextActionForLevel(
  level: RoleFitLevel,
  alignedRole: RoleScore,
  targetRole: RoleScore | null,
) {
  if (level === "strong") {
    return "Use the matched target-role language, then add measurable outcomes so the strongest evidence is easy to scan.";
  }

  if (level === "moderate") {
    return "Add two or three proof points that connect your current experience to the pasted job description before applying.";
  }

  if (level === "stretch") {
    return "Consider targeting adjacent roles first, or rewrite the CV with truthful proof for the senior scope requested in the pasted role.";
  }

  if (level === "mismatch") {
    return `Consider targeting ${alignedRole.family.name} roles first, or add clear evidence for ${targetRole?.family.name ?? "the pasted role"} if that is the direction you want.`;
  }

  return "Use a closer target role or add concrete, truthful examples that show the target-role responsibilities in your CV.";
}

export function analyzeRoleFit(
  resumeText: string,
  jobDescriptionText: string,
  mode: AnalysisMode,
): RoleFitCompass {
  const resumeScores = scoreRoleFamilies(resumeText, mode);
  const jobScores = scoreRoleFamilies(jobDescriptionText, mode);
  const fallbackScores = getModeFallbackScores(mode);
  const resumeTop = resumeScores.find((score) => score.score > 1) ?? fallbackScores[0];
  const hasJobDescription = jobDescriptionText.trim().length > 0;
  const jobTop = hasJobDescription
    ? jobScores.find((score) => score.score > 1) ?? null
    : null;
  const resumeScoreForTarget = jobTop
    ? resumeScores.find((score) => score.family.id === jobTop.family.id)
    : null;
  const resumeSeniority = detectSeniority(resumeText);
  const jobSeniority = detectSeniority(jobDescriptionText);
  const seniorStretch =
    Boolean(jobTop) &&
    jobSeniority.isSenior &&
    (!resumeSeniority.isSenior || resumeSeniority.isJunior);

  let targetFitLevel: RoleFitLevel = "moderate";

  if (!hasJobDescription || !jobTop) {
    targetFitLevel = resumeTop.score >= 5 ? "moderate" : "weak";
  } else {
    const sameFamily = resumeTop.family.id === jobTop.family.id;
    const related =
      areRelated(resumeTop.family.id, jobTop.family.id) ||
      areRelated(jobTop.family.id, resumeTop.family.id);
    const targetEvidenceScore = resumeScoreForTarget?.score ?? 0;

    if (sameFamily && seniorStretch) {
      targetFitLevel = "stretch";
    } else if (sameFamily) {
      targetFitLevel = targetEvidenceScore >= 9 && jobTop.score >= 7 ? "strong" : "moderate";
    } else if (related && seniorStretch) {
      targetFitLevel = "stretch";
    } else if (related) {
      targetFitLevel = targetEvidenceScore >= 4 ? "moderate" : "stretch";
    } else if (jobTop.score >= 7 && resumeTop.score >= 5 && targetEvidenceScore <= 2) {
      targetFitLevel = "mismatch";
    } else {
      targetFitLevel = "weak";
    }
  }

  const strongAlignedScores = resumeScores.filter((score) => score.score > 1);
  const adjacentAlignedScores = (RELATED_ROLE_FAMILIES[resumeTop.family.id] ?? [])
    .map((familyId) => resumeScores.find((score) => score.family.id === familyId))
    .filter((score): score is RoleScore => Boolean(score));
  const alignedScores = uniqueRoleScores([
    ...strongAlignedScores,
    ...adjacentAlignedScores,
    ...fallbackScores,
  ]).slice(0, 3);
  const alignedRoleFamilies = alignedScores.map((score) => buildRoleSuggestion(score));

  const relatedStretchScores = [
    ...(jobTop ? [jobTop] : []),
    ...((RELATED_ROLE_FAMILIES[resumeTop.family.id] ?? [])
      .map((familyId) => resumeScores.find((score) => score.family.id === familyId))
      .filter((score): score is RoleScore => Boolean(score))),
  ]
    .filter((score, index, list) => {
      const firstIndex = list.findIndex((item) => item.family.id === score.family.id);
      return firstIndex === index && !alignedScores.some((item) => item.family.id === score.family.id);
    })
    .slice(0, 3);

  const stretchRoleFamilies = relatedStretchScores.map((score) =>
    buildRoleSuggestion(
      score,
      "This may be an adjacent or stretch direction; add clearer proof before targeting it heavily.",
    ),
  );

  const lessAlignedRoles =
    jobTop && targetFitLevel !== "strong" && targetFitLevel !== "moderate"
      ? [
          {
            title: jobTop.family.titles[0],
            reason: `The pasted description appears closer to ${jobTop.family.name}, but that proof is not clearly visible in the CV yet.`,
            confidence: confidenceForScore(jobTop.score),
          },
        ]
      : [];

  const missingProofForTarget =
    jobTop && hasJobDescription
      ? missingProofFor(jobTop.family, resumeText, seniorStretch)
      : [];

  return {
    targetFitLevel,
    targetFitLabel: getTargetFitLabel(targetFitLevel),
    targetFitSummary: buildSummary({
      level: targetFitLevel,
      resumeTop,
      jobTop,
      hasJobDescription,
      seniorStretch,
    }),
    detectedResumeSignals: buildSignalSummaries(
      resumeScores,
      "Not enough role-specific wording was detected in the CV text yet.",
    ),
    detectedJobSignals: hasJobDescription
      ? buildSignalSummaries(
          jobScores,
          "Not enough role-specific wording was detected in the pasted job description.",
        )
      : ["No job description provided; role fit is based on the CV and selected mode."],
    alignedRoleFamilies,
    stretchRoleFamilies,
    lessAlignedRoles,
    missingProofForTarget,
    nextBestAction: nextActionForLevel(targetFitLevel, resumeTop, jobTop),
  };
}
