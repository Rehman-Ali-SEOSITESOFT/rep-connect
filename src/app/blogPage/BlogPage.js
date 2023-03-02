"use client"
import React from "react"
import Image from "next/image"
import BlogImage from "../../assets/images/blogImagess.png"
import styless from "./BlogPage.module.css"
const BlogPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={styless.blogImage}>
                <Image src={BlogImage} alt="blog image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
