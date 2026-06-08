import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-y border-[#C8A96A]/24 bg-[#101010] py-16 text-[#FFF9EE] sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="luxury-heading text-3xl font-semibold tracking-normal text-[#C8A96A] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#DAD3C5]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#C8A96A] px-5 py-3 text-sm font-semibold text-[#101010] transition hover:bg-[#B8913E]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-md border border-[#C8A96A]/35 px-5 py-3 text-sm font-semibold text-[#C8A96A] transition hover:bg-[#C8A96A]/10"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
