import React, { Suspense } from "react";
import { ChargeSummary } from "@/types/course-summary.interface";
import { ChargeCardList } from "@/app/(dashborad)/dashboard/(charges)/_components/charge-card-list";
import { API_URL } from "@/config/global";
import { CardPlaceholder } from "@/app/_components/placeholders";

async function getNewestCourses(count: number): Promise<ChargeSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  return res.json();
}

async function DashboardPage() {
  const newestCourses = await getNewestCourses(4);
  return (
    <section className="container ">
      <div className="text-center xl:text-right">
        <Suspense fallback={<CardPlaceholder count={4} className="mt-5" />}>
          <ChargeCardList charges={newestCourses} />
        </Suspense>
      </div>
    </section>
  );
}

export default DashboardPage;
