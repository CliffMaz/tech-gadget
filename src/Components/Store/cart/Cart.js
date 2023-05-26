import React, { useEffect, useState, useContext } from "react";
import "./Cart.scss";
import Item from "./Item";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { LoginContext } from "../../../Context/LoginContext";

function Cart({ updateQuantity, deleteCartItem }) {
  const [priceTotal, setPriceTotal] = useState(0);
  const { cartData, cartCountData } = useContext(LoginContext);
  const [cartList] = cartData;
  const [cartCount] = cartCountData;

  useEffect(() => {
    setPriceTotal(sumPrice(cartList));
  }, [cartList, cartCount]);

  function sumPrice(cartList) {
    return cartList.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  return (
    <div className="cart-items">
      <div className="items-left">
        {cartList.length !== 0 ? (
          cartList.map((item) => (
            <Item
              item={item}
              key={item.id}
              updateQuantity={updateQuantity}
              deleteCartItem={deleteCartItem}
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
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/checkout"
          >
            <button className="checkout">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
