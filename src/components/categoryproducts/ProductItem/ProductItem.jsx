import React, { useState } from "react";
import "./producitem.css";
import Image from "next/image";
const ProductItem = ({ item }) => {
  let linkTesing = item.name.split(" ").join("-").toLowerCase();
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
            target="_blank"
            href={`/product-detail/${linkTesing}`}
            className="product--gr--link"
          >
            <Image src={item.img} alt="product" className="img-fluid" />
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
            <a href={`/product-detail/${linkTesing}`} target="_blank">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
        <div className="product--gr--title">
          <a href={`/product-detail/${linkTesing}`} target="_blank">
            {item.name}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
