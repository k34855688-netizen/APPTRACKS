// components/Dashboard.js
import React from "react";

function Dashboard({ activities }) {
  const completed = activities.filter(a => a.completed).length;
  const total = activities.length;
  const progress = (completed / total) * 100;

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats">
        <div className="card">Total Tasks: {total}</div>
        <div className="card">Completed: {completed}</div>
        <div className="card">Pending: {total - completed}</div>
      </div>

      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} className="progress-fill"></div>
      </div>
    </div>
  );
}

export default Dashboard;