import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <div className="card rounded-4 border-0 d-flex flex-row justify-content-around align-items-center">
      <section className="border-0 d-flex justify content-start flex-column card-content">
        <div className="d-flex bg-success justify-content-center align-items-center icon mb-2">
          <h2>
            {getCoin(props.name)}
          </h2>
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
      return <i className="bi bi-currency-bitcoin m-0"></i>;

      case "LTC":
      return <i className="fa-solid fa-litecoin-sign"></i>;
  
    default:
      // return <i className="bi bi-currency-bitcoin m-0"></i>
      break;
  }
}

export default Card;
