import React from "react";
import "./Cart.scss";
import Item from "./Item";
import { Link } from "react-router-dom";

function Cart(props) {
  return (
    <div className="cart-items">
      <div className="items-left">
        {props.cartdata.map((item) => (
          <Item
            item={item}
            key={item.id}
            updateQuantity={props.updateQuantity}
            deleteCartItem={props.deleteCartItem}
          />
        ))}
      </div>

      <div className="items-right">
        <h1>Sub Total: R1699</h1>
        <div className="check-out">
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <button>Continue Shopping</button>
          </Link>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
