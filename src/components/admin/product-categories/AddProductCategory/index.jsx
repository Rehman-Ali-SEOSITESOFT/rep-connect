import React, { useState } from "react";
import "./addproductcategory.css";
import UploadIcon from "../../uploadIcons/UploadIcon";
const AddProductCategory = () => {
  const [cateName, setCateName] = useState(null);
  const [parentCateName, setParentCateName] = useState(null);
  const [cateImage, setCateImage] = useState(null);
  const [cateImageId, setCateImageID] = useState(null);
  const hanldeOpenPopup = () => {
    console.log("hello");
  };
  const hanldeAddNewCategory = (e) => {
    e.preventDefault();
    const formDetail = {
      name: cateName,
      parentId: parentCateName,
      image: cateImageId,
    };
    console.log(formDetail);
  };

  return (
    <form className="add-pro-cate" onSubmit={hanldeAddNewCategory}>
      <div className="pro-cate-form-row">
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
      <div className="pro-cate-form-row">
        <div className="form-col">
          <label htmlFor="sale_price" className="form-label">
            Category Image
          </label>
          <div className="upload-iconss" onClick={hanldeOpenPopup}>
            <UploadIcon />
          </div>
        </div>
      </div>
      <div className="w-100 mt-3">
        <button type="submit" className="form-add-product-btn">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          add product
        </button>
      </div>
    </form>
  );
};

export default AddProductCategory;
