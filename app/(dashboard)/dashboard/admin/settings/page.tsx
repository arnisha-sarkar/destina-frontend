"use client";

import React, { useState } from "react";
import {
  User,
  Lock,
  Globe,
  Camera,
  Save,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Settings as SettingsIcon,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminSettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);

  // সিমুলেটেড সেভ ফাংশন
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings updated successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* --- Header Section --- */}
      <div className="bg-white border-b border-gray-100 pt-10 pb-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#003B73] flex items-center gap-3">
              <SettingsIcon className="text-blue-600" size={28} /> Admin
              Settings
            </h1>
            <p className="text-gray-500 mt-1">
              Configure your profile, security, and website details.
            </p>
          </div>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-blue-100 transition-all active:scale-95"
          >
            {isSaving ? (
              "Saving..."
            ) : (
              <>
                <Save size={18} /> Save All Changes
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- Navigation Tabs (Responsive Sidebar) --- */}
          <div className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            <NavTab
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
              icon={<User size={18} />}
              label="My Profile"
            />
            <NavTab
              active={activeTab === "security"}
              onClick={() => setActiveTab("security")}
              icon={<Lock size={18} />}
              label="Password"
            />
            <NavTab
              active={activeTab === "site"}
              onClick={() => setActiveTab("site")}
              icon={<Globe size={18} />}
              label="Site Config"
            />
          </div>

          {/* --- Main Content Card --- */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12">
              {/* 1. Profile Section */}
              {activeTab === "profile" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-gray-50">
                    <div className="relative group">
                      <div className="w-28 h-28 bg-blue-50 rounded-[35px] flex items-center justify-center text-blue-600 font-bold text-3xl overflow-hidden border-4 border-white shadow-lg">
                        <User size={40} />
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                        <Camera size={16} />
                      </button>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Administrator Profile
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Update your personal photo and details.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Full Name"
                      placeholder="Arnisha Sarkar"
                      icon={<User size={16} />}
                    />
                    <InputField
                      label="Email Address"
                      placeholder="admin@travelflow.com"
                      icon={<Mail size={16} />}
                    />
                    <div className="md:col-span-2">
                      <InputField
                        label="Phone Number"
                        placeholder="+880 1XXX-XXXXXX"
                        icon={<Phone size={16} />}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Security Section */}
              {activeTab === "security" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Security & Password
                  </h3>
                  <div className="space-y-6">
                    <InputField
                      label="Current Password"
                      type="password"
                      placeholder="••••••••"
                      icon={<Lock size={16} />}
                    />
                    <InputField
                      label="New Password"
                      type="password"
                      placeholder="••••••••"
                      icon={<Lock size={16} />}
                    />
                    <InputField
                      label="Confirm New Password"
                      type="password"
                      placeholder="••••••••"
                      icon={<Lock size={16} />}
                    />
                  </div>
                </div>
              )}

              {/* 3. Site Configuration Section */}
              {activeTab === "site" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Global Website Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Website Name"
                      placeholder="TravelFlow"
                      icon={<Globe size={16} />}
                    />
                    <InputField
                      label="Office Address"
                      placeholder="Gulshan-2, Dhaka"
                      icon={<MapPin size={16} />}
                    />

                    <div className="md:col-span-2 pt-4">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">
                        Social Media Links
                      </p>
                      <div className="space-y-4">
                        <SocialInput
                          icon={
                            <Facebook size={18} className="text-blue-600" />
                          }
                          placeholder="Facebook URL"
                        />
                        <SocialInput
                          icon={
                            <Instagram size={18} className="text-pink-600" />
                          }
                          placeholder="Instagram URL"
                        />
                        <SocialInput
                          icon={<Twitter size={18} className="text-blue-400" />}
                          placeholder="Twitter URL"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---

const NavTab = ({ active, onClick, icon, label }: any) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm transition-all whitespace-nowrap shrink-0 ${
      active
        ? "bg-[#003B73] text-white shadow-xl shadow-blue-900/10"
        : "text-gray-500 hover:bg-white"
    }`}
  >
    {icon} {label}
  </button>
);

const InputField = ({ label, placeholder, icon, type = "text" }: any) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-4 bg-gray-50/50 border border-transparent rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm font-medium"
      />
    </div>
  </div>
);

const SocialInput = ({ icon, placeholder }: any) => (
  <div className="flex items-center gap-4 bg-gray-50/50 p-2 rounded-2xl border border-gray-100">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
      {icon}
    </div>
    <input
      placeholder={placeholder}
      className="bg-transparent flex-grow outline-none text-sm font-medium"
    />
  </div>
);

export default AdminSettingsPage;
