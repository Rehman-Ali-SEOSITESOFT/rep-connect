import BreadCrum from "@/components/breadCrum/BreadCrum";
import BreadCrumCart from "@/components/cart/CartBreakCrum/BreadCrumCart";
import CheckoutBillingDetail from "@/components/checkout/checkoutBillingDetail/CheckoutBillingDetail";
import CheckoutOrdeDetail from "@/components/checkout/checkoutOrderDetail/CheckoutOrdeDetail";
import React from "react";
import style from "./style.module.css";
const page = () => {
  return (
    <>
      <BreadCrum breadHeading="Checkout" pageName="Home" subPage="Checkout" />
      <section className={style.checkout_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <BreadCrumCart />
            </div>
          </div>
          <div className={`row ${style.checkout_form_wrapper}`}>
            <div className={style.checkout_billing_deatil}>
              <CheckoutBillingDetail />
            </div>
            <div className={style.checkout_order_detail}>
              <CheckoutOrdeDetail />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
