import { notFound } from "next/navigation";
import { LocalizedRoutePage } from "@/components/LocalizedRoutePage";
import {
  isPrefixedLocale,
  localizedMetadata,
  prefixedLocales,
  routePaths,
  type NonDefaultLocale,
  type RoutePath,
} from "@/data/i18n";

function pathFromSlug(slug?: string[]): RoutePath | null {
  const path = slug && slug.length > 0 ? `/${slug.join("/")}` : "/";
  return routePaths.includes(path as RoutePath) ? (path as RoutePath) : null;
}

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    routePaths.map((path) => ({
      locale,
      slug: path === "/" ? [] : path.slice(1).split("/"),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const path = pathFromSlug(slug);

  if (!path) {
    notFound();
  }

  return localizedMetadata(path, locale);
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const path = pathFromSlug(slug);

  if (!path) {
    notFound();
  }

  return <LocalizedRoutePage locale={locale as NonDefaultLocale} path={path} />;
}
