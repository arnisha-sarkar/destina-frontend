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
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <HelpCircle className="w-16 h-16 text-blue-100 mb-6" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Got questions? We've got answers. If you can't find what you are
            looking for, contact us.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleForm(index)}
                className="w-full p-6 text-left flex items-center justify-between font-semibold text-gray-900 text-lg"
              >
                {faq.q}
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
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
