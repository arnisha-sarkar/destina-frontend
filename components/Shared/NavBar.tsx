// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname, useRouter } from "next/navigation";
// // import {
// //   Menu,
// //   X,
// //   ChevronDown,
// //   LogOut,
// //   LayoutDashboard,
// //   MapPin,
// //   Settings,
// // } from "lucide-react";

// // interface NavRoute {
// //   name: string;
// //   path: string;
// // }

// // const Navbar: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState<boolean>(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
// //   const [mounted, setMounted] = useState(false); // Hydration error ফিক্স করার জন্য
// //   const pathname = usePathname();
// //   const router = useRouter();

// //   // ১. ইউজার লগইন কি না তা রিয়েল-টাইমে চেক করার ফাংশন
// //   useEffect(() => {
// //     setMounted(true); // ক্লায়েন্ট সাইডে মাউন্ট হয়েছে কি না নিশ্চিত করা

// //     const checkAuth = () => {
// //       const authStatus = localStorage.getItem("isLoggedIn");
// //       setIsLoggedIn(authStatus === "true");
// //     };

// //     // শুরুতে একবার চেক করবে
// //     checkAuth();

// //     // স্টোরেজ বা কাস্টম ইভেন্ট চেঞ্জ হলে আপডেট হবে
// //     window.addEventListener("storage", checkAuth);
// //     window.addEventListener("authChange", checkAuth);

// //     return () => {
// //       window.removeEventListener("storage", checkAuth);
// //       window.removeEventListener("authChange", checkAuth);
// //     };
// //   }, []);

// //   // ২. লগআউট হ্যান্ডেলার
// //   const handleLogout = (e: React.MouseEvent) => {
// //     e.preventDefault();
// //     localStorage.removeItem("isLoggedIn");
// //     setIsLoggedIn(false); // সাথে সাথে স্টেট পরিবর্তন
// //     setIsOpen(false);
// //     router.push("/");
// //     router.refresh();
// //   };

// //   const publicRoutes: NavRoute[] = [
// //     { name: "Home", path: "/" },
// //     { name: "Destinations", path: "/destinations" },
// //     { name: "Packages", path: "/packages" },
// //     { name: "Contact", path: "/contact" },
// //   ];

// //   const privateRoutes: NavRoute[] = [
// //     { name: "AI Planner", path: "/ai-planner" },
// //     { name: "My Bookings", path: "/bookings" },
// //   ];

// //   const allRoutes = isLoggedIn
// //     ? [...publicRoutes, ...privateRoutes]
// //     : publicRoutes;

// //   // নেক্সট জেএস-এ সার্ভার সাইড এরর এড়াতে মাউন্ট না হওয়া পর্যন্ত কিছু দেখাবে না
// //   if (!mounted) return null;

// //   return (
// //     <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link
// //               href="/"
// //               className="flex items-center gap-2 text-2xl font-extrabold text-blue-600"
// //             >
// //               <MapPin size={28} className="fill-blue-600/20" />
// //               <span>
// //                 Travel<span className="text-gray-900 dark:text-white font-bold">Flow</span>
// //               </span>
// //             </Link>
// //           </div>

// //           {/* Desktop Nav */}
// //           <div className="hidden md:flex items-center space-x-6">
// //             {allRoutes.map((link) => (
// //               <Link
// //                 key={link.path}
// //                 href={link.path}
// //                 className={`text-sm font-medium transition-all ${
// //                   pathname === link.path
// //                     ? "text-blue-600 border-b-2 border-blue-600"
// //                     : "text-gray-600 hover:text-blue-600"
// //                 }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* User Button Section (Desktop) */}
// //           <div className="hidden md:flex items-center space-x-4">
// //             {isLoggedIn ? (
// //               <div className="relative group">
// //                 <button className="flex items-center gap-2 p-1 pr-3 rounded-full bg-gray-50 border hover:bg-gray-100 transition shadow-sm cursor-pointer">
// //                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
// //                     AS
// //                   </div>
// //                   <span className="text-sm font-semibold text-gray-700">
// //                     Account
// //                   </span>
// //                   <ChevronDown size={14} className="text-gray-400" />
// //                 </button>

// //                 {/* Dropdown */}
// //                 <div className="absolute right-0 mt-0 w-52 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
// //                   <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl py-2 overflow-hidden">
// //                     <div className="px-4 py-2 border-b mb-1">
// //                       <p className="text-xs text-gray-400 uppercase font-black">
// //                         Welcome!
// //                       </p>
// //                       <p className="text-sm font-bold text-gray-800">
// //                         Arnisha Sarkar
// //                       </p>
// //                     </div>

// //                     <Link
// //                       href="/dashboard"
// //                       className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
// //                     >
// //                       <LayoutDashboard size={16} className="text-blue-600" />{" "}
// //                       Dashboard
// //                     </Link>

// //                     <Link
// //                       href="/settings"
// //                       className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
// //                     >
// //                       <Settings size={16} /> Settings
// //                     </Link>

// //                     <hr className="my-1 border-gray-100" />

// //                     <button
// //                       onClick={handleLogout}
// //                       className="w-full text-left flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer font-bold"
// //                     >
// //                       <LogOut size={16} /> Logout
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               <Link
// //                 href="/register"
// //                 className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
// //               >
// //                 Login / Register
// //               </Link>
// //             )}
// //           </div>

// //           {/* Mobile Toggle */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="p-2 text-gray-600"
// //             >
// //               {isOpen ? <X size={28} /> : <Menu size={28} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Drawer */}
// //       <div
// //         className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
// //         onClick={() => setIsOpen(false)}
// //       ></div>
// //       <div
// //         className={`fixed top-0 left-0 w-[280px] h-full bg-white z-50 shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
// //       >
// //         <div className="p-6 flex flex-col h-full">
// //           <div className="flex items-center justify-between mb-8">
// //             <span className="text-xl font-bold text-blue-600">TravelFlow</span>
// //             <button onClick={() => setIsOpen(false)}>
// //               <X size={24} />
// //             </button>
// //           </div>

// //           <nav className="space-y-2 flex-grow">
// //             {allRoutes.map((link) => (
// //               <Link
// //                 key={link.path}
// //                 href={link.path}
// //                 onClick={() => setIsOpen(false)}
// //                 className={`block p-3 rounded-xl font-medium ${pathname === link.path ? "bg-blue-50 text-blue-600" : "text-gray-700"}`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </nav>

// //           <div className="pt-6 border-t mt-auto">
// //             {isLoggedIn ? (
// //               <div className="space-y-3">
// //                 <Link
// //                   href="/dashboard"
// //                   onClick={() => setIsOpen(false)}
// //                   className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-600 font-bold"
// //                 >
// //                   <LayoutDashboard size={20} /> Dashboard
// //                 </Link>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="w-full flex items-center gap-3 p-3 text-red-600 font-bold cursor-pointer hover:bg-red-50 rounded-xl transition"
// //                 >
// //                   <LogOut size={20} /> Logout
// //                 </button>
// //               </div>
// //             ) : (
// //               <Link
// //                 href="/register"
// //                 onClick={() => setIsOpen(false)}
// //                 className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-center"
// //               >
// //                 Login / Register
// //               </Link>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useTheme } from "next-themes"; // থিম হুক
// import {
//   Menu,
//   X,
//   ChevronDown,
//   LogOut,
//   LayoutDashboard,
//   MapPin,
//   Settings,
//   Sun,
//   Moon,
// } from "lucide-react";

// interface NavRoute {
//   name: string;
//   path: string;
// }

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme(); // থিম স্টেট
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true);
//     const checkAuth = () => {
//       const authStatus = localStorage.getItem("isLoggedIn");
//       setIsLoggedIn(authStatus === "true");
//     };
//     checkAuth();
//     window.addEventListener("storage", checkAuth);
//     window.addEventListener("authChange", checkAuth);
//     return () => {
//       window.removeEventListener("storage", checkAuth);
//       window.removeEventListener("authChange", checkAuth);
//     };
//   }, []);

//   const handleLogout = (e: React.MouseEvent) => {
//     e.preventDefault();
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//     setIsOpen(false);
//     router.push("/");
//     router.refresh();
//   };

//   const publicRoutes: NavRoute[] = [
//     { name: "Home", path: "/" },
//     { name: "Destinations", path: "/destinations" },
//     { name: "Packages", path: "/packages" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const privateRoutes: NavRoute[] = [
//     { name: "AI Planner", path: "/ai-planner" },
//     { name: "My Bookings", path: "/bookings" },
//   ];

//   const allRoutes = isLoggedIn
//     ? [...publicRoutes, ...privateRoutes]
//     : publicRoutes;

//   if (!mounted) return null;

//   // থিম টগল কম্পোনেন্ট (পুনরায় ব্যবহারের জন্য)
//   const ThemeToggleButton = () => (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-yellow-400 hover:scale-110 transition-all border border-transparent dark:border-white/10"
//       aria-label="Toggle Theme"
//     >
//       {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   );

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 dark:border-white/5 backdrop-blur-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link
//               href="/"
//               className="flex items-center gap-2 text-2xl font-extrabold text-blue-600"
//             >
//               <MapPin size={28} className="fill-blue-600/20" />
//               <span>
//                 Travel
//                 <span className="text-gray-900 dark:text-white dark:text-white font-bold">
//                   Flow
//                 </span>
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-6">
//             {allRoutes.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 className={`text-sm font-medium transition-all ${
//                   pathname === link.path
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-600 dark:text-gray-400 hover:text-blue-600"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Right Section (Desktop) */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Theme Toggle Added Here */}
//             <ThemeToggleButton />

//             {isLoggedIn ? (
//               <div className="relative group">
//                 <button className="flex items-center gap-2 p-1 pr-3 rounded-full bg-gray-50 dark:bg-gray-800 border dark:border-white/10 hover:bg-gray-100 transition shadow-sm cursor-pointer">
//                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-inner">
//                     AS
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
//                     Account
//                   </span>
//                   <ChevronDown size={14} className="text-gray-400" />
//                 </button>

//                 {/* Dropdown */}
//                 <div className="absolute right-0 mt-0 w-52 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                   <div className="bg-white dark:bg-[#0F1115] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden">
//                     <div className="px-4 py-2 border-b dark:border-white/5 mb-1 text-center md:text-left">
//                       <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
//                         Welcome!
//                       </p>
//                       <p className="text-sm font-bold text-gray-800 dark:text-white truncate">
//                         Arnisha Sarkar
//                       </p>
//                     </div>

//                     <Link
//                       href="/dashboard"
//                       className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
//                     >
//                       <LayoutDashboard size={16} className="text-blue-600" />{" "}
//                       Dashboard
//                     </Link>

//                     <Link
//                       href="/settings"
//                       className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
//                     >
//                       <Settings size={16} /> Settings
//                     </Link>

//                     <hr className="my-1 border-gray-100 dark:border-white/5" />

//                     <button
//                       onClick={handleLogout}
//                       className="w-full text-left flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer font-bold"
//                     >
//                       <LogOut size={16} /> Logout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 href="/register"
//                 className="bg-blue-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
//               >
//                 Login / Register
//               </Link>
//             )}
//           </div>

//           {/* Mobile Actions */}
//           <div className="md:hidden flex items-center gap-2">
//             <ThemeToggleButton />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-gray-600 dark:text-gray-300"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer (with dark mode support) */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={() => setIsOpen(false)}
//       ></div>
//       <div
//         className={`fixed top-0 left-0 w-[280px] h-full bg-white dark:bg-[#0F1115] z-50 shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <div className="p-6 flex flex-col h-full">
//           <div className="flex items-center justify-between mb-8">
//             <span className="text-xl font-bold text-blue-600 italic uppercase">
//               TravelFlow
//             </span>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="dark:text-white"
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <nav className="space-y-2 flex-grow">
//             {allRoutes.map((link) => (
//               <Link
//                 key={link.path}
//                 href={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block p-3 rounded-xl font-medium transition-colors ${
//                   pathname === link.path
//                     ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
//                     : "text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="pt-6 border-t dark:border-white/5 mt-auto">
//             {isLoggedIn ? (
//               <div className="space-y-3">
//                 <Link
//                   href="/dashboard"
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-bold"
//                 >
//                   <LayoutDashboard size={20} /> Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center gap-3 p-3 text-red-600 font-bold cursor-pointer hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition text-left"
//                 >
//                   <LogOut size={20} /> Logout
//                 </button>
//               </div>
//             ) : (
//               <Link
//                 href="/register"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-center active:scale-95 transition-transform"
//               >
//                 Login / Register
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  ChevronDown,
  LogOut,
  LayoutDashboard,
  MapPin,
  Settings,
  Sun,
  Moon,
} from "lucide-react";

interface NavRoute {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  // Hydration error এড়ানোর জন্য mounted চেক
  useEffect(() => {
    setMounted(true);
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(authStatus === "true");
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsOpen(false);
    router.push("/");
    router.refresh();
  };

  const publicRoutes: NavRoute[] = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  const privateRoutes: NavRoute[] = [
    { name: "AI Planner", path: "/ai-planner" },
    { name: "My Bookings", path: "/bookings" },
  ];

  const allRoutes = isLoggedIn
    ? [...publicRoutes, ...privateRoutes]
    : publicRoutes;

  if (!mounted) return null;

  // Theme Toggle Component
  const ThemeToggleButton = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-blue-600 dark:text-yellow-400 hover:scale-110 transition-all border border-transparent dark:border-white/10 shadow-sm cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-[#0D1117]/95 border-gray-100 dark:border-white/5 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-extrabold text-blue-600 group"
            >
              <MapPin
                size={28}
                className="fill-blue-600/20 group-hover:scale-110 transition-transform"
              />
              <span>
                Travel
                <span className="text-gray-900 dark:text-white">Flow</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {allRoutes.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-semibold transition-all hover:text-blue-600 ${
                  pathname === link.path
                    ? "text-blue-600"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-5">
            <ThemeToggleButton />

            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-1.5 pr-4 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    AS
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-200">
                    Arnisha
                  </span>
                  <ChevronDown
                    size={14}
                    className="text-gray-400 group-hover:rotate-180 transition-transform"
                  />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white dark:bg-[#161B22] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl py-2 mt-2 overflow-hidden">
                    <div className="px-4 py-3 border-b dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">
                        Signed in as
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        Arnisha Sarkar
                      </p>
                    </div>

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <LayoutDashboard size={18} className="text-blue-600" />{" "}
                      Dashboard
                    </Link>

                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Settings size={18} /> Settings
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 font-bold hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors cursor-pointer"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                href="/register"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggleButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 dark:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-white dark:bg-[#0D1117] z-50 shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <span className="text-2xl font-black text-blue-600 italic">
              TravelFlow
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="space-y-3">
            {allRoutes.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block p-4 rounded-2xl font-bold transition-all ${
                  pathname === link.path
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none"
                    : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t dark:border-white/5">
            {isLoggedIn ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      Arnisha Sarkar
                    </p>
                    <p className="text-xs text-gray-500">Member</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full py-4 text-red-600 font-black border-2 border-red-50 dark:border-red-950/20 rounded-2xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-center shadow-xl"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
