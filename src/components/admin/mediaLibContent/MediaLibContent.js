import React from "react";
import Link from "next/link";
import Image from "next/image";
const MediaLibContent = (props) => {
  const { image } = props;
  return (
    <Link href="#" className="image_section">
      <Image src={image} alt="" className="image_" />
    </Link>
  );
};

export default MediaLibContent;
