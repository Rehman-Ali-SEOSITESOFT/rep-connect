"use client"; // this is a client component 👈🏽
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import { useState } from "react";
import mdx from "../assets/images/singleproductsimages/mdxhomepagepost.jpg";
import salepiece from "../assets/images/singleproductsimages/newSaleImage.png";
import HomePagePosts from "@/components/homePagePosts/HomePagePosts";
import micro from "../assets/images/singleproductsimages/microgenmicro.png";
import newAccount from "../assets/images/singleproductsimages/newaccount.png";
import localtion from "../assets/images/singleproductsimages/map.png";
import newSalep from "../assets/images/singleproductsimages/newsalepiece.png";
import mba from "../assets/images/singleproductsimages/mba.png";
import hammer from "../assets/images/singleproductsimages/rulehamer.png";
import HomePageInsiderBtn from "@/components/homePageInsiderButton/HomePageInsiderBtn";
// import VideoPlayer from "react-video-player-extended";
import HomeAnnouncementList from "@/components/homePageAnnouncementList/HomeAnnouncementList";
import ann1 from "../assets/images/singleproductsimages/ann1.png";
import ann2 from "../assets/images/singleproductsimages/ann2.png";
import ann3 from "../assets/images/singleproductsimages/ann3.png";
import ann4 from "../assets/images/singleproductsimages/ann4.png";
import ann5 from "../assets/images/singleproductsimages/ann5.png";
import Pagination from "@/components/pagination/Pagination";

const _handleSubmitForm = (e) => {
  e.preventDefault();
};
export default function Home() {
  const [postData, setPostData] = useState([
    {
      postImage: salepiece,
      postHeading: "Candida auris Sales Piece",
      postDetail:
        "Candida Auris Sales Piece  Hi Sales Team, Candida auris is a great opportunity for us. When speaking with potential organizations about our screening test please make [...]",
      likes: "+15",
      postcomment: "3",
      readmore: "Read More",
      link: "candida-auris-sales-piece/",
    },
    {
      postImage: micro,
      postHeading: "Do Not Use Anything with Old Branding",
      postDetail:
        "Hi Sales Team, Please DO NOT use any sales piece, information piece, form, webpage, Lab Req or other item with either of the below logos [...]",
      likes: "17",
      postcomment: "1",
      readmore: "Read More",
      link: "do-not-use-anything-with-old-branding/",
    },
    {
      postImage: newAccount,
      postHeading: "REMINDER: New Website Sign-Up Procedure",
      postDetail:
        "Hi Sales Team, Just a reminder on how the new account sign-up procedure works. Please note that the website IS NOT the lab portal. You still [...]",
      likes: "19",
      postcomment: "5",
      readmore: "Read More",
      link: "reminder-new-account-sign-up-procedure/",
    },
    {
      postImage: localtion,
      postHeading: "Candida Auris: An Inroads into Hospitals",
      postDetail:
        "Hi Sales Team, Candida auris causes serious infections, and cases are rising across the U.S. The CDC has put out an alert on this.  MicroGenDX provides [...]",
      likes: "19",
      postcomment: "5",
      readmore: "Read More",
      link: "candida-auris-an-inroads-into-hospitals/",
    },
    {
      postImage: newSalep,
      postHeading: "Osteodiscitis: Intro to a New ID Opportunity",
      postDetail:
        "Hi Sales Team, As discussed on the State of the Union on June 27th, and by Alisina Shahi in the new sales piece uploaded to Rep [...]",
      likes: "21",
      postcomment: "2",
      readmore: "Read More",
      link: "osteodiscitis-intro-to-a-new-id-opportunity/",
    },
    {
      postImage: mba,
      postHeading: "Dr. Clifford Martin Consulting Requests",
      postDetail:
        "Hi Everyone, Recently there has been an influx of requests to Dr. Clifford Martin for consulting services. Moving forward I want to establish a procedure for [...]",
      likes: "17",
      postcomment: "2",
      readmore: "Read moore",
      link: "dr-clifford-martin-consulting-requests/",
    },
  ]);
  const [annList, setAnnList] = useState([
    {
      image: ann1,
      annTitle: "Candida auris Sales Piece",
      date: "June 10, 2022",
      Link: "https://repconnect.blaksheepdev.com/candida-auris-sales-piece/",
    },
    {
      image: ann2,
      annTitle: "Do Not Use Anything with Old Branding",
      date: "June 9, 2022",
      Link: "https://repconnect.blaksheepdev.com/do-not-use-anything-with-old-branding/",
    },
    {
      image: ann3,
      annTitle: "REMINDER: New Website Sign-Up Procedure",
      date: "June 9, 2022",
      Link: "https://repconnect.blaksheepdev.com/reminder-new-account-sign-up-procedure/",
    },
    {
      image: ann4,
      annTitle: "Candida Auris: An Inroads into Hospitals",
      date: "June 6, 2022",
      Link: "https://repconnect.blaksheepdev.com/candida-auris-an-inroads-into-hospitals/",
    },
    {
      image: ann5,
      annTitle: "Osteodiscitis: Intro to a New ID Opportunity",
      date: "June 3, 2022",
      Link: "https://repconnect.blaksheepdev.com/osteodiscitis-intro-to-a-new-id-opportunity/",
    },
  ]);
  const [insiderButton, setInsiderButton] = useState([
    {
      title: "Customer Survey",
      link: "https://airtable.com/shrQBdi4M4bj5Ch2U ",
    },
    {
      title: "Physician Consulting Agreement",
      link: "https://airtable.com/shr35R1fL083YmR54",
    },
    {
      title: "Conference Leads Follow-Up",
      link: "https://microgendx.quickbase.com/db/bp26g4yrf?a=nwr",
    },
  ]);
  const [searh, setSearch] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleVolume = (value) => {
    // this.setState({ volume: value })
    setVolume(value);
  };
  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX Rep Connect"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
        ]}
      />
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
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
              <div className={styles.search_home}>
                <form>
                  <input
                    type="text"
                    className="form-control "
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Search"
                    value={searh}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <i className="fa-solid fa-magnifying-glass gleass"></i>
                  <span className={styles.cancelIcon}>
                    <i className="fa-sharp fa-solid fa-xmark markxx"></i>
                  </span>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-0 text-end">
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
          <div className="row ">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className={styles.homeLeftSide}>
                <Image src={mdx} alt="image" className="img-fluid banner_img" />
              </div>
              <div>
                {postData.map((e, idx) => {
                  return <HomePagePosts key={idx} item={e} />;
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className={styles.homeRightSide}>
                <h3>MicroGenDX Insider</h3>
                <div className={styles.post_image_right_side}>
                  <a href="#" className={styles.image_Wrapper_top}>
                    <Image src={hammer} alt="image" className="img-fluid" />
                  </a>
                  <h3>
                    <a href="https://repconnect.blaksheepdev.com/lab-company-owners-indicted-for-false-billing-of-medically-unnecessary-tests/">
                      Lab Company Owners Indicted for False Billing of Medically
                      Unnecessary Tests
                    </a>
                  </h3>
                  <h4>
                    Case: &nbsp; A north Texas federal grand jury indicted 10
                    people …
                  </h4>
                </div>
                <div className={styles.buttonDiv}>
                  {insiderButton.map((e, idx) => {
                    return (
                      <HomePageInsiderBtn
                        key={idx}
                        title={e.title}
                        link={e.link}
                      />
                    );
                  })}
                  {/* <HomePageInsiderBtn
                    title="Customer Survey"
                    link="https://airtable.com/shrQBdi4M4bj5Ch2U "
                  />
                  <HomePageInsiderBtn
                    title="Physician Consulting Agreement"
                    link="https://airtable.com/shr35R1fL083YmR54"
                  />
                  <HomePageInsiderBtn
                    title="Conference Leads Follow-Up"
                    link="https://microgendx.quickbase.com/db/bp26g4yrf?a=nwr"
                  /> */}
                </div>
                <div className={styles.media_video}>
                  <h3>
                    MicroGenDX Minute – Ep.5: Why is MicroGenDX Vital to the
                    Clearing of Chronic UTIs??
                  </h3>
                  <div className="video_section">
                    {/* <VideoPlayer
                      url="../../public/video.mp4"
                      isPlaying={isPlaying}
                      volume={volume}
                      onPlay={handlePlay}
                      onPause={handlePause}
                      onVolume={handleVolume}
                      width="100%"
                      height="170px"
                      type="video/mp4"
                    /> */}
                    {/* <ReactPlayer
                      className="react-player"
                      url={url}
                      // controls={true}
                      config={config}
                      width={width}
                      height={height}
                      type="video/youtube"
                    /> */}
                  </div>
                </div>
                <div className={styles.question_section}>
                  <a href="#">
                    <span>
                      <i className="fa-solid fa-bullhorn"></i>
                    </span>
                    Suggest a Topic/Question
                  </a>
                </div>
                <div className={styles.announcemnets}>
                  <h3>Recent Announcements</h3>
                  <div className={styles.announcement_list}>
                    <ul>
                      {annList.map((e, idx) => {
                        return (
                          <HomeAnnouncementList
                            key={idx}
                            image={e.image}
                            annTitle={e.annTitle}
                            date={e.date}
                            Link={e.Link}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-4">
            <div className="col-lg-6">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
