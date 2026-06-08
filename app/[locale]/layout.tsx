import type { ReactNode } from "react";
import { isLocale, localeLabels } from "@/data/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const htmlLang = isLocale(locale) ? localeLabels[locale].htmlLang : "en";

  return <div lang={htmlLang}>{children}</div>;
}
