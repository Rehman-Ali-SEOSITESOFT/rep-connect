import React, { useState } from "react"
import Image from "next/image"
import "./BlogComments.css"
const BlogComments = (props) => {
  const { userIcon, usertitle, link, dates, link2, para } = props
  const [isLikedd, setIsLikeddd] = useState(true)
  const _handleUnLikedd = () => {
    setIsLikeddd(!isLikedd)
  }
  return (
    <>
      <div className="comment_wrapper_detail">
        <div className="image_comment">
          <Image src={userIcon} alt="icon" className="img-fluid" />
        </div>

        <div className="user_detail_section_wrapper">
          <div className="user_inner_detail">
            <h4>
              {usertitle} <span>says:</span>
            </h4>
            <a href={link} className="date_comment_section">
              {dates}
            </a>
            <p className="user_commented">{para}</p>
            <div className="like_sections">
              {/* <button className="likebtn"> </button>
               */}
              <button
                className={`${isLikedd ? "likebtn" : "isNotLiked"}`}
                onClick={_handleUnLikedd}
              >
                {" "}
              </button>
              <span className="likes_number">+3</span>
            </div>
          </div>
          <div className="replay">
            <a href={link2}>Reply</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogComments
