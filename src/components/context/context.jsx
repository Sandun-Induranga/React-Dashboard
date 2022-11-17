import React from "react";
import "./Context.css";
import Card from "../card/card";

function Context() {
  return (
    <div className="context">
      <section className="d-flex justify-content-around mt-2 mb-3 border-0">
        <Card name="BTC" price="9784.79" rate="7.5%" />
        <Card name="LTC" price="9784.79" rate="7.5%" />
        <Card name="ETM" price="9784.79" rate="7.5%" />
        <Card name="BNB" price="9784.79" rate="7.5%" />
      </section>
    </div>
  );
}

export default Context;
