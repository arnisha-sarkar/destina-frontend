// // "use client";

// // import React, { useEffect, useState } from "react";
// // import {
// //   Search,
// //   Loader2,
// //   Package,
// //   Calendar,
// //   Tag,
// //   CheckCircle2,
// //   Clock,
// // } from "lucide-react";

// // interface Booking {
// //   _id: string;
// //   itemName: string;
// //   price: number;
// //   status: string;
// //   date: string;
// //   userEmail: string; // ফিল্টার করার জন্য
// // }

// // const MyBookingsPage = () => {
// //   const [bookings, setBookings] = useState<Booking[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // ১. এপিআই থেকে ডাটা নিয়ে আসা
// //   useEffect(() => {
// //     const fetchMyBookings = async () => {
// //       try {
// //         const response = await fetch("http://localhost:5000/api/v1/bookings");
// //         const resData = await response.json();

// //         // এখানে গুরুত্বপূর্ণ: এপিআই থেকে সব ডাটা আসলে ইউজারের ইমেইল দিয়ে ফিল্টার করতে হবে
// //         // যাতে একজন ইউজার অন্যজনের বুকিং না দেখে।
// //         // (ধরে নিচ্ছি ইউজারের ইমেইল 'arnisha@example.com')
// //         const currentUserEmail = "arnisha@example.com";
// //         const myData = (resData.data || resData).filter(
// //           (item: Booking) => item.userEmail === currentUserEmail,
// //         );

// //         setBookings(myData);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error loading bookings:", error);
// //         setLoading(false);
// //       }
// //     };
// //     fetchMyBookings();
// //   }, []);

// //   // ২. সার্চ লজিক (Error safe)
// //   const filteredBookings = bookings.filter((b) =>
// //     b.itemName?.toLowerCase().includes(searchTerm.toLowerCase()),
// //   );

// //   if (loading) {
// //     return (
// //       <div className="flex h-[60vh] flex-col items-center justify-center">
// //         <Loader2 className="animate-spin text-blue-600" size={40} />
// //         <p className="mt-4 text-slate-500 font-medium tracking-wide">
// //           Loading your bookings...
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
// //       {/* Header with Search */}
// //       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
// //         <div>
// //           <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
// //             My Bookings
// //           </h1>
// //           <p className="text-slate-500 font-medium mt-1">
// //             Check the status of your current and past orders.
// //           </p>
// //         </div>

// //         <div className="relative w-full md:w-80">
// //           <Search
// //             className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
// //             size={18}
// //           />
// //           <input
// //             type="text"
// //             placeholder="Search by item name..."
// //             className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
// //       </div>

// //       {/* Bookings Grid/List */}
// //       <div className="grid grid-cols-1 gap-4">
// //         {filteredBookings.length > 0 ? (
// //           filteredBookings.map((booking) => (
// //             <div
// //               key={booking._id}
// //               className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
// //             >
// //               <div className="flex items-center gap-5">
// //                 <div className="h-14 w-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600">
// //                   <Package size={28} />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-black text-lg text-slate-900 dark:text-white">
// //                     {booking.itemName}
// //                   </h3>
// //                   <div className="flex flex-wrap items-center gap-4 mt-1">
// //                     <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
// //                       <Tag size={12} /> ID:{" "}
// //                       {booking._id.slice(-6).toUpperCase()}
// //                     </span>
// //                     <span className="text-xs font-bold text-slate-400 flex items-center gap-1 uppercase tracking-tighter">
// //                       <Calendar size={12} /> {booking.date || "22 March, 2026"}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-center justify-between md:justify-end gap-8 border-t md:border-t-0 pt-4 md:pt-0">
// //                 <div className="text-left md:text-right">
// //                   <p className="text-xs font-bold text-slate-400 uppercase mb-1">
// //                     Total Paid
// //                   </p>
// //                   <p className="text-xl font-black text-slate-900 dark:text-white">
// //                     ${booking.price}
// //                   </p>
// //                 </div>

// //                 <div className="flex flex-col items-end">
// //                   <span
// //                     className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase flex items-center gap-1.5 ${
// //                       booking.status === "Delivered"
// //                         ? "bg-green-100 text-green-700"
// //                         : "bg-amber-100 text-amber-700"
// //                     }`}
// //                   >
// //                     {booking.status === "Delivered" ? (
// //                       <CheckCircle2 size={12} />
// //                     ) : (
// //                       <Clock size={12} />
// //                     )}
// //                     {booking.status || "Pending"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[32px] p-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800">
// //             <p className="text-slate-500 font-bold italic text-lg">
// //               You haven't made any bookings yet.
// //             </p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MyBookingsPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Loader2, Calendar, DollarSign, Tag } from "lucide-react";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // ইউজারের ইমেইল (আপনার ItemCard-এ যে ইমেইল ব্যবহার করেছেন)
//   const userEmail = "arnisha@example.com";

//   useEffect(() => {
//     const fetchMyBookings = async () => {
//       try {
//         // আপনার ব্যাকএন্ড থেকে এই ইউজারের বুকিংগুলো নিয়ে আসা
//         const response = await fetch(
//           `http://localhost:5000/api/v1/bookings?email=${userEmail}`,
//         );
//         const data = await response.json();
//         setBookings(data?.data || data || []);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyBookings();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-6 md:p-10 min-h-screen">
//       <div className="mb-10">
//         <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
//           My Bookings
//         </h1>
//         <p className="text-slate-500 font-medium mt-1">
//           Manage and track your service history.
//         </p>
//       </div>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-20">
//           <Loader2 className="animate-spin text-blue-600 mb-4" size={40} />
//           <p className="font-bold text-slate-500">Fetching your bookings...</p>
//         </div>
//       ) : bookings.length > 0 ? (
//         <div className="grid grid-cols-1 gap-4">
//           {bookings.map((booking: any) => (
//             <div
//               key={booking._id}
//               className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-[24px] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
//             >
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2">
//                   <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">
//                     {booking.status || "Pending"}
//                   </span>
//                   <span className="text-slate-300">|</span>
//                   <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
//                     <Calendar size={14} /> {booking.date}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">
//                   {booking.itemName}
//                 </h3>
//               </div>

//               <div className="flex items-center gap-8">
//                 <div className="text-right">
//                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
//                     Price
//                   </p>
//                   <p className="text-xl font-black text-blue-600">
//                     ${booking.price}
//                   </p>
//                 </div>

//                 {/* প্রয়োজনে এখানে Cancel বা Delete বাটন যোগ করতে পারেন */}
//                 <button className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-all">
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[32px] border-2 border-dashed border-slate-200 dark:border-slate-800">
//           <p className="text-slate-400 font-bold italic text-lg">
//             You haven't booked anything yet!
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyBookings;

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Trash2, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // এপিআই থেকে ইউজারের বুকিং ডাটা আনা (আপনার এপিআই অনুযায়ী)
  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/bookings",
        );
        setBookings(response.data.data);
      } catch (error) {
        console.error("Booking fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMyBookings();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-black text-[#003B73] mb-8 uppercase italic tracking-tighter">
          My Bookings ({bookings.length})
        </h1>

        <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">
                  Package
                </th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">
                  Price
                </th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">
                  Status
                </th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-20 rounded-2xl overflow-hidden shrink-0">
                        <Image
                          loader={({ src }) => src}
                          src={booking.itemImage}
                          alt={booking.itemName}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white line-clamp-1">
                        {booking.itemName}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 font-black text-[#003B73]">
                    ৳{booking.price}
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-100 text-yellow-600 flex items-center gap-1 w-fit">
                      <Clock size={12} /> Pending
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-10 px-4"
                      >
                        <CreditCard size={16} className="mr-2" /> Pay
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:bg-red-50 rounded-xl h-10 w-10 p-0"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsPage;
