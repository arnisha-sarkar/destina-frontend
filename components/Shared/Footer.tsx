"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Globe,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Grid Layout - ফাঁকা জায়গা দূর করার জন্য ৪টি কলামে ভাগ করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold text-blue-500"
            >
              <Globe className="text-blue-500" size={32} />
              <span className="tracking-tight">
                Travel<span className="text-white">Flow</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover your next adventure with TravelFlow. We provide seamless
              booking experiences and personalized travel plans for explorers
              worldwide.
            </p>
            {/* Social Media Links (Working) */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Navigation (১ম লিঙ্কের সারি) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Explore Now
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Destinations", path: "/destinations" },
                { name: "Tour Packages", path: "/packages" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="group flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support & Features (২য় লিঙ্কের সারি) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">User Support</h4>
            <ul className="space-y-4">
              {[
                { name: "AI Travel Planner", path: "/ai-planner" },
                { name: "My Bookings", path: "/bookings" },
                { name: "Help & FAQ", path: "/faq" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Information (ইমেজের কন্টাক্ট ডাটা) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 relative">
                <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-sm">support@travelflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Developer Info */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>© {currentYear} TravelFlow. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Developed by</span>
            <span className="text-blue-400 font-bold">Arnisha Sarkar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
