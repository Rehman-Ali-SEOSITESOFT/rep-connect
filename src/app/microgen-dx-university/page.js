"use client";
import Image from "next/image";
import React, { useState } from "react";
import styless from "./university.module.css";
import unilogo from "../../assets/images/microgendxuniversity/microgendxuniversity.png";
import homestudy from "../../assets/images/microgendxuniversity/at-home-study.jpg";
import fieldride from "../../assets/images/microgendxuniversity/field-ride.jpg";
import className from "../../assets/images/microgendxuniversity/classroom-study.jpg";
import MicrogenDx from "@/components/microgenDxUniversity/MicrogenDxUniversity";
import MicrogenDxUniversity from "@/components/microgenDxUniversity/MicrogenDxUniversity";
import UniversityLinks from "@/components/universityLinks/UniversityLinks";
import Link from "next/link";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth"

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
  ]);
  const [trainingLinks, setGeneralLinks] = useState([
    {
      title: "Basic Training",
      link: "basic-training/",
    },
    {
      title: "Advanced Training",
      link: "sales-training/",
    },
    {
      title: "Antibiotics 101",
      link: "antibiotics-101/",
    },
    {
      title: "Antibiotics 102",
      link: "antibiotics-102/",
    },
    {
      title: "Biofilm Training",
      link: "biofilm-training-research/",
    },
    {
      title: "Pronunciation of Species",
      link: "pronunciations-of-panel-species/",
    },
    {
      title: "Science of MicroGenDX",
      link: "science-of-microgen-dx/",
    },
  ]);
  const [link_list, setLintList] = useState([
    {
      title: "Effectively Using Sales Material",
      link: "effectively-using-sales-material/",
    },
    {
      title: "Hear From Your Peers",
      link: "hear-from-your-peers/",
    },
    {
      title: "Kristie Fuller's Sales Training Presentation",
      link: "kristie-fuller's-sales-training-presentation/",
    },
    {
      title: "Rick's Roundtable Discussions",
      link: "rick's-roundtable-discussions/",
    },
    {
      title: "Sales by Specialty",
      link: "sales-by-specialty/",
    },
    {
      title: "Sales Training Presentations",
      link: "sales-training-presentations/",
    },
  ]);

  const [contineEducation,setContineEducation]=useState([
    {
      title: "Preceptorships",
      link: "microgen-dx-university/preceptorships/",
    },
    {
      title: "MicroGenDX Minute",
      link: "microgendx-minute/",
    },
    {
      title: "Using the MDX Lab Portal",
      link: "using-the-mdx-lab-portal/",
    },
    {
      title: "Webinars",
      link: "webinars",
    },
  ])

  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX University"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MicroGenDX University",
            link: "/",
          },
        ]}
      />
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
              );
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
                  {trainingLinks.map((e, idx) => {
                    return <UniversityLinks key={idx} item={e} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styless.sales_focussed}>
                <h3>Sales Focussed Training</h3>
                <ul>
                  {/* {
                    link_list.map((e,id)=>{
                      return(
                        <li key={id}> <Link href={`/microgen-university/${e.link}`} >{e.title}</Link>  </li>
                      )
                    })
                  } */}
                  <li>
                    <Link href={`/microgen-university/${link_list[0].link}`}>
                      {link_list[0].title}
                    </Link>
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
                    <a href={`/sales-resources-by-speciality`}>{link_list[4].title} </a>
                  </li>
                  <li>
                    <Link href="/sales-training"> {link_list[5].title} </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styless.sales_focussed}>
                <h3>Continued Education</h3>
                <ul>
                  <li>
                    <a href="/preceptorships">Preceptorships</a>
                  </li>
                  <li>
                    <Link href="">MicroGenDX Minute</Link>
                  </li>
                  <li>
                    <Link href="/using-the-mdx-lab-portal">
                      Using the MDX Lab Portal
                    </Link>
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
  );
};

export default withAuth(page);
