"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I book a tour package?",
    a: "You can book directly from our 'Packages' page by selecting a tour and clicking 'Book Now'. Follow the instructions to complete payment.",
  },
  {
    q: "What is the AI Planner?",
    a: "The AI Planner uses artificial intelligence to create personalized travel itineraries based on your preferences and destination.",
  },
  {
    q: "Can I cancel my booking?",
    a: "Yes, you can cancel your booking from 'My Bookings' section. Cancellation policies vary per package.",
  },
  {
    q: "Do you offer international tours?",
    a: "Yes, we have exclusive international packages for popular destinations in Southeast Asia and Europe.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleForm = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // মেইন ব্যাকগ্রাউন্ড পরিবর্তন করা হয়েছে যাতে লাইট মোডে টেক্সট ফুটে ওঠে
    <div className="py-24 bg-white dark:bg-[#0D1117] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          {/* আইকন কালার একটু ডিপ করা হয়েছে লাইট মোডের জন্য */}
          <HelpCircle className="w-16 h-16 text-blue-500/20 dark:text-blue-400/20 mb-6" />

          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          {/* এই প্যারাগ্রাফটি লাইট মোডে ঝাপসা লাগছিল, এখন ঠিক করা হয়েছে */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
            Got questions? We've got answers. If you can't find what you are
            looking for, contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              // কার্ডের ব্যাকগ্রাউন্ড এবং বর্ডার লাইট মোডে ক্লিয়ার করা হয়েছে
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30"
                  : "bg-gray-50 dark:bg-[#161B22] border-gray-100 dark:border-white/5"
              }`}
            >
              <button
                onClick={() => toggleForm(index)}
                // প্রশ্নের টেক্সট কালার লাইট মোডে text-gray-900 এবং ডার্কে white রাখা হয়েছে
                className="w-full p-6 text-left flex items-center justify-between font-bold text-gray-900 dark:text-gray-100 text-lg group"
              >
                <span
                  className={
                    openIndex === index
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }
                >
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-400 group-hover:text-gray-600"
                  />
                )}
              </button>

              {/* উত্তর বা আনসার এরিয়া */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
