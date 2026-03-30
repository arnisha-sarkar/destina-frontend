// // // // "use client";

// // // // import React, { useState, useEffect } from "react";
// // // // import { useParams } from "next/navigation";
// // // // import {
// // // //   Star,
// // // //   MapPin,
// // // //   Calendar,
// // // //   DollarSign,
// // // //   Info,
// // // //   ArrowLeft,
// // // //   Tag,
// // // // } from "lucide-react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Skeleton } from "@/components/ui/skeleton";
// // // // import Link from "next/link";
// // // // import axios from "axios";
// // // // import Image from "next/image";

// // // // const ItemDetailsPage = () => {
// // // //   const { id } = useParams(); // URL থেকে ID নেওয়া হচ্ছে
// // // //   const [item, setItem] = useState<any>(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchItemDetails = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const response = await axios.get(
// // // //           `http://localhost:5000/api/v1/items/${id}`,
// // // //         );
// // // //         if (response.data.success) {
// // // //           setItem(response.data.data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error fetching details:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     if (id) fetchItemDetails();
// // // //   }, [id]);

// // // //   if (loading) return <DetailsSkeleton />;
// // // //   if (!item) return <div className="text-center py-20">Item not found!</div>;

// // // //   return (
// // // //     <div className="min-h-screen bg-white pb-20">
// // // //       {/* --- Hero Image Section --- */}
// // // //       <div className="relative h-[50vh] w-full">
// // // //         <Image
// // // //           src={item.image}
// // // //           alt={item.title}
// // // //           fill
// // // //           className="object-cover"
// // // //         />
// // // //         <div className="absolute inset-0 bg-black/30" />
// // // //         <Link href="/" className="absolute top-10 left-10">
// // // //           <Button
// // // //             variant="outline"
// // // //             className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full px-6"
// // // //           >
// // // //             <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
// // // //           </Button>
// // // //         </Link>
// // // //       </div>

// // // //       <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
// // // //         {/* --- Left Column: Description & Reviews --- */}
// // // //         <div className="lg:col-span-2 space-y-12">
// // // //           {/* Overview */}
// // // //           <section>
// // // //             <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
// // // //               {item.title}
// // // //             </h1>
// // // //             <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
// // // //               <MapPin size={18} /> <span>{item.location}</span>
// // // //             </div>
// // // //             <h3 className="text-xl font-bold mb-3">Overview</h3>
// // // //             <p className="text-gray-600 leading-relaxed text-lg">
// // // //               {item.description}
// // // //             </p>
// // // //           </section>

// // // //           {/* Reviews Section */}
// // // //           <section className="bg-gray-50 p-8 rounded-[32px]">
// // // //             <h3 className="text-xl font-bold mb-6">Reviews & Ratings</h3>
// // // //             <div className="flex items-center gap-4 mb-8">
// // // //               <div className="text-5xl font-black text-[#003B73]">
// // // //                 {item.rating}
// // // //               </div>
// // // //               <div>
// // // //                 <div className="flex text-yellow-500 mb-1">
// // // //                   {Array.from({ length: 5 }).map((_, i) => (
// // // //                     <Star
// // // //                       key={i}
// // // //                       size={20}
// // // //                       fill={
// // // //                         i < Math.floor(item.rating) ? "currentColor" : "none"
// // // //                       }
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //                 <p className="text-sm text-gray-500 font-medium">
// // // //                   Based on customer feedback
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //             <Button className="w-full md:w-auto bg-white border border-gray-200 text-black hover:bg-gray-100 rounded-2xl h-12 px-8">
// // // //               Write a Review
// // // //             </Button>
// // // //           </section>
// // // //         </div>

// // // //         {/* --- Right Column: Key Info & Pricing --- */}
// // // //         <div className="space-y-6">
// // // //           <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
// // // //             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
// // // //               <Info size={20} className="text-blue-500" /> Key Information
// // // //             </h3>

// // // //             <div className="space-y-6">
// // // //               <InfoItem
// // // //                 icon={<DollarSign size={20} />}
// // // //                 label="Price"
// // // //                 value={`$${item.price}`}
// // // //               />
// // // //               <InfoItem
// // // //                 icon={<Tag size={20} />}
// // // //                 label="Category"
// // // //                 value={item.category || "Adventure"}
// // // //               />
// // // //               <InfoItem
// // // //                 icon={<Calendar size={20} />}
// // // //                 label="Date"
// // // //                 value={item.date}
// // // //               />
// // // //               <InfoItem
// // // //                 icon={<MapPin size={20} />}
// // // //                 label="Location"
// // // //                 value={item.location}
// // // //               />
// // // //             </div>

// // // //             <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
// // // //               Book This Trip
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Helper Component for Info Row
// // // // const InfoItem = ({ icon, label, value }: any) => (
// // // //   <div className="flex items-center justify-between">
// // // //     <div className="flex items-center gap-3 text-gray-500">
// // // //       <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
// // // //         {icon}
// // // //       </div>
// // // //       <span className="text-sm font-medium">{label}</span>
// // // //     </div>
// // // //     <span className="font-bold text-gray-900 dark:text-white">{value}</span>
// // // //   </div>
// // // // );

// // // // // Skeleton for loading state
// // // // const DetailsSkeleton = () => (
// // // //   <div className="container mx-auto px-6 py-20 space-y-10">
// // // //     <Skeleton className="h-[40vh] w-full rounded-[40px]" />
// // // //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// // // //       <div className="lg:col-span-2 space-y-6">
// // // //         <Skeleton className="h-12 w-1/2" />
// // // //         <Skeleton className="h-6 w-1/4" />
// // // //         <Skeleton className="h-40 w-full rounded-2xl" />
// // // //       </div>
// // // //       <Skeleton className="h-[400px] w-full rounded-[40px]" />
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default ItemDetailsPage;

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { useParams } from "next/navigation";
// // // import {
// // //   Star,
// // //   MapPin,
// // //   Calendar,
// // //   DollarSign,
// // //   Info,
// // //   ArrowLeft,
// // //   Tag,
// // //   CheckCircle2,
// // //   Loader2,
// // // } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Skeleton } from "@/components/ui/skeleton";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogHeader,
// // //   DialogTitle,
// // //   DialogTrigger,
// // // } from "@/components/ui/dialog"; // নিশ্চিত করুন এটি ইনস্টল করা আছে: npx shadcn@latest add dialog
// // // import Link from "next/link";
// // // import axios from "axios";
// // // import Image from "next/image";

// // // const ItemDetailsPage = () => {
// // //   const { id } = useParams();
// // //   const [item, setItem] = useState<any>(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isBooking, setIsBooking] = useState(false);
// // //   const [bookingStatus, setBookingStatus] = useState<
// // //     "idle" | "submitting" | "success"
// // //   >("idle");

// // //   useEffect(() => {
// // //     const fetchItemDetails = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await axios.get(
// // //           `http://localhost:5000/api/v1/items/${id}`,
// // //         );
// // //         if (response.data.success) {
// // //           setItem(response.data.data);
// // //         }
// // //       } catch (error) {
// // //         console.error("Error fetching details:", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     if (id) fetchItemDetails();
// // //   }, [id]);

// // //   const handleBooking = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setBookingStatus("submitting");

// // //     // সিমুলেশন: ৩ সেকেন্ড পর সাকসেস দেখাবে (এখানে আপনার এপিআই কল হবে)
// // //     setTimeout(() => {
// // //       setBookingStatus("success");
// // //     }, 2000);
// // //   };

// // //   if (loading) return <DetailsSkeleton />;
// // //   if (!item)
// // //     return (
// // //       <div className="text-center py-20 text-xl font-bold">Item not found!</div>
// // //     );

// // //   return (
// // //     <div className="min-h-screen bg-white pb-20">
// // //       {/* --- Hero Image Section --- */}
// // //       <div className="relative h-[50vh] w-full">
// // //         <Image
// // //           src={item.image}
// // //           alt={item.title}
// // //           fill
// // //           className="object-cover"
// // //         />
// // //         <div className="absolute inset-0 bg-black/30" />
// // //         <Link href="/" className="absolute top-10 left-10">
// // //           <Button
// // //             variant="outline"
// // //             className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full px-6"
// // //           >
// // //             <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
// // //           </Button>
// // //         </Link>
// // //       </div>

// // //       <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
// // //         {/* --- Left Column --- */}
// // //         <div className="lg:col-span-2 space-y-12">
// // //           <section>
// // //             <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
// // //               {item.title}
// // //             </h1>
// // //             <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
// // //               <MapPin size={18} /> <span>{item.location}</span>
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3">Overview</h3>
// // //             <p className="text-gray-600 leading-relaxed text-lg">
// // //               {item.description}
// // //             </p>
// // //           </section>

// // //           {/* Reviews */}
// // //           <section className="bg-gray-50 p-8 rounded-[32px]">
// // //             <h3 className="text-xl font-bold mb-6">Reviews & Ratings</h3>
// // //             <div className="flex items-center gap-4 mb-8">
// // //               <div className="text-5xl font-black text-[#003B73]">
// // //                 {item.rating}
// // //               </div>
// // //               <div>
// // //                 <div className="flex text-yellow-500 mb-1">
// // //                   {Array.from({ length: 5 }).map((_, i) => (
// // //                     <Star
// // //                       key={i}
// // //                       size={20}
// // //                       fill={
// // //                         i < Math.floor(item.rating) ? "currentColor" : "none"
// // //                       }
// // //                     />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-sm text-gray-500 font-medium">
// // //                   Based on customer feedback
// // //                 </p>
// // //               </div>
// // //             </div>
// // //             <Button className="bg-white border border-gray-200 text-black hover:bg-gray-100 rounded-2xl h-12 px-8">
// // //               Write a Review
// // //             </Button>
// // //           </section>
// // //         </div>

// // //         {/* --- Right Column (Sticky Info & Booking) --- */}
// // //         <div className="space-y-6">
// // //           <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
// // //             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
// // //               <Info size={20} className="text-blue-500" /> Key Information
// // //             </h3>

// // //             <div className="space-y-6">
// // //               <InfoItem
// // //                 icon={<DollarSign size={20} />}
// // //                 label="Price"
// // //                 value={`$${item.price}`}
// // //               />
// // //               <InfoItem
// // //                 icon={<Tag size={20} />}
// // //                 label="Category"
// // //                 value={item.category || "Adventure"}
// // //               />
// // //               <InfoItem
// // //                 icon={<Calendar size={20} />}
// // //                 label="Date"
// // //                 value={item.date}
// // //               />
// // //               <InfoItem
// // //                 icon={<MapPin size={20} />}
// // //                 label="Location"
// // //                 value={item.location}
// // //               />
// // //             </div>

// // //             {/* --- Booking Modal Integration --- */}
// // //             <Dialog
// // //               open={isBooking}
// // //               onOpenChange={(val) => {
// // //                 setIsBooking(val);
// // //                 if (!val) setBookingStatus("idle");
// // //               }}
// // //             >
// // //               <DialogTrigger asChild>
// // //                 <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
// // //                   Book This Trip
// // //                 </Button>
// // //               </DialogTrigger>
// // //               <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8">
// // //                 {bookingStatus !== "success" ? (
// // //                   <>
// // //                     <DialogHeader>
// // //                       <DialogTitle className="text-2xl font-bold text-[#003B73]">
// // //                         Complete Your Booking
// // //                       </DialogTitle>
// // //                     </DialogHeader>
// // //                     <form onSubmit={handleBooking} className="space-y-4 mt-6">
// // //                       <div className="grid gap-2">
// // //                         <label className="text-xs font-bold uppercase text-gray-400">
// // //                           Full Name
// // //                         </label>
// // //                         <input
// // //                           required
// // //                           className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                           placeholder="Arnisha Sarkar"
// // //                         />
// // //                       </div>
// // //                       <div className="grid gap-2">
// // //                         <label className="text-xs font-bold uppercase text-gray-400">
// // //                           Contact Number
// // //                         </label>
// // //                         <input
// // //                           required
// // //                           className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// // //                           placeholder="+880 1XXX-XXXXXX"
// // //                         />
// // //                       </div>
// // //                       <div className="bg-[#f0f7ff] p-5 rounded-2xl border border-blue-100 flex justify-between items-center">
// // //                         <div>
// // //                           <p className="text-sm text-blue-600 font-bold">
// // //                             Total Payable
// // //                           </p>
// // //                           <p className="text-xs text-blue-400">
// // //                             Includes all taxes
// // //                           </p>
// // //                         </div>
// // //                         <span className="text-blue-700 font-black text-2xl">
// // //                           ${item.price}
// // //                         </span>
// // //                       </div>
// // //                       <Button
// // //                         disabled={bookingStatus === "submitting"}
// // //                         type="submit"
// // //                         className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg"
// // //                       >
// // //                         {bookingStatus === "submitting" ? (
// // //                           <Loader2 className="animate-spin mr-2" />
// // //                         ) : (
// // //                           "Confirm Reservation"
// // //                         )}
// // //                       </Button>
// // //                     </form>
// // //                   </>
// // //                 ) : (
// // //                   <div className="text-center py-8 space-y-4">
// // //                     <div className="flex justify-center">
// // //                       <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
// // //                     </div>
// // //                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
// // //                       Booking Confirmed!
// // //                     </h2>
// // //                     <p className="text-gray-500">
// // //                       Thank you! We have received your booking request for{" "}
// // //                       <strong>{item.title}</strong>. Our team will contact you
// // //                       shortly.
// // //                     </p>
// // //                     <Button
// // //                       onClick={() => setIsBooking(false)}
// // //                       className="bg-gray-900 text-white rounded-xl px-10 h-12 mt-4"
// // //                     >
// // //                       Great!
// // //                     </Button>
// // //                   </div>
// // //                 )}
// // //               </DialogContent>
// // //             </Dialog>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const InfoItem = ({ icon, label, value }: any) => (
// // //   <div className="flex items-center justify-between">
// // //     <div className="flex items-center gap-3 text-gray-500">
// // //       <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
// // //         {icon}
// // //       </div>
// // //       <span className="text-sm font-medium">{label}</span>
// // //     </div>
// // //     <span className="font-bold text-gray-900 dark:text-white">{value}</span>
// // //   </div>
// // // );

// // // const DetailsSkeleton = () => (
// // //   <div className="container mx-auto px-6 py-20 space-y-10">
// // //     <Skeleton className="h-[50vh] w-full rounded-[40px]" />
// // //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// // //       <div className="lg:col-span-2 space-y-6">
// // //         <Skeleton className="h-12 w-1/2" />
// // //         <Skeleton className="h-6 w-1/4" />
// // //         <Skeleton className="h-40 w-full rounded-2xl" />
// // //       </div>
// // //       <Skeleton className="h-[400px] w-full rounded-[40px]" />
// // //     </div>
// // //   </div>
// // // );

// // // export default ItemDetailsPage;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { useParams } from "next/navigation";
// // import {
// //   Star,
// //   MapPin,
// //   Calendar,
// //   DollarSign,
// //   Info,
// //   ArrowLeft,
// //   Tag,
// //   CheckCircle2,
// //   Loader2,
// //   Send,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import Link from "next/link";
// // import axios from "axios";
// // import Image from "next/image";

// // const ItemDetailsPage = () => {
// //   const { id } = useParams();
// //   const [item, setItem] = useState<any>(null);
// //   const [loading, setLoading] = useState(true);

// //   // Review States
// //   const [rating, setRating] = useState(0);
// //   const [comment, setComment] = useState("");
// //   const [isSubmittingReview, setIsSubmittingReview] = useState(false);
// //   const [reviewSuccess, setReviewSuccess] = useState(false);

// //   // Booking States
// //   const [isBooking, setIsBooking] = useState(false);
// //   const [bookingStatus, setBookingStatus] = useState<
// //     "idle" | "submitting" | "success"
// //   >("idle");

// //   useEffect(() => {
// //     const fetchItemDetails = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await axios.get(
// //           `http://localhost:5000/api/v1/items/${id}`,
// //         );
// //         if (response.data.success) {
// //           setItem(response.data.data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching details:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchItemDetails();
// //   }, [id]);

// //   // Review Submit Logic
// //   const handleReviewSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (rating === 0) return alert("Please select a rating!");

// //     try {
// //       setIsSubmittingReview(true);
// //       const reviewData = {
// //         itemId: id,
// //         title: item.title, // প্যাকেজের নাম টাইটেল হিসেবে যাবে
// //         rating,
// //         comment,
// //         createdAt: new Date(),
// //       };

// //       await axios.post("http://localhost:5000/api/v1/reviews", reviewData);

// //       setReviewSuccess(true);
// //       setComment("");
// //       setRating(0);

// //       // ৫ সেকেন্ড পর সাকসেস মেসেজ হাইড হবে
// //       setTimeout(() => setReviewSuccess(false), 5000);
// //     } catch (error) {
// //       console.error("Review submission failed", error);
// //       alert("Failed to submit review. Please try again.");
// //     } finally {
// //       setIsSubmittingReview(false);
// //     }
// //   };

// //   const handleBooking = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setBookingStatus("submitting");
// //     setTimeout(() => {
// //       setBookingStatus("success");
// //     }, 2000);
// //   };

// //   if (loading) return <DetailsSkeleton />;
// //   if (!item)
// //     return (
// //       <div className="text-center py-20 text-xl font-bold">Item not found!</div>
// //     );

// //   return (
// //     <div className="min-h-screen bg-white pb-20">
// //       {/* --- Hero Image Section --- */}
// //       <div className="relative h-[50vh] w-full">
// //         <Image
// //           loader={({ src }) => src}
// //           src={item.image}
// //           alt={item.title}
// //           fill
// //           unoptimized
// //           className="object-cover"
// //         />
// //         <div className="absolute inset-0 bg-black/30" />
// //         <Link href="/" className="absolute top-10 left-10">
// //           <Button
// //             variant="outline"
// //             className="bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-black rounded-full px-6"
// //           >
// //             <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
// //           </Button>
// //         </Link>
// //       </div>

// //       <div className="container mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
// //         {/* --- Left Column --- */}
// //         <div className="lg:col-span-2 space-y-12">
// //           <section>
// //             <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
// //               {item.title}
// //             </h1>
// //             <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
// //               <MapPin size={18} /> <span>{item.location}</span>
// //             </div>
// //             <h3 className="text-xl font-bold mb-3">Overview</h3>
// //             <p className="text-gray-600 leading-relaxed text-lg">
// //               {item.description}
// //             </p>
// //           </section>

// //           {/* --- Updated Reviews Section with Form --- */}
// //           <section className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100">
// //             <h3 className="text-2xl font-black text-[#003B73] mb-8 uppercase tracking-tighter italic">
// //               Reviews & Ratings
// //             </h3>

// //             <div className="flex items-center gap-6 mb-12 bg-white p-6 rounded-3xl border border-gray-100 w-fit">
// //               <div className="text-6xl font-black text-[#003B73]">
// //                 {item.rating}
// //               </div>
// //               <div>
// //                 <div className="flex text-yellow-500 mb-1">
// //                   {Array.from({ length: 5 }).map((_, i) => (
// //                     <Star
// //                       key={i}
// //                       size={24}
// //                       fill={
// //                         i < Math.floor(item.rating) ? "currentColor" : "none"
// //                       }
// //                     />
// //                   ))}
// //                 </div>
// //                 <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
// //                   Global Feedback
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Write a Review Form */}
// //             <div className="mt-10 pt-10 border-t border-gray-200">
// //               <h4 className="text-lg font-black text-gray-800 mb-6 uppercase">
// //                 Share Your Experience
// //               </h4>

// //               {reviewSuccess ? (
// //                 <div className="bg-green-100 text-green-700 p-6 rounded-2xl flex items-center gap-3 font-bold animate-in fade-in zoom-in">
// //                   <CheckCircle2 /> Your review has been submitted successfully!
// //                 </div>
// //               ) : (
// //                 <form onSubmit={handleReviewSubmit} className="space-y-6">
// //                   <div className="flex items-center gap-2">
// //                     {[1, 2, 3, 4, 5].map((star) => (
// //                       <button
// //                         key={star}
// //                         type="button"
// //                         onClick={() => setRating(star)}
// //                         className={`transition-all ${rating >= star ? "text-yellow-500 scale-110" : "text-gray-300 hover:text-yellow-400"}`}
// //                       >
// //                         <Star
// //                           size={32}
// //                           fill={rating >= star ? "currentColor" : "none"}
// //                         />
// //                       </button>
// //                     ))}
// //                   </div>

// //                   <textarea
// //                     required
// //                     value={comment}
// //                     onChange={(e) => setComment(e.target.value)}
// //                     placeholder="Tell us what you liked or disliked about this trip..."
// //                     className="w-full h-32 bg-white border border-gray-200 rounded-[24px] p-6 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
// //                   />

// //                   <Button
// //                     disabled={isSubmittingReview}
// //                     className="bg-[#003B73] hover:bg-blue-800 text-white rounded-2xl px-10 h-14 font-black flex items-center gap-2"
// //                   >
// //                     {isSubmittingReview ? (
// //                       <Loader2 className="animate-spin" />
// //                     ) : (
// //                       <>
// //                         Submit Review <Send size={18} />
// //                       </>
// //                     )}
// //                   </Button>
// //                 </form>
// //               )}
// //             </div>
// //           </section>
// //         </div>

// //         {/* --- Right Column --- */}
// //         <div className="space-y-6">
// //           <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
// //             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
// //               <Info size={20} className="text-blue-500" /> Key Information
// //             </h3>

// //             <div className="space-y-6">
// //               <InfoItem
// //                 icon={<DollarSign size={20} />}
// //                 label="Price"
// //                 value={`$${item.price}`}
// //               />
// //               <InfoItem
// //                 icon={<Tag size={20} />}
// //                 label="Category"
// //                 value={item.category || "Adventure"}
// //               />
// //               <InfoItem
// //                 icon={<Calendar size={20} />}
// //                 label="Date"
// //                 value={item.date}
// //               />
// //               <InfoItem
// //                 icon={<MapPin size={20} />}
// //                 label="Location"
// //                 value={item.location}
// //               />
// //             </div>

// //             <Dialog
// //               open={isBooking}
// //               onOpenChange={(val) => {
// //                 setIsBooking(val);
// //                 if (!val) setBookingStatus("idle");
// //               }}
// //             >
// //               <DialogTrigger asChild>
// //                 <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
// //                   Book This Trip
// //                 </Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8">
// //                 {bookingStatus !== "success" ? (
// //                   <>
// //                     <DialogHeader>
// //                       <DialogTitle className="text-2xl font-bold text-[#003B73]">
// //                         Complete Your Booking
// //                       </DialogTitle>
// //                     </DialogHeader>
// //                     <form onSubmit={handleBooking} className="space-y-4 mt-6">
// //                       <div className="grid gap-2">
// //                         <label className="text-xs font-bold uppercase text-gray-400">
// //                           Full Name
// //                         </label>
// //                         <input
// //                           required
// //                           className="w-full p-4 bg-gray-50 rounded-xl outline-none"
// //                           placeholder="Your Name"
// //                         />
// //                       </div>
// //                       <div className="grid gap-2">
// //                         <label className="text-xs font-bold uppercase text-gray-400">
// //                           Contact Number
// //                         </label>
// //                         <input
// //                           required
// //                           className="w-full p-4 bg-gray-50 rounded-xl outline-none"
// //                           placeholder="+880"
// //                         />
// //                       </div>
// //                       <Button
// //                         disabled={bookingStatus === "submitting"}
// //                         type="submit"
// //                         className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold"
// //                       >
// //                         {bookingStatus === "submitting" ? (
// //                           <Loader2 className="animate-spin" />
// //                         ) : (
// //                           "Confirm Reservation"
// //                         )}
// //                       </Button>
// //                     </form>
// //                   </>
// //                 ) : (
// //                   <div className="text-center py-8 space-y-4">
// //                     <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
// //                     <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
// //                     <Button
// //                       onClick={() => setIsBooking(false)}
// //                       className="bg-gray-900 text-white rounded-xl px-10 h-12"
// //                     >
// //                       Great!
// //                     </Button>
// //                   </div>
// //                 )}
// //               </DialogContent>
// //             </Dialog>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ... (InfoItem এবং DetailsSkeleton আগের মতোই থাকবে)
// // const InfoItem = ({ icon, label, value }: any) => (
// //   <div className="flex items-center justify-between">
// //     <div className="flex items-center gap-3 text-gray-500">
// //       <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
// //         {icon}
// //       </div>
// //       <span className="text-sm font-medium">{label}</span>
// //     </div>
// //     <span className="font-bold text-gray-900 dark:text-white">{value}</span>
// //   </div>
// // );

// // const DetailsSkeleton = () => (
// //   <div className="container mx-auto px-6 py-20 space-y-10">
// //     <Skeleton className="h-[50vh] w-full rounded-[40px]" />
// //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// //       <div className="lg:col-span-2 space-y-6">
// //         <Skeleton className="h-12 w-1/2" />
// //         <Skeleton className="h-6 w-1/4" />
// //         <Skeleton className="h-40 w-full rounded-2xl" />
// //       </div>
// //       <Skeleton className="h-[400px] w-full rounded-[40px]" />
// //     </div>
// //   </div>
// // );

// // export default ItemDetailsPage;

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
//   CheckCircle2,
//   Loader2,
//   Send,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import Link from "next/link";
// import axios from "axios";
// import Image from "next/image";

// const ItemDetailsPage = () => {
//   const { id } = useParams(); // এটিই আমাদের itemId
//   console.log(id);
//   const [item, setItem] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   // Review States (As per your Schema)
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [isSubmittingReview, setIsSubmittingReview] = useState(false);
//   const [reviewSuccess, setReviewSuccess] = useState(false);

//   // Booking States
//   const [isBooking, setIsBooking] = useState(false);
//   const [bookingStatus, setBookingStatus] = useState<
//     "idle" | "submitting" | "success"
//   >("idle");

//   // ১. আইটেম ডিটেইলস ডাটা লোড করা
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

//   // ২. আপনার Schema অনুযায়ী রিভিউ সাবমিট ফাংশন
//   const handleReviewSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // আপনার আসল ইউজার আইডি (লগইন করা আইডি)
//     const myActualUserId = "69c4e6d4285657b1da8c024a";

//     // ইউআরএল থেকে বা স্টেট থেকে পাওয়া আইটেম আইডি
//     const currentItemId = "69c4ecd1285657b1da8c026e";

//     const reviewData = {
//       rating: Number(rating),
//       comment: comment,
//       userId: myActualUserId, // এখানে অবশ্যই আপনার ইউজার আইডি যাবে
//       itemId: currentItemId, // এখানে আইটেমের আইডি যাবে
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/v1/reviews",
//         reviewData,
//       );
//       console.log("Review Saved Successfully!");
//     } catch (error) {
//       console.error("Error saving review");
//     }
//   };

//   // ৩. বুকিং হ্যান্ডলার
//   const handleBooking = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setBookingStatus("submitting");
//     setTimeout(() => {
//       setBookingStatus("success");
//     }, 2000);
//   };

//   if (loading) return <DetailsSkeleton />;
//   if (!item)
//     return (
//       <div className="text-center py-20 text-xl font-bold">Item not found!</div>
//     );

//   return (
//     <div className="min-h-screen bg-white pb-20">
//       {/* --- Hero Section --- */}
//       <div className="relative h-[50vh] w-full">
//         <Image
//           loader={({ src }) => src}
//           src={item.image}
//           alt={item.title}
//           fill
//           unoptimized
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
//         {/* --- Left Column --- */}
//         <div className="lg:col-span-2 space-y-12">
//           <section>
//             <h1 className="text-4xl font-extrabold text-[#003B73] mb-4">
//               {item.title}
//             </h1>
//             <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
//               <MapPin size={18} /> <span>{item.location}</span>
//             </div>
//             <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">
//               Overview
//             </h3>
//             <p className="text-gray-600 leading-relaxed text-lg">
//               {item.description}
//             </p>
//           </section>

//           {/* --- Review Section (Schema Based) --- */}
//           <section className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
//             <h3 className="text-2xl font-black text-[#003B73] mb-8 uppercase italic tracking-tighter">
//               Reviews & Ratings
//             </h3>

//             <div className="flex items-center gap-6 mb-12 bg-white p-6 rounded-3xl border border-gray-100 w-fit">
//               <div className="text-6xl font-black text-[#003B73]">
//                 {item.rating || "0"}
//               </div>
//               <div>
//                 <div className="flex text-yellow-500 mb-1">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star
//                       key={i}
//                       size={24}
//                       fill={
//                         i < Math.floor(item.rating || 0)
//                           ? "currentColor"
//                           : "none"
//                       }
//                     />
//                   ))}
//                 </div>
//                 <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
//                   Average Rating
//                 </p>
//               </div>
//             </div>

//             <div className="mt-10 pt-10 border-t border-gray-200">
//               <h4 className="text-lg font-black text-gray-800 mb-6 uppercase">
//                 Share Your Experience
//               </h4>

//               {reviewSuccess ? (
//                 <div className="bg-green-100 text-green-700 p-6 rounded-2xl flex items-center gap-3 font-bold animate-pulse">
//                   <CheckCircle2 /> Review submitted successfully!
//                 </div>
//               ) : (
//                 <form onSubmit={handleReviewSubmit} className="space-y-6">
//                   {/* Rating Selector */}
//                   <div className="flex items-center gap-2">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button
//                         key={star}
//                         type="button"
//                         onClick={() => setRating(star)}
//                         className={`transition-all ${rating >= star ? "text-yellow-500 scale-110" : "text-gray-300 hover:text-yellow-400"}`}
//                       >
//                         <Star
//                           size={36}
//                           fill={rating >= star ? "currentColor" : "none"}
//                         />
//                       </button>
//                     ))}
//                     <span className="ml-4 font-black text-gray-400">
//                       {rating}/5
//                     </span>
//                   </div>

//                   {/* Comment Area */}
//                   <textarea
//                     required
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     placeholder="Describe your tour experience (comment)..."
//                     className="w-full h-32 bg-white border border-gray-200 rounded-[24px] p-6 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-inner"
//                   />

//                   <Button
//                     disabled={isSubmittingReview}
//                     className="bg-[#003B73] hover:bg-blue-800 text-white rounded-2xl px-10 h-14 font-black flex items-center gap-2 shadow-lg active:scale-95 transition-all"
//                   >
//                     {isSubmittingReview ? (
//                       <Loader2 className="animate-spin" />
//                     ) : (
//                       <>
//                         Submit Review <Send size={18} />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </div>
//           </section>
//         </div>

//         {/* --- Right Column (Booking Info) --- */}
//         <div className="space-y-6">
//           <div className="sticky top-10 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px]">
//             <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#003B73]">
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

//             <Dialog
//               open={isBooking}
//               onOpenChange={(val) => {
//                 setIsBooking(val);
//                 if (!val) setBookingStatus("idle");
//               }}
//             >
//               <DialogTrigger asChild>
//                 <Button className="w-full mt-10 h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95">
//                   Book This Trip
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8">
//                 {bookingStatus !== "success" ? (
//                   <>
//                     <DialogHeader>
//                       <DialogTitle className="text-2xl font-bold text-[#003B73]">
//                         Confirm Booking
//                       </DialogTitle>
//                     </DialogHeader>
//                     <form onSubmit={handleBooking} className="space-y-4 mt-6">
//                       <input
//                         required
//                         className="w-full p-4 bg-gray-50 rounded-xl outline-none border border-gray-100"
//                         placeholder="Full Name"
//                       />
//                       <input
//                         required
//                         className="w-full p-4 bg-gray-50 rounded-xl outline-none border border-gray-100"
//                         placeholder="Phone Number"
//                       />
//                       <Button
//                         disabled={bookingStatus === "submitting"}
//                         type="submit"
//                         className="w-full h-14 bg-blue-600 text-white rounded-xl font-bold"
//                       >
//                         {bookingStatus === "submitting" ? (
//                           <Loader2 className="animate-spin" />
//                         ) : (
//                           "Book Now"
//                         )}
//                       </Button>
//                     </form>
//                   </>
//                 ) : (
//                   <div className="text-center py-8 space-y-4">
//                     <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
//                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//                       Successfully Booked!
//                     </h2>
//                     <Button
//                       onClick={() => setIsBooking(false)}
//                       className="bg-gray-900 text-white rounded-xl px-10 h-12"
//                     >
//                       Close
//                     </Button>
//                   </div>
//                 )}
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Helper Components ---
// const InfoItem = ({ icon, label, value }: any) => (
//   <div className="flex items-center justify-between">
//     <div className="flex items-center gap-3 text-gray-500">
//       <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
//         {icon}
//       </div>
//       <span className="text-sm font-medium">{label}</span>
//     </div>
//     <span className="font-bold text-gray-900 dark:text-white">{value}</span>
//   </div>
// );

// const DetailsSkeleton = () => (
//   <div className="container mx-auto px-6 py-20 space-y-10">
//     <Skeleton className="h-[50vh] w-full rounded-[40px]" />
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
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // --- Review States ---
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  // --- Booking States ---
  const [isBooking, setIsBooking] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  // আপনার আসল ইউজার আইডি (Hardcoded as requested)
  const MY_USER_ID = "69c4e6d4285657b1da8c024a";

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

  // --- Review Submit Logic ---
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating!");

    try {
      setIsSubmittingReview(true);

      const reviewData = {
        itemId: id, // প্যাকেজের আইডি (URL থেকে আসছে)
        userId: MY_USER_ID, // আপনার সঠিক ইউজার আইডি
        rating: Number(rating),
        comment: comment,
      };

      const response = await axios.post(
        "http://localhost:5000/api/v1/reviews",
        reviewData,
      );

      if (response.data.success) {
        setReviewSuccess(true);
        setComment("");
        setRating(0);

        // ৫ সেকেন্ড পর সাকসেস মেসেজটি অটো চলে যাবে এবং আবার ফর্ম দেখাবে
        setTimeout(() => setReviewSuccess(false), 5000);
      }
    } catch (error: any) {
      console.error(
        "Review submission failed:",
        error.response?.data || error.message,
      );
      alert(
        error.response?.data?.message || "Failed to submit review. Try again!",
      );
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus("submitting");
    // সিমুলেশন: ২ সেকেন্ড পর সাকসেস দেখাবে
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
          unoptimized
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
            <h1 className="text-4xl font-extrabold text-[#003B73] mb-4 italic uppercase">
              {item.title}
            </h1>
            <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
              <MapPin size={18} /> <span>{item.location}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">
              Overview
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {item.description}
            </p>
          </section>

          {/* --- Reviews & Ratings Section --- */}
          <section className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-black text-[#003B73] mb-8 uppercase tracking-tighter italic">
              Reviews & Ratings
            </h3>

            <div className="flex items-center gap-6 mb-12 bg-white p-6 rounded-3xl border border-gray-100 w-fit">
              <div className="text-6xl font-black text-[#003B73]">
                {item.rating}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={
                        i < Math.floor(item.rating) ? "currentColor" : "none"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                  Global Feedback
                </p>
              </div>
            </div>

            {/* --- Write a Review Form --- */}
            <div className="mt-10 pt-10 border-t border-gray-200">
              <h4 className="text-lg font-black text-gray-800 mb-6 uppercase">
                Share Your Experience
              </h4>

              {reviewSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-[32px] flex flex-col items-center gap-4 text-center animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">
                      Submission Successful!
                    </h5>
                    <p className="text-sm opacity-80">
                      Your review has been added to our records.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`transition-all duration-200 ${
                          rating >= star
                            ? "text-yellow-500 scale-110"
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                      >
                        <Star
                          size={36}
                          fill={rating >= star ? "currentColor" : "none"}
                        />
                      </button>
                    ))}
                  </div>

                  <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked or disliked about this trip..."
                    className="w-full h-40 bg-white border border-gray-200 rounded-[24px] p-6 text-base focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-inner"
                  />

                  <Button
                    disabled={isSubmittingReview}
                    className="bg-[#003B73] hover:bg-blue-800 text-white rounded-2xl px-12 h-14 font-black flex items-center gap-3 shadow-lg shadow-blue-900/20 active:scale-95 transition-all"
                  >
                    {isSubmittingReview ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        Submit Review <Send size={18} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </section>
        </div>

        {/* --- Right Column: Booking & Info --- */}
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

            {/* --- Booking Modal --- */}
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
              <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8 border-none shadow-2xl">
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
                          className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-xs font-bold uppercase text-gray-400">
                          Contact Number
                        </label>
                        <input
                          required
                          className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+880"
                        />
                      </div>
                      <Button
                        disabled={bookingStatus === "submitting"}
                        type="submit"
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold"
                      >
                        {bookingStatus === "submitting" ? (
                          <Loader2 className="animate-spin" />
                        ) : (
                          "Confirm Reservation"
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Booking Confirmed!
                    </h2>
                    <Button
                      onClick={() => setIsBooking(false)}
                      className="bg-gray-900 text-white rounded-xl px-10 h-12"
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

// --- Helper Components ---
const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3 text-gray-500">
      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="font-bold text-gray-900 dark:text-white">{value}</span>
  </div>
);

const DetailsSkeleton = () => (
  <div className="container mx-auto px-6 py-20 space-y-10">
    <Skeleton className="h-[50vh] w-full rounded-[40px]" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <Skeleton className="h-12 w-1/2" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
      <Skeleton className="h-[400px] w-full rounded-[40px]" />
    </div>
  </div>
);

export default ItemDetailsPage;
