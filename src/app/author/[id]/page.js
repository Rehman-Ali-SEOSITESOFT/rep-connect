import BreadCrum from "@/components/breadCrum/BreadCrum";
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
      author
    </>
  );
};

export default page;
