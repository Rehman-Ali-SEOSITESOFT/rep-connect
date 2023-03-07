import Image from "next/image";
import React from "react";
import "./AsideWidget.css";
import img1 from "../../assets/images/download-category/ABD-Labs-General-0131-Icon.png";
const AsideWidget = () => {
  return (
    <aside className="AsideWidget">
      <div className="cart--section">
        <h3 className="widget--title">Cart</h3>
        <ul>
          <li>
            <a href="#">Demo</a>
          </li>
        </ul>
      </div>
      <div className="continue--shopping--section">
        <h3 className="widget--title"> contineu shopping</h3>
        <ul>
          <li>
            <a href="#">
              <span> standard kits</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Individual Supplies</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Pre-Filled Lab Req</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span> Sales Materials</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Branded Merchandise</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="other--suggestion--section">
        <h3 className="widget--title">Other Suggestions</h3>
        <ul>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                Candida Auris MicroGenDX Can Help – 0391
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                MicroGenDX Medicare Approved PLA Code – 0195
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                ID Osteodiscitis MicroGenDX Can Help – 0390
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">PCR is Not NGS – 0190</h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">Now is the Time for NGS – 0193</h4>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideWidget;
