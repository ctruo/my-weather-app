import React from "react";
import "./Dashboard.css";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DateTime from "../components/Date_Time/DateTime";
import { Link } from "react-router-dom";

function noCardDisplay() {
  const string = (
    <div className="no-card-display">
      <h2>
        <span>You currently have no cards added.</span>
        <span>
          Add some{" "}
          <Link className="no-card-display-link" to="/">
            here
          </Link>{" "}
          !
        </span>
      </h2>
    </div>
  );
  return string;
}

function Dashboard(props) {
  const filteredData = props.dashboard;
  const storedDashboard = localStorage.getItem("dashboard");
  console.log(JSON.parse(storedDashboard));

  return (
    <div className="dashboard">
      <div className="dash-header">
        <h1 className="dash-title">My Dashboard</h1>
        <DateTime />
      </div>
      <div className="card-display">
        {filteredData.length === 0 ? noCardDisplay() : null}
        {filteredData.map((data) => (
          <DashboardCard
            key={data.id}
            data={data}
            dashboard={filteredData}
            setDashboard={props.setDashboard}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
