import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticleLayout } from "@/components/guides/guide-article-layout";
import { JsonLd } from "@/components/seo/json-ld";
import { getGuideBySlug, guidePages } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guidePages.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createPageMetadata({
    title: guide.metadataTitle,
    description: guide.metaDescription,
    path: guide.path,
    keywords: guide.seoKeywords,
    socialImagePath: `${guide.path}/opengraph-image`,
    twitterImagePath: `${guide.path}/twitter-image`,
    socialImageAlt: `${guide.title} guide by ApplyReadyCV`,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: guide.title,
            description: guide.metaDescription,
            path: guide.path,
            keywords: guide.seoKeywords,
            mainEntityId: `${absoluteUrl(guide.path)}#article`,
          }),
          articleSchema(guide),
          faqSchema(guide.faq, guide.path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: guide.path },
          ]),
        ]}
      />
      <GuideArticleLayout guide={guide} />
    </>
  );
}
