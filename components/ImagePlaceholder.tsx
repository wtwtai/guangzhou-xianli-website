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
}: {
  label: string;
  kind?: "product" | "device" | "expo" | "certificate" | "document" | "packaging" | "standard";
  className?: string;
}) {
  const Icon = iconMap[kind];

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate overflow-hidden rounded-lg border border-[#C9A24A]/25 bg-[#0B0A08] p-6 text-[#F4EFE5] subtle-shadow ${className}`}
    >
      <div className="absolute inset-0 paper-lines opacity-50" aria-hidden="true" />
      <div className="relative flex min-h-64 flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-md border border-[#C9A24A]/25 bg-[#C9A24A]/10 text-[#D8BE75]">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-[#C9A24A]/35" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#D8BE75] uppercase">
            placeholder
          </span>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-md border border-[#C9A24A]/20 bg-[#C9A24A]/10" />
          <div className="h-20 rounded-md border border-[#C9A24A]/20 bg-[#C9A24A]/10" />
          <div className="h-20 rounded-md border border-[#C9A24A]/20 bg-[#C9A24A]/10" />
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-[#D8BE75]">{label}</p>
          <p className="mt-2 text-xs leading-6 text-[#CFC6B8]">
            当前为高质量视觉占位，后期可替换为真实图片、视频封面或证书扫描件。
          </p>
        </div>
      </div>
    </div>
  );
}
