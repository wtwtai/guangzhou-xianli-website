import { FileText } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DownloadCard } from "@/components/DownloadCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { resources } from "@/data/resources";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/resources");

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="资料中心"
        description="获取仙麗科技彩卡特种纸产品、标准、认证与渠道合作资料。"
      >
        <ImagePlaceholder
          label="产品资料与目录封面视觉"
          kind="document"
          src="/brand-assets/product-card-paper.png"
        />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Downloads"
            title="彩卡特种纸产品、标准、认证与合作资料"
            description="下载按钮先做占位，后期可替换为真实 PDF 链接、文件下载接口或资料申请流程。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <DownloadCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <FileText className="size-6 text-[#2F855A]" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-[#0B1F3A]">资料维护说明</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              后期可将公司介绍、产品目录、背景纸规格表、色卡、渠道合作说明和环保认证资料放入 public 或对象存储，并把下载卡片链接改为真实文件地址。
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="需要产品目录或规格资料？"
        description="请联系我们说明客户类型、销售渠道和目标产品，我们会提供更匹配的资料包。"
        primaryLabel="联系获取资料"
        primaryHref="/contact"
      />
    </>
  );
}
