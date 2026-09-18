export function AmbientLight() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block"
    >
      <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-white/12 blur-3xl" />
      <div className="absolute -top-24 right-[-12rem] h-[24rem] w-[24rem] rounded-full bg-sky-200/12 blur-3xl" />
    </div>
  );
}
