# General ATS Growth Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a neutral General checker mode, measurable checker CTAs, distinct ATS search intent, transparent editorial trust, cited methodology, and current product screenshots.

**Architecture:** Keep pages and content layouts as Server Components. Add one small Client Component for tracked CTA navigation, extend the deterministic analyzer with a neutral mode, and extend existing content data types for optional screenshots, sources, and editorial metadata.

**Tech Stack:** Next.js 16.2.6 App Router, React 19.2.4, TypeScript, Tailwind CSS 4, Vercel Analytics, Node test runner through `tsx`, Playwright CLI.

---

## File Map

**Create:**

- `lib/analytics/checker-cta.ts`: Pure CTA event payload builder.
- `components/analytics/tracked-checker-link.tsx`: Narrow client boundary that records CTA clicks.
- `lib/editorial.ts`: Shared public editorial identity and review standard.
- `tests/general-mode.test.ts`: General mode and query fallback coverage.
- `tests/checker-cta.test.ts`: CTA event payload privacy and context coverage.
- `tests/content-intent.test.ts`: Homepage, ATS landing page, guide intent, author, source, and screenshot data coverage.
- `public/screenshots/ats-general-checker.png`: Current General mode workspace screenshot.
- `public/screenshots/ats-sample-report.png`: Current fictional sample report screenshot.

**Modify:**

- `package.json`, `package-lock.json`: Add `tsx` and the test script.
- `lib/analyzer/types.ts`: Add `general` mode.
- `lib/analyzer/keywords.ts`: Add the neutral General profile.
- `lib/analyzer/analyzeResume.ts`: Calculate neutral application fit and wording.
- `lib/analyzer/analyzeRoleFit.ts`: Remove specialized boosts and arbitrary fallbacks in General mode.
- `components/checker/mode-selector.tsx`: Add General to the selector.
- `components/checker/checker-workspace.tsx`: Default invalid or missing mode input to General.
- `components/checker/report-card.tsx`: Label the fit category appropriately in General mode.
- `components/checker/role-fit-compass-panel.tsx`: Use neutral General labels where needed.
- `lib/site.ts`: Update homepage and ATS intent, General CTA targets, and optional screenshot data.
- `app/page.tsx`: Track the homepage checker CTA and refine broad homepage copy.
- `components/content/content-page-layout.tsx`: Track landing page CTAs and render the ATS screenshot.
- `lib/guides.ts`: Add author, sources, methodology, screenshot, and walkthrough data.
- `components/guides/guide-article-layout.tsx`: Render authorship, sources, section images, and tracked guide CTA.
- `lib/seo/schema.ts`: Align Article schema authorship with the visible byline.
- `app/about/page.tsx`: Publish the editorial review standard.
- `marketing/analytics-plan.md`: Document the CTA event and properties.

### Task 1: Add the Test Harness and General Mode

**Files:**

- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `tests/general-mode.test.ts`
- Modify: `lib/analyzer/types.ts`
- Modify: `lib/analyzer/keywords.ts`
- Modify: `lib/analyzer/analyzeResume.ts`
- Modify: `lib/analyzer/analyzeRoleFit.ts`
- Modify: `components/checker/mode-selector.tsx`
- Modify: `components/checker/checker-workspace.tsx`
- Modify: `components/checker/report-card.tsx`
- Modify: `components/checker/role-fit-compass-panel.tsx`
- Modify: `lib/site.ts`

- [ ] **Step 1: Install the TypeScript test runner and add the test command**

Run:

```powershell
npm install --save-dev tsx
```

Add this script to `package.json`:

```json
"test": "tsx --test tests/*.test.ts"
```

- [ ] **Step 2: Write the failing General mode tests**

Create `tests/general-mode.test.ts`:

```ts
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
    jobDescription: "Project coordinator with Excel, Jira, reporting, and stakeholder communication experience.",
  });

  assert.equal(MODE_PROFILES.general.shortName, "General");
  assert.ok(result.categories.modeFit > 0);
  assert.equal(result.modeSpecificSuggestions.some((item) => /remote|freelance|local hiring/i.test(item)), false);
});

test("general mode does not invent specialized role fallback suggestions", () => {
  const result = analyzeResume({
    mode: "general" as AnalysisMode,
    resumeText: "Summary\nReliable professional.",
  });

  assert.equal(result.roleFitCompass.alignedRoleFamilies.length, 0);
});
```

- [ ] **Step 3: Run the test and confirm the expected failure**

Run:

```powershell
npm test -- tests/general-mode.test.ts
```

Expected: FAIL because `MODE_PROFILES.general` does not exist and General mode is unsupported.

- [ ] **Step 4: Implement the minimal General mode behavior**

Update `AnalysisMode`:

```ts
export type AnalysisMode = "general" | "remote" | "freelance" | "local";
```

Add a General profile before the specialized profiles:

```ts
general: {
  name: "General Application",
  shortName: "General",
  description: "Checks ATS readability, role keywords, achievements, completeness, and general application fit.",
  signals: [
    "summary",
    "profile",
    "experience",
    "skills",
    "education",
    "projects",
    "certification",
    "managed",
    "improved",
    "delivered",
    "increased",
  ],
  suggestions: [
    "Use clear section headings for contact details, experience, skills, and education.",
    "Paste the target job description so the report can compare role keywords.",
    "Show measurable evidence with scope, volume, speed, quality, or outcomes.",
    "Add only keywords that truthfully match your experience, tools, education, or projects.",
  ],
},
```

In `analyzeResume.ts`, use a General threshold of six neutral signals, call the category application fit in General mode, and use neutral summary wording. In `analyzeRoleFit.ts`, set the mode boost to zero for General mode and return empty aligned role arrays when no role family has meaningful evidence.

Add the selector entry:

```ts
{
  value: "general",
  label: "General",
  description: "General ATS Check",
  detail: "Readability, keywords, achievements, and completeness.",
  icon: ScanSearch,
},
```

Change the selector grid to four columns at the small breakpoint. Change the workspace initial state and invalid query fallback to `general`.

Change `checkerHrefForMode` so ATS and keyword pages can explicitly request General mode:

```ts
export function checkerHrefForMode(mode: AnalysisMode = "general") {
  return `/?mode=${mode}#checker`;
}
```

Set `analysisMode: "general"` on ATS and keyword content pages.

- [ ] **Step 5: Run the General mode test**

Run:

```powershell
npm test -- tests/general-mode.test.ts
```

Expected: 2 tests pass.

- [ ] **Step 6: Commit General mode**

```powershell
git add package.json package-lock.json tests/general-mode.test.ts lib/analyzer components/checker lib/site.ts
git commit -m "Add neutral general resume analysis mode"
```

### Task 2: Track Checker CTA Clicks

**Files:**

- Create: `tests/checker-cta.test.ts`
- Create: `lib/analytics/checker-cta.ts`
- Create: `components/analytics/tracked-checker-link.tsx`
- Modify: `app/page.tsx`
- Modify: `components/content/content-page-layout.tsx`
- Modify: `components/guides/guide-article-layout.tsx`
- Modify: `marketing/analytics-plan.md`

- [ ] **Step 1: Write the failing CTA payload test**

Create `tests/checker-cta.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { buildCheckerCtaEvent } from "../lib/analytics/checker-cta";

test("checker CTA event includes source context without sensitive data", () => {
  const event = buildCheckerCtaEvent({
    sourceType: "guide",
    sourcePath: "/guides/ats-resume-checker-guide",
    ctaLocation: "sidebar",
    targetMode: "general",
    guideSlug: "ats-resume-checker-guide",
  });

  assert.equal(event.name, "checker_cta_clicked");
  assert.deepEqual(event.properties, {
    source_type: "guide",
    source_path: "/guides/ats-resume-checker-guide",
    cta_location: "sidebar",
    target_mode: "general",
    guide_slug: "ats-resume-checker-guide",
  });
  assert.equal("resume_text" in event.properties, false);
  assert.equal("job_description" in event.properties, false);
});
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```powershell
npm test -- tests/checker-cta.test.ts
```

Expected: FAIL because `lib/analytics/checker-cta.ts` does not exist.

- [ ] **Step 3: Implement the pure event builder**

Create `lib/analytics/checker-cta.ts`:

```ts
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
```

- [ ] **Step 4: Run the CTA test**

Run:

```powershell
npm test -- tests/checker-cta.test.ts
```

Expected: 1 test passes.

- [ ] **Step 5: Add the tracked link client boundary**

Create `components/analytics/tracked-checker-link.tsx`:

```tsx
"use client";

import type { ComponentProps } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import {
  buildCheckerCtaEvent,
  type CheckerCtaContext,
} from "@/lib/analytics/checker-cta";

type TrackedCheckerLinkProps = ComponentProps<typeof Link> &
  CheckerCtaContext;

export function TrackedCheckerLink({
  sourceType,
  sourcePath,
  ctaLocation,
  targetMode,
  guideSlug,
  onClick,
  ...linkProps
}: TrackedCheckerLinkProps) {
  return (
    <Link
      {...linkProps}
      onClick={(event) => {
        const analyticsEvent = buildCheckerCtaEvent({
          sourceType,
          sourcePath,
          ctaLocation,
          targetMode,
          guideSlug,
        });
        try {
          track(analyticsEvent.name, analyticsEvent.properties);
        } catch {
          // Analytics must never block checker navigation.
        }
        onClick?.(event);
      }}
    />
  );
}
```

Replace only checker CTA links in the homepage hero, content page sidebar, and guide sidebar. Leave unrelated navigation as normal Next.js links.

- [ ] **Step 6: Update the analytics plan**

Document `checker_cta_clicked`, its properties, privacy constraints, and the decision it supports: which landing pages and guides drive checker usage.

- [ ] **Step 7: Run all tests and commit CTA tracking**

```powershell
npm test
git add tests/checker-cta.test.ts lib/analytics components/analytics app/page.tsx components/content/content-page-layout.tsx components/guides/guide-article-layout.tsx marketing/analytics-plan.md
git commit -m "Track checker CTA sources"
```

Expected: all tests pass before the commit.

### Task 3: Separate Search Intent and Add Editorial Trust

**Files:**

- Create: `tests/content-intent.test.ts`
- Create: `lib/editorial.ts`
- Modify: `lib/site.ts`
- Modify: `lib/guides.ts`
- Modify: `components/guides/guide-article-layout.tsx`
- Modify: `lib/seo/schema.ts`
- Modify: `app/about/page.tsx`
- Modify: `app/page.tsx`
- Modify: `components/content/content-page-layout.tsx`

- [ ] **Step 1: Write the failing content intent test**

Create `tests/content-intent.test.ts`:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { EDITORIAL_AUTHOR } from "../lib/editorial";
import { guidePages } from "../lib/guides";
import { contentPages, homepageSeo } from "../lib/site";

test("homepage, ATS landing page, and ATS guide target distinct intents", () => {
  const guide = guidePages.find((item) => item.slug === "ats-resume-checker-guide");

  assert.match(homepageSeo.title, /Free Resume & CV Checker/i);
  assert.match(contentPages.ats.metadataTitle, /Interactive ATS Resume Checker/i);
  assert.match(guide?.metadataTitle ?? "", /How ATS Resume Checkers Work/i);
});

test("ATS guide includes editorial authorship and authoritative sources", () => {
  const guide = guidePages.find((item) => item.slug === "ats-resume-checker-guide");

  assert.equal(EDITORIAL_AUTHOR.name, "ApplyReadyCV Editorial Team");
  assert.ok((guide?.sources?.length ?? 0) >= 2);
  assert.ok(guide?.sections.some((section) => /methodology/i.test(section.title)));
  assert.ok(guide?.sections.some((section) => /sample report walkthrough/i.test(section.title)));
});
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```powershell
npm test -- tests/content-intent.test.ts
```

Expected: FAIL because the editorial module and new intent content do not exist.

- [ ] **Step 3: Add the editorial identity**

Create `lib/editorial.ts`:

```ts
export const EDITORIAL_AUTHOR = {
  name: "ApplyReadyCV Editorial Team",
  role: "Resume guidance and product methodology",
  path: "/about",
  reviewStandard:
    "The team reviews guidance for clarity, source support, privacy, and realistic limitations before publication.",
} as const;
```

Render the byline and review standard in guide headers. Add a matching About page section. Update Article schema to use an `Organization` author with this name and the absolute About page URL.

- [ ] **Step 4: Separate the three page intents**

Use these metadata directions:

```ts
homepageSeo.title = "Free Resume & CV Checker | ApplyReadyCV";
contentPages.ats.metadataTitle = "Interactive ATS Resume Checker | ApplyReadyCV";
atsGuide.metadataTitle = "How ATS Resume Checkers Work | ApplyReadyCV";
```

Homepage copy remains broad. ATS landing copy leads with the interactive check. The ATS guide adds methodology, limitations, interpretation guidance, and the two approved source URLs.

Add these exact source records to the ATS guide:

```ts
sources: [
  {
    label: "What is an Applicant Tracking System?",
    publisher: "Workday",
    href: "https://www.workday.com/en-us/topics/hr/applicant-tracking-system.html",
  },
  {
    label: "Resume Formatting and Common Errors",
    publisher: "Yale Office of Career Strategy",
    href: "https://ocs.yale.edu/resources/resume-formatting/",
  },
],
```

- [ ] **Step 5: Extend guide data and rendering**

Add optional types:

```ts
export type GuideSource = {
  label: string;
  publisher: string;
  href: string;
};

export type GuideSection = {
  title: string;
  body: string[];
  bullets?: string[];
  image?: GuideImage;
};
```

Add `sources?: GuideSource[]` to `GuidePage`. Render section images with `next/image` and render a sources list after the FAQ. External source links must use descriptive text and `rel="noreferrer"`.

- [ ] **Step 6: Run the content test and all tests**

```powershell
npm test -- tests/content-intent.test.ts
npm test
```

Expected: content tests and the full suite pass.

- [ ] **Step 7: Commit content intent and trust**

```powershell
git add tests/content-intent.test.ts lib/editorial.ts lib/site.ts lib/guides.ts components/guides/guide-article-layout.tsx lib/seo/schema.ts app/about/page.tsx app/page.tsx components/content/content-page-layout.tsx
git commit -m "Clarify ATS intent and editorial methodology"
```

### Task 4: Generate and Add Current Product Screenshots

**Files:**

- Create: `public/screenshots/ats-general-checker.png`
- Create: `public/screenshots/ats-sample-report.png`
- Modify: `lib/site.ts`
- Modify: `lib/guides.ts`
- Modify: `components/content/content-page-layout.tsx`
- Modify: `components/guides/guide-article-layout.tsx`

- [ ] **Step 1: Start the current app**

Run the development server in a hidden background process and write temporary logs under `output/playwright/`.

```powershell
New-Item -ItemType Directory -Force output\playwright | Out-Null
Start-Process -FilePath "npm.cmd" -ArgumentList "run","dev","--","--hostname","127.0.0.1","--port","3000" -WorkingDirectory (Get-Location) -RedirectStandardOutput "output\playwright\dev.out.log" -RedirectStandardError "output\playwright\dev.err.log" -WindowStyle Hidden
```

Poll `http://127.0.0.1:3000/api/health` until it returns 200.

- [ ] **Step 2: Capture the General workspace**

Use Playwright CLI to open `http://127.0.0.1:3000/?mode=general#checker`, resize to 1440 by 1000, snapshot, and capture the checker workspace into `output/playwright/ats-general-checker.png`.

- [ ] **Step 3: Capture the fictional sample report**

Fill the resume and job description fields with fictional content, click the analysis button, take a new snapshot, and capture the report region into `output/playwright/ats-sample-report.png`.

The fictional resume must use `Alex Morgan`, `alex@example.com`, and invented experience only.

- [ ] **Step 4: Inspect and publish the screenshots**

Use visual inspection to confirm there is no personal data, clipping, browser chrome, or stale copy. Copy the approved images into `public/screenshots/`.

- [ ] **Step 5: Add image data and captions**

The ATS content page screenshot should explain that General mode is the neutral starting point. The ATS guide screenshot should appear in the sample walkthrough section and explain that the report is based on fictional data.

- [ ] **Step 6: Run tests and commit screenshots**

```powershell
npm test
git add public/screenshots lib/site.ts lib/guides.ts components/content/content-page-layout.tsx components/guides/guide-article-layout.tsx
git commit -m "Add ATS checker screenshots and walkthrough"
```

### Task 5: Review and Verify the Complete Release

**Files:**

- Review all modified `.tsx` files.
- Review all changed files against the approved design.

- [ ] **Step 1: Run the React best-practices review**

Check component boundaries, hooks, event handlers, accessibility, stable keys, image dimensions and alt text, TypeScript types, and unnecessary client code. Apply only focused fixes.

- [ ] **Step 2: Run automated verification**

```powershell
npm test
npm run lint
npm run build
git diff --check HEAD~4..HEAD
```

Expected: zero failing tests, zero lint errors, successful production build, and no whitespace errors.

- [ ] **Step 3: Run browser verification**

Verify:

- Homepage defaults to General mode.
- Invalid mode input falls back to General.
- ATS and keyword CTAs open General mode.
- A General analysis completes.
- Homepage, landing page, and guide checker CTA clicks request `checker_cta_clicked` once.
- ATS landing page screenshot renders on desktop and mobile.
- ATS guide shows byline, methodology, limitations, sources, and walkthrough screenshot.
- No console errors occur.

- [ ] **Step 4: Inspect final Git scope**

```powershell
git status --short
git diff origin/main...HEAD --stat
git diff origin/main...HEAD --name-status
```

Confirm unrelated untracked files remain unstaged.

### Task 6: Push Main and Verify Production

- [ ] **Step 1: Push the verified branch**

```powershell
git push origin main
```

Expected: `main` advances to the final verified commit.

- [ ] **Step 2: Verify the remote commit**

```powershell
git ls-remote origin refs/heads/main
git rev-parse HEAD
```

Expected: both hashes match.

- [ ] **Step 3: Verify Vercel deployment**

Poll the live homepage and ATS guide until the new General mode text, editorial byline, and screenshot URLs are available. Confirm the new screenshot assets return 200 and the live sitemap still returns 200.

- [ ] **Step 4: Report exact evidence**

Report the commit hash, push result, test count, lint result, build result, browser checks, live deployment status, and any remaining manual Vercel or Search Console action.
