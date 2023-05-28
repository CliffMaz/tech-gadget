import React, { useContext, useEffect } from "react";
import "./Checkout.scss";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Item from "../cart/Item";
import { productItems } from "../../../data/data";
import { LoginContext } from "../../../Context/LoginContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function PaypalCheckout() {
  window.scrollTo(0, 0);

  let total = 0;
  const tax = 5;
  let toPay = 0;
  const token = localStorage.getItem("auth-token");
  const { orderData } = useContext(LoginContext);
  const [order, setOrder] = orderData;
  const { id } = useParams();
  console.log(token);

  useEffect(() => {
    const _id = String(id);

    axios
      .get(
        `http://localhost:4001/api/order/${_id}`,

        {
          headers: { authtoken: token },
        }
      )
      .then((res) => {
        setOrder(res.data[0]);
      })
      .catch((err) => {
        console.log("error Cliff: ", err.response);
      });
  }, []);

  const getProductTotals = () => {
    order?.orderItems?.forEach((item) => {
      total += item.subTotal;
    });

    toPay = tax + total;
  };
  getProductTotals();
  return (
    <div className="paypal">
      <div className="paypal-left">
        {order?.orderItems?.map((product) => (
          <Item item={product.product} disabled="disabled" />
        ))}
      </div>
      <div className="paypal-right">
        <div className="order-details">
          <h4>Price Details</h4>
          <div>
            <p>Products({order?.orderItems?.length}): </p>
            <p>${total}</p>
          </div>
          <div>
            {" "}
            <p>Shipping: </p>
            <p>$0</p>
          </div>

          <div>
            <p>Tax: </p>
            <p>${tax}</p>
          </div>
          <div className="total-price">
            <p>Total Price: </p>
            <p>${toPay}</p>
          </div>
        </div>
        <div>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, action) => {
              return action.order.create({
                purchase_units: [
                  {
                    description: order?._id,
                    amount: { value: toPay },
                  },
                ],
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PaypalCheckout;
