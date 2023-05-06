import React from "react";
import "./Cart.scss";
import i14 from "../../../assets/iPhone14pro.png";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Item() {
  return (
    <section className="cart">
      <div className="cart-left">
        <img src={i14} />
      </div>
      <div className="cart-right">
        <h1>iPhone 14 Pro Max</h1>
        <p>Price: R1699</p>
        <div className="cart-buttons">
          <div className="cart-edit">
            <button>-</button>
            <input />
            <button>+</button>
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
