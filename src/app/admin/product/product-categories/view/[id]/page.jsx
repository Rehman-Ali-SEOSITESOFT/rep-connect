"use client";

import ViewProCategory from "@/components/admin/product-categories/ViewProuctCategory";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <section className="product-categories">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Product Category View </h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link
                className="back-to-product"
                href="/admin/product/product-categories"
              >
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                back to product categories
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ViewProCategory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
