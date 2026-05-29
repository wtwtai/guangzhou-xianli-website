import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  Camera,
  ClipboardCheck,
  Cpu,
  Factory,
  FileText,
  Handshake,
  Leaf,
  Network,
  PackageCheck,
  Palette,
  Ruler,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DownloadCard } from "@/components/DownloadCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/certifications";
import { productLines } from "@/data/products";
import { resources } from "@/data/resources";
import { metadataFor, siteConfig } from "@/data/site";

export const metadata = metadataFor("/");

const positioningCards = [
  {
    icon: Network,
    title: "源头供应链整合",
    description:
      "稳定整合专业背景纸、精品包装纸、特种卡纸、文具封面纸等资源，为客户提供更清晰的产品组合。",
  },
  {
    icon: Camera,
    title: "专业背景纸能力",
    description:
      "聚焦摄影背景纸细分市场，重视颜色、平整度、哑光表现、包装保护和批量一致性。",
  },
  {
    icon: ClipboardCheck,
    title: "标准化品控体系",
    description:
      "围绕规格、外观、包装、抽检和客诉追溯建立标准，让采购更有依据。",
  },
  {
    icon: Handshake,
    title: "渠道合作支持",
    description:
      "面向全国经销商、批发商、摄影器材渠道与电商卖家，提供产品、资料、样品与长期供货支持。",
  },
];

const advantages = [
  {
    icon: Camera,
    title: "专业背景纸品类能力",
    description:
      "围绕摄影使用场景，建立从颜色、克重、表面哑光度、纸张平整度到运输包装的产品标准。",
  },
  {
    icon: Cpu,
    title: "智能化加工与研发能力",
    description:
      "通过智能化设备提升加工效率、批量稳定性和定制响应速度。",
  },
  {
    icon: ShieldCheck,
    title: "公开化品控标准",
    description:
      "将背景纸的规格、外观、包装、抽检流程标准化，帮助客户降低采购风险。",
  },
  {
    icon: Boxes,
    title: "特种纸品供应链",
    description:
      "覆盖专业背景纸、精品包装纸、特种卡纸、文具封面纸，为渠道商提供更多可组合销售的纸品品类。",
  },
];

const smartList = [
  "支持规格化加工与批量订单交付",
  "提升尺寸一致性与产品外观统一性",
  "优化卷装、裁切、包装等关键环节",
  "支持渠道订单和定制订单的快速响应",
  "让背景纸从经验化加工走向标准化交付",
];

const qualityStandards = [
  {
    icon: Ruler,
    title: "尺寸标准",
    description: "宽度、长度、纸芯、卷径、包装尺寸等关键规格清晰管理。",
  },
  {
    icon: ClipboardCheck,
    title: "外观标准",
    description: "关注污点、折痕、压痕、边缘破损和表面平整度。",
  },
  {
    icon: Palette,
    title: "哑光表现",
    description: "面向摄影灯光环境，减少明显反光，提升拍摄背景稳定性。",
  },
  {
    icon: PackageCheck,
    title: "包装保护",
    description: "重视端面保护、纸芯保护、防潮、防压与运输安全。",
  },
  {
    icon: ShieldCheck,
    title: "批次抽检",
    description: "从入库、加工、包装到出货建立抽检节点。",
  },
  {
    icon: FileText,
    title: "客诉追溯",
    description: "通过批次、规格与订单记录追踪质量问题，提升售后处理效率。",
  },
];

const productIcons = [Camera, PackageCheck, Palette, FileText];
const productImages = [
  "/brand-assets/product-backdrop-paper.png",
  "/brand-assets/product-packaging-paper.png",
  "/brand-assets/product-card-paper.png",
  "/brand-assets/product-stationery-cover.png",
];

const heroKeywords = [
  { icon: Camera, title: "专业背景纸", text: "专业摄影 · 影像级表现" },
  { icon: Network, title: "特种纸供应链", text: "稳定供货 · 快速响应" },
  { icon: ShieldCheck, title: "标准化品控", text: "全流程检测 · 稳定如一" },
  { icon: Users, title: "全国渠道合作", text: "系统支持 · 共赢成长" },
];

const partnerTypes = [
  "纸张批发商",
  "摄影器材经销商",
  "文具用品渠道商",
  "包装材料批发商",
  "美术用品渠道",
  "电商卖家",
  "区域代理商",
  "展会采购客户",
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[#D6B46A]/20 bg-[#050505] text-[#F3EBDD]">
        <Image
          src="/brand-assets/xianli-hero-british-luxury.png"
          alt="英式黑金特种纸业供应链产品视觉"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.9)_24%,rgba(5,5,5,0.34)_62%,rgba(5,5,5,0.1)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.24)_30%,rgba(5,5,5,0.3)_100%)]" aria-hidden="true" />
        <Container className="relative flex min-h-[calc(100svh-72px)] flex-col justify-end py-10 sm:py-12 lg:py-14">
          <div className="fade-up max-w-4xl pb-8 pt-20 sm:pt-28 lg:pt-36">
            <p className="mb-5 inline-flex rounded-md border border-[#D6B46A]/30 bg-[#050505]/45 px-3 py-1.5 text-sm font-semibold tracking-[0.12em] text-[#D6B46A] backdrop-blur">
              {siteConfig.name}｜{siteConfig.positioning}
            </p>
            <h1 className="luxury-heading text-5xl font-semibold leading-tight tracking-normal text-[#D6B46A] sm:text-6xl lg:text-7xl">
              特种纸业供应链专业服务商
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F3EBDD]">
              专注专业背景纸、精品包装纸、特种卡纸与文具封面纸。仙麗科技以智能化加工、公开化品控标准和稳定供应链，帮助渠道客户降低采购风险，提升纸品销售效率。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D6B46A] px-6 py-3 text-sm font-semibold text-[#050505] transition hover:bg-[#B8913E]"
              >
                了解产品线
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/channel-partners#apply"
                className="inline-flex items-center justify-center rounded-md border border-[#D6B46A]/55 bg-[#050505]/28 px-6 py-3 text-sm font-semibold text-[#D6B46A] backdrop-blur transition hover:bg-[#D6B46A]/10"
              >
                申请渠道合作
              </Link>
            </div>
          </div>

          <div className="fade-up grid gap-3 pb-1 md:grid-cols-2 xl:grid-cols-4">
            {heroKeywords.map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-lg border border-[#D6B46A]/28 bg-[#050505]/70 p-4 backdrop-blur">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#D6B46A]/35 text-[#D6B46A]">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-base font-semibold text-[#F3EBDD]">{item.title}</span>
                  <span className="mt-1 block text-xs font-medium tracking-[0.08em] text-[#CFC6B8]">{item.text}</span>
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Company Positioning"
            title="不只是纸张供应，更是纸品渠道解决方案"
            description="仙麗科技围绕特种纸品的采购、加工、品控、包装、渠道销售和长期供货，建立更适合批发客户与渠道商的纸品服务体系。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {positioningCards.map((card, index) => (
              <FeatureCard
                key={card.title}
                {...card}
                accent={index === 1 ? "copper" : index === 2 ? "navy" : "green"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Core Advantages"
            title="为什么渠道客户选择仙麗科技"
            description="围绕专业背景纸标准化能力与特种纸品供应链，仙麗科技为长期合作客户提供更稳定的产品和服务基础。"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <FeatureCard key={advantage.title} {...advantage} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <ImagePlaceholder label="后期替换：设备图片" kind="device" />
            <div>
              <SectionHeader
                eyebrow="Smart Processing"
                title="智能化设备，让背景纸交付更稳定"
                description="仙麗科技持续投入专业背景纸加工设备与流程优化，让规格化生产、卷装加工、包装保护和批量交付更加稳定。"
              />
              <ul className="mt-8 space-y-4">
                {smartList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#2F855A]">
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/smart-rd"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12345d]"
              >
                了解智能研发能力
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Quality Standards"
            title="公开背景纸品控标准，让采购更有依据"
            description="围绕规格、外观、哑光表现、包装保护、抽检与追溯，仙麗科技将背景纸采购中的关键判断转化为可沟通、可检查的标准。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {qualityStandards.map((standard) => (
              <FeatureCard key={standard.title} {...standard} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/quality-standards"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#2F855A] hover:text-[#2F855A]"
            >
              查看品控体系
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Product Lines"
            title="四大纸品产品线"
            description="以专业背景纸为核心，向精品包装纸、特种卡纸、文具封面纸等特种纸品组合延伸。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productLines.map((product, index) => (
              <ProductCard
                key={product.title}
                icon={productIcons[index]}
                title={product.title}
                description={product.summary}
                href={product.href}
                imageSrc={productImages[index]}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeader
                eyebrow="Sustainability"
                title="关注环保与可持续纸品供应"
                description="仙麗科技持续完善纸品环保检测、认证资料与可持续供应管理，为客户提供更清晰、更可靠的采购依据。"
              />
              <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-[#7C4A03]">
                实际认证请以后期提供的证书文件为准。
              </p>
              <Link
                href="/certifications"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#2F855A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
              >
                查看环保认证
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {certifications.slice(0, 4).map((cert) => (
                <article key={cert.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <ImagePlaceholder label={`后期替换：${cert.title} 证书图片`} kind="certificate" className="min-h-56" />
                  <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{cert.subtitle}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="Channel Partners"
                title="面向全国招募纸品渠道合作伙伴"
                description="我们为经销商、批发商、摄影器材渠道、文具渠道、电商卖家提供稳定产品、标准资料、样品支持与长期供货服务。"
              />
              <Link
                href="/channel-partners#apply"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12345d]"
              >
                申请成为渠道合作伙伴
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {partnerTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold text-[#0B1F3A] shadow-sm">
                  <Users className="size-4 text-[#2F855A]" aria-hidden="true" />
                  {type}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Resources"
            title="获取仙麗科技产品资料"
            description="资料中心会集中维护公司介绍、产品目录、背景纸规格表、色卡、渠道政策与环保认证资料，便于展会和渠道客户快速获取。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <DownloadCard key={resource.title} {...resource} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-md bg-[#2F855A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
            >
              进入资料中心
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: Factory, title: "智能化加工", text: "稳定批量交付" },
              { icon: Truck, title: "供应链整合", text: "多品类组合销售" },
              { icon: Leaf, title: "环保资料", text: "认证文件后续完善" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <item.icon className="size-5 text-[#2F855A]" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="想了解仙麗纸品合作方案？"
        description="无论您是渠道商、批发商、品牌客户还是展会采购客户，都可以联系我们获取产品资料、样品和合作政策。"
        primaryLabel="立即联系"
        primaryHref="/contact"
        secondaryLabel="申请渠道合作"
        secondaryHref="/channel-partners#apply"
      />
    </>
  );
}
