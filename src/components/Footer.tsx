import React from "react";
import "../App.css";

function Footer() {
  return (
    <>
      <div className="sticky top-0 z-50 border-t text-white bg-zinc-900/80 flex items-center justify-evenly px-6 py-6">
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
      </div>
    </>
  );
}

export default Footer;
