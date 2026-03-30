"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";
import TravelCardItem from "@/components/TravelCardItem";
import CardSkeleton from "@/components/CardSkeleton";

const DestinationsPage = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        // API URL টি আপনার প্রোজেক্ট অনুযায়ী ঠিক আছে কি না চেক করে নিবেন
        const response = await axios.get("http://localhost:5000/api/v1/items");
        const data = response.data.data || response.data;
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  useEffect(() => {
    let result = items;
    if (searchQuery) {
      result = result.filter(
        (item: any) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    if (selectedCategory !== "All") {
      result = result.filter((item: any) => item.category === selectedCategory);
    }
    setFilteredItems(result);
  }, [searchQuery, selectedCategory, items]);

  const categories = ["All", "Adventure", "Relaxation", "Cultural", "Nature"];

  return (
    // মেইন ব্যাকগ্রাউন্ড লাইট মোডে অফ-ওয়াইট এবং ডার্কে ব্ল্যাক রাখা হয়েছে
    <div className="min-h-screen bg-slate-50 dark:bg-[#0D1117] transition-colors duration-300 pb-20">
      {/* --- Header Section --- */}
      <div className="bg-[#003B73] dark:bg-[#020617] pt-24 md:pt-32 pb-16 md:pb-24 px-6 text-center transition-colors">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            Find Your Next Adventure
          </h1>
          <p className="text-blue-100 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto opacity-90">
            Browse through our wide range of destinations and book your perfect
            trip today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-12">
        {/* --- Floating Search & Filter Bar --- */}
        <div className="bg-white dark:bg-[#161B22] p-3 md:p-5 rounded-[24px] md:rounded-[32px] shadow-2xl shadow-blue-900/5 dark:shadow-black/20 border border-gray-100 dark:border-white/5 flex flex-col gap-4">
          {/* Search Box */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full pl-12 pr-4 py-4 md:py-5 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-semibold border border-transparent dark:border-white/5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Categories Buttons */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none"
                    : "bg-gray-100 dark:bg-[#0D1117] text-gray-500 dark:text-gray-400 border-transparent dark:border-white/5 hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Results Section --- */}
        <div className="mt-10 md:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 px-2">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Destinations
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium">
                Showing {filteredItems.length} available packages
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm">
              <SlidersHorizontal size={16} />
              <span>Sort by: Recommended</span>
            </div>
          </div>

          {/* --- Grid Layout --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))
              : filteredItems.map((item: any) => (
                  <TravelCardItem key={item._id} data={item} />
                ))}
          </div>

          {/* --- Empty State --- */}
          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-[#161B22] rounded-[32px] border-2 border-dashed border-gray-100 dark:border-white/5 mt-10">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                No matching places
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 px-6">
                We couldn't find any destination matching "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
