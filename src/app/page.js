"use client" // this is a client component 👈🏽

import Image from "next/image"
import Link from "next/link"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
import BreadCrum from "@/components/breadCrum/BreadCrum"
import { useState } from "react"
import mdx from "../assets/images/mdxhomepagepost.jpg"
import salepiece from "../assets/images/newSaleImage.png"
import HomePagePosts from "@/components/homePagePosts/HomePagePosts"

const inter = Inter({ subsets: ["latin"] })
const _handleSubmitForm = (e) => {
  e.preventDefault()
}
export default function Home() {
  const [postData, setPostData] = useState([
    {
      postImage: salepiece,
      postHeading: "Candida auris Sales Piece",
      postDetail:
        "Candida Auris Sales Piece  Hi Sales Team, Candida auris is a great opportunity for us. When speaking with potential organizations about our screening test please make ",
      likes: "+15",
      postcomment: "3",
      readmore: "Read More",
    },
  ])
  return (
    <>
      <BreadCrum breadHeading="MicroGenDX Rep Connect" pageName="Home" />
      <section className={styles.home_page}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className={styles.welcome_note}>
                <p>Welcome Back</p>
                <h2>grtesting</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center my-3 border-bottom py-3">
            <div className="col-lg-6 p-0">
              <div className={styles.search_home}>
                <form>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Search"
                  />

                  <i className="fa-solid fa-magnifying-glass gleass"></i>
                  <span className={styles.cancelIcon}>
                    <i className="fa-sharp fa-solid fa-xmark markxx"></i>
                  </span>
                </form>
              </div>
            </div>
            <div className="col-lg-6 p-0 text-end">
              <div className={styles.social_media_icon}>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-wordpress"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.bottomPosts}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className={styles.homeLeftSide}>
                <Image src={mdx} alt="image" className="img-fluid banner_img" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.homeRightSide}>
                <h3>MicroGenDX Insider</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div>
                {postData.map((e, idx) => {
                  return (
                    <HomePagePosts
                      key={idx}
                      postImage={e.postImage}
                      postHeading={e.postHeading}
                      postDetail={e.postDetail}
                      likes={e.likes}
                      postcomment={e.postcomment}
                      readmore={e.readmore}
                    />
                  )
                })}
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </>
  )
}
