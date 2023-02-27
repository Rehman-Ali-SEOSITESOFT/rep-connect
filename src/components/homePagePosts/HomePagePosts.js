import React from "react"
import Image from "next/image"
import "./HomePagePosts.css"
const HomePagePosts = (props) => {
  const { postImage, postHeading, postDetail, likes, postcomment, readmore } =
    props
  return (
    <>
      <div className="post_wrapper">
        <div className="post_wrapper_inner">
          <Image src={postImage} alt="post image" className="img-fluid " />
          <div className="post_details_section">
            <h2>
              <a href="#"> {postHeading}</a>
            </h2>
            <p>{postDetail}</p>
          </div>
        </div>
        <div className="post_footer">
          <div className="like">
            <i className="fa-regular fa-thumbs-up"></i>
            <a href="#">{likes}</a>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <a href="#">{postcomment}</a>
          </div>
          <div className="read_more">
            <i className="fa-solid fa-book"></i>
            <a href="#">{readmore}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePagePosts
