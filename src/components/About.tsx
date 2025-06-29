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

  const half = Math.ceil(features.length / 2);
  const firstRow = features.slice(0, half);
  const secondRow = features.slice(half);

  return (
    <div className="w-full bg-[#1a1a1a] py-16 flex flex-col gap-10">
      <div className="text-center text-white mb-10">
        <h1 className="font-bold text-5xl">
          Why <span className="gradient-custom-text">CreekIQ</span>?
        </h1>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {firstRow.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {secondRow.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ item }: { item: typeof About.prototype.features extends Array<infer U> ? U : never }) {
  return (
    <div className="relative p-[3px] w-80 h-[150px] rounded-xl bg-animated-gradient">
      <div className="relative h-full w-full rounded-xl bg-[#1a1a1a] p-6 text-gray-300 z-10">
        <div className="absolute top-4 left-4">{item.icon}</div>
        <h1 className="font-bold text-2xl text-white mt-8">{item.title}</h1>
        <p className="mt-2">{item.text}</p>
      </div>
    </div>
  );
}

export default About;
