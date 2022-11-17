import React from "react";
import "./Topbar.css";

function Topbar() {
    return(
        <div className="top-bar d-flex justify-content-between align-items-center">
            <section>
                <h4 className="mt-3">Hello John Devid</h4>
                <p>10.25 am 17 Nov 2022</p>
            </section>
            <section>
                <div class="input-group flex-nowrap">
                    <span className="input-group-text bg-white border-0" id="addon-wrapping"><i class="bi bi-search"></i></span>
                    <input type="text" className="border-0 rounded-2" placeholder="Search"/>
                </div>
            </section>
            <section id="user-detail" className="d-flex align-items-center">
                <div id="notification" className="d-flex justify-content-center align-items-center rounded-3 bg-white">
                <h4><i class="bi bi-bell"></i></h4>
                </div>
                <p>John Devid</p>
                <div id="user"></div>
            </section>
        </div>
    );
}

export default Topbar;
