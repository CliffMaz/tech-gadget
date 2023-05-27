import React, { useEffect, useContext } from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import Products from "./products/Products";
import { productItems } from "../../data/data";
import { LoginContext } from "../../Context/LoginContext";
import Axios from "axios";

function Store({ addToCart }) {
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    Axios.get(
      "http://localhost:4001/api/product/all",
      {},
      {
        headers: { authtoken: token },
      }
    )
      .then((res) => {
        setProductList(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);
  const { products, search } = useContext(LoginContext);

  const [, setProductList] = products;
  const [searchQuery] = search;

  useEffect(() => {
    setProductList([...productItems]);
  }, []);
  return (
    <main>
      <Slider />
      <Categories addToCart={addToCart} />
      <Products addToCart={addToCart} searchQuery={searchQuery} />
    </main>
  );
}

export default Store;
