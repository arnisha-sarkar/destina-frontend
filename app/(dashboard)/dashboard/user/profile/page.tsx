"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  ShieldCheck,
  LogOut,
  Edit2,
  Loader2,
  Package,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProfilePage = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // আপনার আসল ইউজার আইডি (এটি সাধারণত Auth Context বা LocalStorage থেকে আসে)
  const userId = "69c4e6d4285657b1da8c024a";

  // --- API থেকে ডাটা ফেচ করা ---
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        // আপনার ব্যাকেন্ড এপিআই এন্ডপয়েন্ট (নিশ্চিত করুন এই রাউটটি ব্যাকেন্ডে আছে)
        const response = await axios.get(
          `http://localhost:5000/api/v1/users/${userId}`,
        );
        if (response.data?.success) {
          setUserData(response.data.data);
        }
      } catch (error) {
        console.error("Profile Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  // --- ডাটা আপডেট করা ---
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsUpdating(true);
      const response = await axios.patch(
        `http://localhost:5000/api/v1/users/${userId}`,
        userData,
      );
      if (response.data.success) {
        setIsEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (error) {
      alert("Failed to update profile.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* --- Top Profile Card --- */}
        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 relative bg-gray-50">
              {userData?.profilePic ? (
                <Image
                  src={userData.profilePic}
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <User size={50} />
                </div>
              )}
            </div>
            <button className="absolute bottom-1 right-1 bg-[#003B73] text-white p-2 rounded-full border-4 border-white transition-transform hover:scale-110">
              <Camera size={16} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-black text-[#003B73] uppercase italic">
              {userData?.name}
            </h1>
            <p className="text-gray-400 font-bold text-sm tracking-widest mt-1">
              Frontend Developer • {userData?.email}
            </p>
            <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6 font-bold h-11"
              >
                {isEditing ? (
                  "Cancel Edit"
                ) : (
                  <>
                    <Edit2 size={16} className="mr-2" /> Edit Profile
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="text-red-500 border-red-100 hover:bg-red-50 rounded-xl px-6 font-bold h-11"
              >
                <LogOut size={16} className="mr-2" /> Logout
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:flex gap-8 border-l border-gray-100 pl-10">
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                12
              </p>
              <p className="text-[10px] font-black uppercase text-gray-400">
                Trips
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                05
              </p>
              <p className="text-[10px] font-black uppercase text-gray-400">
                Reviews
              </p>
            </div>
          </div>
        </div>

        {/* --- Profile Form / Details --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form
              onSubmit={handleUpdateProfile}
              className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm space-y-8"
            >
              <h3 className="text-xl font-black text-[#003B73] uppercase italic mb-5 flex items-center gap-2">
                <ShieldCheck className="text-blue-500" /> Account Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputBox
                  label="Full Name"
                  value={userData?.name}
                  isEditing={isEditing}
                  onChange={(val: string) =>
                    setUserData({ ...userData, name: val })
                  }
                />
                <InputBox
                  label="Email"
                  value={userData?.email}
                  isEditing={false}
                />
                <InputBox
                  label="Phone"
                  value={userData?.phone || "Not Set"}
                  isEditing={isEditing}
                  onChange={(val: string) =>
                    setUserData({ ...userData, phone: val })
                  }
                />
                <InputBox
                  label="Location"
                  value={userData?.location || "Dhaka, Bangladesh"}
                  isEditing={isEditing}
                  onChange={(val: string) =>
                    setUserData({ ...userData, location: val })
                  }
                />
              </div>

              {isEditing && (
                <Button
                  disabled={isUpdating}
                  type="submit"
                  className="w-full bg-[#003B73] h-14 rounded-2xl font-black uppercase italic shadow-lg shadow-blue-900/20"
                >
                  {isUpdating ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Save Profile Changes"
                  )}
                </Button>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-[#003B73] p-8 rounded-[40px] text-white">
              <h4 className="font-black uppercase italic mb-4">Membership</h4>
              <p className="text-sm opacity-70 leading-relaxed mb-6">
                You are a premium member of our travel community. Enjoy
                exclusive deals!
              </p>
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] font-bold uppercase opacity-50">
                  Current Plan
                </p>
                <p className="font-black italic">Platinum Explorer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-component for Inputs ---
const InputBox = ({ label, value, isEditing, onChange }: any) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
      {label}
    </label>
    {isEditing ? (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 outline-none transition-all font-bold text-gray-700"
      />
    ) : (
      <div className="p-4 bg-gray-50/50 rounded-2xl font-bold text-gray-800 border border-transparent italic">
        {value || "N/A"}
      </div>
    )}
  </div>
);

export default ProfilePage;
