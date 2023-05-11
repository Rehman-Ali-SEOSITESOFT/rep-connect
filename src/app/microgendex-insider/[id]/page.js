"use client"
import styles from "../microgendxInsider.module.css"
import jail from "../../../assets/images/microgenInsider/jail.png";
import withAuth from "@/utils/auth";
const page = ({ params }) => {
  let { id } = params
  return (
    <>
      <section className={styles.insiderSubPageWrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-9">
              <div className={styles.image_wrapper}>
                <div className={styles.image_}>
                  <img src={jail.src} alt="image" className="img-fluid" />
                </div>
              </div>
              <div className={styles.second_row_blog}>
                <p>
                  A Florida owner of multiple diagnostic testing laboratories
                  was sentenced today in the Southern District of Florida to 82
                  months in prison for a scheme to defraud the United States and
                  to pay and receive kickbacks through exploiting regulatory
                  waivers put in place to ensure access to health care during
                  the COVID-19 pandemic.
                </p>
                <p>
                  According to court documents, Leonel Palatnik, 42, of
                  Aventura, as a co-owner of Panda Conservation Group LLC
                  (Panda), conspired with other co-owners of the company and
                  with Michael Stein, the owner of 1523 Holdings LLC, to pay
                  illegal kickbacks to Stein in exchange for his work arranging
                  for telemedicine providers to authorize genetic testing orders
                  for Panda’s laboratories. 1523 Holdings and Panda then
                  exploited temporary amendments to telehealth restrictions
                  enacted during the pandemic, which were intended to expand
                  access to care for Medicare recipients by making it easier for
                  beneficiaries to receive needed medical care from home.
                  Palatnik and his co-conspirators took advantage of these
                  waivers by using telehealth providers to authorize thousands
                  of medically unnecessary cancer and cardiovascular genetic
                  testing orders. In exchange, Panda gave these providers access
                  to beneficiary information and the opportunity to bill for
                  purported telehealth consultations with Medicare recipients,
                  which often did not take place. On Aug. 31, Palatnik pleaded
                  guilty to one count of conspiracy to defraud the United States
                  and offer kickbacks and one count of paying a kickback.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.right_side_aside}>
                <h3>Recent Posts</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default withAuth(page);