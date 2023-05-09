import React from "react";
import "./Products.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";

function ProductInfo({ products, addToCart }) {
  const { productId } = useParams();

  let product = null;

  products.forEach((item) => {
    if (item.id === parseInt(productId)) {
      product = item;
    }
  });

  return (
    <section className="p-info">
      <h1>Product Information</h1>
      <div className="wrapper">
        <div className="info-left">
          <img src={product.img} alt="" />
        </div>

        <div className="info-right">
          <h4> {product.category}</h4>
          <h1>{product.pname}</h1>
          <p>{product.desc}</p>
          <div>
            <p>{product.price}</p>
            <button
              onClick={() => {
                addToCart(product.id);
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
