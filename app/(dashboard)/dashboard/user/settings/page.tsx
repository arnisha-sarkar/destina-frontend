"use client";

import React, { useState } from "react";
import { User, Shield, Bell, Moon, Sun, Save } from "lucide-react";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Admin Settings
        </h1>
        <p className="text-slate-500 font-medium">
          Global configuration and personal account management.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-2 bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit">
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "profile" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-50 text-slate-600"}`}
          >
            <User size={18} /> Profile Info
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "security" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-50 text-slate-600"}`}
          >
            <Shield size={18} /> Security
          </button>
          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "preferences" ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-50 text-slate-600"}`}
          >
            <Moon size={18} /> System UI
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          {activeTab === "profile" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <User className="text-blue-600" /> Personal Information
              </h3>
              <div className="space-y-4 pt-4">
                <label className="block text-sm font-bold text-slate-700">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Admin Arnisha"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all active:scale-95">
                  <Save size={18} /> Save Profile
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Shield className="text-blue-600" /> Security Settings
              </h3>
              <p className="text-sm text-slate-500 italic">
                Manage your password and authentication methods.
              </p>
              {/* Security Form Here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
