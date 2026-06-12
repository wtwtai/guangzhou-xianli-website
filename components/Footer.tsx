"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  getLocaleFromPathname,
  localizePath,
  localizedNavigation,
  localizedProductLines,
  localizedUi,
} from "@/data/i18n";
import { siteConfig } from "@/data/site";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navigationItems = localizedNavigation[locale];
  const productLines = localizedProductLines[locale];
  const ui = localizedUi[locale];

  return (
    <footer className="border-t border-[#C8A96A]/20 bg-[#101010]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="relative flex size-10 shrink-0 items-center justify-center rounded-md border border-[#C8A96A]/55 bg-[#C8A96A]/10 text-[#C8A96A]"
              aria-hidden="true"
            >
              <span className="luxury-wordmark text-lg font-semibold leading-none">仙</span>
              <span className="absolute bottom-1.5 left-1.5 h-px w-3 bg-[#C8A96A]/70" />
              <span className="absolute right-1.5 top-1.5 h-3 w-px bg-[#C8A96A]/70" />
            </span>
            <span className="luxury-wordmark text-3xl font-semibold leading-none text-[#C8A96A]">
              仙丽科技
            </span>
            <span className="h-5 w-px bg-[#C8A96A]/35" aria-hidden="true" />
            <span className="text-xs tracking-[0.16em] text-[#DAD3C5]">
              {ui.footerTagline}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#DAD3C5]">
            {ui.footerDescription}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">{ui.productLines}</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#DAD3C5]">
            {productLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">{ui.quickNav}</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#DAD3C5]">
            {navigationItems.slice(1, 7).map((item) => (
              <li key={item.href}>
                <Link
                  href={localizePath(item.href, locale)}
                  className="transition hover:text-[#FFF9EE]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C8A96A]">{ui.contact}</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#DAD3C5]">
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              {ui.phoneLabel}: {siteConfig.contact.phone}
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              {ui.wechatLabel}: {siteConfig.contact.wechat}
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              {ui.emailLabel}: {siteConfig.contact.email}
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 text-[#C8A96A]" aria-hidden="true" />
              {ui.addressLabel}: {siteConfig.contact.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#C8A96A]/20 px-4 py-5 text-center text-xs text-[#AFA592]">
        {ui.copyright}
      </div>
    </footer>
  );
}
