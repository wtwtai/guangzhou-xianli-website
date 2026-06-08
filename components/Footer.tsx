import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#C8A96A]/20 bg-[#101010]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="luxury-wordmark text-3xl font-semibold leading-none text-[#C8A96A]">仙麗科技</span>
            <span className="h-5 w-px bg-[#C8A96A]/35" aria-hidden="true" />
            <span className="text-xs tracking-[0.16em] text-[#DAD3C5]">SPECIAL PAPER SUPPLY</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#DAD3C5]">
            深耕彩卡特种纸全链，依托自有产能、先进设备与认证体系服务全国渠道客户。
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">四大产品线</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#DAD3C5]">
            {siteConfig.productLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">快速导航</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#DAD3C5]">
            {navigationItems.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#FFF9EE]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">联系方式</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#DAD3C5]">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              电话：{siteConfig.contact.phone}
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              微信：{siteConfig.contact.wechat}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              邮箱：{siteConfig.contact.email}
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              地址：{siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#C8A96A]/20 px-4 py-5 text-center text-xs text-[#AFA592]">
        © {new Date().getFullYear()} 仙麗科技。保留所有权利。
      </div>
    </footer>
  );
}
