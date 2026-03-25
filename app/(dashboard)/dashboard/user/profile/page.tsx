import React from "react";
import { User, Mail, Calendar, MapPin } from "lucide-react";

const UserProfilePage = () => {
  // এখানে আপনি চাইলে লোকাল স্টোরেজ থেকে ডাটা নিয়ে এসে দেখাতে পারেন
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* প্রোফাইল পিকচার প্লেসহোল্ডার */}
          <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
            <User size={64} className="text-blue-600 dark:text-blue-400" />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Arnisha Sarkar
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Frontend Developer (Fresher)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400">
                <Mail size={18} />
                <span>arnisha@example.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-slate-600 dark:text-slate-400">
                <Calendar size={18} />
                <span>Joined March 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// এই লাইনটি অবশ্যই থাকতে হবে, নাহলে এরর যাবে না
export default UserProfilePage;
