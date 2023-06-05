"use client";
import BlogFilters from "@/components/blogs/Filter/BlogFilters";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/blogs/blog-2.png";
import blo2 from "../../../assets/images/blogs/JBJS-Folder.jpg";
import TagsItem from "@/components/blogs/Tags/Tagsitem/TagsItem";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";

const page = ({ params }) => {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  // const withoutdash = id.split("-").join(" ");

  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/post`)
      .then((resp) => {
        console.log(resp.data.data.post);
        setBlogs(resp.data.data.post);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <BreadCrum
        breadHeading={"tags"}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "tags",
            link: "/",
          },
        ]}
      />

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="category-page global-width-res">
            <BlogFilters />
            <div className="container-xxl">
              <div className="row">
                <div className="col">
                  <div className="categores-blog-wrapper">
                    {blog?.map((e, i) => {
                      return <TagsItem key={i} item={e} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default withAuth(page);
