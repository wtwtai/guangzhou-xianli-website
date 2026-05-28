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
      className={`relative isolate overflow-hidden rounded-lg border border-white/15 bg-[#0B1F3A] p-6 text-white subtle-shadow ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-emerald-400/10" aria-hidden="true" />
      <div className="absolute inset-0 paper-lines opacity-50" aria-hidden="true" />
      <div className="relative flex min-h-64 flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/20">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-transparent" />
          <span className="text-xs font-semibold tracking-[0.18em] text-emerald-100 uppercase">
            placeholder
          </span>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-md border border-white/15 bg-white/10" />
          <div className="h-20 rounded-md border border-white/15 bg-white/10" />
          <div className="h-20 rounded-md border border-white/15 bg-white/10" />
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-emerald-100">{label}</p>
          <p className="mt-2 text-xs leading-6 text-slate-300">
            当前为高质量视觉占位，后期可替换为真实图片、视频封面或证书扫描件。
          </p>
        </div>
      </div>
    </div>
  );
}
