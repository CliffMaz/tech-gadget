import React, { useEffect, useContext } from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import Products from "./products/Products";
import { productItems } from "../../data/data";
import { LoginContext } from "../../Context/LoginContext";

function Store({ addToCart }) {
  const { products, search } = useContext(LoginContext);

  const [, setProductList] = products;
  const [searchQuery] = search;

  useEffect(() => {
    setProductList([...productItems]);
  }, []);
  return (
    <main>
      <Slider />
      <Categories addToCart={addToCart}/>
      <Products addToCart={addToCart} searchQuery={searchQuery} />
    </main>
  );
}

export default Store;
