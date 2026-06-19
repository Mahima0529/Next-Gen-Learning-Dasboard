import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import CourseSection from "@/components/CourseSection";
import CourseGridSkeleton from "@/components/CourseGridSkeleton";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 lg:p-8 pb-20 md:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <HeroTile name="Mahima" streak={12} />
          <ActivityTile />

          <Suspense fallback={<CourseGridSkeleton />}>
            <CourseSection />
          </Suspense>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}