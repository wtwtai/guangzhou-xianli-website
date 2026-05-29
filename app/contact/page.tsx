import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { metadataFor, siteConfig } from "@/data/site";

export const metadata = metadataFor("/contact");

const contactCards = [
  { icon: Phone, label: "电话", value: siteConfig.contact.phone },
  { icon: MessageCircle, label: "微信", value: siteConfig.contact.wechat },
  { icon: Mail, label: "邮箱", value: siteConfig.contact.email },
  { icon: MapPin, label: "地址", value: siteConfig.contact.address },
  { icon: Clock, label: "营业时间", value: siteConfig.contact.hours },
];

const consultationTypes = [
  "获取产品目录",
  "申请样品",
  "批发报价",
  "渠道合作",
  "OEM/ODM 定制",
  "认证资料索取",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="联系我们"
        description="欢迎渠道商、批发商、品牌客户与展会采购客户联系仙麗科技。"
      >
        <ImagePlaceholder
          label="彩卡特种纸供应链洽谈视觉"
          kind="expo"
          src="/brand-assets/xianli-hero-british-luxury.png"
        />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {contactCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-slate-200 bg-white p-5 subtle-shadow">
                <card.icon className="size-5 text-[#2F855A]" aria-hidden="true" />
                <h2 className="mt-4 text-sm font-semibold text-[#0B1F3A]">{card.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact-form" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Inquiry"
                title="联系表单"
                description="请留下您的产品需求、渠道类型或资料申请方向，我们会尽快与您联系。"
              />
              <div className="mt-8">
                <SectionHeader eyebrow="Common Topics" title="常见咨询类型" />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {consultationTypes.map((type) => (
                    <div key={type} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-[#0B1F3A]">
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Location"
            title="地图占位"
            description="后期可接入企业地图、展厅位置、工厂地址或导航二维码。"
            align="center"
          />
          <div className="mt-12">
            <ImagePlaceholder label="后期替换：地图或导航二维码" kind="document" className="min-h-[360px]" />
          </div>
        </Container>
      </section>

      <CTASection
        title="欢迎获取产品、样品与合作政策"
        description="告诉我们您的采购目标和渠道类型，仙麗科技将提供更匹配的纸品供应方案。"
        primaryLabel="申请渠道合作"
        primaryHref="/channel-partners#apply"
        secondaryLabel="进入资料中心"
        secondaryHref="/resources"
      />
    </>
  );
}
