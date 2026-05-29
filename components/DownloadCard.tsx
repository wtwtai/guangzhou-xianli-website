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
    <article className="subtle-shadow flex h-full flex-col rounded-lg border border-[#D6B46A]/20 bg-[#0E0C09] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#D6B46A]/50">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 text-[#D6B46A]">
          <FileText className="size-5" aria-hidden="true" />
        </div>
        <span className="rounded-md border border-[#D6B46A]/25 bg-[#D6B46A]/10 px-2.5 py-1 text-xs font-medium text-[#D6B46A]">
          {status}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-[#D6B46A]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#CFC6B8]">{description}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[#D6B46A]/30 px-4 py-2.5 text-sm font-semibold text-[#D6B46A] transition hover:border-[#D6B46A] hover:text-[#F3EBDD]"
      >
        联系获取
        <Download className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
