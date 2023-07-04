"use client";
import ViewOrder from "@/components/admin/orders/view/ViewOrder";
import { token } from "@/hooks/token";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [viewOrder, setViewOrder] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const singleOrderGet = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order/${id}`, {
      method: "GET",
      headers: {
        "x-auth-token": token(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setViewOrder(data.order.order);
      });
  };
  useEffect(() => {
    singleOrderGet();
  }, []);

  return (
    <div className="order-view">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Order Detail</h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link className="back-to-product" href="/admin/order">
                <span>
                  <i class="fa-solid fa-arrow-left-long"></i>
                </span>
                back to orders
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <ViewOrder />
        </div>
      </div>
    </div>
  );
};

export default page;
