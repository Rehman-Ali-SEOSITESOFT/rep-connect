"use client";

import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import ProductDetail from "@/components/product_detail/ProductDetail";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import withAuth from "@/utils/auth";
const page = ({ params }) => {
  const { id } = params;

  const [singleProduct, setSingleProduct] = useState({
    loading: true,
    data: {},
    error: "",
    success: "",
  });
  const [name, setName] = useState(null);
  const hanldeGetSingleProduct = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product/${id}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.success === 0) {
          setSingleProduct({ ...singleProduct, error: data.error.message });
        } else {
          setSingleProduct({
            ...singleProduct,
            loading: false,
            data: data.data.product,
            success: data.message,
          });
          setName(data.data.product.name);
        }
      });
  };

  useEffect(() => {
    hanldeGetSingleProduct();
  }, []);

  return (
    <>
      <BreadCrum
        breadHeading="Shop"
        pagess={[
          { page: "Home", link: "/" },
          { page: name, link: "/" },
        ]}
      />
      <section className={style.product_deail_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div className={style.product_deail_wrapper}>
                <ProductDetail item={singleProduct} />
                {/* <AsideWidget /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);
