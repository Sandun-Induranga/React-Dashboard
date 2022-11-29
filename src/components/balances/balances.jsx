import React from "react";
import "./balances.css";

function Balances(){
    return(
        <div className="balances">
            <section className="m-2 d-flex justify-content-around">
                <h4>Balances</h4>
                <i class="bi bi-plus-square-fill"></i>
            </section>
            <section className="d-flex align-items-start flex-column">
                <p className="h5">$ Dollar</p>
                <h2>9784.79</h2>
            </section>
        </div>
    )
}

export default Balances;
