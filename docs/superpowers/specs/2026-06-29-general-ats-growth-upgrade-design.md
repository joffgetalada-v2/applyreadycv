# General ATS Growth Upgrade Design

Date: 2026-06-29
Status: Approved design, pending written specification review

## Objective

Improve ApplyReadyCV's search intent alignment, product usefulness, analytics coverage, and content trust without changing its privacy-first architecture or making hiring guarantees.

The release will:

- Add a neutral General analysis mode.
- Make General the default checker mode.
- Route ATS and keyword-focused visitors into General mode.
- Track checker CTA clicks by source page and placement.
- Separate the search intent of the homepage, ATS landing page, and ATS guide.
- Publish an organization-level editorial byline.
- Explain the scoring methodology and limitations.
- Cite authoritative sources.
- Add current product screenshots and a fictional sample report walkthrough.

## Product Behavior

### General Analysis Mode

`AnalysisMode` will support `general`, `remote`, `freelance`, and `local`.

General mode will:

- Be the default when no valid `mode` query parameter exists.
- Review ATS readability, job-description keyword alignment, achievements, completeness, and general application fit.
- Avoid remote, freelance, and local-specific scoring signals.
- Use neutral suggestions about sections, truthful keywords, measurable evidence, and job-description alignment.
- Avoid showing arbitrary role recommendations when the resume contains too little role-specific evidence.

Remote, freelance, and local mode behavior will remain available and unchanged unless a shared type update requires a small compatibility adjustment.

The mode selector will show four choices in this order:

1. General
2. Remote
3. Freelance
4. Local

The ATS and resume keyword landing page CTAs will target `/?mode=general#checker`. The homepage checker will also start in General mode.

## CTA Analytics

A small client-side tracked link component will keep the analytics boundary narrow. Server-rendered pages and layouts will remain Server Components.

The event name will be:

`checker_cta_clicked`

The event will include only non-sensitive properties:

- `source_type`: `homepage`, `landing_page`, or `guide`
- `source_path`: the public route that contains the CTA
- `cta_location`: for example `hero`, `sidebar`, or `article`
- `target_mode`: `general`, `remote`, `freelance`, or `local`
- `guide_slug`: included only for guide CTAs

No resume text, job-description text, filenames, contact details, or query content will be sent.

Tracking will cover:

- The homepage hero checker CTA.
- Checker CTAs on ATS, keyword, remote, freelance, and local landing pages.
- Checker CTAs on every guide page.

## Search Intent and Copy

### Homepage

Primary intent: free resume and CV checker.

The homepage will describe the broad product and provide clear paths into ATS, keyword, remote, freelance, and local use cases. Its default checker experience will be General mode.

### ATS Landing Page

Primary intent: interactive ATS resume checker.

The landing page will focus on using the tool now. It will explain the input, the resulting report, the privacy model, and the limits of the score. The CTA will open General mode.

### ATS Guide

Primary intent: methodology, limitations, and examples.

The guide title and content will focus on how ATS-style checks work, how ApplyReadyCV calculates its guidance, what the tool cannot know, and how to interpret a sample report. It will not duplicate the ATS landing page's tool-first argument.

All copy will keep the existing direct, practical, privacy-conscious voice. It will not use interview guarantees, ATS pass claims, fabricated proof, or unsupported statistics.

## Authorship and Trust

The public byline will be:

`ApplyReadyCV Editorial Team`

This avoids publishing an individual's personal information without explicit approval. The byline will link to the About page.

Guide pages will display:

- The editorial byline.
- The existing last-updated date.
- A short description of the team's review standard.

Article structured data will use the same author name and About page URL so visible and machine-readable authorship agree.

The About page will add a section explaining that the editorial team maintains the checker guidance, reviews claims for accuracy, and avoids hiring guarantees.

## Methodology and Sources

The ATS guide will explain the current deterministic scoring model:

- ATS readability: 25 points
- Job match: 25 points
- Clarity and achievements: 20 points
- Application or mode fit: 20 points
- Completeness: 10 points

It will explain that:

- The score is an editing aid, not an employer or ATS prediction.
- Different employers configure different systems and hiring workflows.
- Keyword matches should be supported by truthful experience.
- Text extraction cannot fully evaluate every visual formatting decision.

The guide will cite these public sources:

- Workday, "What is an Applicant Tracking System?": https://www.workday.com/en-us/topics/hr/applicant-tracking-system.html
- Yale Office of Career Strategy, "Resume Formatting and Common Errors": https://ocs.yale.edu/resources/resume-formatting/

Sources will appear in a visible "Sources and further reading" section with descriptive external links.

## Screenshots and Walkthrough

Two screenshots will be generated from the current local application after implementation:

1. A General mode checker workspace screenshot with no personal data.
2. A completed General mode report using a fictional resume and fictional job description.

The images will be stored under `public/screenshots/` and rendered with `next/image`, explicit dimensions, descriptive alternative text, and captions.

The ATS landing page will show the checker workspace screenshot. The ATS guide will show the completed report screenshot inside a sample walkthrough.

The fictional walkthrough will explain:

1. What input was provided.
2. How to read the total score and category breakdown.
3. How to prioritize top fixes.
4. How to interpret matched and missing keywords.
5. Why the user should edit and rerun the check instead of chasing a perfect score.

No real applicant data will be used.

## Data Model and Component Changes

Expected focused changes include:

- Extend analyzer mode types and profiles with General mode.
- Adjust role-fit fallbacks so General mode is neutral.
- Add optional screenshot data to content pages.
- Add optional section images and sources to guide data.
- Add shared editorial author constants.
- Add a narrow tracked checker link Client Component.
- Reuse the existing content and guide layouts instead of creating parallel page systems.

Static content and metadata will remain server-rendered. Only CTA tracking will require a new client boundary.

## Error Handling and Privacy

- An unknown `mode` query parameter will fall back to General.
- Analytics failures will not block navigation.
- Optional guide sources and images will render only when present.
- Screenshot generation will use fictional content.
- No new server storage, user account, database, or third-party resume processing will be introduced.

## Test Strategy

Implementation will follow a red, green, refactor sequence for behavioral changes.

Automated tests will cover:

- General mode is accepted as a valid analysis mode.
- General mode avoids remote, freelance, and local-specific suggestions.
- Missing or invalid mode input resolves to General.
- ATS and keyword checker links target General mode.
- CTA analytics properties contain the expected non-sensitive source context.

Browser verification will cover:

- General mode is the default on the homepage.
- ATS and keyword landing CTAs open General mode.
- Homepage, landing page, and guide CTA events are requested once with the expected event name.
- The checker completes a fictional General mode analysis.
- Both screenshots render without overflow on desktop and mobile.
- The ATS guide shows authorship, methodology, sources, and the sample walkthrough.

Release verification will also run the complete test command, ESLint, TypeScript through the production build, and a clean production build.

## Deployment

Only files created or modified for this feature will be staged. Existing untracked `.agents/skills/`, `outputs/`, and `skills-lock.json` content will remain untouched unless a selected screenshot is intentionally copied into `public/screenshots/`.

After verification:

1. Commit the implementation on `main`.
2. Push `main` to `origin`.
3. Confirm the pushed commit hash.
4. Check the live deployment for the new mode, screenshots, guide content, and sitemap routes when Vercel finishes deploying.

## Out of Scope

- Personal author biography or credentials.
- GA4 or Google Tag Manager.
- User accounts or stored reports.
- AI-generated resume rewriting.
- New generic SEO guide pages.
- Fabricated testimonials, usage counts, or ATS pass claims.

## Success Criteria

The work is complete when:

- General mode is the default and works without specialized mode bias.
- ATS and keyword visitors enter General mode.
- Checker CTA clicks are measurable by homepage, landing page, and guide source.
- The three targeted pages have distinct search intent and copy.
- Guides show consistent editorial authorship.
- The ATS guide contains methodology, limitations, citations, screenshots, and a sample walkthrough.
- Automated tests, lint, build, and browser verification pass.
- The verified implementation is committed and pushed to `origin/main`.
