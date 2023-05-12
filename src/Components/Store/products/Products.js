import React, { useContext } from "react";
import "./Products.scss";
import Product from "./Product";
import { LoginContext } from "../../../Context/LoginContext";

function Products({ addToCart, searchQuery }) {
  const { products } = useContext(LoginContext);
  const [productList] = products;
  return (
    <section className="products">
      <h1>Products</h1>
      <div className="items">
        {productList
          .filter((item) => item.pname.toLowerCase().includes(searchQuery))
          .map((product) => (
            <Product product={product} key={product.id} addToCart={addToCart} />
          ))}
      </div>
    </section>
  );
}

export default Products;
