import React, { useState, useContext } from "react";
import "./Profile.scss";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Settings from "./Settings";
import ipad from "../../../assets/ipad.png";
import { LoginContext } from "../../../Context/LoginContext";
import UserNoteLogged from "../../UserNoteLogged";

function Profile() {
  const [active, setActive] = useState(1);
  const { userData } = useContext(LoginContext);
  const [user, setUser] = userData;

  const handleClick = (id) => {
    setActive(id);
  };
  return user?._id ? (
    <section className="profile">
      <div className="profile-left">
        <div className="profile-nav">
          <div className="pro-pic">
            <img src={user.profileDisplay} alt="" />
          </div>
          <div children className="pro-info">
            <p className="heading">{user?.fullname}</p>
            <p>user/Shopper</p>
          </div>
        </div>
        <div className="profile-btn">
          <Link
            style={{ textDecoration: "none", color: "#39a537" }}
            to="/profile/orders"
          >
            <h3
              className={`${active === 1 ? "active-link" : "not-active"}`}
              onClick={(e) => {
                //e.preventDefault();
                handleClick(1);
              }}
            >
              My Orders
            </h3>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#39a537" }}
            to="/profile/settings"
          >
            <h3
              className={`${active === 2 ? "active-link" : "not-active"}`}
              onClick={(e) => {
                //e.preventDefault();
                handleClick(2);
              }}
            >
              Settings
            </h3>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#39a537",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
            to="/"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                setUser((prev) => (prev = undefined));
                localStorage.clear();
              }}
            >
              <h3>Log Out</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="profile-right">
        <Outlet />
      </div>
    </section>
  ) : (
    <>
      <UserNoteLogged />
    </>
  );
}

export default Profile;
