"use client";
import AddProductForm from "@/components/admin/products/addProductForm/AddProductForm";
import React, { useState } from "react";

const Page = () => {
  return (
    <section className="add-product">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Add New Product</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddProductForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
