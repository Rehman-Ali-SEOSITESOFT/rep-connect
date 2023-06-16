import Image from "next/image";
import React from "react";
import viewimg from "../../../../assets/images/products/covid-flu-22.jpg";
import "./view.css";
const ViewProduct = () => {
  return (
    <div className="view-product-admin">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 col-12">
            <div className="view-left">
              <div className="view-image">
                <Image src={viewimg} alt="admin" className="img-fluid" />
              </div>
              <div className="view-gallary">
                <div className="gallary-item">
                  <Image src={viewimg} alt="admin" className="img-fluid" />
                </div>
                <div className="gallary-item">
                  <Image src={viewimg} alt="admin" className="img-fluid" />
                </div>
                <div className="gallary-item">
                  <Image src={viewimg} alt="admin" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-md-8 col-12">
            <div className="view-right">
              <div className="view-product-admin">
                <h4>Application of Topical Antibiotic Gels – 0118</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
