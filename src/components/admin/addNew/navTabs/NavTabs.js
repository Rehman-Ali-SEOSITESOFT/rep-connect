import React, { useEffect } from "react";
import "./navtabs.css";
const NavTabs = (props) => {
  const { tabName } = props;

  return (
    <>
      <button
        className="nav-link"
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
      >
        {tabName}
      </button>
    </>
  );
};

export default NavTabs;
