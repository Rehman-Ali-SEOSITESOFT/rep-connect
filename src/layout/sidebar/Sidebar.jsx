import Link from "next/link";
import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar--top">
        <div className="logo--section"></div>
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
              <Link href="/">Company Org Char t</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar--bottom"></div>
    </aside>
  );
};

export default Sidebar;
