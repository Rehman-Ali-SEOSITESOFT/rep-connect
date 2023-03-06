import BreadCrum from "@/components/breadCrum/BreadCrum";
import style from "./style.module.css";
export default function page({ params }) {
  const { slug } = params;
  let headingname = slug.split("-").join(" ");
  return (
    <>
      <BreadCrum breadHeading={headingname} pageName={headingname} />
      <section className={style.single_donwnload_detail}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-12">
              <ul className={style.list_views}>
                <li>
                  Version
                  <span className={style.badge}>21-0132-0</span>
                </li>
                <li>
                  Download
                  <span className={style.badge}>1</span>
                </li>
                <li>
                  File Size
                  <span className={style.badge}>9.24 MB</span>
                </li>
                <li>
                  File Count
                  <span className={style.badge}>1</span>
                </li>
                <li>
                  Create Date
                  <span className={style.badge}>March 21, 2022</span>
                </li>
                <li>
                  Last Updated
                  <span className={style.badge}>March 21, 2022</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
