import React from "react";
import { Link } from "react-router-dom";

function CheckOutSuccess() {
  return (
    <div className="success">
      <p>
        Your order was successfully placed{" "}
        <Link to="/orders">click here to view and track your order</Link>
      </p>
    </div>
  );
}

export default CheckOutSuccess;
