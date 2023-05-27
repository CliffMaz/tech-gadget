import React, { useState } from "react";
import "./Cart.scss";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Item({ item, updateQuantity, disabled, deleteCartItem }) {
  let value = item.quantity;
  const [quantity, setQuantity] = useState(value);

  function updateAddQuantity() {
    value += 1;
    setQuantity(value);
    updateQuantity(item._id, value);
  }

  function updateSubQuantity() {
    value -= 1;
    setQuantity(value);
    updateQuantity(item._id, value);
  }

  return (
    <section className="cart">
      <div className="cart-left">
        <img src={item.img} alt="" />
      </div>
      <div className="cart-right">
        <h1>{item.pname}</h1>
        <p>{item.price}</p>
        <div className="cart-buttons">
          <div className="cart-edit">
            <button
              onClick={() => {
                updateSubQuantity();
              }}
              disabled={disabled}
            >
              -
            </button>
            <input
              type="text"
              onInput={(e) => {
                updateQuantity();
              }}
              value={quantity}
            />
            <button
              onClick={() => {
                updateAddQuantity();
              }}
              disabled={disabled}
            >
              +
            </button>
          </div>
          {disabled === "disabled" ? (
            ""
          ) : (
            <p>
              <DeleteForeverOutlinedIcon
                fontSize="large"
                color="error"
                disabled={disabled}
                onClick={() => {
                  deleteCartItem(item._id);
                }}
              />
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Item;
