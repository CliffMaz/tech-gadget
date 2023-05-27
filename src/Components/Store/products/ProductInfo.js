import React, { useContext } from "react";
import "./Products.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";

import { LoginContext } from "../../../Context/LoginContext";

function ProductInfo({ addToCart }) {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const { products } = useContext(LoginContext);
  const [productList] = products;

  let product = null;

  productList.forEach((item) => {
    if (item._id === productId) {
      product = item;
      console.log(product);
    }
  });

  return (
    <section className="p-info">
      <h1>Product Information</h1>
      <div className="wrapper">
        <div className="info-left">
          <img src={product?.img} alt="" />
        </div>

        <div className="info-right">
          <h4> {product?.category}</h4>
          <h1>{product?.pname}</h1>
          <p>{product?.desc}</p>
          <div>
            <p>{product?.price}</p>
            <button
              onClick={() => {
                addToCart(product?._id);
              }}
            >
              <ShoppingCartOutlinedIcon /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
