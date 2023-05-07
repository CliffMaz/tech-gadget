import React from "react";
import "./Products.scss";
import ipad from "../../../assets/ipad.png";
import i14 from "../../../assets/iPhone14pro.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function ProductInfo() {
  return (
    <section className="p-info">
      <h1>Product Information</h1>
      <div className="wrapper">
        <div className="info-left">
          <img src={i14} />
        </div>

        <div className="info-right">
          <h4> Smart Phones</h4>
          <h1>Ipad the latest release with all the feeatures you need</h1>
          <p>
            Lorem ipsum dolor sit amet. Sed eveniet reiciendis qui ratione
            aperiam est doloremque voluptas hic maxime voluptatem ab impedit
            maiores qui consectetur dignissimos ut aspernatur tenetur. Ad illum
            consectetur non quidem dicta aut consequatur odio.
          </p>
          <div>
            <p>R1699</p>
            <button>
              <ShoppingCartOutlinedIcon /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
