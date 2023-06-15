import React, { useState } from "react";
import "./addproductform.css";
const AddProductForm = () => {
  const [addProduct, setAddProduct] = useState({
    product_name: "",
    quantity: "",
    sale_price: "",
    price: "",
  });
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log("ADD TO PRODUCT FORM");
  };
  return (
    <form onSubmit={hanldeSubmit} className="add-product-form">
      <div className="pro-form-row">
        <div class="form-col">
          <label for="product_name" class="form-label">
            Product name
          </label>
          <input
            type="text"
            class="form-control"
            id="product_name"
            name="product_name"
          />
        </div>
        <div class="form-col">
          <label for="quantity" class="form-label">
            quantity
          </label>
          <input
            type="text"
            class="form-control"
            id="quantity"
            name="quantity"
          />
        </div>
      </div>
      <div className="pro-form-row">
        <div className="form-col">
          <label for="price" class="form-label">
            price
          </label>
          <input type="text" class="form-control" id="price" name="price" />
        </div>
        <div className="form-col">
          <label for="sale_price" class="form-label">
            sale_price
          </label>
          <input
            type="text"
            class="form-control"
            id="sale_price"
            name="sale_price"
          />
        </div>
      </div>
      <div className="pro-form-row">
        <div className="form-col">
          <label for="product_categores" class="form-label">
            product categories
          </label>
          <div className="product-categories">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label class="form-check-label" for="inlineCheckbox1">
                1
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label class="form-check-label" for="inlineCheckbox2">
                2
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />
              <label class="form-check-label" for="inlineCheckbox3">
                3 (disabled)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="pro-form-row">
        <div className="form-col">
          <label for="product_image" class="form-label">
            Product Image
          </label>
          <input
            type="file"
            class="form-control"
            id="product_image"
            name="product_image"
          />
        </div>
        <div className="form-col">
          <label for="product_gallary" class="form-label">
            Product Gallary
          </label>
          <input
            type="file"
            class="form-control"
            id="product_gallary"
            name="product_gallary"
            multiple
          />
        </div>
      </div>

      <div className="pro-form-row">
        <div className="form-col">
          <label for="short_description" class="form-label">
            product short description
          </label>
          <textarea class="form-control" id="short_description" />
        </div>
        <div className="form-col">
          <label for="product_description" class="form-label">
            Product description
          </label>
          <textarea class="form-control" id="product_description" />
        </div>
      </div>
      <div className="form-col">
        <button type="submit"> add product</button>
      </div>
    </form>
  );
};

export default AddProductForm;
