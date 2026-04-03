import Link from "next/link";
import { Logo } from "./Logo";
import { site, locationLines } from "@/lib/site";

const serviceLinks = [
  { href: "/services/web-development", label: "Web development" },
  { href: "/services/app-development", label: "App development" },
  { href: "/services/digital-marketing", label: "Digital marketing" },
];

const companyLinks = [
  { href: "/services", label: "All services" },
  { href: "/industries", label: "Industries" },
  { href: "/tools", label: "Tools & stack" },
  { href: "/why-us", label: "Why us" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020617]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              End-to-end digital solutions: web, mobile apps, and marketing that convert. Serving teams
              that care about craft, performance, and measurable growth.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              {locationLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-cyan-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-cyan-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cyan-400">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-slate-600">Built with Next.js · SEO-ready · Performance-first</p>
        </div>
      </div>
    </footer>
  );
}
