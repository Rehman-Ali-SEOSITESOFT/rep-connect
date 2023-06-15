"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { product } from "@/redux/slices/productSlice";
import Link from "next/link";
import style from "./style.module.css";
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
    <div className={`container-fluid ${style.adminproduct}`}>
      <div className="row">
        <div className="col-6">
          <div className="left">
            <h4>Product</h4>
          </div>
        </div>
        <div className="col-6">
          <div className=" text-end d-block">
            <Link
              href="/admin/product/product-addnew/"
              className={`${style.add_new_btn}`}
            >
              Add New Product
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ProductCart />
        </div>
      </div>
    </div>
  );
};

export default Page;
