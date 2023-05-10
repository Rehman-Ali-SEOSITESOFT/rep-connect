"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Logo from "../../assets/images/login/Rep-Connect-Logo-2021.png";
import Image from "next/image";
const Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [seePassword, setSeePassword] = useState(false);
  const handleChange = (e) => {
    setUser({
      ...setUser,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
   };

  const onClickSeePassword = (e) => {
    e.preventDefault();
    setSeePassword(!seePassword);
  };
  return (
    <div>
      <div className={`${styles.main}`}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.dp_flex} justify-content-center`}>
              <Image src={Logo} alt="logo" />
            </div>
            <div className={styles.form_container}>
              <form onSubmit={handleSubmit}>
                <label> Username / Email </label>
                <div className={styles.input_container}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Type Username or Email"
                  />
                </div>
                <label> Password </label>
                <div className={styles.input_container}>
                  <div>
                    <i className="fa-solid fa-key"></i>
                  </div>
                  <input
                    name="password"
                    onChange={handleChange}
                    value={user.password}
                    type={seePassword ? "text" : "password"}
                    placeholder="Type Password"
                  />
                  <div>
                    {seePassword ? (
                      <i
                        className="fa-solid fa-eye-slash"
                        onClick={(e) => onClickSeePassword(e)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye"
                        onClick={(e) => onClickSeePassword(e)}
                      ></i>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    value="remember_me"
                  />
                  <span> Remember Me </span>
                </div>
                <div className={styles.button_container}>
                  <button type="submit"> Log In </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className={styles.register_area}>
                <div> Register </div>
                <div className={styles.line}> </div>
                <div> Lost your password? </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className={styles.language_area}>
                <div>
                  <i className="fa-solid fa-language"></i>{" "}
                </div>
                <select name="language" id="language">
                  <option value="English">English (United Stated)</option>
                  <option value="Espanol">Espanol</option>
                </select>
                <button> change </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
