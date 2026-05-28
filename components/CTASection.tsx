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
    <section className="bg-[#0B1F3A] py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2F855A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
