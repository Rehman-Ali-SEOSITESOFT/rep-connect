"use client"
import styles from "../microgendxInsider.module.css"
import jail from "../../../assets/images/microgenInsider/jail.png"
import { useState } from "react"
import recentImage1 from "../../../assets/images/microgenInsider/recentpost1.png"
import recentImage2 from "../../../assets/images/microgenInsider/recentpost2.png"
import recentImage3 from "../../../assets/images/microgenInsider/recentpost3.png"
import recentImage4 from "../../../assets/images/microgenInsider/recentpost4.png"
import recentImage5 from "../../../assets/images/microgenInsider/recentpost5.png"

import MicroInsderRecentPosts from "../../../components/microInsderRecentPosts/MicroInsderRecentPosts"
import HomePagePosts from "@/components/homePagePosts/HomePagePosts"
import LikeCommentSection from "@/components/likeCommentSection/LikeCommentSection"
export default function page({ params }) {
  let { id } = params
  const [isLiked, setIsLiked] = useState(true)
  const [recentPostData, setRecentPostData] = useState([
    {
      recentPostImages: recentImage1,
      recentPostTitle:
        "Lab Company Owners Indicted for False Billing of Medically Unnecessary Tests",
      recentTime: "March 9,2022",
    },
    {
      recentPostImages: recentImage2,
      recentPostTitle:
        "Doctor Pleads Guilty to Accepting Illegal Kickback Payments",
      recentTime: "February 25,2022",
    },
    {
      recentPostImages: recentImage3,
      recentPostTitle: "Business Associate Agreements 101",
      recentTime: "February 1,2022",
    },
    {
      recentPostImages: recentImage4,
      recentPostTitle:
        "LabCorp Faces Trial for Providing In-Office Phlebotomist Services to Doctors Taking Processing and Handling Fees from HDL",
      recentTime: "July 8,2022",
    },
    {
      recentPostImages: recentImage5,
      recentPostTitle:
        "Medical Group Pays $94.4K to Settle HDL Process and Handling Payment Antikickback Law Charges",
      recentTime: "Sepetember 13,2022",
    },
  ])

  return (
    <>
      <section className={styles.insiderSubPageWrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className={styles.image_wrapper}>
                <div className={styles.image_}>
                  <img src={jail.src} alt="image" className="img-fluid" />
                </div>
              </div>
              <div className={styles.para_section_}>
                <p>
                  It is illegal to pay or receive “kickbacks” in conjunction
                  with federal health care insurance. Prohibitions against
                  kickbacks are crucial to ensure that financial motives do not
                  undermine the medical judgment of physicians and other health
                  care providers.
                </p>
                <p>
                  In this case, kickback payments were disguised through various
                  sham business arrangements, including contracts where several
                  physicians purported to serve as “medical directors” or
                  “consulting physicians” for the pharmacy. Keepers and OK
                  Compounding represented that Keepers had been paid for his
                  services as a national spokesperson, medical director, or
                  national marketing director.
                </p>
                <p>
                  Specifically, on January 22, 2014, Keepers knowingly received
                  $25,000 from representatives of OK Compounding. The purpose of
                  the payment was to induce Keepers to refer prescriptions for
                  expensive compounded drugs to the pharmacy. The compounded
                  medications were filled, and claims were filed by the
                  pharmacy. Those medications were in turn paid for by federal
                  healthcare programs, including TRICARE, Medicare, CHAMPVA, and
                  the Federal Employees Compensation Act Program.
                </p>
              </div>

              <div className={styles.second_row_blog}>
                <LikeCommentSection />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className={styles.right_side_aside}>
                <h3>Recent Posts</h3>
                <div className={styles.recentPostSection}>
                  <ul>
                    {recentPostData.map((e, idx) => {
                      return (
                        <li key={idx}>
                          <MicroInsderRecentPosts
                            key={idx}
                            recentPostImages={e.recentPostImages.src}
                            recentPostTitle={e.recentPostTitle}
                            recentTime={e.recentTime}
                          />
                        </li>
                      )
                    })}
                  </ul>

                  <div className={styles.viewAllPosts}>
                    <a href="#">View All Posts</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
