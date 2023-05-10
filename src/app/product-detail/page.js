import React from "react";
import withAuth from "@/utils/auth";
const page = () => {
  return <h1>this is product page</h1>;
};

export default withAuth(page);
