"use client";
import React, { useEffect, useState } from "react";
import "./cart_bread_crum.css";
const BreadCrumCart = () => {
  let addclass = window.location.pathname;

  return (
    <div className="cart_bread_crum">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li
            className={`breadcrumb-item  ${
              addclass === "/cart"
                ? "active"
                : addclass !== "/cart"
                ? "checked"
                : null
            }`}
          >
            <span className="step-number">1</span>
            <span className="step-text">Cart</span>
          </li>
          <li
            className={`breadcrumb-item  ${
              addclass === "/checkout"
                ? "active"
                : addclass === "/order-received"
                ? "checked"
                : null
            }`}
          >
            <span className="step-number">2</span>
            <span className="step-text">Checkout</span>{" "}
          </li>
          <li
            className={`breadcrumb-item  ${
              addclass === "/order-received" ? "active" : null
            }`}
          >
            <span className="step-number">3</span>
            <span className="step-text"> Order</span>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumCart;
