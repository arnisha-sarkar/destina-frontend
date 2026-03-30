// import React from "react";
// import Link from "next/link";
// import { Star, Clock } from "lucide-react";

// const packages = [
//   {
//     title: "Sajek Valley Couple Tour",
//     image:
//       "https://media.istockphoto.com/id/2201908335/photo/person-sitting-in-serene-mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=oRNwEXhNYPB-EyTo1G3AG7sa19b2qQhHcSZylHPTDMw=",
//     duration: "3 Days / 2 Nights",
//     price: "7,500 BDT",
//     rating: 4.8,
//   },
//   {
//     title: "Cox's Bazar Beach Relax",
//     image:
//       "https://plus.unsplash.com/premium_photo-1730132436927-916ea0980da7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     duration: "4 Days / 3 Nights",
//     price: "9,000 BDT",
//     rating: 4.9,
//   },
//   {
//     title: "Sylhet Adventure Trip",
//     image:
//       "https://images.unsplash.com/photo-1714421394117-f2172fc9c74b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     duration: "3 Days / 2 Nights",
//     price: "6,800 BDT",
//     rating: 4.7,
//   },
// ];

// const Packages = () => {
//   return (
//     <div className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">
//             Featured Offers
//           </p>
//           <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
//             Popular Tour Packages
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-10">
//           {packages.map((pkg, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
//             >
//               <img
//                 src={pkg.image}
//                 alt={pkg.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-8">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-1 text-yellow-500 font-bold">
//                     <Star size={16} className="fill-yellow-500" /> {pkg.rating}
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 text-sm">
//                     <Clock size={16} /> {pkg.duration}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                   {pkg.title}
//                 </h3>
//                 <div className="flex items-center justify-between pt-6 border-t">
//                   <p className="text-gray-500 text-sm">
//                     From{" "}
//                     <span className="text-2xl font-black text-blue-600">
//                       {pkg.price}
//                     </span>
//                   </p>
//                   <Link
//                     href={`/packages/${index}`}
//                     className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
//                   >
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;

import React from "react";
import Link from "next/link";
import { Star, Clock } from "lucide-react";

const packages = [
  {
    title: "Sajek Valley Couple Tour",
    image:
      "https://media.istockphoto.com/id/2201908335/photo/person-sitting-in-serene-mountain-landscape.jpg?s=1024x1024&w=is&k=20&c=oRNwEXhNYPB-EyTo1G3AG7sa19b2qQhHcSZylHPTDMw=",
    duration: "3 Days / 2 Nights",
    price: "7,500 BDT",
    rating: 4.8,
  },
  {
    title: "Cox's Bazar Beach Relax",
    image:
      "https://plus.unsplash.com/premium_photo-1730132436927-916ea0980da7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "4 Days / 3 Nights",
    price: "9,000 BDT",
    rating: 4.9,
  },
  {
    title: "Sylhet Adventure Trip",
    image:
      "https://images.unsplash.com/photo-1714421394117-f2172fc9c74b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "3 Days / 2 Nights",
    price: "6,800 BDT",
    rating: 4.7,
  },
];

const Packages = () => {
  return (
    // মেইন ব্যাকগ্রাউন্ড ডার্ক মোডে পরিবর্তন হবে
    <div className="py-24 bg-white dark:bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
            Featured Offers
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
            Popular Tour Packages
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              // কার্ড ব্যাকগ্রাউন্ড এবং বর্ডার ফিক্স করা হয়েছে
              className="bg-white dark:bg-[#161B22] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-lg hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <Star size={16} className="fill-yellow-500" /> {pkg.rating}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Clock size={16} /> {pkg.duration}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {pkg.title}
                </h3>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    From{" "}
                    <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                      {pkg.price}
                    </span>
                  </p>
                  <Link
                    href={`/packages/${index}`}
                    // বাটন কালার ডার্ক মোডে সাদা (টেক্সট কালো) করে দেওয়া হয়েছে যাতে ফুটে ওঠে
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-blue-50 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
