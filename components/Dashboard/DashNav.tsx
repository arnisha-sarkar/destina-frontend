"use client";
import { useState } from "react";
import { Bell, Search, User as UserIcon, Settings, LogOut } from "lucide-react";
import Image from "next/image";

const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 border-b bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-64">
        <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-full bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-blue-600 transition-colors">
          <Bell size={22} />
        </button>

        <div className="relative">
          {/* Profile Icon Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold overflow-hidden border-2 border-white shadow-sm">
              {/* আপনি চাইলে এখানে Image ব্যবহার করতে পারেন */}
              <span>A</span>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 border rounded-xl shadow-xl py-2 z-20 transition-all">
              <div className="px-4 py-2 border-b dark:border-slate-700 mb-1">
                <p className="text-sm font-semibold">Arnisha Sarkar</p>
                <p className="text-xs text-slate-500">arnisha@example.com</p>
              </div>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                <UserIcon size={16} /> Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700">
                <Settings size={16} /> Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashNav;
