import type { Metadata } from "next";

export const siteConfig = {
  name: "仙丽科技",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.xianli-paper.com",
  slogan: "让专业纸品，更标准、更稳定、更容易流通。",
  positioning: "彩卡特种纸供应链专业服务商",
  description:
    "仙丽科技深耕彩卡特种纸全链，依托自有产能、先进设备、ISO 国际认证及 FSC、PEFC 森林认证，为渠道客户提供彩卡特种纸供应链解决方案。",
  contact: {
    phone: "请后期填写",
    wechat: "请后期填写",
    email: "请后期填写",
    address: "请后期填写",
    hours: "周一至周六 9:00-18:00",
  },
  productLines: ["专业背景纸", "精品包装纸", "特种卡纸", "文具封面纸"],
  routes: [
    {
      path: "/",
      label: "首页",
      title: "仙丽科技｜彩卡特种纸供应链专业服务商｜彩卡特种纸与纸品批发合作",
      description:
        "仙丽科技深耕彩卡特种纸全链，依托自有产能、先进设备、ISO 国际认证及 FSC、PEFC 森林认证，为渠道客户提供彩卡特种纸供应链解决方案。",
      priority: 1,
    },
    {
      path: "/about",
      label: "关于仙丽",
      title: "关于仙丽｜彩卡特种纸供应链专业服务商",
      description:
        "了解仙丽科技在彩卡特种纸供应链、自有产能、先进设备、认证体系、标准化品控与渠道合作方面的能力。",
      priority: 0.8,
    },
    {
      path: "/backdrop-paper",
      label: "专业背景纸",
      title: "专业背景纸｜背景纸批发与渠道合作",
      description:
        "仙丽科技提供专业背景纸标准化产品方案，服务摄影棚、电商拍摄、内容创作与渠道批发客户。",
      priority: 0.9,
    },
    {
      path: "/products",
      label: "产品中心",
      title: "产品中心｜彩卡特种纸、专业背景纸、精品包装纸、文具封面纸",
      description:
        "仙丽科技产品中心覆盖彩卡特种纸、专业背景纸、精品包装纸、文具封面纸等特种纸品供应。",
      priority: 0.9,
    },
    {
      path: "/quality-standards",
      label: "标准与品控",
      title: "标准与品控｜背景纸标准化品控体系",
      description:
        "仙丽科技建立背景纸规格、外观、颜色、包装、抽检与追溯标准，帮助渠道客户降低采购风险。",
      priority: 0.85,
    },
    {
      path: "/smart-rd",
      label: "智能研发",
      title: "智能设备与研发｜背景纸智能化加工能力",
      description:
        "了解仙丽科技在背景纸加工设备、卷装、包装与批量交付流程方面的研发与优化能力。",
      priority: 0.8,
    },
    {
      path: "/certifications",
      label: "环保认证",
      title: "环保认证｜纸品环保认证与检测资料",
      description:
        "仙丽科技持续完善纸品环保检测、ISO 质量体系认证、FSC 与 PEFC 森林认证资料，为客户提供更可靠的采购依据。",
      priority: 0.75,
    },
    {
      path: "/channel-partners",
      label: "渠道合作",
      title: "渠道合作｜全国彩卡特种纸渠道招商",
      description:
        "仙丽科技面向全国经销商、批发商、摄影器材渠道、文具渠道与电商卖家招募彩卡特种纸供应链合作伙伴。",
      priority: 0.95,
    },
    {
      path: "/resources",
      label: "资料中心",
      title: "资料中心｜产品目录、规格表与认证资料",
      description:
        "获取仙丽科技公司介绍、彩卡特种纸产品目录、背景纸规格表、色卡、渠道合作说明与环保认证资料。",
      priority: 0.7,
    },
    {
      path: "/expo",
      label: "展会专页",
      title: "展会专用页｜欢迎了解仙丽科技纸品解决方案",
      description:
        "展会客户快速了解仙丽科技彩卡特种纸供应链、专业背景纸、标准化品控与渠道合作支持。",
      priority: 0.7,
    },
    {
      path: "/contact",
      label: "联系我们",
      title: "联系我们｜仙丽科技",
      description:
        "欢迎渠道商、批发商、品牌客户与展会采购客户联系仙丽科技，获取产品目录、样品、报价与合作政策。",
      priority: 0.8,
    },
  ],
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: "CN",
  knowsAbout: [
    "彩卡特种纸",
    "专业背景纸",
    "彩卡特种纸供应链",
    "纸品批发",
    "标准化品控",
    "ISO 质量体系认证",
    "FSC 森林认证",
    "PEFC 森林认证",
  ],
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const enPath = path === "/" ? "/en" : `/en${path}`;
  const esPath = path === "/" ? "/es" : `/es${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "zh-CN": path,
        en: enPath,
        es: esPath,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function metadataFor(path: string): Metadata {
  const route = siteConfig.routes.find((item) => item.path === path);

  if (!route) {
    return createPageMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path,
    });
  }

  return createPageMetadata({
    title: route.title,
    description: route.description,
    path: route.path,
  });
}
