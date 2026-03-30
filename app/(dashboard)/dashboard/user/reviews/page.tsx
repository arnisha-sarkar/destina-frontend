// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import {
//   Star,
//   Edit3,
//   Trash2,
//   Calendar,
//   Package,
//   Loader2,
//   RefreshCw,
//   MessageSquare,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const MyReviewsPage = () => {
//   const [reviews, setReviews] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   // আপনার আসল ইউজার আইডি
//   const userId = "69c4e6d4285657b1da8c024a";

//   // useCallback ব্যবহার করা হয়েছে যাতে ফাংশনটি বারবার তৈরি না হয় (Loop বন্ধ করতে)
//   const fetchMyReviews = useCallback(async () => {
//     try {
//       setLoading(true);

//       // এপিআই কল (ইউআরএল থেকে GET শব্দটি সরিয়ে ফেলা হয়েছে)
//       const response = await axios.get(
//         `http://localhost:5000/api/v1/reviews/my-reviews/${userId}`,
//       );

//       console.log("Full API Response:", response.data);

//       let fetchedData = [];
//       if (response.data?.success && Array.isArray(response.data?.data)) {
//         fetchedData = response.data.data;
//       } else if (Array.isArray(response.data)) {
//         fetchedData = response.data;
//       }

//       setReviews(fetchedData);
//     } catch (error) {
//       console.error("API Error:", error);
//       setReviews([]);
//     } finally {
//       // নির্দিষ্ট সময় পর লোডিং বন্ধ হবে
//       setLoading(false);
//     }
//   }, [userId]);

//   useEffect(() => {
//     fetchMyReviews();
//   }, [fetchMyReviews]); // শুধুমাত্র একবারই কল হবে

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure?")) return;
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/reviews/${id}`);
//       setReviews((prev) => prev.filter((r) => r._id !== id));
//     } catch (error) {
//       alert("Delete failed.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
//         <div className="flex flex-col items-center gap-4">
//           <Loader2 className="animate-spin text-blue-600" size={40} />
//           <p className="text-blue-600 font-bold animate-pulse uppercase tracking-widest text-xs">
//             Fetching Data...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
//       <div className="container mx-auto max-w-4xl">
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="text-3xl font-black text-[#003B73] uppercase italic">
//               My Reviews ({reviews.length})
//             </h1>
//             <div className="h-1 w-12 bg-blue-600 mt-2" />
//           </div>
//           <Button
//             onClick={fetchMyReviews}
//             variant="outline"
//             className="rounded-xl font-bold border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
//           >
//             <RefreshCw size={16} className="mr-2" /> Refresh
//           </Button>
//         </div>

//         {reviews.length > 0 ? (
//           <div className="grid gap-6">
//             {reviews.map((review) => (
//               <div
//                 key={review._id}
//                 className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
//                       <Package size={24} />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-gray-900 dark:text-white text-lg">
//                         {review.itemId?.title ||
//                           `Package ID: ${review.itemId?._id || "Tour Review"}`}
//                       </h3>
//                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
//                         {review.createdAt
//                           ? new Date(review.createdAt).toLocaleDateString()
//                           : "Recent"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-1.5 bg-yellow-50 px-4 py-1.5 rounded-xl text-yellow-600 border border-yellow-100">
//                     <Star size={16} fill="currentColor" />
//                     <span className="font-black text-lg">
//                       {review.rating}.0
//                     </span>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50/50 p-5 rounded-2xl mb-6">
//                   <p className="text-gray-600 italic">"{review.comment}"</p>
//                 </div>

//                 <div className="flex justify-end gap-3 pt-4 border-t border-gray-50">
//                   <Button
//                     variant="ghost"
//                     className="text-blue-600 font-bold hover:bg-blue-50"
//                   >
//                     <Edit3 size={16} className="mr-2" /> Edit
//                   </Button>
//                   <Button
//                     onClick={() => handleDelete(review._id)}
//                     variant="ghost"
//                     className="text-red-500 font-bold hover:bg-red-50"
//                   >
//                     <Trash2 size={16} className="mr-2" /> Delete
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
//             <MessageSquare className="mx-auto text-gray-200 mb-6" size={40} />
//             <h2 className="text-xl font-black text-gray-400 uppercase tracking-widest">
//               No reviews found!
//             </h2>
//             <p className="text-xs text-gray-300 mt-2">
//               ID: {userId} এর জন্য কোনো ডাটা পাওয়া যায়নি।
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyReviewsPage;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Star,
  Edit3,
  Trash2,
  Loader2,
  RefreshCw,
  MessageSquare,
  X,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MyReviewsPage = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Edit States
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<any>(null);
  const [editRating, setEditRating] = useState(0);
  const [editComment, setEditComment] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const userId = "69c4e6d4285657b1da8c024a";

  const fetchMyReviews = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/v1/reviews/my-reviews/${userId}`,
      );
      if (response.data?.success) {
        setReviews(response.data.data);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchMyReviews();
  }, [fetchMyReviews]);

  // --- DELETE FUNCTION ---
  const handleDelete = async (id: string) => {
    if (window.confirm("আপনি কি নিশ্চিত যে রিভিউটি ডিলিট করতে চান?")) {
      try {
        await axios.delete(`http://localhost:5000/api/v1/reviews/${id}`);
        // ডিলিট হওয়ার পর স্টেট আপডেট করে রিভিউটি লিস্ট থেকে সরিয়ে দাও
        setReviews((prev) => prev.filter((review) => review._id !== id));
        alert("রিভিউটি মুছে ফেলা হয়েছে!");
      } catch (error) {
        alert("ডিলিট করতে সমস্যা হয়েছে!");
      }
    }
  };

  // --- EDIT MODAL OPEN ---
  const handleEditClick = (review: any) => {
    setEditingReview(review);
    setEditRating(review.rating);
    setEditComment(review.comment);
    setIsEditDialogOpen(true);
  };

  // --- UPDATE FUNCTION (API CALL) ---
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsUpdating(true);
      const updateData = {
        rating: editRating,
        comment: editComment,
      };

      const response = await axios.patch(
        `http://localhost:5000/api/v1/reviews/${editingReview._id}`,
        updateData,
      );

      if (response.data.success) {
        // UI আপডেট করা (পুরো লিস্ট রিফ্রেশ না করে শুধু ওই আইটেমটি আপডেট)
        setReviews((prev) =>
          prev.map((r) =>
            r._id === editingReview._id ? { ...r, ...updateData } : r,
          ),
        );
        setIsEditDialogOpen(false);
        alert("Review updated successfully!");
      }
    } catch (error) {
      console.error("Update Error:", error);
      alert("Failed to update review.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-black text-[#003B73] mb-10 italic uppercase underline decoration-blue-500 underline-offset-8">
          My Reviews ({reviews.length})
        </h1>

        {reviews.length > 0 ? (
          <div className="grid gap-6">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-black text-gray-900 dark:text-white text-lg uppercase italic">
                      {review.itemId?.title || "Tour Review"}
                    </h3>
                    <div className="flex text-yellow-500 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < review.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEditClick(review)}
                      variant="ghost"
                      className="text-blue-600 hover:bg-blue-50 rounded-xl"
                    >
                      <Edit3 size={18} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(review._id)}
                      variant="ghost"
                      className="text-red-500 hover:bg-red-50 rounded-xl"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 italic bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
            <MessageSquare className="mx-auto text-gray-200 mb-4" size={48} />
            <p className="text-gray-400 font-bold uppercase italic">
              No reviews yet!
            </p>
          </div>
        )}
      </div>

      {/* --- EDIT DIALOG --- */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[450px] bg-white rounded-[32px] p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-[#003B73] uppercase italic">
              Edit Your Review
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleUpdate} className="space-y-6 mt-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setEditRating(star)}
                  className={`transition-all ${editRating >= star ? "text-yellow-500 scale-110" : "text-gray-300"}`}
                >
                  <Star
                    size={30}
                    fill={editRating >= star ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>

            <textarea
              required
              value={editComment}
              onChange={(e) => setEditComment(e.target.value)}
              className="w-full h-32 bg-gray-50 border border-gray-100 rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={isUpdating}
                className="flex-1 bg-blue-600 h-12 rounded-xl font-bold uppercase italic"
              >
                {isUpdating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Save Changes"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditDialogOpen(false)}
                className="h-12 rounded-xl font-bold uppercase italic"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyReviewsPage;
