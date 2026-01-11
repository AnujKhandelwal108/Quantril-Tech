import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Task Tracker Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-bold text-blue-600">
            Task Tracker
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/tasks" className="hover:text-blue-600">
            Tasks
          </Link>
          <Link to="/add" className="hover:text-blue-600">
            Add Task
          </Link>
        </div>

      </div>
    </nav>
  );
}
