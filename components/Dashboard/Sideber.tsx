"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingBag,
  Settings,
  User,
  Calendar,
  Star,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setRole(parsedUser.role);
    }
  }, []);

  // অ্যাডমিন মেনু (৫টি পেজ - রিকোয়ারমেন্ট অনুযায়ী)
  const adminLinks = [
    {
      title: "Analytics",
      path: "/dashboard/admin/analytics",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Users",
      path: "/dashboard/admin/manage-users",
      icon: Users,
    },
    {
      title: "Manage Products",
      path: "/dashboard/admin/manage-items",
      icon: Package,
    },
    {
      title: "Manage Orders",
      path: "/dashboard/admin/manage-orders",
      icon: ShoppingBag,
    },
    { title: "Settings", path: "/dashboard/admin/settings", icon: Settings },
  ];

  // ইউজার মেনু (৩টি পেজ - রিকোয়ারমেন্ট অনুযায়ী)
  const userLinks = [
    { title: "My Profile", path: "/dashboard/user/profile", icon: User },
    { title: "My Bookings", path: "/dashboard/user/bookings", icon: Calendar },
    { title: "My Reviews", path: "/dashboard/user/reviews", icon: Star },
  ];

  // রোল অনুযায়ী লিংক সিলেক্ট করা
  const links = role === "admin" ? adminLinks : userLinks;

  // Hydration Error এড়ানোর জন্য লোডিং স্টেট
  if (!mounted || !role) {
    return <div className="w-64 bg-slate-900 h-screen animate-pulse" />;
  }

  return (
    <aside className="w-64 h-screen bg-slate-950 text-slate-300 flex flex-col sticky top-0 border-r border-slate-800 shadow-xl">
      {/* লোগো সেকশন */}
      <div className="p-8 border-b border-slate-900">
        <Link href="/">
          <h1 className="text-2xl font-black text-white tracking-tighter italic cursor-pointer hover:opacity-90 transition-opacity">
            DESTINA<span className="text-blue-500">.</span>
          </h1>
        </Link>
        <p className="text-[10px] mt-1 font-semibold text-slate-500 uppercase tracking-widest">
          {role} Control Panel
        </p>
      </div>

      {/* মেনু লিংকসমূহ */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                  : "hover:bg-slate-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <link.icon
                  size={20}
                  className={
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-blue-400"
                  }
                />
                <span className="font-medium text-sm">{link.title}</span>
              </div>
              {isActive && <ChevronRight size={14} className="opacity-50" />}
            </Link>
          );
        })}
      </nav>

      {/* ফুটার/লগআউট সেকশন */}
      <div className="p-4 border-t border-slate-900">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
