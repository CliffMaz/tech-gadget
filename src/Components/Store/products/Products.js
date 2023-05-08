import React from "react";
import "./Products.scss";
import Product from "./Product";


function Products(props) {
  return (
    <section className="products">
      <h1>Products</h1>
      <div className="items">
        {props?.products?.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={props.addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
