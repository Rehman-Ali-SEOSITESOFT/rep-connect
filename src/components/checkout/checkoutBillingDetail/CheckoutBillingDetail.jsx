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
  const [validated, setValidated] = useState({
    firstname: false,
    ship_firstname: false,
    lastname: false,
    ship_lastname: false,
    // compnayname: false,
    countryregion: false,
    ship_countryregion: false,
    towncity: false,
    ship_towncity: false,
    statecountry: false,
    ship_statecountry: false,
    postcode: false,
    ship_postcode: false,
    phone: false,
    email: false,
    // ordernotes: false,
  });
  const [orderForm, setOrderForm] = useState({
    firstname: "",
    lastname: "",
    compnayname: "",
    countryregion: "",
    towncity: "",
    statecountry: "",
    postcode: "",
    phone: "",
    email: "",
    ordernotes: "",

    ship_lastname: "",
    ship_firstname: "",
    ship_companyname: "",
    ship_countryregion: "",
    ship_towncity: "",
    ship_statecountry: "",
    ship_postcode: "",
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

  const hanldeChange = (event) => {
    const { name, value } = event.target;
    setOrderForm({ ...orderForm, [name]: value });
    if (value.trim().length == 0) {
      setValidated({ ...validated, [name]: true });
      // setInputError({ ...inputError, [name]: `${name} can not be empty` });
    } else if (value.trim().length > 0) {
      // console.log("Check")
      // setInputError('');
      setValidated({ ...validated, [name]: false });
    }
  };
  const hanldesubmitorder = (e) => {
    e.preventDefault();

    let updatedObject = { ...validated };

    let error = [];
    for (let key in orderForm) {
      if (!orderForm[key]) {
        if (
          key === "firstname" ||
          key === "lastname" ||
          key === "compnayname" ||
          key === "countryregion" ||
          key === "towncity" ||
          key === "statecountry" ||
          key === "postcode" ||
          key === "phone" ||
          key === "email"
        ) {
          updatedObject[key] = true;
          error.push(`${key} is a required field.`);
        } else if (address === true) {
          if (
            key === "ship_firstname" ||
            key === "ship_lastname" ||
            key === "ship_companyname" ||
            key === "ship_countryregion" ||
            key === "ship_towncity" ||
            key === "ship_statecountry" ||
            key === "ship_postcode"
          ) {
            updatedObject[key] = true;
            error.push(`${key} is a required field.`);
          }
        }
      }
    }

    if (
      orderForm.firstname &&
      orderForm.lastname &&
      orderForm.compnayname &&
      orderForm.countryregion &&
      orderForm.towncity &&
      orderForm.statecountry &&
      orderForm.postcode &&
      orderForm.phone &&
      orderForm.email
    ) {
      if (address === true) {
        if (
          orderForm.ship_firstname &&
          orderForm.ship_lastname &&
          orderForm.ship_companyname &&
          orderForm.ship_countryregion &&
          orderForm.ship_towncity &&
          orderForm.ship_statecountry &&
          orderForm.ship_postcode
        ) {
          console.log(" SHIPPING ADDRESS", orderForm);
          // setTimeout(() => {
          //   router.push("/order-received");
          // }, 1500);
          deletProduct();
        }
      } else {
        console.log("DIFFERENET SHIPPING ADDRESS", orderForm);
        // setTimeout(() => {
        //   router.push("/order-received");
        // }, 1500);
        deletProduct();
      }
    }

    setErr(error);
    setValidated(updatedObject);
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
                          validated.firstname ? "invalid" : ""
                        }`}
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        value={orderForm.firstname}
                        onChange={hanldeChange}
                      />
                      {validated.firstname ? (
                        <div style={{ color: "red" }}>
                          First Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className={`form-row fullname-children ${validated}`}>
                      <label htmlFor="lastname" className="form-label">
                        {" "}
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          validated.lastname ? "invalid" : ""
                        }`}
                        id="lastname"
                        name="lastname"
                        placeholder="Doe"
                        value={orderForm.lastname}
                        onChange={hanldeChange}
                      />
                      {validated.lastname ? (
                        <div style={{ color: "red" }}>
                          Last Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <label htmlFor="compnayname" className="form-label">
                      Company name (optional)
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        validated.compnayname ? "invalid" : ""
                      }`}
                      id="compnayname"
                      name="compnayname"
                      placeholder="John"
                      value={orderForm.compnayname}
                      onChange={hanldeChange}
                    />
                    {validated.compnayname ? (
                      <div style={{ color: "red" }}>
                        Company Name can not be empty
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
                        validated.countryregion ? "invalid" : ""
                      }`}
                      value={orderForm.countryregion}
                      onChange={hanldeChange}
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
                    {validated.countryregion ? (
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
                        validated.towncity ? "invalid" : ""
                      }`}
                      name="towncity"
                      id="towncity"
                      placeholder="Town City"
                      value={orderForm.towncity}
                      onChange={hanldeChange}
                    />
                    {validated.towncity ? (
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
                        validated.statecountry ? "invalid" : ""
                      }`}
                      value={orderForm.statecountry}
                      onChange={hanldeChange}
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
                    {validated.statecountry ? (
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
                        validated.postcode ? "invalid" : ""
                      }`}
                      name="postcode"
                      id="postcode"
                      placeholder="Postcode / ZIP"
                      value={orderForm.postcode}
                      onChange={hanldeChange}
                    />
                    {validated.postcode ? (
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
                        validated.phone ? "invalid" : ""
                      }`}
                      name="phone"
                      id="phone"
                      placeholder="923001234567"
                      value={orderForm.phone}
                      onChange={hanldeChange}
                    />
                    {validated.phone ? (
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
                        validated.email ? "invalid" : ""
                      }`}
                      name="email"
                      id="email"
                      placeholder="johndeo@gmail.com"
                      value={orderForm.email}
                      onChange={hanldeChange}
                    />
                    {validated.email ? (
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
                              validated.ship_firstname ? "invalid" : ""
                            }`}
                            id="firstname"
                            name="ship_firstname"
                            placeholder="John"
                            value={orderForm.ship_firstname}
                            onChange={hanldeChange}
                          />
                          {validated.ship_firstname && address ? (
                            <div style={{ color: "red" }}>
                              First Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className={`form-row fullname-children ${validated}`}
                        >
                          <label htmlFor="lastname" className="form-label">
                            {" "}
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              validated.ship_lastname ? "invalid" : ""
                            }`}
                            id="lastname"
                            name="ship_lastname"
                            placeholder="Doe"
                            value={orderForm.ship_lastname}
                            onChange={hanldeChange}
                          />
                          {validated.ship_lastname && address ? (
                            <div style={{ color: "red" }}>
                              Last Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="compnayname" className="form-label">
                          Company name (optional)
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            validated.ship_companyname ? "invalid" : ""
                          }`}
                          id="compnayname"
                          name="ship_companyname"
                          placeholder="John"
                          value={orderForm.ship_companyname}
                          onChange={hanldeChange}
                        />
                        {validated.ship_companyname && address ? (
                          <div style={{ color: "red" }}>
                            Company Name can not be empty
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
                            validated.ship_countryregion ? "invalid" : ""
                          }`}
                          value={orderForm.ship_countryregion}
                          onChange={hanldeChange}
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
                        {validated.ship_countryregion && address ? (
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
                            validated.ship_towncity ? "invalid" : ""
                          }`}
                          name="ship_towncity"
                          id="towncity"
                          placeholder="Town City"
                          value={orderForm.ship_towncity}
                          onChange={hanldeChange}
                        />
                        {validated.ship_towncity && address ? (
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
                            validated.ship_statecountry ? "invalid" : ""
                          }`}
                          value={orderForm.ship_statecountry}
                          onChange={hanldeChange}
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
                        {validated.ship_statecountry && address ? (
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
                            validated.ship_postcode ? "invalid" : ""
                          }`}
                          name="ship_postcode"
                          id="postcode"
                          placeholder="Postcode / ZIP"
                          value={orderForm.ship_postcode}
                          onChange={hanldeChange}
                        />
                        {validated.ship_postcode && address ? (
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
                      value={orderForm.ordernotes}
                      onChange={hanldeChange}
                    />
                    {validated.ordernotes ? (
                      <div style={{ color: "red" }}>Notes can not be empty</div>
                    ) : (
                      ""
                    )}
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
