import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card rounded-4 border-0 d-flex">
      <section className="border-0 d-flex justify content-start flex-column">
        <div className="d-flex bg-success justify-content-center align-items-center icon">
          <h2>
            <i class="bi bi-currency-bitcoin"></i>
          </h2>
        </div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <p>{props.rate}</p>
      </section>
      <section>
        <img src="" alt="image" srcset="" />
      </section>
    </div>
  );
}

export default Card;
