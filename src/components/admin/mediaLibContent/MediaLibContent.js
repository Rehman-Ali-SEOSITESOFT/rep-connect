import React from "react";
import Image from "next/image";
import "./MediaLibContent.css";
const MediaLibContent = (props) => {
  const { image, id, _handleGettingId, selectedImage } = props;

  return (
    <div
      className={`image_section ${
        selectedImage.filter((item) => item === id).length > 0
          ? "addBorder"
          : ""
      }`}
    >
      <Image
        src={image}
        alt=""
        className={`image_`}
        width={120}
        height={120}
        onClick={() => _handleGettingId(id)}
      />
    </div>
  );
};

export default MediaLibContent;
