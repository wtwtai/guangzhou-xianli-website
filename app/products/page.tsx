import { Camera, FileText, PackageCheck, Palette } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { productLines } from "@/data/products";
import { metadataFor } from "@/data/site";

export const metadata = metadataFor("/products");

const icons = [Camera, PackageCheck, Palette, FileText];
const anchors = ["backdrop-paper", "packaging-paper", "card-paper", "stationery-paper"];
const productImages = [
  "/brand-assets/product-backdrop-paper.png",
  "/brand-assets/product-packaging-paper.png",
  "/brand-assets/product-card-paper.png",
  "/brand-assets/product-stationery-cover.png",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="产品中心"
        description="以专业背景纸为核心，覆盖精品包装纸、特种卡纸、文具封面纸等特种纸品供应。"
      >
        <ImagePlaceholder
          label="四大特种纸产品线组合视觉"
          kind="product"
          src="/brand-assets/xianli-hero-british-luxury.png"
        />
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Product Portfolio"
            title="四大纸品产品线"
            description="面向渠道商、批发商、电商卖家、摄影器材渠道、文具渠道和品牌客户，提供可组合的纸品供应方案。"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productLines.map((product, index) => (
              <ProductCard
                key={product.title}
                icon={icons[index]}
                title={product.title}
                description={product.summary}
                href={`#${anchors[index]}`}
                imageSrc={productImages[index]}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container className="space-y-10">
          {productLines.map((product, index) => {
            const Icon = icons[index];
            return (
              <article
                key={product.title}
                id={anchors[index]}
                className="scroll-mt-24 rounded-lg border border-slate-200 bg-slate-50 p-5 sm:p-6"
              >
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                  <ImagePlaceholder
                    label={`${product.title}产品图片`}
                    kind={index === 1 ? "packaging" : "product"}
                    src={productImages[index]}
                  />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 items-center justify-center rounded-md bg-[#0B1F3A] text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-2xl font-semibold text-[#0B1F3A]">{product.title}</h2>
                    </div>
                    <p className="mt-5 text-base leading-8 text-slate-700">{product.summary}</p>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      {[
                        { title: "产品定位", items: [product.positioning] },
                        { title: "应用场景", items: product.scenarios },
                        { title: "规格特点", items: product.specs },
                        { title: "合作客户类型", items: product.customers },
                      ].map((block) => (
                        <div key={block.title} className="rounded-lg border border-slate-200 bg-white p-5">
                          <h3 className="font-semibold text-[#0B1F3A]">{block.title}</h3>
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                            {block.items.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-[#2F855A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
                      >
                        咨询产品
                      </a>
                      <a
                        href="/resources"
                        className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#2F855A] hover:text-[#2F855A]"
                      >
                        获取目录
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <CTASection
        title="需要更完整的产品目录？"
        description="我们可以根据您的渠道类型和采购方向，提供适合销售的产品组合、规格资料与样品建议。"
        primaryLabel="咨询产品"
        primaryHref="/contact"
        secondaryLabel="进入资料中心"
        secondaryHref="/resources"
      />
    </>
  );
}
