// components/ActivityCard.js
import React from "react";

function ActivityCard({ activity, toggleStatus }) {
  return (
    <div className="task-card">
      <h3>{activity.name}</h3>
      <p>{activity.description}</p>

      <span className={activity.completed ? "done" : "pending"}>
        {activity.completed ? "Done" : "Pending"}
      </span>

      <button onClick={() => toggleStatus(activity.id)}>
        Toggle
      </button>
    </div>
  );
}

export default ActivityCard;