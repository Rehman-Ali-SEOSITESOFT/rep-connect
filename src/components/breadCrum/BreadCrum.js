import React from "react"
import "./BreadCrum.css"
const BreadCrum = (props) => {
  const { breadHeading, pageName, subPage } = props
  return (
    <section className="breadcrum_wrapper">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12 text-center">
            <div className="bread_details text-center">
              <h1>{breadHeading}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0 justify-content-center">
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {subPage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BreadCrum
