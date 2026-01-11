export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-gray-700 flex-shrink-0">
      <div className="max-w-full px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm gap-2">
          <p>&copy; {currentYear} Task Tracker. All rights reserved.</p>
          <p className="text-gray-400">Built with React, Tailwind CSS & Vite</p>
        </div>
      </div>
    </footer>
  );
}
