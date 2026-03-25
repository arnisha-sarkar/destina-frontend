import React from "react";
import { ShieldCheck, Zap, Headset, Map } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Bookings",
    description: "Your payments and personal data are always protected.",
    color: "text-green-600",
  },
  {
    icon: Zap,
    title: "AI-Powered Planning",
    description: "Get personalized itineraries in seconds using our AI.",
    color: "text-yellow-600",
  },
  {
    icon: Map,
    title: "Expert Local Guides",
    description:
      "Experience destinations like a local with our certified guides.",
    color: "text-blue-600",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "We are here for you anytime, anywhere during your journey.",
    color: "text-red-600",
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
            Why TravelFlow?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Your Perfect Travel Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
