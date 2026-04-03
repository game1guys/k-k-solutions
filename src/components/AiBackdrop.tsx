/**
 * Fixed ambient layer — grid, mesh, soft orbs. Keeps pages feeling “AI / product” without hurting readability.
 */
export function AiBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="ai-mesh absolute inset-0" />
      <div className="ai-grid-pan absolute -inset-[100%] opacity-[0.35]" />
      <div className="absolute -left-32 top-1/4 h-[min(80vw,520px)] w-[min(80vw,520px)] animate-pulse-slow rounded-full bg-cyan-500/25 blur-[100px]" />
      <div className="absolute -right-32 bottom-1/4 h-[min(70vw,480px)] w-[min(70vw,480px)] animate-pulse-slow rounded-full bg-violet-600/20 blur-[110px] [animation-delay:1.5s]" />
      <div className="absolute left-1/2 top-0 h-px w-[min(90%,800px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
    </div>
  );
}
