import React from "react";
import type { ChargeDetails } from "@/types/charge-details.interface";
import { API_URL } from "@/config/global";
import { ChargeAside } from "@/app/(dashborad)/dashboard/(charges)/charges/[slug]/_components/charge-aside";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json(),
  );
  return (slugs as string[]).map((slug) => ({
    slug: slug,
  }));
}

async function getCharge(slug: string): Promise<ChargeDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`, {});
  return res.json();
}

const ChargeDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const course = await getCharge(slug);
  return (
    <div className="container grid grid-cols-10 grid-row-[1fr, 1fr] gap-10 py-10">
      <div className="col-span-10 xl:col-span-7 ">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-bold leading-9">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg leading-9">
          {course.subTitle}
        </h2>
      </div>
      <div className="col-span-10 xl:col-span-3">
        <ChargeAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6 bg-info"></div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  );
};
export default ChargeDetails;
