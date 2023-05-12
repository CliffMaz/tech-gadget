import React, { useContext } from "react";
import "./Shop.scss";
import Product from "../products/Product";
import { LoginContext } from "../../../Context/LoginContext";

function Shop({ addToCart }) {
  const { products, search } = useContext(LoginContext);
  const [productList] = products;
  const [searchQuery] = search;
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="items">
        {productList
          .filter((item) => item.pname.toLowerCase().includes(searchQuery))
          .map((item) => (
            <Product key={item.id} product={item} addToCart={addToCart} />
          ))}
      </div>
    </main>
  );
}

export default Shop;
