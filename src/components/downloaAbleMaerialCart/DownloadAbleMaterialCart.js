import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./DownloadAbleMaterialCart.css";
const DownloadAbleMaterialCart = ({ item }) => {
  return (
    <div className="DownloadAbleMaterialCart">
      <Link href="/">
        <div className="image_wrapper">
          <Image src={item.img} alt={item.name} className="img-fluid" />
        </div>
        <div className="desc_wrapper">
          <h4 className="title">{item.name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default DownloadAbleMaterialCart;
