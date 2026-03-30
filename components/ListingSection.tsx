// "use client";

// import React, { useState, useEffect } from "react";
// import { Star, MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import Image from "next/image";
// import axios from "axios";
// import Link from "next/link";

// // --- Types ---
// interface TravelCard {
//   _id: string; // MongoDB ব্যবহার করলে সাধারণত _id থাকে
//   image: string;
//   title: string;
//   description: string;
//   price: number;
//   date: string;
//   rating: number;
//   location: string;
// }

// const ListingSection = () => {
//   const [items, setItems] = useState<TravelCard[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get("http://localhost:5000/api/v1/items");

//         // এপিআই রেসপন্স স্ট্রাকচার অনুযায়ী ডাটা সেট করা
//         if (response.data.success) {
//           setItems(response.data.data);
//         } else {
//           setItems(response.data); // সরাসরি অ্যারে আসলে
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(
//           "ডাটা লোড করতে ব্যর্থ হয়েছে। আপনার সার্ভারটি চালু আছে কি না চেক করুন।",
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <section className="container mx-auto px-6 py-16">
//       <div className="mb-10 text-left">
//         <h2 className="text-3xl font-bold text-[#003B73]">Top Destinations</h2>
//         <p className="text-gray-500">Explore our most loved travel packages</p>
//       </div>

//       {error && (
//         <div className="text-red-500 bg-red-50 p-4 rounded-xl mb-6 text-center font-medium">
//           {error}
//         </div>
//       )}

//       {/* --- Grid Layout --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {loading
//           ? // ডাটা লোড হওয়ার সময় Skeleton Loader দেখানো হচ্ছে
//             Array.from({ length: 4 }).map((_, index) => (
//               <CardSkeleton key={index} />
//             ))
//           : // এপিআই থেকে আসা আসল কার্ডগুলো রেন্ডার করা হচ্ছে
//             items.map((item) => <TravelCardItem key={item._id} data={item} />)}
//       </div>

//       {!loading && items.length === 0 && !error && (
//         <p className="text-center text-gray-400 py-10">
//           কোনো তথ্য পাওয়া যায়নি।
//         </p>
//       )}
//     </section>
//   );
// };

// // --- Single Card Component ---
// const TravelCardItem = ({ data }: { data: TravelCard }) => (
//   <div className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
//     {/* Image Section */}
//     <div className="relative h-56 w-full overflow-hidden">
//       <Image
//         src={
//           data.image ||
//           "https://media.istockphoto.com/id/1618319335/photo/house-on-hill.jpg?s=1024x1024&w=is&k=20&c=XmNtIeu9TuywvaWDoJRmgm4o6KwWbzJc9-5cmx7Fy2k="
//         } // ফলব্যাক ইমেজ
//         alt={data.title}
//         fill
//         className="object-cover transition-transform duration-500 group-hover:scale-110"
//       />
//       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
//         <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
//         <span className="text-[10px] font-bold text-gray-800">
//           {data.rating}
//         </span>
//       </div>
//     </div>

//     {/* Content Section */}
//     <div className="p-5 flex flex-col flex-grow">
//       <div className="flex items-center gap-1 text-blue-500 mb-2">
//         <MapPin className="w-3 h-3" />
//         <span className="text-[10px] font-bold uppercase tracking-wider">
//           {data.location}
//         </span>
//       </div>

//       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
//         {data.title}
//       </h3>
//       <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
//         {data.description}
//       </p>

//       {/* Meta Information */}
//       <div className="mt-auto space-y-3">
//         <div className="flex justify-between items-center py-3 border-t border-gray-50">
//           <div className="flex items-center gap-1 text-gray-600">
//             <Calendar className="w-3.5 h-3.5" />
//             <span className="text-[11px] font-medium">{data.date}</span>
//           </div>
//           <div className="flex items-center font-bold text-[#003B73]">
//             <DollarSign className="w-3.5 h-3.5" />
//             <span className="text-base">{data.price}</span>
//           </div>
//         </div>

//         <Link href={`/items/${data._id}`}>
//           <Button className="w-full bg-gray-50 hover:bg-[#003B73] text-[#003B73] hover:text-white border-none rounded-xl font-bold py-6 transition-all group-hover:shadow-md">
//             View Details
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </Button>
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// // --- Skeleton Component ---
// const CardSkeleton = () => (
//   <div className="bg-gray-50 rounded-[24px] p-0 overflow-hidden border border-gray-100 h-full">
//     <Skeleton className="h-56 w-full rounded-none" />
//     <div className="p-5 space-y-4">
//       <Skeleton className="h-3 w-20" />
//       <Skeleton className="h-5 w-full" />
//       <Skeleton className="h-12 w-full" />
//       <div className="pt-4 border-t flex justify-between">
//         <Skeleton className="h-4 w-16" />
//         <Skeleton className="h-4 w-12" />
//       </div>
//       <Skeleton className="h-12 w-full rounded-xl" />
//     </div>
//   </div>
// );

// export default ListingSection;

"use client";

import React, { useState, useEffect } from "react";
import { Star, MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

interface TravelCard {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  date: string;
  rating: number;
  location: string;
}

const ListingSection = () => {
  const [items, setItems] = useState<TravelCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/v1/items");
        if (response.data.success) {
          setItems(response.data.data);
        } else {
          setItems(response.data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("ডাটা লোড করতে ব্যর্থ হয়েছে। সার্ভারটি চেক করুন।");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-10 text-left">
        <h2 className="text-3xl font-bold text-[#003B73] dark:text-blue-400">
          Top Destinations
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Explore our most loved travel packages
        </p>
      </div>

      {error && (
        <div className="text-red-500 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl mb-6 text-center font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : items.map((item) => <TravelCardItem key={item._id} data={item} />)}
      </div>

      {!loading && items.length === 0 && !error && (
        <p className="text-center text-gray-400 py-10">
          কোনো তথ্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
};

const TravelCardItem = ({ data }: { data: TravelCard }) => (
  // এখানে bg-white এবং border-gray-100 নিশ্চিত করা হয়েছে লাইট মোডের জন্য
  <div className="group flex flex-col bg-white dark:bg-[#161B22] rounded-[24px] overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 h-full">
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={
          data.image ||
          "https://media.istockphoto.com/id/1618319335/photo/house-on-hill.jpg?s=1024x1024&w=is&k=20&c=XmNtIeu9TuywvaWDoJRmgm4o6KwWbzJc9-5cmx7Fy2k="
        }
        alt={data.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        <span className="text-[10px] font-bold text-gray-800 dark:text-white">
          {data.rating}
        </span>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 mb-2">
        <MapPin className="w-3 h-3" />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {data.location}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
        {data.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
        {data.description}
      </p>

      <div className="mt-auto space-y-3">
        <div className="flex justify-between items-center py-3 border-t border-gray-50 dark:border-white/5">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-[11px] font-medium">{data.date}</span>
          </div>
          <div className="flex items-center font-bold text-[#003B73] dark:text-blue-300">
            <DollarSign className="w-3.5 h-3.5" />
            <span className="text-base">{data.price}</span>
          </div>
        </div>

        <Link href={`/items/${data._id}`}>
          {/* Button style optimized for both modes */}
          <Button className="w-full bg-blue-50 dark:bg-white/5 hover:bg-blue-600 dark:hover:bg-blue-600 text-blue-700 dark:text-white hover:text-white border-none rounded-xl font-bold py-6 transition-all group-hover:shadow-md">
            View Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const CardSkeleton = () => (
  <div className="bg-white dark:bg-white/5 rounded-[24px] p-0 overflow-hidden border border-gray-100 dark:border-white/5 h-full">
    <Skeleton className="h-56 w-full rounded-none" />
    <div className="p-5 space-y-4">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-12 w-full" />
      <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="h-12 w-full rounded-xl" />
    </div>
  </div>
);

export default ListingSection;
