"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { product } from "@/redux/slices/productSlice";

const ProductCart = dynamic(
  () => import("@/components/admin/products/ProductCart/ProductCart"),
  {
    ssr: false,
  }
);

const Page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(product());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductCart />
        </div>
      </div>
    </div>
  );
};

export default Page;
