import Image from "next/image";
import React from "react";
import de from "../../../assets/images/products/blood.jpg";
import "./CartItems.css";
const CartItems = () => {
  return (
    <div className="cart-items w-100">
      <form>
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
            <tr>
              <td className="product-thumbnail">
                <Image src={de} alt="thumbnail" className="img-fluid" />
              </td>
              <td className="product-name">
                <a href="#">Are Cultures Reliable Card - 0066</a>
              </td>
              <td className="product-price">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-quantity">
                <div className="quantity">
                  <span className="quantity-minus">
                    <i className="fa-solid fa-minus" />
                  </span>
                  <input type="text" value={0} />
                  <span className="quantity-plus">
                    <i className="fa-solid fa-plus" />
                  </span>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-remove">
                <span>
                  <i className="fa-solid fa-xmark" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="product-thumbnail">
                <Image src={de} alt="thumbnail" className="img-fluid" />
              </td>
              <td className="product-name">
                <a href="#">GI Test Service</a>
              </td>
              <td className="product-price">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-quantity">
                <div className="quantity">
                  <span className="quantity-minus">
                    <i className="fa-solid fa-minus" />
                  </span>
                  <input type="text" value={0} />
                  <span className="quantity-plus">
                    <i className="fa-solid fa-plus" />
                  </span>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-remove">
                <span>
                  <i className="fa-solid fa-xmark" />
                </span>
              </td>
            </tr>
            <tr>
              <td className="product-thumbnail">
                <Image src={de} alt="thumbnail" className="img-fluid" />
              </td>
              <td className="product-name">
                <a href="#">Application of Topical Antibiotic Gels - 0118</a>
              </td>
              <td className="product-price">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-quantity">
                <div className="quantity">
                  <span className="quantity-minus">
                    <i className="fa-solid fa-minus" />
                  </span>
                  <input type="text" value={0} />
                  <span className="quantity-plus">
                    <i className="fa-solid fa-plus" />
                  </span>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">
                  <bdi>$</bdi>: 4780
                </span>
              </td>
              <td className="product-remove">
                <span>
                  <i className="fa-solid fa-xmark" />
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
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
