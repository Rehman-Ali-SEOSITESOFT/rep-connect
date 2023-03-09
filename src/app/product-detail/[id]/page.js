import AsideWidget from "@/components/asidewidget/AsideWidget";
import ProductDetail from "@/components/product_detail/ProductDetail";
import style from "./style.module.css";
export default function page({ params }) {
  const { id } = params;
  return (
    <section className={style.product_deail_page}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className={style.product_deail_wrapper}>
              <ProductDetail />
              <AsideWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
