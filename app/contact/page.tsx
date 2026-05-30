import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SimplePageLayout } from "@/components/content/simple-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const title = "Contact ApplyReadyCV";
const description =
  "Contact ApplyReadyCV using the placeholder email address for product questions, privacy notes, or feedback.";
const path = "/contact";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title, description, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path },
          ]),
        ]}
      />
      <SimplePageLayout
        eyebrow="Contact"
        title="Contact ApplyReadyCV"
        intro="For now, contact is intentionally simple. There is no backend form submission, account system, or support database in this MVP."
        sections={[
          {
            title: "Email placeholder",
            body: "Use hello@applyreadycv.com as the current placeholder contact address. Replace it with the final operating inbox before public launch.",
          },
          {
            title: "What to send",
            body: "You can send product feedback, privacy questions, content corrections, or bug reports. Do not email sensitive resume content unless you are comfortable sharing it by email.",
          },
          {
            title: "Simple and safe for now",
            body: "A mailto link avoids storing contact submissions in a database during the MVP stage.",
          },
        ]}
        cta={{ label: "Use the checker", href: "/#checker" }}
      />
      <div className="mx-auto -mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <Link
          href="mailto:hello@applyreadycv.com"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          hello@applyreadycv.com
        </Link>
      </div>
    </>
  );
}
