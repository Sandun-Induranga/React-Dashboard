import React from "react";
import "./Graph.css";
import graph from "../../assets/Graph.png";

function Graph(props) {
    return (
        <div className="chart bg-white d-flex flex-column justify-content-between">
            <section className="d-flex justify-content-between">
                <aside>
                    <h4>Market Overview</h4>
                </aside>
                <aside className="d-flex w-50 justify-content-around">
                    <div>ALL</div>
                    <div>1M</div>
                    <div>6M</div>
                    <div>1Y</div>
                    <div>YTD</div>
                </aside>
            </section>
            <img src={graph} alt=""/>
        </div>
    );
}

export default Graph;
