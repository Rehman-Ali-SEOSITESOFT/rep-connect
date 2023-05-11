"use client";
import React, { useState } from "react";
import "./blogfilter.css";
import Link from "next/link";

export const Categoires = () => {
  return [
    "Advisory Board Presentations Podcast",
    "Announcements",
    "Compliance",
    "Daily Sample Numbers",
    "MicroGenDX Insider",
    "MicroGenDX Round Table Podcasts",
    "Rick Talk Podcast",
    "Ricks Topic of the Week",
    "Uncategorized",
    "Teleconferences",
    "The Listen and Learn Podcast",
    "The Preceptorship Podcast",
    "Urology Team",
    "Using Sales Material Effectively with Rick Martin",
  ].map((e) => (
    <li key={e} className="categories">
      <Link href={`/category/${e.toLowerCase().split(" ").join("-")}`}>
        {e}
      </Link>
    </li>
  ));
};
export const Tags = () => {
  return [
    "AAHKS COMMITTEE",
    "AMERICAN ASSOCIATION OF HIP AND KNEE SURGEONS",
    "AUA NEWS",
    "bacteria",
    "Consensus Guidelines Book",
    "Curtis Nickels",
    "Dr. Nickels",
    "hear from your peers",
    "orthopedics",
    "Outages",
    "Parvizi",
    "Pugliese",
    "quorum sensing",
    "sales",
    "sales materials",
    "sample goals",
    "trifolds",
    "urology",
    "urology journals",
  ].map((e) => (
    <li key={e}>
      <Link href={`/tag/${e.toLowerCase().split(" ").join("-")}`}>{e}</Link>
    </li>
  ));
};
export const Authors = () => {
  return [
    "John-Paul White",
    "jrcompagno",
    "MicroGenDX Admin",
    "Niccole Diaz",
  ].map((e) => (
    <li key={e}>
      <Link href={`/author/${e.toLowerCase().split(" ").join("-")}`}>{e}</Link>
    </li>
  ));
};
const BlogFilters = () => {
  const [tabs, setTab] = useState(0);

  const [filterTabs, setFilterTabs] = useState([
    {
      name: (
        <>
          <i className="fa-regular fa-paste"></i> <span>Categories </span>
          <i className="fa-solid fa-caret-down"></i>
        </>
      ),
      data: <Categoires />,
    },
    {
      name: (
        <>
          <i className="fa-solid fa-tag"></i> <span>Tags</span>
          <i className="fa-solid fa-caret-down"></i>
        </>
      ),
      data: <Tags />,
    },
    {
      name: (
        <>
          <i className="fa-solid fa-user"></i> <span>Authors</span>
          <i className="fa-solid fa-caret-down"></i>
        </>
      ),
      data: <Authors />,
    },
  ]);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col filter-column">
          <div className="main-filter d-flex justify-content-between flex-column  flex-sm-row  ">
            <ul className="m-0 filter-list d-flex">
              <li className="filtername">Filter by</li>
              {filterTabs.map((elem, ind) => {
                return (
                  <li
                    key={ind}
                    onClick={() => setTab(ind + 1)}
                    className={`${tabs === ind + 1 ? "active" : "list"}`}
                  >
                    {elem.name}
                  </li>
                );
              })}
            </ul>
            <div className="reset">
              <ul className="p-0 m-0">
                <li>
                  <i className="fa-solid fa-xmark"></i>
                  <span>show all </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="flex">
            <div className="filter-tabs">
              {filterTabs.map((elem, ind) => {
                return tabs === ind + 1 ? (
                  <ul className="p-0 m-0 align-items-center" key={ind}>
                    {elem.data}
                  </ul>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
