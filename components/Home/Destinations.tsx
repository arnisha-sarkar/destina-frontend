// import React from "react";
// import Link from "next/link";
// import { MapPin } from "lucide-react";

// const destinations = [
//   {
//     name: "Sajek Valley",
//     image:
//       "https://images.unsplash.com/photo-1639330484340-38edb3d8ee9d?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tours: 15,
//   },
//   {
//     name: "Cox's Bazar",
//     image:
//       "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tours: 22,
//   },
//   {
//     name: "Sylhet Tea Gardens",
//     image:
//       "https://plus.unsplash.com/premium_photo-1692049123825-8d43174c9c5c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     tours: 10,
//   },
//   {
//     name: "Sundarbans Mangoforest",
//     image:
//       "https://media.istockphoto.com/id/651783740/photo/sundarbans-national-park-in-bangladesh.jpg?s=1024x1024&w=is&k=20&c=YXV8v-chUobstss8dtvn8lzCl3Gk62uDPQj4B95RyJ0=",
//     tours: 8,
//   },
// ];

// const Destinations = () => {
//   return (
//     <div className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-16">
//           <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
//             Explore Popular Destinations
//           </h2>
//           <Link
//             href="/destinations"
//             className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {destinations.map((dest, index) => (
//             <div
//               key={index}
//               className="relative group rounded-3xl overflow-hidden shadow-lg h-80"
//             >
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
//                 <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
//                   <MapPin size={14} /> {dest.tours} Tours
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Destinations;

import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  {
    name: "Sajek Valley",
    image:
      "https://images.unsplash.com/photo-1639330484340-38edb3d8ee9d?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tours: 15,
  },
  {
    name: "Cox's Bazar",
    image:
      "https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tours: 22,
  },
  {
    name: "Sylhet Tea Gardens",
    image:
      "https://plus.unsplash.com/premium_photo-1692049123825-8d43174c9c5c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tours: 10,
  },
  {
    name: "Sundarbans Mangoforest",
    image:
      "https://media.istockphoto.com/id/651783740/photo/sundarbans-national-park-in-bangladesh.jpg?s=1024x1024&w=is&k=20&c=YXV8v-chUobstss8dtvn8lzCl3Gk62uDPQj4B95RyJ0=",
    tours: 8,
  },
];

const Destinations = () => {
  return (
    // মেইন ব্যাকগ্রাউন্ড লাইট মোডে gray-50 এবং ডার্ক মোডে আপনার পছন্দমতো ডার্ক কালার
    <div className="py-24 bg-gray-50 dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          {/* হেডলাইনের কালার অ্যাডজাস্টমেন্ট */}
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Explore Popular Destinations
          </h2>
          {/* ভিউ অল বাটন ডার্ক মোডেও পরিষ্কার দেখাবে */}
          <Link
            href="/destinations"
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              // কার্ডের শ্যাডো ডার্ক মোডে কমিয়ে দেওয়া হয়েছে যাতে ন্যাচারাল লাগে
              className="relative group rounded-3xl overflow-hidden shadow-lg dark:shadow-none h-80 border border-transparent dark:border-white/5"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* ছবির ওপর গ্রেডিয়েন্ট ডার্ক মোডেও চমৎকার কনট্রাস্ট দেবে */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <MapPin size={14} className="text-blue-400" /> {dest.tours}{" "}
                  Tours
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  {dest.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
