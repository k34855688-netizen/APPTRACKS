// components/Tasks.js
import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

function Tasks({ activities, toggleStatus, addTask }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!name) return;

    addTask({
      id: Date.now(),
      name,
      description: desc,
      completed: false
    });

    setName("");
    setDesc("");
  };

  return (
    <div>
      <h1>Tasks</h1>

      {/* Add Task */}
      <div className="add-task">
        <input
          placeholder="Task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Task List */}
      <div className="grid">
        {activities.map((a) => (
          <ActivityCard key={a.id} activity={a} toggleStatus={toggleStatus} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;