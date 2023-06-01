import React, { useEffect } from "react";
import "./AuthorsItem.css";
import Image from "next/image";
import axios from "axios";
const AuthorsItem = ({ item }) => {
  let name = item.name.split(" ").join("-").toLowerCase();
  console.log(item);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_URL}api/post/${item.slug}`)
  //     .then((resp) => console.log(resp.data.data.post.slug))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="item-category-blog d-flex overflow-hidden flex-lg-row flex-md-row flex-sm-row flex-column">
      <div className="image-side w-25">
        <a href={`/blog/${name}`} className="img-side-link">
          <Image src={item.img} alt="img1" className="img-fluid" />
          <div className="img-side-overlay"></div>
        </a>
        <div className="img-side-linkss ">
          <span className="d-inline-block w-50">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <a href={`/blog/${name}`} className="d-inline-block w-50">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
      <div className="content-side">
        <a href={`/blog/${name}`} className="title-content">
          {item.name}{" "}
        </a>
        <p>{item.desc}</p>
        <div className="post-footer">
          <div className="post-links">
            <span>
              <i className="fa-regular fa-comment" />
              <a href={`/blog/${name}/#likes`}>0</a>
            </span>
            <span>
              <i className="fa-regular fa-file-lines" />
              <a href={`/blog/${name}/#comments`}>read more</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsItem;
