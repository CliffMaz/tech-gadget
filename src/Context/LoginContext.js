import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [cartList, setCartList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({
    isLoggedIn: false,
  });

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
