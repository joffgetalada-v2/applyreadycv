import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return sitemapRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("checker") ? 0.8 : 0.6,
  }));
}
