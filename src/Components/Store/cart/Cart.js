import React from "react";
import "./Cart.scss";
import Item from "./Item";

function Cart() {
  return (
    <div className="cart-items">
      <div className="items-left">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      <div className="items-right">
        <h1>Sub Total: R1699</h1>
        <div className="check-out">
          <button>Continue Shopping</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
