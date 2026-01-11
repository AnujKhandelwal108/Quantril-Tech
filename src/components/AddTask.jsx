import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: Date.now(),
      title,
      description,
      completed: false,
    });

    navigate("/tasks");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 max-w-md mx-auto rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>

      <input
        className="w-full border p-2 mb-3 rounded"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2 mb-4 rounded"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
}
