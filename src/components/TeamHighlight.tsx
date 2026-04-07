import { site } from "@/lib/site";

/** Prominent display for project head & engineer — not used in footer */
export function TeamHighlight({
  showHeading = true,
  heading = "Who you’ll work with",
}: {
  showHeading?: boolean;
  heading?: string;
}) {
  return (
    <div>
      {showHeading && (
        <h2 className="font-display text-center text-2xl font-bold text-white sm:text-3xl">
          {heading}
        </h2>
      )}
      <div
        className={`grid gap-6 sm:grid-cols-2 ${showHeading ? "mt-10" : ""}`}
      >
        <div className="rounded-2xl border border-cyan-500/40 border-glow bg-gradient-to-br from-cyan-500/15 via-[#0f172a] to-[#020617] px-6 py-8 text-center shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)] sm:px-8 sm:py-10 sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
            {site.team.projectHead.title}
          </p>
          <p className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              {site.team.projectHead.name}
            </span>
          </p>
        </div>
        <div className="rounded-2xl border border-violet-500/40 bg-gradient-to-br from-violet-500/15 via-[#0f172a] to-[#020617] px-6 py-8 text-center shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)] sm:px-8 sm:py-10 sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/90">
            {site.team.softwareEngineer.title}
          </p>
          <p className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            <span className="bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              {site.team.softwareEngineer.name}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
