import React from "react";
import "./Shop.scss";
import Product from "../products/Product";
import Pagination from "../../Pagination";

function Shop({ products, addToCart, searchQuery }) {
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="items">
        {products
          .filter((item) => item.pname.toLowerCase().includes(searchQuery))
          .map((item) => (
            <Product key={item.id} product={item} addToCart={addToCart} />
          ))}
      </div>
    </main>
  );
}

export default Shop;
