import type { ContentPage, FaqItem } from "@/lib/site";
import type { GuidePage } from "@/lib/guides";
import {
  SITE_CONTACT_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type JsonLdData = {
  [key: string]: JsonValue;
};

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const webApplicationId = `${SITE_URL}/#web-application`;

export function organizationSchema(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/apple-icon.png"),
    email: SITE_CONTACT_EMAIL,
    description: SITE_TAGLINE,
  };
}

export function websiteSchema(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    inLanguage: "en",
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": webApplicationId,
    },
  };
}

export function webApplicationSchema(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": webApplicationId,
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "A free, privacy-first resume and CV checker for remote, freelance, and local job applications.",
    applicationSubCategory: "Resume checker",
    browserRequirements: "Requires a modern web browser.",
    isAccessibleForFree: true,
    featureList: [
      "ATS readability checks",
      "Resume score breakdown",
      "Resume keyword matching",
      "Job description keyword matching",
      "CV completeness and clarity checks",
      "Remote job CV readiness",
      "Freelance CV and profile review",
      "Local job CV readiness",
      "Browser-based resume text analysis",
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType: "Job seekers",
      },
      {
        "@type": "Audience",
        audienceType: "Freelancers",
      },
      {
        "@type": "Audience",
        audienceType: "Remote job applicants",
      },
    ],
    provider: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function itemListSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}): JsonLdData {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${url}#item-list`,
    name,
    description,
    url,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function softwareApplicationSchema(): JsonLdData {
  return webApplicationSchema();
}

export function webPageSchema({
  title,
  description,
  path,
  keywords,
  schemaType = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  schemaType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}): JsonLdData {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: "en",
    ...(keywords ? { keywords: keywords.join(", ") } : {}),
    isPartOf: {
      "@id": websiteId,
    },
    publisher: {
      "@id": organizationId,
    },
    mainEntity: {
      "@id": webApplicationId,
    },
  };
}

export function faqSchema(faq: FaqItem[], path?: string): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": `${absoluteUrl(path)}#faq` } : {}),
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(guide: GuidePage): JsonLdData {
  const url = absoluteUrl(guide.path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    url,
    ...(guide.image ? { image: absoluteUrl(guide.image.src) } : {}),
    inLanguage: "en",
    keywords: guide.seoKeywords.join(", "),
    datePublished: guide.publishedAt ?? "2026-06-02",
    dateModified: guide.updatedAt ?? "2026-06-17",
    author: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },
  };
}

export function contentPageSchemas(page: ContentPage) {
  return [
    webPageSchema({
      title: page.title,
      description: page.metaDescription,
      path: page.path,
      keywords: page.seoKeywords,
    }),
    faqSchema(page.faq, page.path),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.title, path: page.path },
    ]),
  ];
}
