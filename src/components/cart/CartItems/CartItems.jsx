"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "../../../assets/images/products/afb-sputum-4.jpg";
import img2 from "../../../assets/images/products/basicSTI-provider-22.jpg";
import img3 from "../../../assets/images/products//covid-flu-22.jpg";
import "./CartItems.css";
const CartItems = () => {
  const [listItem, setListItem] = useState([
    {
      name: "Are Cultures Reliable Card - 0066",
      qty: 1,
      price: 5000,
      img: img1,
    },
    {
      name: "Culture PCR NGS Comparison – 0050",
      qty: 9,
      price: 1000,
      img: img2,
    },
    {
      name: "ENT CRS NGS vs Culture Study – 0093",
      qty: 4,
      price: 450,
      img: img3,
    },
  ]);

  const hanldeRemove = (index) => {
    const reminingItem = listItem.filter((curvalue, ind) => index !== ind);
    setListItem(reminingItem);
  };
  const hanldeIncreasedQty = (index) => {
    let items = [...listItem];
    listItem.filter((ls, i) => index === i && ls.qty++);
    setListItem(items);
  };
  const hanldeDecreasedQty = (index) => {
    let items = [...listItem];
    listItem.filter((ls, i) => (index === i && ls.qty > 1 ? ls.qty-- : 1));
    setListItem(items);
  };

  const hanldeChanged = (index, event) => {
    let items = [...listItem];

    listItem.filter((ls, i) => {
      if (index === i) {
        ls.qty = event.target.value >= 1 ? event.target.value : ls.qty;
      }
    });
    setListItem(items);
  };
  const hanldeSubmit = (event) => {
    event.preventDefault();
    console.log("hanldeSubmit", listItem);
  };
  return (
    <div className="cart-items">
      <form onSubmit={hanldeSubmit}>
        <table className="w-100">
          <thead className="cart--item--head">
            <tr>
              <th className="product-thumbnail">&nbsp; </th>
              <th className="product-name">product</th>
              <th className="product-price">price</th>
              <th className="product-quantity">qyantity</th>
              <th className="product-subtotal">subtotal</th>
              <th className="product-remove">&nbsp;</th>
            </tr>
          </thead>
          <tbody className="cart--item--body">
            {listItem.map((element, index) => {
              return (
                <tr key={index} className="cart--item--row">
                  <td className="product-thumbnail">
                    <Image
                      src={element.img}
                      alt="thumbnail"
                      className="img-fluid"
                    />
                  </td>
                  <td className="product-name" data-title="Product">
                    <a href="#">{element.name}</a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="amount">
                      <bdi>$</bdi>: {element.price}
                    </span>
                  </td>
                  <td className="product-quantity" data-title="Quantity">
                    <div className="quantity">
                      <span
                        className="quantity-minus"
                        onClick={() => hanldeDecreasedQty(index)}
                      >
                        <i className="fa-solid fa-minus" />
                      </span>
                      <input
                        type="text"
                        value={element.qty}
                        onChange={(event) => hanldeChanged(index, event)}
                      />
                      <span
                        className="quantity-plus"
                        onClick={() => hanldeIncreasedQty(index)}
                      >
                        <i className="fa-solid fa-plus" />
                      </span>
                    </div>
                  </td>
                  <td className="product-subtotal" data-title="Total">
                    <span className="amount">
                      <bdi>$</bdi>: {element.qty * element.price}
                    </span>
                  </td>
                  <td
                    className="product-remove"
                    onClick={() => hanldeRemove(index)}
                  >
                    <span>
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="cart--item--foot">
            <tr>
              <td colSpan={6}>
                <button> Update cart</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
};

export default CartItems;
