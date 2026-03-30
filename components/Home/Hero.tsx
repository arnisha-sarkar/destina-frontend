// "use client";
// import React from "react";
// import Image from "next/image";
// import { Search, MapPin, Users, DollarSign, ChevronDown } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
//       {/* 1. Background Image - Full Screen */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Luxury Travel Background"
//           fill
//           priority
//           className="object-cover"
//         />
//         {/* Overlay for better text visibility */}
//         <div className="absolute inset-0 bg-black/20 shadow-inner" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
//         {/* 2. Main Title - Typography like the image */}
//         <h1 className="text-6xl md:text-6xl font-serif tracking-tight mb-4 drop-shadow-lg leading-tight">
//           Discover <span className="italic font-light">Tranquility</span>
//         </h1>

//         {/* 3. Subtitle */}
//         <p className="text-4xl md:text-2xl font-light max-w-2xl mx-auto mb-16 opacity-90 tracking-wide">
//           Curated luxury experiences for the discerning traveler.
//         </p>

//         {/* 4. The Exact Search Bar Design */}
//         <div className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-full shadow-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2">
//           {/* Location Field */}
//           <div className="flex items-center gap-3 px-6 py-4 w-full md:w-auto border-gray-100 md:border-r flex-grow group cursor-pointer">
//             <MapPin
//               className="text-gray-400 group-hover:text-blue-500 transition-colors"
//               size={20}
//             />
//             <div className="flex flex-col items-start">
//               <span className="text-xs text-gray-400 font-semibold uppercase">
//                 Location
//               </span>
//               <div className="flex items-center gap-2">
//                 <input
//                   type="text"
//                   placeholder="Where to?"
//                   className="bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-base font-bold w-full"
//                 />
//                 <ChevronDown size={14} className="text-gray-400" />
//               </div>
//             </div>
//           </div>

//           {/* Guests Field */}
//           <div className="flex items-center gap-3 px-6 py-4 w-full md:w-auto border-gray-100 md:border-r group cursor-pointer">
//             <Users
//               className="text-gray-400 group-hover:text-blue-500 transition-colors"
//               size={20}
//             />
//             <div className="flex flex-col items-start text-left min-w-[120px]">
//               <span className="text-xs text-gray-400 font-semibold uppercase">
//                 Guests
//               </span>
//               <div className="flex items-center gap-2">
//                 <span className="text-gray-800 font-bold">Add Guests</span>
//                 <ChevronDown size={14} className="text-gray-400" />
//               </div>
//             </div>
//           </div>

//           {/* Budget Field */}
//           <div className="flex items-center gap-3 px-6 py-4 w-full md:w-auto flex-grow group cursor-pointer">
//             <DollarSign
//               className="text-gray-400 group-hover:text-blue-500 transition-colors"
//               size={20}
//             />
//             <div className="flex flex-col items-start text-left">
//               <span className="text-xs text-gray-400 font-semibold uppercase">
//                 Budget
//               </span>
//               <div className="flex items-center gap-2">
//                 <span className="text-gray-800 font-bold">Set Range</span>
//                 <ChevronDown size={14} className="text-gray-400" />
//               </div>
//             </div>
//           </div>

//           {/* 5. The Search Button */}
//           <button className="w-full md:w-auto bg-[#1a1a1a] hover:bg-black text-white px-10 py-5 rounded-xl md:rounded-full font-bold transition-all flex items-center justify-center gap-3 active:scale-95">
//             <span>Find Journeys</span>
//             <Search size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center py-20">
      {/* --- Background Image with Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2062"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* --- Content Section --- */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8" // gap বাড়ানো হয়েছে
        >
          {/* Badge */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Explore the Unexplored
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-[1.1]">
            Plan Your Next <span className="text-blue-500">Adventure</span>{" "}
            <br />
            Without Limits
          </h1>

          {/* Description */}
          <p className="text-white/60 text-base md:text-xl max-w-2xl leading-relaxed">
            Discover personalized itineraries, hidden gems, and seamless travel
            experiences tailored just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 group text-lg">
              <Link href="/register">Get Started</Link>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 h-14 px-10 rounded-2xl backdrop-blur-md text-lg"
            >
              <Link href="/destinations">View Destinations</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* --- Floating Interactive UI --- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 right-12 hidden xl:flex items-center gap-4 bg-black/40 backdrop-blur-2xl p-5 rounded-[2.5rem] border border-white/10 shadow-2xl"
      >
        <div className="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-600/40">
          <MapPin className="text-white w-7 h-7" />
        </div>
        <div className="text-left pr-4">
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
            Current Top Spot
          </p>
          <p className="text-white font-black text-lg tracking-tight">
            Bali, Indonesia
          </p>
        </div>
      </motion.div>

      {/* --- Visual Flow (Scroll) --- */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
