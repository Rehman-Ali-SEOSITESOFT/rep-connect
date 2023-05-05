import React from "react"
import Image from "next/image"
import "./HomePagePosts.css"
import Link from "next/link"
const HomePagePosts = ({ item, index }) => {
  return (
    <>
      <div className="post_wrapper">
        <div className="post_wrapper_inner">
          <div className="image_wrapper">
            <div className="overlay"></div>
            <Link href={{ pathname: `/${item.link}` }}>
              <Image
                src={item.postImage}
                alt="post image"
                className="img-fluid "
              />
            </Link>
            <div className="image_links double">
              <a href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <Link href={{ pathname: `/blog/${item.link}` }}>
                <i className="fa-solid fa-link"></i>
              </Link>
            </div>
          </div>
          <div className="post_details_section">
            <h2>
              <Link href={{ pathname: `/blog/${item.link}` }}>
                {item.postHeading}
              </Link>
            </h2>
            <p>{item.postDetail}</p>
          </div>
        </div>
        <div className="post_footer">
          <div className="like">
            <i className="fa-regular fa-thumbs-up"></i>
            <a href="#">{item.likes}</a>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <a href="#">{item.postcomment}</a>
          </div>
          <div className="read_more">
            <i className="fa-solid fa-book"></i>
            <Link href={{ pathname: `/blog/${item.link}` }}>{item.readmore}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePagePosts
