import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const CTA = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-950 p-16 rounded-[40px] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          {/* Background pattern idea */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>

          <div className="relative z-10 flex-grow max-w-2xl text-center lg:text-left">
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Ready to Start Your <br />
              <span className="text-blue-400">Next Adventure?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Sign up now to get exclusive discounts, access our AI travel
              planner, and manage your bookings effortlessly.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2 group"
            >
              Get Started{" "}
              <MoveRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="text-white font-semibold hover:text-blue-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
