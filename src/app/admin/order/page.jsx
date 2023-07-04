"use client";

import { token } from "@/hooks/token";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const OrderCart = dynamic(
  () => import("@/components/admin/orders/orderCart/OrderCart"),
  {
    ssr: false,
  }
);
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [orders, setOrders] = useState([]);
  const getAllOrders = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order`, {
      method: "GET",
      headers: {
        "x-auth-token": token(),
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.success === 1) {
          setIsLoading(false);
          setIsError(false);
          setOrders(data.data.orders);
        } else {
          setIsError(true);
          setIsLoading(true);
          setErrorMessage(data.message);
        }
      });
  };
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div className="admin-order-page">
        {isError ? <h1>{errorMessage}</h1> : <OrderCart orders={orders} />}
      </div>
    </>
  );
};

export default Page;
