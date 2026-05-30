import type { Metadata } from "next";
import { ContentPageLayout } from "@/components/content/content-page-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { contentPageSchemas } from "@/lib/seo/schema";
import { contentPages } from "@/lib/site";

const page = contentPages.ats;

export const metadata: Metadata = createPageMetadata({
  title: page.metadataTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function AtsResumeCheckerPage() {
  return (
    <>
      <JsonLd data={contentPageSchemas(page)} />
      <ContentPageLayout page={page} />
    </>
  );
}
