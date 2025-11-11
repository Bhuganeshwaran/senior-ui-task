import React from "react";
export default function Card() {
  return (
    <main className="flex-1 p-6">
      <h2 className="text-3xl font-semibold mb-6">Card Overview</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">Card 1</div>
        <div className="bg-white shadow-md p-6 rounded-lg">Card 2</div>
        <div className="bg-white shadow-md p-6 rounded-lg">Card 3</div>
      </div>
    </main>
  );
}
