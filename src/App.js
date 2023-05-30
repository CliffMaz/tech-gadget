import React, { useState, useContext, useEffect } from "react";
import "./App.scss";
import Header from "./Components/header/Header";
import Cart from "./Components/Store/cart/Cart";
import Footer from "./Components/Store/footer/Footer";
import ProductInfo from "./Components/Store/products/ProductInfo";
import Shop from "./Components/Store/Shop/Shop";
import Store from "./Components/Store/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import Axios from "axios";
import Checkout from "./Components/Store/checkout/Checkout";
import PayOut from "./Components/Store/checkout/PayOut";
import CheckOutSuccess from "./Components/Store/checkout/CheckOutSuccess";
import Orders from "./Components/Store/profile/Orders";
import Profile from "./Components/Store/profile/Profile";
import Settings from "./Components/Store/profile/Settings";
import PageNotFound from "./Components/PageNotFound";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckout from "./Components/Store/checkout/PaypalCheckout";

function App() {
  const { products, cartData, cartCountData, search, userData } =
    useContext(LoginContext);
  const [cartList, setCartList] = cartData;
  const [productList] = products;
  const [cartCount, setCartCount] = cartCountData;
  const [, setSearchQuary] = search;
  const [user, setUser] = userData;

  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    localStorage.cartItems = JSON.stringify(cartList);
    Axios.post(
      "http://localhost:4001/api/auth/verify",
      {},
      {
        headers: { authtoken: token },
      }
    )
      .then((res) => {
        if (res.data.valid) {
          setUser({ ...user, ...res.data.user });
        } else {
          setUser({});
          localStorage.removeItem("auth-token");
        }
      })
      .catch((err) => {
        setUser({});
        localStorage.removeItem("auth-token");
      });
    setCartCount(sumCartItems(cartList));
  }, [cartList, cartCount]);

  function searchItem(value) {
    setSearchQuary(value);
  }

  //delete function for deleting items from the cart
  function deleteCartItem(id) {
    setCartList((items) => items.filter((item) => item._id !== id));
  }

  //function do update cart item count
  function sumCartItems(cartList) {
    if (cartList.length === 0) return 0;

    if (cartList.length > 0) {
      return cartList.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
  }

  //function for updating the quantity when the increment and decrement button is clicked
  function updateQuantity(id, value) {
    if (value === 0) deleteCartItem(id);
    if (value > 0) {
      cartList.map((item) => {
        if (item._id === id) {
          item.quantity = value;
        }
        setCartCount(sumCartItems(cartList));
      });
    }
  }

  //Button to add an Item to the Cart and when you click it twice it will increment cart item counter
  function addToCart(id) {
    let value = false;

    if (cartList.length !== 0) {
      cartList?.map((data) => {
        if (data._id === id) {
          let newValue = data.quantity + 1;
          data.quantity = newValue;
          setCartList(cartList);
          value = true;
        }
      });
    }

    if (!value) {
      productList.forEach((item) => {
        //if (cartList !== 0)
        if (item._id === id) {
          setCartList([...cartList, { ...item, quantity: 1 }]);
        }
      });

      value = false;
    }
    setCartCount(sumCartItems(cartList));
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
      }}
    >
      <Router>
        <div className="App">
          <Header searchItem={searchItem} />

          <Routes>
            <Route path="/" element={<Store addToCart={addToCart} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route
              path="/details/:productId"
              element={<ProductInfo addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart
                  updateQuantity={updateQuantity}
                  deleteCartItem={deleteCartItem}
                />
              }
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<PayOut />} />
            <Route path="/success" element={<CheckOutSuccess />} />
            <Route path="/paypal/:id" element={<PaypalCheckout />} />

            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/orders" element={<Orders />}>
                <Route path="profile/orders/order" />
              </Route>
              <Route path="/profile/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
