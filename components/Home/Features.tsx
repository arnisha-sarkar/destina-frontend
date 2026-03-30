import React from "react";
import { ShieldCheck, Zap, Headset, Map } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Bookings",
    description: "Your payments and personal data are always protected.",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Zap,
    title: "AI-Powered Planning",
    description: "Get personalized itineraries in seconds using our AI.",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Map,
    title: "Expert Local Guides",
    description:
      "Experience destinations like a local with our certified guides.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "We are here for you anytime, anywhere during your journey.",
    color: "text-red-600 dark:text-red-400",
  },
];

const Features = () => {
  return (
    // 'bg-white' কে লাইট মোডে ফোর্স করার জন্য সরাসরি ক্লাসগুলো ক্লিয়ার রাখা হয়েছে
    <section className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            Why TravelFlow?
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
            Your Perfect Travel Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              // bg-gray-50 লাইট মোডে আর dark:bg-[#161B22] ডার্ক মোডে কাজ করবে
              className="bg-white dark:bg-[#161B22] p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:shadow-xl dark:hover:shadow-blue-500/5 transition-all group"
            >
              <div
                // আইকন বক্স লাইট মোডে একদম সাদা (bg-white) থাকবে
                className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* টেক্সট কালার লাইট মোডে text-gray-600 থাকবে */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
