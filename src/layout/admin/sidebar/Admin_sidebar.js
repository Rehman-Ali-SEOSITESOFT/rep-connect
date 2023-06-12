"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./admin_sidebar.css";
import logo from "../../../assets/images/logo/Rep-Connect-Logo-2021-02-admin.svg";
import Image from "next/image";

const Admin_sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="logoo">
        <Image src={logo} alt="rep-coonect" className="img-fluid" />
      </div>
      <div className="menu-list">
        <ul>
          <li className="short-head">
            <span>Main</span>
          </li>
          <li>
            <Link href="/admin" className="active">
              <span className="d-icon">
                <i className="fa-solid fa-gauge"></i>
              </span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="short-head">
            <span>Pages</span>
          </li>
          <li>
            <span className="title-name">
              <span className="d-icon">
                <i class="fa-solid fa-eye-dropper"></i>
              </span>
              <span> post</span>
              <span className="d-icon">
                <i class="fa-solid fa-angle-down"></i>
              </span>
              <span className="d-icon">
                <i class="fa-solid fa-angle-up"></i>
              </span>
            </span>
            <ol className="more-list">
              <li>
                <Link href="/admin/post/addnew"> Add New Post </Link>
              </li>
              <li>
                <Link href="/admin/post/categories"> Categories </Link>
              </li>
              <li>
                <Link href="/admin/post/tags"> Tags </Link>
              </li>
              <li>
                <Link href="/admin/post"> All Post </Link>
              </li>
            </ol>
          </li>
          <li>
            <span className="title-name">
              <span className="d-icon">
                <i class="fa-brands fa-product-hunt"></i>
              </span>
              <span>product</span>
              <span className="d-icon">
                <i class="fa-solid fa-angle-down"></i>
              </span>
              <span className="d-icon">
                <i class="fa-solid fa-angle-up"></i>
              </span>
            </span>
            <ol className="more-list">
              <li>
                <Link href="/admin/product/addnew"> Add New product </Link>
              </li>
              <li>
                <Link href="/admin/product/categories">
                  {" "}
                  Categories Proudct{" "}
                </Link>
              </li>
              <li>
                <Link href="/admin/product/tags"> product Tags </Link>
              </li>
              <li>
                <Link href="/admin/product/tags"> product Tags </Link>
              </li>
              <li>
                <Link href="/admin/product"> All product </Link>
              </li>
            </ol>
          </li>{" "}
        </ul>
      </div>
    </aside>
  );
};

export default Admin_sidebar;
