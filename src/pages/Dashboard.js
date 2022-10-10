import React from "react";
import "./Dashboard.css";
import DashboardCard from "../components/DashboardCard";
import DateTime from "../components/DateTime";
import { Link } from "react-router-dom";

function removeDuplicates(data) {
  //removes duplicate locations for dashboard
  const dataCities = [];
  data.forEach((element) => dataCities.push(element.city));
  const uniqueCities = [...new Set(dataCities)];

  const filteredData = [];

  for (let i = 0; i < uniqueCities.length; i++) {
    filteredData.push(data.find((element) => element.city === uniqueCities[i]));
  }

  return filteredData;
}

function noCardDisplay() {
  const string = (
    <div className="no-card-display">
      <h2>
        You currently have no cards added. Add some{" "}
        <Link className="no-card-display-link" to="/">
          here
        </Link>{" "}
        !
      </h2>
    </div>
  );
  return string;
}

function Dashboard(props) {
  const filteredData = removeDuplicates(props.dashboard);

  return (
    <div className="dashboard">
      <h1 className="dash-title">My Dashboard</h1>
      <DateTime />
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
