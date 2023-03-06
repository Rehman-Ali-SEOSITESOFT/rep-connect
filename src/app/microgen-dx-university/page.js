"use client"
import Image from "next/image"
import React, { useState } from "react"
import styless from "./university.module.css"
import unilogo from "../../assets/images/microgendxuniversity/microgendxuniversity.png"
import homestudy from "../../assets/images/microgendxuniversity/at-home-study.jpg"
import fieldride from "../../assets/images/microgendxuniversity/field-ride.jpg"
import className from "../../assets/images/microgendxuniversity/classroom-study.jpg"
import MicrogenDxUniversity from "@/components/microgenDxUniversity/MicrogenDxUniversity"
const page = () => {
  const [cardDetail, setCardDetail] = useState([
    {
      cardImage: homestudy,
      card_heading: "Home study",
      link: "home-study-101/",
    },
    {
      cardImage: fieldride,
      card_heading: "field ride",
      link: "field-ride-102/",
    },
    {
      cardImage: className,
      card_heading: "classroom",
      link: "classroom-training-103/",
    },
  ])
  return (
    <>
      <section className={styless.mircoUniversity_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 ">
              <div className={styless.university_wrapper}>
                <Image
                  src={unilogo}
                  alt="univeristy logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styless.uni_heading}>
                <h2>Welcome Aboard Training</h2>
              </div>
            </div>
          </div>
          <div className={`row ${styless.row_section_uni}`}>
            {cardDetail.map((e, idx) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <MicrogenDxUniversity key={idx} item={e} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={styless.fancy_heading}>
                <h2>MicroGenDX Training & Education</h2>
              </div>
            </div>
          </div>
          <div className={`row border-bottom   ${styless.train_section}`}>
            <div className="col-lg-4">
              <div className={styless.general_training}>
                <h3>General Training</h3>
                <ul>
                  <li>
                    <a href="#">Basic Training</a>
                  </li>
                  <li>
                    <a href="#">Advanced Training</a>
                  </li>
                  <li>
                    <a href="#">Antibiotics 101</a>
                  </li>
                  <li>
                    <a href="#">Antibiotics 102</a>
                  </li>
                  <li>
                    <a href="#">Biofilm Training</a>
                  </li>
                  <li>
                    <a href="#">Pronunciation of Species</a>
                  </li>
                  <li>
                    <a href="#">Science of MicroGenDX</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styless.sales_focussed}>
                <h3>Sales Focussed Training</h3>
                <ul>
                  <li>
                    <a href="#">Effectively Using Sales Material</a>
                  </li>
                  <li>
                    <a href="#">Hear From Your Peers</a>
                  </li>
                  <li>
                    <a href="#">Kristie Fuller's Sales Training Presentation</a>
                  </li>
                  <li>
                    <a href="#">Rick's Roundtable Discussions</a>
                  </li>
                  <li>
                    <a href="#">Sales by Specialty</a>
                  </li>
                  <li>
                    <a href="#">Sales Training Presentations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styless.sales_focussed}>
                <h3>Continued Education</h3>
                <ul>
                  <li>
                    <a href="#">Preceptorships</a>
                  </li>
                  <li>
                    <a href="#">MicroGenDX Minute</a>
                  </li>
                  <li>
                    <a href="#">Using the MDX Lab Portal</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
