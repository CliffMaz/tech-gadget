import React, { useEffect, useContext } from "react";
import Slider from "./Slider/Slider";
import Categories from "./Category/Categories";
import Products from "./products/Products";

import { LoginContext } from "../../Context/LoginContext";
import Axios from "axios";
import { MoonLoader } from "react-spinners";

function Store({ addToCart }) {
  const token = localStorage.getItem("auth-token");
  const { products, search, loadingIcon } = useContext(LoginContext);
  const [loading, setLoading] = loadingIcon;
  const [, setProductList] = products;
  const [searchQuery] = search;

  useEffect(() => {
    setLoading(true);
    Axios.get(
      "http://localhost:4001/api/product/all",
      {},
      {
        headers: { authtoken: token },
      }
    )
      .then((res) => {
        setProductList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <>
      <div
        style={{
          height: "70vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "100px",
          opacity: "0.5",
        }}
      >
        <MoonLoader />
      </div>
    </>
  ) : (
    <main style={{ overflow: "hidden" }}>
      <Slider />
      <Categories addToCart={addToCart} />
      <Products addToCart={addToCart} searchQuery={searchQuery} />
    </main>
  );
}

export default Store;
