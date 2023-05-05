import Link from "next/link"
import React from "react"
import "./microgendxInsiderComponent.css"
const MicrogendxInsiderComponent = ({ items }) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="insider_image_wrapper ">
          <Link href="#">
            <div className="mask"></div>
            <img src={items.image.src} alt="image" className="img-fluid" />
          </Link>
          <div className="image_links">
            <Link href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link href="#">
              <i className="fa-solid fa-link"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="insider_content_content">
          <h2>
            <Link href={{ pathname: `/microgendex-insider/${items.link}` }}>
              {items.heading}
            </Link>
          </h2>
          <p>{items.paragraph}</p>
          <div className="read_and_comment">
            <div className="insider_wrapper">
              <i className="fa-regular fa-comment"></i>
              <a href="#">{items.comments}</a>
              <i className="fa-solid fa-book"></i>
              <a href="#">{items.readComment}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MicrogendxInsiderComponent
