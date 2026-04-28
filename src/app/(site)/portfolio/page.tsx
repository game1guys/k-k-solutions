import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { StarRating } from "@/components/StarRating";
import { CtaBand } from "@/components/CtaBand";
import { portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work and client feedback from K&K Digital Solutions — logistics, paints, and consumer brands we have shipped on the web.",
};

export default function PortfolioPage() {
  return (
    <>
      <InnerPageHeader
        title="Portfolio"
        subtitle="A few live projects we are proud to stand behind — with honest words from the people who hired us. Each engagement combined strategy, build quality, and clear communication."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ul className="grid gap-10 md:gap-12">
          {portfolioProjects.map((p) => (
            <li
              key={p.slug}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-8 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{p.projectName}</h2>
                    {p.websiteUrl && p.displayDomain ? (
                      <a
                        href={p.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-cyan-400 hover:underline"
                      >
                        {p.displayDomain} ↗
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-slate-500">
                    Client · <span className="text-slate-300">{p.clientName}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-400"
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
              <blockquote className="mt-8 border-l-2 border-cyan-500/40 pl-5 text-slate-300 leading-relaxed">
                <p className="text-[0.95rem] sm:text-base">&ldquo;{p.review}&rdquo;</p>
                <footer className="mt-4 text-sm text-slate-500">— {p.clientName}</footer>
              </blockquote>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-slate-500">
          Want your product or brand on this list?{" "}
          <Link href="/contact" className="text-cyan-400 hover:underline">
            Tell us about your project
          </Link>{" "}
          — we will reply with scope, timeline, and a straight answer on fit.
        </p>
      </div>

      <CtaBand />
    </>
  );
}
