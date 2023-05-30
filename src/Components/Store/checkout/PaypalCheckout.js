import React, { useContext, useEffect } from "react";
import "./Checkout.scss";
import { PayPalButtons } from "@paypal/react-paypal-js";
import Item from "../cart/Item";
import { productItems } from "../../../data/data";
import { LoginContext } from "../../../Context/LoginContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function PaypalCheckout() {
  window.scrollTo(0, 0);

  let total = 0;
  const tax = 5;
  let toPay = 0;
  const token = localStorage.getItem("auth-token");
  const { orderData } = useContext(LoginContext);
  const [order, setOrder] = orderData;
  const { id } = useParams();

  const notifySuccess = (succ) => {
    toast.success(`🦄 ${succ}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notifyErr = (err) => {
    toast.error(`🦄 ${err}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleApprove = (id) => {
    console.log("handleApprove");
    axios
      .put(
        `http://localhost:4001/api/order/update`,
        {
          ...order,
          isPaid: true,
          paypalId: id,
        },

        {
          headers: { authtoken: token },
        }
      )
      .then((res) => {
        console.log(res.data);
        notifySuccess("Order paid successfully");
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch((err) => {
        notifyErr("failed to make payment");
        console.log("error Cliff: ", err.response);
      });
  };

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
          <Item
            key={product._id}
            item={product.product}
            itemQuantity={product.quantity}
            disabled="disabled"
          />
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
          {order?.isPaid ? (
            <p className="orderPaid">Order has been paid</p>
          ) : (
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
              onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                handleApprove(data.orderID);
              }}
              onError={(err) => {
                console.log("paypal onError: ", err);
              }}
            />
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default PaypalCheckout;
