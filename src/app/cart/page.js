"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import CartItems from "@/components/cart/CartItems/CartItems";
import CartPricingDetail from "@/components/cart/CartPricingDetail/CartPricingDetail";
import React, { useState } from "react";
import style from "./cart.module.css";
import img1 from "../../assets/images/products/afb-sputum-4.jpg";
import img2 from "../../assets/images/products/basicSTI-provider-22.jpg";
import img3 from "../../assets/images/products//covid-flu-22.jpg";
import BreadCrumCart from "@/components/cart/CartBreakCrum/BreadCrumCart";
import Image from "next/image";
import emptyshoppingcart from "../../assets/images/empty-shopping-cart.png";
import withAuth from "@/utils/auth";
const page = () => {
  const [listItem, setListItem] = useState([
    {
      name: "Are Cultures Reliable Card - 0066",
      qty: 1,
      price: 5000,
      img: img1,
    },
    {
      name: "Culture PCR NGS Comparison – 0050",
      qty: 9,
      price: 1000,
      img: img2,
    },
    {
      name: "ENT CRS NGS vs Culture Study – 0093",
      qty: 4,
      price: 450,
      img: img3,
    },
  ]);

  const hanldeRemove = (index) => {
    const reminingItem = listItem.filter((curvalue, ind) => index !== ind);
    setListItem(reminingItem);
  };
  const hanldeIncreasedQty = (index) => {
    let items = [...listItem];
    listItem.filter((ls, i) => index === i && ls.qty++);
    setListItem(items);
  };
  const hanldeDecreasedQty = (index) => {
    let items = [...listItem];
    listItem.filter((ls, i) => (index === i && ls.qty > 1 ? ls.qty-- : 1));
    setListItem(items);
  };

  const hanldeChanged = (index, event) => {
    let items = [...listItem];

    listItem.filter((ls, i) => {
      if (index === i) {
        ls.qty = event.target.value >= 1 ? event.target.value : ls.qty;
      }
    });
    setListItem(items);
  };
  const hanldeSubmit = (event) => {
    event.preventDefault();
    console.log("hanldeSubmit", listItem);
  };

  const totalPriceCart = listItem.reduce(
    (t, c, i, a) => t + c.qty * c.price,
    0
  );
  return (
    <>
      <BreadCrum breadHeading="Cart" pageName="Home" subPage="Cart" />

      <section className={style.cart__page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <BreadCrumCart />
            </div>
          </div>
          <div
            className={`row  justify-content-between ${style.cart_items__wrapper}`}
          >
            {/* <div className="col-xl-8 col-md-8 col-8"> */}
            {/* <CartItems hanldeTotal={hanldeTotal} /> */}

            {listItem.length >= 1 ? (
              <>
                {" "}
                <CartItems
                  listItem={listItem}
                  hanldeRemove={hanldeRemove}
                  hanldeIncreasedQty={hanldeIncreasedQty}
                  hanldeDecreasedQty={hanldeDecreasedQty}
                  hanldeChanged={hanldeChanged}
                  hanldeSubmit={hanldeSubmit}
                />
                <CartPricingDetail totalPriceCart={totalPriceCart} />
              </>
            ) : (
              <div className="col-12 p-0">
                <div className={style.empty_cart}>
                  <Image src={emptyshoppingcart} alt="Empty Shopping Cart" />
                  <p>Your cart is currently empty.</p>
                  <a href="/shop" className={style.returntoshop}>
                    {" "}
                    Return to shop
                  </a>
                </div>
              </div>
            )}

            {/* </div> */}
            {/* <div className="col-xl-4 col-md-4 col-4"> */}

            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);
