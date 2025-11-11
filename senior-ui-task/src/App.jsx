import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-50 flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
