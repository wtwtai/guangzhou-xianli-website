import {
  Boxes,
  ClipboardCheck,
  Cpu,
  Factory,
  Handshake,
  Network,
  PackageCheck,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/about");

const customers = [
  "全国纸品经销商",
  "摄影器材渠道",
  "文具用品批发商",
  "包装材料客户",
  "电商卖家",
  "品牌定制客户",
  "展会采购客户",
  "海外采购客户",
];

const capabilities = [
  { icon: Target, title: "产品开发", description: "围绕摄影、包装、文具与渠道销售场景规划纸品组合。" },
  { icon: Network, title: "供应链整合", description: "连接优质纸品资源与长期合作客户，提升供货稳定性。" },
  { icon: Cpu, title: "智能设备加工", description: "持续优化背景纸加工、卷装、包装与交付流程。" },
  { icon: ClipboardCheck, title: "标准化品控", description: "围绕规格、外观、包装、抽检和追溯建立管理标准。" },
  { icon: PackageCheck, title: "OEM/ODM 定制", description: "支持规格、包装、品牌与渠道组合定制。" },
  { icon: Handshake, title: "渠道服务", description: "提供资料、样品、培训、售后与长期供货支持。" },
];

const values = [
  { title: "标准", text: "让产品规格、品控节点与合作资料更清晰。" },
  { title: "稳定", text: "重视批量一致性、供货连续性与长期合作体验。" },
  { title: "诚信", text: "以可验证资料、可追溯记录和稳妥承诺服务客户。" },
  { title: "共赢", text: "与渠道伙伴共同拓展纸品市场与区域销售能力。" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Xianli"
        title="关于仙麗科技"
        description="以特种纸业供应链能力，服务全国渠道客户与特种纸品市场。"
      >
        <ImagePlaceholder
          label="特种纸业供应链与产品样册视觉"
          kind="expo"
          src="/brand-assets/xianli-hero-british-luxury.png"
        />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow="Company Profile"
              title="公司介绍"
              description="仙麗科技是一家专注特种纸业供应链服务的企业，以专业背景纸为核心优势品类，连接优质纸品资源、智能化加工能力与全国渠道市场。"
            />
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-base leading-8 text-slate-700 subtle-shadow">
              我们围绕专业背景纸、精品包装纸、特种卡纸、文具封面纸等产品线，为渠道商、批发商、电商卖家、摄影器材渠道与品牌客户提供稳定、标准化、可持续合作的纸品解决方案。
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Customers" title="我们服务谁" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customers.map((customer) => (
              <div key={customer} className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-[#0B1F3A]">
                <Users className="mb-4 size-5 text-[#2F855A]" aria-hidden="true" />
                {customer}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Capabilities" title="我们的能力" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <FeatureCard key={capability.title} {...capability} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Values" title="公司价值观" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center">
                <ShieldCheck className="mx-auto size-6 text-[#2F855A]" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-[#0B1F3A]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { icon: Factory, title: "加工流程", text: "优化卷装、裁切与包装环节" },
              { icon: Boxes, title: "产品组合", text: "围绕四大纸品线组织供货" },
              { icon: ClipboardCheck, title: "品控资料", text: "建立可沟通的采购依据" },
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
        title="与仙麗建立长期纸品合作"
        description="欢迎渠道商、批发商、品牌客户与展会采购客户联系仙麗科技，获取产品资料、样品和合作政策。"
        primaryLabel="联系我们"
        primaryHref="/contact"
      />
    </>
  );
}
