import React from "react";
import "./Table.css";
import img1 from "../../assets/Coins-1.png";
import img2 from "../../assets/Coins-2.png";
import img3 from "../../assets/Coins-3.png";

function Table() {
  return (
    <div className="table-class m-3">
      <h1 className="mt-2">Recent Activities</h1>
      <table className="table">
        <tbody>
          <tr className="border-white">
            <th scope="row">
              <img src={img1} alt="" />
            </th>
            <td>Bitcoin</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr className="border-white">
            <th scope="row">
              <img src={img2} alt="" />
            </th>
            <td>Ethereum</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr className="border-white">
            <th scope="row">
              <img src={img3} alt="" />
            </th>
            <td>LTC</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
