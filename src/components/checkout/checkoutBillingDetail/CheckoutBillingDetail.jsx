"use client";
import React from "react";

const CheckoutBillingDetail = () => {
  return (
    <aside>
      <form onSubmit={() => console.log("")}>
        <div className="fullname d-flex justify-content-between">
          <div className="form-row fullname-children">
            <label htmlFor="firstname" className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="John"
            />
          </div>
          <div className="form-row fullname-children">
            <label htmlFor="lastname" className="form-label">
              {" "}
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="compnayname" className="form-label">
            Company name (optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="compnayname"
            name="compnayname"
            placeholder="John"
          />
        </div>
        <div className="form-row">
          <label htmlFor="countryregion" className="form-label">
            Country / Region <span className="required">*</span>
          </label>
          <select
            name="countryregion"
            id="countryregion"
            className="form-control"
          >
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="towncity">
            Town / City <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="towncity"
            id="towncity"
            placeholder="Town City"
          />
        </div>
        <div className="form-row">
          <label htmlFor="statecountry">
            State / County <span className="required">*</span>
          </label>
          <select
            name="statecountry"
            id="statecountry"
            className="form-control"
          >
            <option value="AGN">Agusan del Norte</option>
            <option value="AGS">Agusan del Sur</option>
            <option value="AKL">Aklan</option>
            <option value="ALB">Albay</option>
            <option value="ANT">Antique</option>
            <option value="APA">Apayao</option>
            <option value="AUR">Aurora</option>
            <option value="BAS">Basilan</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="postcode" className="form-label">
            Postcode / ZIP <span>*</span>{" "}
          </label>
          <input
            type="text"
            className="form-control"
            name="postcode"
            id="postcode"
            placeholder="Postcode / ZIP"
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone" className="form-label">
            Phone <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            id="phone"
            placeholder="923001234567"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email address <span>*</span>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="johndeo@gmail.com"
          />
        </div>
        <div class="form-row form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="differentshipping"
          />
          <label className="form-check-label" htmlFor="differentshipping">
            Ship to a different address?
          </label>
        </div>
        <div className="form-row">
          <label htmlFor="ordernotes">Order notes (optional)</label>
          <textarea
            type="text"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="form-control"
            id="ordernotes"
            name="ordernotes"
          />
        </div>
      </form>
    </aside>
  );
};

export default CheckoutBillingDetail;
