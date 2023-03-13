import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import Products from "@/components/products/Products";
import React from "react";
import style from "./shop.module.css";
const page = () => {
  return (
    <>
      <BreadCrum breadHeading="Shop" pageName="Home" subPage="Shop" />
      <section className={style.shop_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
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

export default page;
