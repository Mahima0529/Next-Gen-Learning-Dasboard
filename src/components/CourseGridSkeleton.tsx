import SkeletonCard from "./SkeletonCard";

export default function CourseGridSkeleton() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 col-span-2 md:col-span-3 lg:col-span-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}