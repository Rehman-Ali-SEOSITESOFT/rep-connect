import React, { useState } from "react"
import "./LikeCommentSection.css"
import like1 from "../../assets/images/singleproductsimages/like1.png"
import like3 from "../../assets/images/singleproductsimages/like3.jpeg"
import like4 from "../../assets/images/singleproductsimages/like4.png"
import like5 from "../../assets/images/singleproductsimages/like5.png"
import like6 from "../../assets/images/singleproductsimages/like6.png"
import like7 from "../../assets/images/singleproductsimages/like7.jpg"
import like8 from "../../assets/images/singleproductsimages/like8.jpg"
import like9 from "../../assets/images/singleproductsimages/like9.jpg"
import like10 from "../../assets/images/singleproductsimages/like10.png"
import comment1 from "../../assets/images/singleproductsimages/comment1.png"
import comment2 from "../../assets/images/singleproductsimages/comment2.jpg"
import comment3 from "../../assets/images/singleproductsimages/comment3.png"
import LikedBypeople from "../likedByPeople/LikedBypeople"
import BlogComments from "../blogComments/BlogComments"
const LikeCommentSection = () => {
  const [formData, setFormData] = useState({
    commentDetail: "",
  })
  const [checkBox, setCheckBox] = useState(false)

  const [likes, setLikes] = useState([
    {
      img: like1,
    },
    {
      img: like6,
    },
    {
      img: like3,
    },
    {
      img: like4,
    },
    {
      img: like5,
    },
    {
      img: like9,
    },
    {
      img: like6,
    },
    {
      img: like9,
    },
    {
      img: like7,
    },
    {
      img: like8,
    },
    {
      img: like10,
    },
  ])
  const [comments, setComments] = useState([
    {
      userIcon: comment1,
      usertitle: "Darci Simon",
      dates: "June 10,2022 at 4:52pm",
      para: "Thank you",
    },
    {
      userIcon: comment2,
      usertitle: "michaelmaitland ",
      dates: "June 10, 2022 at 5:47 pm",
      para: "Great to have a company that turns things around very quickly to address current health needs from our customers.",
    },
    {
      userIcon: comment3,
      usertitle: "larskeeley",
      dates: "June 16, 2022 at 11:26 am",
      para: "Team  We have a lot going on but nothing will help you more than developing your own ID support in your territory! Don’t believe me…just ask Luis Lopez who is on the cusp on bringing on two whoppers in new accounts. IDs know Candida Auris is a problem and they love our price point and see the value of our NGS as a pre-screening solution!   As you pursue new business/providers a local ID Ambassador will help smooth acceptance and adoption!      Good hunting!",
    },
  ])
  const [isLiked, setIsLiked] = useState(true)
  const _handleUnLiked = () => {
    setIsLiked(!isLiked)
  }
  const handleFileSelect = (e) => {
    console.log(e.target.files)
    setImage(e.target.files)
  }
  const _handleBlogDetails = (e) => {
    e.preventDefault()
    console.log("form data get", image, formData.commentDetail)
    // console.log(formData.checkBox)
    console.log("image", image)
    console.log(checkBox, "check box value is here")
  }
  const _handleCheckBox = (e) => {
    setCheckBox(!checkBox)
  }
  return (
    <>
      <div className="like_section">
        {/* <button className={styless.likebtn}> </button> */}
        <button
          className={isLiked ? "likebtn" : "isNotLiked"}
          onClick={_handleUnLiked}
        >
          {" "}
        </button>
        <span className="likes_number">+16</span>
      </div>
      <div className="liked_by_people">
        {likes.map((e, idx) => {
          return <LikedBypeople key={idx} img={e.img} />
        })}
      </div>
      {/* <div className="row">
        <div className="col-lg-12">
          <div className="comment_section">
            <h3>3 Comments</h3>
            {comments.map((e, idx) => {
              return (
                <BlogComments
                  key={idx}
                  userIcon={e.userIcon}
                  usertitle={e.usertitle}
                  dates={e.dates}
                  para={e.para}
                  isLiked
                />
              )
            })}
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-lg-12">
          <div className="leave_replay_section">
            <h3>Leave a Reply</h3>
            <p>
              Logged in as grtesting. <a href="#">Edit your profile.</a> &nbsp;
              <a href="#">Logout?</a> Required fields are marked *{" "}
            </p>
            <div className="uploadImage_section">
              <p>
                Upload attachment
                <span>
                  (Allowed file types: <strong> jpg, gif, png,</strong>
                  maximum file size:<strong> 60MB</strong>)
                </span>
                .
              </p>
              <p>
                {" "}
                <input type="file" name="files" onChange={handleFileSelect} />
              </p>
            </div>
            <div className="commentArea">
              <label className="label_input">Comment *</label>
              <form onSubmit={_handleBlogDetails}>
                <textarea
                  name="commentDetail"
                  data-bs-toggle="tooltip"
                  data-bs-placement="center"
                  title="Please fill out this field"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  value={formData.commentDetail}
                  onChange={(e) => handleInput(e)}
                ></textarea>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      value={checkBox}
                      onChange={(e) => _handleCheckBox(e)}
                    />
                    Notify me of followup comments via e-mail. You can also{" "}
                    <a href="#">subscribe</a> &nbsp; without commenting
                  </label>
                </p>
                <input
                  type="submit"
                  name="Post Comment"
                  value="Post Comment"
                  className="button_submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LikeCommentSection
