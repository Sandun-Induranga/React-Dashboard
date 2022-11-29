import React from "react";
import "./team.css";
import admin from "../../assets/admin.png";
import user from "../../assets/user.png";

function Team() {
  return (
    <div className="team bg-white m-2">
      <h1 className="m-2">Team</h1>

      <aside className="d-flex flex-column align-items-center">
        <section className="m-2 d-flex">
            <img src={admin} alt="" />
            <section>
                <h5 className="mt-2">Total Admins</h5>
                <p>6</p>
            </section>
        </section>

        <section className="m-2 d-flex">
            <img src={user} alt="" />
            <section>
                <h5 className="mt-2">Total Users</h5>
                <p>10</p>
            </section>
        </section>

      </aside>
    </div>
  );
}

export default Team;
