"use client";
import React, { useState } from "react";
import "./blogfilter.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BlogFilters = () => {
  const [tabs, setTab] = useState(0);
  const pathname = usePathname();
  const activePath = pathname.split("/");
  const [filterTabs, setFilterTabs] = useState([
    {
      name: (
        <>
          <i className="fa-regular fa-paste" />
          <span>Categories </span>
          <i className="fa-solid fa-caret-down" />
        </>
      ),
      data: [
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
      ].map((e) => {
        let nameOfCategegory = `${e.toLowerCase().split(" ").join("-")}`;
        return (
          <li
            key={e}
            className={nameOfCategegory === activePath[2] ? "active" : null}
          >
            <Link href={`/category/${nameOfCategegory}`}>{e}</Link>
          </li>
        );
      }),
    },
    {
      name: (
        <>
          <i className="fa-solid fa-tag" /> <span>Tags</span>
          <i className="fa-solid fa-caret-down" />
        </>
      ),
      data: [
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
      ].map((e) => {
        let nameOfTags = `${e.toLowerCase().split(" ").join("-")}`;
        return (
          <li
            key={e}
            className={nameOfTags === activePath[2] ? "active" : null}
          >
            <Link href={`/tag/${e.toLowerCase().split(" ").join("-")}`}>
              {e}
            </Link>
          </li>
        );
      }),
    },
    {
      name: (
        <>
          <i className="fa-solid fa-user" /> <span>Authors</span>
          <i className="fa-solid fa-caret-down" />
        </>
      ),
      data: [
        "John-Paul White",
        "jrcompagno",
        "MicroGenDX Admin",
        "Niccole Diaz",
      ].map((e) => {
        let nameOfAuthor = `${e.toLowerCase().split(" ").join("-")}`;
        return (
          <li
            key={e}
            className={nameOfAuthor === activePath[2] ? "active" : null}
          >
            <Link href={`/author/${e.toLowerCase().split(" ").join("-")}`}>
              {e}
            </Link>
          </li>
        );
      }),
    },
  ]);

  return (
    <section className="custom-filters-tab">
      <div className="container-xxl">
        <div className="row">
          <div className="col filter-column">
            <div className="main-filter d-flex justify-content-between flex-column  flex-sm-row  ">
              <ul className="m-0 filter-list d-flex ">
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
                    <i className="fa-solid fa-xmark" />
                    <span>show all </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <div className="filter-tabs">
                {filterTabs.map((elem, ind) => {
                  return tabs === ind + 1 ? (
                    <ul className="align-items-center filter-listeed" key={ind}>
                      {elem.data}
                    </ul>
                  ) : null;
                })}
              </div>
              {tabs === 0 ? null : (
                <div className="close-colum-filter" onClick={() => setTab(0)}>
                  <div className="close-filter-btn">
                    <i className="fa-solid fa-xmark" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;
