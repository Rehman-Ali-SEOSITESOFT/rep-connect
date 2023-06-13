import Admin_Header from "@/layout/admin/header/Admin_Header";
import Admin_sidebar from "@/layout/admin/sidebar/Admin_sidebar";
import React from "react";
import { useSelector } from "react-redux";

const AdminChildren = ({ children }) => {
  const { opend } = useSelector((state) => state.adminSideBarOpned);

  return (
    <>
      <Admin_sidebar opend={opend} />
      <div className={`admin-content ${opend ? "no-side-bar" : "side-bar"}`}>
        <Admin_Header />
        <div className="admin-children">{children}</div>
      </div>
    </>
  );
};

export default AdminChildren;
