import React from "react";
import Image from "next/image";
import "./HomePagePosts.css";
import Link from "next/link";
const HomePagePosts = ({ item, index }) => {
  console.log(item, "items for home page");
  return (
    <>
      <div className="post_wrapper">
        <div className="post_wrapper_inner">
          <div className="image_wrapper">
            <div className="overlay"></div>
            <Link href={{ pathname: `/${item.link}` }}>
              <Image
                src={item.featured_image?.image_url}
                alt="post image"
                className="img-fluid "
                width={100}
                height={100}
              />
            </Link>
            <div className="image_links double">
              <Link href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link href={{ pathname: `/blog/${item.slug}` }}>
                <i className="fa-solid fa-link"></i>
              </Link>
            </div>
          </div>
          <div className="post_details_section">
            <h2>
              <Link href={{ pathname: `/blog/${item.slug}` }}>
                {item.title}
              </Link>
            </h2>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="post_footer">
          <div className="like">
            <i className="fa-regular fa-thumbs-up"></i>
            <Link href="#">{item.post_liked.length}</Link>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <a href="#">{item.postcomment}</a>
          </div>
          <div className="read_more">
            <i className="fa-solid fa-book"></i>
            <Link href={{ pathname: `/blog/${item.slug}` }}>Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePosts;
