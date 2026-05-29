import type { ReactNode } from "react";
import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#D6B46A]/20 bg-[#050505] text-[#F3EBDD]">
      <div className="absolute inset-0 paper-grid opacity-50" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(90,23,32,0.38),transparent_58%)]" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-[#D6B46A]/30"
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-up">
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#D6B46A] uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="luxury-heading max-w-4xl text-4xl font-semibold tracking-normal text-[#D6B46A] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#CFC6B8]">
              {description}
            </p>
          </div>
          {children ? <div className="fade-up">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
