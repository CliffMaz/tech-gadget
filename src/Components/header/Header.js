import React from "react";
import "./Header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  return (
    <header>
      <nav className="nav">
        <h1 className="logo">Tech-Gadget</h1>
        <ul className="menu">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>

        <div className="user">
          <ShoppingCartOutlinedIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
