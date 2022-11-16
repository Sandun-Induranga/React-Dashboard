import React from "react";
import "./Slidebar.css";

function Slidebar() {
  return (
    <div className="h-100 bg-white px-2 d-flex flex-column align-items-center shadow-sm">
      <div className="header-panel d-flex flex-column align-items-center">
        <h1 className="mt-5 mb-2">
          <i class="bi bi-back"></i>
          ZARVIS
        </h1>
        <section className="w-50 mt-2 mb-5"></section>
        <button className="w-100 mb-2 d-flex px-5" id="dashboard">
          <p>
            <i class="bi bi-grid-1x2-fill"></i>
          </p>
          Dashboard
          <p className>
            <i class="bi bi-dot"></i>
          </p>
        </button>
        <button className="w-100 mb-2 d-flex px-5">
          <p>
            <i class="bi bi-currency-exchange"></i>
          </p>
          Exchange
        </button>
        <button className="w-100 mb-2 d-flex px-5">
          <p>
            <i class="bi bi-book"></i>
          </p>
          Library
        </button>
        <button className="w-100 mb-2 d-flex px-5">
          <p>
            <i class="bi bi-calendar2-check"></i>
          </p>
          Schedules
        </button>
        <button className="w-100 mb-2 d-flex px-5">
          <p>
            <i class="bi bi-wallet"></i>
          </p>
          Payouts
        </button>
        <button className="w-100 mb-2 d-flex px-5">
          <p>
            <i class="bi bi-gear"></i>
          </p>
          Settings
        </button>
      </div>

      <footer className="mb-5">
          <h1>
            <i class="bi bi-safe-fill"></i>
          </h1>
      </footer>
    </div>
  );
}

export default Slidebar;
