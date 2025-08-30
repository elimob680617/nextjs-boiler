import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";
import { Button } from "@/app/_components/button";

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

const headerItems = ["عنوان شارژ", "تاریخ", "مبلغ"];

async function DashboardPage() {
  const newestCourses = await getNewestCourses(4);
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
      <div className="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
        <div className="my-8 overflow-hidden">
          <table className="table-auto w-full border-collapse text-sm">
            <thead className="">
              <tr className="text-right">
                {headerItems.map((item, i) => (
                  <th key={i} className="text-xs text-white  py-3  px-4 ">
                    <h2>{item}</h2>
                  </th>
                ))}

                <th className="text-xs text-center self-start">جزئیات</th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-800 ">
              {newestCourses.map((course) => (
                <tr
                  key={course.id}
                  className="text-sm not-last:border-b border-base-50 border-dashed "
                >
                  <td className="p-4">
                    <span>شارژ{course.title} </span>
                  </td>
                  <td className="p-4">{course.id}</td>
                  <td className="p-4">{course.courseCategoryId}</td>
                  <td className="text-center p-4"></td>
                  <td className="p-4  flex justify-center items-center">
                    <Button
                      size="xs"
                      variant="filled"
                      color="success"
                      className=" text-xs text-success"
                    >
                      پرداخت
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
