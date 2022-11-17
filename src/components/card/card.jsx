import React from "react";
import "./Card.css";

function Card(props){
    return (
        <div className="card rounded-4 border-0">
            {props.name}
            {props.price}
            {props.rate}
        </div>
    );
}

export default Card;
