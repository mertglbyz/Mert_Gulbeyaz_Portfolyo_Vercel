export function AmbientLight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -top-24 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute top-[38%] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute -bottom-48 -left-16 h-[36rem] w-[36rem] rounded-full bg-blue-200/15 blur-3xl" />
    </div>
  );
}
