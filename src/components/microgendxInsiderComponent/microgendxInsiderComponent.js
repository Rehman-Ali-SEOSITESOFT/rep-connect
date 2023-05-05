import Link from "next/link"
import React from "react"
import "./microgendxInsiderComponent.css"
const MicrogendxInsiderComponent = (props) => {
  // console.log("props:", props)
  return (
    <>
      <div className="col-lg-5">
        <div className="insider_image_wrapper ">
          <Link href="#">
            <div className="mask"></div>
            <img src={props.items.image.src} alt="image" className="img-fluid" />
          </Link>
          <div className="image_links">
            {/* <Link href="#"> */}
            <div onClick={props.popFunction}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {/* </Link> */}
            <Link href="#">
              <i className="fa-solid fa-link"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="insider_content_content">
          <h2>
            <Link href={{ pathname: `/microgendex-insider/${props.items.link}` }}>
              {props.items.heading}
            </Link>
          </h2>
          <p>{props.items.paragraph}</p>
          <div className="read_and_comment">
            <div className="insider_wrapper">
              <i className="fa-regular fa-comment"></i>
              <a href="#">{props.items.comments}</a>
              <i className="fa-solid fa-book"></i>
              <a href="#">{props.items.readComment}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MicrogendxInsiderComponent
