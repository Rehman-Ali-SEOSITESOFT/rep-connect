import React from "react"
import "./MicroInsderRecentPosts.css"

const MicroInsderRecentPosts = (props) => {
  const { recentPostImages, recentPostTitle, recentTime } = props
  return (
    <>
      <div className="list_for_recent_post">
        {/* <a href="#" className="recent_page_image_wrapper"> */}
        <img src={recentPostImages} alt="Iamge" className="img-fluid " />
        {/* </a> */}
        <div>
          <h3 className="recent_post_title_wrapper">
            <a href="#">{recentPostTitle}</a>
          </h3>
          <time>{recentTime}</time>
        </div>
      </div>
    </>
  )
}

export default MicroInsderRecentPosts
