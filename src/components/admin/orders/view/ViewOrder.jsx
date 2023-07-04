import React from "react";
import "./vieworder.css";
import one from "../../../../assets/images/Courses/business-development.jpg";
const ViewOrder = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="order">
          <div className="a-view-product-detail">
            <div className="view-titles d-flex justify-content-between">
              <h4 className="order-no">
                Order No - <span>780</span>{" "}
              </h4>
              <h4 className="order-date">
                Order Date - <span>12 july 2021</span>{" "}
              </h4>
            </div>
            <table className="items-view-pro w-100">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>{" "}
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="imgss me-3">
                      <Image src={one} />
                    </div>
                    <div className="imgss me-3">
                      <h2>titel </h2>
                    </div>
                  </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
            {/* <div className="items">
              <div className="item">
                <div className="img-title">
                  <div className="img-side"></div>
                  <div className="title-side">
                    <h3>this is title of item</h3>
                  </div>
                </div>
                <div className="price">$233</div>
                <div className="qty">33</div>
                <div className="total-price">33</div>
              </div>
            </div> */}
            <div className="more-detail">
              <div className="more-row">
                <h2>Total items</h2>
                <h2>04</h2>
              </div>
              <div className="more-row">
                <h2>Total Price</h2>
                <h2>04</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6"></div>
    </>
  );
};

export default ViewOrder;
