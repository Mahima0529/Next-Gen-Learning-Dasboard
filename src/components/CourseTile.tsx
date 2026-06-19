"use client";

import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import TiltWrapper from "./TiltWrapper";
import ProgressBar from "./ProgressBar";
import { Course } from "@/types/course";

export default function CourseTile({ course }: { course: Course }) {
  const Icon: LucideIcon =
    (Icons[course.icon_name as keyof typeof Icons] as LucideIcon) ?? Icons.BookOpen;

  return (
    <TiltWrapper className="p-5 bg-mesh-gradient">
      <article className="flex flex-col h-full justify-between gap-4">
        <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center">
          <Icon size={18} className="text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-textPrimary leading-snug">
            {course.title}
          </h3>
          <p className="text-xs text-textSecondary mt-1">{course.progress}% complete</p>
        </div>
        <ProgressBar progress={course.progress} />
      </article>
    </TiltWrapper>
  );
}