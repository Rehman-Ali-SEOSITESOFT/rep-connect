import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <section className={styles.home_page}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome_note">
              <p>Welcome Back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
