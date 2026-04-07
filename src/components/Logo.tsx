export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label="K and K Digital Solutions logo"
    >
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <rect width="44" height="44" rx="12" className="fill-[#0c1222]" />
        {/* Two matching “K” marks — second was vertical bars and read as “F” */}
        <path
          fill="#22d3ee"
          d="M8 11h3.8v7.6L18 11h4.7l-7.8 8.4L25 31h-4.9l-5.8-7.1-1.8 1.9V31H8V11z"
        />
        <g transform="translate(14.5 0)">
          <path
            fill="#a78bfa"
            d="M8 11h3.8v7.6L18 11h4.7l-7.8 8.4L25 31h-4.9l-5.8-7.1-1.8 1.9V31H8V11z"
          />
        </g>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-semibold tracking-tight text-white text-lg sm:text-xl">
          K&K <span className="text-cyan-400">Digital</span>
        </span>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">
          Solutions
        </span>
      </div>
    </div>
  );
}
