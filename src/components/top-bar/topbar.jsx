import React from "react";
import "./Topbar.css";

function Topbar() {
    return(
        <div className="top-bar d-flex justify-content-between align-items-center">
            <section>
                Hello John Devid
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
