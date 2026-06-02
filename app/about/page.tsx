import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/content/simple-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { supportPages } from "@/lib/site";

const page = supportPages.about;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
            keywords: page.keywords,
            schemaType: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.breadcrumbName, path: page.path },
          ]),
        ]}
      />
      <SimplePageLayout
        eyebrow="About"
        title="Practical CV feedback without inflated promises"
        intro="ApplyReadyCV exists to help applicants review common resume issues before sending an application. It focuses on remote, freelance, and local job paths because each one asks for different evidence."
        sections={[
          {
            title: "What ApplyReadyCV is",
            body: "ApplyReadyCV is a free web-based resume and CV checker. It reviews pasted resume text against common readiness categories: ATS readability, job match, clarity and achievements, mode fit, and completeness.",
          },
          {
            title: "Why it exists",
            body: "Many resume tools overpromise. ApplyReadyCV is intentionally more conservative: it gives practical editing guidance while making it clear that no checker can guarantee hiring outcomes.",
          },
          {
            title: "Privacy-first philosophy",
            body: "The MVP keeps analysis local in the browser and avoids accounts, databases, ad scripts, and third-party resume APIs. That keeps the current product simple and privacy-conscious.",
          },
          {
            title: "No fake company story",
            body: "ApplyReadyCV does not claim endorsements, recruiter approval, partner logos, invented ratings, or fake testimonials. The product stands on useful content and a working checker.",
          },
        ]}
        cta={{ label: "Check your CV", href: "/#checker" }}
      />
    </>
  );
}
