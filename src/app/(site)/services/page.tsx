import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";
import { servicesPreview } from "@/content/services-preview";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile app development, and digital marketing — strategy, design, build, and growth for teams that need speed without sacrificing quality.",
};

const capabilities = [
  {
    title: "Discovery & alignment",
    body: "We start by mapping business goals, user journeys, constraints, and success metrics. That brief becomes the backbone of UX, engineering, and channel strategy — so every sprint points in the same direction.",
  },
  {
    title: "Design systems & UI engineering",
    body: "Accessible components, responsive layouts, and design tokens that scale — whether you are shipping a marketing site, a SaaS dashboard, or a mobile app with offline modes.",
  },
  {
    title: "Backend & integrations",
    body: "REST and GraphQL APIs, webhooks, payments, KYC providers, maps, CRMs, analytics pipelines, and third-party tools — wired securely and documented for your team.",
  },
  {
    title: "Quality, performance & SEO",
    body: "Automated checks, Core Web Vitals monitoring, structured data, internationalization hooks, and analytics events — baked into release criteria, not bolted on after launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <InnerPageHeader
        title="Services built for outcomes"
        subtitle="From first prototype to ongoing growth — we combine product engineering with marketing discipline so launches and acquisition reinforce each other."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl space-y-6 text-slate-400 leading-relaxed">
          <p>
            {site.name} works as an extension of your team: we speak product, design, engineering,
            and performance marketing in one conversation. That matters when trade-offs appear — for
            example when SEO needs collide with release dates, or when paid campaigns uncover UX
            issues that should be fixed in the product rather than masked with ad spend.
          </p>
          <p>
            Below is how we structure engagements across web, mobile, and digital marketing. Each
            line of service includes planning, delivery, documentation, and handoff options — so you
            can scale scope up or down as your roadmap evolves.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {servicesPreview.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#020617] transition hover:border-cyan-500/30"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/90">{s.tag}</p>
                <h2 className="font-display mt-2 text-xl font-semibold text-white">{s.title}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-400">{s.desc}</p>
                <span className="mt-4 text-sm font-semibold text-cyan-400">View details →</span>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="font-display mt-24 text-2xl font-bold text-white sm:text-3xl">
          What every engagement can include
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl rounded-2xl border border-white/10 bg-cyan-500/5 p-8">
          <h3 className="font-display text-lg font-semibold text-white">Typical timelines</h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            Marketing sites and landing systems often ship in a few weeks once content is ready.
            Product builds vary with scope — MVPs may run eight to twelve weeks, while larger
            multi-surface programs are phased with explicit release trains. We will propose
            milestones and a communication cadence after a short discovery call — no generic
            promises without understanding your stack and risk.
          </p>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
