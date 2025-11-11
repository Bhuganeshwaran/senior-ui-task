import React from "react";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition">
        Logout
      </button>
    </header>
  );
}
