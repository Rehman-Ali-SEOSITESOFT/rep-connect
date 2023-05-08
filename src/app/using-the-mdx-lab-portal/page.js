import BreadCrum from "@/components/breadCrum/BreadCrum"
import styles from "./using-the-mdx-lab-portal.module.css"
import React from "react"

const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="using-the-mdx-lab-portal"
        pageName="Home"
        subPage="using-the-mdx-lab-portal"
      />
      <div className="container-xxl">
        <div className="row mt-4 mb-4">
          <div className="col-6">
            <div>
              <div className={styles.heading}>
                Navigating the Lab Portal for REPS
              </div>
              <div className={styles.box}></div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <div className={styles.heading}>
                Navigating the Lab Portal for Physicians
              </div>
              <div className={styles.box}></div>
            </div>
          </div>
        </div>
        <div className={styles.main_heading}> The Lab Portal </div>
        <hr />
        <div className={styles.paragraphs}>
          <p>
            {" "}
            The lab portal is where you will associate your physician/accounts,
            track samples, and see daily samples generated by your accounts.
          </p>
          <p>
            {" "}
            Please do not associate any accounts that you do not have a direct
            relationship with and have not called on.
          </p>
          <br />
          <p> Select "Lab Portal" below to register or sign-in.</p>
          <p>
            Once you have registered you will have access to the portal within
            24 hours.
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <button className={styles.portal_btn}>
              {" "}
              <i className="fa-solid fa-flask"></i>{" "}
              <span className={styles.btn_text}> Portal Lab </span>{" "}
            </button>
          </div>
          <div className="col-6">
            <button className={styles.portal_btn}>
              {" "}
              <i className="fa-regular fa-address-book"></i>{" "}
              <span className={styles.btn_text}> Portal Lab </span>{" "}
            </button>
          </div>
        </div>
        <div className={styles.main_heading}>
          {" "}
          Requesting Physician Association{" "}
        </div>
        <hr />
        <p>
          If there is a physician you have worked to bring in who is already in
          the Lab Portal please request re-association by emailing Patrick Papa,
          VP of Sales at patrick.papa@microgendx.com.
        </p>
        <p>
          Per the the sales contract with MicroGenDX, customers who fail to
          submit a sample to the Lab in 60 days become available for other
          contractors.
        </p>
        <div className="row justify-content-center">
          <div className="col-6">
            <button className={styles.portal_btn}>
              {" "}
              <i className="fa-regular fa-address-book"></i>{" "}
              <span className={styles.btn_text}>
                {" "}
                Physician Association Policy Lab{" "}
              </span>{" "}
            </button>
          </div>
        </div>

        <div className={styles.main_heading}>
          Be sure each of your offices & physicians are set up in the Lab Portal
        </div>
        <hr />
        <div className={styles.paragraphs}>
          <p>
            Be sure to submit the below Portal Request for Office Access Form to
            ensure privacy of patient information and correct delivery of
            patient reports to the proper individuals, please provide all of the
            following information regarding the requesting medical office.{" "}
          </p>
          <p>
            {" "}
            This is to ensure that the information we have on file is correct
            and to verify account details for registered accounts.{" "}
          </p>
          <p>
            Additional requests may be submitted to cover additional locations
            or emails as needed.
          </p>
          <p>For additional assistance, contact information@pathogenius.com.</p>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-6">
            <button className={styles.portal_btn}>
              {" "}
              <i className="fa-regular fa-address-book"></i>{" "}
              <span className={styles.btn_text}>
                {" "}
                Portal Request for Office Access{" "}
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
