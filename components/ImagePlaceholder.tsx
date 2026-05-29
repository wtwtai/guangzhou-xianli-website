import Image from "next/image";
import {
  Award,
  Camera,
  Factory,
  FileText,
  Film,
  PackageOpen,
  ScrollText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  product: Camera,
  device: Factory,
  expo: Film,
  certificate: Award,
  document: FileText,
  packaging: PackageOpen,
  standard: ScrollText,
};

export function ImagePlaceholder({
  label,
  kind = "product",
  className = "",
  src,
  priority = false,
}: {
  label: string;
  kind?: "product" | "device" | "expo" | "certificate" | "document" | "packaging" | "standard";
  className?: string;
  src?: string;
  priority?: boolean;
}) {
  const Icon = iconMap[kind];

  if (src) {
    return (
      <figure
        className={`subtle-shadow relative isolate overflow-hidden rounded-lg border border-[#D6B46A]/22 bg-[#050505] ${className}`}
      >
        <div className="relative min-h-64">
          <Image
            src={src}
            alt={label}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.52))]" />
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 border-t border-[#D6B46A]/18 bg-[#050505]/72 px-5 py-4 text-sm font-semibold text-[#D6B46A] backdrop-blur">
          {label}
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate overflow-hidden rounded-lg border border-[#D6B46A]/25 bg-[#050505] p-6 text-[#F3EBDD] subtle-shadow ${className}`}
    >
      <div className="absolute inset-0 paper-lines opacity-50" aria-hidden="true" />
      <div className="relative flex min-h-64 flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 text-[#D6B46A]">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-[#D6B46A]/35" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#D6B46A] uppercase">
            后期替换
          </span>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-md border border-[#D6B46A]/20 bg-[#D6B46A]/10" />
          <div className="h-20 rounded-md border border-[#D6B46A]/20 bg-[#D6B46A]/10" />
          <div className="h-20 rounded-md border border-[#D6B46A]/20 bg-[#D6B46A]/10" />
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-[#D6B46A]">{label}</p>
          <p className="mt-2 text-xs leading-6 text-[#CFC6B8]">
            当前为高质量视觉占位，后期可替换为真实图片、视频封面或证书扫描件。
          </p>
        </div>
      </div>
    </div>
  );
}
