import type { MetadataRoute } from "next";
import { guidePages } from "@/lib/guides";
import { SITE_LAST_UPDATED, absoluteUrl, sitemapRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date(SITE_LAST_UPDATED);
  const guidesByPath = new Map(guidePages.map((guide) => [guide.path, guide]));
  const routes = [
    ...sitemapRoutes,
    ...guidePages.map((guide) => guide.path),
    "/llms.txt",
    "/pricing.md",
  ];

  return [...new Set(routes)].map((route) => {
    const guide = guidesByPath.get(route);
    const isMachineReadable = route === "/llms.txt" || route === "/pricing.md";

    return {
      url: absoluteUrl(route),
      lastModified: guide?.updatedAt
        ? new Date(guide.updatedAt)
        : siteLastModified,
      ...(guide?.image ? { images: [absoluteUrl(guide.image.src)] } : {}),
      changeFrequency:
        route === "/" || route === "/guides"
          ? "weekly"
          : isMachineReadable
            ? "monthly"
            : "monthly",
      priority:
        route === "/"
          ? 1
          : route.startsWith("/guides/")
            ? 0.7
            : route.includes("checker")
              ? 0.8
              : isMachineReadable
                ? 0.4
                : 0.6,
    };
  });
}
