# 🚀 APPTRACKS – Task Management Dashboard

## 📌 Project Overview

APPTRACKS is a modern **Task Management Dashboard** built using **React.js**.
It allows users to manage tasks efficiently through a structured workflow:

* Add tasks
* Move tasks through stages (All → Pending → Completed)
* Track progress in a dashboard
* Delete tasks after completion

---

## 🎯 Features

✅ 4-Column Layout (Dashboard, All Tasks, Pending, Completed)
✅ Add new tasks with name & description
✅ Task workflow management:

* All Tasks → Start → Pending → Complete → Completed
  ✅ Delete tasks only after completion
  ✅ Real-time dashboard updates
  ✅ Local storage support (data persists after refresh)
  ✅ Responsive and modern UI design

---

## 🧠 Task Flow

All Tasks → Pending → Completed

* New tasks are added to **All Tasks**
* Clicking **Start** moves task to **Pending**
* Clicking **Complete** moves task to **Completed**
* Completed tasks cannot be undone
* Only completed tasks can be deleted

---

## 🛠️ Technologies Used

* React.js (Functional Components & Hooks)
* JavaScript (ES6)
* HTML5
* CSS3 (Modern UI with animations & gradients)
* LocalStorage (for data persistence)

---

## 📂 Project Structure

```
apptracks/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/apptracks.git
```

2. Navigate to project folder

```
cd apptracks
```

3. Install dependencies

```
npm install
```

4. Run the application

```
npm start
```

---

## 🔥 Usage

* Enter task name and description
* Click ➕ Add to create a task
* Use ▶ Start to move task to Pending
* Use ✔ Complete to finish task
* Delete task only after completion

---

## ⚠️ Important Note

If old data appears, clear browser storage:

```
localStorage.clear();
```

---

## 📸 Screenshots (Optional)

*Add your project screenshots here*

---

## 🚀 Future Improvements

* Drag & Drop functionality
* Task priority system
* Due date & reminders
* Charts for analytics
* Dark/Light theme toggle

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username

---

## 📄 License

This project is for educational purposes.
