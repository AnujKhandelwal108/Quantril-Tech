import { Link } from "react-router-dom";

export default function TaskCard({ task, toggleTask, deleteTask }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{task.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">
        {task.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span className={task.completed ? "line-through text-gray-400" : ""}>
            Completed
          </span>
        </label>

        <div className="flex gap-2">
          <Link
            to={`/tasks/${task.id}`}
            className="text-blue-600 text-sm hover:underline"
          >
            View
          </Link>

          <Link
            to={`/tasks/${task.id}?edit=true`}
            className="text-green-600 text-sm hover:underline"
          >
            Edit
          </Link>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600 text-sm hover:underline"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
