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
    <section className="border-y border-[#D6B46A]/20 bg-[#050505] py-16 text-[#F3EBDD] sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="luxury-heading text-3xl font-semibold tracking-normal text-[#D6B46A] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#CFC6B8]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D6B46A] px-5 py-3 text-sm font-semibold text-[#050505] transition hover:bg-[#B8913E]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-md border border-[#D6B46A]/35 px-5 py-3 text-sm font-semibold text-[#D6B46A] transition hover:bg-[#D6B46A]/10"
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
