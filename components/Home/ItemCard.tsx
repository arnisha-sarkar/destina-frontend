"use client";

import React, { useState } from "react";
import NextImage from "next/image";
import { ShoppingBag, Loader2, CheckCircle, X } from "lucide-react";

interface Item {
  _id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

const ItemCard = ({ item }: { item: Item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // কারেন্ট ইউজার ডাটা
  const currentUser = {
    name: "Arnisha Sarkar",
    email: "arnisha@example.com",
  };

  // যদি কোনো কারণে item পুরোপুরি না থাকে, তবে খালি রিটার্ন করবে (Protection)
  if (!item) return null;

  const handleConfirmBooking = async () => {
    setIsBooking(true);

    const bookingData = {
      customerName: currentUser.name,
      userEmail: currentUser.email,
      itemName: item?.name || "Unknown Item",
      price: item?.price || 0,
      itemId: item?._id,
      date: new Date().toLocaleDateString("en-GB"),
      status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:5000/api/v1/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Something went wrong!");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-4 shadow-sm hover:shadow-xl transition-all group">
      {/* Item Image */}
      {/* Item Image Section */}
      <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-4 relative">
        <NextImage
          src={
            item?.image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          }
          alt={item?.name || "Product Image"}
          fill // এটি ইমেজকে প্যারেন্ট ডিভ-এর পুরোটা জুড়ে রাখবে
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false} // যদি ইমেজটি পেজের একদম উপরে থাকে তবে এটি true করে দেবেন
        />
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-blue-600 shadow-sm">
          ${item?.price || 0}
        </div>
      </div>

      {/* Item Info */}
      <div className="space-y-1 mb-4 px-1">
        <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest">
          {item?.category || "General"}
        </p>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
          {item?.name || "Untitled Product"}
        </h3>
      </div>

      {/* Book Now Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-slate-900 dark:bg-blue-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-slate-200 dark:shadow-none"
      >
        <ShoppingBag size={18} /> Book Now
      </button>

      {/* --- Booking Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            {isSuccess ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in duration-300">
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Booking Confirmed!
                </h2>
                <p className="text-slate-500 font-medium">
                  Check your dashboard to track status.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    Confirm Your Booking
                  </h2>
                  <p className="text-slate-500 text-sm mt-1 font-medium">
                    You are booking:{" "}
                    <span className="text-blue-600 font-bold">
                      {item?.name}
                    </span>
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Customer</span>
                    <span className="font-bold">{currentUser.name}</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-slate-200 dark:border-slate-700 pt-3">
                    <span className="text-slate-500 font-medium">
                      Total Amount
                    </span>
                    <span className="font-black text-lg text-blue-600">
                      ${item?.price || 0}
                    </span>
                  </div>
                </div>

                <button
                  disabled={isBooking}
                  onClick={handleConfirmBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black shadow-xl shadow-blue-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isBooking ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    "CONFIRM BOOKING"
                  )}
                </button>

                <p className="text-[10px] text-center text-slate-400 uppercase font-bold tracking-widest">
                  Secure checkout • Instant confirmation
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
