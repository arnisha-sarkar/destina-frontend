import React from "react";
import { Users, MapPin, Smile, Building } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "120+", label: "Destinations Covered" },
  { icon: Building, value: "250+", label: "Hotel Partners" },
  { icon: Smile, value: "98%", label: "Satisfaction Rate" },
];

const Statistics = () => {
  return (
    <div className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">Our Impact in Numbers</h2>
          <p className="text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
            We take pride in delivering unforgettable travel experiences across
            the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-700/50 p-8 rounded-3xl backdrop-blur-sm border border-blue-500/50"
            >
              <stat.icon className="w-12 h-12 mx-auto text-blue-200 mb-6" />
              <p className="text-5xl font-black mb-2">{stat.value}</p>
              <p className="text-lg text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
