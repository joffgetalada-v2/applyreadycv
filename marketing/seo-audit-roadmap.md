# ApplyReadyCV SEO, CRO, and Growth Roadmap

Last updated: 2026-06-25

## Product Marketing Context

ApplyReadyCV is a free, privacy-first resume and CV checker for job seekers. The core promise is practical feedback on ATS readability, resume keywords, achievements, completeness, and application fit without storing resume content.

Primary conversion: use the free checker at `/#checker`.

Claims to avoid: guaranteed interviews, guaranteed job offers, recruiter decisions, guaranteed ATS approval, "100% ATS pass," paid backlink shortcuts, fake reviews, mass posting, comment spam, private blog networks, or anything that weakens the privacy-first positioning.

## Current Site Structure

| Area | Routes | Notes |
|---|---|---|
| Core checker | `/`, `/#checker` | Homepage includes the interactive checker workspace, mode selector, privacy copy, and report preview. |
| Checker landing pages | `/ats-resume-checker`, `/resume-keyword-checker`, `/remote-cv-checker`, `/freelance-cv-checker`, `/local-job-cv-checker` | Strong high-intent landing pages with FAQ schema, breadcrumbs, canonicals, OG/Twitter metadata, and guide links. |
| Guides index | `/guides` | Lists all guide articles and provides CollectionPage and ItemList schema. |
| Guide pages | 15 published guide URLs | Covers ATS, resume score, keywords, summaries, skills, no-experience CVs, remote CV, remote keywords, ATS formatting, freelance CV, local Philippines CV, common mistakes, case study, and ATS vs human review. |
| Trust/legal | `/privacy`, `/terms`, `/about`, `/contact`, `/support` | Important for trust, policy, monetization readiness, and no-guarantee positioning. |
| Technical SEO | `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/pricing.md` | Sitemap and robots already existed; agent-readable files were added in this pass. |

## Existing Guide Inventory

| Status | URL | Primary intent |
|---|---|---|
| Published | `/guides/ats-resume-checker-guide` | Understand ATS checker limits and readability basics. |
| Published | `/guides/resume-score-checker-guide` | Understand free resume score checker output. |
| Published | `/guides/resume-keywords-guide` | Find and use resume keywords without stuffing. |
| Published | `/guides/resume-summary-examples` | Write a stronger resume summary. |
| Published | `/guides/resume-skills-section-guide` | Improve skills section relevance. |
| Published | `/guides/no-experience-cv-guide` | Build evidence with limited experience. |
| Published | `/guides/remote-job-cv-guide` | Tailor a CV for remote applications. |
| Published | `/guides/remote-resume-keywords` | Use remote keywords with proof. |
| Published | `/guides/ats-resume-formatting-tips` | Reduce parsing and layout risks. |
| Published | `/guides/freelance-cv-checklist` | Build a client-ready freelance profile. |
| Published | `/guides/freelance-cv-vs-traditional-resume` | Adapt an employment resume for freelance work. |
| Published | `/guides/common-cv-mistakes` | Fix common CV review friction. |
| Published | `/guides/local-job-cv-philippines` | Improve Philippine local job CV details. |
| Published | `/guides/cv-case-study-fix-weak-resume` | Learn from a before-and-after CV case study. |
| Published | `/guides/ats-vs-human-resume-review` | Balance software readability and human review. |

## Findings

| Finding | Impact | Evidence | Action |
|---|---:|---|---|
| Strong technical SEO foundation exists. | High positive | App has canonical metadata, OG/Twitter metadata, JSON-LD, sitemap, robots, favicon, privacy/terms pages, and internal links. | Preserve and extend instead of replacing. |
| Most requested article clusters already exist. | High positive | Guide inventory covers the main requested ATS, keyword, remote, freelance, local, mistakes, and case-study topics. | Avoid thin duplicate pages; improve depth, linking, and promotion. |
| Some guide records lacked visible freshness dates. | Medium | Several older guide objects had no `publishedAt` or `updatedAt`. | Added dates for older cluster pages and visible "Last updated" output. |
| Two guide titles were too outcome-leaning. | Medium | "Ensure Your Resume Gets Seen" and "Get You Noticed" could imply stronger outcomes than the product should claim. | Reworded toward readability and truthful keyword use. |
| Checker page sidebar CTA copy was too generic. | Medium | Shared CTA referenced "local feedback" even on non-local pages. | Added route-specific CTA copy and benefit bullets. |
| Analytics existed but had no custom conversion events. | Medium | `@vercel/analytics` was installed in root layout only. | Added privacy-safe custom events for `checker_analyzed`, `report_copied`, and `checker_started_over`. |
| AI/agent discovery files were missing. | Low to medium | No public `llms.txt` or parseable pricing file. | Added `/llms.txt` and `/pricing.md`, both linked from the sitemap. |
| Search Console and indexing status are unknown. | High | No GSC data is available in the repo. | Manual setup/review needed. Submit sitemap and request indexing for priority URLs. |
| Authority and distribution are the biggest non-code gap. | High | Good content exists, but directories, safe community participation, and partnership outreach need execution. | Use the outreach, directory, and weekly checklist files in this folder. |

## 30-Day Roadmap

| Days | Task | Impact | Difficulty | Estimate | Priority |
|---|---|---:|---:|---:|---:|
| 1-2 | Verify Google Search Console, submit `/sitemap.xml`, inspect homepage and 10 priority URLs. | High | Low | 2-3 hr | P0 |
| 1-2 | Confirm `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and `/pricing.md` return 200 after deploy. | Medium | Low | 30 min | P0 |
| 1-3 | Request indexing for the homepage, checker pages, guide index, and newest guide pages. | High | Low | 1 hr | P0 |
| 1-4 | Review Vercel Analytics for custom events: `checker_analyzed`, `report_copied`, `checker_started_over`. | High | Low | 1 hr | P0 |
| 3-5 | Add a simple weekly report using the analytics plan in this folder. | Medium | Low | 1 hr | P1 |
| 3-7 | Refresh internal links from each checker page to the most relevant 3 guides and vice versa. | Medium | Low | 2 hr | P1 |
| 4-10 | Publish or refresh one deeper article around "free CV checker" or "resume checker" only if it has a distinct angle from the score guide. | Medium | Medium | 4-6 hr | P1 |
| 5-12 | Share no-link educational posts in 5 relevant Facebook or LinkedIn communities after checking rules. | Medium | Medium | 3 hr | P1 |
| 7-14 | Submit to high-fit free tool, startup, and AI directories using distinct descriptions. | Medium | Medium | 4-6 hr | P1 |
| 10-18 | Contact 10 university career centers, bootcamps, career coaches, or resume writers with a helpful resource note. | Medium | Medium | 4 hr | P1 |
| 12-20 | Update guide intros with one direct answer block where needed for snippet and AI extractability. | Medium | Medium | 4 hr | P2 |
| 15-23 | Create one before-and-after visual or screenshot-led social asset for the CV case study. | Medium | Medium | 3 hr | P2 |
| 18-25 | Review GSC queries and rewrite titles/meta where impressions exist but CTR is weak. | High | Medium | 2-4 hr | P1 |
| 21-28 | Build 3 more specific use-case resources only if GSC/social questions show demand. | Medium | Medium | 6-10 hr | P2 |
| 25-30 | Summarize wins, update content priorities, and decide the next 30-day cluster from actual query data. | High | Low | 2 hr | P0 |

## SEO Improvements Implemented In Code

- Added `.agents/product-marketing.md` as the canonical positioning and messaging source.
- Added stable site freshness via `SITE_LAST_UPDATED`.
- Added `/llms.txt` for AI and agent-readable product context.
- Added `/pricing.md` documenting the free MVP and limitations.
- Added both root text files to the sitemap.
- Replaced build-time sitemap dates with stable site or guide update dates.
- Added privacy-safe Vercel Analytics events for checker usage.
- Added visible guide "Last updated" text where guide dates exist.
- Added `isAccessibleForFree` and date alignment to Article schema.
- Added page-specific checker CTA copy on checker landing pages.
- Reworded two guide titles to avoid overclaiming.

## Manual Review Needed

- Confirm Google Search Console ownership and sitemap submission.
- Confirm production deployment exposes `/llms.txt` and `/pricing.md`.
- Check Vercel Analytics event collection after real usage.
- Validate structured data with Google Rich Results Test or Schema Markup Validator after deployment.
- Review Search Console queries before creating generic "resume checker" or "CV checker" duplicate articles.
- Confirm whether public screenshots, demo video, or testimonials can be used for directory submissions.

## Risk Notes

- Do not create many near-duplicate pages for every keyword variant. The current site already covers most requested clusters.
- Do not use directory or community promotion as a backlink spam campaign.
- Do not publish claims about ATS approval, interviews, recruiter ranking, or job outcomes.
- Do not send resume content or job descriptions to analytics.
