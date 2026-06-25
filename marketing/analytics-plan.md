# ApplyReadyCV Analytics and Measurement Plan

Last updated: 2026-06-25

## Current State

- Vercel Analytics is installed in `app/layout.tsx`.
- Privacy-safe custom events were added for:
  - `checker_analyzed`
  - `report_copied`
  - `checker_started_over`
- No Google Search Console data is available in the repo.
- No GA4, GTM, PostHog, Mixpanel, or CRM tracking was found.

## Main Conversions

| Conversion | Event or source | Why it matters |
|---|---|---|
| Checker analysis completed | `checker_analyzed` | Core product activation. |
| Report copied | `report_copied` | Indicates the output was useful enough to save or reuse. |
| Return to blank checker | `checker_started_over` | Can indicate repeat checks, iteration, or confusion. |
| Guide to checker click | Future event | Measures whether content drives tool usage. |
| Directory/referral visit | Vercel referrers + UTM tags | Measures outreach and directory quality. |
| Organic landing page visit | Search Console + Vercel | Measures SEO performance. |

## Implemented Event Properties

| Event | Properties | Privacy note |
|---|---|---|
| `checker_analyzed` | `mode`, `has_job_description`, `used_file_upload`, `score_band` | Does not send resume text, job text, filename, or exact score. |
| `report_copied` | `mode`, `score_band` | Does not send copied report content. |
| `checker_started_over` | `mode` | No resume content. |

## Recommended Future Events

Only add these after confirming the Vercel Analytics dashboard is receiving current events correctly.

| Event | Properties | Trigger |
|---|---|---|
| `guide_checker_cta_clicked` | `guide_slug`, `cta_location` | User clicks a guide sidebar CTA. |
| `checker_page_cta_clicked` | `page_path`, `mode` | User clicks checker CTA from a mode page. |
| `file_upload_attempted` | `extension_type` only | User chooses a file; never send filename. |
| `analysis_error_shown` | `error_type` | File extraction or missing-text error appears. |

## Dashboard Metrics

Review weekly:

- Total pageviews by route.
- Top organic landing pages.
- Guide pageviews by guide slug.
- `checker_analyzed` count and rate from homepage visits.
- Mode mix: remote, freelance, local.
- Percent of analyses with job description.
- Percent of analyses using file upload.
- Report copied rate after analysis.
- Top referrers and campaign UTMs.
- Search Console impressions, clicks, CTR, and average position by page.

## Search Console Checks

Weekly:

1. Submit or confirm `https://applyreadycv.com/sitemap.xml`.
2. Inspect priority URLs:
   - `/`
   - `/ats-resume-checker`
   - `/resume-keyword-checker`
   - `/remote-cv-checker`
   - `/freelance-cv-checker`
   - `/local-job-cv-checker`
   - `/guides`
   - newest or updated guide URLs
3. Request indexing for newly deployed or meaningfully updated pages.
4. Export queries with impressions but low CTR.
5. Export pages with impressions but no clicks.
6. Check Coverage/Indexing and Core Web Vitals.

## Weekly Reporting Template

```markdown
# ApplyReadyCV Weekly Marketing Report

Week of:

## Traffic
- Total visits:
- Organic visits:
- Top 5 landing pages:
- Top referrers:

## Product Activation
- Checker analyses:
- Mode mix:
- Analyses with job description:
- File upload usage:
- Report copied:

## SEO
- Search Console impressions:
- Search Console clicks:
- Pages gaining impressions:
- Queries gaining impressions:
- Pages needing CTR work:

## Distribution
- Community posts made:
- Directory submissions:
- Outreach sent:
- Replies or approvals:

## Decisions
- Pages to refresh:
- New content to write:
- Outreach to continue:
- What to stop:
```

## UTM Naming

Use lowercase, simple UTM values:

- `utm_source=facebook_group`
- `utm_source=linkedin`
- `utm_source=reddit`
- `utm_source=quora`
- `utm_source=directory_name`
- `utm_medium=social`, `community`, `directory`, or `outreach`
- `utm_campaign=guide_promotion_2026_06`
- `utm_content=ats_checker_guide_v1`

Do not add UTM parameters to every internal link. Use them for external distribution only.

## Privacy Rules

- Never send resume text, job description text, names, email addresses, phone numbers, or filenames to analytics.
- Prefer booleans and buckets over raw values.
- Keep event names tied to decisions, not curiosity.
- Review consent requirements before adding third-party analytics beyond Vercel Analytics.
