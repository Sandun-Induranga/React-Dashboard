import React from "react";
import "./Graph.css";
import graph from "../../assets/Graph.png";

function Graph(props) {
    return (
        <div className="chart bg-white">
            <img src={graph} alt="" srcset="" />
        </div>
    );
}

export default Graph;
