import React, { useEffect, useContext } from "react";
import OrderRow from "./OrderRow";
import "./DataTable.scss";
import axios from "axios";
import { LoginContext } from "../../../Context/LoginContext";

export default function DataTable() {
  const token = localStorage.getItem("auth-token");
  const { userData, ordersData } = useContext(LoginContext);
  const [user] = userData;
  const [orders, setOrders] = ordersData;

  useEffect(() => {
    axios
      .get(
        `http://localhost:4001/api/order/user/${user._id}`,

        {
          headers: { authtoken: token },
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="tab">
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Order Id</td>
            <td>Order Date</td>
            <td>Payment</td>
            <td>Status</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item) => (
            <OrderRow key={item._id} order={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
