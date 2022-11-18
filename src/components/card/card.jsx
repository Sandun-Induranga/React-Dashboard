import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card rounded-4 border-0 d-flex justify-content-center">
      <section className="border-0 d-flex justify content-start flex-column card-content">
        <div className="d-flex bg-success justify-content-center align-items-center icon">
          <h2>
            <i class="bi bi-currency-bitcoin m-0"></i>
          </h2>
        </div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.rate}</p>
      </section>
      <section className="border-0 graph">
        
      </section>
    </div>
  );
}

export default Card;
