export default function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface animate-pulse ${className}`}
    >
      <div className="p-5 space-y-4">
        <div className="w-9 h-9 rounded-lg bg-white/5" />
        <div className="space-y-2">
          <div className="h-3 w-3/4 rounded bg-white/5" />
          <div className="h-2 w-1/3 rounded bg-white/5" />
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/5" />
      </div>
    </div>
  );
}