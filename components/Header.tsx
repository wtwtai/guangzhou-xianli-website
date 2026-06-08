"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import {
  getLocaleFromPathname,
  localeLabels,
  locales,
  localizePath,
  localizedNavigation,
  localizedUi,
  stripLocaleFromPathname,
  type Locale,
} from "@/data/i18n";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

function LanguageLinks({
  locale,
  currentPath,
  compact = false,
}: {
  locale: Locale;
  currentPath: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center rounded-md border border-[#C8A96A]/25 bg-[#C8A96A]/5 p-1 ${
        compact ? "justify-center" : ""
      }`}
      aria-label="Language switcher"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={localizePath(currentPath, item)}
          className={`rounded px-2.5 py-1.5 text-xs font-semibold transition ${
            item === locale
              ? "bg-[#C8A96A] text-[#101010]"
              : "text-[#DAD3C5] hover:bg-[#C8A96A]/10 hover:text-[#FFF9EE]"
          }`}
          aria-current={item === locale ? "true" : undefined}
        >
          {localeLabels[item].short}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const locale = getLocaleFromPathname(pathname);
  const currentPath = stripLocaleFromPathname(pathname);
  const navigationItems = localizedNavigation[locale];
  const ui = localizedUi[locale];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#C8A96A]/18 bg-[#101010]/94 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href={localizePath("/", locale)} className="flex shrink-0 items-center gap-3 whitespace-nowrap" onClick={() => setOpen(false)}>
            <span className="luxury-wordmark whitespace-nowrap text-2xl font-semibold leading-none text-[#C8A96A] sm:text-3xl">
              仙麗科技
            </span>
            <span className="hidden h-5 w-px bg-[#C8A96A]/42 2xl:block" aria-hidden="true" />
            <span className="hidden whitespace-nowrap text-[10px] font-medium tracking-[0.08em] text-[#DAD3C5] 2xl:block">
              彩卡特种纸供应链专业服务商
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 2xl:flex" aria-label="主导航">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={localizePath(item.href, locale)}
                className={`relative whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium leading-none transition ${
                  isActive(currentPath, item.href)
                    ? "text-[#C8A96A] after:absolute after:inset-x-2 after:-bottom-1 after:h-px after:bg-[#C8A96A]"
                    : "text-[#DAD3C5] hover:text-[#FFF9EE]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 2xl:flex">
            <LanguageLinks locale={locale} currentPath={currentPath} />
            <Link
              href={localizePath("/channel-partners", locale)}
              className="whitespace-nowrap rounded-md border border-[#C8A96A]/75 px-3.5 py-2.5 text-[13px] font-semibold text-[#C8A96A] transition hover:bg-[#C8A96A] hover:text-[#101010]"
            >
              {ui.apply}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-[#C8A96A]/25 text-[#C8A96A] transition hover:bg-[#C8A96A]/10 2xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-[#C8A96A]/20 bg-[#101010] transition-all duration-200 2xl:hidden ${
            open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="移动导航">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={localizePath(item.href, locale)}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  isActive(currentPath, item.href)
                    ? "bg-[#C8A96A]/10 text-[#C8A96A]"
                    : "text-[#DAD3C5] hover:bg-[#C8A96A]/10 hover:text-[#FFF9EE]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <LanguageLinks locale={locale} currentPath={currentPath} compact />
            <Link
              href={localizePath("/channel-partners", locale)}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#C8A96A] px-4 py-3 text-center text-sm font-semibold text-[#101010]"
            >
              {ui.apply}
            </Link>
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-[#C8A96A]/20 bg-[#101010] text-xs font-semibold text-[#C8A96A] shadow-[0_-8px_24px_rgba(0,0,0,0.22)] md:hidden">
        <Link href={localizePath("/contact", locale)} className="flex flex-col items-center gap-1 px-2 py-2.5">
          <Phone className="size-4" aria-hidden="true" />
          {ui.phone}
        </Link>
        <Link href={localizePath("/contact", locale)} className="flex flex-col items-center gap-1 border-x border-[#C8A96A]/20 px-2 py-2.5">
          <MessageCircle className="size-4" aria-hidden="true" />
          {ui.wechat}
        </Link>
        <Link href={localizePath("/channel-partners", locale)} className="flex flex-col items-center gap-1 bg-[#C8A96A] px-2 py-2.5 text-[#101010]">
          <Menu className="size-4" aria-hidden="true" />
          {ui.cooperation}
        </Link>
      </div>
    </>
  );
}
