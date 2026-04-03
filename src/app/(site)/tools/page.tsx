import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";
import { toolCategories, aiPrinciples } from "@/content/tools-data";

export const metadata: Metadata = {
  title: "Tools, stack & AI capabilities",
  description:
    "Technologies and platforms K&K Digital Solutions uses — from Next.js and React Native to LLM integrations, vector search, analytics, and cloud delivery.",
};

export default function ToolsPage() {
  return (
    <>
      <InnerPageHeader
        title="Tools, stack & AI capabilities"
        subtitle="We are tool-agnostic on principle — we pick what fits your constraints, team, and risk profile. Below is a representative map of what we ship with regularly, especially for AI-enabled and high-traffic products."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tools & stack" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-cyan-500/20 border-glow bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10 p-8 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/90">
            Intelligence layer
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
            AI that ships — not slides
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            Clients stay when they see judgment: model choice, evals, guardrails, and cost control.
            We treat LLMs as components in a system — with logging, rollback, and clear ownership —
            not as magic text boxes taped onto legacy UX.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {aiPrinciples.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/10 bg-[#030712]/60 p-5 backdrop-blur-sm"
              >
                <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-16">
          {toolCategories.map((cat) => (
            <section key={cat.name}>
              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{cat.name}</h2>
              {cat.blurb && (
                <p className="mt-3 max-w-3xl text-slate-400 leading-relaxed">{cat.blurb}</p>
              )}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-white/10 bg-[#020617] p-8">
          <h2 className="font-display text-xl font-bold text-white">How we choose</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Selection criteria include: team familiarity, hiring market in your region, compliance
            posture, latency targets, total cost of ownership, and exit strategy (vendor lock-in).
            If a tool is trendy but wrong for your stage, we say so — and propose a leaner path.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            For AI specifically, we document model versions, data handling, and evaluation metrics in
            the same place as your product requirements — so legal, security, and engineering read
            one story.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Discuss your stack →
          </Link>
        </div>
      </div>

      <CtaBand
        title="Want this rigor on your roadmap?"
        body="Send a brief — we will challenge assumptions constructively and propose a phased plan."
      />
    </>
  );
}
