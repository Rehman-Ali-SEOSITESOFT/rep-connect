"use client";
import Link from "next/link";
import style from "../PostCategory.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
const page = ({ params }) => {
  const [file, setFile] = useState(null);
  const { id } = params;
  const [image, setImage] = useState(null);
  const [cat, setCat] = useState({
    catTitle: "",
  });
  const getSingleCategoryData = () => {
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/post-category/${id}`)
      .then((resp) => {
        setCat(resp.data.data.category);
        console.log(resp.data.data.category);
      })
      .catch((err) => console.log(err));
  };
  const _handleChange = (e) => {
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
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
  };
  useEffect(() => {
    getSingleCategoryData();
  }, []);
  console.log(cat, "cat");
  console.log(file, "fikeee");
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
                        value={cat.name}
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
                            <div className={style.background_image}>
                              <Image src={file} alt="" width={60} height={60} />
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
                    Update Category
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
