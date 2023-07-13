import React, { useState } from "react";
import UploadIcon from "../../uploadIcons/UploadIcon";
import "./viewProCate.css";
import Image from "next/image";

const ViewProCategory = () => {
  const hanldeOpenPopup = () => {
    console.log("open up open");
  };
  const hanldeUpdateCategory = () => {
    console.log("updating");
  };
  const [cateName, setCateName] = useState(null);
  const [parentCateName, setParentCateName] = useState(null);
  const [cateImage, setCateImage] = useState(null);
  const [cateImageId, setCateImageID] = useState(null);
  return (
    <form className="add-pro-cate-view" onSubmit={hanldeUpdateCategory}>
      <div className="pro-cate-form-row-view">
        <div className="form-col">
          <label htmlFor="CategoryName" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="CategoryName"
            name="CategoryName"
            placeholder="CategoryName"
            value={cateName}
            onChange={(e) => setCateName(e.target.value)}
          />
        </div>
        <div className="form-col">
          <label htmlFor="parent" className="form-label">
            Parent Category
          </label>
          <select
            name="parent"
            className="form-select"
            onChange={(e) => setParentCateName(e.target.value)}
            defaultValue={null}
            value={parentCateName}
          >
            <option selected> --select--</option>
            <option value="parent"> Parent Name</option>
          </select>
        </div>
      </div>
      <div className="pro-cate-form-row-update">
        <div className="form-col">
          <label htmlFor="sale_price" className="form-label">
            Category Image
          </label>
          <div className="upload-iconss">
            <Image alt="" src="" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ViewProCategory;
