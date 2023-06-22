import Image from "next/image";
import React from "react";
import "./ImagesView.css";
const ImagesView = (props) => {
  const { immmg } = props;
  return (
    <>
      <div className="image_area">
        <Image src={immmg} alt="" />
        <i className="fa-solid fa-xmark"></i>
      </div>
    </>
  );
};

export default ImagesView;
