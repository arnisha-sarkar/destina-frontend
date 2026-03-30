"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PackagesPage = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/v1/items");
        const items = response.data.data || response.data;
        setPackages(items);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  return (
    // মেইন ব্যাকগ্রাউন্ড পরিবর্তন
    <div className="min-h-screen bg-slate-50 dark:bg-[#0D1117] transition-colors duration-300 pb-20 font-sans">
      {/* হেডার সেকশন */}
      <div className="bg-[#003B73] dark:bg-[#020617] pt-28 pb-16 px-6 text-center transition-colors">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          Our Special Packages
        </h1>
        <p className="text-blue-100/70 dark:text-gray-400 max-w-xl mx-auto italic">
          Handpicked travel items directly from our database.
        </p>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          ) : packages.length > 0 ? (
            packages.map((pkg: any) => <PackageCard key={pkg._id} pkg={pkg} />)
          ) : (
            <div className="col-span-full text-center py-20 text-gray-400 dark:text-gray-500 font-bold">
              No items found in API.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- ২. Package Card Component ---
const PackageCard = ({ pkg }: { pkg: any }) => (
  <div className="bg-white dark:bg-[#161B22] rounded-[40px] border border-gray-100 dark:border-white/5 overflow-hidden group hover:shadow-2xl dark:hover:shadow-blue-900/10 transition-all duration-500 h-full flex flex-col shadow-sm">
    <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Image
        src={pkg.image}
        alt={pkg.title}
        fill
        unoptimized={true}
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* ক্যাটাগরি ব্যাজ */}
      <div className="absolute top-5 left-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-blue-600 dark:text-blue-400 shadow-sm uppercase tracking-widest z-10">
        {pkg.category || "Tour"}
      </div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-1.5 text-yellow-500 mb-3">
        <Star size={14} fill="currentColor" />
        <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">
          {pkg.rating || "5.0"} (Review)
        </span>
      </div>

      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
        {pkg.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
        {pkg.description}
      </p>

      <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs mb-6 font-bold uppercase tracking-tighter">
        <MapPin size={14} className="text-blue-500 dark:text-blue-400" />{" "}
        {pkg.location || "Bangladesh"}
      </div>

      {/* কার্ড ফুটার (প্রাইস এবং বাটন এরিয়া) */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-50 dark:border-white/5 mt-auto">
        <div>
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            Price
          </p>
          <p className="text-2xl font-black text-[#003B73] dark:text-blue-400">
            ৳{pkg.price}
          </p>
        </div>
        <Link href={`/items/${pkg._id}`}>
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-2xl px-6 h-12 font-bold flex items-center gap-2 transition-all">
            Details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

// --- ৩. Skeleton Card Component ---
const SkeletonCard = () => (
  <div className="bg-white dark:bg-[#161B22] rounded-[40px] border border-gray-100 dark:border-white/5 overflow-hidden animate-pulse shadow-sm">
    <div className="h-64 bg-gray-200 dark:bg-gray-800" />
    <div className="p-8 space-y-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
      <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded w-full" />
    </div>
  </div>
);

export default PackagesPage;
