"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/tools", label: "Tools" },
  { href: "/why-us", label: "Why us" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="rounded-lg outline-none ring-cyan-400/50 focus-visible:ring-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = navActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/faq"
            className={`text-sm font-medium transition ${
              pathname === "/faq" ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-95"
          >
            Get a quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-slate-200 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/5 bg-[#030712]/95 px-4 py-4 xl:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-slate-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/faq"
              className="py-2 text-slate-200"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
