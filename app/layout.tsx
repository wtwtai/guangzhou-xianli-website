import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { organizationJsonLd, siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "仙麗科技｜专业纸业供应链服务商｜摄影背景纸与纸品批发合作",
    template: "%s",
  },
  description:
    "仙麗科技专注摄影背景纸标准化、多品类纸品批发与全国渠道合作，提供背景纸、彩卡卡纸、包装纸、文具用品纸等纸品供应链解决方案。",
  keywords: [
    "仙麗科技",
    "摄影背景纸",
    "背景纸批发",
    "纸品供应链",
    "纸品渠道合作",
    "彩卡卡纸",
    "包装纸",
    "文具用品纸",
  ],
  authors: [{ name: "仙麗科技" }],
  creator: "仙麗科技",
  publisher: "仙麗科技",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
    },
  },
  openGraph: {
    title: "仙麗科技｜专业纸业供应链服务商",
    description:
      "专注摄影背景纸标准化、多品类纸品批发与全国渠道合作。",
    url: siteConfig.url,
    siteName: "仙麗科技",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "仙麗科技｜专业纸业供应链服务商",
    description:
      "专注摄影背景纸标准化、多品类纸品批发与全国渠道合作。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
