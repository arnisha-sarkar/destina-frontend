"use client";

import React from "react";
import { Star, MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface TravelCardProps {
  data: {
    _id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    date: string;
    rating: number;
    location: string;
  };
}

const TravelCardItem = ({ data }: TravelCardProps) => {
  return (
    <div className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={
            data.image ||
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
          }
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px] font-bold text-gray-800">
            {data.rating}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-blue-500 mb-2">
          <MapPin className="w-3 h-3" />
          <span className="text-[10px] font-bold uppercase tracking-wider">
            {data.location}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {data.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
          {data.description}
        </p>

        {/* Price & Date */}
        <div className="mt-auto space-y-3">
          <div className="flex justify-between items-center py-3 border-t border-gray-50">
            <div className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">{data.date}</span>
            </div>
            <div className="flex items-center font-bold text-[#003B73]">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-base">{data.price}</span>
            </div>
          </div>

          <Link href={`/items/${data._id}`} className="block w-full">
            <Button className="w-full bg-gray-50 hover:bg-[#003B73] text-[#003B73] hover:text-white border-none rounded-xl font-bold py-6 transition-all group-hover:shadow-md">
              View Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelCardItem;
