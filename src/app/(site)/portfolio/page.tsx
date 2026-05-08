import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { StarRating } from "@/components/StarRating";
import { CtaBand } from "@/components/CtaBand";
import { portfolioProjects } from "@/content/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work and client feedback from K&K Digital Solutions — logistics, paints, hospitality, SaaS-style tools, and consumer brands we have shipped on the web.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | K&K Digital",
    description:
      "Selected work and client feedback — websites and product builds shipped by K&K Digital Solutions.",
    url: "/portfolio",
    type: "website",
  },
  twitter: {
    title: "Portfolio | K&K Digital",
    description:
      "Selected work and client feedback — websites and product builds shipped by K&K Digital Solutions.",
  },
};

export default function PortfolioPage() {
  const base = site.url.replace(/\/$/, "");
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "K&K Digital Solutions — Portfolio",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: portfolioProjects.length,
    itemListElement: portfolioProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: p.websiteUrl ?? `${base}/portfolio#${p.slug}`,
      name: p.projectName,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <InnerPageHeader
        title="Portfolio"
        subtitle="A few live projects we are proud to stand behind — with honest words from the people who hired us. Each engagement combined strategy, build quality, and clear communication."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-90"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 h-[420px] w-[min(100%,880px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/12 via-violet-500/8 to-transparent blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="mb-12 max-w-2xl lg:mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400/85">
                Case studies
              </p>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Work that ships — and stories behind it
              </h2>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Every card pairs the build with a real client voice. Links open the live property when it is
                public.
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-8 md:gap-10">
            {portfolioProjects.map((p, i) => {
              const hue = i % 2 === 0 ? "cyan" : "violet";
              const barClass =
                hue === "cyan"
                  ? "from-cyan-400/90 via-cyan-300/40 to-transparent"
                  : "from-violet-400/90 via-violet-300/40 to-transparent";
              const glowClass =
                hue === "cyan"
                  ? "shadow-cyan-500/[0.07] group-hover:shadow-cyan-500/15"
                  : "shadow-violet-500/[0.07] group-hover:shadow-violet-500/15";

              return (
                <li key={p.slug}>
                  <article
                    className={`group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent p-6 shadow-xl shadow-black/25 backdrop-blur-sm transition duration-300 hover:border-white/[0.14] sm:p-8 md:p-10 ${glowClass}`}
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${barClass} opacity-95`}
                      aria-hidden
                    />
                    <div className="absolute -right-16 -top-20 size-56 rounded-full bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl transition duration-500 group-hover:from-white/[0.09]" aria-hidden />

                    <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className="font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500"
                            aria-hidden
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="hidden h-px w-8 bg-gradient-to-r from-white/25 to-transparent sm:block" aria-hidden />
                          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                            {p.projectName}
                          </h2>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                          <p className="text-sm text-slate-500">
                            Client · <span className="text-slate-300">{p.clientName}</span>
                          </p>
                          {p.websiteUrl && p.displayDomain ? (
                            <a
                              href={p.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-500/15"
                            >
                              {p.displayDomain}
                              <span aria-hidden className="text-[10px] opacity-80">
                                ↗
                              </span>
                            </a>
                          ) : (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-500">
                              Inquiry-led / offline delivery
                            </span>
                          )}
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.focus.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-medium text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 md:pt-1">
                        <StarRating value={p.rating} />
                      </div>
                    </div>

                    <div className="relative mt-8 overflow-hidden rounded-2xl bg-black/35 p-6 ring-1 ring-white/[0.06] sm:p-8">
                      <span
                        className="pointer-events-none absolute -left-1 -top-2 font-display text-7xl font-bold leading-none text-white/[0.06] sm:text-8xl"
                        aria-hidden
                      >
                        &ldquo;
                      </span>
                      <p className="relative text-[0.95rem] leading-relaxed text-slate-300 sm:text-base">
                        {p.review}
                      </p>
                      <p className="relative mt-5 text-sm font-medium text-slate-500">— {p.clientName}</p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-slate-500 leading-relaxed">
            Want your product or brand on this list?{" "}
            <Link href="/contact" className="font-medium text-cyan-400 hover:underline">
              Tell us about your project
            </Link>{" "}
            — we will reply with scope, timeline, and a straight answer on fit.
          </p>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
