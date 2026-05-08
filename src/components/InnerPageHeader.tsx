import Link from "next/link";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

export function InnerPageHeader({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  const crumbs = breadcrumbs?.filter((c) => c.href) ?? [];
  const breadcrumbLd =
    crumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: c.label,
            item: `${site.url.replace(/\/$/, "")}${c.href}`,
          })),
        }
      : null;

  return (
    <div className="border-b border-white/10 bg-[#020617]/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {breadcrumbLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
          />
        ) : null}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-slate-600">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-cyan-400">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-slate-400">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg text-slate-400 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
