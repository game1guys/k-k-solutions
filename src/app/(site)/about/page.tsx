import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "K&K Digital Solutions — five years of shipping web, mobile, and growth programs for teams that value clarity, performance, and measurable outcomes.",
};

const values = [
  {
    title: "Clarity over noise",
    body: "We document decisions, surface risks early, and avoid jargon when stakes are high. Stakeholders should understand trade-offs — not discover them after launch.",
  },
  {
    title: "Ownership end-to-end",
    body: "From discovery to analytics, we connect the dots between product and growth. Siloed delivery creates blame games; integrated delivery creates learning.",
  },
  {
    title: "Respect for craft",
    body: "Readable code, accessible interfaces, and campaigns that do not insult the user’s intelligence. Shortcuts have costs — we are explicit about them.",
  },
  {
    title: "Long-term relationships",
    body: "We prefer engagements where we can improve systems over time — not one-off drops that leave your team with mysteries. Handoffs are documented and kind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <InnerPageHeader
        title={`About ${site.shortName}`}
        subtitle="We are a small, senior-leaning team focused on shipping — websites, apps, and marketing programs that hold up when real users and real traffic arrive."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:sticky lg:top-28">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80"
              alt="Collaboration and delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-3xl space-y-6 text-slate-400 leading-relaxed">
            <p>
              {site.name} was founded on a simple frustration: too many digital projects ship with
              beautiful decks but fragile execution. We wanted a practice where engineering,
              design, and growth spoke the same language — where SEO and performance were not
              “Phase 2,” and where marketing did not point at broken funnels.
            </p>
            <p>
              Over five years we have supported startups and established businesses across India and
              international markets. The studio is based in Lucknow, near Amausi (CCS International
              Airport), with remote-first collaboration for clients everywhere. Our work spans crypto
              exchanges, healthcare and education products, AI-enabled workflows, property
              technology, and urban home-servicing platforms — including sofa cleaning, AC service,
              and dispatch-heavy operations.
            </p>
            <p>
              We are intentionally selective about how many programs we run in parallel. Capacity is
              guarded so clients get attention from people who build, not only account-manage. When
              we collaborate, you work directly with people who can answer technical questions and
              marketing questions in the same thread.
            </p>
          </div>
        </div>

        <h2 className="font-display mt-24 text-2xl font-bold text-white sm:text-3xl">How we work with you</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-[#020617] p-6">
              <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-20 text-2xl font-bold text-white sm:text-3xl">What success looks like</h2>
        <div className="mt-8 max-w-3xl space-y-4 text-slate-400 leading-relaxed">
          <p>
            Success is not “launched.” Success is when your team can operate the system: deploy safely,
            read analytics with confidence, and run experiments without fearing regressions. We
            measure ourselves by how quickly your internal team becomes autonomous — with us in a
            supporting role or fully handed off.
          </p>
          <p>
            For growth programs, success means improving efficient acquisition: lower blended CAC,
            higher activation, clearer attribution — alongside creative that reflects your brand and
            product truth.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-4 text-sm">
          <Link href="/process" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Read our process →
          </Link>
          <Link href="/contact" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Get in touch →
          </Link>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
