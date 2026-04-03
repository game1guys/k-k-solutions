import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about working with K&K Digital Solutions — scope, pricing, timelines, and how we collaborate.",
};

const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "We focus on web and mobile product builds, growth programs, and combined engagements where product and marketing must stay aligned. Typical clients include startups scaling MVPs, marketplaces improving operations, and teams modernizing legacy stacks.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. We help define a sensible first release, prioritize ruthlessly, and instrument analytics so you learn quickly after launch. We are candid when a scope is too large for a timeline or budget — and we suggest phasing.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Often. We begin with a short audit: architecture, security, performance, test coverage, and delivery risk. You receive a prioritized plan — quick wins versus structural refactors — before we commit to a long runway.",
  },
  {
    q: "How do you price engagements?",
    a: "Fixed-scope work is priced by milestone with acceptance criteria. Retained engagements are monthly for ongoing roadmap support. Marketing programs may combine a retainer with pass-through ad spend on your accounts. We provide estimates after discovery — not from a generic rate card alone.",
  },
  {
    q: "What is the typical timeline for a marketing site?",
    a: "Content-ready marketing sites often ship in a few weeks. Delays usually come from pending copy, legal review, or third-party integrations — we flag dependencies early and sequence work so the team is not blocked idle.",
  },
  {
    q: "How do you handle communication and time zones?",
    a: "We align on a weekly demo cadence and async updates in your preferred tool (Slack, Teams, email). For international clients, we schedule overlapping hours for reviews and keep written summaries so decisions are traceable.",
  },
  {
    q: "Will we own the code and accounts?",
    a: "Yes. Repositories, analytics properties, ad accounts, and domains should sit under your ownership. We document handover and provide migration support when engagements wind down.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, mutual NDAs are standard before sharing sensitive architecture or data. We also respect confidentiality in regulated industries and can align with your vendor security questionnaire where needed.",
  },
  {
    q: "What does a discovery call cover?",
    a: "Goals, users, constraints, current stack, competitors, and success metrics. You leave with clarity on whether we are the right fit — and if so, what a written proposal would contain.",
  },
  {
    q: "How do we get started?",
    a: "Email a brief or use the contact form. We reply with questions, a proposed call time, and — when appropriate — a high-level timeline and engagement model. No pressure — fit matters for both sides.",
  },
];

export default function FaqPage() {
  return (
    <>
      <InnerPageHeader
        title="Frequently asked questions"
        subtitle="Practical answers about collaboration, delivery, and commercial terms. If something is missing, ask us directly — we prefer specific questions to vague RFPs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 open:border-cyan-500/20"
            >
              <summary className="cursor-pointer list-none font-medium text-slate-200 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-cyan-500 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Still unsure?{" "}
          <Link href="/contact" className="font-semibold text-cyan-400 hover:underline">
            Contact us
          </Link>{" "}
          with your context — we respond personally.
        </p>
      </div>

      <CtaBand title="Prefer to talk?" body="Send a short note and we will propose a call." />
    </>
  );
}
