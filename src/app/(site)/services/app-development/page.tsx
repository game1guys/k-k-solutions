import type { Metadata } from "next";
import Link from "next/link";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "App development",
  description:
    "iOS, Android, and cross-platform apps — React Native and Flutter — with offline modes, push, payments, and secure APIs.",
};

const surfaces = [
  "Consumer apps with onboarding, profiles, and engagement loops",
  "Field technician and operations apps with GPS, media capture, and sync",
  "Companion apps for web products — shared auth and design language",
  "Tablet kiosks and internal tools for retail and events",
  "White-label or multi-tenant configurations where branding varies by client",
];

const platform = [
  {
    title: "React Native",
    body: "When you want one codebase for iOS and Android with native modules where needed. Strong fit for teams already invested in React and TypeScript.",
  },
  {
    title: "Flutter",
    body: "When UI consistency and animation performance across devices are priorities — and your team is comfortable with Dart or wants a single expressive UI layer.",
  },
  {
    title: "Native modules & bridges",
    body: "We integrate device capabilities, third-party SDKs, and legacy native code when required — with clear boundaries so upgrades remain feasible.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <InnerPageHeader
        title="App development"
        subtitle="Mobile-first experiences for customers and operations teams — built for real-world networks, permissions, and app store policies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "App development" },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            Mobile users expect speed, clarity, and respect for storage and battery. We design flows
            around intermittent connectivity — especially for field teams in home services, logistics,
            and on-ground retail — and we plan release trains around app store review times and staged
            rollouts.
          </p>
          <p>
            Whether you are launching a consumer marketplace or an internal operations tool, we align
            mobile surfaces with your web and backend contracts so data stays consistent and support
            teams are not stuck reconciling conflicting sources of truth.
          </p>
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Surfaces we build</h2>
        <ul className="mt-6 space-y-3 text-slate-400">
          {surfaces.map((s) => (
            <li key={s} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              {s}
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Cross-platform choices</h2>
        <div className="mt-8 space-y-8">
          {platform.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Backend, auth & sync</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          We implement secure token refresh, device binding where needed, and optimistic UI patterns
          that degrade gracefully. For offline-first workflows, we define conflict resolution rules up
          front — so technicians in the field are not blocked by ambiguous merge behavior.
        </p>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Push notifications, deep links, and in-app messaging are wired with analytics events so you
          can measure activation and retention without guessing which campaigns drove installs.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">App store & lifecycle</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          We help prepare store listings, screenshots, privacy nutrition labels, and review notes —
          especially for categories with stricter policies (finance, health, children). Post-launch,
          we support crash monitoring, ANR investigation on Android, and phased releases for risk
          reduction.
        </p>

        <h2 className="font-display mt-16 text-2xl font-bold text-white">Engagement models</h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Greenfield apps can follow a milestone plan from prototype to store release. Existing apps
          may start with a technical audit and a refactor roadmap — we prioritize changes that unlock
          velocity (build stability, modular architecture, test coverage) before stacking new features
          on shaky foundations.
        </p>

        <p className="mt-10 text-sm text-slate-500">
          Related:{" "}
          <Link href="/services/web-development" className="text-cyan-400 hover:underline">
            Web development
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
