import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ProductCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className="subtle-shadow group flex h-full flex-col rounded-lg border border-[#C9A24A]/20 bg-[#12100C] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#D8BE75]/50">
      <div className="mb-5 flex size-12 items-center justify-center rounded-md border border-[#C9A24A]/25 bg-[#C9A24A]/10 text-[#D8BE75]">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-[#D8BE75]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#CFC6B8]">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D8BE75] transition hover:text-[#F0D98C]"
      >
        查看详情
        <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
