import React, { useState } from "react";
import "./Header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import Register from "../signIn/Register";

function Header(props) {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  function handleCloseSignIn() {
    setSignIn(false);
  }

  function handleCloseRegister() {
    setRegister(false);
  }
  return (
    <header>
      <nav className="nav">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="logo">Tech-Gadget</h1>
        </Link>
        <div className="menu">
          <input
            placeholder="Search"
            onChange={(e) =>
              props.searchItem(e.target.value.toLocaleLowerCase())
            }
          />
          <button>Search</button>
        </div>

        <div className="user">
          <button
            onClick={(e) => {
              setRegister(true);
              setSignIn(false);
            }}
          >
            Register
          </button>
          <button
            onClick={(e) => {
              setSignIn(true);
              setRegister(false);
            }}
          >
            Sign In
          </button>

          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="cart-trolley">
              <ShoppingCartOutlinedIcon />
              <span className="cart-total-count">{props.cartCount}</span>
            </div>
          </Link>
        </div>
      </nav>

      {signIn && <SignIn closeSignIn={handleCloseSignIn} />}
      {register && <Register registerClose={handleCloseRegister} />}
    </header>
  );
}

export default Header;
