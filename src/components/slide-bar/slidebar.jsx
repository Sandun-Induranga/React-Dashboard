import React from "react";
import "./Slidebar.css";

function Slidebar() {
  return (
    <div className="w-25 h-100 bg-white px-2">
      <h1>Slidebar</h1>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-grid-1x2-fill"></i></p>Dashboard</button>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-currency-exchange"></i></p>Exchange</button>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-book"></i></p>Library</button>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-calendar2-check"></i></p>Schedules</button>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-wallet"></i></p>Payouts</button>
      <button className="w-100 mb-5 d-flex px-5"><p><i class="bi bi-gear"></i></p>Settings</button>
    </div>
  );
}

export default Slidebar;
