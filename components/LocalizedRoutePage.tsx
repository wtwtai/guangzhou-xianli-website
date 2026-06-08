import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Boxes,
  Camera,
  ClipboardCheck,
  Cpu,
  FileText,
  Handshake,
  PackageCheck,
  Palette,
  Ruler,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { DownloadCard } from "@/components/DownloadCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import {
  localizePath,
  localizedPages,
  localizedUi,
  type NonDefaultLocale,
  type RoutePath,
} from "@/data/i18n";

const featureIcons = [
  Boxes,
  Camera,
  ClipboardCheck,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Palette,
  Users,
  Cpu,
  FileText,
  Award,
  Truck,
  Ruler,
];

function iconFor(index: number) {
  return featureIcons[index % featureIcons.length];
}

export function LocalizedRoutePage({
  locale,
  path,
}: {
  locale: NonDefaultLocale;
  path: RoutePath;
}) {
  const page = localizedPages[locale][path];

  if (path === "/") {
    return <LocalizedHomePage locale={locale} path={path} />;
  }

  return (
    <>
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
      >
        <ImagePlaceholder
          label={page.hero.imageLabel}
          kind={page.hero.imageKind ?? "product"}
          src={page.hero.imageSrc}
        />
      </PageHero>

      <LocalizedSections locale={locale} path={path} />

      <CTASection
        title={page.cta.title}
        description={page.cta.description}
        primaryLabel={page.cta.primaryLabel}
        primaryHref={localizePath(page.cta.primaryHref, locale)}
        secondaryLabel={page.cta.secondaryLabel}
        secondaryHref={page.cta.secondaryHref ? localizePath(page.cta.secondaryHref, locale) : undefined}
      />
    </>
  );
}

function LocalizedHomePage({
  locale,
  path,
}: {
  locale: NonDefaultLocale;
  path: RoutePath;
}) {
  const page = localizedPages[locale][path];
  const keywords = page.sections[0]?.type === "features" ? page.sections[0].items.slice(0, 4) : [];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[#C8A96A]/24 bg-[#FBFAF7] text-[#202020]">
        <div className="absolute inset-0 paper-grid opacity-70" aria-hidden="true" />
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.22),transparent_58%)]"
          aria-hidden="true"
        />
        <Container className="relative flex min-h-[calc(100svh-72px)] flex-col justify-end py-10 sm:py-12 lg:py-14">
          <div className="grid flex-1 items-center gap-10 pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:pt-24">
            <div className="fade-up max-w-3xl">
              <p className="mb-5 inline-flex rounded-md border border-[#C8A96A]/35 bg-white/70 px-3 py-1.5 text-sm font-semibold tracking-[0.12em] text-[#9B7330] backdrop-blur">
                {page.hero.eyebrow}
              </p>
              <h1 className="luxury-heading text-5xl font-semibold leading-tight tracking-normal text-[#202020] sm:text-6xl lg:text-7xl">
                {page.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64615C]">
                {page.hero.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localizePath("/products", locale)}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#101010] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2A2A2A]"
                >
                  {locale === "en" ? "Explore Products" : "Ver Productos"}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localizePath("/channel-partners", locale)}
                  className="inline-flex items-center justify-center rounded-md border border-[#C8A96A]/55 bg-white/65 px-6 py-3 text-sm font-semibold text-[#9B7330] backdrop-blur transition hover:bg-[#C8A96A]/10"
                >
                  {localizedUi[locale].apply}
                </Link>
              </div>
            </div>

            <div className="fade-up">
              <figure className="subtle-shadow relative min-h-[360px] overflow-hidden rounded-lg border border-[#C8A96A]/35 bg-[#101010] sm:min-h-[460px] lg:min-h-[560px]">
                <Image
                  src={page.hero.imageSrc ?? "/brand-assets/xianli-hero-british-luxury.png"}
                  alt={page.hero.imageLabel}
                  fill
                  priority
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.62),rgba(5,5,5,0.08))]" aria-hidden="true" />
                <figcaption className="absolute left-6 top-6 rounded-md border border-[#C8A96A]/35 bg-[#101010]/60 px-4 py-3 text-xs font-semibold tracking-[0.18em] text-[#C8A96A] backdrop-blur">
                  STANDARD · SUPPLY · QUALITY
                </figcaption>
                <p className="luxury-heading absolute bottom-6 left-6 max-w-sm text-3xl font-semibold tracking-[0.08em] text-[#FFF9EE] sm:text-4xl">
                  SPECIAL PAPER SOLUTIONS
                </p>
              </figure>
            </div>
          </div>

          <div className="fade-up mt-10 grid gap-3 pb-1 md:grid-cols-2 xl:grid-cols-4">
            {keywords.map((item, index) => {
              const Icon = iconFor(index);
              return (
                <div key={item.title} className="subtle-shadow flex items-center gap-4 rounded-lg border border-[#C8A96A]/24 bg-white/88 p-4 backdrop-blur">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/30 text-[#9B7330]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-[#202020]">{item.title}</span>
                    {item.description ? (
                      <span className="mt-1 block text-xs font-medium tracking-[0.08em] text-[#64615C]">
                        {item.description}
                      </span>
                    ) : null}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <LocalizedSections locale={locale} path={path} />

      <CTASection
        title={page.cta.title}
        description={page.cta.description}
        primaryLabel={page.cta.primaryLabel}
        primaryHref={localizePath(page.cta.primaryHref, locale)}
        secondaryLabel={page.cta.secondaryLabel}
        secondaryHref={page.cta.secondaryHref ? localizePath(page.cta.secondaryHref, locale) : undefined}
      />
    </>
  );
}

function LocalizedSections({
  locale,
  path,
}: {
  locale: NonDefaultLocale;
  path: RoutePath;
}) {
  const page = localizedPages[locale][path];

  return (
    <>
      {page.sections.map((section, sectionIndex) => {
        const isTinted = sectionIndex % 2 === 1;

        return (
          <section
            key={`${section.type}-${section.title}`}
            className={`${isTinted ? "bg-white" : ""} py-20 sm:py-24`}
          >
            <Container>
              {"eyebrow" in section || "description" in section ? (
                <SectionHeader
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.description}
                  align="center"
                />
              ) : null}

              {section.type === "features" ? (
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((item, index) => (
                    <FeatureCard
                      key={item.title}
                      icon={iconFor(index)}
                      title={item.title}
                      description={item.description ?? ""}
                      accent={index % 3 === 1 ? "copper" : index % 3 === 2 ? "navy" : "green"}
                    />
                  ))}
                </div>
              ) : null}

              {section.type === "bullets" ? (
                <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item} className="subtle-shadow flex gap-3 rounded-lg border border-[#C8A96A]/24 bg-white/95 p-5 text-sm leading-7 text-[#64615C]">
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#9B7330]" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}

              {section.type === "table" ? (
                <div className="mt-12 overflow-hidden rounded-lg border border-[#C8A96A]/24 bg-white subtle-shadow">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead className="bg-[#101010] text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">{section.table.columns[0]}</th>
                        <th className="px-5 py-4 font-semibold">{section.table.columns[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={`${row[0]}-${row[1]}`} className="border-b border-[#C8A96A]/18 last:border-b-0">
                          <td className="px-5 py-4 font-semibold text-[#202020]">{row[0]}</td>
                          <td className="px-5 py-4 text-[#64615C]">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.type === "steps" ? (
                <div className="mt-12">
                  <ProcessSteps steps={section.steps} />
                </div>
              ) : null}

              {section.type === "downloads" ? (
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <DownloadCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      status={item.status}
                      actionLabel={localizedUi[locale].contactToGet}
                      href={localizePath("/contact", locale)}
                    />
                  ))}
                </div>
              ) : null}

              {section.type === "form" ? (
                <div className="mx-auto mt-12 max-w-5xl">
                  <ContactForm
                    fields={section.form.fields}
                    submitLabel={section.form.submitLabel}
                    successMessage={section.form.successMessage}
                  />
                </div>
              ) : null}
            </Container>
          </section>
        );
      })}
    </>
  );
}
