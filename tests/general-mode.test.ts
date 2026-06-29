import assert from "node:assert/strict";
import test from "node:test";
import { analyzeResume } from "../lib/analyzer/analyzeResume";
import { MODE_PROFILES } from "../lib/analyzer/keywords";
import type { AnalysisMode } from "../lib/analyzer/types";

const resume = `
Alex Morgan
alex@example.com

Summary
Project coordinator with five years of experience improving delivery workflows.

Experience
- Coordinated 12 projects and reduced missed deadlines by 20 percent.
- Created weekly status reports and managed project documentation.

Skills
Project coordination, Excel, Jira, documentation, stakeholder communication

Education
Bachelor of Business Administration
`;

test("general mode uses neutral application guidance", () => {
  const result = analyzeResume({
    mode: "general" as AnalysisMode,
    resumeText: resume,
    jobDescription:
      "Project coordinator with Excel, Jira, reporting, and stakeholder communication experience.",
  });

  assert.equal(MODE_PROFILES.general.shortName, "General");
  assert.ok(result.categories.modeFit > 0);
  assert.equal(
    result.modeSpecificSuggestions.some((item) =>
      /remote|freelance|local hiring/i.test(item),
    ),
    false,
  );
});

test("general mode does not invent specialized role fallback suggestions", () => {
  const result = analyzeResume({
    mode: "general" as AnalysisMode,
    resumeText: "Summary\nReliable professional.",
  });

  assert.equal(result.roleFitCompass.alignedRoleFamilies.length, 0);
});
