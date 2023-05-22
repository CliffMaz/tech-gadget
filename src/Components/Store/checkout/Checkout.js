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
      <h1>Delivery Address</h1>
      <form className="checkout-info">
        <label>Street Address</label>
        <input type="text" placeholder="Street Address" />
        <label>City</label>
        <input type="text" placeholder="City" />
        <label>Postal Code</label>
        <input type="text" placeholder="Street Address" />
        <label>Country</label>
        <input type="text" placeholder="Street Address" />
        <label>Address</label>
        <input type="text" placeholder="Street Address" />

        <button>Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Checkout;
