import React, { useState, useContext } from "react";
import "./Header.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import Register from "../signIn/Register";
import { LoginContext } from "../../Context/LoginContext";
import ipad from "../../assets/ipad.png";

function Header(props) {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  const { userData, cartCountData } = useContext(LoginContext);
  const [user, setUser] = userData;
  const [cartCount] = cartCountData;

  function handleOpenSignIn() {
    setSignIn(true);
  }

  function handleCloseSignIn() {
    setSignIn(false);
  }

  function handleCloseRegister() {
    setRegister(false);
  }

  function handleLogin(email, password) {
    //console.log(email.current.value, password.current.value);
  }

  return (
    <>
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
          {!user?._id ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRegister(true);
                  setSignIn(false);
                }}
              >
                Register
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSignIn(true);
                  setRegister(false);
                }}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <div className="loggedInUser">
                <img src={ipad} alt="" />
                Hi, {user.username}
                <div className="profil">
                  <Link
                    style={{ textDecoration: "none", color: "#39a537" }}
                    to="/profile/orders"
                  >
                    <p>My Account</p>
                  </Link>
                  <p
                    onClick={(e) => {
                      e.preventDefault();
                      setUser((prev) => (prev = undefined));
                      localStorage.clear();
                    }}
                  >
                    Log Out
                  </p>
                </div>
              </div>
            </>
          )}

          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="cart-trolley">
              <ShoppingCartOutlinedIcon />
              <span className="cart-total-count">{cartCount}</span>
            </div>
          </Link>
        </div>
      </nav>

      {signIn && (
        <SignIn closeSignIn={handleCloseSignIn} handleLogin={handleLogin} />
      )}
      {register && (
        <Register
          signIn={handleOpenSignIn}
          registerClose={handleCloseRegister}
        />
      )}
    </>
  );
}

export default Header;
