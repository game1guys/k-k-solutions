function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function StarRating({ value, className }: { value: number; className?: string }) {
  const max = 5;
  const stars = Array.from({ length: max }, (_, i) => {
    const n = i + 1;
    if (value >= n) return "full" as const;
    if (value >= n - 0.5) return "half" as const;
    return "empty" as const;
  });

  return (
    <div className={`flex items-center gap-0.5 text-amber-400 ${className ?? ""}`} role="img" aria-label={`${value} out of ${max} stars`}>
      {stars.map((kind, i) =>
        kind === "full" ? (
          <StarIcon key={i} className="h-5 w-5 shrink-0" />
        ) : kind === "half" ? (
          <span key={i} className="relative inline-block h-5 w-5 shrink-0 text-amber-400">
            <StarIcon className="absolute inset-0 h-5 w-5 text-white/15" />
            <span className="absolute inset-0 w-1/2 overflow-hidden">
              <StarIcon className="h-5 w-5" />
            </span>
          </span>
        ) : (
          <StarIcon key={i} className="h-5 w-5 shrink-0 text-white/15" />
        ),
      )}
      <span className="ml-1.5 text-sm font-medium text-slate-400 tabular-nums">{value.toFixed(1)}</span>
    </div>
  );
}
