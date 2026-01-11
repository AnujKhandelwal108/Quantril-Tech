import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskDetail from "./components/TaskDetail";
import initialTasks from "./data/initialTasks";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load initial dummy data
  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (updatedTask) => {
  setTasks(
    tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    )
  );
};

  return (
    <div className="h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <div className="flex-1 overflow-y-auto max-w-6xl mx-auto w-full p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route
            path="/tasks"
            element={<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />}
          />
          <Route
            path="/add"
            element={<AddTask addTask={addTask} />}
          />
          <Route
            path="/tasks/:id"
            element={<TaskDetail tasks={tasks} editTask={editTask} deleteTask={deleteTask} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
