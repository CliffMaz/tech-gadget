import React from "react";
import "./DataTable.scss";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function OrderRow({ order }) {
  return (
    <tr className="table-data">
      <td>
        <Link to={`/paypal/${order._id}`}>{order._id}</Link>
      </td>
      <td>{format(new Date(order.paidAt), "yyyy-MM-dd HH:mm")}</td>
      {order.isPaid ? (
        <td className="isPaid">
          <p>Paid</p>
        </td>
      ) : (
        <td className="isNPaid">
          <p>Not Paid</p>
        </td>
      )}
      <td>R21000</td>
    </tr>
  );
}

export default OrderRow;
