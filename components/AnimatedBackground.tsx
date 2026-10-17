export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-slate-50 transition-colors duration-500 dark:bg-[#08080f]" />

      {/* blobs animados */}
      <div className="absolute -left-[15%] top-[2%] h-[60vmax] w-[60vmax] max-h-[720px] max-w-[720px] animate-float1 rounded-full bg-fuchsia-300/35 blur-[110px] will-change-transform dark:bg-purple-900/40" />
      <div className="absolute -right-[15%] top-[8%] h-[55vmax] w-[55vmax] max-h-[680px] max-w-[680px] animate-float2 rounded-full bg-pink-200/40 blur-[110px] will-change-transform dark:bg-fuchsia-900/35" />
      <div className="absolute -bottom-[10%] left-[15%] h-[60vmax] w-[60vmax] max-h-[720px] max-w-[720px] animate-float3 rounded-full bg-sky-200/40 blur-[120px] will-change-transform dark:bg-indigo-900/35" />

      {/* vinheta suave para dar profundidade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,6,26,0.35)_100%)] opacity-0 dark:opacity-100" />
    </div>
  );
}
