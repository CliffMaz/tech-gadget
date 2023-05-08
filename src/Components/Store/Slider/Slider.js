import React from "react";
import "./Slider.scss";
import iPhone from "../../../assets/iPhone-14.png";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <section className="slider">
      <div className="left">
        <h2>
          Get The Best Tech And <span>Be In Style</span>
        </h2>
        <p>
          Having the best tech is not about with tech savy but us having your
          back.
        </p>
        <Link to="/shop" style={{ textDecoration: "none" }}>
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="right">
        <img src={iPhone} alt="" />
      </div>
    </section>
  );
}

export default Slider;
