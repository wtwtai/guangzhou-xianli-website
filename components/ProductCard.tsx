import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ProductCard({
  icon: Icon,
  title,
  description,
  href,
  imageSrc,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
}) {
  return (
    <article className="subtle-shadow group flex h-full flex-col overflow-hidden rounded-lg border border-[#D6B46A]/22 bg-[#0E0C09] transition duration-200 hover:-translate-y-1 hover:border-[#D6B46A]/55">
      {imageSrc ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-[#D6B46A]/18">
          <Image
            src={imageSrc}
            alt={`${title}产品视觉`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.62),rgba(5,5,5,0.08))]" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex size-12 items-center justify-center rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 text-[#D6B46A]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-[#D6B46A]">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#CFC6B8]">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D6B46A] transition hover:text-[#F3EBDD]"
        >
          查看详情
          <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
