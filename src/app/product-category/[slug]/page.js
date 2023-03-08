"use client";
import AsideWidget from "@/components/asidewidget/AsideWidget";
import Link from "next/link";
import style from "./slug.module.css";
export default function Page({ params }) {
  const { slug } = params;

  return (
    <section className={style.productCatagoryPage}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div
              className={`${style.main_category_wrapper} d-flex justify-content-between`}
            >
              <div className={style.product_listing}>Prouct lising</div>
              <AsideWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
