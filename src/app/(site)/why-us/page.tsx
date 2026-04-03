import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why choose us",
  description:
    "Why teams hire K&K Digital Solutions — product judgment, delivery discipline, and growth tied to engineering. Based in Lucknow, serving clients globally.",
};

const reasons = [
  {
    title: "You get builders who understand acquisition",
    body: "We do not treat marketing as someone else’s problem. Funnels, page speed, and tracking are discussed next to API design — because that is how modern products win.",
  },
  {
    title: "We have walked your domains before",
    body: "Crypto exchanges, health and EdTech, AI workflows, real estate, and urban servicing (sofa cleaning, AC repair, dispatch) — we know what breaks under load and what regulators ask.",
  },
  {
    title: "Honest scoping beats hero estimates",
    body: "If a timeline is unrealistic, we say it early — with alternatives: phased launch, scope cuts, or parallel workstreams. Trust compounds when surprises shrink.",
  },
  {
    title: "Documentation and handoff are part of done",
    body: "Runbooks, environment notes, analytics event dictionaries — your team should not depend on private Slack memory to operate the system.",
  },
  {
    title: "A studio mindset, not an assembly line",
    body: "We limit concurrent engagements so attention stays high. You are not buying hours; you are buying outcomes with transparent progress.",
  },
  {
    title: "Lucknow base, global standards",
    body: `We operate from ${site.location.headline} — with remote collaboration patterns proven across time zones. Quality and communication do not depend on city limits.`,
  },
];

export default function WhyUsPage() {
  return (
    <>
      <InnerPageHeader
        title="Why clients stay — and come back"
        subtitle="Most agencies optimize for invoices. We optimize for references: shipping work you can defend in a boardroom, extend with your own team, and measure without arguments."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why us" }]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Choosing a partner is risk management. The wrong partner burns calendar time, confuses
            users, and leaves you with code nobody wants to touch. The right partner shortens
            learning cycles: you ship, measure, and improve — without reorganizing your company
            around vendor failure modes.
          </p>
          <p>
            {site.name} is built for teams that care about craft and numbers. We are comfortable
            saying no to work that is mis-scoped, unethical, or unlikely to succeed — because our
            reputation rides on outcomes, not on signed SOWs alone.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-[#020617]/80 p-6 backdrop-blur-sm"
            >
              <span className="font-display text-3xl font-bold text-white/10">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display mt-2 text-xl font-semibold text-white">{r.title}</h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 text-sm">
          <Link href="/tools" className="font-semibold text-cyan-400 hover:text-cyan-300">
            See tools & AI stack →
          </Link>
          <Link href="/process" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Our process →
          </Link>
          <Link href="/contact" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Contact →
          </Link>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
