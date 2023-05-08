import React from "react";
import "./Shop.scss";
import Product from "../products/Product";

function Shop({ products, addToCart }) {
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="items">
        {products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
