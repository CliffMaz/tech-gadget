import React from "react";
import "./Header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="logo">Tech-Gadget</h1>
        </Link>
        <div className="menu">
          <input placeholder="Search" />
          <button>Search</button>
        </div>

        <div className="user">
          <button>Register</button>
          <button>Sign In</button>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="cart-trolley">
              <ShoppingCartOutlinedIcon />
              <span className="cart-total-count">{props.cartCount}</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
