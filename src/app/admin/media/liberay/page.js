"use client";
import React, { useState } from "react";
import style from "./liberay.module.css";
import Link from "next/link";
import MediaLibraryTabs from "@/components/admin/mediaLibraryTabs/MediaLibraryTabs";
import AddNew from "@/components/admin/addNew/AddNew";

const page = () => {
  const [addItem, setAddItem] = useState(false);
  const _handleAddNew = () => {
    console.log("handle new click is pressed");
    setAddItem(true);
  };
  return (
    <>
      <section className={style.liberay_wrapper}>
        {addItem ? <AddNew /> : ""}
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Media Library</h4>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="right">
                <button className={style.addNewButton} onClick={_handleAddNew}>
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <MediaLibraryTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
