import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { domainExperience } from "@/content/domains";
import { servicesPreview } from "@/content/services-preview";
import {
  homeStats,
  whyChoose,
  engagementModels,
  techStack,
  faqPreview,
} from "@/content/home-data";
import { CtaBand } from "@/components/CtaBand";

const steps = [
  { n: "01", t: "Discovery", d: "Goals, audience, and tech stack — aligned in one workshop." },
  { n: "02", t: "Design & build", d: "UI/UX, development sprints, and weekly demos." },
  { n: "03", t: "Launch & grow", d: "Deploy, measure, optimize — marketing in sync with product." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90dvh] overflow-hidden hero-gradient">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="Digital technology and global connectivity — K&K Digital Solutions"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/90 to-[#030712]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-center px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:min-h-[calc(90dvh-5rem)] lg:pb-28">
          <p className="animate-fade-up text-sm font-medium text-cyan-400/90 [animation-delay:0.05s]">
            Lucknow · near Amausi airport · web, apps & AI-ready delivery — 5+ years
          </p>
          <h1 className="font-display mt-4 max-w-4xl animate-fade-up text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [animation-delay:0.1s]">
            Build products people{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              actually use
            </span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-up text-lg text-slate-400 [animation-delay:0.15s]">
            {site.name} partners with founders and teams to ship modern websites, mobile apps, and
            growth programs — based in {site.location.headline}, serving clients globally. Five years
            of strong experience across crypto exchanges, health and EdTech, AI-enabled products, real
            estate, and urban home-servicing platforms — from sofa cleaning and AC service
            marketplaces to high-throughput trading interfaces.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 [animation-delay:0.2s]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-95"
            >
              Start your project
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
            >
              Explore industries
            </Link>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {homeStats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-wider text-slate-500">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-bold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#020617]/90 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <p className="text-center text-sm text-slate-300 sm:text-left">
            <span className="font-display font-semibold text-transparent text-gradient-ai">Studio</span>
            <span className="text-slate-500"> · </span>
            {site.location.headline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/tools" className="font-semibold text-cyan-400 hover:text-cyan-300">
              Tools & AI stack →
            </Link>
            <Link href="/why-us" className="font-semibold text-violet-400 hover:text-violet-300">
              Why us →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#020617] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            How we help teams win
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-300 leading-relaxed">
            Whether you are launching an MVP, scaling an existing product, or fixing acquisition costs,
            we combine engineering discipline with marketing rigor — so product releases and growth
            experiments reinforce each other instead of competing for attention.
          </p>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-[#030712] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex max-w-3xl flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Core services
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Strategy, design, development, and measurable growth — structured so you can start
                small, prove value, and expand scope with confidence.
              </p>
            </div>
            <Link
              href="/services"
              className="shrink-0 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {servicesPreview.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent transition hover:border-cyan-500/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={`${s.title} — ${site.shortName}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/90">{s.tag}</p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-y border-white/5 bg-[#020617] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex max-w-3xl flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Industry & product experience
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                We have shipped and iterated in these domains — not slide decks: production systems,
                real users, and marketing loops that had to pay back.
              </p>
            </div>
            <Link
              href="/industries"
              className="shrink-0 text-sm font-semibold text-violet-400 hover:text-violet-300"
            >
              Deep dive by industry →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domainExperience.map((d) => (
              <article
                key={d.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent transition hover:border-violet-500/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={`${d.title} — ${site.shortName}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400/90">
                    {d.tag}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold text-white">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030712] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why teams work with us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Principles that show up in stand-ups, pull requests, and campaign reviews — not just on
            the proposal.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-500/20"
              >
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#020617] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ways to engage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Pick the model that matches your stage — we stay flexible as your roadmap evolves.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.title} className="glass-panel rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-white">{m.title}</h3>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#030712] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
              Stack, AI & platforms
            </h2>
            <Link
              href="/tools"
              className="shrink-0 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/50"
            >
              Full tools map →
            </Link>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-500 sm:text-left">
            From LLM integrations and vector search to Next.js, mobile, and growth analytics — one
            coherent build.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:justify-start">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-[0_0_20px_-8px_rgba(34,211,238,0.35)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-white/5 bg-[#020617] py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="Team collaboration at K&K Digital Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Five years of shipping real work
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              K&K Digital Solutions exists to reduce the gap between a strong idea and a product
              customers can rely on. We have supported teams across crypto, healthcare, education,
              AI, property technology, and on-demand home services — building everything from booking
              and dispatch for technicians to investor-grade dashboards and acquisition funnels.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Our default is clarity: documented decisions, observable metrics, and codebases your
              team can extend — whether we stay on for the next phase or hand off cleanly.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Our story & values →
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-[#030712] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 max-w-xl text-slate-400">
              A lightweight process designed for fast feedback — with room to go deep when risk is
              high.
            </p>
            <Link href="/process" className="mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              See full methodology →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="glass-panel relative rounded-2xl p-8 text-left transition hover:border-cyan-500/20"
              >
                <span className="font-display text-4xl font-bold text-white/10">{step.n}</span>
                <h3 className="font-display mt-4 text-xl font-semibold text-white">{step.t}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#020617] py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-white sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-center text-slate-400">
            Quick answers — see the full FAQ for more detail.
          </p>
          <div className="mt-10 space-y-3">
            {faqPreview.map((f) => (
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
          <div className="mt-10 text-center">
            <Link href="/faq" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              Read full FAQ →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />

      <section id="contact" className="scroll-mt-24 border-t border-white/10 pb-24 pt-16 sm:pb-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Let&apos;s talk</h2>
              <p className="mt-3 text-slate-400">
                Share your goals and constraints — we will reply with honest feasibility, a rough
                timeline, and what we need from your side to move fast.
              </p>
              <div className="mt-6 space-y-2 text-slate-300">
                <p>
                  <span className="text-slate-500">Email · </span>
                  <a href={`mailto:${site.email}`} className="text-cyan-400 hover:underline">
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">Phone · </span>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400">
                    {site.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-8 shrink-0 lg:mt-0">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
              >
                Open contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
