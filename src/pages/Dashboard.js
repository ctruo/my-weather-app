import React from "react";
import "../components/Dashboard.css";
import DashboardCard from "../components/DashboardCard";
import DateTime from "../components/DateTime";

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

function Dashboard(props) {
  const filteredData = removeDuplicates(props.dashboard);

  return (
    <div className="dashboard">
      <h1 className="dash-title">My Dashboard</h1>
      <DateTime />
      <div className="card-display">
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
