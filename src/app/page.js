import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
import BreadCrum from "@/components/breadCrum/BreadCrum"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <BreadCrum breadHeading="MicroGenDX Rep Connect" pageName="Home" />
      <section className={styles.home_page}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.welcome_note}>
                <p>Welcome Back</p>
                <h2>Guest User</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
