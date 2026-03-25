// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import {
//   Star,
//   MapPin,
//   Calendar,
//   DollarSign,
//   Info,
//   ArrowLeft,
//   Tag,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import Link from "next/link";
// import axios from "axios";
// import Image from "next/image";

// const ItemDetailsPage = () => {
//   const { id } = useParams(); // URL থেকে ID নেওয়া হচ্ছে
//   const [item, setItem] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchItemDetails = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:5000/api/v1/items/${id}`,
//         );
//         if (response.data.success) {
//           setItem(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchItemDetails();
//   }, [id]);

//   if (loading) return <DetailsSkeleton />;
//   if (!item) return <div className="text-center py-20">Item not found!</div>;

//   return (
//     <div className="min-h-screen bg-white pb-20">
//       {/* --- Hero Image Section --- */}
//       <div className="relative h-[50vh] w-full">
//         <Image
//           src={item.image}
//           alt={item.title}
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30" />
//         <Link href="/" className="absolute top-10 left-10">
//           <Button
//             variant="outline"
//             className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full px-6"
//           >
//             <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
//           </Button>
//         </Link>
//       </div>

//       <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* --- Left Column: Description & Reviews --- */}
//         <div className="lg:col-span-2 space-y-12">
//           {/* Overview */}
//           <section>
//             <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
//               {item.title}
//             </h1>
//             <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
//               <MapPin size={18} /> <span>{item.location}</span>
//             </div>
//             <h3 className="text-xl font-bold mb-3">Overview</h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {item.description}
//             </p>
//           </section>

//           {/* Reviews Section */}
//           <section className="bg-gray-50 p-8 rounded-[32px]">
//             <h3 className="text-xl font-bold mb-6">Reviews & Ratings</h3>
//             <div className="flex items-center gap-4 mb-8">
//               <div className="text-5xl font-black text-[#003B73]">
//                 {item.rating}
//               </div>
//               <div>
//                 <div className="flex text-yellow-500 mb-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={20}
//                       fill={
//                         i < Math.floor(item.rating) ? "currentColor" : "none"
//                       }
//                     />
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-500 font-medium">
//                   Based on customer feedback
//                 </p>
//               </div>
//             </div>
//             <Button className="w-full md:w-auto bg-white border border-gray-200 text-black hover:bg-gray-100 rounded-2xl h-12 px-8">
//               Write a Review
//             </Button>
//           </section>
//         </div>

//         {/* --- Right Column: Key Info & Pricing --- */}
//         <div className="space-y-6">
//           <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
//             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
//               <Info size={20} className="text-blue-500" /> Key Information
//             </h3>

//             <div className="space-y-6">
//               <InfoItem
//                 icon={<DollarSign size={20} />}
//                 label="Price"
//                 value={`$${item.price}`}
//               />
//               <InfoItem
//                 icon={<Tag size={20} />}
//                 label="Category"
//                 value={item.category || "Adventure"}
//               />
//               <InfoItem
//                 icon={<Calendar size={20} />}
//                 label="Date"
//                 value={item.date}
//               />
//               <InfoItem
//                 icon={<MapPin size={20} />}
//                 label="Location"
//                 value={item.location}
//               />
//             </div>

//             <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
//               Book This Trip
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper Component for Info Row
// const InfoItem = ({ icon, label, value }: any) => (
//   <div className="flex items-center justify-between">
//     <div className="flex items-center gap-3 text-gray-500">
//       <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
//         {icon}
//       </div>
//       <span className="text-sm font-medium">{label}</span>
//     </div>
//     <span className="font-bold text-gray-900">{value}</span>
//   </div>
// );

// // Skeleton for loading state
// const DetailsSkeleton = () => (
//   <div className="container mx-auto px-6 py-20 space-y-10">
//     <Skeleton className="h-[40vh] w-full rounded-[40px]" />
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//       <div className="lg:col-span-2 space-y-6">
//         <Skeleton className="h-12 w-1/2" />
//         <Skeleton className="h-6 w-1/4" />
//         <Skeleton className="h-40 w-full rounded-2xl" />
//       </div>
//       <Skeleton className="h-[400px] w-full rounded-[40px]" />
//     </div>
//   </div>
// );

// export default ItemDetailsPage;

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Star,
  MapPin,
  Calendar,
  DollarSign,
  Info,
  ArrowLeft,
  Tag,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // নিশ্চিত করুন এটি ইনস্টল করা আছে: npx shadcn@latest add dialog
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/v1/items/${id}`,
        );
        if (response.data.success) {
          setItem(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItemDetails();
  }, [id]);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitting");

    // সিমুলেশন: ৩ সেকেন্ড পর সাকসেস দেখাবে (এখানে আপনার এপিআই কল হবে)
    setTimeout(() => {
      setBookingStatus("success");
    }, 2000);
  };

  if (loading) return <DetailsSkeleton />;
  if (!item)
    return (
      <div className="text-center py-20 text-xl font-bold">Item not found!</div>
    );

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- Hero Image Section --- */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <Link href="/" className="absolute top-10 left-10">
          <Button
            variant="outline"
            className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full px-6"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* --- Left Column --- */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
              {item.title}
            </h1>
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
              <MapPin size={18} /> <span>{item.location}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Overview</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {item.description}
            </p>
          </section>

          {/* Reviews */}
          <section className="bg-gray-50 p-8 rounded-[32px]">
            <h3 className="text-xl font-bold mb-6">Reviews & Ratings</h3>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-black text-[#003B73]">
                {item.rating}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={
                        i < Math.floor(item.rating) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  Based on customer feedback
                </p>
              </div>
            </div>
            <Button className="bg-white border border-gray-200 text-black hover:bg-gray-100 rounded-2xl h-12 px-8">
              Write a Review
            </Button>
          </section>
        </div>

        {/* --- Right Column (Sticky Info & Booking) --- */}
        <div className="space-y-6">
          <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info size={20} className="text-blue-500" /> Key Information
            </h3>

            <div className="space-y-6">
              <InfoItem
                icon={<DollarSign size={20} />}
                label="Price"
                value={`$${item.price}`}
              />
              <InfoItem
                icon={<Tag size={20} />}
                label="Category"
                value={item.category || "Adventure"}
              />
              <InfoItem
                icon={<Calendar size={20} />}
                label="Date"
                value={item.date}
              />
              <InfoItem
                icon={<MapPin size={20} />}
                label="Location"
                value={item.location}
              />
            </div>

            {/* --- Booking Modal Integration --- */}
            <Dialog
              open={isBooking}
              onOpenChange={(val) => {
                setIsBooking(val);
                if (!val) setBookingStatus("idle");
              }}
            >
              <DialogTrigger asChild>
                <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
                  Book This Trip
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8">
                {bookingStatus !== "success" ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[#003B73]">
                        Complete Your Booking
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4 mt-6">
                      <div className="grid gap-2">
                        <label className="text-xs font-bold uppercase text-gray-400">
                          Full Name
                        </label>
                        <input
                          required
                          className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="Arnisha Sarkar"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-xs font-bold uppercase text-gray-400">
                          Contact Number
                        </label>
                        <input
                          required
                          className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="+880 1XXX-XXXXXX"
                        />
                      </div>
                      <div className="bg-[#f0f7ff] p-5 rounded-2xl border border-blue-100 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-blue-600 font-bold">
                            Total Payable
                          </p>
                          <p className="text-xs text-blue-400">
                            Includes all taxes
                          </p>
                        </div>
                        <span className="text-blue-700 font-black text-2xl">
                          ${item.price}
                        </span>
                      </div>
                      <Button
                        disabled={bookingStatus === "submitting"}
                        type="submit"
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg"
                      >
                        {bookingStatus === "submitting" ? (
                          <Loader2 className="animate-spin mr-2" />
                        ) : (
                          "Confirm Reservation"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="flex justify-center">
                      <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Booking Confirmed!
                    </h2>
                    <p className="text-gray-500">
                      Thank you! We have received your booking request for{" "}
                      <strong>{item.title}</strong>. Our team will contact you
                      shortly.
                    </p>
                    <Button
                      onClick={() => setIsBooking(false)}
                      className="bg-gray-900 text-white rounded-xl px-10 h-12 mt-4"
                    >
                      Great!
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3 text-gray-500">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="font-bold text-gray-900">{value}</span>
  </div>
);

const DetailsSkeleton = () => (
  <div className="container mx-auto px-6 py-20 space-y-10">
    <Skeleton className="h-[50vh] w-full rounded-[40px]" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <Skeleton className="h-12 w-1/2" />
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
      <Skeleton className="h-[400px] w-full rounded-[40px]" />
    </div>
  </div>
);

export default ItemDetailsPage;
