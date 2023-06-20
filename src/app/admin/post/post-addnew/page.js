"use client";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import React, { useEffect, useState } from "react";
import style from "./Addpost.module.css";
import CkEditior from "@/components/admin/ckEditior/CkEditor";
import axios from "axios";

const Page = () => {
  const [postData, setPostData] = useState({
    productTitle: "",
    category: "",
    tag: "",
    author: "",
    format: "",
    discription: "",
    postRedirect: "",
    url: "",
  });
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [author, setAuthor] = useState([]);
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, "<=========== value");
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
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
    console.log(image, "image");
  };
  useEffect(() => {
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/post-category")
      .then((resp) => {
        setCategory(resp.data.data.category);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/tag")
      .then((resp) => {
        setTag(resp.data.data.tag);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/author")
      .then((resp) => {
        setAuthor(resp.data.data.author);
      })
      .catch((err) => console.log(err));
  }, []);

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
                                {category.map((e, idx) => {
                                  return <option key={idx}>{e.name}</option>;
                                })}
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
                                {tag.map((e, idx) => {
                                  return <option key={idx}>{e.name}</option>;
                                })}
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
                                {author.map((e, idx) => {
                                  return <option key={idx}>{e.name}</option>;
                                })}
                              </select>
                            </div>
                            <div className="col-xl-6 color-selection">
                              <label className="form-label">Image</label>
                              <input
                                type="file"
                                className="form-control"
                                onChange={handleImageChange}
                              />
                            </div>
                            <div className="col-xl-12">
                              <label
                                className={`form-label ${style.postRedirection}`}
                              >
                                Post Redirection
                              </label>
                              <div className="row">
                                <div className="col-lg-4">
                                  <label>Post Redirect</label>
                                  <input
                                    className="form-control"
                                    value={postData.postRedirect}
                                    onChange={handleChange}
                                    name="postRedirect"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <label>URL</label>
                                  <input
                                    className="form-control"
                                    value={postData.url}
                                    onChange={handleChange}
                                    name="url"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <label>Redirection Type</label>
                                  <input className="form-control" />
                                </div>
                              </div>
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
