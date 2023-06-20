"use client";
import React, { useState } from "react";
import style from "./AddCategoryList.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const page = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [cat, setCat] = useState({
    catTitle: "",
  });
  const _handleChange = (e) => {
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (event) => {
    setImage(event.target.files[0]);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
    }
  };
  const _handleCancel = () => {
    setFile("");
    setImage("");
  };

  const onSubmitCategotry = (e) => {
    e.preventDefault();
    if (cat.catTitle.length == 0 && image <= 0) {
      toast.error(`invalid data`);
    } else {
      const formData = new FormData();
      formData.append("name", cat.catTitle);
      formData.append("cover_image", image);
      axios
        .post(
          "https://anxious-foal-shift.cyclic.app/api/post-category",
          formData
        )
        .then((resp) => {
          console.log(resp.data.success);
          if (resp.data.success == 1) {
            toast.success(resp.data.message);
            setCat({
              catTitle: "",
            });
            setImage("");
            setFile("");
          } else {
            toast.error(resp.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <section className={style.addCategoryListWrapper}>
        <div className="container-fluid">
          <div className={`row ${style.title_row} my-4`}>
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Post Categories</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end d-block">
                <Link
                  href="/admin/post/post-categories"
                  className={`add_new_btn border-none ${style.submit_}`}
                  type="submit"
                >
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  Back to Category List
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmitCategotry}>
            <div className="row">
              <div className="col">
                <div className={style.form_category}>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Name of Category</label>
                      <input
                        className="form-control"
                        type="text"
                        value={cat.catTitle}
                        onChange={_handleChange}
                        name="catTitle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <div className={style.form_category2}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={style.laaabeel}>
                        <label>Image</label>
                        <div className={style.drapFile}>
                          <input
                            className={`form-control ${style.file_upload}`}
                            type="file"
                            onChange={handleChange}
                          />
                          {file && (
                            <div
                              className={style.background_image}
                              style={{ backgroundImage: `url(${file})` }}
                            >
                              <i
                                className={`fa-solid fa-xmark ${style.cross_icon}`}
                                onClick={_handleCancel}
                              ></i>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`row ${style.btn_row}`}>
              <div className="col-12 ">
                <div className="text-end d-block">
                  <button
                    className={`add_new_btn border-none ${style.submit_}`}
                    type="submit"
                  >
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;
