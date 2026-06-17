import type { MetadataRoute } from "next";
import { guidePages } from "@/lib/guides";
import { absoluteUrl, sitemapRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guidesByPath = new Map(guidePages.map((guide) => [guide.path, guide]));
  const routes = [
    ...sitemapRoutes,
    ...guidePages.map((guide) => guide.path),
  ];

  return [...new Set(routes)].map((route) => {
    const guide = guidesByPath.get(route);

    return {
      url: absoluteUrl(route),
      lastModified: now,
      ...(guide?.image ? { images: [absoluteUrl(guide.image.src)] } : {}),
      changeFrequency:
        route === "/" || route === "/guides" ? "weekly" : "monthly",
      priority:
        route === "/"
          ? 1
          : route.startsWith("/guides/")
            ? 0.7
            : route.includes("checker")
              ? 0.8
              : 0.6,
    };
  });
}
