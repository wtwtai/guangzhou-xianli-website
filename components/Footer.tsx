import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#C9A24A]/20 bg-[#0B0A08]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md border border-[#C9A24A]/30 bg-[#12100C] text-base font-semibold text-[#D8BE75]">
              仙
            </span>
            <span className="text-lg font-semibold text-[#D8BE75]">仙麗科技</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#CFC6B8]">
            专注摄影背景纸标准化、多品类纸品批发与全国渠道合作的专业纸业供应链服务商。
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#D8BE75]">四大产品线</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#CFC6B8]">
            {siteConfig.productLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#D8BE75]">快速导航</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#CFC6B8]">
            {navigationItems.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#F0D98C]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#D8BE75]">联系方式</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#CFC6B8]">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 text-[#D8BE75]" aria-hidden="true" />
              电话：{siteConfig.contact.phone}
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 text-[#D8BE75]" aria-hidden="true" />
              微信：{siteConfig.contact.wechat}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 text-[#D8BE75]" aria-hidden="true" />
              邮箱：{siteConfig.contact.email}
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 text-[#D8BE75]" aria-hidden="true" />
              地址：{siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#C9A24A]/20 px-4 py-5 text-center text-xs text-[#AFA592]">
        © {new Date().getFullYear()} 仙麗科技。保留所有权利。
      </div>
    </footer>
  );
}
