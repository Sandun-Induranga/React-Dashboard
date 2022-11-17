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
            <section>
                Notification
            </section>
        </div>
    );
}

export default Topbar;
