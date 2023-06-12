"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./admin_sidebar.css";
import logo from "../../../assets/images/logo/Rep-Connect-Logo-2021-02-admin.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Admin_sidebar = () => {
  const pathname = usePathname();
  const [postMenu, setPostMenu] = useState([
    {
      name: "add new",
      link: "post-addnew",
    },
    {
      name: "category",
      link: "post-categories",
    },
    {
      name: "tags",
      link: "post-tags",
    },
    {
      name: "all",
      link: "/",
    },
  ]);
  const [productMenu, setProductMenu] = useState([
    {
      name: "add new",
      link: "product-addnew",
    },
    {
      name: "category",
      link: "product-categories",
    },
    {
      name: "tags",
      link: "product-tags",
    },
    {
      name: "all",
      link: "",
    },
  ]);

  const path = pathname.split("/");

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
            <Link href="/admin">
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
                <i className="fa-solid fa-eye-dropper"></i>
              </span>
              <span> post</span>
              <span className="d-icon w-100 text-end">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <span className="d-icon  w-100 text-end">
                <i className="fa-solid fa-angle-up"></i>
              </span>
            </span>

            <ol className="more-list ">
              <li>
                <Link
                  href={`/admin/post/post-addnew`}
                  className={`${path === "post-addnew" ? "active" : null}`}
                >
                  add new
                </Link>
              </li>
              <li>
                <Link
                  href={`/admin/post/post-categories`}
                  className={`${path === "post-categories" ? "active" : null}`}
                >
                  category
                </Link>
              </li>
              <li>
                <Link
                  href={`/admin/post/post-tags`}
                  className={`${path === "post-tags" ? "active" : null}`}
                >
                  tags
                </Link>
              </li>

              <li>
                <Link
                  href={`/admin/post/`}
                  className={`${path === undefined ? "active" : null}`}
                >
                  all post
                </Link>
              </li>

              {/* {postMenu.map((elem, index) => {
                return (
                  <li key={index}> */}
              {/* <Link href={`/admin/post/`}>{elem.name}</Link> */}
              {/* </li>
                );
              })} */}
            </ol>
          </li>
          <li>
            <span className="title-name">
              <span className="d-icon">
                <i className="fa-brands fa-product-hunt"></i>
              </span>
              <span>product</span>
              <span className="d-icon w-100 text-end">
                <i className="fa-solid fa-angle-down"></i>
              </span>
              <span className="d-icon  w-100 text-end">
                <i className="fa-solid fa-angle-up"></i>
              </span>
            </span>

            <ol className="more-list">
              {productMenu.map((elem, index) => {
                console.log(
                  path[2] === "product"
                    ? path[3] === elem.link
                      ? "active"
                      : null
                    : null
                );
                console.log(elem.link);
                return (
                  <li key={index}>
                    <Link
                      href={`/admin/product/${elem.link}`}
                      // className={`${
                      //   path[2] === "product" || path[3] === elem.link
                      // }`}
                    >
                      {" "}
                      {elem.name}{" "}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Admin_sidebar;
