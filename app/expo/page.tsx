import Link from "next/link";
import { ArrowRight, Boxes, Camera, ClipboardCheck, Cpu, Handshake, PackageCheck, Palette } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactField, ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/expo");

const expoFields: ContactField[] = [
  { name: "name", label: "姓名", required: true, placeholder: "请输入姓名" },
  { name: "company", label: "公司", required: true, placeholder: "请输入公司名称" },
  { name: "contact", label: "手机/微信", required: true, placeholder: "请输入手机号或微信号" },
  {
    name: "product",
    label: "感兴趣产品",
    type: "select",
    required: true,
    options: ["摄影背景纸", "彩卡卡纸", "包装纸", "文具用品纸", "渠道合作"],
  },
  { name: "message", label: "留言", type: "textarea", placeholder: "请填写展会沟通需求", fullWidth: true },
];

export default function ExpoPage() {
  return (
    <>
      <PageHero
        eyebrow="Expo Quick Page"
        title="欢迎了解仙麗科技纸品解决方案"
        description="专注专业背景纸与多品类纸品批发，为渠道客户提供稳定、标准化、可持续合作的纸品供应。"
      >
        <ImagePlaceholder label="后期替换：展会图片" kind="expo" />
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-center subtle-shadow">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-700">
              仙麗科技是一家专业纸业供应链服务商，以摄影背景纸为核心优势品类，服务全国渠道商、批发商、电商卖家和品牌客户。
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Product Lines" title="四大产品线" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              { icon: Camera, title: "摄影背景纸" },
              { icon: Palette, title: "彩卡卡纸" },
              { icon: PackageCheck, title: "包装纸" },
              { icon: Boxes, title: "文具用品纸" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center">
                <item.icon className="mx-auto size-6 text-[#2F855A]" aria-hidden="true" />
                <h2 className="mt-4 font-semibold text-[#0B1F3A]">{item.title}</h2>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Advantages" title="三个核心优势" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: ClipboardCheck, title: "标准化品控", description: "规格、外观、包装、抽检与追溯标准清晰。" },
              { icon: Cpu, title: "智能化加工", description: "围绕背景纸加工、卷装、包装与交付持续优化。" },
              { icon: Handshake, title: "渠道合作支持", description: "提供产品、资料、样品与长期供货服务。" },
            ].map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Quick Access" title="展会客户快速入口" align="center" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "获取产品目录", href: "/resources" },
              { label: "申请样品", href: "/contact" },
              { label: "洽谈渠道合作", href: "/channel-partners#apply" },
              { label: "添加联系方式", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#2F855A] hover:text-[#2F855A]"
              >
                {item.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Contact"
              title="留下展会沟通信息"
              description="我们会在展会后为您补充产品资料、样品说明、报价方向和渠道合作建议。"
            />
            <ContactForm
              fields={expoFields}
              submitLabel="提交展会信息"
              successMessage="已收到您的信息，我们会尽快与您联系。"
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="展会后欢迎预约深入洽谈"
        description="我们可以根据您的渠道类型和产品方向，安排更完整的产品资料、样品与合作政策沟通。"
        primaryLabel="预约洽谈"
        primaryHref="/contact"
      />
    </>
  );
}
