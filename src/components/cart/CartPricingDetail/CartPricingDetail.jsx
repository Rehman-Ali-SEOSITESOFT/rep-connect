import React from "react";

const CartPricingDetail = () => {
  return (
    <>
      <div className="cart--pricing--detail">
        <h3>Cart totals</h3>
        <div className="cart-shpping">
          <h5>Shipping</h5>
          <h5>Free shipping</h5>
        </div>
        <div className="change-address">
          <h4> Change Address</h4>
          <select name="shipping_county">
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
          </select>
          <select className="shipping_state">
            <option value="">Select an option…</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
          </select>
          <input className="shipping_city" placeholder="City" />
          <input className="shipping_zip_code" placeholder="Postcode / Zip" />
          <button type="submit"> Update</button>
        </div>
        <h4>Total</h4>
        <div className="shipping_proceed_btns">
          <a href="#" className="processed_btn">
            Proceed to checkout
          </a>
          <a href="#" className="continue_shopping">
            Continue shopping
          </a>
        </div>
      </div>
    </>
  );
};

export default CartPricingDetail;
