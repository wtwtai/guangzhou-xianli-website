import Link from "next/link";
import { Download, FileText } from "lucide-react";

export function DownloadCard({
  title,
  description,
  status,
  actionLabel = "联系获取",
  href = "/contact",
}: {
  title: string;
  description: string;
  status: string;
  actionLabel?: string;
  href?: string;
}) {
  return (
    <article className="subtle-shadow flex h-full flex-col rounded-lg border border-[#C8A96A]/24 bg-white/95 p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C8A96A]/55">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#9B7330]">
          <FileText className="size-5" aria-hidden="true" />
        </div>
        <span className="rounded-md border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-2.5 py-1 text-xs font-medium text-[#9B7330]">
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-[#202020]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#64615C]">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[#C8A96A]/35 px-4 py-2.5 text-sm font-semibold text-[#9B7330] transition hover:border-[#C8A96A] hover:text-[#101010]"
      >
        {actionLabel}
        <Download className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
