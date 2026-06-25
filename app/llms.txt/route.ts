import { guidePages } from "@/lib/guides";
import {
  SITE_LAST_UPDATED,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  contentPages,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const keyPages = [
    ["/", "Free resume and CV checker"],
    [contentPages.ats.path, contentPages.ats.title],
    [contentPages.keywords.path, contentPages.keywords.title],
    [contentPages.remote.path, contentPages.remote.title],
    [contentPages.freelance.path, contentPages.freelance.title],
    [contentPages.local.path, contentPages.local.title],
    ["/guides", "Resume and CV guides"],
    ["/privacy", "Privacy policy"],
    ["/terms", "Terms and disclaimer"],
  ];

  const text = `# ${SITE_NAME}

> ${SITE_TAGLINE}

Last updated: ${SITE_LAST_UPDATED}

ApplyReadyCV is a free, privacy-first resume and CV checker for job seekers. It checks common ATS readability, resume keyword, achievement, completeness, and job-fit issues for remote, freelance, and local applications.

Important limitations:
- ApplyReadyCV is informational only.
- It does not guarantee interviews, job offers, recruiter decisions, rankings, or ATS approval.
- Resume text is analyzed locally in the browser session. The current MVP does not use accounts, ads, payments, affiliate links, a resume database, or a third-party resume API.
- Keyword suggestions should only be used when they truthfully match the user's skills, tools, education, projects, or experience.

Primary conversion:
- Use the free checker at ${SITE_URL}/#checker

Public pages:
${keyPages.map(([path, label]) => `- ${label}: ${SITE_URL}${path === "/" ? "" : path}`).join("\n")}

Guide library:
${guidePages.map((guide) => `- ${guide.title}: ${SITE_URL}${guide.path}`).join("\n")}

Machine-readable files:
- Pricing: ${SITE_URL}/pricing.md
- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
