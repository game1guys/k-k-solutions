import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Digital marketing",
  description:
    "SEO, paid acquisition, content, CRO, and analytics — full-funnel growth tied to product and revenue metrics.",
};

const channels = [
  {
    name: "Organic search (SEO)",
    detail:
      "Technical SEO, information architecture, content clusters, and measurement. We align page templates with product and engineering so fixes ship as part of the roadmap — not as one-off tickets.",
  },
  {
    name: "Paid media",
    detail:
      "Search, social, and programmatic where appropriate — with creative iteration, audience testing, and clear attribution models. We flag when spend should pause because the landing experience or conversion path is broken.",
  },
  {
    name: "Content & lifecycle",
    detail:
      "Editorial calendars, email and in-product messaging, and nurture sequences — connected to CRM or product events so messaging stays relevant as users progress.",
  },
  {
    name: "Conversion & analytics",
    detail:
      "Funnel mapping, event taxonomy, dashboards, and experiments (A/B tests, price tests, onboarding variants). We care about statistical discipline and speed of learning — not vanity metrics.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <InnerPageHeader
        title="Digital marketing"
        subtitle="Acquisition and retention programs that respect unit economics — with creative, analytics, and product feedback loops wired together."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Digital marketing" },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Marketing works best when it is honest about bottlenecks. Sometimes the constraint is
            creative; often it is landing speed, tracking gaps, or a signup flow that leaks users.
            We connect channel work with product analytics so you see which fixes move revenue — not
            just which ads got clicks.
          </p>
          <p>
            We have run growth programs alongside product teams in SaaS, marketplaces, and regulated
            verticals. That means we understand compliance copy, approval workflows, and the reality
            that some experiments cannot ship in a day — and we plan accordingly.
          </p>
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Channels & programs</h2>
        <div className="mt-8 space-y-10">
          {channels.map((c) => (
            <div key={c.name}>
              <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">{c.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Measurement & attribution</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          We help define event schemas, server-side tagging where needed, and dashboard views for
          leadership and channel owners. For multi-touch journeys, we document assumptions and limits
          so stakeholders do not over-interpret last-click reports.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">CRO & UX collaboration</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          When experiments require UI changes, we coordinate with engineering for safe rollouts and
          with design for brand consistency. We avoid “test everything” chaos — we prioritize
          hypotheses tied to funnel drop-offs and qualitative insights.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Reporting rhythm</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Weekly or biweekly reviews with clear agendas: spend, creative performance, organic trends,
          and product blockers. Monthly deep dives for strategy adjustments and budget reallocation.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">How we price marketing work</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Retainers cover strategy, execution, and reporting; ad spend passes through or sits on your
          accounts — transparently. Project-based engagements are possible for audits, launches, and
          migration work (e.g., analytics replatforming).
        </p>

        <p className="mt-10 text-sm text-slate-500">
          Related:{" "}
          <Link href="/services/web-development" className="text-cyan-400 hover:underline">
            Web development
          </Link>
          {" · "}
          <Link href="/services/app-development" className="text-cyan-400 hover:underline">
            App development
          </Link>
          {" · "}
          <Link href="/process" className="text-cyan-400 hover:underline">
            Our process
          </Link>
        </p>
      </article>

      <CtaBand />
    </>
  );
}
