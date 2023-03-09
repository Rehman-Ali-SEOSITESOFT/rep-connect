"use client";
import React from "react";
import "./ProductDetail.css";
import img1 from "../../assets/images/download-category/MicroGenDX-COVID-19-Testing-Icon.png";
import ReactImageMagnify from "react-image-magnify";
const ProductDetail = (props) => {
  return (
    <section className="ProductDetail">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <figure className="deail--product">
              <div className="deail--product--image">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: img1.src,
                    },
                    largeImage: {
                      src: img1.src,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </div>
            </figure>
          </div>
          <div className="col-9">
            <div className="deail--product--desc">
              <h4>GI Test Service</h4>
              <p>
                This test service is available to United States residents only.
                All submitted lab requisition forms must have a qualified*
                physician’s signature on the lab requisition form or the
                submitted sample will not be run/processed at the MicroGenDX
                Laboratory. To learn more
                <a href="#">CLICK HERE</a>
              </p>
              <div className="product--add--cart">
                <span className="quantitay-change minus">
                  <i className="fa-solid fa-minus"></i>
                </span>
                <span className="product-qantity">
                  <input type="text" />
                </span>
                <span className="quantitay-change minus">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
