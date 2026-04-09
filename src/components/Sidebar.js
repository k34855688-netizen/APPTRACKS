// components/Sidebar.js
import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>APPTRACKS</h2>

      <button onClick={() => setPage("dashboard")}>📊 Dashboard</button>
      <button onClick={() => setPage("tasks")}>✅ Tasks</button>
    </div>
  );
}

export default Sidebar;