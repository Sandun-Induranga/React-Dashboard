import React from "react";
import "./Table.css";
import img1 from "../../assets/Coins-1.png";
import img2 from "../../assets/Coins-2.png";
import img3 from "../../assets/Coins-3.png";

function Table() {
  return (
    <div className="table-class m-2 bg-white p-2">
      <h1>Recent Activities</h1>
      <table className="table">
        <tbody>
          <tr className="border-white">
            <th scope="row">
              <img src={img1} alt="" />
            </th>
            <td>Bitcoin</td>
            <td>10:45:16AM</td>
            <td>+1545,00</td>
            <td id="op-1">Completed</td>
          </tr>
          <tr className="border-white">
            <th scope="row">
              <img src={img2} alt="" />
            </th>
            <td>Ethereum</td>
            <td>09:16:28AM</td>
            <td>+5649,00</td>
            <td id="op-2">Pending</td>
          </tr>
          <tr className="border-white">
            <th scope="row">
              <img src={img3} alt="" />
            </th>
            <td>LTC</td>
            <td>09:01:12AM</td>
            <td>+4547,00</td>
            <td id="op-1">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
