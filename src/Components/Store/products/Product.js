import React from "react";
import { Link } from "react-router-dom";
import "./Products.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Product(props) {
  return (
    <Link
      to={`/details/${props.product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="product">
        <img src={props.product.img} alt="" />
        <p>{props.product.pname}</p>
        <p>{props.product.price}</p>
        <button
          onClick={(e) => {
            //e.stopPropagation();
            e.preventDefault();
            props.addToCart(props.product.id);
          }}
        >
          <ShoppingCartOutlinedIcon /> Add To Cart
        </button>
      </div>
    </Link>
  );
}

export default Product;
