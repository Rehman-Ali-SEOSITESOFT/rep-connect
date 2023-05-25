import React, { useState } from "react";
import "./RegisterAccordian.css";
import tooltip from "../../assets/images/register/help.png";
import Image from "next/image";
import defaultImage from "../../assets/images/register/download.png";
import { CountyList } from "@/data/countylist/CountyList";
const RegisterAccordian = () => {
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    position: "",
    distributionGroup: "",
    email: "",
    mobile: "",
    password: "",
    confrimPassword: "",
    profileName: "",
    gender: "",
    country: "",
    facebook: "",
    twitter: "",
    google: "",
    website: "",
  });
  const _handleRegistrationForm = (e) => {
    e.preventDefault();
  };
  const _handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form onSubmit={_handleRegistrationForm}>
        <div className="row second_row">
          <div className="col-lg-12 p-0">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Account Detail
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="username_area">
                          <span className="iconss">
                            <i className="fa-solid fa-user"></i>
                          </span>
                          <h6>
                            UserName <span>*</span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.firstName}
                          onChange={_handleChange}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">
                          First Name <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          onChange={_handleChange}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">
                          Last Name <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.lastName}
                          onChange={_handleChange}
                          name="lastName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">Title/Position</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.position}
                          onChange={_handleChange}
                          name="position"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-regular fa-envelope-open"></i>
                        </span>
                        <h6>Email Address</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.email}
                          onChange={_handleChange}
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">Mobile Number</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.mobile}
                          onChange={_handleChange}
                          name="mobile"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-lock"></i>
                        </span>
                        <h6>
                          Password <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.password}
                          onChange={_handleChange}
                          name="password"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">
                          Confirm Password <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.confrimPassword}
                          onChange={_handleChange}
                          name="confrimPassword"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row third_row">
          <div className="col-lg-12 p-0">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button third_row_button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Profile Detail
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      <div className="col-lg-5">
                        <div className="username_area">
                          <h6 className="without_icon">
                            Profile Display Name
                            <span>
                              <Image src={tooltip} alt="" />
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control display_name"
                          value={registerForm.profileName}
                          onChange={_handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-camera"></i>
                        </span>
                        <h6 className="mb-0">
                          profile Picture
                          <span>
                            <Image src={tooltip} alt="" />
                          </span>
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <div className="image_section">
                          <Image src={defaultImage} alt="" />
                          <div>
                            <label for="myfile" className="upload_pic">
                              Upload a profile picture
                            </label>
                            <input
                              type="file"
                              id="myfile"
                              name="myfile"
                              // onChange={handleImageChange}
                              style={{ display: "none" }}
                            />
                            <button
                              className="click_photo"
                              // onClick={_handleImage}
                            >
                              Take Photo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="without_icon">Gender</h6>
                      </div>
                      <div className="col-lg-7">
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="exampleRadios1"
                              value="Male"

                              //   onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="exampleRadios1"
                              value="Female"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <h6 className="mb-0">Country/Region</h6>
                      </div>
                      <div className="col-lg-7">
                        <select className="w-100">
                          {CountyList.map((e, idx) => {
                            return <option key={idx}>{e}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row third_row fourth">
          <div className="col-lg-12 p-0">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button third_row_button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Profile Detail
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-lg-5 align-items-center">
                        <div className="username_area">
                          <span className="iconss">
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                          <h6>Facebook Page</h6>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.facebook}
                          onChange={_handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-brands fa-twitter"></i>
                        </span>
                        <h6 className="mb-0">Twitter</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.twitter}
                          onChange={_handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-brands fa-google-plus-g"></i>
                        </span>
                        <h6 className="mb-0">Google+</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.google}
                          onChange={_handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-house"></i>
                        </span>
                        <h6 className="mb-0">Website (URL)</h6>
                      </div>
                      <div className="col-lg-7">
                        <input
                          className="form-control"
                          value={registerForm.website}
                          onChange={_handleChange}
                        />
                      </div>
                    </div>
                    <div className="row last_row">
                      <div className="col-lg-12 d-flex align-items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          value="Bike"
                        />
                        <label for="terms" className="label_terms">
                          To complete registration, you must read and agree to
                          our terms and conditions.
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="buttonsss">
                          <button>Register</button>
                          <button>Login</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterAccordian;
