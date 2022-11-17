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
                <input type="text" />
            </section>
            <section>
                Notification
            </section>
        </div>
    );
}

export default Topbar;
