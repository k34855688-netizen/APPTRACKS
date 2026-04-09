import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ✅ Start with empty tasks
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.clear();
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.clear();
  }, [tasks]);

  // Add Task
  const addTask = () => {
    if (!name) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name,
        desc,
        status: "all"
      }
    ]);

    setName("");
    setDesc("");
  };

  // Move All → Pending
  const startTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status: "pending" } : t
    ));
  };

  // Move Pending → Completed
  const completeTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status: "completed" } : t
    ));
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Filters
  const allTasks = tasks.filter(t => t.status === "all");
  const pendingTasks = tasks.filter(t => t.status === "pending");
  const completedTasks = tasks.filter(t => t.status === "completed");

  return (
    <div className="container">

      {/* Add Task */}
      <div className="add-box">
        <input
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      <div className="grid">

        {/* Dashboard */}
        <div className="column">
          <h2>📊 Dashboard</h2>
          <div className="card">Total: {tasks.length}</div>
          <div className="card">All: {allTasks.length}</div>
          <div className="card">Pending: {pendingTasks.length}</div>
          <div className="card">Completed: {completedTasks.length}</div>
        </div>

        {/* All Tasks */}
        <div className="column">
          <h2>📋 All Tasks</h2>

          {allTasks.length === 0 && <p className="empty">No tasks yet</p>}

          {allTasks.map(t => (
            <div className="task-card" key={t.id}>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>

              <button onClick={() => startTask(t.id)}>▶ Start</button>
              <button className="delete" onClick={() => deleteTask(t.id)}>
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* Pending */}
        <div className="column">
          <h2>⏳ Pending</h2>

          {pendingTasks.length === 0 && <p className="empty">No pending tasks</p>}

          {pendingTasks.map(t => (
            <div className="task-card" key={t.id}>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>

              <button onClick={() => completeTask(t.id)}>
                ✔ Complete
              </button>
              <button className="delete" onClick={() => deleteTask(t.id)}>
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* Completed */}
        <div className="column">
          <h2>✅ Completed</h2>

          {completedTasks.length === 0 && <p className="empty">No completed tasks</p>}

          {completedTasks.map(t => (
            <div className="task-card" key={t.id}>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>

              <span className="done">Completed ✔</span>

              <button className="delete" onClick={() => deleteTask(t.id)}>
                🗑
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;