import Link from "next/link";

export function CtaBand({
  title = "Ready to start?",
  body = "Tell us about your roadmap — we will respond with a clear plan, timeline, and next steps.",
  href = "/contact",
  label = "Contact us",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/15 via-violet-600/15 to-cyan-600/15" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-slate-300">{body}</p>
        <Link
          href={href}
          className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#030712] shadow-xl transition hover:bg-slate-100"
        >
          {label}
        </Link>
      </div>
    </section>
  );
}
