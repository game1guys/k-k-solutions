"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-slate-100 outline-none ring-cyan-400/40 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-slate-100 outline-none ring-cyan-400/40 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-2"
            placeholder="you@company.com"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
            Project details
          </span>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full resize-y rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-slate-100 outline-none ring-cyan-400/40 placeholder:text-slate-600 focus:border-cyan-500/50 focus:ring-2"
            placeholder="Tell us about your website, app, or campaign goals…"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-95 sm:w-auto sm:px-10"
      >
        Send via email
      </button>
      {status === "sent" && (
        <p className="mt-3 text-sm text-cyan-400" role="status">
          Your mail app should open. If not, write to {site.email}
        </p>
      )}
    </form>
  );
}
