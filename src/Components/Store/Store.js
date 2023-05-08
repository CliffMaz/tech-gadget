import React from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import Products from "./products/Products";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";

function Store(props) {
  
  return (
    <main>
      <Slider />
      <Categories />
      <Products products={props.products} addToCart={props.addToCart} />
    </main>
  );
}

export default Store;
