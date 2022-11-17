import React from "react";
import "./Context.css";
import Card from "../card/card";

function Context() {
  return (
    <div className="context">
      <section className="d-flex justify-content-around mt-2 mb-3 border-0">
        <Card name="BTC" />
        <Card name="BTC" />
        <Card name="BTC" />
        <Card name="BTC" />
      </section>
    </div>
  );
}

export default Context;
