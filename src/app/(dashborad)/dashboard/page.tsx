import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    },
  );
  return res.json();
}

async function DashboardPage() {
  const newestCourses = await getNewestCourses(4);

  return (
    <div>
      {newestCourses.map((course) => (
        <p key={course.id}>{course.title}</p>
      ))}
    </div>
  );
}
export default DashboardPage;
