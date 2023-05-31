"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import img1 from "../../../assets/images/products/afb-sputum-4.jpg";
// import img2 from "../../../assets/images/products/basicSTI-provider-22.jpg";
// import img3 from "../../../assets/images/products//covid-flu-22.jpg";
import "./CartItems.css";
import CartDe from "./singlCart/CartDe";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "@/redux/slices/cartItem";
import { deleteCart } from "@/hooks/deleteSlice";
import { token } from "@/hooks/token";
const CartItems = (props) => {
  // const [listItem, setListItem] = useState([
  //   {
  //     name: "Are Cultures Reliable Card - 0066",
  //     qty: 1,
  //     price: 5000,
  //     img: img1,
  //   },
  //   {
  //     name: "Culture PCR NGS Comparison – 0050",
  //     qty: 9,
  //     price: 1000,
  //     img: img2,
  //   },
  //   {
  //     name: "ENT CRS NGS vs Culture Study – 0093",
  //     qty: 4,
  //     price: 450,
  //     img: img3,
  //   },
  // ]);

  // const hanldeRemove = (index) => {
  //   const reminingItem = listItem.filter((curvalue, ind) => index !== ind);
  //   setListItem(reminingItem);
  // };
  // const hanldeIncreasedQty = (index) => {
  //   let items = [...listItem];
  //   listItem.filter((ls, i) => index === i && ls.qty++);
  //   setListItem(items);
  // };
  // const hanldeDecreasedQty = (index) => {
  //   let items = [...listItem];
  //   listItem.filter((ls, i) => (index === i && ls.qty > 1 ? ls.qty-- : 1));
  //   setListItem(items);
  // };

  // const hanldeChanged = (index, event) => {
  //   let items = [...listItem];

  //   listItem.filter((ls, i) => {
  //     if (index === i) {
  //       ls.qty = event.target.value >= 1 ? event.target.value : ls.qty;
  //     }
  //   });
  //   setListItem(items);
  // };
  // const hanldeSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("hanldeSubmit", listItem);
  // };
  const { item } = props;
  const state = useSelector((state) => state.cartItem);
  const [upadateItem, setUpdateItem] = useState(state.data);

  const dispatch = useDispatch();

  const hanldeSubmit = (event) => {
    event.preventDefault();
    // console.log(upadateItem);
    let arr = [];
    let update = [...upadateItem];
    update.forEach((e) => {
      arr.push({
        productid: e.product_detail._id,
        quantity: e.quantity,
        sale_price: e.sale_price,
        price: e.price,
      });
    });

    const product_list = arr;
    console.log(product_list);
  };

  const hanldeIncreasedQty = (id) => {
    let arr = [...upadateItem];
    let changedProcduct = arr.filter((item) => item._id === id);
    let obj = {
      ...changedProcduct[0],
      quantity: changedProcduct[0].quantity + 1,
    };

    let index = arr.findIndex(function (i) {
      return i._id === id;
    });
    let addAndRemoveCurrenProduct = [...arr];
    addAndRemoveCurrenProduct[index] = obj;
    setUpdateItem(addAndRemoveCurrenProduct);
  };
  const hanldeDecreasedQty = (id) => {
    let arr = [...upadateItem];
    let changedProcduct = arr.filter((item) => item._id === id);
    let obj = {
      ...changedProcduct[0],
      quantity:
        changedProcduct[0].quantity > 1 ? changedProcduct[0].quantity - 1 : 1,
    };

    let index = arr.findIndex(function (i) {
      return i._id === id;
    });
    let addAndRemoveCurrenProduct = [...arr];
    addAndRemoveCurrenProduct[index] = obj;
    setUpdateItem(addAndRemoveCurrenProduct);
  };
  const hanldeDeleted = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/${id}`, {
      headers: {
        "x-auth-token": token,
      },
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success === 1) {
          dispatch(cartItem());
        }
      });
  };

  // useEffect(() => {
  //   setUpdateItem(state.data);
  // }, []);

  console.log(upadateItem);
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
            {upadateItem.map((element, index) => {
              return (
                <CartDe
                  key={index}
                  item={element}
                  hanldeDeleted={hanldeDeleted}
                  hanldeIncreasedQty={hanldeIncreasedQty}
                  hanldeDecreasedQty={hanldeDecreasedQty}
                />
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
