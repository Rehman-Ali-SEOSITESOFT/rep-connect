"use client";

import { token } from "@/hooks/token";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loader from "../../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import UpdateOrder from "@/components/admin/orders/Update/UpdateOrder";
import { ToastContainer, toast } from "react-toastify";

const page = ({ params }) => {
  const { id } = params;

  const [updateOrder, setUpdateOrder] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);
  const singleOrderGet = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order/${id}`, {
      method: "GET",
      headers: {
        "x-auth-token": token(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setUpdateOrder(data.order.order);
          setIsLoading(false);
          setIsError(false);
          setOrderStatus(data.order.order.order_status);
        } else {
          setIsLoading(false);
          setIsErrorMessage(data.error.message);
        }
      });
  };
  useEffect(() => {
    singleOrderGet();
  }, []);

  const updateStatusForm = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order/${id}`, {
      method: "PUT",
      headers: {
        "x-auth-token": token(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_status: orderStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);

        if (data.success === 1) {
          toast.success("Successfully Update order", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error(data.error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        singleOrderGet();
      });
  };

  return (
    <div className="update-order pb-4">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Order Update</h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link className="back-to-product" href="/admin/order">
                <span>
                  <i className="fa-solid fa-arrow-left-long"></i>
                </span>
                back to orders
              </Link>
            </div>
          </div>
        </div>
        {isloading ? (
          <div className="loader">
            <Image src={loader} width={50} height={50} alt="loader" />
          </div>
        ) : isError ? (
          <p>{isErrorMessage}</p>
        ) : (
          <>
            <div className="row">
              <div className="col">
                <label htmlFor="form-label" className="fs-5  mb-2 fw-">
                  {" "}
                  Order Status
                </label>
                <form
                  onSubmit={updateStatusForm}
                  className="d-flex justify-content-between align-items-center mb-5 status_change"
                >
                  <select
                    name="status_change"
                    className="form-select w-75"
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                  >
                    {orderStatus === "cancelled" ? (
                      <option value="cancelled">cancelled</option>
                    ) : orderStatus === "completed" ? (
                      <option value="completed">completed</option>
                    ) : (
                      <>
                        <option value="pending">pending</option>
                        <option value="processing">processing</option>
                        <option value="cancelled">cancelled</option>
                        <option value="completed">completed</option>
                      </>
                    )}
                  </select>
                  <button type="submit" className="update-order-status-btn">
                    Update Order Status
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
            <div className="row position-relative">
              <UpdateOrder data={updateOrder} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
