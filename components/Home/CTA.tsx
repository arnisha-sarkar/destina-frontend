"use client";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const CTA = () => {
  return (
    // মেইন সেকশন ব্যাকগ্রাউন্ড
    <div className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* কার্ডের কালার লাইট মোডে Deep Blue (bg-blue-900) এবং ডার্কে (bg-gray-950) রাখা হয়েছে */}
        <div className="relative overflow-hidden bg-blue-900 dark:bg-black p-12 md:p-16 rounded-[40px] shadow-2xl transition-all duration-300">
          {/* Background pattern - SVG fill color ডাইনামিক করা হয়েছে */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="dots"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="1.5"
                    fill="currentColor"
                    className="text-blue-400 dark:text-gray-700"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex-grow max-w-2xl text-center lg:text-left">
              {/* মেইন টাইটেল */}
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
                Ready to Start Your <br />
                <span className="text-blue-400 dark:text-blue-500">
                  Next Adventure?
                </span>
              </h2>

              {/* ডেসক্রিপশন টেক্সট */}
              <p className="text-lg md:text-xl text-blue-100 dark:text-gray-400 font-medium">
                Sign up now to get exclusive discounts, access our AI travel
                planner, and manage your bookings effortlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Primary Button */}
              <Link
                href="/register"
                className="bg-white text-blue-900 dark:bg-blue-600 dark:text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2 group"
              >
                Get Started
                <MoveRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Secondary Link */}
              <Link
                href="/contact"
                className="text-white font-bold text-lg hover:text-blue-200 dark:hover:text-blue-400 transition-colors underline-offset-8 hover:underline"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* ডার্ক মোডে গ্লো ইফেক্ট যোগ করা হয়েছে যা প্রিমিয়াম লুক দিবে */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
