import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./sidebar.css";
import mircogendx from "../../assets/images/MicroGenDX-2020-logo.svg";
import myacount from "../../assets/images/side-bar-my-account-img.png";
import repconnect from "../../assets/images/Rep-Connect-Logo-2021-2.svg";
const Sidebar = () => {
  return (
    <aside className="side--bar">
      <div className="sidebar--top">
        <div className="top--section--top">
          <Link href="/">
            <Image src={repconnect} alt="rep-connect" className="img-fluid" />
          </Link>
        </div>
        <div className="sidebar--navigation">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <span>Rep Connect Home</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Sales Resources </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Order Kits & Supplies</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>In-Service Checklist</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Quickbase CRM</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>SAP Concur</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>MicroGenDX University</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Podcasts</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>Caroline Fife’s BLOG</span>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span>MicroGenDX Insider</span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span>Compliance</span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span>Company Org Chart</span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span>Company Directory</span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span>EmployeeConnect</span>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="top--section--bottom">
          <Link href="/">
            <Image src={mircogendx} alt="MicroGenDX" className="img-fluid" />
          </Link>
        </div>
      </div>
      <div className="sidebar--bottom">
        <div className="bottom--cart">
          <div className="bottom--myaccount">
            <Image src={myacount} alt="my-account" className="img-fluid" />
          </div>
          <div className="bottom--cart">
            <div className="bottom--cart--icon">
              <i className="fa-solid fa-basket-shopping"></i>
              <span> 2</span>
            </div>
            <div className="bottom--cart--price">&0.00</div>
          </div>
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
