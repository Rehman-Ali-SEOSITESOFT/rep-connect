import React from "react";
import "./addproductcategory.css";
import UploadIcon from "../../uploadIcons/UploadIcon";
const AddProductCategory = () => {
  const hanldeOpenPopup = () => {
    console.log("hello");
  };
  return (
    <form className="add-pro-cate">
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
          />
        </div>
        <div className="form-col">
          <label htmlFor="parent" className="form-label">
            Parent Category
          </label>
          <select name="parent" className="form-select">
            <option value=""> Parent Name</option>
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
      <div className="w-100 ">
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
