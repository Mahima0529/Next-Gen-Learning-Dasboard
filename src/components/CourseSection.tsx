import { createClient } from "@/utils/supabase/server";
import CourseGrid from "./CourseGrid";
import { Course } from "@/types/course";

export default async function CourseSection() {
  const supabase = await createClient();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
        <p className="text-sm text-red-300">
          Couldn&apos;t load your courses right now. Please try again shortly.
        </p>
      </div>
    );
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="col-span-2 md:col-span-3 lg:col-span-4 rounded-2xl border border-border bg-surface p-6 text-center">
        <p className="text-sm text-textSecondary">
          No courses yet — add some in your Supabase table to get started.
        </p>
      </div>
    );
  }

  return <CourseGrid courses={courses as Course[]} />;
}