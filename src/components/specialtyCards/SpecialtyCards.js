import React from "react"
import "./SpecialtyCard.css"
const SpecialtyCards = (props) => {
  const { specialimg, specialHeading } = props
  return (
    <>
      <div className="specialty_cards_wrapper">
        <a href="#">
          <div className="specialty_img">
            <img src={specialimg} alt="image" className="img-fluid" />
          </div>
          <h2>{specialHeading}</h2>
        </a>
      </div>
    </>
  )
}

export default SpecialtyCards
