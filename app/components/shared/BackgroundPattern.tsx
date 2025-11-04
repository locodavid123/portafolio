export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(40%_120%_at_50%_0%,#1e293b_0%,#0f172a_80%)]" />
      <div className="absolute inset-0 bg-[url('/dot-pattern.svg')] opacity-50 mask-[radial-gradient(100%_100%_at_50%_0%,white,transparent)]" />
    </div>
  );
}