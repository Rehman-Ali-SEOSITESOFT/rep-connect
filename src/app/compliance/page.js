import BreadCrum from "@/components/breadCrum/BreadCrum";
import ComplianceAsideWidget from "@/components/complianceAsideWidget/ComplianceAsideWidget";
import React from "react";
import style from "./compliance.module.css";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX Compliance Training"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MicroGenDX Compliance Training",
            link: "/",
          },
        ]}
      />
      <section className={style.compliance_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className={`${style.compliance__wrap__top} d-flex justify-content-between`}
              >
                <div className={`${style.compliance_content}`}>
                  <p>
                    Southwest Regionals PCR dba MicroGenDX has developed a
                    Compliance Program and Standards of Conduct designed to
                    demonstrate our ethical attitude and our emphasis on
                    compliance and to assure compliance with the conformity to
                    all applicable federal and state laws and regulations
                    governing the organization. This is meant for all employees
                    and representatives of MicroGenDX. This Compliance Program
                    and Standards of Conduct is a commitment to our clients as
                    well as a guidance for an ethical way of conducting
                    business, and serves as a values-based system for doing the
                    right thing.
                  </p>
                  <p>
                    Complying to the laws and regulations that govern our
                    activities is the responsibility of all of us. Dedication to
                    achieving full compliance with these laws and regulations,
                    as well as protecting the reputation of MicroGenDX is
                    something we strive to, and must continually bear in mind
                    and action.
                  </p>
                  <p>
                    As a provider of health care, much of what we do is
                    reimbursed through federal and state government programs
                    (such as Medicare and Medicaid). Also as a health care
                    provider, MicroGenDX operates in one of the highest
                    regulated industries, if not the highest. In recent years,
                    there has been significant concern about “fraud and abuse”
                    in healthcare. In light of this, the Office of Inspector
                    General (OIG) has been very clear in its efforts to reduce
                    such abuse and fraud in the healthcare system. As healthcare
                    providers,it is our responsibility to ensure we conduct our
                    business, on all levels, with extreme compliance.
                  </p>
                </div>
                <ComplianceAsideWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
