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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex size-10 items-center justify-center rounded-md bg-[#0B1F3A] text-base font-semibold text-white">
              仙
            </span>
            <span>
              <span className="block text-lg font-semibold leading-5 text-[#0B1F3A]">
                仙麗科技
              </span>
              <span className="text-xs font-medium text-slate-500">Xianli Paper Supply</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="主导航">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2.5 py-2 text-sm font-medium transition ${
                  isActive(pathname, item.href)
                    ? "bg-slate-100 text-[#0B1F3A]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <Link
              href="/channel-partners#apply"
              className="rounded-md bg-[#2F855A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#276f4b]"
            >
              申请渠道合作
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "关闭导航" : "打开导航"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-slate-200 text-[#0B1F3A] transition hover:bg-slate-50 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 xl:hidden ${
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
                    ? "bg-slate-100 text-[#0B1F3A]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#0B1F3A]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/channel-partners#apply"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#2F855A] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              申请渠道合作
            </Link>
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white text-xs font-semibold text-[#0B1F3A] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] md:hidden">
        <Link href="/contact" className="flex flex-col items-center gap-1 px-2 py-2.5">
          <Phone className="size-4" aria-hidden="true" />
          电话咨询
        </Link>
        <Link href="/contact" className="flex flex-col items-center gap-1 border-x border-slate-200 px-2 py-2.5">
          <MessageCircle className="size-4" aria-hidden="true" />
          添加微信
        </Link>
        <Link href="/channel-partners#apply" className="flex flex-col items-center gap-1 bg-[#2F855A] px-2 py-2.5 text-white">
          <Menu className="size-4" aria-hidden="true" />
          申请合作
        </Link>
      </div>
    </>
  );
}
