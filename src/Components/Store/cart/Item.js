import React, { useState } from "react";
import "./Cart.scss";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Item(props) {
  let value = props.item.quantity;
  const [quantity, setQuantity] = useState(value);

  function updateAddQuantity() {
    value += 1;
    setQuantity(value);
    props.updateQuantity(props.item.id, value);
  }

  function updateSubQuantity() {
    value -= 1;
    setQuantity(value);
    props.updateQuantity(props.item.id, value);
  }

  return (
    <section className="cart">
      <div className="cart-left">
        <img src={props.item.img} />
      </div>
      <div className="cart-right">
        <h1>{props.item.pname}</h1>
        <p>{props.item.price}</p>
        <div className="cart-buttons">
          <div className="cart-edit">
            <button
              onClick={() => {
                updateSubQuantity();
              }}
            >
              -
            </button>
            <input
              type="text"
              onInput={(e) => {
                props.updateQuantity();
              }}
              value={quantity}
            />
            <button
              onClick={() => {
                updateAddQuantity();
              }}
            >
              +
            </button>
          </div>
          <p>
            <DeleteForeverOutlinedIcon fontSize="large" color="error" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Item;
