import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import loader from "../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Multiselect from "multiselect-react-dropdown";
import SunEditor from "suneditor-react";
import { ToastContainer, toast } from "react-toastify";
import { product } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const UpdateProduct = ({ data, product }) => {
  const item = data;
  // console.log(product);
  const [discription, setDiscription] = useState("");
  const [addProduct, setAddProduct] = useState({
    product_name: "",
    quantity: "",
    price: "",
    sale_price: "",
    short_description: "",
  });
  const [categories, setCategories] = useState([]);
  const [productProfile, setProductProfile] = useState("");
  const [profilImg, setPrfileImg] = useState("");
  const [productGallary, sePproductGallary] = useState([]);
  const [gallaryImages, setGallaryImages] = useState([]);

  const hanldeChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log("updateeeeeeeeeeeeeed");
    console.log({
      discription,
      categories,
      productProfile,
      productGallary,
      addProduct,
    });

    // const formData = new FormData();
    // formData.append("name", addProduct.product_name);
    // formData.append("stock_quantity", addProduct.quantity);
    // formData.append("regular_price", addProduct.price);
    // formData.append("sale_price", addProduct.sale_price);
    // formData.append("short_disc", addProduct.short_description);
    // formData.append("disc", discription);
    // formData.append("product_profile", productProfile);
    // formData.append("category", categories[0]);
    // for (let i = 0; i < productGallary.length; i++) {
    //   formData.append("gallary", productGallary[i]);
    // }

    // fetch(process.env.NEXT_PUBLIC_URL + "api/product", {
    //   method: "POST",
    //   headers: {
    //     // "Content-Type": "application/json",
    //   },
    //   body: formData,
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (data.success === 1) {
    //       dispatch(product());
    //       toast.success("Product add successfully", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "colored",
    //       });

    //       setAddProduct({
    //         product_name: "",
    //         quantity: "",
    //         price: "",
    //         sale_price: "",
    //         short_description: "",
    //       });
    //       setDiscription(null);
    //       setCategories("");
    //     }
    //   });
  };

  // FILTER GETEGORY ID
  const filterChategoryFuction = (arr) => {
    console.log(arr);
    let newarr = [];
    arr.filter((p_item) =>
      newarr.push({
        _id: p_item._id,
        name: p_item.name,
      })
    );
    setCategories(newarr);
  };

  const hanldeChangedImages = (event) => {
    if (event.target.name === "product_image") {
      setProductProfile(event.target.files[0]);
      // setPrfileImg(URL.createObjectURL(event.target.files[0]));
    } else {
      sePproductGallary(event.target.files);
    }
  };

  useEffect(() => {
    setAddProduct({
      product_name: product.data.name,
      quantity: product.data.stock_quantity,
      price: product.data.regular_price,
      sale_price: product.data.sale_price,
      short_description: product.data.short_disc,
    });
    setPrfileImg(product.data.cover_image.image_url);
    setGallaryImages(product.data.gallary);

    setDiscription(product.data.disc);
    setCategories([
      {
        _id: product.data.category._id,
        name: product.data.category.name,
      },
    ]);
  }, []);

  const hanldeDeleteImages = (name, id) => {
    console.log(name, id);
  };
  return (
    <form onSubmit={hanldeSubmit} className="add-product-form">
      <div className="pro-form-row name_pro">
        <div className="form-col">
          <label htmlFor="product_name" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Product Name"
            name="product_name"
            value={addProduct.product_name}
            onChange={hanldeChanged}
          />
        </div>
      </div>
      <div className="pro-form-row">
        <div className="form-col">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="Price"
            value={addProduct.price}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-col">
          <label htmlFor="sale_price" className="form-label">
            sale price
          </label>
          <input
            type="number"
            className="form-control"
            id="sale_price"
            name="sale_price"
            placeholder="Sale Price"
            value={addProduct.sale_price}
            onChange={hanldeChanged}
          />
        </div>
      </div>
      <div className="pro-form-row-cate">
        <div className="form-col">
          <label htmlFor="product_categores" className="form-label">
            product categories
          </label>
          <div className="product-categories">
            {item.loading ? (
              <div className="loading">
                <Image src={loader} alt="Loading" className="img-fluid" />
              </div>
            ) : item.data.length < 0 ? (
              <h2>No categores</h2>
            ) : (
              <Multiselect
                showArrow
                selectedValues={categories}
                options={item.data}
                displayValue={"name"}
                onSelect={filterChategoryFuction}
                onRemove={filterChategoryFuction}
              />
            )}
          </div>
        </div>
        <div className="form-col">
          <label htmlFor="quantity" className="form-label">
            stock quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            placeholder="Quantity"
            name="quantity"
            value={addProduct.quantity}
            onChange={hanldeChanged}
          />
        </div>
      </div>
      <div className="pro-form-row-files">
        <div className="form-col">
          <label htmlFor="product_image" className="form-label">
            Product Image
          </label>

          <input
            type="file"
            className="form-control"
            id="product_image"
            name="product_image"
            onChange={hanldeChangedImages}
          />
          <div className="imagess-preview">
            <div className="d-inline-block img-box position-relative">
              <div
                className="deletepic"
                onClick={() =>
                  hanldeDeleteImages("profile", product.data.cover_image.id)
                }
              >
                <i className="fa-solid fa-trash-can"></i>{" "}
              </div>
              <Image src={profilImg} alt="" width={150} height={150} />
            </div>
          </div>
        </div>
        <div className="form-col">
          <label htmlFor="product_gallary" className="form-label">
            Product Gallary
          </label>
          <input
            type="file"
            className="form-control"
            id="product_gallary"
            name="product_gallary"
            multiple
            onChange={hanldeChangedImages}
          />
          <div className="imagess-preview">
            {gallaryImages.map((e, i) => {
              return (
                <div
                  className="d-inline-block img-box position-relative"
                  key={i}
                >
                  <div
                    className="deletepic"
                    onClick={() => hanldeDeleteImages("gallay", e.id)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                  <Image
                    src={e.image_url}
                    alt={e.id}
                    width={150}
                    height={150}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="disc-form-row">
        <div className="form-col">
          <label
            htmlFor="short_description"
            className="form-label short_description"
          >
            product short description
          </label>
          <textarea
            className="form-control"
            id="short_description"
            name="short_description"
            placeholder="Short Description"
            value={addProduct.short_description}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-col">
          <label htmlFor="product_description" className="form-label">
            Product description
          </label>

          <div className="product-long-desction">
            <SunEditor
              onChange={setDiscription}
              setContents={discription}
              setOptions={{
                height: 300, // Set the desired height of the editor
                buttonList: [
                  ["undo", "redo"],
                  ["font", "fontSize", "formatBlock"],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    "subscript",
                    "superscript",
                  ],
                  ["removeFormat"],
                  ["fontColor", "hiliteColor", "outdent", "indent"],
                  ["align", "horizontalRule", "list", "table"],
                  ["link", "image", "video"],
                  ["fullScreen", "showBlocks", "codeView"],
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-col">
        <button type="submit" className="form-add-product-btn">
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          Update Product
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default UpdateProduct;
