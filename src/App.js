import { useState } from "react";
import "./App.scss";
import Header from "./Components/header/Header";
import Cart from "./Components/Store/cart/Cart";
import Footer from "./Components/Store/footer/Footer";
import ProductInfo from "./Components/Store/products/ProductInfo";
import Shop from "./Components/Store/Shop/Shop";
import Store from "./Components/Store/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { products } from "./data/data";
import { useEffect } from "react";

function App() {
  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([...products]);

  useEffect(() => {
    //console.log(cartList);
  }, [cartList]);

  function updateQuantity(id, value) {
    cartList.map((item) => {
      console.log("fired");
      if (item.id === id) {
        console.log(item.quantity);
        item.quantity = value;
        console.log(item.quantity);
      }
    });
  }

  function addToCart(id) {
    let value = false;

    if (cartList.length !== 0) {
      cartList?.map((data) => {
        if (data.id === id) {
          let newValue = data.quantity + 1;
          data.quantity = newValue;
          value = true;
        }
      });
    }

    if (!value) {
      productList.forEach((item) => {
        if (cartList !== 0)
          if (item.id === id) {
            setCartList([...cartList, { ...item, quantity: 1 }]);
          }
      });

      value = false;
    }
  }

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartList.length} />

        <Routes>
          <Route
            path="/"
            element={<Store products={productList} addToCart={addToCart} />}
          />
          <Route
            path="/shop"
            element={<Shop products={productList} addToCart={addToCart} />}
          />
          <Route
            path="/details/:productId"
            element={
              <ProductInfo products={productList} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartdata={cartList} updateQuantity={updateQuantity} />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
