import type { Metadata } from "next";
import { InnerPageHeader } from "@/components/InnerPageHeader";
import { ContactForm } from "@/components/ContactForm";
import { TeamHighlight } from "@/components/TeamHighlight";
import { site, locationLines } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact K&K Digital Solutions — email, phone, or send a project brief. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHeader
        title="Contact"
        subtitle="Share your goals, timeline, and constraints. We will reply with honest feasibility, clarifying questions, and a suggested next step."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-12 max-w-4xl">
          <TeamHighlight heading="Your contacts" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-slate-400 leading-relaxed">
              The fastest path is a short written brief: problem, audience, current stack, success
              metrics, and budget band. If you prefer a call first, email or message us with two or
              three windows that work — we will confirm.
            </p>
            <div className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-[#020617] p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {locationLines().map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 block text-lg text-cyan-400 hover:underline">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Phone</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-lg text-slate-200 hover:text-cyan-400"
                >
                  {site.phone}
                </a>
              </div>
              <p className="text-sm text-slate-500">
                Response time: usually within one business day for new inquiries. Urgent production
                issues for existing clients should be labeled clearly in the subject line.
              </p>
            </div>
          </div>
          <div id="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
