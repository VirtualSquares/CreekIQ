import React from "react";
import "../App.css";

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 border-b text-white bg-zinc-900/80 flex items-center justify-evenly px-6 py-3">
        <h1 className="font-bold text-2xl gradient-custom-text">CreekIQ</h1>

        <ul className="flex gap-6 text-sm font-medium text-gray-400 border-2 rounded-4xl px-5 py-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a href="#" className="text-sm underline text-gray-400">
            Get Started
          </a>
          <button className="text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
