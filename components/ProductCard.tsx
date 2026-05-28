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
    <article className="subtle-shadow group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#2F855A]/30">
      <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-[#0B1F3A] text-white">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-[#0B1F3A]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2F855A] transition hover:text-[#0B1F3A]"
      >
        查看详情
        <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
