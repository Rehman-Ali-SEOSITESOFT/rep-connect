import React from "react";

const page = ({ params }) => {
  const { id } = params;

  console.log("update", id);
  return <div>Update view</div>;
};

export default page;
