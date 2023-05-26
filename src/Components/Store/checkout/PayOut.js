import React, { useState } from "react";
import "./Checkout.scss";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PayOut() {
  const [paypal, setPaypal] = useState("");
  const [credit, setCredit] = useState(false);
  console.log();
  return (
    <section className="payout">
      <form className="pay-form">
        <h4>Select Payment Method</h4>

        <div>
          <input
            type="radio"
            value="PayPal"
            name="payment"
            onChange={(e) => {
              e.preventDefault();
              setCredit(false);
              setPaypal(true);
            }}
          />
          <label>PayPal</label>
        </div>
        <div>
          <input
            type="radio"
            value="PayPal"
            name="payment"
            onChange={(e) => {
              e.preventDefault();
              setCredit(true);
              setPaypal(e.target.value);
              console.log();
            }}
          />
          <label>Credit Card</label>
        </div>

        <button className="pay-btn" type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default PayOut;
