"use client"
import UniversityCourse from "@/components/universityCourse/UniversityCourse"
import { useState } from "react"
import styles from "../university.module.css"
// this is a client component 👈🏽
export default function page({ params }) {
  let { id } = params

  const [courseData, setCourseData] = useState([
    {
      courseTitle: "1. MicroGenDX Training Introduction",
    },
    {
      courseTitle: "2. MicroGenDX Tutorial Videos",
    },
    {
      courseTitle: "3. Microbiology Key Concepts",
    },
    {
      courseTitle: "4. Technology",
    },
    {
      courseTitle: "5. Science of MicroGenDX – Sales Training 2.1",
    },
    {
      courseTitle: "6. Understanding Clinical Papers",
    },
    {
      courseTitle: "7. Business Development",
    },
  ])
  return (
    <>
      <section className={styles.course_wrapper_section}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.list_wrapper}>
                {courseData.map((e, idx) => {
                  return (
                    <>
                      <UniversityCourse key={idx} item={e} />
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
