"use client";
import React, { useState } from "react";
import "./ProductDetail.css";
import img1 from "../../assets/images/download-category/MicroGenDX-COVID-19-Testing-Icon.png";
import Image from "next/image";

const ProductDetail = (props) => {
  const [qty, setQty] = useState(1);
  const [defalutLoading, setDefaultLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const hanldeAddToCart = () => {
    setDefaultLoading(true);
    setloading(true);
  };
  setTimeout(() => {
    setloading(false);
  }, [6000]);
  return (
    <section className="ProductDetail">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <figure className="deail--product">
              <div className="deail--product--image">
                <Image
                  src={img1}
                  alt="for testing image"
                  className="img-fluid"
                />
              </div>
            </figure>
          </div>
          <div className="col-9">
            <div className="deail--product--desc">
              <h4 className="title--clas">GI Test Service</h4>
              <p>
                This test service is available to United States residents only.
                All submitted lab requisition forms must have a qualified*
                physician’s signature on the lab requisition form or the
                submitted sample will not be run/processed at the MicroGenDX
                Laboratory. To learn more
                <a href="#">CLICK HERE</a>
              </p>
              <div className="product--add--cart d-flex align-items-center">
                <div className="quanitiy--detail">
                  <span
                    className="quantitay-change minus"
                    onClick={decrementQty}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </span>
                  <input
                    type="text"
                    value={qty}
                    className="product-qantity"
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <span
                    className="quantitay-change minus"
                    onClick={incrementQty}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className="quanity-btn">
                  <button
                    className={`add--to--cart`}
                    onClick={hanldeAddToCart}
                    style={{
                      opacity: loading ? "0.5" : 1,
                    }}
                  >
                    Add to cart
                    {defalutLoading ? (
                      <>
                        {loading ? (
                          <span className="loader"></span>
                        ) : (
                          <span className="btn--icon">
                            <i className="fa-solid fa-check"></i>
                          </span>
                        )}
                      </>
                    ) : null}
                  </button>
                </div>
              </div>
              <div className="single--product--detail--tabs">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item sss--gr--single--deail">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Description
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul
                          className="nav nav-pills mb-3  discription--tabs--product--detail"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-home"
                              type="button"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                              tabIndex={0}
                            >
                              What does this test look for?
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                              tabIndex={0}
                            >
                              Test Type
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-contact-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-contact"
                              type="button"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                              tabIndex={0}
                            >
                              Main infections
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="pills-sample-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-sample"
                              type="button"
                              role="tab"
                              aria-controls="pills-sample"
                              aria-selected="false"
                              tabIndex={0}
                            >
                              Sample type
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                            tabIndex="0"
                          >
                            ... What does this test look for?
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabIndex="0"
                          >
                            Test Type
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                            tabIndex="0"
                          >
                            Main infections
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-sample"
                            role="tabpanel"
                            aria-labelledby="pills-sample-tab"
                            tabIndex="0"
                          >
                            sample
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item sss--gr--single--deail">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Additional information
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
