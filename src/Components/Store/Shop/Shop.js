import React, { useContext, useEffect } from "react";
import "./Shop.scss";
import Axios from "axios";
import Product from "../products/Product";
import { LoginContext } from "../../../Context/LoginContext";

function Shop({ addToCart }) {
  const { products, search } = useContext(LoginContext);
  const [productList, setProductList] = products;
  const [searchQuery] = search;

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
  return (
    <main className="shop">
      <h1>Shop</h1>

      <div className="items">
        {productList
          .filter((item) => item.pname.toLowerCase().includes(searchQuery))
          .map((item) => (
            <Product key={item._id} product={item} addToCart={addToCart} />
          ))}
      </div>
    </main>
  );
}

export default Shop;
