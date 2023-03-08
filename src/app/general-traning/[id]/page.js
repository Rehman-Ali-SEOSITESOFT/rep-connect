"use client"
import GeneralAbsPosts from "@/components/generalAbsPosts/GeneralAbsPosts"
import { useState } from "react"
import styless from "../style.module.css"
export default function page({ params }) {
  let { id } = params
  const [trainingData, setTrainingData] = useState([
    {
      trainingHeading: "Sulfonamides",
    },
    {
      trainingHeading: "Tetracyclines",
    },
    {
      trainingHeading: "Aminoglycosides",
    },
    {
      trainingHeading: "Amphenicol",
    },
    {
      trainingHeading: "Beta Lactams",
    },
    {
      trainingHeading: "Cephalosporins",
    },
    {
      trainingHeading: "Glycopeptides",
    },
    {
      trainingHeading: "Macrolides",
    },
    {
      trainingHeading: "Oxazolidinones",
    },
    {
      trainingHeading: "Penicillins",
    },
    {
      trainingHeading: "Streptogramins",
    },
  ])
  return (
    <>
      {/* <h3>{id}</h3> */}
      <section className={styless.training_wrapper_}>
        <div className="container-xxl">
          <div className="row">
            {trainingData.map((e, idx) => {
              return (
                <div className=" col-lg-4">
                  <GeneralAbsPosts
                    key={idx}
                    trainingHeading={e.trainingHeading}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
