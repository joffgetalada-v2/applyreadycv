import type { AnalysisMode, ModeProfile } from "./types";

export const MODE_PROFILES: Record<AnalysisMode, ModeProfile> = {
  remote: {
    name: "Remote Job",
    shortName: "Remote",
    description:
      "Checks for distributed work signals, written communication, ownership, and common collaboration tools.",
    signals: [
      "remote",
      "hybrid",
      "async",
      "asynchronous",
      "written communication",
      "documentation",
      "distributed team",
      "timezone",
      "time zone",
      "self management",
      "ownership",
      "collaboration",
      "slack",
      "zoom",
      "teams",
      "notion",
      "jira",
      "trello",
      "asana",
      "github",
      "gitlab",
      "google workspace",
    ],
    suggestions: [
      "Add one concrete example of remote or hybrid collaboration if you have it.",
      "Mention tools used for async work, documentation, ticketing, or video calls.",
      "Show ownership with outcomes, deadlines, and cross-functional communication.",
      "If relevant, include timezone overlap, distributed team, or self-management experience.",
    ],
  },
  freelance: {
    name: "Freelance / Gig",
    shortName: "Freelance",
    description:
      "Checks for project outcomes, client-facing proof, portfolio signals, and clear service positioning.",
    signals: [
      "freelance",
      "contract",
      "client",
      "portfolio",
      "case study",
      "case studies",
      "deliverable",
      "proposal",
      "testimonial",
      "selected projects",
      "project based",
      "scope",
      "retainer",
      "upwork",
      "fiverr",
      "contra",
      "freelancer",
      "linkedin",
      "niche",
      "outcome",
    ],
    suggestions: [
      "Add a selected projects section with client problem, deliverable, and result.",
      "Make your niche or service offer obvious in the first third of the CV.",
      "Include portfolio, LinkedIn, or relevant marketplace links when appropriate.",
      "Convert responsibilities into client outcomes, turnaround times, or delivered assets.",
    ],
  },
  local: {
    name: "Local Job",
    shortName: "Local",
    description:
      "Checks for practical hiring details, contact readiness, qualifications, and local role fit.",
    signals: [
      "location",
      "available",
      "availability",
      "certification",
      "certified",
      "education",
      "work authorization",
      "authorized",
      "customer support",
      "retail",
      "healthcare",
      "admin",
      "administrative",
      "bpo",
      "data entry",
      "call center",
      "it support",
      "shift",
      "full time",
      "part time",
      "on site",
      "onsite",
    ],
    suggestions: [
      "Include location, availability, and contact details where local hiring teams expect them.",
      "Place certifications, education, or role-specific licenses near related experience.",
      "Make employment history easy to scan with dates, employers, locations, and roles.",
      "Use local industry keywords from the posting, especially for support, admin, retail, healthcare, or IT roles.",
    ],
  },
};

export const COMMON_STOP_WORDS = new Set([
  "about",
  "above",
  "after",
  "again",
  "against",
  "also",
  "and",
  "any",
  "are",
  "around",
  "because",
  "been",
  "being",
  "between",
  "both",
  "but",
  "can",
  "candidate",
  "company",
  "could",
  "day",
  "each",
  "for",
  "from",
  "had",
  "has",
  "have",
  "her",
  "his",
  "how",
  "into",
  "job",
  "may",
  "more",
  "must",
  "not",
  "our",
  "out",
  "per",
  "position",
  "preferred",
  "required",
  "requirements",
  "responsibilities",
  "role",
  "should",
  "skills",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "this",
  "through",
  "to",
  "using",
  "was",
  "we",
  "will",
  "with",
  "work",
  "you",
  "your",
]);

export const IMPORTANT_JOB_PHRASES = [
  "customer support",
  "data entry",
  "project management",
  "product management",
  "social media",
  "content marketing",
  "email marketing",
  "technical support",
  "it support",
  "virtual assistant",
  "google workspace",
  "microsoft office",
  "written communication",
  "remote work",
  "distributed team",
  "time management",
  "problem solving",
  "client communication",
  "case studies",
  "salesforce",
  "hubspot",
  "zendesk",
  "shopify",
  "wordpress",
  "react",
  "next.js",
  "node.js",
  "python",
  "sql",
  "excel",
];

export const ACTION_VERBS = [
  "achieved",
  "administered",
  "analyzed",
  "automated",
  "built",
  "coached",
  "collaborated",
  "coordinated",
  "created",
  "delivered",
  "designed",
  "developed",
  "diagnosed",
  "directed",
  "executed",
  "improved",
  "increased",
  "launched",
  "led",
  "managed",
  "measured",
  "optimized",
  "organized",
  "owned",
  "planned",
  "reduced",
  "resolved",
  "shipped",
  "supported",
  "trained",
  "wrote",
];

export const GENERIC_PHRASES = [
  "hard worker",
  "team player",
  "fast learner",
  "detail oriented",
  "results driven",
  "go getter",
  "self starter",
  "excellent communication skills",
  "responsible for",
  "duties included",
];

export function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function normalizeText(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function keywordAppears(text: string, keyword: string) {
  const normalizedText = normalizeText(text);
  const normalizedKeyword = normalizeText(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  if (normalizedKeyword.includes(" ")) {
    return normalizedText.includes(normalizedKeyword);
  }

  return new RegExp(`(^|\\s)${escapeRegExp(normalizedKeyword)}(\\s|$)`, "i").test(
    normalizedText,
  );
}

export function extractMeaningfulKeywords(text: string, limit = 18) {
  const normalized = normalizeText(text);

  if (!normalized) {
    return [];
  }

  const phraseMatches = IMPORTANT_JOB_PHRASES.filter((phrase) =>
    normalized.includes(normalizeText(phrase)),
  );
  const tokens = normalized
    .split(/\s+/)
    .map((token) => token.replace(/^-+|-+$/g, ""))
    .filter(
      (token) =>
        token.length > 2 &&
        !COMMON_STOP_WORDS.has(token) &&
        !/^\d+$/.test(token),
    );

  const counts = new Map<string, number>();
  for (const token of tokens) {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  }

  const bigramCounts = new Map<string, number>();
  for (let index = 0; index < tokens.length - 1; index += 1) {
    const phrase = `${tokens[index]} ${tokens[index + 1]}`;
    if (phrase.length >= 7 && !phraseMatches.includes(phrase)) {
      bigramCounts.set(phrase, (bigramCounts.get(phrase) ?? 0) + 1);
    }
  }

  const topWords = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([keyword]) => keyword);

  const topBigrams = [...bigramCounts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([keyword]) => keyword);

  return [...new Set([...phraseMatches, ...topBigrams, ...topWords])].slice(
    0,
    limit,
  );
}
