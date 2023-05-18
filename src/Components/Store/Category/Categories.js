import React, { useContext, useRef, useState } from "react";
import "./Category.scss";
import ipad from "../../../assets/ipad.png";
import Category from "./Category";
import air from "../../../assets/macAir.png";
import { LoginContext } from "../../../Context/LoginContext";
import Product from "../products/Product";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Categories({addToCart}) {
  const { products } = useContext(LoginContext);

  const [productList] = products;

  const refer = useRef(null);
  return (
    <section className="category">
      <h2>Featured Products</h2>
<div className="container">
  <div className="arrow" onClick={(e)=>{e.preventDefault();
      refer.current.scrollLeft-=400;
      }}><NavigateBeforeIcon/></div>
  <div className="cat-list" ref={refer}>
        {
        productList.map((item) => <Product key={item.id} addToCart={addToCart} product={item} />
        )
        }
      </div>
      <div className="arrow" onClick={(e)=>{e.preventDefault();
      refer.current.scrollLeft+=400;
      console.log(refer);
      }}><NavigateNextIcon/></div>
</div>
      
    </section>
  );
}

export default Categories;
