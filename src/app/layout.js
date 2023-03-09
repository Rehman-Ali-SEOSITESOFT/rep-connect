"use client"
import Sidebar from "@/layout/sidebar/Sidebar"
import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/layout/header/Header"

// export const metadata = {
//   title: "MicroGenDX Rep Connect – Connect Through Communication",
//   description: "Generated by create next app",
// };
import { Provider } from "react-redux"
import { store } from "@/redux/store"
import Footer from "@/layout/footer/footer"
import img from "./favicon21.png"
import Image from "next/image"

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          {/* <title>{title}</title> */}

          <title>MicroGenDX Rep Connect – Connect Through Communication</title>

          <meta property="og:description" content="MG Descri" />

          <meta property="og:image" content={img} />
          <meta property="og:title" content="MicroGen DX" />
        </head>
        <body>
          <main className="microgen_dx">
            <Sidebar />
            <Header />
            <div className="main--content--wrapper">
              {children}
              <Footer />
            </div>
          </main>
          <script src="https://unpkg.com/react-player/dist/ReactPlayer.standalone.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        </body>
      </html>
    </Provider>
  )
}
