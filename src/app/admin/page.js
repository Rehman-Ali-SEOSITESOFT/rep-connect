"use client";
import Link from "next/link";
import React, { useState } from "react";
import style from "./dashboard.module.css";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import RecentTransection from "@/components/admin/recentTransection/RecentTransection";
import BarChart from "@/components/admin/barChart/BarChart";
import customer1 from "../../assets/images/admindashboard/customer1.jpg";
import customer2 from "../../assets/images/admindashboard/customer2.jpg";
import customer3 from "../../assets/images/admindashboard/customer3.jpg";
import customer4 from "../../assets/images/admindashboard/customer4.jpg";
import customer5 from "../../assets/images/admindashboard/customer5.jpg";
import customer6 from "../../assets/images/admindashboard/customer6.jpg";
import DashboardCustomer from "@/components/admin/dashBoardCustomer/DashboardCustomer";
import DashBoardBilling from "@/components/admin/dashBoardBilling/DashBoardBilling";
import SalesValue from "@/components/admin/salesValue/SalesValue";
const Page = () => {
  const [transection, setTranestion] = useState([
    {
      transectionCategoryTitle: "Shopping",
      miniTransTitle: "card",
      amount: "26.99",
      date: "Mar 12,2022",
    },
    {
      transectionCategoryTitle: "Stock Market",
      miniTransTitle: "Transfer",
      amount: "26.99",
      date: "Mar 12,2022",
    },
    {
      transectionCategoryTitle: "Grocery",
      miniTransTitle: "card",
      amount: "256.99",
      date: "Apr 12,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
  ]);
  const [customers, setCustomer] = useState([
    {
      icon: customer1,
      customerName: "Samantha Melon",
      username: "User ID:1234",
      time: "11.43am",
    },
    {
      icon: customer2,
      customerName: "Alloe Grater",
      username: "User ID:1234",
      time: "12.35pm",
    },
    {
      icon: customer3,
      customerName: "Gabe Lackmen",
      username: "User ID:1234",
      time: "Yesterday",
    },
    {
      icon: customer4,
      customerName: "Manuel Laber",
      username: "User ID:1234",
      time: "24 Mar 2022",
    },
    {
      icon: customer5,
      customerName: "Hercules Bing",
      username: "User ID:1234",
      time: "18 Mar 2022",
    },
    {
      icon: customer6,
      customerName: "Manuel Labor",
      username: "User ID:1234",
      time: "15 Mar 2022",
    },
  ]);
  return (
    <div className={style.dashboard_wrapper}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadCrum">
              <AdminBreadCrums
                mainTitle="Sales"
                linksTitle="DashBoard"
                mainMiniTitle="Sales"
              />
            </div>
          </div>
        </div>
        {/* one row starts here */}

        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-6 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Sales Statistics
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        153
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-6 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>42%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <svg
                        className="svg-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path
                          d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"
                          opacity=".3"
                        />
                        <path d="M0,0h24v24H0V0z" fill="none" />
                        <g>
                          <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                          <rect height="2" width="6" x="9" y="7" />
                          <rect height="2" width="2" x="16" y="7" />
                          <rect height="2" width="6" x="9" y="10" />
                          <rect height="2" width="2" x="16" y="10" />
                        </g>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-6 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Total Revenue
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        $4,32,474
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-6 d-flex align-items-end justify-content-end">
                    <p className="badge bg-danger-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-down me-1"></i>12%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <svg
                        className="svg-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <g>
                          <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                          <g>
                            <path
                              d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z"
                              opacity=".3"
                            />
                            <rect height="2" width="6" x="9" y="1" />
                            <path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" />
                            <rect height="6" width="2" x="11" y="8" />
                          </g>
                        </g>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-6 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Page Views
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        27,146
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-6 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>27%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <svg
                        className="svg-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                          opacity=".3"
                        />
                        <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-6 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Profit By Sale
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        $563
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-6 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>32.5%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <svg
                        className="svg-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z"
                          opacity=".3"
                        />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* one row ends here */}

        {/* second row starts here */}
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div
              className={`${style.transectionCardWrapper}  card custom-card recent-transactions-card overflow-hidden`}
            >
              <div className={`${style.card_header} justify-content-between`}>
                <div className={style.card_title}>Recent Transactions</div>
              </div>

              {transection.map((e, idx) => {
                return (
                  <div key={idx}>
                    <RecentTransection
                      transectionCategoryTitle={e.transectionCategoryTitle}
                      miniTransTitle={e.miniTransTitle}
                      amount={e.amount}
                      date={e.date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12  ">
            <BarChart />
          </div>
        </div>

        {/* second row ends here */}

        {/* third row starts here */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card custom-card border-none">
              <div
                className={`${style.card_header} d-flex justify-content-between align-items-center`}
              >
                <div className="card-title m-0">
                  <h4 className={style.customer_heading}>Customers</h4>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className={`p-2 fs-12 text-muted ${style.viewAll}`}
                    data-bs-toggle="dropdown"
                  >
                    View All
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Import
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Export
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${style.customersss}  card-body  p-0 `}>
                <ul className="list-group my-2">
                  {customers.map((e, idx) => {
                    return (
                      <li
                        className={` ${style.list_group_item} border-0`}
                        key={idx}
                      >
                        <DashboardCustomer
                          icon={e.icon}
                          customerName={e.customerName}
                          username={e.username}
                          time={e.time}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <DashBoardBilling />
          </div>
          <div className="col-xxl-3 col-xl-6"></div>
          {/*    <div class="col-xxl-3 col-xl-6">
          <div class="card custom-card">
            <div class="card-header justify-content-between">
              <div class="card-title">Profitable Categories</div>
              <div class="dropdown">
                <a
                  aria-label="anchor"
                  href="javascript:void(0);"
                  class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown"
                >
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="javascript:void(0);">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-group mb-0">
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        1
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Clothing</p>
                    </div>
                    <div>
                      <span class="text-success">$123.45M</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        2
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Electronics</p>
                    </div>
                    <div>
                      <span class="text-success">$765.89K</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        3
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Grocery</p>
                    </div>
                    <div>
                      <span class="text-success">$289.00M</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        4
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Mobiles</p>
                    </div>
                    <div>
                      <span class="text-success">$662.97K</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        5
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Kitchen Appliances</p>
                    </div>
                    <div>
                      <span class="text-success">$1.2B</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center">
                    <div class="me-2">
                      <span class="avatar avatar-sm bg-light text-default fw-semibold">
                        6
                      </span>
                    </div>
                    <div class="flex-fill">
                      <p class="mb-0 fw-semibold">Automobiles</p>
                    </div>
                    <div>
                      <span class="text-success">$109.23k</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item text-center">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary-light btn-wave"
                  >
                    See All Activity
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
        <div className={`row ${style.row_mar}`}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <SalesValue />
            </div>
          </div>
        </div>
        {/* third row ends here */}
      </div>
    </div>
  );
};

export default Page;
