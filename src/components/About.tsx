import React from "react";
import {
  FiCamera,
  FiLayers,
  FiFeather,
  FiUsers,
  FiClock,
  FiCpu,
} from "react-icons/fi";
import "../App.css";

function About() {
  const features = [
    {
      icon: <FiCamera size={28} className="text-blue-400" />,
      title: "Quick And Simple",
      text: "Capture and analyze images all with the click of a button.",
    },
    {
      icon: <FiLayers size={28} className="text-purple-400" />,
      title: "Rich With Features",
      text: "Enjoy the vast luxury of features built-in to the website.",
    },
    {
      icon: <FiFeather size={28} className="text-pink-400" />,
      title: "Beautifully Styled",
      text: "Work with intuitive and usable styling.",
    },
    {
      icon: <FiUsers size={28} className="text-green-400" />,
      title: "Collaborative Cleanup",
      text: "Create events and invite others to help restore nature.",
    },
    {
      icon: <FiClock size={28} className="text-yellow-400" />,
      title: "Service Hour Tracking",
      text: "Earn and track hours as you participate in cleanups.",
    },
    {
      icon: <FiCpu size={28} className="text-red-400" />,
      title: "AI Powered Scoring",
      text: "Get instant cleanliness scores using advanced AI.",
    },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] py-16">
      <div className="text-center text-white mb-10">
        <h1 className="font-bold text-5xl">
          Why <span className="gradient-custom-text">CreekIQ</span>?
        </h1>
      </div>

      <div className="flex justify-center flex-wrap gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative p-[3px] w-80 h-[150px] rounded-xl bg-animated-gradient"
          >
            <div className="relative h-full w-full rounded-xl bg-[#1a1a1a] p-6 text-gray-300 z-10">
              <div className="absolute top-4 left-4">{item.icon}</div>
              <h1 className="font-bold text-2xl text-white mt-8">
                {item.title}
              </h1>
              <p className="mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
