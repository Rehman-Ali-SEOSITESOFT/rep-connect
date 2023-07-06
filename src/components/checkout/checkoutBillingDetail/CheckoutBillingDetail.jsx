"use client";
import React, { useEffect, useState } from "react";
import "./checkout.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loading from "@/components/cart/CartItems/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import { token } from "@/hooks/token";
import { cartItem } from "@/redux/slices/cartItem";

const CheckoutBillingDetail = () => {
  const router = useRouter();
  const [err, setErr] = useState([]);
  const [address, setAddress] = useState(false);
  const state = useSelector((state) => state.cartItem);
  const [billingValidated, setBillingValidated] = useState({
    firstname: false,
    lastname: false,
    company_name: false,
    countryregion: false,
    towncity: false,
    statecountry: false,
    postcode: false,
    phone: false,
    email: false,
    ordernotes: false,
    address: false,

    // ordernotes: false,
  });

  const [billignAddress, setBillingAddress] = useState({
    firstname: "",
    lastname: "",
    company_name: "",
    countryregion: "",
    towncity: "",
    statecountry: "",
    postcode: "",
    phone: "",
    email: "",
    ordernotes: "",
    address: "",
  });
  const [shippingValidated, setShippingValidated] = useState({
    ship_firstname: false,
    ship_lastname: false,
    ship_company_name: false,
    ship_countryregion: false,
    ship_towncity: false,
    ship_statecountry: false,
    ship_postcode: false,
    ship_phone: false,
    ship_email: false,
    ship_ordernotes: false,
    ship_address: false,

    // ordernotes: false,
  });
  const [shippingAddress, setShippingAddress] = useState({
    ship_firstname: "",
    ship_lastname: "",
    ship_company_name: "",
    ship_countryregion: "",
    ship_towncity: "",
    ship_statecountry: "",
    ship_postcode: "",
    ship_phone: "",
    ship_email: "",
    ship_ordernotes: "",
    ship_address: "",
  });
  const dispatch = useDispatch();

  const deletProduct = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/orderd`, {
      headers: {
        "x-auth-token": token(),
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        toast("Order Placed Successfully");
        dispatch(cartItem());
        router.push("/order-received");
      });
  };

  const hanldeBillingChange = (event) => {
    const { name, value } = event.target;
    setBillingAddress({ ...billignAddress, [name]: value });
    if (value.trim().length == 0) {
      setBillingValidated({ ...billingValidated, [name]: true });
    } else if (value.trim().length > 0) {
      setBillingValidated({ ...billingValidated, [name]: false });
    }
  };
  const hanldeShippingChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
    if (value.trim().length == 0) {
      setShippingValidated({ ...shippingValidated, [name]: true });
    } else if (value.trim().length > 0) {
      setShippingValidated({ ...shippingValidated, [name]: false });
    }
  };
  const hanldesubmitorder = (e) => {
    e.preventDefault();

    let orderAddress = {};
    // if (address) {
    //   orderAddress = {
    //     billing_address: { ...billignAddress },
    //     shipping_address: { ...shippingAddress },
    //   };
    // } else {
    //   orderAddress = {
    //     billing_address: { ...billignAddress },
    //   };
    // }
    let objeError = { ...billingValidated };
    for (const key in billignAddress) {
      if (!billignAddress[key]) {
        objeError[key] = true;
      }
      setBillingValidated(objeError);
    }
    if (address) {
      let objeErrorShipp = { ...shippingValidated };
      for (const key in shippingAddress) {
        if (!shippingAddress[key]) {
          objeErrorShipp[key] = true;
        }
        setShippingValidated(objeErrorShipp);
      }
    }

    // if (!billignAddress.firstname) {
    //   console.log("no value");
    // } else {
    //   console.log("value", billignAddress.firstname);
    // }

    // for (const [key, value] of Object.entries(billignAddress)) {
    //   if (!billignAddress[key]) {
    //     for (const [i, v] of Object.entries(billingValidated)) {
    //       if (key === i) {
    //         setBillingValidated({ ...billingValidated, [i]: true });
    //       } else {
    //         setBillingValidated({ ...billingValidated, [i]: false });
    //       }
    //     }
    //     // if (key === billingValidated[key]) {
    //     //   console.log(billignAddress);
    //     //   // setBillingAddress({
    //     //   //   ...billignAddress,
    //     //   //   [billingValidated[key]]: false,
    //     //   // });
    //     // }
    //   } else {
    //     console.log(key, "=>", value);
    //   }
    // }

    // for (const [key, value] of Object.entries(billignAddress)) {
    //   if (
    //     key === "firstname" ||
    //     key === "lastname" ||
    //     key === "company_name" ||
    //     key === "countryregion" ||
    //     key === "towncity" ||
    //     key === "statecountry" ||
    //     key === "postcode" ||
    //     key === "phone" ||
    //     key === "email"
    //   ) {
    //     console.log(`if condtiion {${key}: ${value}}`);
    //   } else {
    //     console.log(`else condtion {${key}: ${value}}`);
    //   }
    // }

    /// THIS CODE IS OK FOR ADD TO ORDER TO BACKEND
    // let orderAddress = {};
    // if (address) {
    //   orderAddress = {
    //     billing_address: { ...billignAddress },
    //     shipping_address: { ...shippingAddress },
    //   };
    // } else {
    //   orderAddress = {
    //     billing_address: { ...billignAddress },
    //   };
    // }

    // let updatedObject = { ...validated };

    // let error = [];
    // for (let i in billignAddress) {
    //   if (!billignAddress[i]) {
    //     if (
    //       i === "firstname" ||
    //       i === "lastname" ||
    //       i === "company_name" ||
    //       i === "countryregion" ||
    //       i === "towncity" ||
    //       i === "statecountry" ||
    //       i === "postcode" ||
    //       i === "phone" ||
    //       i === "email" ||
    //       i === "address"
    //     ) {
    //       updatedObject[i] = true;
    //       error.push(`${i} is a required field.`);
    //     }
    //   } else {
    //     console.log(billignAddress);
    //   }
    // }
    // if (address) {
    //   for (let i in shippingAddress) {
    //     if (!shippingAddress[i]) {
    //       if (
    //         i === "ship_firstname" ||
    //         i === "ship_lastname" ||
    //         i === "ship_company_name" ||
    //         i === "ship_countryregion" ||
    //         i === "ship_towncity" ||
    //         i === "ship_statecountry" ||
    //         i === "ship_postcode" ||
    //         i === "ship_phone" ||
    //         i === "ship_email" ||
    //         i === "ship_address"
    //       ) {
    //         updatedObject[i] = true;
    //         error.push(`${i} is a required field.`);
    //       }
    //     }
    //   }
    // }

    // for (let key in billignAddress) {
    //   if (!billignAddress[key]) {
    //     if (
    //       key === "firstname" ||
    //       key === "lastname" ||
    //       key === "company_name" ||
    //       key === "countryregion" ||
    //       key === "towncity" ||
    //       key === "statecountry" ||
    //       key === "postcode" ||
    //       key === "phone" ||
    //       key === "email"
    //     ) {
    //       updatedObject[key] = true;
    //       error.push(`${key} is a required field.`);
    //     } else if (address === true) {
    //       if (
    //         key === "ship_firstname" ||
    //         key === "ship_lastname" ||
    //         key === "ship_countryregion" ||
    //         key === "ship_address" ||
    //         key === "ship_towncity" ||
    //         key === "ship_statecountry" ||
    //         key === "ship_postcode"
    //       ) {
    //         updatedObject[key] = true;
    //         error.push(`${key} is a required field.`);
    //       }
    //     }
    //   }
    // }

    // if (
    //   billignAddress.firstname &&
    //   billignAddress.lastname &&
    //   billignAddress.company_name &&
    //   billignAddress.countryregion &&
    //   billignAddress.towncity &&
    //   billignAddress.statecountry &&
    //   billignAddress.postcode &&
    //   billignAddress.phone &&
    //   billignAddress.email &&
    //   billignAddress.address
    // ) {
    //   if (address === true) {
    //     if (
    //       billignAddress.ship_firstname &&
    //       billignAddress.ship_lastname &&
    //       billignAddress.ship_company_name &&
    //       billignAddress.ship_countryregion &&
    //       billignAddress.ship_towncity &&
    //       billignAddress.ship_statecountry &&
    //       billignAddress.ship_postcode
    //     ) {
    //       console.log(" SHIPPING ADDRESS", state.data);
    //       hanleOrderd(state.data);
    //       // setTimeout(() => {
    //       //   router.push("/order-received");
    //       // }, 1500);
    //       // deletProduct();
    //     }
    //   } else {
    //     console.log("DIFFERENET SHIPPING ADDRESS", state.data);
    //     hanleOrderd(state.data);
    //     // setTimeout(() => {
    //     //   router.push("/order-received");
    //     // }, 1500);
    //     // deletProduct();
    //   }
    // }

    // setErr(error);
    // setValidated(updatedObject);
  };

  const handleCheckboxChange = (event) => {
    setAddress(event.target.checked);
  };

  const totalprice = state?.data.reduce((total, curValue, curIndex, arr) => {
    return (total += curValue.sub_total);
  }, 0);
  const TotalPrice = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalprice);
  };

  const hanleOrderd = (order) => {
    console.log("", order);

    let orderdetail = {
      billing_address: {
        first_name: billignAddress.firstname,
        last_name: billignAddress.lastname,
        country_region: billignAddress.countryregion,
        company_name: billignAddress.company_name,
        address: billignAddress.address,
        city_town: billignAddress.towncity,
        state_country: billignAddress.statecountry,
        post_zip_code: billignAddress.postcode,
        phone_no: billignAddress.phone,
        email: billignAddress.email,
      },
      shipping_address: {},
      products: {},
      payment_method: "COD",
    };
    console.log(orderdetail);
  };

  return (
    <>
      <form onSubmit={hanldesubmitorder} className="checkout--details">
        <div className="row main-row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {err.length > 0 ? (
              <div className="error-details">
                <div className="icon">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className="error-list">
                  {err.map((err, index) => {
                    return (
                      <div key={index}>
                        <div>
                          <li key={index}>{err}</li>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {state.loading ? (
            <Loading />
          ) : (
            <>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <aside className="billing-detail">
                  <div className="fullname d-flex justify-content-between">
                    <div className={`form-row fullname-children`}>
                      <label htmlFor="firstname" className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          billingValidated.firstname ? "invalid" : ""
                        }`}
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        value={billignAddress.firstname}
                        onChange={hanldeBillingChange}
                      />
                      {billingValidated.firstname ? (
                        <div style={{ color: "red" }}>
                          First Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`form-row fullname-children ${billingValidated}`}
                    >
                      <label htmlFor="lastname" className="form-label">
                        {" "}
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          billingValidated.lastname ? "invalid" : ""
                        }`}
                        id="lastname"
                        name="lastname"
                        placeholder="Doe"
                        value={billignAddress.lastname}
                        onChange={hanldeBillingChange}
                      />
                      {billingValidated.lastname ? (
                        <div style={{ color: "red" }}>
                          Last Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <label htmlFor="company_name" className="form-label">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.company_name ? "invalid" : ""
                      }`}
                      id="company_name"
                      name="company_name"
                      placeholder="John"
                      value={billignAddress.company_name}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.company_name ? (
                      <div style={{ color: "red" }}>
                        Company Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.address ? "invalid" : ""
                      }`}
                      id="address"
                      name="address"
                      placeholder="fsd .."
                      value={billignAddress.address}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.company_name ? (
                      <div style={{ color: "red" }}>
                        Address Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="countryregion" className="form-label">
                      Country / Region <span className="required">*</span>
                    </label>
                    <select
                      name="countryregion"
                      id="countryregion"
                      className={`form-select ${
                        billingValidated.countryregion ? "invalid" : ""
                      }`}
                      value={billignAddress.countryregion}
                      onChange={hanldeBillingChange}
                    >
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                    </select>
                    {billingValidated.countryregion ? (
                      <div style={{ color: "red" }}>
                        Country Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="towncity">
                      Town / City <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.towncity ? "invalid" : ""
                      }`}
                      name="towncity"
                      id="towncity"
                      placeholder="Town City"
                      value={billignAddress.towncity}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.towncity ? (
                      <div style={{ color: "red" }}>
                        Town/City Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="statecountry">
                      State / Country <span className="required">*</span>
                    </label>
                    <select
                      name="statecountry"
                      id="statecountry"
                      className={`form-select ${
                        billingValidated.statecountry ? "invalid" : ""
                      }`}
                      value={billignAddress.statecountry}
                      onChange={hanldeBillingChange}
                    >
                      <option value="AGN">Agusan del Norte</option>
                      <option value="AGS">Agusan del Sur</option>
                      <option value="AKL">Aklan</option>
                      <option value="ALB">Albay</option>
                      <option value="ANT">Antique</option>
                      <option value="APA">Apayao</option>
                      <option value="AUR">Aurora</option>
                      <option value="BAS">Basilan</option>
                    </select>
                    {billingValidated.statecountry ? (
                      <div style={{ color: "red" }}>
                        State/Country can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="postcode" className="form-label">
                      Postcode / ZIP <span className="required">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.postcode ? "invalid" : ""
                      }`}
                      name="postcode"
                      id="postcode"
                      placeholder="Postcode / ZIP"
                      value={billignAddress.postcode}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.postcode ? (
                      <div style={{ color: "red" }}>
                        Post Code can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.phone ? "invalid" : ""
                      }`}
                      name="phone"
                      id="phone"
                      placeholder="923001234567"
                      value={billignAddress.phone}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.phone ? (
                      <div style={{ color: "red" }}>Phone can not be empty</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="email" className="form-label">
                      Email address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        billingValidated.email ? "invalid" : ""
                      }`}
                      name="email"
                      id="email"
                      placeholder="johndeo@gmail.com"
                      value={billignAddress.email}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.email ? (
                      <div style={{ color: "red" }}>Email can not be empty</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="differentshipping"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="differentshipping"
                    >
                      Ship to a different address?
                    </label>
                  </div>
                  {address ? (
                    <div>
                      <div className="fullname d-flex justify-content-between">
                        <div className={`form-row fullname-children`}>
                          <label htmlFor="firstname" className="form-label">
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              shippingValidated.ship_firstname ? "invalid" : ""
                            }`}
                            id="firstname"
                            name="ship_firstname"
                            placeholder="John"
                            value={shippingAddress.ship_firstname}
                            onChange={hanldeShippingChange}
                          />
                          {shippingValidated.ship_firstname && address ? (
                            <div style={{ color: "red" }}>
                              First Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className={`form-row fullname-children ${shippingValidated}`}
                        >
                          <label htmlFor="lastname" className="form-label">
                            {" "}
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              shippingValidated.ship_lastname ? "invalid" : ""
                            }`}
                            id="lastname"
                            name="ship_lastname"
                            placeholder="Doe"
                            value={shippingAddress.ship_lastname}
                            onChange={hanldeShippingChange}
                          />
                          {shippingValidated.ship_lastname && address ? (
                            <div style={{ color: "red" }}>
                              Last Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="company_name" className="form-label">
                          Company name (optional)
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_companyname ? "invalid" : ""
                          }`}
                          id="company_name"
                          name="ship_companyname"
                          placeholder="John"
                          value={shippingAddress.ship_companyname}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_companyname && address ? (
                          <div style={{ color: "red" }}>
                            Company Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="ship_address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_address ? "invalid" : ""
                          }`}
                          id="ship_address"
                          name="ship_address"
                          placeholder="fsd .."
                          value={shippingAddress.ship_address}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.company_name ? (
                          <div style={{ color: "red" }}>
                            Address Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="countryregion" className="form-label">
                          Country / Region <span className="required">*</span>
                        </label>
                        <select
                          name="ship_countryregion"
                          id="countryregion"
                          className={`form-select ${
                            shippingValidated.ship_countryregion
                              ? "invalid"
                              : ""
                          }`}
                          value={shippingAddress.ship_countryregion}
                          onChange={hanldeShippingChange}
                        >
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                        </select>
                        {shippingValidated.ship_countryregion && address ? (
                          <div style={{ color: "red" }}>
                            Country Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="towncity">
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_towncity ? "invalid" : ""
                          }`}
                          name="ship_towncity"
                          id="towncity"
                          placeholder="Town City"
                          value={shippingAddress.ship_towncity}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_towncity && address ? (
                          <div style={{ color: "red" }}>
                            Town/City Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="statecountry">
                          State / Country <span className="required">*</span>
                        </label>
                        <select
                          name="ship_statecountry"
                          id="statecountry"
                          className={`form-select ${
                            shippingValidated.ship_statecountry ? "invalid" : ""
                          }`}
                          value={shippingAddress.ship_statecountry}
                          onChange={hanldeShippingChange}
                        >
                          <option value="AGN">Agusan del Norte</option>
                          <option value="AGS">Agusan del Sur</option>
                          <option value="AKL">Aklan</option>
                          <option value="ALB">Albay</option>
                          <option value="ANT">Antique</option>
                          <option value="APA">Apayao</option>
                          <option value="AUR">Aurora</option>
                          <option value="BAS">Basilan</option>
                        </select>
                        {shippingValidated.ship_statecountry && address ? (
                          <div style={{ color: "red" }}>
                            State/Country can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="postcode" className="form-label">
                          Postcode / ZIP <span className="required">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_postcode ? "invalid" : ""
                          }`}
                          name="ship_postcode"
                          id="postcode"
                          placeholder="Postcode / ZIP"
                          value={shippingAddress.ship_postcode}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_postcode && address ? (
                          <div style={{ color: "red" }}>
                            Post Code can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="form-row">
                    <label htmlFor="ordernotes">Order notes (optional)</label>
                    <textarea
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="form-control"
                      id="ordernotes"
                      name="ordernotes"
                      value={shippingAddress.ordernotes}
                      onChange={hanldeShippingChange}
                    />
                    {/* {shippingValidated.ordernotes ? (
                      <div style={{ color: "red" }}>Notes can not be empty</div>
                    ) : (
                      ""
                    )} */}
                  </div>
                </aside>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <aside className="your-order">
                  <table className="w-100 table-wrapper">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    {state.data.length < 1 ? (
                      <tbody>
                        <tr>
                          <td className="product-name" colSpan={2}>
                            <strong className="product-quantity">
                              No item i Cart
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <>
                        <tbody>
                          {state.data.map((e, i) => {
                            return (
                              <tr key={i}>
                                <td className="product-name">
                                  <span className="product-id">
                                    {e.product_detail.name}
                                  </span>
                                  <strong className="product-quantity">
                                    {" "}
                                    × {e.quantity}
                                  </strong>
                                </td>
                                <td className="product-total">
                                  <span className="amount">
                                    <bdi>
                                      {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                      }).format(e.sale_price)}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr className="foot-row">
                            <td className="cart-subtotal-title"> Subtotal</td>
                            <td className="subtotal-price">
                              <span className="amount">
                                <bdi>{TotalPrice()}</bdi>
                              </span>
                            </td>
                          </tr>
                          <tr className="foot-row">
                            <td className="shipping"> Shipping</td>
                            <td className="free-shipping">Free shipping</td>
                          </tr>
                          <tr className="order-total foot-row">
                            <td className="total"> Total</td>
                            <td className="total-price">
                              <strong className="amount">
                                <bdi>{TotalPrice()}</bdi>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </>
                    )}
                  </table>
                  <div className="cash-on-delivery">
                    <span className="checked-icon">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <p>Cash on delivery</p>
                    <p>Pay with cash upon delivery.</p>
                  </div>
                  <div className="order-checkout-btns">
                    <button className="place-order" type="submit">
                      Place order
                    </button>
                    <Link href="/cart" className="return-to-cart">
                      Return to cart
                    </Link>
                    <ToastContainer />
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckoutBillingDetail;
