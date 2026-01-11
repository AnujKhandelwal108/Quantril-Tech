import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function TaskDetail({ tasks, editTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const isEdit = searchParams.get("edit") === "true";

  const task = tasks.find(t => t.id === Number(id));

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  if (!task) {
    return <p className="text-center mt-10">Task not found</p>;
  }

  const handleUpdate = () => {
    editTask({
      ...task,
      title,
      description,
    });
    navigate("/tasks");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      {isEdit ? (
        <>
          <h2 className="text-xl font-bold mb-4">Edit Task</h2>

          <input
            className="w-full border p-2 mb-3 rounded"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-2 mb-4 rounded"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Update Task
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p className="text-gray-600 mt-2">{task.description}</p>

          <button
            onClick={() => deleteTask(task.id)}
            className="mt-4 text-red-600 hover:underline"
          >
            Delete Task
          </button>
        </>
      )}
    </div>
  );
}
