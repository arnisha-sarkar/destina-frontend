"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert(
      "ধন্যবাদ! আপনার মেসেজটি আমরা পেয়েছি। খুব শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।",
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    // মেইন ব্যাকগ্রাউন্ড ডার্ক মোডে rich black করা হয়েছে
    <div className="min-h-screen bg-slate-50 dark:bg-[#0D1117] transition-colors duration-300 pb-20">
      {/* --- Hero Section --- */}
      <div className="bg-[#003B73] dark:bg-[#020617] pt-32 pb-20 px-6 text-center transition-colors">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Contact Us
          </h1>
          <p className="text-blue-100 dark:text-gray-400 max-w-xl mx-auto opacity-80 italic">
            Have questions about a trip or need a custom travel plan? We're here
            to help you 24/7.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- Left Side: Contact Info --- */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#161B22] p-8 rounded-[32px] shadow-xl border border-gray-100 dark:border-white/5 flex flex-col justify-between h-full transition-all">
              <div className="space-y-8">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  Get in Touch
                </h2>

                <ContactInfoItem
                  icon={
                    <Phone
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  }
                  title="Call Us"
                  detail="+880 1XXX-XXXXXX"
                />
                <ContactInfoItem
                  icon={
                    <Mail
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  }
                  title="Email Us"
                  detail="support@travelflow.com"
                />
                <ContactInfoItem
                  icon={
                    <MapPin
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  }
                  title="Our Office"
                  detail="Gulshan-2, Dhaka, Bangladesh"
                />
              </div>

              {/* Social Media Links */}
              <div className="mt-12">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase mb-4 tracking-[0.2em]">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<Twitter size={20} />} />
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Contact Form --- */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#161B22] p-8 md:p-12 rounded-[32px] shadow-2xl shadow-blue-900/5 border border-gray-100 dark:border-white/5 transition-all">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-black"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full p-4 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-black"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="How can we help?"
                    className="w-full p-4 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-black"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full p-4 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-white rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent dark:border-white/5 focus:bg-white dark:focus:bg-black resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <Button
                    type="submit"
                    className="w-full md:w-auto h-14 px-10 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const ContactInfoItem = ({
  icon,
  title,
  detail,
}: {
  icon: any;
  title: string;
  detail: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
        {title}
      </h4>
      <p className="text-lg font-bold text-gray-900 dark:text-white">
        {detail}
      </p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: { icon: any }) => (
  <button className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[#0D1117] text-gray-400 dark:text-gray-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center border border-transparent dark:border-white/5">
    {icon}
  </button>
);

export default ContactPage;
