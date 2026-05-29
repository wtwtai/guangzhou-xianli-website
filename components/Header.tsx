"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#D6B46A]/18 bg-[#050505]/94 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap" onClick={() => setOpen(false)}>
            <span className="luxury-wordmark whitespace-nowrap text-2xl font-semibold leading-none text-[#D6B46A] sm:text-3xl">
              仙麗科技
            </span>
            <span className="hidden h-5 w-px bg-[#D6B46A]/42 xl:block" aria-hidden="true" />
            <span className="hidden whitespace-nowrap text-[10px] font-medium tracking-[0.08em] text-[#CFC6B8] xl:block">
              彩卡特种纸供应链专业服务商
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex" aria-label="主导航">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap rounded-md px-2 py-2 text-[13px] font-medium leading-none transition ${
                  isActive(pathname, item.href)
                    ? "text-[#D6B46A] after:absolute after:inset-x-2 after:-bottom-1 after:h-px after:bg-[#D6B46A]"
                    : "text-[#CFC6B8] hover:text-[#F3EBDD]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link
              href="/channel-partners#apply"
              className="whitespace-nowrap rounded-md border border-[#D6B46A]/75 px-3.5 py-2.5 text-[13px] font-semibold text-[#D6B46A] transition hover:bg-[#D6B46A] hover:text-[#050505]"
            >
              申请渠道合作
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-[#D6B46A]/25 text-[#D6B46A] transition hover:bg-[#D6B46A]/10 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-[#D6B46A]/20 bg-[#050505] transition-all duration-200 xl:hidden ${
            open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="移动导航">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                  isActive(pathname, item.href)
                    ? "bg-[#D6B46A]/10 text-[#D6B46A]"
                    : "text-[#CFC6B8] hover:bg-[#D6B46A]/10 hover:text-[#F3EBDD]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/channel-partners#apply"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#D6B46A] px-4 py-3 text-center text-sm font-semibold text-[#050505]"
            >
              申请渠道合作
            </Link>
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-[#D6B46A]/20 bg-[#050505] text-xs font-semibold text-[#D6B46A] shadow-[0_-8px_24px_rgba(0,0,0,0.22)] md:hidden">
        <Link href="/contact" className="flex flex-col items-center gap-1 px-2 py-2.5">
          <Phone className="size-4" aria-hidden="true" />
          电话咨询
        </Link>
        <Link href="/contact" className="flex flex-col items-center gap-1 border-x border-[#D6B46A]/20 px-2 py-2.5">
          <MessageCircle className="size-4" aria-hidden="true" />
          添加微信
        </Link>
        <Link href="/channel-partners#apply" className="flex flex-col items-center gap-1 bg-[#D6B46A] px-2 py-2.5 text-[#050505]">
          <Menu className="size-4" aria-hidden="true" />
          申请合作
        </Link>
      </div>
    </>
  );
}
