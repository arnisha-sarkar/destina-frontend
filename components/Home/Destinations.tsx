import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Sajek Valley",
    image:
      "https://images.unsplash.com/photo-1624021703248-18e3845b4c1a?q=80&w=400",
    tours: 15,
  },
  {
    name: "Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=400",
    tours: 22,
  },
  {
    name: "Sylhet Tea Gardens",
    image:
      "https://images.unsplash.com/photo-1618179294248-0382d627c28c?q=80&w=400",
    tours: 10,
  },
  {
    name: "Sundarbans Mangoforest",
    image:
      "https://images.unsplash.com/photo-1601999114068-1933c04231b5?q=80&w=400",
    tours: 8,
  },
];

const Destinations = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Explore Popular Destinations
          </h2>
          <Link
            href="/destinations"
            className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
          >
            View All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-lg h-80"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin size={14} /> {dest.tours} Tours
                </div>
                <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
