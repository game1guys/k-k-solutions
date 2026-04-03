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
        <path
          d="M10 12h4.2v8.4L22 12h5.2l-8.6 9.2L28 32h-5.4l-6.4-7.8-2 2.1V32H10V12z"
          className="fill-[#22d3ee]"
        />
        <path
          d="M24 12h10v3.8h-5.6v3.2H33v3.8h-4.6v9.2H24V12z"
          className="fill-[#a78bfa]"
        />
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
