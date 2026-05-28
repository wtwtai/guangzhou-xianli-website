import { Cpu, PackageCheck, Ruler, Timer, Wrench } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/smart-rd");

const capabilities = [
  { ability: "规格化加工", value: "尺寸更稳定" },
  { ability: "自动化/半自动化卷装", value: "外观更统一" },
  { ability: "批量处理", value: "交期更稳定" },
  { ability: "标准化包装", value: "降低运输损耗" },
  { ability: "定制响应", value: "支持不同渠道需求" },
];

const valueCards = [
  { icon: Ruler, title: "规格一致性", description: "通过流程控制与加工设备优化，提升批量订单规格稳定性。" },
  { icon: Timer, title: "交付效率", description: "支持渠道订单与定制订单的快速响应，减少协同等待时间。" },
  { icon: PackageCheck, title: "包装稳定性", description: "围绕卷装、端面保护、外箱强度和运输安全持续优化。" },
  { icon: Wrench, title: "研发改造能力", description: "自主研发或深度改造专业背景纸智能化加工设备。" },
];

export default function SmartRdPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart R&D"
        title="智能设备与研发能力"
        description="通过设备研发与流程优化，让背景纸加工、包装和批量交付更加稳定。"
      >
        <ImagePlaceholder label="后期替换：设备运转视频" kind="device" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Processing Value"
              title="智能化加工的价值"
              description="专业背景纸不仅需要稳定纸张资源，也需要稳定的加工与包装能力。仙麗科技持续优化背景纸加工设备与流程，提升产品规格一致性、交付效率和定制响应速度。"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {valueCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Capabilities" title="能力展示" align="center" />
          <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-white subtle-shadow">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#0B1F3A] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">设备/流程能力</th>
                  <th className="px-5 py-4 font-semibold">对客户的价值</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((item) => (
                  <tr key={item.ability} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-[#0B1F3A]">{item.ability}</td>
                    <td className="px-5 py-4 text-slate-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Media Placeholders"
            title="设备图片/视频占位"
            description="后期可替换为设备运转视频、加工细节图片和包装流程图片。"
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <ImagePlaceholder label="后期替换：设备运转视频" kind="device" />
            <ImagePlaceholder label="后期替换：加工细节图片" kind="device" />
            <ImagePlaceholder label="后期替换：包装流程图片" kind="packaging" />
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-14">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <Cpu className="size-6 text-[#2F855A]" aria-hidden="true" />
            <p className="mt-4 text-sm leading-7 text-slate-600">
              如需展示更强的设备首创性或行业比较性表达，建议在后期提供可公开证明材料后再启用相关内容模块。
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="需要了解定制加工能力？"
        description="欢迎提供规格、包装、渠道销售方式和预估订单量，我们将协助评估加工与供货方案。"
        primaryLabel="了解定制加工能力"
        primaryHref="/contact"
      />
    </>
  );
}
