"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Member from "../../../assets/images/Profile/member.png"
import styles from "./editprofile.module.css"
import help from "../../../assets/images/Profile/help.png"
import axios from "axios"
import WebCam from "@/components/webCam/WebCam"
import WebCamera from "@/components/webCam/WebCam"

const EditProfile = () => {

  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    bioGraphy: "",
    gender: "",
    country: "",
    facebook_page: "",
    twitter: "",
    mobile: "",
    website: "",
    mobile: "",
    email: "",
  })
  const [entries, setEntries] = useState([])
  const [changeIcon, setChangeIcon] = useState([false, false, false])
  const [images, setImages] = useState([])
  const [active, setActive] = useState(false)
  const _handleChangeInputs = (e) => {
    setActive(!active)
    setTimeout(() => {
      setActive(false)
    }, 3000)
  }
  console.log(active)
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  })
  const onInputChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
    validateInput(e)
  }
  // const [changeClass, setChangeClass] = useState([false, false, false]);
  const newArray = [false, false, false]
  const handleProfileSubmit = (e) => {
    e.preventDefault()
    // console.log("asdfgadfsg", userProfile.firstName)
  }
  const handleIcon = (value) => {
    console.log("value:", changeIcon[value])
    const newArray = [...changeIcon]
    for (let i = 0; i < newArray.length; i++) {
      if (i === value) {
        newArray[i] = !newArray[i]
      } else {
        newArray[i] = false
      }
    }
    setChangeIcon(newArray)
  }
  const handleChange = (e) => {
    setEntries({
      ...setUserProfile,
      [e.target.name]: e.target.value,
    })
  }
  const [userToken, setUserToken] = useState("")
  useEffect(() => {
    setUserToken(JSON.parse(localStorage.getItem("token")))
    const header = {
      "x-auth-token": userToken,
      "Content-Type": "application/json",
    }

    axios
      .get("https://anxious-foal-shift.cyclic.app/api/user/getSingleUser", {
        headers: header,
      })
      .then((resp) => {
        setEntries(resp.data.data[0])
      })
      .catch((err) => console.log(err))
  }, [userToken])
const [isRendered ,setIsRendered]=useState(false)
  const validateInput = (e) => {
    let { name, value } = e.target
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" }
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password."
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match."
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword
          }
          break
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password."
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match."
          }
          break
      }
      return stateObj
    })
  }

  const _handleUpdateData = (event, data) => {
    console.log(userToken, "user token for patch")
    const header = {
      "x-auth-token": userToken,
      "Content-Type": "application/json",
    }
    const userData = {
      first_name: entries.first_name,
      last_name: entries.last_name,
      bioGraphy: entries.bioGraphy,
      gender: entries.gender,
      // facebook_page: entries.social_profiles.facebook_page,
    }
    axios
      .patch(
        "https://anxious-foal-shift.cyclic.app/api/user/editProfile",
        userData,
        {
          headers: header,
        }
      )
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
  }
  const _handleImage=()=>{
    setIsRendered(true)
  }
  const _handleCaputeree=()=>{
    setIsRendered(!isRendered);
  }
  return (
    <>
    {/* <WebCamera/> */}
    
    <section className="position-relative">

      <div className="container-xxl">
        <div className={styles.profile_container}>
          <div className={styles.profile_area}>
            <div className={styles.btn_span}>
              <button className={styles.logout_btn}> logout </button>
            </div>
            <div className={styles.loginAreaDetails}>
              <div>
                <Image
                  height={80}
                  className={styles.logImg}
                  src={Member}
                  alt="logo"
                />
              </div>
              <div>
                <span className={styles.para}>grtesting</span>
              </div>
              <div>
                <button className={styles.editprofile}>Edit Profile</button>
              </div>
              <div className={styles.email}>
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
          <div className={styles.accordion_section}>
            <form onSubmit={handleProfileSubmit}>
              <div className={`accordion`} id="accordionExample">
                <div className={styles.accordion_item01}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={
                          changeIcon[0]
                            ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                            : `accordion-button ${styles.accordion_btn} ${styles.active}`
                        }
                        onClick={() => handleIcon(0)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne01"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {changeIcon[0] ? (
                          <div className={styles.icons}>
                            {" "}
                            <span>
                              {" "}
                              <i className="fa-solid fa-angle-right"></i>{" "}
                            </span>{" "}
                          </div>
                        ) : (
                          <div className={styles.icons}>
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        )}
                        Profile Details
                      </button>
                    </h2>
                    <div
                      id="collapseOne01"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-1">
                            <div className={styles.label}>
                              <label> Profile Display Name </label>
                              <span>
                            
                                <Image src={help} alt="logo" />{" "}
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-1">
                            <input
                              className={`w-100 ${
                                active ? styles.input : styles.secondInput
                              }`}
                              value={entries.username}
                              onChange={handleChange}
                              onClick={_handleChangeInputs}
                            
                            />
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                          
                                <i className="fa-solid fa-camera"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                          
                                Profile Picture{" "}
                                <span>
                            
                                  <Image
                                    alt="logo"
                                    src={help}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Upload a picture that presents you across this site"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-1">
                            <div>
                              <div className={styles.img_area}>
                                <Image
                                  height={80}
                                  className={`${styles.logImg}`}
                                  src={Member}
                                  alt="logo"
                                />
                              </div>
                              <div>
                               
                              <label for="myfile" className={styles.upload_pic}>Upload a profile picture</label>
                                <input type="file" id="myfile" name="myfile" style={{display:"none"}}/>
                                <button className={styles.click_photo} onClick={_handleImage}>
                                Take Photo
                                </button>
                                {/* <button>Take Photo</button> */}
                                <div className={`${styles.photooo}`}>
                              
                                   {
                                    isRendered ? <WebCamera rendered={isRendered} _handleCaputer={_handleCaputeree}/>:<button className="d-none"></button>
                                   }   
                                   </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>
                              <label> First Name </label>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <input
                              onChange={handleChange}
                              value={entries.first_name}
                              name="first_name"
                              className={`w-100 ${
                                active ? styles.input : styles.secondInput
                              }`}
                              onClick={_handleChangeInputs}
                            />
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>
                              <label> Last Name </label>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <input
                              onChange={handleChange}
                              value={entries.last_name}
                              name="last_name"
                              className={`w-100 ${
                                active ? styles.input : styles.secondInput
                              }`}
                              onClick={_handleChangeInputs}
                            />
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>
                              Bio Graphy
                              <span>
                                {" "}
                                <Image
                                  src={help}
                                  data-toggle="tooltip"
                                  data-placement="bottom"
                                  title="Upload a picture that presents you across this s"
                                  alt="logo"
                                />{" "}
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <textarea
                              onChange={handleChange}
                              value={entries.bioGraphy}
                              name="bioGraphy"
                              rows="6"
                              className={`w-100 ${styles.textarea01}`}
                            />
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>Gender</div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            {/* <div className={styles.gender_area}> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="exampleRadios1"
                                value="Male"
                                checked={entries.gender === "Male"}
                                onChange={handleChange}
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
                                id="exampleRadios2"
                                value="Female"
                                checked={entries.gender === "Female"}
                                onChange={handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleRadios2"
                              >
                                Female
                              </label>
                              {/* </div> */}
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                {" "}
                                <i className="fa-solid fa-location-dot"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                {" "}
                                country/region{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <select
                                  className={`w-100 ${styles.input}`}
                                  onChange={handleChange}
                                  value={userProfile.country}
                                  name="country"
                                >
                                  <option defaultValue="selected">
                                    Select
                                  </option>
                                  <option value="Afghanistan">
                                    Afghanistan
                                  </option>
                                  <option value="Albania">Albania</option>
                                  <option value="Algeria">Algeria</option>
                                  <option value="American Samoa">
                                    American Samoa
                                  </option>
                                  <option value="Andorra">Andorra</option>
                                  <option value="Angola">Angola</option>
                                  <option value="Anguilla">Anguilla</option>
                                  <option value="Antarctica">Antarctica</option>
                                  <option value="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="Argentina">Argentina</option>
                                  <option value="Armenia">Armenia</option>
                                  <option value="Aruba">Aruba</option>
                                  <option value="Australia">Australia</option>
                                  <option value="Austria">Austria</option>
                                  <option value="Azerbaijan">Azerbaijan</option>
                                  <option value="Bahamas">Bahamas</option>
                                  <option value="Bahrain">Bahrain</option>
                                  <option value="Bangladesh">Bangladesh</option>
                                  <option value="Barbados">Barbados</option>
                                  <option value="Belarus">Belarus</option>
                                  <option value="Belgium">Belgium</option>
                                  <option value="Belize">Belize</option>
                                  <option value="Benin">Benin</option>
                                  <option value="Bermuda">Bermuda</option>
                                  <option value="Bhutan">Bhutan</option>
                                  <option value="Bolivia">Bolivia</option>
                                  <option value="Bonaire, Sint Eustatius and Saba">
                                    Bonaire, Sint Eustatius and Saba
                                  </option>
                                  <option value="Bosnia and Herzegovina">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="Botswana">Botswana</option>
                                  <option value="Bouvet Island">
                                    Bouvet Island
                                  </option>
                                  <option value="Brazil">Brazil</option>
                                  <option value="British Indian Ocean Territory">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="Brunei Darussalam">
                                    Brunei Darussalam
                                  </option>
                                  <option value="Bulgaria">Bulgaria</option>
                                  <option value="Burkina Faso">
                                    Burkina Faso
                                  </option>
                                  <option value="Burundi">Burundi</option>
                                  <option value="Cabo Verde">Cabo Verde</option>
                                  <option value="Cambodia">Cambodia</option>
                                  <option value="Cameroon">Cameroon</option>
                                  <option value="Canada">Canada</option>
                                  <option value="Cayman Islands">
                                    Cayman Islands
                                  </option>
                                  <option value="Central African Republic">
                                    Central African Republic
                                  </option>
                                  <option value="Chad">Chad</option>
                                  <option value="Chile">Chile</option>
                                  <option value="China">China</option>
                                  <option value="Christmas Island">
                                    Christmas Island
                                  </option>
                                  <option value="Cocos Islands">
                                    Cocos Islands
                                  </option>
                                  <option value="Colombia">Colombia</option>
                                  <option value="Comoros">Comoros</option>
                                  <option value="Congo">Congo</option>
                                  <option value="Congo, Democratic Republic of the">
                                    Congo, Democratic Republic of the
                                  </option>
                                  <option value="Cook Islands">
                                    Cook Islands
                                  </option>
                                  <option value="Costa Rica">Costa Rica</option>
                                  <option value="Croatia">Croatia</option>
                                  <option value="Cuba">Cuba</option>
                                  <option value="Curaçao">Curaçao</option>
                                  <option value="Cyprus">Cyprus</option>
                                  <option value="Czechia">Czechia</option>
                                  <option value="Côte d'Ivoire">
                                    Côte d'Ivoire
                                  </option>
                                  <option value="Denmark">Denmark</option>
                                  <option value="Djibouti">Djibouti</option>
                                  <option value="Dominica">Dominica</option>
                                  <option value="Dominican Republic">
                                    Dominican Republic
                                  </option>
                                  <option value="Ecuador">Ecuador</option>
                                  <option value="Egypt">Egypt</option>
                                  <option value="El Salvador">
                                    El Salvador
                                  </option>
                                  <option value="Equatorial Guinea">
                                    Equatorial Guinea
                                  </option>
                                  <option value="Eritrea">Eritrea</option>
                                  <option value="Estonia">Estonia</option>
                                  <option value="Eswatini">Eswatini</option>
                                  <option value="Ethiopia">Ethiopia</option>
                                  <option value="Falkland Islands">
                                    Falkland Islands
                                  </option>
                                  <option value="Faroe Islands">
                                    Faroe Islands
                                  </option>
                                  <option value="Fiji">Fiji</option>
                                  <option value="Finland">Finland</option>
                                  <option value="France">France</option>
                                  <option value="French Guiana">
                                    French Guiana
                                  </option>
                                  <option value="French Polynesia">
                                    French Polynesia
                                  </option>
                                  <option value="French Southern Territories">
                                    French Southern Territories
                                  </option>
                                  <option value="Gabon">Gabon</option>
                                  <option value="Gambia">Gambia</option>
                                  <option value="Georgia">Georgia</option>
                                  <option value="Germany">Germany</option>
                                  <option value="Ghana">Ghana</option>
                                  <option value="Gibraltar">Gibraltar</option>
                                  <option value="Greece">Greece</option>
                                  <option value="Greenland">Greenland</option>
                                  <option value="Grenada">Grenada</option>
                                  <option value="Guadeloupe">Guadeloupe</option>
                                  <option value="Guam">Guam</option>
                                  <option value="Guatemala">Guatemala</option>
                                  <option value="Guernsey">Guernsey</option>
                                  <option value="Guinea">Guinea</option>
                                  <option value="Guinea-Bissau">
                                    Guinea-Bissau
                                  </option>
                                  <option value="Guyana">Guyana</option>
                                  <option value="Haiti">Haiti</option>
                                  <option value="Heard Island and McDonald Islands">
                                    Heard Island and McDonald Islands
                                  </option>
                                  <option value="Holy See">Holy See</option>
                                  <option value="Honduras">Honduras</option>
                                  <option value="Hong Kong">Hong Kong</option>
                                  <option value="Hungary">Hungary</option>
                                  <option value="Iceland">Iceland</option>
                                  <option value="India">India</option>
                                  <option value="Indonesia">Indonesia</option>
                                  <option value="Iran">Iran</option>
                                  <option value="Iraq">Iraq</option>
                                  <option value="Ireland">Ireland</option>
                                  <option value="Isle of Man">
                                    Isle of Man
                                  </option>
                                  <option value="Israel">Israel</option>
                                  <option value="Italy">Italy</option>
                                  <option value="Jamaica">Jamaica</option>
                                  <option value="Japan">Japan</option>
                                  <option value="Jersey">Jersey</option>
                                  <option value="Jordan">Jordan</option>
                                  <option value="Kazakhstan">Kazakhstan</option>
                                  <option value="Kenya">Kenya</option>
                                  <option value="Kiribati">Kiribati</option>
                                  <option value="Korea, Democratic People's Republic of">
                                    Korea, Democratic People's Republic of
                                  </option>
                                  <option value="Korea, Republic of">
                                    Korea, Republic of
                                  </option>
                                  <option value="Kuwait">Kuwait</option>
                                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                                  <option value="Lao People's Democratic Republic">
                                    Lao People's Democratic Republic
                                  </option>
                                  <option value="Latvia">Latvia</option>
                                  <option value="Lebanon">Lebanon</option>
                                  <option value="Lesotho">Lesotho</option>
                                  <option value="Liberia">Liberia</option>
                                  <option value="Libya">Libya</option>
                                  <option value="Liechtenstein">
                                    Liechtenstein
                                  </option>
                                  <option value="Lithuania">Lithuania</option>
                                  <option value="Luxembourg">Luxembourg</option>
                                  <option value="Macao">Macao</option>
                                  <option value="Madagascar">Madagascar</option>
                                  <option value="Malawi">Malawi</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Maldives">Maldives</option>
                                  <option value="Mali">Mali</option>
                                  <option value="Malta">Malta</option>
                                  <option value="Marshall Islands">
                                    Marshall Islands
                                  </option>
                                  <option value="Martinique">Martinique</option>
                                  <option value="Mauritania">Mauritania</option>
                                  <option value="Mauritius">Mauritius</option>
                                  <option value="Mayotte">Mayotte</option>
                                  <option value="Mexico">Mexico</option>
                                  <option value="Micronesia">Micronesia</option>
                                  <option value="Moldova">Moldova</option>
                                  <option value="Monaco">Monaco</option>
                                  <option value="Mongolia">Mongolia</option>
                                  <option value="Montenegro">Montenegro</option>
                                  <option value="Montserrat">Montserrat</option>
                                  <option value="Morocco">Morocco</option>
                                  <option value="Mozambique">Mozambique</option>
                                  <option value="Myanmar">Myanmar</option>
                                  <option value="Namibia">Namibia</option>
                                  <option value="Nauru">Nauru</option>
                                  <option value="Nepal">Nepal</option>
                                  <option value="Netherlands">
                                    Netherlands
                                  </option>
                                  <option value="New Caledonia">
                                    New Caledonia
                                  </option>
                                  <option value="New Zealand">
                                    New Zealand
                                  </option>
                                  <option value="Nicaragua">Nicaragua</option>
                                  <option value="Niger">Niger</option>
                                  <option value="Nigeria">Nigeria</option>
                                  <option value="Niue">Niue</option>
                                  <option value="Norfolk Island">
                                    Norfolk Island
                                  </option>
                                  <option value="North Macedonia">
                                    North Macedonia
                                  </option>
                                  <option value="Northern Mariana Islands">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="Norway">Norway</option>
                                  <option value="Oman">Oman</option>
                                  <option value="Pakistan">Pakistan</option>
                                  <option value="Palau">Palau</option>
                                  <option value="Palestine, State of">
                                    Palestine, State of
                                  </option>
                                  <option value="Panama">Panama</option>
                                  <option value="Papua New Guinea">
                                    Papua New Guinea
                                  </option>
                                  <option value="Paraguay">Paraguay</option>
                                  <option value="Peru">Peru</option>
                                  <option value="Philippines">
                                    Philippines
                                  </option>
                                  <option value="Pitcairn">Pitcairn</option>
                                  <option value="Poland">Poland</option>
                                  <option value="Portugal">Portugal</option>
                                  <option value="Puerto Rico">
                                    Puerto Rico
                                  </option>
                                  <option value="Qatar">Qatar</option>
                                  <option value="Romania">Romania</option>
                                  <option value="Russian Federation">
                                    Russian Federation
                                  </option>
                                  <option value="Rwanda">Rwanda</option>
                                  <option value="Réunion">Réunion</option>
                                  <option value="Saint Barthélemy">
                                    Saint Barthélemy
                                  </option>
                                  <option value="Saint Helena, Ascension and Tristan da Cunha">
                                    Saint Helena, Ascension and Tristan da Cunha
                                  </option>
                                  <option value="Saint Kitts and Nevis">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="Saint Lucia">
                                    Saint Lucia
                                  </option>
                                  <option value="Saint Martin">
                                    Saint Martin
                                  </option>
                                  <option value="Saint Pierre and Miquelon">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="Saint Vincent and the Grenadines">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="Samoa">Samoa</option>
                                  <option value="San Marino">San Marino</option>
                                  <option value="Sao Tome and Principe">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="Saudi Arabia">
                                    Saudi Arabia
                                  </option>
                                  <option value="Senegal">Senegal</option>
                                  <option value="Serbia">Serbia</option>
                                  <option value="Seychelles">Seychelles</option>
                                  <option value="Sierra Leone">
                                    Sierra Leone
                                  </option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Sint Maarten">
                                    Sint Maarten
                                  </option>
                                  <option value="Slovakia">Slovakia</option>
                                  <option value="Slovenia">Slovenia</option>
                                  <option value="Solomon Islands">
                                    Solomon Islands
                                  </option>
                                  <option value="Somalia">Somalia</option>
                                  <option value="South Africa">
                                    South Africa
                                  </option>
                                  <option value="South Georgia and the South Sandwich Islands">
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="South Sudan">
                                    South Sudan
                                  </option>
                                  <option value="Spain">Spain</option>
                                  <option value="Sri Lanka">Sri Lanka</option>
                                  <option value="Sudan">Sudan</option>
                                  <option value="Suriname">Suriname</option>
                                  <option value="Svalbard and Jan Mayen">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="Sweden">Sweden</option>
                                  <option value="Switzerland">
                                    Switzerland
                                  </option>
                                  <option value="Syria Arab Republic">
                                    Syria Arab Republic
                                  </option>
                                  <option value="Taiwan">Taiwan</option>
                                  <option value="Tajikistan">Tajikistan</option>
                                  <option value="Tanzania, the United Republic of">
                                    Tanzania, the United Republic of
                                  </option>
                                  <option value="Thailand">Thailand</option>
                                  <option value="Timor-Leste">
                                    Timor-Leste
                                  </option>
                                  <option value="Togo">Togo</option>
                                  <option value="Tokelau">Tokelau</option>
                                  <option value="Tonga">Tonga</option>
                                  <option value="Trinidad and Tobago">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="Tunisia">Tunisia</option>
                                  <option value="Turkmenistan">
                                    Turkmenistan
                                  </option>
                                  <option value="Turks and Caicos Islands">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="Tuvalu">Tuvalu</option>
                                  <option value="Türkiye">Türkiye</option>
                                  <option value="US Minor Outlying Islands">
                                    US Minor Outlying Islands
                                  </option>
                                  <option value="Uganda">Uganda</option>
                                  <option value="Ukraine">Ukraine</option>
                                  <option value="United Arab Emirates">
                                    United Arab Emirates
                                  </option>
                                  <option value="United Kingdom">
                                    United Kingdom
                                  </option>
                                  <option value="United States">
                                    United States
                                  </option>
                                  <option value="Uruguay">Uruguay</option>
                                  <option value="Uzbekistan">Uzbekistan</option>
                                  <option value="Vanuatu">Vanuatu</option>
                                  <option value="Venezuela">Venezuela</option>
                                  <option value="Viet Nam">Viet Nam</option>
                                  <option value="Virgin Islands, British">
                                    Virgin Islands, British
                                  </option>
                                  <option value="Virgin Islands, U.S.">
                                    Virgin Islands, U.S.
                                  </option>
                                  <option value="Wallis and Futuna">
                                    Wallis and Futuna
                                  </option>
                                  <option value="Western Sahara">
                                    Western Sahara
                                  </option>
                                  <option value="Yemen">Yemen</option>
                                  <option value="Zambia">Zambia</option>
                                  <option value="Zimbabwe">Zimbabwe</option>
                                  <option value="Åland Islands">
                                    Åland Islands
                                  </option>{" "}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.accordion_item01}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={
                          changeIcon[1]
                            ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                            : `accordion-button ${styles.accordion_btn} ${styles.active}`
                        }
                        onClick={() => handleIcon(1)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne02"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {changeIcon[1] ? (
                          <div className={styles.icons}>
                            {" "}
                            <span>
                              {" "}
                              <i className="fa-solid fa-angle-right"></i>{" "}
                            </span>{" "}
                          </div>
                        ) : (
                          <div className={styles.icons}>
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        )}
                        Social Profiles
                      </button>
                    </h2>
                    <div
                      id="collapseOne02"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i className="fa-brands fa-facebook-f"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                {" "}
                                <label> Facebook Page </label>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <input
                                  onChange={handleChange}
                                  value={entries.social_profiles?.facebook_page}
                                  name="fb"
                                  className={`w-100 ${
                                    active ? styles.input : styles.secondInput
                                  }`}
                                  onClick={_handleChangeInputs}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i className="fa-brands fa-twitter"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                {" "}
                                <label> Twitter </label>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <input
                                  onChange={handleChange}
                                  // value={entries.social_profiles}
                                  name="twitter"
                                  className={`w-100 ${
                                    active ? styles.input : styles.secondInput
                                  }`}
                                  onClick={_handleChangeInputs}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i className="fa-brands fa-google-plus-g"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}> Google+ </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <input
                                  onChange={handleChange}
                                  // value={entries.social_profiles.google_plus}
                                  className={`w-100 ${
                                    active ? styles.input : styles.secondInput
                                  }`}
                                  onClick={_handleChangeInputs}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i class="fa-solid fa-house"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                {" "}
                                Website(URL){" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <input
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                    onClick={_handleChangeInputs}
                                  // value={entries.social_profiles}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.accordion_item01}>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={
                          changeIcon[2]
                            ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                            : `accordion-button ${styles.accordion_btn} ${styles.active}`
                        }
                        onClick={() => handleIcon(2)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne03"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {changeIcon[2] ? (
                          <div className={styles.icons}>
                            {" "}
                            <span>
                              {" "}
                              <i className="fa-solid fa-angle-right"></i>{" "}
                            </span>{" "}
                          </div>
                        ) : (
                          <div className={styles.icons}>
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        )}
                        Account Details
                      </button>
                    </h2>
                    <div
                      id="collapseOne03"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>
                              <label> Mobile Number </label>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <input
                               className={`w-100 ${
                                active ? styles.input : styles.secondInput
                              }`}
                              onClick={_handleChangeInputs}
                              value={entries.mobile}
                              type="number"
                              name="mobile"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i class="fa-regular fa-envelope"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                {" "}
                                E-mail Address{" "}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div>
                                <input
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                    onClick={_handleChangeInputs}
                                  value={entries.email}
                                  name="email"
                                  onChange={handleChange}
                                />
                                <span className={styles.check_box}>
                                  <input type="checkbox" />
                                  <span className={styles.check_box_label}>
                                    {" "}
                                    MAKE THIS FIELD HIDDEN FROM PUBLIC{" "}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.profilePic}>
                              <div className={styles.camIcon}>
                                <i className="fa-solid fa-lock"></i>{" "}
                              </div>
                              <div className={styles.iconLabel}>
                                Password
                                <span>
                                  <Image
                                    src={help}
                                    data-toggle="tooltip"
                                    data-placement="bottom"
                                    title="Upload a picture that presents you across this site"
                                    alt="logo"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <div>
                              <div className={`${styles.tickIcon}`}>
                                <input
                                  type="password"
                                  name="password"
                                  className={`w-100 ${styles.tickIcon} ${styles.input}`}
                                  value={input.password}
                                  onChange={onInputChange}
                                  onBlur={validateInput}
                                />
                                <span className={`${styles.tickIcon01}`}>
                                  <i class="fa-solid fa-check"></i>{" "}
                                </span>
                                {error.password && (
                                  <span className="err">{error.password}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${styles.profile_row}`}>
                          <div className="col-lg-4 col-md-12 p-2">
                            <div className={styles.label}>Confirm Password</div>
                          </div>
                          <div className="col-lg-8 col-md-12 p-2">
                            <input
                              type="password"
                              name="confirmPassword"
                              className={`w-100 ${styles.input}`}
                              value={input.confirmPassword}
                              onChange={onInputChange}
                              onBlur={validateInput}
                            />
                            {error.confirmPassword && (
                              <span className="err">
                                {error.confirmPassword}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={styles.btns_row}>
                  <button
                    type="submit"
                    className={styles.save_changes}
                    onClick={(event, data) => _handleUpdateData(event, data)}
                  >
                    save changes
                  </button>
                  <button className={styles.upload_pic02}>
                    Request Verification
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditProfile
