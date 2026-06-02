import type { Metadata } from "next";
import { SimplePageLayout } from "@/components/content/simple-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { SITE_CONTACT_EMAIL, supportPages } from "@/lib/site";

const page = supportPages.privacy;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords,
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: page.title,
            description: page.description,
            path: page.path,
            keywords: page.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.breadcrumbName, path: page.path },
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
            body: "TXT, PDF, and DOCX files are read locally in the browser. If a PDF is scanned or image-based, extraction may not find usable text and the checker will ask you to paste the resume text instead.",
            items: [
              ".txt, .pdf, and .docx files can be loaded locally.",
              "Older .doc files are not parsed; export them as .docx, .pdf, or .txt first.",
              "Google Docs should be downloaded as .docx, .pdf, or .txt before upload.",
              "Bad or unsupported uploads should not crash the checker.",
            ],
          },
          {
            title: "Pasted text is used for the current analysis",
            body: "Resume text and job descriptions are used by deterministic local scoring rules in the browser. The result is generated for your current interaction.",
          },
          {
            title: "Analytics and personal data",
            body: "ApplyReadyCV uses Vercel Analytics to understand site traffic and basic usage patterns. The checker is still designed so resume text and uploaded files are not sent to a resume analysis API or stored in a database by this MVP.",
          },
          {
            title: "Current limitations",
            body: "This privacy page describes the current MVP implementation. Future features may require an updated privacy policy before launch.",
            items: [
              "No backend contact form is currently provided.",
              "Vercel Analytics is included for lightweight site analytics.",
              `Contact email: ${SITE_CONTACT_EMAIL}.`,
            ],
          },
        ]}
      />
    </>
  );
}
