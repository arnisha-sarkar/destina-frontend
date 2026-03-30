// import React from "react";
// import { Users, MapPin, Smile, Building } from "lucide-react";

// const stats = [
//   { icon: Users, value: "50,000+", label: "Happy Travelers" },
//   { icon: MapPin, value: "120+", label: "Destinations Covered" },
//   { icon: Building, value: "250+", label: "Hotel Partners" },
//   { icon: Smile, value: "98%", label: "Satisfaction Rate" },
// ];

// const Statistics = () => {
//   return (
//     <div className="py-24 bg-blue-600 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold">Our Impact in Numbers</h2>
//           <p className="text-xl text-blue-100 mt-4 max-w-2xl mx-auto">
//             We take pride in delivering unforgettable travel experiences across
//             the globe.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-blue-700/50 p-8 rounded-3xl backdrop-blur-sm border border-blue-500/50"
//             >
//               <stat.icon className="w-12 h-12 mx-auto text-blue-200 mb-6" />
//               <p className="text-5xl font-black mb-2">{stat.value}</p>
//               <p className="text-lg text-blue-100 font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;

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
    // লাইট মোডে blue-600 আর ডার্ক মোডে blue-900 থেকে একটু ডার্ক শেড ব্যবহার করা হয়েছে
    <div className="py-24 bg-blue-600 dark:bg-[#002B54] text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">Our Impact in Numbers</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200/80 mt-4 max-w-2xl mx-auto">
            We take pride in delivering unforgettable travel experiences across
            the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              // কার্ডগুলো ডার্ক মোডে আরও একটু গ্লাস-মরফিজম লুক দেবে
              className="bg-blue-700/50 dark:bg-black/20 p-8 rounded-3xl backdrop-blur-sm border border-blue-500/50 dark:border-white/10 hover:scale-105 transition-all duration-300"
            >
              <stat.icon className="w-12 h-12 mx-auto text-blue-200 dark:text-blue-300 mb-6" />
              <p className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-lg text-blue-100 dark:text-blue-200/70 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
