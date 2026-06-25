import { SITE_LAST_UPDATED, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const text = `# Pricing - ${SITE_NAME}

Last updated: ${SITE_LAST_UPDATED}

## Free

- Price: $0
- Billing: none
- Account required: no
- Ads: no
- Affiliate links: no
- Resume storage: no resume database in the current MVP
- Primary URL: ${SITE_URL}/#checker

## Included

- Resume and CV text review
- Supported local file parsing for .txt, .pdf, and .docx files
- ATS readability guidance
- Resume score breakdown
- Resume keyword comparison when a job description is provided
- Remote job CV signals
- Freelance CV and profile signals
- Local job CV signals
- Role Fit Compass guidance
- Practical top fixes, strengths, warnings, and mode-specific suggestions

## Important limitations

- ApplyReadyCV is informational only.
- It does not guarantee interviews, job offers, recruiter decisions, rankings, or ATS approval.
- Users should review every suggestion before using it in a real application.
- The analyzer is deterministic and rule-based. It does not replace a recruiter, career adviser, employer, or professional resume writer.

## Paid plans

There are no paid plans in the current MVP.
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
