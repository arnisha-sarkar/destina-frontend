"use client";

import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="bg-gray-50 rounded-[24px] p-0 overflow-hidden border border-gray-100 h-full">
      {/* Image Shimmer */}
      <Skeleton className="h-56 w-full rounded-none" />

      <div className="p-5 space-y-4">
        {/* Location & Rating Shimmer */}
        <div className="flex justify-between">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-8" />
        </div>

        {/* Title & Description Shimmer */}
        <Skeleton className="h-6 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>

        {/* Border line */}
        <div className="pt-4 border-t flex justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>

        {/* Button Shimmer */}
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default CardSkeleton;
