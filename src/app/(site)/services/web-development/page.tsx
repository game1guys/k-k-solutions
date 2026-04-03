import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Web development",
  description:
    "Next.js, React, dashboards, e-commerce, and APIs — fast, accessible web products with SEO, performance, and analytics built in.",
};

const deliverables = [
  "Marketing sites and landing pages with experimentation hooks",
  "SaaS dashboards, admin panels, and role-based access",
  "Headless CMS integration and content workflows",
  "E-commerce flows, catalog, and checkout integrations",
  "Design systems, component libraries, and documentation",
  "API design, serverless functions, and background jobs",
  "Observability: error tracking, logging, and uptime checks",
];

const stackNotes = [
  {
    h: "Front end",
    p: "We default to React and Next.js for SEO-critical surfaces and complex UI. TypeScript is standard — fewer surprises in production and easier onboarding for your engineers.",
  },
  {
    h: "Styling & accessibility",
    p: "Tailwind CSS or CSS-in-JS patterns depending on team preference; focus on contrast, keyboard navigation, and semantic HTML so accessibility is not an afterthought.",
  },
  {
    h: "Data & APIs",
    p: "REST or GraphQL backends on Node or edge runtimes; caching strategies aligned with freshness requirements; rate limits and auth patterns suited to B2B and consumer workloads.",
  },
  {
    h: "Infrastructure",
    p: "Vercel, AWS, or GCP — chosen for your compliance, traffic profile, and operational maturity. Infrastructure as code where it reduces drift.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <InnerPageHeader
        title="Web development"
        subtitle="We build fast, maintainable web products — from marketing sites to complex SaaS — with performance, SEO, and analytics treated as first-class requirements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Web development" },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            The web is still the hub for discovery, onboarding, and long-lived workflows. We treat
            every project as a product: clear information architecture, resilient error states, and
            metrics that tell you whether the experience actually works — not just whether it
            deployed.
          </p>
          <p>
            Our web engagements often combine marketing needs (SEO, structured data, content velocity)
            with application complexity (authentication, permissions, real-time updates). We plan for
            both so you are not forced into a rewrite when traffic or feature scope grows.
          </p>
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">What we deliver</h2>
        <ul className="mt-6 space-y-3 text-slate-400">
          {deliverables.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {d}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">How we approach the stack</h2>
        <div className="mt-8 space-y-8">
          {stackNotes.map((s) => (
            <div key={s.h}>
              <h3 className="font-display text-lg font-semibold text-white">{s.h}</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">{s.p}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Performance & SEO</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Core Web Vitals, image optimization, route-level code splitting, and caching headers are
          part of acceptance — not a post-launch audit surprise. We implement metadata, Open Graph,
          canonical URLs, and JSON-LD where appropriate, and we align URL structure with content
          strategy so search and paid landing pages stay consistent.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          For international audiences, we plan hreflang, localized routes or subpaths, and CMS
          workflows that scale with translators and legal review — reducing the chance of duplicate
          content issues as you expand.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Security & compliance</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          We apply least-privilege access, secure headers, dependency scanning, and secrets management
          appropriate to your threat model. For regulated industries (health, finance), we map data
          flows early and document retention, consent, and audit expectations so engineering decisions
          support compliance rather than fight it.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Working together</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Engagements can be fixed-scope (clear milestones and acceptance tests) or retained (steady
          velocity each sprint). We integrate with your tools — Slack, Jira, Linear, Figma — and we
          ship demos frequently so stakeholders see progress, not slideware.
        </p>

        <p className="mt-10 text-sm text-slate-500">
          Related:{" "}
          <Link href="/services/app-development" className="text-cyan-400 hover:underline">
            App development
          </Link>
          {" · "}
          <Link href="/services/digital-marketing" className="text-cyan-400 hover:underline">
            Digital marketing
          </Link>
          {" · "}
          <Link href="/industries" className="text-cyan-400 hover:underline">
            Industries
          </Link>
        </p>
      </article>

      <CtaBand />
    </>
  );
}
