import BreadCrum from "@/components/breadCrum/BreadCrum";
import CartItems from "@/components/cart/CartItems/CartItems";
import CartPricingDetail from "@/components/cart/CartPricingDetail/CartPricingDetail";
import React from "react";
import style from "./cart.module.css";
const page = () => {
  return (
    <>
      <BreadCrum breadHeading="Cart" pageName="Home" subPage="Cart" />
      <section className={style.cart__page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"> Cart "+" Checkout </div>
          </div>
          <div className="row">
            <div className="col-8">
              <CartItems />
            </div>
            <div className="col-4">
              <CartPricingDetail />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
