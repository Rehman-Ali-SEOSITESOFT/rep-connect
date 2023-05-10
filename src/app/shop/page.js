"use client";
import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import Products from "@/components/products/Products";
import React, { useEffect } from "react";
import style from "./shop.module.css";
import { useDispatch } from "react-redux";
import { product } from "@/redux/slices/productSlice";
import withAuth from "@/utils/auth";
const page = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(product());
  }, []);
  return (
    <>
      <BreadCrum breadHeading="Shop" pageName="Home" subPage="Shop" />
      <section className={style.shop_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div
                className={`d-flex justify-content-between ${style.shop_product_wrapper}`}
              >
                <Products />
                <AsideWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default  withAuth(page);
