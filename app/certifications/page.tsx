import { Award, FileText, Leaf, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DownloadCard } from "@/components/DownloadCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/certifications";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/certifications");

const downloads = [
  { title: "环保认证资料", description: "用于提供认证、检测和材料合规相关文件。", status: "联系获取" },
  { title: "检测报告", description: "用于提供第三方检测报告与材料安全说明。", status: "以后期文件为准" },
  { title: "材料说明", description: "用于说明材料来源、使用范围与客户采购依据。", status: "资料整理中" },
  { title: "包装说明", description: "用于说明包装材料、运输保护与仓储建议。", status: "资料整理中" },
];

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="环保认证与负责任纸品供应"
        description="持续完善彩卡特种纸环保检测与认证体系，为客户提供更清晰、更可靠的采购依据。"
      >
        <ImagePlaceholder label="后期替换：证书图片" kind="certificate" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Sustainability"
              title="环保理念"
              description="仙丽科技持续完善纸品环保检测，专注彩卡特种纸供应链，以专业、产能、设备、认证为核心，服务全球客户。"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Leaf, title: "纸品来源", text: "关注纸品来源管理与供应链责任。" },
                { icon: ShieldCheck, title: "材料安全", text: "持续完善材料检测和合规说明。" },
                { icon: Award, title: "认证资料", text: "以后期真实证书文件为准集中展示。" },
                { icon: FileText, title: "采购依据", text: "为客户提供更清晰的资料支持。" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 subtle-shadow">
                  <item.icon className="size-5 text-[#2F855A]" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-[#0B1F3A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Certificates" title="认证展示" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {certifications.map((cert) => (
              <article key={cert.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <ImagePlaceholder label={`后期替换：${cert.title} 证书图片`} kind="certificate" className="min-h-52" />
                <h3 className="mt-4 text-lg font-semibold text-[#0B1F3A]">{cert.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#2F855A]">{cert.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{cert.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-[#7C4A03]">
            以上为展示位置，实际内容以后期提供证书为准。
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Downloads" title="下载区域" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {downloads.map((item) => (
              <DownloadCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="需要索取认证资料？"
        description="请留下公司名称、产品需求和用途，我们会根据后期可公开资料提供相应文件。"
        primaryLabel="索取认证资料"
        primaryHref="/contact"
      />
    </>
  );
}
