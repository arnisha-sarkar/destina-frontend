import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rafsan Hossain",
    role: "Solo Traveler",
    comment:
      "TravelFlow made my Sajek trip incredibly easy. The AI planner was a game-changer! Highly recommended.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anika Rahman",
    role: "Family Trip",
    comment:
      "Great packages and excellent support. Our family Cox's Bazar tour was seamless and fun. The local guide was very knowledgeable.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Samiul Alam",
    role: "Adventure Seeker",
    comment:
      "Sylhet adventure was thrilling! The itinerary was well-planned. A bit pricey but worth every penny for the experience.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
            Guest Reviews
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Hear From Our Travelers
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-lg relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100 fill-blue-100" />
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-100"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {test.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{test.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < test.rating ? "fill-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{test.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
