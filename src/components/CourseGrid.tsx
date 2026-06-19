"use client";

import { motion, Variants } from "framer-motion";
import CourseTile from "./CourseTile";
import { Course } from "@/types/course";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 col-span-2 md:col-span-3 lg:col-span-4"
    >
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseTile course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}