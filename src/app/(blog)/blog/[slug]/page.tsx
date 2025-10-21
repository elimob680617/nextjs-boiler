import React from "react";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{slug}</h1>
    </div>
  );
};
export default BlogDetails;
