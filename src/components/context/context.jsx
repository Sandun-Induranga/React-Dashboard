import React from "react";
import "./Context.css";
import Card from "../card/card";
import Graph from "../graph/graph";
import Balances from "../balances/balances";
import Table from "../table/table";

function Context() {
  return (
    <div className="context">

      <section className="d-flex justify-content-around mt-2 mb-3 border-0">
        <Card name="BTC" price="9784.79" rate="7.5%" icon="bitcoin" />
        <Card name="LTC" price="9784.79" rate="7.5%" icon="LTC" />
        <Card name="ETM" price="9784.79" rate="7.5%" icon="ETM" />
        <Card name="BNB" price="9784.79" rate="7.5%" icon="BNB" />
      </section>

      <section className="d-flex justify-content-around">
        <Graph />
        <Balances />
      </section>

      <section className="mt-3 d-flex justify-content-around">
        <Table />
      </section>

    </div>
  );
}

export default Context;
