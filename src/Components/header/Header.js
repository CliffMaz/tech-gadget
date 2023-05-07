import React from "react";
import "./Header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <header>
      <nav className="nav">
        <h1 className="logo">Tech-Gadget</h1>
        <div className="menu">
          <input placeholder="Search" />
          <button>Search</button>
        </div>

        <div className="user">
          <button>Register</button>
          <button>Sign In</button>
          <div className="cart-trolley">
            <ShoppingCartOutlinedIcon />
            <span className="cart-total-count">8</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
