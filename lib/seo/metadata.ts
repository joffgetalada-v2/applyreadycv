import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const socialImage = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: "ApplyReadyCV free ATS resume and CV checker for job applications",
};

const twitterImage = {
  url: absoluteUrl("/twitter-image"),
  width: 1200,
  height: 630,
  alt: socialImage.alt,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  socialImagePath?: string;
  twitterImagePath?: string;
  socialImageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  socialImagePath,
  twitterImagePath,
  socialImageAlt,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const pageSocialImage = socialImagePath
    ? {
        url: absoluteUrl(socialImagePath),
        width: 1200,
        height: 630,
        alt: socialImageAlt ?? title,
      }
    : socialImage;
  const pageTwitterImagePath = twitterImagePath ?? socialImagePath;
  const pageTwitterImage = pageTwitterImagePath
    ? {
        url: absoluteUrl(pageTwitterImagePath),
        width: 1200,
        height: 630,
        alt: socialImageAlt ?? title,
      }
    : twitterImage;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [pageSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [pageTwitterImage],
    },
  };
}
