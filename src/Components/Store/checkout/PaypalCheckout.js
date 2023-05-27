import React from "react";
import "./Checkout.scss";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Item from "../cart/Item";
import { productItems } from "../../../data/data";

function PaypalCheckout(props) {
  window.scrollTo(0, 0);
  const { order } = props;
  return (
    <div className="paypal">
      <div className="paypal-left">
        <Item item={productItems[0]} disabled="disabled"></Item>
        <Item item={productItems[0]} disabled="disabled"></Item>
        <Item item={productItems[0]} disabled="disabled"></Item>
        <Item item={productItems[0]} disabled="disabled"></Item>
        <Item item={productItems[0]} disabled="disabled"></Item>
      </div>
      <div className="paypal-right">
        <div className="order-details">
          <h4>Price Details</h4>
          <div>
            <p>Products(3): </p>
            <p>$100</p>
          </div>
          <div>
            {" "}
            <p>Shipping: </p>
            <p>$100</p>
          </div>

          <div>
            <p>Tax: </p>
            <p>$100</p>
          </div>
          <div className="total-price">
            <p>Total Price: </p>
            <p>$300</p>
          </div>
        </div>
        <div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, action) => {
              return action.order.create({
                purchase_units: [
                  {
                    description: order.id,
                    amount: { value: order.totalPrice },
                  },
                ],
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PaypalCheckout;
