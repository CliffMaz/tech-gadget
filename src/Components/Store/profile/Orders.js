import React, { useContext } from "react";
import "./Orders.scss";
import DataTable from "./DataTable";
import UserNoteLogged from "../../UserNoteLogged";
import { LoginContext } from "../../../Context/LoginContext";

function Orders() {
  const { userData } = useContext(LoginContext);
  const [user] = userData;
  return user?._id ? (
    <section className="orders">
      <h2>Orders</h2>
      <DataTable />
    </section>
  ) : (
    <>
      <UserNoteLogged />
    </>
  );
}

export default Orders;
