import React from "react";
import "./Card.css";

function Card(props){
    return (
        <div className="card rounded-4 border-0">
            <section className="border-0">
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.rate}</p>
            </section>
        </div>
    );
}

export default Card;
