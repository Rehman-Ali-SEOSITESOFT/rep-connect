import BlogFilters from "@/components/blogs/Filter/BlogFilters";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return (
    <>
      <BreadCrum
        breadHeading={id}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: id,
            link: "/",
          },
        ]}
      />
      <BlogFilters />
    </>
  );
};

export default withAuth(page);
