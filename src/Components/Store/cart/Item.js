import React, { useState } from "react";
import "./Cart.scss";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Item({
  item,
  updateQuantity,
  disabled,
  deleteCartItem,
  itemQuantity,
}) {
  let value = item.quantity;
  const [, setQuantity] = useState(value);

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
        <p>${item.price}</p>
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
              value={itemQuantity}
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
        </div>
      </div>
      {disabled === "disabled" ? (
        ""
      ) : (
        <p className="cart-delete">
          <DeleteForeverOutlinedIcon
            style={{ cursor: "pointer" }}
            fontSize="large"
            color="error"
            disabled={disabled}
            onClick={() => {
              deleteCartItem(item._id);
            }}
          />
        </p>
      )}
    </section>
  );
}

export default Item;
