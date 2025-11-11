import React from "react";
export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-5">
      <nav className="space-y-4">
        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Analytics</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Settings</a>
      </nav>
    </aside>
  );
}
