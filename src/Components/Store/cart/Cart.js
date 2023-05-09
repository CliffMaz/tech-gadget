import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Item from "./Item";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

function Cart(props) {
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    setPriceTotal(sumPrice(props.cartdata));
  }, [props.cartdata, props.cartCount]);

  function sumPrice(cartList) {
    return cartList.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  return (
    <div className="cart-items">
      <div className="items-left">
        {props.cartdata.length !== 0 ? (
          props.cartdata.map((item) => (
            <Item
              item={item}
              key={item.id}
              updateQuantity={props.updateQuantity}
              deleteCartItem={props.deleteCartItem}
            />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>

      <div className="items-right">
        <h1>Sub Total: R{priceTotal}</h1>
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
