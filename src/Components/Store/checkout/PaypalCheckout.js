import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PaypalCheckout(props) {
  const { order } = props;
  return (
    <div style={{ paddingTop: "90px", minHeight: "80vh" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, action) => {
          return action.order.create({
            purchase_units: [
              { description: order.id, amount: { value: order.totalPrice } },
            ],
          });
        }}
      />
    </div>
  );
}

export default PaypalCheckout;
