import Link from "next/link";
import React from "react";
import "./admin_sidebar.css";

const Admin_sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <div className="menu-list">
        <ul>
          <li>
            post
            <ol>
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
            product
            <ol>
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
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Admin_sidebar;
