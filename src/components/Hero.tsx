import React from "react";
import "../App.css";

function Hero() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-center">
        <div className="mx-auto text-center mt-[60px]">
          <div className="mb-4 px-4 py-1 bg-inherit text-sm rounded-full font-bold shadow-sm inline-block">
            <span className="gradient-custom-text border border-white px-2 rounded-xl">
              Public Beta Release
            </span>
          </div>
          <h1 className="font-bold text-6xl leading-tight">
            Snap a Quick Pic <br />
            <span className="gradient-custom-text">Spark a Change Today</span>
          </h1>
          <p className="text-gray-400 mt-2">
            Picture, Score, Cleanup, Green, and more.
          </p>
        </div>
        <div className="w-full flex justify-center mt-5">
          <input
            type="text"
            placeholder="E - Mail"
            className="border border-white text-center rounded-xl px-4 py-2 bg-transparent"
          />
          <button className="p-4 bg-blue-500 rounded-xl mx-5 cursor-pointer">
            Get Updates
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
