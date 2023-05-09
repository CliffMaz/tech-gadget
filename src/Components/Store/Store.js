import React from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import Products from "./products/Products";

function Store(props) {
  return (
    <main>
      <Slider />
      <Categories />
      <Products
        products={props.products}
        addToCart={props.addToCart}
        searchQuery={props.searchQuery}
      />
    </main>
  );
}

export default Store;
