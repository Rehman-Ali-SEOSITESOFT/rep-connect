"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React from "react";
import styles from "./preceptorships.module.css";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Sales Training Presentation"
        pageName="Home"
        subPage="Sales Training Presentation"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.video_container}>
              <div className={styles.video_heading}>
                OrthoKey:Evolutionary Step in Diagnosis of Orthopedic Infections
                - Javad Parvizi
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
        <div className="row">
        <div className="col-lg-6">
          <div className={styles.video_container}>
            <div className={styles.video_heading}>
              Wound Preceptorship Physician's Perspective by Dr. Lam
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
  );
};

export default withAuth(page);
