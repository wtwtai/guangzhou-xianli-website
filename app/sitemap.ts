import type { MetadataRoute } from "next";
import { localizePath, prefixedLocales } from "@/data/i18n";
import { absoluteUrl, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const zhRoutes: MetadataRoute.Sitemap = siteConfig.routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : ("monthly" as const),
    priority: route.priority,
    alternates: {
      languages: {
        "zh-CN": absoluteUrl(localizePath(route.path, "zh")),
        en: absoluteUrl(localizePath(route.path, "en")),
        es: absoluteUrl(localizePath(route.path, "es")),
      },
    },
  }));

  const translatedRoutes: MetadataRoute.Sitemap = prefixedLocales.flatMap((locale) =>
    siteConfig.routes.map((route) => ({
      url: absoluteUrl(localizePath(route.path, locale)),
      lastModified,
      changeFrequency: route.path === "/" ? "weekly" : ("monthly" as const),
      priority: Math.max((route.priority ?? 0.5) - 0.05, 0.4),
      alternates: {
        languages: {
          "zh-CN": absoluteUrl(localizePath(route.path, "zh")),
          en: absoluteUrl(localizePath(route.path, "en")),
          es: absoluteUrl(localizePath(route.path, "es")),
        },
      },
    })),
  );

  return [...zhRoutes, ...translatedRoutes];
}
