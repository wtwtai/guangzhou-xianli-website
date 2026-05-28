import { Boxes, FileText, Handshake, PackageCheck, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactField, ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/channel-partners");

const reasons = [
  "产品线清晰",
  "背景纸有细分优势",
  "品控标准公开",
  "供应稳定",
  "支持定制",
  "有资料支持",
  "有样品支持",
  "适合区域批发和长期分销",
];

const partners = [
  "纸品批发商",
  "摄影器材经销商",
  "文具渠道商",
  "包装材料批发商",
  "美术用品渠道",
  "电商卖家",
  "礼品包装渠道",
  "区域代理商",
];

const supportRows = [
  { item: "产品支持", content: "背景纸、卡纸、包装纸、文具纸多品类组合" },
  { item: "资料支持", content: "产品目录、规格表、图片、视频、卖点说明" },
  { item: "样品支持", content: "提供样品包，方便客户展示和测试" },
  { item: "培训支持", content: "产品知识、销售话术、应用场景培训" },
  { item: "定制支持", content: "规格、包装、品牌、渠道组合定制" },
  { item: "售后支持", content: "质量问题反馈、批次追溯、处理机制" },
];

const cooperationSteps = [
  { title: "提交合作申请" },
  { title: "沟通区域与渠道类型" },
  { title: "寄送样品与产品资料" },
  { title: "确认价格体系与合作方式" },
  { title: "首批订单与产品培训" },
  { title: "长期供货与市场支持" },
];

const channelFields: ContactField[] = [
  { name: "company", label: "公司名称", required: true, placeholder: "请输入公司名称" },
  { name: "name", label: "联系人", required: true, placeholder: "请输入联系人" },
  { name: "contact", label: "手机/微信", required: true, placeholder: "请输入手机号或微信号" },
  { name: "region", label: "所在地区", required: true, placeholder: "例如：广东广州" },
  {
    name: "channel",
    label: "现有渠道类型",
    type: "select",
    required: true,
    options: ["纸品批发", "摄影器材", "文具渠道", "包装材料", "电商平台", "区域代理", "其他"],
  },
  {
    name: "product",
    label: "感兴趣产品",
    type: "select",
    required: true,
    options: ["摄影背景纸", "彩卡卡纸", "包装纸", "文具用品纸", "多品类组合"],
  },
  { name: "volume", label: "预计采购量", placeholder: "例如：每月/每季度预估数量" },
  {
    name: "sample",
    label: "是否需要样品",
    type: "select",
    options: ["需要样品", "暂不需要", "希望先了解资料"],
  },
  { name: "message", label: "留言", type: "textarea", placeholder: "请补充合作需求", fullWidth: true },
];

export default function ChannelPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Channel Partners"
        title="成为仙麗纸品渠道合作伙伴"
        description="与仙麗一起，把标准化纸品带给更多摄影、文具、包装与批发市场客户。"
      >
        <ImagePlaceholder label="后期替换：渠道合作与展会洽谈图片" kind="expo" />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Why Xianli" title="为什么选择仙麗" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const icons = [Boxes, PackageCheck, ShieldCheck, Users];
              const Icon = icons[index % icons.length];
              return (
                <FeatureCard
                  key={reason}
                  icon={Icon}
                  title={reason}
                  description="围绕长期渠道合作所需的产品、资料、样品、品控与供货能力提供支持。"
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Partners" title="适合哪些合作伙伴" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-[#0B1F3A]">
                <Handshake className="mb-4 size-5 text-[#2F855A]" aria-hidden="true" />
                {partner}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Support" title="合作支持" align="center" />
          <div className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-white subtle-shadow">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[#0B1F3A] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">支持项目</th>
                  <th className="px-5 py-4 font-semibold">内容</th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map((row) => (
                  <tr key={row.item} className="border-b border-slate-200 last:border-b-0">
                    <td className="px-5 py-4 font-semibold text-[#0B1F3A]">{row.item}</td>
                    <td className="px-5 py-4 text-slate-700">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Process" title="合作流程" align="center" />
          <div className="mt-12">
            <ProcessSteps steps={cooperationSteps} />
          </div>
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Application"
                title="合作申请表单"
                description="请留下您的渠道类型、所在地区、感兴趣产品和样品需求，我们会尽快与您联系。"
              />
              <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5">
                <FileText className="size-5 text-[#2F855A]" aria-hidden="true" />
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  当前表单为前端占位提交，后期可接入 CRM、企业微信、邮件或自建 API。
                </p>
              </div>
            </div>
            <ContactForm
              fields={channelFields}
              submitLabel="提交合作申请"
              successMessage="已收到您的合作申请，我们会尽快与您联系。"
            />
          </div>
        </Container>
      </section>

      <CTASection
        title="准备开展区域渠道合作？"
        description="提交申请后，我们会根据您的渠道资源、目标产品和区域情况，协助确认合作方式。"
        primaryLabel="提交合作申请"
        primaryHref="/channel-partners#apply"
        secondaryLabel="联系咨询"
        secondaryHref="/contact"
      />
    </>
  );
}
