import React, { useEffect, useState } from "react";
import "./addproductform.css";
import loader from "../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Multiselect from "multiselect-react-dropdown";
import SunEditor from "suneditor-react";
import { ToastContainer, toast } from "react-toastify";
import { product } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const AddProductForm = ({ data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const item = data;
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
  const [productGallary, sePproductGallary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hanldeChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };
  const hanldeSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", addProduct.product_name);
    formData.append("stock_quantity", addProduct.quantity);
    formData.append("regular_price", addProduct.price);
    formData.append("sale_price", addProduct.sale_price);
    formData.append("short_disc", addProduct.short_description);
    formData.append("disc", discription);
    formData.append("product_profile", productProfile);
    formData.append("category", categories[0]);
    for (let i = 0; i < productGallary.length; i++) {
      formData.append("gallary", productGallary[i]);
    }

    fetch(process.env.NEXT_PUBLIC_URL + "api/product", {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
      },
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success === 1) {
          dispatch(product());
          toast.success("Product add successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setAddProduct({
            product_name: "",
            quantity: "",
            price: "",
            sale_price: "",
            short_description: "",
          });
          setDiscription(null);
          setCategories("");
          setIsLoading(false);
          setTimeout(() => {
            router.push("/admin/product");
          }, 1500);
        } else {
          setIsLoading(false);
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }

        if (data.success === 0) {
          setIsLoading(false);
          toast.error(data.error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  // FILTER GETEGORY ID
  const filterChategoryFuction = (arr) => {
    let newarr = [];
    arr.filter((p_item) => newarr.push(p_item._id));
    setCategories(newarr);
  };
  // const hanldeCategory = (arr, item) => {
  // let newarr = [];
  // arr.filter((p_item) => newarr.push(p_item._id));
  // setCategories(newarr);
  //   filterChategoryFuction(arr);
  // };
  // const hanldeRemove = (arr, item) => {
  //   filterChategoryFuction(arr);
  // let newarr = [];
  // arr.filter((p_item) => newarr.push(p_item._id));
  // setCategories(newarr);
  // };

  const hanldeChangedImages = (event) => {
    if (event.target.name === "product_image") {
      setProductProfile(event.target.files[0]);
    } else {
      sePproductGallary(event.target.files);
    }
  };

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);
  return (
    <>
      {isLoading && (
        <div className="adding-produt-loader">
          <Image src={loader} alt="demo" className="adding-imag"></Image>
        </div>
      )}

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
                setOptions={{
                  height: 300,
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
            add product
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default AddProductForm;
