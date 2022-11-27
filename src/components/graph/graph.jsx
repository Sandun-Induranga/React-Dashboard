import React from "react";
import "./Graph.css";
import graph from "../../assets/Graph.png";

function Graph(props) {
    return (
        <div className="chart bg-white d-flex flex-column justify-content-between">
            <section>
                <aside>
                    <h4>Market Overview</h4>
                </aside>
            </section>
            <img src={graph} alt=""/>
        </div>
    );
}

export default Graph;
