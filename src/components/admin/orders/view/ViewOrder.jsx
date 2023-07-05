import React from "react";
import "./vieworder.css";
import one from "../../../../assets/images/Courses/business-development.jpg";
import Image from "next/image";
import moment from "moment";
const ViewOrder = ({ data }) => {
  console.log(data);
  const currenyConvert = (e) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(e);
  };
  return (
    <>
      <div className="col-lg-6">
        <div className="order">
          <div className="a-view-product-detail">
            <div className="view-titles d-flex justify-content-between">
              <h4 className="order-no">
                Order No - <span>{data.order_id}</span>{" "}
              </h4>
              <h4 className="order-date">
                Order Date - <span>{moment(data.createdAt).format("LL")}</span>{" "}
              </h4>
            </div>
            <table className="items-view-pro w-100">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.products.product_items.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="d-flex w-100 align-items-center">
                          <div className="imgss-box d-inline-block me-3">
                            <Image src={one} alt="ad" className="img-fluid" />
                          </div>
                          <div className="imgss-title d-inline-block">
                            <h2 className="title">{e.name} </h2>
                          </div>
                        </div>
                      </td>
                      <td>{currenyConvert(e.price)}</td>
                      <td>{e.quantity}</td>
                      <td>{currenyConvert(e.price * e.quantity)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                {/* <tr>
                  <td colSpan={2}></td>
                  <td>items</td>
                  <td>780</td>
                </tr> */}
                <tr>
                  <td colSpan={2}></td>
                  <td>Total Price</td>
                  <td>{currenyConvert(data.products.total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="user-detail">
          <div className="user-detail-view">
            <h4 className="user-name">user detail</h4>

            <div className="user-info">
              <h3>Ghulam Rasool</h3>
            </div>
            <div className="ordr-detail">
              <h4>
                Order status : <strong> completed</strong>
              </h4>
              <h4>
                Payment method <strong>COD</strong>{" "}
              </h4>
            </div>
            <div className="address billing-address">
              <h3 className="add-title">billing address</h3>

              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
            </div>
            <div className="address shipping-address">
              <h3 className="add-title">shipping address</h3>

              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
              <p className="col-row">
                <strong>name : </strong>
                <label> GR </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrder;
