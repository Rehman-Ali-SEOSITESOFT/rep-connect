"use client"

import React, { useState } from "react"
import styles from "./microgendxInsider.module.css"
import MicrogendxInsiderComponent from "@/components/microgendxInsiderComponent/microgendxInsiderComponent"
import labCompany from "../../assets/images/microgenInsider/lab-company.png"
import drpleads from "../../assets/images/microgenInsider/doctorpleads.png"
import indicated from "../../assets/images/microgenInsider/tenindicted.png"
import business from "../../assets/images/microgenInsider/businessagreement.png"
import jail from "../../assets/images/microgenInsider/jail.png"
const page = () => {
  const [micrognInsider, setMicrognInsider] = useState([
    {
      image: labCompany,
      heading:
        "Lab Company Owners Indicted for False Billing of Medically Unnecessary Tests",
      paragraph:
        "Case:  A north Texas federal grand jury indicted 10 people for a $300 million Medicare fraud scheme, including two physicians and the founders of three lab […]",
      comments: "3",
      readComment: "Read more",
      link: "lab-company-owners-indicted-for-false-billing-of-medically-unnecessary-tests/",
    },
    {
      image: drpleads,
      heading: "Doctor Pleads Guilty to Accepting Illegal Kickback Payments",
      paragraph:
        "It is illegal to pay or receive “kickbacks” in conjunction with federal health care insurance. Prohibitions against kickbacks are crucial to ensure that financial motives do […]",
      comments: "0",
      readComment: "Read more",
      link: "doctor-pleads-guilty-to-accepting-illegal-kickback-payments/",
    },
    {
      image: business,
      heading: "Business Associate Agreements 101",
      paragraph:
        "One of my offices told me I need to have a BAA (Business Associate Agreement) signed with them, what are they referring to and what should […]",
      comments: "0",
      readComment: "Read more",
      link: "business-associate-agreements-101/",
    },
    {
      image: indicated,
      heading:
        "Ten Indicted for Healthcare Kickbacks; Including Labs, Marketers and Physicians",
      paragraph:
        "Ten Indicted for Healthcare Kickbacks According to the indictment, the founders of several lab companies, including Unified Laboratory Services, Spectrum Diagnostic Laboratory, and Reliable Labs LLC, […]",
      comments: "0",
      readComment: "Read more",
      link: "ten-indicted-for-healthcare-kickbacks-including-labs-marketers-and-physicians/",
    },
    {
      image: jail,
      heading:
        "Laboratory Owner Sentenced to 82 Months in Prison for COVID-19 Kickback Scheme",
      paragraph:
        "A Florida owner of multiple diagnostic testing laboratories was sentenced today in the Southern District of Florida to 82 months in prison for a scheme to […]",
      comments: "0",
      readComment: "Read more",
      link: "laboratory-owner-sentenced-to-82-months-in-prison-for-covid-19-kickback-scheme/",
    },
  ])
  return (
    <>
      <section className={styles.microInsider_wrapper}>
        <div className="container-xxl">
          {micrognInsider.map((e, idx) => {
            return (
              <div className={`row ${styles.row_margin}`} key={idx}>
                <MicrogendxInsiderComponent items={e} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default page
