"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import repconnect from "../../assets/images/Rep-Connect-Logo-2021-2.svg";
import myacount from "../../assets/images/side-bar-my-account-img.png";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/toggleSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 col-sm-6 col-6 text-start">
            <div className="header--logo">
              <Link href="/">
                <Image
                  src={repconnect}
                  alt="repconnect logo"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-7 col-sm-6 col-6">
            <div className="header--right">
              <div
                className="header--burgur--icon desktop"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="bottom--cart">
                <div className="bottom--myaccount">
                  <Link href="/my-account">
                    <Image
                      src={myacount}
                      alt="my-account"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <Link href="/cart" className="bottom--cart">
                  <div className="bottom--cart--icon">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span> 2</span>
                  </div>
                  <div className="bottom--cart--price">$0.00</div>
                </Link>
              </div>
              <div
                className="header--burgur--icon responsive"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="bottom--search">
                <input
                  type="text"
                  placeholder="Enter your search"
                  className="form-control"
                />
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
