import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/data/site";

export const locales = ["zh", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export type NonDefaultLocale = Exclude<Locale, "zh">;

export const defaultLocale: Locale = "zh";
export const prefixedLocales = ["en", "es"] as const satisfies NonDefaultLocale[];

export const localeLabels: Record<Locale, { short: string; label: string; htmlLang: string }> = {
  zh: { short: "中", label: "中文", htmlLang: "zh-CN" },
  en: { short: "EN", label: "English", htmlLang: "en" },
  es: { short: "ES", label: "Español", htmlLang: "es" },
};

export const routePaths = [
  "/",
  "/about",
  "/backdrop-paper",
  "/products",
  "/quality-standards",
  "/smart-rd",
  "/certifications",
  "/channel-partners",
  "/resources",
  "/expo",
  "/contact",
] as const;

export type RoutePath = (typeof routePaths)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPrefixedLocale(value: string): value is NonDefaultLocale {
  return prefixedLocales.includes(value as NonDefaultLocale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isPrefixedLocale(first) ? first : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts[0] && isPrefixedLocale(parts[0])) {
    const stripped = `/${parts.slice(1).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
  }

  return pathname === "/" ? "/" : pathname.replace(/\/$/, "");
}

export function localizePath(path: string, locale: Locale) {
  const normalized = stripLocaleFromPathname(path);

  if (locale === defaultLocale) {
    return normalized;
  }

  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export const localizedNavigation: Record<Locale, { label: string; href: RoutePath }[]> = {
  zh: [
    { label: "首页", href: "/" },
    { label: "关于仙丽", href: "/about" },
    { label: "专业背景纸", href: "/backdrop-paper" },
    { label: "产品中心", href: "/products" },
    { label: "标准与品控", href: "/quality-standards" },
    { label: "智能研发", href: "/smart-rd" },
    { label: "环保认证", href: "/certifications" },
    { label: "渠道合作", href: "/channel-partners" },
    { label: "资料中心", href: "/resources" },
    { label: "联系我们", href: "/contact" },
  ],
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Backdrop Paper", href: "/backdrop-paper" },
    { label: "Products", href: "/products" },
    { label: "Quality", href: "/quality-standards" },
    { label: "Smart R&D", href: "/smart-rd" },
    { label: "Certifications", href: "/certifications" },
    { label: "Partners", href: "/channel-partners" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  es: [
    { label: "Inicio", href: "/" },
    { label: "Sobre Xianli", href: "/about" },
    { label: "Fondos", href: "/backdrop-paper" },
    { label: "Productos", href: "/products" },
    { label: "Calidad", href: "/quality-standards" },
    { label: "I+D", href: "/smart-rd" },
    { label: "Certificados", href: "/certifications" },
    { label: "Canales", href: "/channel-partners" },
    { label: "Recursos", href: "/resources" },
    { label: "Contacto", href: "/contact" },
  ],
};

export const localizedUi = {
  zh: {
    apply: "申请渠道合作",
    phone: "电话咨询",
    wechat: "添加微信",
    cooperation: "申请合作",
    productLines: "四大产品线",
    quickNav: "快速导航",
    contact: "联系方式",
    phoneLabel: "电话",
    wechatLabel: "微信",
    emailLabel: "邮箱",
    addressLabel: "地址",
    footerTagline: "SPECIAL PAPER SUPPLY",
    footerDescription: "深耕彩卡特种纸全链，依托自有产能、先进设备与认证体系服务全国渠道客户。",
    copyright: `© ${new Date().getFullYear()} 仙丽科技。保留所有权利。`,
    details: "查看详情",
    contactToGet: "联系获取",
  },
  en: {
    apply: "Apply for Partnership",
    phone: "Call Us",
    wechat: "Add WeChat",
    cooperation: "Apply",
    productLines: "Product Lines",
    quickNav: "Quick Links",
    contact: "Contact",
    phoneLabel: "Phone",
    wechatLabel: "WeChat",
    emailLabel: "Email",
    addressLabel: "Address",
    footerTagline: "SPECIAL PAPER SUPPLY",
    footerDescription:
      "Xianli serves national channel customers with color card specialty paper supply-chain capability, production capacity, equipment, and certification support.",
    copyright: `© ${new Date().getFullYear()} Xianli Technology. All rights reserved.`,
    details: "View Details",
    contactToGet: "Contact Us",
  },
  es: {
    apply: "Solicitar Cooperación",
    phone: "Llamar",
    wechat: "Añadir WeChat",
    cooperation: "Solicitar",
    productLines: "Líneas de Producto",
    quickNav: "Navegación",
    contact: "Contacto",
    phoneLabel: "Teléfono",
    wechatLabel: "WeChat",
    emailLabel: "Email",
    addressLabel: "Dirección",
    footerTagline: "SPECIAL PAPER SUPPLY",
    footerDescription:
      "Xianli atiende a canales nacionales con capacidad de cadena de suministro, producción, equipos y certificaciones para papeles especiales de cartulina de color.",
    copyright: `© ${new Date().getFullYear()} Xianli Technology. Todos los derechos reservados.`,
    details: "Ver Detalles",
    contactToGet: "Contactar",
  },
} satisfies Record<Locale, Record<string, string>>;

export const localizedProductLines = {
  zh: ["专业背景纸", "精品包装纸", "特种卡纸", "文具封面纸"],
  en: ["Backdrop Paper", "Premium Packaging Paper", "Specialty Card Paper", "Stationery Cover Paper"],
  es: ["Papel de Fondo", "Papel de Empaque Premium", "Cartulina Especial", "Papel para Cubiertas"],
} satisfies Record<Locale, string[]>;

export type FeatureItem = {
  title: string;
  description?: string;
};

export type TableBlock = {
  columns: [string, string];
  rows: [string, string][];
};

export type LocalizedSection =
  | {
      type: "features";
      eyebrow?: string;
      title: string;
      description?: string;
      items: FeatureItem[];
    }
  | {
      type: "bullets";
      eyebrow?: string;
      title: string;
      description?: string;
      items: string[];
    }
  | {
      type: "table";
      eyebrow?: string;
      title: string;
      description?: string;
      table: TableBlock;
    }
  | {
      type: "steps";
      eyebrow?: string;
      title: string;
      description?: string;
      steps: FeatureItem[];
    }
  | {
      type: "downloads";
      eyebrow?: string;
      title: string;
      description?: string;
      items: { title: string; description: string; status: string }[];
    }
  | {
      type: "form";
      eyebrow?: string;
      title: string;
      description?: string;
      form: LocalizedForm;
    };

export type LocalizedFormField = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fullWidth?: boolean;
};

export type LocalizedForm = {
  fields: LocalizedFormField[];
  submitLabel: string;
  successMessage: string;
};

export type LocalizedPage = {
  path: RoutePath;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageLabel: string;
    imageKind?: "product" | "device" | "expo" | "certificate" | "document" | "packaging" | "standard";
    imageSrc?: string;
  };
  sections: LocalizedSection[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: RoutePath;
    secondaryLabel?: string;
    secondaryHref?: RoutePath;
  };
};

const commonForms: Record<NonDefaultLocale, { contact: LocalizedForm }> = {
  en: {
    contact: {
      fields: [
        { name: "name", label: "Name", required: true, placeholder: "Your name" },
        { name: "company", label: "Company", required: true, placeholder: "Company name" },
        { name: "contact", label: "Phone / WeChat", required: true, placeholder: "Phone number or WeChat ID" },
        { name: "region", label: "Region", required: true, placeholder: "Country / city" },
        {
          name: "product",
          label: "Interested Product",
          type: "select",
          required: true,
          options: ["Color card specialty paper", "Backdrop paper", "Packaging paper", "Specialty card paper", "Stationery cover paper", "Multi-product mix"],
        },
        {
          name: "cooperation",
          label: "Cooperation Type",
          type: "select",
          required: true,
          options: ["Channel partnership", "Wholesale purchase", "OEM/ODM", "Sample request", "Certification documents"],
        },
        { name: "message", label: "Message", type: "textarea", placeholder: "Tell us your requirements", fullWidth: true },
      ],
      submitLabel: "Submit Inquiry",
      successMessage: "We have received your information and will contact you soon.",
    },
  },
  es: {
    contact: {
      fields: [
        { name: "name", label: "Nombre", required: true, placeholder: "Su nombre" },
        { name: "company", label: "Empresa", required: true, placeholder: "Nombre de la empresa" },
        { name: "contact", label: "Teléfono / WeChat", required: true, placeholder: "Teléfono o WeChat" },
        { name: "region", label: "Región", required: true, placeholder: "País / ciudad" },
        {
          name: "product",
          label: "Producto de Interés",
          type: "select",
          required: true,
          options: ["Papel especial de cartulina de color", "Papel de fondo", "Papel de empaque", "Cartulina especial", "Papel para cubiertas", "Combinación de productos"],
        },
        {
          name: "cooperation",
          label: "Tipo de Cooperación",
          type: "select",
          required: true,
          options: ["Cooperación de canales", "Compra mayorista", "OEM/ODM", "Solicitud de muestras", "Documentos de certificación"],
        },
        { name: "message", label: "Mensaje", type: "textarea", placeholder: "Cuéntenos sus necesidades", fullWidth: true },
      ],
      submitLabel: "Enviar Consulta",
      successMessage: "Hemos recibido su información y nos pondremos en contacto pronto.",
    },
  },
};

export const localizedPages: Record<NonDefaultLocale, Record<RoutePath, LocalizedPage>> = {
  en: {
    "/": {
      path: "/",
      metadata: {
        title: "Xianli Technology | Color Card Specialty Paper Supply Chain Service Provider",
        description:
          "Xianli Technology provides color card specialty paper supply-chain solutions, backdrop paper, packaging paper, specialty card paper, stationery cover paper, quality standards, certifications, and channel partnership support.",
      },
      hero: {
        eyebrow: "Xianli Technology",
        title: "Color Card Specialty Paper Supply Chain Service Provider",
        description:
          "Deeply engaged in the full color card specialty paper chain, with production capacity, advanced equipment, ISO certification, and FSC / PEFC forest certification support.",
        imageLabel: "British luxury specialty paper supply-chain visual",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "expo",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Company Positioning",
          title: "More Than Paper Supply, a Professional Supply-Chain Partner",
          description:
            "Xianli builds a service system around sourcing, processing, quality control, packaging, channel sales, and long-term supply for wholesale and channel customers.",
          items: [
            { title: "Source Supply Integration", description: "Integrates color card specialty paper, backdrop paper, packaging paper, and stationery cover paper resources." },
            { title: "Application Expertise", description: "Focuses on color, texture, touch, packaging protection, and batch consistency." },
            { title: "Standard Quality Control", description: "Clear standards for specifications, appearance, packaging, sampling, and complaint tracking." },
            { title: "Channel Support", description: "Supports distributors, wholesalers, photo equipment channels, and e-commerce sellers." },
          ],
        },
        {
          type: "features",
          eyebrow: "Core Advantages",
          title: "Why Customers Choose Xianli",
          items: [
            { title: "26 Years in Specialty Paper", description: "A professional team focused on supply-chain and customized service." },
            { title: "Own Scaled Capacity", description: "Modern production management and more reliable delivery." },
            { title: "Self-developed Smart Equipment", description: "Automated lines improve precision, stability, and consistency." },
            { title: "International Certification", description: "ISO quality system, FSC, and PEFC certification support for professional sourcing." },
          ],
        },
        {
          type: "bullets",
          eyebrow: "Smart Processing",
          title: "Smart Production for More Efficient Delivery",
          description: "Equipment and process optimization improve order stability, customization speed, and batch consistency.",
          items: [
            "Standardized processing and batch-order delivery",
            "Improved dimensional consistency and appearance",
            "Optimized rolling, cutting, and packaging workflows",
            "Fast response for channel and customized orders",
            "From experience-based buying to standardized delivery",
          ],
        },
        {
          type: "features",
          eyebrow: "Product Lines",
          title: "Four Specialty Paper Product Lines",
          items: [
            { title: "Backdrop Paper", description: "For studios, e-commerce photography, content creation, children, pets, and commercial product shoots." },
            { title: "Premium Packaging Paper", description: "For gift packaging, e-commerce packaging, brand packaging, and premium paper bags." },
            { title: "Specialty Card Paper", description: "For printing, packaging, handcrafts, art education, cultural products, and wholesale channels." },
            { title: "Stationery Cover Paper", description: "For notebooks, folders, schools, offices, stationery, and art supply channels." },
          ],
        },
        {
          type: "features",
          eyebrow: "Sustainability",
          title: "Environmental Responsibility and Sustainable Supply",
          description:
            "Xianli continues improving environmental testing and certification documents to give customers clearer sourcing evidence.",
          items: [
            { title: "ISO Quality System", description: "Quality management and process documentation." },
            { title: "FSC Forest Certification", description: "Responsible forest sourcing support." },
            { title: "PEFC Forest Certification", description: "Sustainable forest certification support." },
          ],
        },
      ],
      cta: {
        title: "Need a Color Card Specialty Paper Solution?",
        description:
          "Contact us for product information, samples, and channel cooperation policies based on your market and customer type.",
        primaryLabel: "Contact Us",
        primaryHref: "/contact",
        secondaryLabel: "Apply for Partnership",
        secondaryHref: "/channel-partners",
      },
    },
    "/about": {
      path: "/about",
      metadata: {
        title: "About Xianli | Specialty Paper Supply Chain Service Provider",
        description: "Learn about Xianli's color card specialty paper supply-chain capabilities, customers, values, and channel services.",
      },
      hero: {
        eyebrow: "About Xianli",
        title: "About Xianli Technology",
        description: "Serving national channel customers with professional color card specialty paper supply-chain capability.",
        imageLabel: "Specialty paper sample books and supply-chain visual",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "expo",
      },
      sections: [
        {
          type: "bullets",
          eyebrow: "Company Profile",
          title: "Professional Paper Supply-Chain Service",
          description:
            "Xianli connects quality paper resources, own production capacity, smart equipment, and national channel markets around color card specialty paper, backdrop paper, packaging paper, and stationery cover paper.",
          items: ["Color card specialty paper supply", "Backdrop paper capability", "Premium packaging paper", "Stationery and cover paper", "OEM / ODM customization", "Long-term channel service"],
        },
        {
          type: "features",
          eyebrow: "Customers",
          title: "Who We Serve",
          items: [
            { title: "Paper Distributors" },
            { title: "Photography Equipment Channels" },
            { title: "Stationery Wholesalers" },
            { title: "Packaging Material Customers" },
            { title: "E-commerce Sellers" },
            { title: "Brand Customization Clients" },
            { title: "Expo Procurement Customers" },
            { title: "Overseas Buyers" },
          ],
        },
        {
          type: "features",
          eyebrow: "Values",
          title: "Our Values",
          items: [
            { title: "Standards", description: "Clear specifications, quality nodes, and cooperation documents." },
            { title: "Stability", description: "Batch consistency, continuous supply, and reliable partnership." },
            { title: "Integrity", description: "Verifiable documents, traceable records, and careful commitments." },
            { title: "Win-Win", description: "Growing paper markets together with channel partners." },
          ],
        },
      ],
      cta: {
        title: "Build a Long-term Paper Partnership with Xianli",
        description: "Contact us for product materials, samples, and cooperation policies.",
        primaryLabel: "Contact Us",
        primaryHref: "/contact",
      },
    },
    "/backdrop-paper": {
      path: "/backdrop-paper",
      metadata: {
        title: "Backdrop Paper | Wholesale and Channel Cooperation",
        description: "Professional photography backdrop paper solutions for studios, e-commerce photography, creators, and channel customers.",
      },
      hero: {
        eyebrow: "Backdrop Paper",
        title: "Professional Photography Backdrop Paper Solutions",
        description:
          "Stable, standardized, and batch-supply backdrop paper for studios, e-commerce shooting, content creators, and channel customers.",
        imageLabel: "Backdrop paper product visual",
        imageSrc: "/brand-assets/product-backdrop-paper.png",
        imageKind: "product",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Use Cases",
          title: "Application Scenarios",
          items: [
            { title: "Portrait Photography" },
            { title: "E-commerce Product Images" },
            { title: "Food Photography" },
            { title: "Children Photography" },
            { title: "Pet Photography" },
            { title: "Video and Live Streaming" },
            { title: "Schools and Training" },
            { title: "Commercial Content Creation" },
          ],
        },
        {
          type: "features",
          eyebrow: "Features",
          title: "Product Features",
          items: [
            { title: "Matte Low Reflection", description: "Designed for studio lighting environments." },
            { title: "Smooth Background Curve", description: "Roll format supports continuous background curves." },
            { title: "Multiple Colors", description: "White, black, gray, and color series for channel sales." },
            { title: "Multiple Sizes", description: "Common sizes plus customization support." },
            { title: "Roll Packaging", description: "Paper core and outer carton for storage and shipping." },
            { title: "Channel Ready", description: "Clear specifications and repeat purchase potential." },
          ],
        },
        {
          type: "table",
          eyebrow: "Specifications",
          title: "Common Specification Table",
          table: {
            columns: ["Item", "Specification"],
            rows: [
              ["Width", "53 in / 86 in / 107 in / Custom"],
              ["Length", "16 ft / 36 ft / Custom"],
              ["Surface", "Matte"],
              ["Colors", "White, black, gray, and color series"],
              ["Packaging", "Paper core roll + outer carton"],
              ["Customer Type", "Wholesale, channel, e-commerce, photo equipment stores"],
              ["Customization", "Supported"],
            ],
          },
        },
      ],
      cta: {
        title: "Need Backdrop Paper Samples or Wholesale Pricing?",
        description: "Tell us your channel type, region, and target specifications.",
        primaryLabel: "Request Samples",
        primaryHref: "/contact",
        secondaryLabel: "Get Wholesale Pricing",
        secondaryHref: "/contact",
      },
    },
    "/products": {
      path: "/products",
      metadata: {
        title: "Products | Color Card Specialty Paper, Backdrop Paper, Packaging Paper",
        description: "Xianli product center covers color card specialty paper, backdrop paper, packaging paper, specialty card paper, and stationery cover paper.",
      },
      hero: {
        eyebrow: "Products",
        title: "Product Center",
        description:
          "A specialty paper portfolio built around color card paper supply-chain capability, covering backdrop paper, premium packaging paper, specialty card paper, and stationery cover paper.",
        imageLabel: "Four specialty paper product lines",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "product",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Portfolio",
          title: "Four Product Lines",
          items: [
            { title: "Backdrop Paper", description: "For studios, e-commerce photography, video content, children, pets, and product photography." },
            { title: "Premium Packaging Paper", description: "For premium bags, gift boxes, brand packaging, e-commerce packaging, and wholesale channels." },
            { title: "Specialty Card Paper", description: "For printing, packaging, handcrafts, art education, cultural products, and wholesale channels." },
            { title: "Stationery Cover Paper", description: "For notebook covers, folders, school and office channels, stationery, and art supplies." },
          ],
        },
      ],
      cta: {
        title: "Need a Complete Product Catalog?",
        description: "We can suggest a product mix based on your channel type and procurement direction.",
        primaryLabel: "Consult Products",
        primaryHref: "/contact",
        secondaryLabel: "View Resources",
        secondaryHref: "/resources",
      },
    },
    "/quality-standards": {
      path: "/quality-standards",
      metadata: {
        title: "Quality Standards | Standardized Quality Control for Specialty Paper",
        description: "Xianli standardizes specifications, appearance, color, packaging, sampling, and traceability for more reliable procurement.",
      },
      hero: {
        eyebrow: "Quality Standards",
        title: "Standardized Quality Control System",
        description: "Moving specialty paper procurement from experience-based judgment to clear, inspectable, and traceable processes.",
        imageLabel: "Quality control process visual",
        imageKind: "standard",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Five Standards",
          title: "Key Quality Standards",
          items: [
            { title: "Specification Consistency", description: "Width, length, paper core, roll diameter, and packaging dimensions." },
            { title: "Surface Appearance", description: "Spots, creases, pressure marks, edge damage, flatness, and cleanliness." },
            { title: "Color Management", description: "Common color systems, batch color difference, and customer scenarios." },
            { title: "Packaging and Transport", description: "End-face protection, paper core protection, carton strength, moisture and pressure resistance." },
            { title: "Sampling and Traceability", description: "Incoming inspection, process inspection, pre-packaging checks, outgoing sampling, and complaint tracking." },
          ],
        },
        {
          type: "steps",
          eyebrow: "Process",
          title: "Quality Control Process",
          steps: [
            { title: "Raw Material / Semi-finished Goods Inbound", description: "Record source, specification, and condition." },
            { title: "Pre-processing Check", description: "Confirm dimensions, appearance, and processing requirements." },
            { title: "Process Inspection", description: "Monitor dimensions and surface condition." },
            { title: "Pre-packaging Check", description: "Confirm roll ends, cores, and product appearance." },
            { title: "Outgoing Sampling", description: "Check specifications, packaging, and labels by batch." },
            { title: "Batch Retention and Traceability", description: "Keep records for later review and complaint handling." },
          ],
        },
      ],
      cta: {
        title: "Need Quality Standard Documents?",
        description: "Contact us for specification, packaging, sampling, and traceability documents.",
        primaryLabel: "Request Documents",
        primaryHref: "/contact",
      },
    },
    "/smart-rd": {
      path: "/smart-rd",
      metadata: {
        title: "Smart Equipment and R&D | Specialty Paper Processing Capability",
        description: "Xianli improves processing, packaging, and batch delivery through equipment R&D and process optimization.",
      },
      hero: {
        eyebrow: "Smart R&D",
        title: "Smart Equipment and R&D Capability",
        description: "Equipment R&D and process optimization make specialty paper processing, packaging, and batch delivery more stable.",
        imageLabel: "Equipment operation video placeholder",
        imageKind: "device",
      },
      sections: [
        {
          type: "bullets",
          eyebrow: "Processing Value",
          title: "The Value of Smart Processing",
          description:
            "Stable paper resources also require stable processing and packaging capability. Xianli continues optimizing equipment and workflows.",
          items: ["Specification consistency", "Delivery efficiency", "Packaging stability", "R&D and equipment modification capability"],
        },
        {
          type: "table",
          eyebrow: "Capabilities",
          title: "Capability Display",
          table: {
            columns: ["Equipment / Process Capability", "Value for Customers"],
            rows: [
              ["Standardized processing", "More stable dimensions"],
              ["Automatic / semi-automatic rolling", "More unified appearance"],
              ["Batch handling", "More stable delivery time"],
              ["Standard packaging", "Reduced transport loss"],
              ["Customization response", "Supports different channel needs"],
            ],
          },
        },
      ],
      cta: {
        title: "Need Custom Processing Capability?",
        description: "Provide specifications, packaging method, channel sales mode, and estimated volume for evaluation.",
        primaryLabel: "Discuss Custom Processing",
        primaryHref: "/contact",
      },
    },
    "/certifications": {
      path: "/certifications",
      metadata: {
        title: "Certifications | Environmental Certification and Testing Documents",
        description: "Xianli continues improving environmental testing, ISO quality system, FSC, and PEFC certification documents.",
      },
      hero: {
        eyebrow: "Certifications",
        title: "Environmental Certification and Responsible Paper Supply",
        description: "Improving environmental testing and certification systems to provide clearer procurement evidence.",
        imageLabel: "Certificate image placeholder",
        imageKind: "certificate",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Certificates",
          title: "Certification Display",
          description: "Display areas are prepared for later certificate files.",
          items: [
            { title: "ISO Quality System", description: "Quality management system documentation." },
            { title: "FSC Forest Certification", description: "Responsible forest sourcing documentation." },
            { title: "PEFC Forest Certification", description: "Sustainable forest certification documentation." },
          ],
        },
        {
          type: "downloads",
          eyebrow: "Downloads",
          title: "Download Area",
          items: [
            { title: "Environmental Certification Documents", description: "Certification and testing documents.", status: "Contact Us" },
            { title: "Testing Reports", description: "Third-party reports and material safety information.", status: "By final files" },
            { title: "Material Notes", description: "Material source and application scope.", status: "In preparation" },
            { title: "Packaging Notes", description: "Packaging materials and transport protection.", status: "In preparation" },
          ],
        },
      ],
      cta: {
        title: "Need Certification Documents?",
        description: "Leave your company name, product needs, and intended use. We will provide available documents.",
        primaryLabel: "Request Documents",
        primaryHref: "/contact",
      },
    },
    "/channel-partners": {
      path: "/channel-partners",
      metadata: {
        title: "Channel Partners | National Specialty Paper Channel Recruitment",
        description: "Become a Xianli specialty paper channel partner with product, document, sample, training, customization, and after-sales support.",
      },
      hero: {
        eyebrow: "Channel Partners",
        title: "Become a Xianli Specialty Paper Channel Partner",
        description: "Bring standardized specialty paper to more photography, stationery, packaging, and wholesale markets.",
        imageLabel: "Channel partnership product visual",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "expo",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Why Xianli",
          title: "Why Choose Xianli",
          items: [
            { title: "Clear Product Lines" },
            { title: "Specialty Paper Advantage" },
            { title: "Public Quality Standards" },
            { title: "Stable Supply" },
            { title: "Customization Support" },
            { title: "Document Support" },
            { title: "Sample Support" },
            { title: "Long-term Regional Distribution" },
          ],
        },
        {
          type: "table",
          eyebrow: "Support",
          title: "Cooperation Support",
          table: {
            columns: ["Support Item", "Content"],
            rows: [
              ["Product Support", "Color card specialty paper, backdrop paper, packaging paper, specialty card paper, stationery cover paper"],
              ["Document Support", "Catalogs, specification sheets, images, videos, selling points"],
              ["Sample Support", "Sample packs for display and testing"],
              ["Training Support", "Product knowledge, sales talking points, application scenarios"],
              ["Customization Support", "Specifications, packaging, brand, and channel combinations"],
              ["After-sales Support", "Quality feedback, batch traceability, and handling mechanism"],
            ],
          },
        },
        {
          type: "steps",
          eyebrow: "Process",
          title: "Cooperation Process",
          steps: [
            { title: "Submit Application" },
            { title: "Discuss Region and Channel Type" },
            { title: "Send Samples and Documents" },
            { title: "Confirm Price System and Cooperation Mode" },
            { title: "First Order and Product Training" },
            { title: "Long-term Supply and Market Support" },
          ],
        },
        {
          type: "form",
          eyebrow: "Application",
          title: "Partnership Application Form",
          description: "Leave your channel type, region, interested products, and sample needs.",
          form: commonForms.en.contact,
        },
      ],
      cta: {
        title: "Ready to Develop Regional Channel Cooperation?",
        description: "We will help confirm a cooperation model based on your channel resources and target products.",
        primaryLabel: "Submit Application",
        primaryHref: "/channel-partners",
        secondaryLabel: "Contact Us",
        secondaryHref: "/contact",
      },
    },
    "/resources": {
      path: "/resources",
      metadata: {
        title: "Resources | Product Catalogs, Specifications, and Certifications",
        description: "Get Xianli product, standard, certification, and channel partnership documents.",
      },
      hero: {
        eyebrow: "Resources",
        title: "Resources",
        description: "Get product, standard, certification, and channel partnership documents from Xianli Technology.",
        imageLabel: "Product documents and catalog cover visual",
        imageSrc: "/brand-assets/product-card-paper.png",
        imageKind: "document",
      },
      sections: [
        {
          type: "downloads",
          eyebrow: "Downloads",
          title: "Product, Standard, Certification, and Partnership Documents",
          description: "Download buttons are placeholders and can later be connected to real PDFs or document request flows.",
          items: [
            { title: "Company Profile PDF", description: "Company positioning, capabilities, and cooperation direction.", status: "In preparation" },
            { title: "Product Catalog PDF", description: "Product lines and application scenarios.", status: "Contact Us" },
            { title: "Backdrop Paper Specification Sheet", description: "Common sizes, colors, packaging, and customization notes.", status: "Contact Us" },
            { title: "Backdrop Paper Color Card", description: "Common color system for backdrop paper.", status: "Contact Us" },
            { title: "Channel Cooperation Guide", description: "Partners, support, and application process.", status: "In preparation" },
            { title: "Certification Documents", description: "Certification, testing, and material notes.", status: "By final files" },
          ],
        },
      ],
      cta: {
        title: "Need Product Catalogs or Specification Documents?",
        description: "Tell us your customer type, sales channel, and target product for a more suitable document pack.",
        primaryLabel: "Contact for Documents",
        primaryHref: "/contact",
      },
    },
    "/expo": {
      path: "/expo",
      metadata: {
        title: "Expo Page | Xianli Specialty Paper Solutions",
        description: "Quick page for expo customers to learn about Xianli specialty paper supply-chain solutions.",
      },
      hero: {
        eyebrow: "Expo Quick Page",
        title: "Welcome to Xianli Paper Solutions",
        description:
          "Color card specialty paper supply chain and backdrop paper wholesale solutions for stable, standardized, and sustainable channel cooperation.",
        imageLabel: "Expo customer quick product visual",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "expo",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Quick View",
          title: "What to Know First",
          items: [
            { title: "Company", description: "A professional color card specialty paper supply-chain service provider." },
            { title: "Product Lines", description: "Backdrop paper, packaging paper, specialty card paper, stationery cover paper." },
            { title: "Core Strengths", description: "Standard quality control, smart processing, and channel support." },
          ],
        },
        {
          type: "form",
          eyebrow: "Contact",
          title: "Leave Expo Contact Information",
          description: "We will follow up after the expo with product documents, samples, and cooperation suggestions.",
          form: commonForms.en.contact,
        },
      ],
      cta: {
        title: "Welcome to Schedule a Deeper Discussion After the Expo",
        description: "We can arrange documents, samples, and cooperation policy communication based on your channel type.",
        primaryLabel: "Schedule Discussion",
        primaryHref: "/contact",
      },
    },
    "/contact": {
      path: "/contact",
      metadata: {
        title: "Contact Us | Xianli Technology",
        description: "Contact Xianli Technology for product catalogs, samples, wholesale pricing, partnership, OEM/ODM, and certification documents.",
      },
      hero: {
        eyebrow: "Contact",
        title: "Contact Us",
        description: "We welcome channel partners, wholesalers, brand customers, and expo procurement customers.",
        imageLabel: "Specialty paper supply-chain meeting visual",
        imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
        imageKind: "expo",
      },
      sections: [
        {
          type: "features",
          eyebrow: "Topics",
          title: "Common Inquiry Types",
          items: [
            { title: "Product Catalog" },
            { title: "Sample Request" },
            { title: "Wholesale Pricing" },
            { title: "Channel Partnership" },
            { title: "OEM / ODM" },
            { title: "Certification Documents" },
          ],
        },
        {
          type: "form",
          eyebrow: "Inquiry",
          title: "Contact Form",
          description: "Leave your product needs, channel type, or document request direction.",
          form: commonForms.en.contact,
        },
      ],
      cta: {
        title: "Get Products, Samples, and Cooperation Policies",
        description: "Tell us your procurement goal and channel type. Xianli will provide a suitable paper supply solution.",
        primaryLabel: "Apply for Partnership",
        primaryHref: "/channel-partners",
        secondaryLabel: "Resources",
        secondaryHref: "/resources",
      },
    },
  },
  es: {} as Record<RoutePath, LocalizedPage>,
};

localizedPages.es = {
  ...Object.fromEntries(
    Object.entries(localizedPages.en).map(([path, page]) => [
      path,
      {
        ...page,
        metadata: {
          title: page.metadata.title
            .replace("Xianli Technology", "Tecnología Xianli")
            .replace("Color Card Specialty Paper Supply Chain Service Provider", "Proveedor Profesional de Cadena de Suministro de Papel Especial")
            .replace("Contact Us", "Contacto")
            .replace("Resources", "Recursos")
            .replace("Products", "Productos")
            .replace("Quality Standards", "Estándares de Calidad")
            .replace("Smart Equipment and R&D", "Equipos Inteligentes e I+D")
            .replace("Certifications", "Certificaciones")
            .replace("Channel Partners", "Socios de Canal"),
          description: page.metadata.description
            .replace("Xianli Technology", "Tecnología Xianli")
            .replace("provides", "ofrece")
            .replace("supply-chain", "cadena de suministro"),
        },
        hero: {
          ...page.hero,
          eyebrow: page.hero.eyebrow
            .replace("Xianli Technology", "Tecnología Xianli")
            .replace("Products", "Productos")
            .replace("Resources", "Recursos")
            .replace("Contact", "Contacto"),
        },
      },
    ]),
  ) as Record<RoutePath, LocalizedPage>,
};

localizedPages.es["/"] = {
  ...localizedPages.es["/"],
  metadata: {
    title: "Tecnología Xianli | Proveedor Profesional de Cadena de Suministro de Papel Especial",
    description:
      "Tecnología Xianli ofrece soluciones de cadena de suministro para papeles especiales de cartulina de color, papel de fondo, papel de empaque, cartulina especial, estándares de calidad, certificaciones y cooperación de canales.",
  },
  hero: {
    ...localizedPages.en["/"].hero,
    eyebrow: "Tecnología Xianli",
    title: "Proveedor Profesional de Cadena de Suministro de Papel Especial",
    description:
      "Especialistas en toda la cadena de papeles especiales de cartulina de color, con capacidad propia, equipos avanzados, certificación ISO y soporte FSC / PEFC.",
  },
  sections: [
    {
      type: "features",
      eyebrow: "Posicionamiento",
      title: "Más que suministro de papel, un socio profesional de cadena de suministro",
      description:
        "Xianli construye un sistema de servicio para compra, procesamiento, control de calidad, empaque, ventas de canal y suministro a largo plazo.",
      items: [
        { title: "Integración de Suministro", description: "Integra recursos de papeles especiales, papel de fondo, papel de empaque y papel para cubiertas." },
        { title: "Capacidad de Aplicación", description: "Enfoque en color, textura, tacto, protección de empaque y consistencia por lote." },
        { title: "Control de Calidad Estándar", description: "Estándares claros para especificaciones, apariencia, empaque, muestreo y trazabilidad." },
        { title: "Soporte de Canales", description: "Soporte para distribuidores, mayoristas, canales fotográficos y vendedores de e-commerce." },
      ],
    },
    {
      type: "features",
      eyebrow: "Ventajas",
      title: "Por qué los clientes eligen Xianli",
      items: [
        { title: "26 años en papeles especiales", description: "Equipo profesional enfocado en cadena de suministro y servicio personalizado." },
        { title: "Capacidad propia escalable", description: "Gestión moderna de producción y entrega más confiable." },
        { title: "Equipos inteligentes propios", description: "Líneas automatizadas para mayor precisión, estabilidad y consistencia." },
        { title: "Certificación internacional", description: "Soporte de ISO, FSC y PEFC para compras profesionales." },
      ],
    },
    {
      type: "features",
      eyebrow: "Productos",
      title: "Cuatro líneas de productos",
      items: [
        { title: "Papel de Fondo", description: "Para estudios, fotografía e-commerce, creación de contenido y fotografía comercial." },
        { title: "Papel de Empaque Premium", description: "Para regalos, e-commerce, empaque de marca y bolsas premium." },
        { title: "Cartulina Especial", description: "Para impresión, empaque, manualidades, formación artística y canales mayoristas." },
        { title: "Papel para Cubiertas", description: "Para cuadernos, carpetas, escuelas, oficinas, papelería y canales de arte." },
      ],
    },
  ],
  cta: {
    title: "¿Necesita una solución de papel especial?",
    description: "Contáctenos para información de productos, muestras y políticas de cooperación según su mercado.",
    primaryLabel: "Contactar",
    primaryHref: "/contact",
    secondaryLabel: "Solicitar Cooperación",
    secondaryHref: "/channel-partners",
  },
};

const spanishPageOverrides: Partial<Record<RoutePath, LocalizedPage>> = {
  "/about": {
    path: "/about",
    metadata: {
      title: "Sobre Xianli | Proveedor de Cadena de Suministro de Papel Especial",
      description:
        "Conozca la capacidad de Xianli en cadena de suministro de papeles especiales, producción, equipos, valores y servicio a canales.",
    },
    hero: {
      eyebrow: "Sobre Xianli",
      title: "Sobre Tecnología Xianli",
      description:
        "Servimos a clientes de canal con capacidad profesional de cadena de suministro para papeles especiales de cartulina de color.",
      imageLabel: "Libros de muestras y visual de cadena de suministro",
      imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
      imageKind: "expo",
    },
    sections: [
      {
        type: "bullets",
        eyebrow: "Perfil",
        title: "Servicio Profesional de Cadena de Suministro de Papel",
        description:
          "Xianli conecta recursos de papel de calidad, capacidad propia, equipos inteligentes y canales nacionales alrededor de papeles especiales, papel de fondo, papel de empaque y papel para cubiertas.",
        items: [
          "Suministro de papeles especiales de cartulina de color",
          "Capacidad en papel de fondo profesional",
          "Papel de empaque premium",
          "Papel para papelería y cubiertas",
          "Personalización OEM / ODM",
          "Servicio de canal a largo plazo",
        ],
      },
      {
        type: "features",
        eyebrow: "Clientes",
        title: "A Quién Servimos",
        items: [
          { title: "Distribuidores de papel" },
          { title: "Canales de equipos fotográficos" },
          { title: "Mayoristas de papelería" },
          { title: "Clientes de materiales de empaque" },
          { title: "Vendedores de e-commerce" },
          { title: "Clientes de marca personalizada" },
          { title: "Compradores de ferias" },
          { title: "Compradores internacionales" },
        ],
      },
      {
        type: "features",
        eyebrow: "Valores",
        title: "Nuestros Valores",
        items: [
          { title: "Estándar", description: "Especificaciones, documentos y nodos de calidad claros." },
          { title: "Estabilidad", description: "Consistencia por lote, suministro continuo y relación confiable." },
          { title: "Integridad", description: "Documentos verificables, registros trazables y compromisos prudentes." },
          { title: "Ganar-Ganar", description: "Crecimiento conjunto con socios de canal." },
        ],
      },
    ],
    cta: {
      title: "Construya una Cooperación de Papel a Largo Plazo con Xianli",
      description: "Contáctenos para obtener información de productos, muestras y políticas de cooperación.",
      primaryLabel: "Contactar",
      primaryHref: "/contact",
    },
  },
  "/backdrop-paper": {
    path: "/backdrop-paper",
    metadata: {
      title: "Papel de Fondo | Venta Mayorista y Cooperación de Canal",
      description:
        "Soluciones profesionales de papel de fondo para estudios, fotografía e-commerce, creadores de contenido y clientes de canal.",
    },
    hero: {
      eyebrow: "Papel de Fondo",
      title: "Soluciones Profesionales de Papel de Fondo Fotográfico",
      description:
        "Papel de fondo estable, estandarizado y apto para suministro por lotes a estudios, e-commerce, creadores y canales.",
      imageLabel: "Visual de producto de papel de fondo",
      imageSrc: "/brand-assets/product-backdrop-paper.png",
      imageKind: "product",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Escenarios",
        title: "Aplicaciones",
        items: [
          { title: "Fotografía de retrato" },
          { title: "Imágenes de producto e-commerce" },
          { title: "Fotografía gastronómica" },
          { title: "Fotografía infantil" },
          { title: "Fotografía de mascotas" },
          { title: "Video y transmisión en vivo" },
          { title: "Escuelas y formación" },
          { title: "Creación de contenido comercial" },
        ],
      },
      {
        type: "features",
        eyebrow: "Características",
        title: "Características del Producto",
        items: [
          { title: "Mate y baja reflexión", description: "Pensado para entornos de iluminación fotográfica." },
          { title: "Curva de fondo suave", description: "El formato en rollo facilita fondos continuos." },
          { title: "Múltiples colores", description: "Series blanco, negro, gris y colores para venta de canal." },
          { title: "Múltiples tamaños", description: "Medidas comunes y soporte de personalización." },
          { title: "Empaque en rollo", description: "Núcleo de papel y caja exterior para almacenamiento y transporte." },
          { title: "Apto para canal", description: "Especificaciones claras y potencial de recompra." },
        ],
      },
      {
        type: "table",
        eyebrow: "Especificaciones",
        title: "Tabla de Especificaciones Comunes",
        table: {
          columns: ["Ítem", "Especificación"],
          rows: [
            ["Ancho", "53 in / 86 in / 107 in / Personalizable"],
            ["Largo", "16 ft / 36 ft / Personalizable"],
            ["Superficie", "Mate"],
            ["Colores", "Blanco, negro, gris y series de color"],
            ["Empaque", "Rollo con núcleo de papel + caja exterior"],
            ["Tipo de cliente", "Mayorista, canal, e-commerce, tiendas fotográficas"],
            ["Personalización", "Disponible"],
          ],
        },
      },
    ],
    cta: {
      title: "¿Necesita Muestras o Precio Mayorista?",
      description: "Indíquenos su tipo de canal, región y especificaciones objetivo.",
      primaryLabel: "Solicitar Muestras",
      primaryHref: "/contact",
      secondaryLabel: "Precio Mayorista",
      secondaryHref: "/contact",
    },
  },
  "/products": {
    path: "/products",
    metadata: {
      title: "Productos | Papeles Especiales, Papel de Fondo y Empaque",
      description:
        "El centro de productos de Xianli cubre papeles especiales de cartulina de color, papel de fondo, papel de empaque, cartulina especial y papel para cubiertas.",
    },
    hero: {
      eyebrow: "Productos",
      title: "Centro de Productos",
      description:
        "Portafolio de papeles especiales basado en capacidad de cadena de suministro, con papel de fondo, papel de empaque premium, cartulina especial y papel para cubiertas.",
      imageLabel: "Cuatro líneas de productos de papel especial",
      imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
      imageKind: "product",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Portafolio",
        title: "Cuatro Líneas de Productos",
        items: [
          { title: "Papel de Fondo", description: "Para estudios, e-commerce, video, fotografía infantil, mascotas y productos." },
          { title: "Papel de Empaque Premium", description: "Para bolsas premium, cajas de regalo, empaque de marca, e-commerce y canales mayoristas." },
          { title: "Cartulina Especial", description: "Para impresión, empaque, manualidades, formación artística, productos culturales y mayoristas." },
          { title: "Papel para Cubiertas", description: "Para cubiertas de cuadernos, carpetas, canales escolares y de oficina, papelería y arte." },
        ],
      },
    ],
    cta: {
      title: "¿Necesita un Catálogo Completo?",
      description: "Podemos recomendar una combinación de productos según su canal y dirección de compra.",
      primaryLabel: "Consultar Productos",
      primaryHref: "/contact",
      secondaryLabel: "Ver Recursos",
      secondaryHref: "/resources",
    },
  },
  "/quality-standards": {
    path: "/quality-standards",
    metadata: {
      title: "Estándares de Calidad | Control Estandarizado de Papel Especial",
      description:
        "Xianli estandariza especificaciones, apariencia, color, empaque, muestreo y trazabilidad para una compra más confiable.",
    },
    hero: {
      eyebrow: "Calidad",
      title: "Sistema de Control de Calidad Estandarizado",
      description:
        "Llevamos la compra de papeles especiales desde el juicio por experiencia hacia procesos claros, revisables y trazables.",
      imageLabel: "Visual de proceso de control de calidad",
      imageKind: "standard",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Cinco Estándares",
        title: "Estándares Clave de Calidad",
        items: [
          { title: "Consistencia de especificaciones", description: "Ancho, largo, núcleo, diámetro de rollo y tamaño de empaque." },
          { title: "Apariencia de superficie", description: "Manchas, arrugas, marcas de presión, bordes, planitud y limpieza." },
          { title: "Gestión de color", description: "Sistema de colores comunes, diferencia por lote y escenarios de uso." },
          { title: "Empaque y transporte", description: "Protección de extremos, núcleo, resistencia de caja, humedad y presión." },
          { title: "Muestreo y trazabilidad", description: "Inspección de entrada, proceso, pre-empaque, salida y reclamos." },
        ],
      },
      {
        type: "steps",
        eyebrow: "Proceso",
        title: "Proceso de Control de Calidad",
        steps: [
          { title: "Entrada de materia prima", description: "Registro de origen, especificación y estado." },
          { title: "Inspección previa", description: "Confirmación de dimensiones, apariencia y requisitos." },
          { title: "Inspección en proceso", description: "Seguimiento de medidas y superficie." },
          { title: "Revisión antes del empaque", description: "Confirmación de extremos, núcleos y apariencia." },
          { title: "Muestreo de salida", description: "Control de especificaciones, empaque y etiquetas por lote." },
          { title: "Retención y trazabilidad", description: "Registros para revisión y gestión de reclamos." },
        ],
      },
    ],
    cta: {
      title: "¿Necesita Documentos de Calidad?",
      description: "Solicite documentos de especificación, empaque, muestreo y trazabilidad.",
      primaryLabel: "Solicitar Documentos",
      primaryHref: "/contact",
    },
  },
  "/smart-rd": {
    path: "/smart-rd",
    metadata: {
      title: "Equipos Inteligentes e I+D | Capacidad de Procesamiento",
      description:
        "Xianli mejora procesamiento, empaque y entrega por lotes mediante I+D de equipos y optimización de procesos.",
    },
    hero: {
      eyebrow: "I+D Inteligente",
      title: "Equipos Inteligentes y Capacidad de I+D",
      description:
        "La investigación de equipos y la optimización de procesos hacen más estable el procesamiento, empaque y suministro por lotes.",
      imageLabel: "Marcador para video de operación de equipos",
      imageKind: "device",
    },
    sections: [
      {
        type: "bullets",
        eyebrow: "Valor",
        title: "Valor del Procesamiento Inteligente",
        description:
          "Los recursos de papel estables también requieren capacidad estable de procesamiento y empaque. Xianli optimiza continuamente equipos y flujos.",
        items: ["Consistencia de especificaciones", "Eficiencia de entrega", "Estabilidad de empaque", "Capacidad de modificación e I+D de equipos"],
      },
      {
        type: "table",
        eyebrow: "Capacidades",
        title: "Capacidad y Valor para el Cliente",
        table: {
          columns: ["Capacidad de equipo / proceso", "Valor para el cliente"],
          rows: [
            ["Procesamiento estandarizado", "Dimensiones más estables"],
            ["Enrollado automático / semiautomático", "Apariencia más uniforme"],
            ["Procesamiento por lotes", "Plazo de entrega más estable"],
            ["Empaque estándar", "Menor pérdida en transporte"],
            ["Respuesta personalizada", "Soporte para distintas necesidades de canal"],
          ],
        },
      },
    ],
    cta: {
      title: "¿Necesita Capacidad de Procesamiento Personalizado?",
      description: "Envíe especificaciones, empaque, modo de venta y volumen estimado para evaluación.",
      primaryLabel: "Hablar de Personalización",
      primaryHref: "/contact",
    },
  },
  "/certifications": {
    path: "/certifications",
    metadata: {
      title: "Certificaciones | Documentos Ambientales y de Ensayo",
      description: "Xianli mejora documentos de ensayos ambientales, sistema ISO, FSC y PEFC para compras profesionales.",
    },
    hero: {
      eyebrow: "Certificaciones",
      title: "Certificación Ambiental y Suministro Responsable",
      description: "Mejoramos continuamente los documentos de ensayo y certificación para ofrecer evidencia de compra más clara.",
      imageLabel: "Marcador para imagen de certificado",
      imageKind: "certificate",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Certificados",
        title: "Área de Exhibición de Certificados",
        description: "Los espacios están preparados para incorporar archivos reales de certificados.",
        items: [
          { title: "Sistema de Calidad ISO", description: "Documentos del sistema de gestión de calidad." },
          { title: "Certificación Forestal FSC", description: "Documentos sobre origen forestal responsable." },
          { title: "Certificación Forestal PEFC", description: "Documentos de certificación forestal sostenible." },
        ],
      },
      {
        type: "downloads",
        eyebrow: "Descargas",
        title: "Área de Descarga",
        items: [
          { title: "Documentos de Certificación Ambiental", description: "Certificados y ensayos disponibles.", status: "Contactar" },
          { title: "Informes de Ensayo", description: "Informes de terceros e información de materiales.", status: "Según archivos finales" },
          { title: "Notas de Material", description: "Origen del material y alcance de uso.", status: "En preparación" },
          { title: "Notas de Empaque", description: "Materiales de empaque y protección de transporte.", status: "En preparación" },
        ],
      },
    ],
    cta: {
      title: "¿Necesita Documentos de Certificación?",
      description: "Déjenos empresa, producto y uso previsto. Le enviaremos los documentos disponibles.",
      primaryLabel: "Solicitar Documentos",
      primaryHref: "/contact",
    },
  },
  "/channel-partners": {
    path: "/channel-partners",
    metadata: {
      title: "Socios de Canal | Reclutamiento Nacional de Canales de Papel Especial",
      description:
        "Conviértase en socio de canal de Xianli con apoyo de productos, documentos, muestras, capacitación, personalización y posventa.",
    },
    hero: {
      eyebrow: "Canales",
      title: "Conviértase en Socio de Canal de Xianli",
      description:
        "Lleve papeles especiales estandarizados a más mercados de fotografía, papelería, empaque y venta mayorista.",
      imageLabel: "Visual de cooperación de canal",
      imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
      imageKind: "expo",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Por qué Xianli",
        title: "Razones para Elegir Xianli",
        items: [
          { title: "Líneas de producto claras" },
          { title: "Ventaja en papeles especiales" },
          { title: "Estándares de calidad abiertos" },
          { title: "Suministro estable" },
          { title: "Soporte de personalización" },
          { title: "Soporte documental" },
          { title: "Soporte de muestras" },
          { title: "Distribución regional a largo plazo" },
        ],
      },
      {
        type: "table",
        eyebrow: "Apoyo",
        title: "Soporte de Cooperación",
        table: {
          columns: ["Proyecto de apoyo", "Contenido"],
          rows: [
            ["Producto", "Papeles especiales, papel de fondo, empaque, cartulina y cubiertas"],
            ["Documentos", "Catálogo, fichas, imágenes, videos y argumentos de venta"],
            ["Muestras", "Paquetes de muestra para exhibición y prueba"],
            ["Capacitación", "Conocimiento de producto, argumentos de venta y escenarios"],
            ["Personalización", "Especificación, empaque, marca y combinación de canal"],
            ["Posventa", "Retroalimentación de calidad, trazabilidad por lote y mecanismo de gestión"],
          ],
        },
      },
      {
        type: "steps",
        eyebrow: "Proceso",
        title: "Proceso de Cooperación",
        steps: [
          { title: "Enviar solicitud" },
          { title: "Comunicar región y tipo de canal" },
          { title: "Enviar muestras y documentos" },
          { title: "Confirmar precios y modo de cooperación" },
          { title: "Primer pedido y capacitación" },
          { title: "Suministro a largo plazo y apoyo de mercado" },
        ],
      },
      {
        type: "form",
        eyebrow: "Solicitud",
        title: "Formulario de Cooperación",
        description: "Deje su tipo de canal, región, productos de interés y necesidad de muestras.",
        form: commonForms.es.contact,
      },
    ],
    cta: {
      title: "Hablemos de una Cooperación Regional",
      description: "Xianli puede evaluar productos, muestras y política de suministro según su mercado.",
      primaryLabel: "Enviar Solicitud",
      primaryHref: "/contact",
      secondaryLabel: "Ver Recursos",
      secondaryHref: "/resources",
    },
  },
  "/resources": {
    path: "/resources",
    metadata: {
      title: "Recursos | Catálogos, Especificaciones y Certificados",
      description: "Obtenga materiales de Xianli sobre productos, estándares, certificaciones y cooperación de canales.",
    },
    hero: {
      eyebrow: "Recursos",
      title: "Centro de Recursos",
      description: "Obtenga información de productos, estándares, certificaciones y cooperación de canal.",
      imageLabel: "Marcador para documentos y catálogos",
      imageKind: "document",
    },
    sections: [
      {
        type: "downloads",
        eyebrow: "Descargas",
        title: "Materiales Disponibles",
        items: [
          { title: "Presentación de Empresa PDF", description: "Posicionamiento, capacidades y cooperación.", status: "Contactar" },
          { title: "Catálogo de Productos PDF", description: "Papel de fondo, empaque, cartulina y cubiertas.", status: "Contactar" },
          { title: "Tabla de Especificaciones", description: "Tamaños, colores, empaque y personalización.", status: "En preparación" },
          { title: "Carta de Colores", description: "Sistema de colores comunes.", status: "En preparación" },
          { title: "Guía de Cooperación", description: "Objetos de cooperación, soporte y proceso.", status: "Contactar" },
          { title: "Documentos Ambientales", description: "Certificados, ensayos y materiales.", status: "Contactar" },
        ],
      },
    ],
    cta: {
      title: "¿Necesita Archivos Específicos?",
      description: "Deje su producto y uso previsto. Le enviaremos los materiales correspondientes.",
      primaryLabel: "Contactar",
      primaryHref: "/contact",
    },
  },
  "/expo": {
    path: "/expo",
    metadata: {
      title: "Expo | Soluciones de Papel Especial Xianli",
      description:
        "Página rápida para visitantes de feria: conozca productos, ventajas, muestras y cooperación de canal de Xianli.",
    },
    hero: {
      eyebrow: "Expo",
      title: "Bienvenido a Conocer las Soluciones de Papel de Xianli",
      description:
        "Enfocados en papel de fondo profesional y papeles especiales de múltiples categorías para suministro estable y cooperación sostenible.",
      imageLabel: "Visual para clientes de feria",
      imageSrc: "/brand-assets/xianli-hero-british-luxury.png",
      imageKind: "expo",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Productos",
        title: "Cuatro Líneas de Productos",
        items: [
          { title: "Papel de Fondo" },
          { title: "Papel de Empaque Premium" },
          { title: "Cartulina Especial" },
          { title: "Papel para Cubiertas" },
        ],
      },
      {
        type: "features",
        eyebrow: "Ventajas",
        title: "Tres Ventajas Clave",
        items: [
          { title: "Control de calidad estandarizado" },
          { title: "Procesamiento inteligente" },
          { title: "Soporte de cooperación de canal" },
        ],
      },
      {
        type: "bullets",
        eyebrow: "Entradas rápidas",
        title: "Accesos para Clientes de Feria",
        items: ["Obtener catálogo", "Solicitar muestras", "Hablar de cooperación", "Agregar contacto"],
      },
      {
        type: "form",
        eyebrow: "Contacto rápido",
        title: "Formulario de Feria",
        description: "Deje su información y nos pondremos en contacto después de la feria.",
        form: commonForms.es.contact,
      },
    ],
    cta: {
      title: "Después de la Feria, Bienvenido a Agendar una Reunión",
      description: "Podemos preparar catálogos, muestras y propuestas según su canal.",
      primaryLabel: "Agendar Reunión",
      primaryHref: "/contact",
    },
  },
  "/contact": {
    path: "/contact",
    metadata: {
      title: "Contacto | Tecnología Xianli",
      description: "Contacte a Xianli para catálogo, muestras, precios mayoristas, cooperación de canal, OEM/ODM y documentos de certificación.",
    },
    hero: {
      eyebrow: "Contacto",
      title: "Contáctenos",
      description: "Damos la bienvenida a canales, mayoristas, marcas y clientes de feria.",
      imageLabel: "Mapa y contacto placeholder",
      imageKind: "document",
    },
    sections: [
      {
        type: "features",
        eyebrow: "Información",
        title: "Información de Contacto",
        items: [
          { title: "Teléfono", description: "Por completar" },
          { title: "WeChat", description: "Por completar" },
          { title: "Email", description: "Por completar" },
          { title: "Dirección", description: "Por completar" },
        ],
      },
      {
        type: "form",
        eyebrow: "Consulta",
        title: "Formulario de Contacto",
        description: "Deje sus necesidades de producto, tipo de canal o solicitud de documentos.",
        form: commonForms.es.contact,
      },
      {
        type: "bullets",
        eyebrow: "Tipos de consulta",
        title: "Consultas Frecuentes",
        items: [
          "Obtener catálogo",
          "Solicitar muestras",
          "Precio mayorista",
          "Cooperación de canal",
          "Personalización OEM/ODM",
          "Solicitar certificaciones",
        ],
      },
    ],
    cta: {
      title: "Obtenga Productos, Muestras y Políticas de Cooperación",
      description: "Cuéntenos su objetivo de compra y tipo de canal. Xianli preparará una solución adecuada.",
      primaryLabel: "Solicitar Cooperación",
      primaryHref: "/channel-partners",
      secondaryLabel: "Recursos",
      secondaryHref: "/resources",
    },
  },
};

for (const [path, page] of Object.entries(spanishPageOverrides) as [RoutePath, LocalizedPage][]) {
  localizedPages.es[path] = page;
}

for (const path of routePaths) {
  const page = localizedPages.es[path];
  if (!page) continue;
  page.cta = {
    ...page.cta,
    primaryLabel: page.cta.primaryLabel
      .replace("Contact Us", "Contactar")
      .replace("Consult Products", "Consultar Productos")
      .replace("Request Documents", "Solicitar Documentos")
      .replace("Request Samples", "Solicitar Muestras")
      .replace("Submit Application", "Enviar Solicitud")
      .replace("Schedule Discussion", "Agendar Reunión")
      .replace("Apply for Partnership", "Solicitar Cooperación"),
    secondaryLabel: page.cta.secondaryLabel
      ?.replace("Resources", "Recursos")
      .replace("Contact Us", "Contactar")
      .replace("View Resources", "Ver Recursos")
      .replace("Get Wholesale Pricing", "Precio Mayorista")
      .replace("Apply for Partnership", "Solicitar Cooperación"),
  };
  page.sections = page.sections.map((section) =>
    section.type === "form"
      ? {
          ...section,
          form: commonForms.es.contact,
        }
      : section,
  );
}

export function localizedMetadata(path: RoutePath, locale: NonDefaultLocale): Metadata {
  const page = localizedPages[locale][path];

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: localizePath(path, locale),
      languages: {
        "zh-CN": localizePath(path, "zh"),
        en: localizePath(path, "en"),
        es: localizePath(path, "es"),
      },
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: absoluteUrl(localizePath(path, locale)),
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
    },
  };
}
