import React from "react";
import "./CategoryItem.css";
import img1 from "../../../../assets/images/Courses/business-development.jpg";
import Image from "next/image";
const CategoryItem = ({ item }) => {
  let name = item.name.split(" ").join("-").toLowerCase();
  return (
    <div className="item-category-blog d-flex overflow-hidden flex-lg-row flex-md-row flex-sm-column">
      <div className="image-side w-25">
        <a href={`/blog/${name}`} className="img-side-link">
          <Image src={img1} alt="img1" className="img-fluid" />
          <div className="img-side-overlay"></div>
        </a>
        <div className="img-side-linkss ">
          <span className="d-inline-block w-50">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <a href={`/blog/${name}`} className="d-inline-block w-50">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
      <div className="content-side w-75">
        <a href={`/blog/${name}`} className="title-content">
          {item.name}{" "}
        </a>
        <p>{item.desc}</p>
        <div class="post-footer">
          <div class="post-links">
            <span>
              <i class="fa-regular fa-comment" />
              <a href={`/blog/${name}/#likes`}>0</a>
            </span>
            <span>
              <i class="fa-regular fa-file-lines" />
              <a href={`/blog/${name}/#comments`}>read more</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
