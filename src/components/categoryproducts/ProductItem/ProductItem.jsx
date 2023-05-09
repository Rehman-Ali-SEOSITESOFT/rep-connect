import React, { useState } from "react";
import "./producitem.css";
import Image from "next/image";
import marsa from "../../../assets/images/products/mrsa-test-service.jpg";
const ProductItem = ({ item }) => {
  const [loadging, setLoaging] = useState(false);
  const hanldeAddToCart = () => {
    console.log("working");
    setLoaging(true);
  };
  setTimeout(() => {
    setLoaging(false);
  }, 5000);
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 product__item">
        <div className="product_gr__items">
          <a
            href={`/product-detail/${item._id}`}
            className="product--gr--link position-relative d-block"
          >
            <Image
              // src={marsa}
              src={item.cover_image.image_url}
              alt="product"
              className="img-fluid object-fit-cover"
              fill
            />
            <div className="product_overlay_mask"></div>
            {loadging && (
              <div className="product--loadig--style">
                <div className="loading"></div>
              </div>
            )}
          </a>
          <div className="product_links">
            {loadging ? (
              <span>
                <div className="product-loader"></div>
              </span>
            ) : (
              <span onClick={hanldeAddToCart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            )}
            <a href={`/product-detail/${item._id}`}>
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
        <div className="product--gr--title">
          <a href={`/product-detail/${item._id}`}>{item.name}</a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
