import React from "react";
import "./Products.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt="" />
      <p>{props.product_name}</p>
      <p>{props.price}</p>
      <button>
        <ShoppingCartOutlinedIcon /> Add To Cart
      </button>
    </div>
  );
}

export default Product;
