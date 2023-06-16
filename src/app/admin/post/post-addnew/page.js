"use client";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import React, { useState } from "react";
import style from "./Addpost.module.css";
import CkEditior from "@/components/admin/ckEditior/CkEditor";

const Page = () => {
  const [postData, setPostData] = useState({
    productTitle: "",
    category: "",
    tag: "",
    author: "",
    publish: "",
    format: "",
    discription: "",
  });
  const [base64Image, setBase64Image] = useState("");

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, "<=========== value");
  };
  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const [subscribe, setSubscibe] = useState(false);
  const handleChangeSubs = () => {
    setSubscibe(!subscribe);
  };
  const _handleFormSubmitting = (e) => {
    e.preventDefault();
    console.log(postData, "post data");
    console.log(subscribe, "subcribe");
    console.log(base64Image, "<========== base 64 image");
  };
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <AdminBreadCrums
                mainTitle="Add Post"
                linksTitle="Dashboard"
                mainMiniTitle="Add Product"
              />
            </div>
          </div>
          <form onSubmit={_handleFormSubmitting}>
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.product_wrapper}`}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card custom-card shadow-none mb-0 border-0">
                        <div className="card-body p-0">
                          <div className="row gy-3">
                            <div className="col-xl-12">
                              <label className="form-label">
                                Product Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={postData.productTitle}
                                onChange={handleChange}
                                name="productTitle"
                              />
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">Category</label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="category"
                              >
                                <option value="">Category</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Footwear">Footwear</option>
                                <option value="Accesories">Accesories</option>
                                <option value="Grooming">Grooming</option>
                                <option value="Ethnic & Festive">
                                  Ethnic & Festive
                                </option>
                                <option value="Jewellery">Jewellery</option>
                                <option value="Toys & Babycare">
                                  Toys & Babycare
                                </option>
                                <option value="Festive Gifts">
                                  Festive Gifts
                                </option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Dining">Dining</option>
                                <option value="Home Decors">Home Decors</option>
                                <option value="Stationery">Stationery</option>
                              </select>
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">Tag</label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="tag"
                              >
                                <option value="">Select</option>
                                <option value="All">All</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">Author</label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="author"
                              >
                                <option value="">Select</option>
                                <option value="Extra Small">Extra Small</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="Extra Large">Extra Large</option>
                              </select>
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">Publish</label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="publish"
                              >
                                <option value="">Select</option>
                                <option value="Armani">Armani</option>
                                <option value="Lacoste">Lacoste</option>
                                <option value="Puma">Puma</option>
                                <option value="Spykar">Spykar</option>
                                <option value="Mufti">Mufti</option>
                                <option value="Home Town">Home Town</option>
                                <option value="Arrabi">Arrabi</option>
                              </select>
                            </div>
                            <div className="col-xl-12 color-selection">
                              <label className="form-label">Image</label>
                              <input
                                type="file"
                                className="form-control"
                                onChange={handleImageChange}
                              />
                            </div>
                            <div className="col-xl-12">
                              <label className="form-label">Format</label>

                              <CkEditior />
                            </div>
                            <div className="col-xl-12">
                              <label className="form-label">
                                Product Description
                              </label>
                              <textarea
                                className="form-control"
                                value={postData.discription}
                                onChange={handleChange}
                                rows="4"
                                name="discription"
                              ></textarea>
                            </div>
                            <div className="col-xl-12 d-flex align-items-center">
                              <input
                                type="checkbox"
                                value={subscribe}
                                onChange={handleChangeSubs}
                                name="subscribe"
                              />
                              <label className="form-label mx-2 mb-0">
                                Subscribe by E-mail
                              </label>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                              <button className={` m-1 ${style.addProduct}`}>
                                Add Product<i className="fa-solid fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;
