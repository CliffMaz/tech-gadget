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
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuary] = useState("");

  useEffect(() => {
    setCartCount(sumCartItems(cartList));
  }, [cartList]);

  function searchItem(value) {
    setSearchQuary(value);
  }

  //delete function for deleting items from the cart
  function deleteCartItem(id) {
    setCartList((items) => items.filter((item) => item.id !== id));
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
        if (item.id === id) {
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
        if (data.id === id) {
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
        if (item.id === id) {
          setCartList([...cartList, { ...item, quantity: 1 }]);
        }
      });

      value = false;
    }
    setCartCount(sumCartItems(cartList));
  }

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} searchItem={searchItem} />

        <Routes>
          <Route
            path="/"
            element={
              <Store
                products={productList}
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                products={productList}
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            }
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
              <Cart
                cartdata={cartList}
                updateQuantity={updateQuantity}
                deleteCartItem={deleteCartItem}
                cartCount={cartCount}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
