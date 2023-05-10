"use client";
import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import CategoryProducts from "@/components/categoryproducts/CategoryProducts";
import style from "./slug.module.css";
export default function Page({ params }) {
  const { slug } = params;
  const renamed = slug.split("-").join(" ");

  return (
    <>
      <BreadCrum
        breadHeading={renamed}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: renamed,
            link: "/",
          },
        ]}
      />
      <section className={style.productCatagoryPage}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div
                className={`${style.main_category_wrapper} d-flex justify-content-between`}
              >
                <CategoryProducts />
                <AsideWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
