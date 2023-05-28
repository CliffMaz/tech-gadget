import React, { useState, useContext, useRef } from "react";
import "./Checkout.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/LoginContext";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();
  const { cartData, cartCountData, userData } = useContext(LoginContext);
  const [cartList] = cartData;
  const [cartCount] = cartCountData;
  const addressRef = useRef("");
  const cityRef = useRef("");
  const postalCodeRef = useRef("");
  const [country, setCountry] = useState("");
  const products = [];
  const [user] = userData;
  let totalPrice = 0;

  const token = localStorage.getItem("auth-token");
  const handleCreateOrder = () => {
    cartList.map((item) => {
      products.push({
        quantity: item.quantity,
        subTotal: item.price * item.quantity,
        product: item._id,
      });
    });

    totalPrice = products.reduce((total, item) => {
      return total + item.subTotal;
    }, 0);

    const shippingAddress = {
      address: addressRef.current.value,
      city: cityRef.current.value,
      postalCode: postalCodeRef.current.value,
      country: country,
    };

    const order = {
      orderBy: user._id,
      orderItems: products,
      shippingAddress: shippingAddress,
      totalPrice: totalPrice,
      shippingType: {
        type: "free",
      },
    };

    axios
      .post("http://localhost:4001/api/order/add", order, {
        headers: { authtoken: token },
      })
      .then((res) => {
        setTimeout(() => {
          navigate(`/paypal/${res.data._id}`);
        }, 1000);
        console.log(res);
      })
      .catch((err) => {
        console.log("error Cliff: ", err);
      });
  };

  return (
    <div className="checkout">
      <div className="nav-btn">
        <ArrowBackIcon />
      </div>

      <form
        className="checkout-info"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateOrder();
        }}
      >
        <h4>Delivery Address</h4>
        <label>Street Address</label>
        <input
          ref={addressRef}
          type="text"
          placeholder="street-address"
          name="street-address"
          autoComplete="street-address"
        />
        <label>City</label>
        <input
          ref={cityRef}
          type="text"
          name="city"
          autoComplete="city"
          placeholder="City"
        />
        <label>Postal Code</label>
        <input
          ref={postalCodeRef}
          type="text"
          placeholder="Postal Code"
          name="postal-code"
          autoComplete="postal-code"
        />
        <label>Country</label>
        <select
          type="text"
          name="country"
          placeholder="Country"
          autoComplete="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option></option>
          <option value="Botswana">Botswana</option>
          <option value="South Africa">South Africa</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>

        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Checkout;
