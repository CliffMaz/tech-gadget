import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const cartInfo = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartList, setCartList] = useState(cartInfo);
  const [productList, setProductList] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({});

  return (
    <LoginContext.Provider
      value={{
        userData: [user, setUser],
        products: [productList, setProductList],
        cartData: [cartList, setCartList],
        cartCountData: [cartCount, setCartCount],
        search: [searchQuery, setSearchQuery],
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
