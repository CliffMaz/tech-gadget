import React from "react";
import "./Checkout.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Checkout() {
  return (
    <div className="checkout">
      <div className="nav-btn">
        <ArrowBackIcon />
      </div>

      <form className="checkout-info">
        <h4>Delivery Address</h4>
        <label>Street Address</label>
        <input
          type="text"
          placeholder="street-address"
          name="street-address"
          autoComplete="street-address"
        />
        <label>City</label>
        <input type="text" name="city" autoComplete="city" placeholder="City" />
        <label>Postal Code</label>
        <input
          type="text"
          placeholder="Postal Code"
          name="postal-code"
          autoComplete="postal-code"
        />
        <label>Country</label>
        <select
          type="text"
          name="country"
          placeholder="Country"
          autoComplete="country"
        >
          <option></option>
          <option value="BT">Botswana</option>
          <option value="RSA">South Africa</option>
          <option value="ZW">Zimbabwe</option>
        </select>

        <button>Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Checkout;
