import React from "react";
import "./Graph.css";
import graph from "../../assets/Graph.png";

function Graph(props) {
    return (
        <div className="chart bg-white d-flex flex-column justify-content-between">

            <section className="d-flex justify-content-between m-2">
                <aside className="d-flex flex-column">
                    <h4>Market Overview</h4>
                    <p>7.2141,997.5(25%)</p>
                </aside>
                <aside className="d-flex w-50 justify-content-around options">
                    <div className="d-flex justify-content-center align-items-center rounded-4">ALL</div>
                    <div className="d-flex justify-content-center align-items-center rounded-4">1M</div>
                    <div className="d-flex justify-content-center align-items-center rounded-4">6M</div>
                    <div className="d-flex justify-content-center align-items-center rounded-4">1Y</div>
                    <div className="d-flex justify-content-center align-items-center rounded-4">YTD</div>
                </aside>
            </section>

            <img src={graph} alt=""/>

            <article>

                <div>
                    <i className="bi bi-dot text-lg"></i>
                    Buy
                </div>
                <div>
                    Sell
                </div>

            </article>

        </div>
    );
}

export default Graph;
