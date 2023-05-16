"use client"
import BreadCrum from '@/components/breadCrum/BreadCrum'
import withAuth from '@/utils/auth'
import React from 'react'
import styles from './webinars.module.css'
const page = () => {
  return (
    <>
        <BreadCrum
        breadHeading="Webinars"
        pageName="Home"
        subPage="Webinars"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className={styles.video_container}>
              <div className={styles.video_heading}>
                <h2>
                What's Next in Next-Gen Sequencing - with Dr. Joseph John & MicroGenDX
                </h2>
              </div>
              <div className={styles.video}>
                <iframe
                  src="https://player.vimeo.com/video/676361133?h=7d6bd70675"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className={styles.video_container}>
            <div className={styles.video_heading}>
              <h2>
              What is PCR?
              </h2>
            </div>
            <div className={styles.video}>
              <iframe
                src="https://player.vimeo.com/video/676361133?h=7d6bd70675"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>    
    </>
  )
}

export default withAuth(page)