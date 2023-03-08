"use client"
import Image from "next/image"
import styles from "../course.module.css"
import business from "../../../assets/images/microgendxuniversity/business-development.jpg"
import Link from "next/link"
import CourseContent from "@/components/courseContent/CourseContent"
import AbsImage from "@/components/absImage/AbsImage"
import { useState } from "react"
export default function page({ params }) {
  const [img, setImg] = useState([
    {
      image: business,
    },
  ])
  let { id } = params
  return (
    <>
      <section className={styles.course_wrapper}>
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              {img.map((e, idx) => {
                console.log(e.image.src)
                console.log(e.image)
                return (
                  <>
                    <AbsImage image={e.image.src} />
                  </>
                )
              })}
              {/* <div className={styles.course_image_wrapper}>
                <Link href="#">
                  <div className={styles.mask}></div>
                  <Image src={business} alt="image" className="img-fluid" />
                </Link>
                <div className={styles.image_links}>
                  <Link href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.heading_course}>
                <h3>Course Content</h3>
                <div className={styles.expand_all}>
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target=".accordion-collapse"
                    aria-expanded="false"
                    aria-controls="collapse"
                  >
                    {" "}
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>{" "}
                    Expand All
                  </button>
                </div>
              </div>
              <div className={styles.content_section_course}>
                <CourseContent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
