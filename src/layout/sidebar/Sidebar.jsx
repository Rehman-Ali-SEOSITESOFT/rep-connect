import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <aside className="container">
      <div className="sidebar--top">
        <div className="top--section--top">
          <Link href="/">
            <Image
              src="/assets/images/Rep-Connect-Logo-2021-2.svg"
              alt="rep-connect"
              fill
            />
          </Link>
        </div>
        <div className="sidebar--navigation">
          <nav>
            <ul>
              <li>
                <Link href="/">Rep Connect Home</Link>
              </li>
              <li>
                <Link href="/">Sales Resources </Link>
              </li>
              <li>
                <Link href="/">Order Kits & Supplies</Link>
              </li>
              <li>
                <Link href="/">In-Service Checklist</Link>
              </li>
              <li>
                <Link href="/">Quickbase CRM</Link>
              </li>
              <li>
                <Link href="/">SAP Concur</Link>
              </li>
              <li>
                <Link href="/">MicroGenDX University</Link>
              </li>
              <li>
                <Link href="/">Podcasts</Link>
              </li>
              <li>
                <Link href="/">Caroline Fife’s BLOG</Link>
              </li>
              <li>
                <Link href="/">My Profile</Link>
              </li>
              <li>
                <Link href="/">MicroGenDX Insider</Link>
              </li>

              <li>
                <Link href="/">Compliance</Link>
              </li>

              <li>
                <Link href="/">Company Org Chart</Link>
              </li>

              <li>
                <Link href="/">Company Directory</Link>
              </li>

              <li>
                <Link href="/">EmployeeConnect</Link>
              </li>

              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="top--section--bottom">
          <Link href="/">
            <Image
              src="/assets/images/MicroGenDX-2020-logo.svg"
              alt="MicroGenDX"
              fill
            />
          </Link>
        </div>
      </div>
      <div className="sidebar--bottom">
        <div className="bottom--cart">
          <div className="bottom--myaccount">
            <Image
              src="/assets/images/side-bar-my-account-img.png"
              alt="my-account"
              fill
            />
          </div>
          <div className="bottom--cart"></div>
        </div>
        <div className="bottom--search">
          <input type="text" placeholder="search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
