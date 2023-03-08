import React from "react"
import "./GeneralAbsPosts.css"
import ReactPlayer from "react-player"
// import video1 from "../../assets/images/video.mp4"
const GeneralAbsPosts = (props) => {
  const { trainingHeading } = props
  //   const videoss = [
  //     {
  //       id: 1,
  //       src: video1,
  //     },
  //   ]
  return (
    <>
      <div className="genreal_training_wrapper">
        <h3>{trainingHeading}</h3>
        <div className="training_video_frame">
          {/* {videoss.map((videoObj) => {
            return (
              <ReactPlayer
                url={videoObj.src}
                // pip={true}
                // controls={true}
                // playing={true}
              />
            )
          })} */}
        </div>
      </div>
    </>
  )
}

export default GeneralAbsPosts
