"use client";

import dynamic from "next/dynamic";

const OrderCart = dynamic(
  () => import("@/components/admin/orders/orderCart/OrderCart"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <>
      <div className="admin-order-page">
        <OrderCart />
      </div>
    </>
  );
};

export default Page;
