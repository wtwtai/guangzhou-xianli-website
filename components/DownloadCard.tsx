import Link from "next/link";
import { Download, FileText } from "lucide-react";

export function DownloadCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <article className="subtle-shadow flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#2F855A]/30">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-slate-100 text-[#0B1F3A]">
          <FileText className="size-5" aria-hidden="true" />
        </div>
        <span className="rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-[#B7791F]">
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-[#0B1F3A]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{description}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-[#0B1F3A] transition hover:border-[#2F855A] hover:text-[#2F855A]"
      >
        联系获取
        <Download className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
