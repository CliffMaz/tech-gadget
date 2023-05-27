import React, { useContext, useRef } from "react";
import "./Category.scss";

import { LoginContext } from "../../../Context/LoginContext";
import Product from "../products/Product";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Categories({ addToCart }) {
  const { products } = useContext(LoginContext);

  const [productList] = products;

  const refer = useRef(null);
  return (
    <section className="category">
      <h2>Featured Products</h2>
      <div className="container">
        <div
          className="arrow"
          onClick={(e) => {
            e.preventDefault();
            refer.current.scrollLeft -= 400;
          }}
        >
          <NavigateBeforeIcon />
        </div>

        <div className="cat-list" ref={refer}>
          {productList.map((item) => (
            <Product key={item._id} addToCart={addToCart} product={item} />
          ))}
        </div>

        <div
          className="arrow"
          onClick={(e) => {
            e.preventDefault();
            refer.current.scrollLeft += 400;
          }}
        >
          <NavigateNextIcon />
        </div>
      </div>
    </section>
  );
}

export default Categories;
