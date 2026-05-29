import { ClipboardCheck, FileText, PackageCheck, Palette, Ruler, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/quality-standards");

const standards = [
  {
    icon: Ruler,
    title: "规格一致性",
    description: "关注宽度、长度、纸芯、卷径、包装尺寸等关键指标。",
  },
  {
    icon: ClipboardCheck,
    title: "表面表现",
    description: "关注污点、折痕、压痕、边缘破损、表面平整度和外观洁净度。",
  },
  {
    icon: Palette,
    title: "颜色管理",
    description: "建立常用颜色体系，关注批次色差和客户使用场景。",
  },
  {
    icon: PackageCheck,
    title: "包装与运输保护",
    description: "重视端面保护、纸芯保护、外箱强度、防潮、防压和仓储摆放。",
  },
  {
    icon: ShieldCheck,
    title: "抽检与追溯",
    description:
      "建立入库检查、加工巡检、包装前检查、出货抽检、批次留样和客诉追溯流程。",
  },
];

const steps = [
  { title: "原纸/半成品入库", description: "记录来源、规格与入库状态。" },
  { title: "加工前检查", description: "确认尺寸、外观与加工要求。" },
  { title: "加工过程巡检", description: "关注尺寸一致性和表面状态。" },
  { title: "包装前检查", description: "确认端面、纸芯和外观完整性。" },
  { title: "出货抽检", description: "按批次抽查规格、包装与标签。" },
  { title: "批次留样", description: "保留关键记录，便于后续复核。" },
  { title: "客诉追溯", description: "结合订单、批次与规格记录处理问题。" },
];

export default function QualityStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Standards"
        title="仙麗彩卡特种纸标准化品控体系"
        description="让彩卡特种纸采购从经验判断，走向清晰、可检查、可追溯的标准化流程。"
      >
        <ImagePlaceholder label="后期替换：标准与品控流程图片" kind="standard" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Why Standards"
              title="为什么要公开标准"
              description="彩卡特种纸看似简单，但在实际应用中会受到颜色、纹理、触感、加工精度、运输压痕、包装保护等因素影响。"
            />
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 subtle-shadow">
              仙麗科技围绕使用场景、用户需求，从原料到成品全流程管控，帮助渠道客户降低采购风险，提高产品销售稳定性。清晰的品控标准也便于客户培训销售团队、处理售后问题和管理长期供货。
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Five Standards" title="五大品控标准" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {standards.map((standard) => (
              <FeatureCard key={standard.title} {...standard} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="品控流程图"
            description="从入库到出货，再到批次留样和客诉追溯，让每个关键节点都有记录和检查依据。"
            align="center"
          />
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6">
            <FileText className="size-6 text-[#2F855A]" aria-hidden="true" />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              后期可在此处补充企业品控标准 PDF、抽检记录模板、规格确认表和客户验收标准。
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="需要获取品控标准资料？"
        description="我们可以提供彩卡特种纸规格、外观、包装、抽检与追溯相关资料，帮助渠道客户建立更清晰的采购依据。"
        primaryLabel="获取品控标准资料"
        primaryHref="/contact"
      />
    </>
  );
}
