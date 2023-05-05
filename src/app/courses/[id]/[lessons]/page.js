import styless from "../../course.module.css"
import pdf from "../../../../assets/images/microgendxuniversity/pdf.svg"
export default function page({ params }) {
  let { id } = params

  return (
    <>
      <section className={styless.lessons_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={styless.progress_wrapper}>
                <div className={styless.cfus_breadcrums}>
                  <span className={styless.breadcrums_home}>
                    <a href="#">3. Microbiology Concepts</a>
                  </span>
                  <span>
                    <a href="#"> CFUs</a>
                  </span>
                </div>
                <div className={styless.in_progress}>
                  <p>In Progress</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styless.pdf_section}>
            <div className={styless.inner_pdf}>
              <div className={styless.left_side_pdf}>
                <img src={pdf.src} alt="pdf icon" className="img-fluid" />
                <a href="#">CFUs</a>
              </div>
              <div className={styless.right_side_pdf}>
                <a href="#">
                  <span>View Full PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
