import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { organizationJsonLd, siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "仙丽科技｜彩卡特种纸供应链专业服务商｜彩卡特种纸与纸品批发合作",
    template: "%s",
  },
  description:
    "仙丽科技深耕彩卡特种纸全链，依托自有产能、先进设备、ISO 国际认证及 FSC、PEFC 森林认证，为渠道客户提供彩卡特种纸供应链解决方案。",
  keywords: [
    "仙丽科技",
    "彩卡特种纸",
    "彩卡特种纸供应链",
    "专业背景纸",
    "背景纸批发",
    "纸品渠道合作",
    "特种卡纸",
    "精品包装纸",
    "文具封面纸",
  ],
  authors: [{ name: "仙丽科技" }],
  creator: "仙丽科技",
  publisher: "仙丽科技",
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
    title: "仙丽科技｜彩卡特种纸供应链专业服务商",
    description:
      "深耕彩卡特种纸全链，自有产能、先进设备与认证体系支撑稳定供应。",
    url: siteConfig.url,
    siteName: "仙丽科技",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "仙丽科技｜彩卡特种纸供应链专业服务商",
    description:
      "深耕彩卡特种纸全链，自有产能、先进设备与认证体系支撑稳定供应。",
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
    <html lang="zh-CN" className="h-full scroll-smooth" data-scroll-behavior="smooth">
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
