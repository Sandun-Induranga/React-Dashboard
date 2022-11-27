import React from "react";
import "./Card.css";
import btc from "../../assets/Coins-1.png";
import ltc from "../../assets/Coins-2.png";
import etm from "../../assets/Coins-3.png";
import bnb from "../../assets/Coins-4.png";

function Card(props) {
  return (
    <div className="card rounded-4 border-0 d-flex flex-row justify-content-around align-items-center">
      <section className="border-0 d-flex justify content-start flex-column card-content">
        <div className="d-flex justify-content-center align-items-center icon mb-2">
          {getCoin(props.name)}
        </div>
        <p className="m-0">{props.name}</p>
        <p className="m-0">{props.price}</p>
        <p className="m-0">{props.rate}</p>
      </section>
      <section className="border-0 graph"></section>
    </div>
  );
}

function getCoin(value) {
  switch (value) {
    case "BTC":
      return <img src={btc} alt="BTC" />;

    case "LTC":
      return <img src={ltc} alt="BTC" />;

    case "ETM":
      return <img src={etm} alt="BTC" />;

    default:
      return <img src={bnb} alt="BTC" />;
  }
}

export default Card;
