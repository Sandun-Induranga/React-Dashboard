import React from "react";
import "./balances.css";
import  visa from "../../assets/Illustration.png";

function Balances(){
    return(
        <div className="balances d-flex flex-column justify-content-around">
            <section className="m-2 d-flex justify-content-between">
                <h4>Balances</h4>
                <i className="bi bi-plus-square-fill"></i>
            </section>
            <section className="d-flex align-items-start flex-column px-3">
                <p className="h5">$ Dollar</p>
                <h2>9784.79</h2>
            </section>
            <section>
                <img src={visa} alt="" />
            </section>
        </div>
    )
}

export default Balances;
