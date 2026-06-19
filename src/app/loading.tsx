import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden md:block w-20 lg:w-56 border-r border-border" />
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <SkeletonCard className="col-span-2 md:col-span-3 lg:col-span-2" />
          <SkeletonCard className="col-span-2" />
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}