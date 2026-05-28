import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-[#0B1F3A] text-base font-semibold text-white">
              仙
            </span>
            <span className="text-lg font-semibold text-[#0B1F3A]">仙麗科技</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
            专注摄影背景纸标准化、多品类纸品批发与全国渠道合作的专业纸业供应链服务商。
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#0B1F3A]">四大产品线</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {siteConfig.productLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#0B1F3A]">快速导航</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navigationItems.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#2F855A]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#0B1F3A]">联系方式</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 text-[#2F855A]" aria-hidden="true" />
              电话：{siteConfig.contact.phone}
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 text-[#2F855A]" aria-hidden="true" />
              微信：{siteConfig.contact.wechat}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 text-[#2F855A]" aria-hidden="true" />
              邮箱：{siteConfig.contact.email}
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 text-[#2F855A]" aria-hidden="true" />
              地址：{siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} 仙麗科技。保留所有权利。
      </div>
    </footer>
  );
}
