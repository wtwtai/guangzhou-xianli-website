import Link from "next/link";
import { ArrowRight, Camera, PackageCheck, Palette, Ruler, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { backdropSpecs } from "@/data/products";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/backdrop-paper");

const scenarios = [
  "人像摄影",
  "电商产品图",
  "食品摄影",
  "儿童摄影",
  "宠物摄影",
  "视频直播",
  "学校与培训机构",
  "商业内容创作",
];

const features = [
  { icon: Sparkles, title: "哑光低反光", description: "适应摄影灯光环境，帮助减少明显反光。" },
  { icon: Camera, title: "顺滑背景弧线", description: "卷装展开后适合形成自然、连续的背景弧面。" },
  { icon: Palette, title: "多颜色可选", description: "覆盖白色、黑色、灰色及彩色系列，便于渠道组合销售。" },
  { icon: Ruler, title: "多尺寸可选", description: "常规宽度与长度可选，也支持按渠道需求定制。" },
  { icon: Truck, title: "卷装运输", description: "纸芯卷装与外箱保护，兼顾仓储、运输与陈列。" },
  { icon: PackageCheck, title: "适合批发与渠道销售", description: "规格清晰、复购稳定，便于批量采购和库存管理。" },
  { icon: ShieldCheck, title: "支持规格定制", description: "围绕尺寸、包装、品牌与渠道组合进行定制支持。" },
  { icon: PackageCheck, title: "包装保护稳定", description: "重视端面、纸芯、防潮、防压和运输安全。" },
];

const channelPoints = [
  "使用场景清晰，客户容易理解",
  "摄影、电商、内容创作市场长期存在需求",
  "规格标准化，方便批量采购和库存管理",
  "可组合销售摄影器材、灯具、支架等产品",
  "适合线上线下同时销售",
];

export default function BackdropPaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Backdrop Paper"
        title="专业摄影背景纸解决方案"
        description="为摄影棚、电商拍摄、内容创作者与渠道客户提供稳定、标准化、可批量供应的背景纸产品。"
      >
        <ImagePlaceholder label="后期替换：背景纸产品图片" kind="product" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Use Cases" title="应用场景" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((scenario) => (
              <div key={scenario} className="rounded-lg border border-slate-200 bg-white p-5 text-sm font-semibold text-[#0B1F3A] shadow-sm">
                <Camera className="mb-4 size-5 text-[#2F855A]" aria-hidden="true" />
                {scenario}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Features" title="产品特点" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader
              eyebrow="Specifications"
              title="背景纸规格表"
              description="以下为常用规格展示，实际规格、颜色与包装可根据渠道客户需求进一步确认。"
            />
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white subtle-shadow">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {backdropSpecs.map((spec) => (
                    <tr key={spec.label} className="border-b border-slate-200 last:border-b-0">
                      <th className="w-36 bg-slate-50 px-5 py-4 font-semibold text-[#0B1F3A]">
                        {spec.label}
                      </th>
                      <td className="px-5 py-4 text-slate-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="Channel Value"
                title="为什么背景纸适合渠道销售？"
                description="背景纸拥有明确使用场景、标准规格与可组合销售特点，适合摄影器材、内容创作、电商拍摄等渠道长期经营。"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2F855A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
                >
                  申请背景纸样品
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#2F855A] hover:text-[#2F855A]"
                >
                  获取批发报价
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {channelPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-[#2F855A]" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="需要背景纸样品或批发报价？"
        description="告诉我们您的渠道类型、销售区域和目标规格，仙麗科技会提供更适合的背景纸合作建议。"
        primaryLabel="申请背景纸样品"
        primaryHref="/contact"
        secondaryLabel="获取批发报价"
        secondaryHref="/contact"
      />
    </>
  );
}
