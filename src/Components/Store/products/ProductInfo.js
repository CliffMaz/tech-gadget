import React from "react";
import "./Products.scss";
import ipad from "../../../assets/ipad.png";
import i14 from "../../../assets/iPhone14pro.png";

function ProductInfo() {
  return (
    <section className="p-info">
      <div className="wrapper">
        <div className="info-left">
          <img src={i14} />
        </div>

        <div className="info-right">
          <h4> Smart Phones</h4>
          <h1>Ipad the latest release with all the feeatures you need</h1>

          <div>
            <p>R1699</p>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
