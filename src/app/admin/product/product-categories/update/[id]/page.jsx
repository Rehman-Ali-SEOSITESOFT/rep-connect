"use client";
import UpdateProCategory from "@/components/admin/product-categories/updateProductCategory";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <section className="product-categories">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-12">
            <div className="left">
              <h4 className="product-title">Product Update</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <UpdateProCategory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
