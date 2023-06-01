import React, { useState, useEffect } from "react";
import "./Products.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductInfo({ addToCart }) {
  window.scrollTo(0, 0);
  const { productId } = useParams();

  let [product, setProduct] = useState(null);

  const token = localStorage.getItem("auth-token");
  useEffect(() => {
    axios
      .get(
        `http://localhost:4001/api/product/${productId}`,

        {
          headers: { authtoken: token },
        }
      )
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*productList.forEach((item) => {
    if (item._id === productId) {
      setProduct(item);
    }
  });*/

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
            <p>${product?.price}</p>
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
