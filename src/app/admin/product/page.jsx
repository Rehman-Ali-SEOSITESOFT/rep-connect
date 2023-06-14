"use client";
// import ProductCart from "@/components/admin/products/ProductCart/ProductCart";
import React from "react";
import dynamic from "next/dynamic";

const DynamicSidebarWithNoSSR = dynamic(
  () => import("@/components/admin/products/ProductCart/ProductCart"),
  {
    ssr: false,
  }
);

const Page = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <DynamicSidebarWithNoSSR />
        </div>
      </div>
    </div>
  );
};

export default Page;
