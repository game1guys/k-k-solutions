import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { domainExperience } from "@/content/domains";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Experience across crypto exchanges, health tech, EdTech, AI products, real estate, and urban home servicing — product, engineering, and growth.",
};

const deepDive: Record<
  string,
  { intro: string; bullets: string[]; closing: string }
> = {
  "crypto-exchanges": {
    intro:
      "Exchange products live under constant load and scrutiny. We have worked on trading interfaces, wallet flows, onboarding and KYC, admin and risk tooling, and reporting surfaces for operations teams. The goal is always the same: clarity under stress — users must understand balances, fees, and order state without ambiguity.",
    bullets: [
      "Latency-aware UI patterns and optimistic updates where safe",
      "Role-based admin: compliance, support, treasury, and risk views",
      "Audit trails and export flows for regulators and partners",
      "Marketing sites that reconcile with app routes for consistent acquisition tracking",
    ],
    closing:
      "Whether you are modernizing a legacy stack or launching a new venue, we help sequence releases so critical paths — deposit, trade, withdraw — stay stable while you iterate.",
  },
  "health-tech": {
    intro:
      "Healthcare products demand careful handling of identity, consent, and clinical workflows. We build patient-facing journeys (booking, telehealth, records access) and staff tools that reduce administrative drag — always with an eye on accessibility and clear language.",
    bullets: [
      "Scheduling, reminders, and multi-channel notifications",
      "Integrations with providers, labs, and payment rails where applicable",
      "Role separation so PHI exposure follows least privilege",
      "Analytics that respect consent and regional requirements",
    ],
    closing:
      "We collaborate with your compliance advisors to map data flows early — engineering choices should support policy, not fight it after launch.",
  },
  edtech: {
    intro:
      "Learning products must balance engagement with outcomes. We ship LMS features, content libraries, assessments, and progress analytics — on web and mobile — with offline-friendly patterns where connectivity is uneven.",
    bullets: [
      "Content authoring workflows and versioning for curriculum teams",
      "Assessment engines, proctoring hooks, and integrity considerations",
      "Parent, teacher, and admin dashboards with appropriate visibility",
      "Growth loops: trials, referrals, and lifecycle messaging",
    ],
    closing:
      "We help you instrument learning events so you can improve curriculum and UX with evidence — not only top-line signups.",
  },
  ai: {
    intro:
      "AI features fail when they are bolted on without UX guardrails. We integrate LLMs and classical ML where they reduce work — summarization, routing, recommendations, and internal copilots — with logging, evaluation hooks, and human-in-the-loop flows when stakes are high.",
    bullets: [
      "Prompt and tool orchestration with cost and latency budgets",
      "Safety: content policies, red-team scenarios, and rollback plans",
      "Grounding with your data sources — not generic answers that violate trust",
      "Analytics on adoption and task completion, not just model calls",
    ],
    closing:
      "We align AI milestones with measurable operational savings or revenue impact so investment stays rational as models and vendors evolve.",
  },
  "real-estate": {
    intro:
      "Property technology spans discovery, CRM, transactions, and post-sale service. We build listing experiences, map-based search, agent tooling, and developer marketing sites — with SEO and performance tuned for high-intent local queries.",
    bullets: [
      "Search filters, saved searches, and alert systems",
      "Lead routing, SLAs, and integration with call centers or chat",
      "Virtual tour embeds, media pipelines, and CDN strategy",
      "Reporting for inventory, pipeline, and channel ROI",
    ],
    closing:
      "When your business depends on foot traffic and trust, we connect digital journeys to offline outcomes — so marketing and sales see the same truth.",
  },
  "urban-servicing": {
    intro:
      "On-demand home services — sofa cleaning, AC repair, plumbing, and more — depend on dispatch, technician apps, and customer comms that work on mediocre networks. We have built flows for slot booking, dynamic pricing experiments, payouts, and quality feedback loops.",
    bullets: [
      "Customer apps: discovery, booking, rescheduling, and support",
      "Technician apps: job details, media proof, navigation, and cashless collections",
      "Operations dashboards: SLA monitoring, surge pricing, and fraud signals",
      "Growth: local SEO, offers, and referral programs tuned to unit economics",
    ],
    closing:
      "Urban servicing is operations-heavy; we treat the product and the marketing stack as one system so demand does not collapse under fulfillment constraints.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <InnerPageHeader
        title="Industries & domains"
        subtitle="Hands-on experience across regulated, high-traffic, and operations-heavy verticals — not generic templates. Below is how we think about each space and what we typically deliver."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {domainExperience.map((d) => {
            const detail = deepDive[d.slug];
            return (
              <article
                key={d.slug}
                id={d.slug}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-[#020617]"
              >
                <div className="relative aspect-[2/1]">
                  <Image
                    src={d.img}
                    alt={`${d.title} — ${site.shortName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400/90">
                    {d.tag}
                  </p>
                  <h2 className="font-display mt-2 text-2xl font-bold text-white">{d.title}</h2>
                  <p className="mt-4 text-slate-400 leading-relaxed">{d.desc}</p>
                  {detail && (
                    <>
                      <p className="mt-6 text-slate-400 leading-relaxed">{detail.intro}</p>
                      <ul className="mt-6 space-y-3 text-slate-300">
                        {detail.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm text-slate-500 leading-relaxed">{detail.closing}</p>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="font-display text-xl font-bold text-white">Cross-cutting themes</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Across industries, we return to the same fundamentals: observable systems, honest
            communication under uncertainty, and growth experiments that respect operational limits.
            If you are evaluating partners for a complex program, we are happy to walk through
            references, architecture choices, and how we would phase your roadmap — without a
            one-size-fits-all pitch.
          </p>
          <Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300">
            Discuss your domain →
          </Link>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
