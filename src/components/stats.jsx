import React from "react";

const stats = [
  { number: "3", label: "Years Experience" },
  { number: "50", label: "Research Papers" },
  { number: "500", label: "Connections" },
  { number: "10", label: "Projects" },
];

const Stats = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-24">
      {/* Add animation styles */}
      <style>
        {`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
      </style>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center cursor-pointer rounded-xl text-white p-4 sm:p-6 opacity-0 transform transition-all duration-500 hover:scale-105 hover:bg-primary hover:shadow-2xl"
          style={{
            animation: "fadeInUp 0.8s ease-out forwards",
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <h2 className="text-3xl sm:text-4xl ml-2 font-bold">
            {stat.number}+
          </h2>
          <p className="text-gray-300 mt-2 mr-2 text-lg sm:text-xl text-center">
            {stat.label}
          </p>
          <div className="mt-4 border-b border-gray-300 border-2 sm:border-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Stats;