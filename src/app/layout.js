"use client";
import Sidebar from "@/layout/sidebar/Sidebar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/layout/header/Header";
import {useState, useEffect} from 'react';
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import Footer from "@/layout/footer/footer";
import img from "./favicon21.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { product } from "@/redux/slices/productSlice";
import "react-toastify/dist/ReactToastify.css";
import { token } from "@/hooks/token";
import Login from './login/page';
 function RootLayout({ children }) {
  const path = usePathname();
  const router = useRouter();
  const [userToken, setToken] = useState(null);
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    setToken(token)
    if (!token) {
      return router.push("/login");
    }
  }, []);


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
          {/* <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          /> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous"
          />

          {/* <title>{title}</title> */}

          <title>MicroGenDX Rep Connect – Connect Through Communication</title>

          <meta property="og:description" content="MG Descri" />

          <meta property="og:image" content={img} />
          <meta property="og:title" content="MicroGen DX" />
        </head>
        <body>
          <main className="microgen_dx">
          {userToken === null ? <Login/> : 
          <>
            {path === "/employee-connect" || path === "/login"  ? null : (
              <>
                <Sidebar />
                <Header />
              </>
            )}
            <div
              className={
                path === "/employee-connect" || path === "/login"
                  ? "container-fulid"
                  : "main--content--wrapper"
              }
            >
               <div className="d-flex flex-column conte-min-height">
              {children}
              
             </div>
              

              {path === "/employee-connect" || path === "/login"  ? null : (
                <Footer />
              )}
            
            </div>
              </>
          }
          </main>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossOrigin="anonymous"
          ></script>

          {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" /> */}
          {/* <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
            crossOrigin="anonymous"
          ></script> */}

          {/* <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
            crossOrigin="anonymous"
          ></script> */}
        </body>
      </html>
    </Provider>
  );
}
export default  RootLayout;