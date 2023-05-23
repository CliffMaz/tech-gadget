import * as React from "react";
import OrderRow from "./OrderRow";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div className="tab">
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Order Id</td>
            <td>Date</td>
            <td>Status</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <OrderRow />
          <OrderRow />
          <OrderRow />
          <OrderRow />
          <OrderRow />
          <OrderRow />
        </tbody>
      </table>
    </div>
  );
}
