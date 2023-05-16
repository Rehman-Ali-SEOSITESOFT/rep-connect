"use client";
import BlogFilters from "@/components/blogs/Filter/BlogFilters";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import blog1 from "../../../assets/images/blogs/blog-2.png";
import blo2 from "../../../assets/images/blogs/JBJS-Folder.jpg";
import AuthorsItem from "@/components/blogs/Authors/Authorsitem/AuthorsItem";

const page = ({ params }) => {
  const { id } = params;
  const withoutdash = id.split("-").join(" ");
  const [blog, setBlogs] = useState([
    {
      name: "starting off 2018 breaking records!",
      desc: "thank you !! your hard work and dedication this new year is showing itself in another new record breaking month! we are excited to see how high we",
      img: blog1,
      comment: 0,
    },
    {
      name: "Have you acted on the opportunity of our landmark study in JBJS? ",
      desc: "It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey",
      img: blo2,
      comment: 1,
    },
    {
      name: "It has been a month since the publication in JB&JS of our first major study on PJIs",
      desc: "It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey  We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey  We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey  We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey It has been a month since the publication in JB&JS of our first major study on PJIs. We sent you the key messages to convey",
      img: blo2,
      comment: 1,
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading={withoutdash}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: withoutdash,
            link: "/",
          },
        ]}
      />
      <section className="category-page global-width-res">
        <BlogFilters />
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <div className="categores-blog-wrapper">
                {blog.map((e, i) => {
                  return <AuthorsItem key={i} item={e} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);
