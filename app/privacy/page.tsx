import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/content/simple-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const title = "Privacy | ApplyReadyCV";
const description =
  "Learn how ApplyReadyCV handles resume text, file uploads, pasted job descriptions, local processing, and current privacy-first limitations.";
const path = "/privacy";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy", path },
          ]),
        ]}
      />
      <SimplePageLayout
        eyebrow="Privacy-first"
        title="Privacy at ApplyReadyCV"
        intro="ApplyReadyCV is designed as a local-first resume checker. The MVP avoids accounts, databases, payment systems, ads, and server-side resume storage."
        sections={[
          {
            title: "Resumes are not stored",
            body: "The checker analyzes pasted resume text in the current browser session. It does not save uploaded files or resume text to a database.",
            items: [
              "No account is required.",
              "No server-side file storage is used.",
              "No resume content is sold or shared as a product.",
            ],
          },
          {
            title: "Files are processed locally where possible",
            body: "Text files are read through the browser File API. PDF and DOCX uploads currently show a safe fallback asking you to paste resume text instead of attempting unreliable extraction.",
            items: [
              ".txt files can be loaded locally.",
              ".pdf and .docx support is intentionally limited in the current MVP.",
              "Bad or unsupported uploads should not crash the checker.",
            ],
          },
          {
            title: "Pasted text is used for the current analysis",
            body: "Resume text and job descriptions are used by deterministic local scoring rules in the browser. The result is generated for your current interaction.",
          },
          {
            title: "No selling personal data",
            body: "ApplyReadyCV does not sell personal data. The current project does not include advertising scripts, affiliate links, user accounts, or third-party resume analysis APIs.",
          },
          {
            title: "Current limitations",
            body: "This privacy page describes the current MVP implementation. Future features may require an updated privacy policy before launch.",
            items: [
              "No backend contact form is currently provided.",
              "No analytics or ad scripts are included yet.",
              "Contact placeholder: hello@applyreadycv.com.",
            ],
          },
        ]}
      />
    </>
  );
}
