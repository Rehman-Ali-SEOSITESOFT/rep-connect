"use client";
import React, { useState } from "react";
import style from "./request.module.css";
import standardkits from "../../assets/images/request-kit-supplies/request-kit-physician.jpg";
import individual from "../../assets/images/request-kit-supplies/request-supplies.jpg";
import labreq from "../../assets/images/request-kit-supplies/lab-req-2020-thumb.jpg";
import Link from "next/link";
const page = () => {
  const [reqKits, setReqKits] = useState([
    {
      name: "Request Standard Kits",
      link: "/product-category/request-office-hospital-kits/",
      img: standardkits,
    },
    {
      name: "Request Individual Supplies",
      link: "product-category/individual-kit-items/",
      link: individual,
    },
    {
      name: "Pre-Filled Lab Req ",
      link: "/product/pre-filled-lab-req/",
      link: labreq,
    },
  ]);
  return (
    <section className={style.request_kit_supplies}>
      <div className="container-xxl">
        <div className={`row ${style.request_kit_post_wrapper}`}>
          {reqKits.map((element, index) => {
            return (
              <div className="col-lg-4 col-md-4 col-md-6" key={index}>
                <div className="image_wrapper">
                  <Link href="/">
                    <img className="" src="" />
                  </Link>
                  <div className="image_links "></div>
                </div>
                <div className="wp-caption-text"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
