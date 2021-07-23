import React from "react";
import { NavLink } from "react-router-dom";
import mobile from "../../assests/images/mobile.jpg";

const Dashboard = () => {
  return (
    <div className="card">
      <img
        src={mobile}
        className="card-img-top w-100"
        alt="mobilebrand"
        style={{ height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Mobile Brand</h5>
        <p className="card-text">Click the button to search mobiles</p>
        <NavLink className="btn btn-primary" to="/listing">
          Mobiles
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
