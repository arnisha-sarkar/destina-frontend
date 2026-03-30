// "use client";
// import React, { useState } from "react";

// const AddPackageForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.currentTarget);

//     const packageData = {
//       title: formData.get("title"),
//       description: formData.get("description"),
//       image: formData.get("image"),
//       price: Number(formData.get("price")),
//       rating: Number(formData.get("rating")) || 4.5,
//       location: formData.get("location"),
//       category: formData.get("category"),
//       createdBy: "69c4e6d4285657b1da8c024a", // আপনার ভ্যালিড মঙ্গো আইডি
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/v1/items", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(packageData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert("সফলভাবে ডাটাবেসে সেভ হয়েছে!");
//         e.currentTarget.reset();
//       } else {
//         // এটি আপনাকে জানাবে মঙ্গোডিবি ঠিক কোন ফিল্ডের জন্য এরর দিচ্ছে
//         console.log("Database Validation Error:", result);
//         alert(`সার্ভার এরর: ${result.message || "Failed to create item"}`);
//       }
//     } catch (error) {
//       console.error("Connection Error:", error);
//       alert("ব্যাকেন্ড সার্ভার কি চালু আছে? কানেকশন এরর!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-[#0F1115] p-8 rounded-[32px] border border-white/5 shadow-2xl max-w-2xl mx-auto">
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-5"
//       >
//         {/* Title */}
//         <input
//           name="title"
//           placeholder="প্যাকেজের নাম (যেমন: সেন্ট মার্টিন)"
//           className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
//           required
//         />

//         {/* Price & Rating */}
//         <input
//           name="price"
//           type="number"
//           placeholder="দাম (যেমন: 8500)"
//           className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none"
//           required
//         />
//         <input
//           name="rating"
//           type="number"
//           step="0.1"
//           placeholder="রেটিং (যেমন: 4.8)"
//           className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none"
//           required
//         />

//         {/* Location & Category */}
//         <input
//           name="location"
//           placeholder="লোকেশন (যেমন: Saint Martin)"
//           className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none"
//           required
//         />
//         <select
//           name="category"
//           className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none"
//           required
//         >
//           <option value="Beach">Beach</option>
//           <option value="Mountain">Mountain</option>
//           <option value="Adventure">Adventure</option>
//         </select>

//         {/* Image URL */}
//         <input
//           name="image"
//           placeholder="ছবির লিঙ্ক (Unsplash URL)"
//           className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none"
//           required
//         />

//         {/* Description */}
//         <textarea
//           name="description"
//           placeholder="বর্ণনা লিখুন..."
//           className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 h-32 outline-none"
//           required
//         />

//         <button
//           disabled={loading}
//           className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-black uppercase text-white transition-all"
//         >
//           {loading ? "ডেটাবেসে পাঠানো হচ্ছে..." : "প্যাকেজ পাবলিশ করুন"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddPackageForm;

"use client";
import React, { useState } from "react";

const AddPackageForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const packageData = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: formData.get("image"),
      price: Number(formData.get("price")),
      rating: Number(formData.get("rating")) || 4.5,
      location: formData.get("location"),
      category: formData.get("category"),
      createdBy: "69c4e6d4285657b1da8c024a", // Your valid Mongo ID
    };

    try {
      const response = await fetch("http://localhost:5000/api/v1/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(packageData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Package saved successfully to database! 🎉");
        e.currentTarget.reset();
      } else {
        console.log("Database Validation Error:", result);
        alert(`Server Error: ${result.message || "Failed to create item"}`);
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Connection Error! Is your backend server running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0F1115] p-8 rounded-[32px] border border-white/5 shadow-2xl max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Title */}
        <input
          name="title"
          placeholder="Package Title (e.g., Saint Martin Expedition)"
          className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
          required
        />

        {/* Price & Rating */}
        <input
          name="price"
          type="number"
          placeholder="Price (e.g., 8500)"
          className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
          required
        />
        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating (e.g., 4.8)"
          className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
          required
        />

        {/* Location & Category */}
        <input
          name="location"
          placeholder="Location (e.g., Saint Martin, Bangladesh)"
          className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
          required
        />
        <select
          name="category"
          className="bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500 cursor-pointer"
          required
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="Beach">Beach</option>
          <option value="Mountain">Mountain</option>
          <option value="Adventure">Adventure</option>
        </select>

        {/* Image URL */}
        <input
          name="image"
          placeholder="Image URL (e.g., Unsplash link)"
          className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 outline-none focus:border-blue-500"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Write a short description about the package..."
          className="md:col-span-2 bg-[#1C1F26] p-4 rounded-2xl text-white border border-white/5 h-32 outline-none focus:border-blue-500"
          required
        />

        <button
          disabled={loading}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-black uppercase text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Publishing..." : "Publish Package"}
        </button>
      </form>
    </div>
  );
};

export default AddPackageForm;
