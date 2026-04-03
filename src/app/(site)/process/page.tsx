import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discovery, design and build, launch and grow — how K&K Digital Solutions runs programs with clear milestones, demos, and documentation.",
};

const phases = [
  {
    phase: "Phase 1 — Discovery & blueprint",
    weeks: "1–3 weeks depending on scope",
    items: [
      "Stakeholder interviews and success metrics",
      "User journey mapping and technical constraints",
      "Competitive and channel landscape (for growth programs)",
      "Architecture options with risk and cost notes",
      "Written proposal: milestones, acceptance tests, and communication cadence",
    ],
  },
  {
    phase: "Phase 2 — Design & build",
    weeks: "Varies — milestone-based",
    items: [
      "UX flows and high-fidelity UI aligned to your brand",
      "Implementation sprints with weekly demos and shared task board",
      "Automated tests where ROI is clear; manual QA for critical paths",
      "Instrumentation: analytics events, error tracking, performance budgets",
      "Documentation for deploy, env vars, and runbooks",
    ],
  },
  {
    phase: "Phase 3 — Launch, measure, iterate",
    weeks: "Ongoing or time-boxed",
    items: [
      "Staged rollout, feature flags, and rollback plans",
      "SEO and performance verification on production",
      "Growth experiments with pre-registered hypotheses",
      "Weekly or biweekly reviews — spend, funnel, product blockers",
      "Roadmap grooming for the next cycle",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      <InnerPageHeader
        title="How we run programs"
        subtitle="A transparent process so you always know what is shipping, why, and what risks remain — whether we are building product, campaigns, or both."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Process" }]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-slate-400 leading-relaxed">
          We avoid heavyweight methodology theater. The structure below is a baseline — we adapt
          ceremony to your team’s maturity, regulatory needs, and release frequency. What does not
          change: written decisions, visible backlog, and demos you can invite stakeholders to without
          embarrassment.
        </p>

        <div className="mt-16 space-y-16">
          {phases.map((p) => (
            <section key={p.phase}>
              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{p.phase}</h2>
              <p className="mt-2 text-sm text-slate-500">Typical duration: {p.weeks}</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <h2 className="font-display mt-20 text-2xl font-bold text-white">Communication</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Slack or Teams for day-to-day, email for formal approvals, and video for weekly demos.
          We maintain a single source of truth for tasks (your tool or ours) so status is not trapped
          in chat scrollback.
        </p>

        <h2 className="font-display mt-12 text-2xl font-bold text-white">Change management</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Scope changes happen — we capture them as written change requests with impact on timeline and
          cost. Small tweaks fold into the current sprint when reasonable; larger shifts are
          explicitly re-estimated so trust stays intact.
        </p>

        <p className="mt-12 text-sm text-slate-500">
          <Link href="/services" className="text-cyan-400 hover:underline">
            Explore services
          </Link>
          {" · "}
          <Link href="/faq" className="text-cyan-400 hover:underline">
            FAQ
          </Link>
        </p>
      </article>

      <CtaBand />
    </>
  );
}
