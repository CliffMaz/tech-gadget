import React, { useState } from "react";
import "./Profile.scss";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import Settings from "./Settings";
import ipad from "../../../assets/ipad.png";

function Profile() {
  const [active, setActive] = useState(1);

  const handleClick = (id) => {
    setActive(id);
  };
  return (
    <section className="profile">
      <div className="profile-left">
        <div className="profile-nav">
          <div className="pro-pic">
            <img src={ipad} alt="" />
          </div>
          <div children className="pro-info">
            <p className="heading">Cliford Mazibuko</p>
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
          <div>
            <h3>Log Out</h3>
          </div>
        </div>
      </div>
      <div className="profile-right">
        <Outlet />
      </div>
    </section>
  );
}

export default Profile;
