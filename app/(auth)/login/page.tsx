// // "use client";

// // import React, { useState } from "react";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Eye, EyeOff, Lock, Mail, UserCheck } from "lucide-react";
// // import { Label } from "@/components/ui/label";
// // import { Button } from "@/components/ui/button";
// // import Link from "next/link";
// // import { useForm, FieldValues } from "react-hook-form"; // FieldValues যোগ করা হয়েছে
// // import { useRouter } from "next/navigation";

// // const LoginForm: React.FC = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [loading, setLoading] = useState(false); // লোডিং স্টেট যোগ করা হয়েছে
// //   const router = useRouter();

// //   // React Hook Form Setup
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   // Login Submit Function
// //   const onSubmit = async (data: FieldValues) => {
// //     // any এর বদলে FieldValues ব্যবহার করা হয়েছে
// //     setLoading(true);
// //     try {
// //       const response = await fetch("http://localhost:5000/api/v1/users/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });

// //       // result কে টাইপ কাস্টিং করা হয়েছে যাতে লাল দাগ না আসে
// //       const result = await response.json();

// //       if (result.success) {
// //         alert("Login Successful! 🔓");

// //         // ১. টোকেন সেভ করা
// //         localStorage.setItem("accessToken", result.token);

// //         // ২. ইউজারের ডাটা (রোলসহ) সেভ করা যাতে সাইডবার এটি পড়তে পারে
// //         localStorage.setItem("user", JSON.stringify(result.data));

// //         const role = result.data?.role;

// //         // ৩. রিকোয়ারমেন্ট অনুযায়ী রোল ভিত্তিক রিডাইরেক্ট
// //         if (role === "admin") {
// //           router.push("/dashboard/admin/analytics");
// //         } else if (role === "user") {
// //           router.push("/dashboard/user/profile");
// //         } else {
// //           router.push("/dashboard");
// //         }
// //       } else {
// //         alert(result.message || "Invalid Email or Password");
// //       }
// //     } catch (error) {
// //       console.error("Login error:", error);
// //       alert("সার্ভারে কানেক্ট করা যাচ্ছে না। আপনার ব্যাকএন্ড রান আছে কি?");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-background flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md shadow-lg">
// //         <CardHeader className="text-center">
// //           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
// //             <UserCheck className="w-8 h-8 text-primary-foreground" />
// //           </div>
// //           <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
// //           <CardDescription>Login to your account to continue</CardDescription>
// //         </CardHeader>

// //         <CardContent>
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //             {/* Email Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="email">Email Address *</Label>
// //               <div className="relative">
// //                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   disabled={loading}
// //                   placeholder="Enter your email"
// //                   {...register("email", { required: "Email is required" })}
// //                   className="pl-10"
// //                 />
// //               </div>
// //               {errors.email && (
// //                 <p className="text-xs text-red-500">
// //                   {errors.email?.message as string}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Password Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="password">Password *</Label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="password"
// //                   disabled={loading}
// //                   type={showPassword ? "text" : "password"}
// //                   placeholder="Enter your password"
// //                   {...register("password", {
// //                     required: "Password is required",
// //                   })}
// //                   className="pl-10 pr-10"
// //                 />

// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
// //                   onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {showPassword ? (
// //                     <EyeOff className="w-4 h-4" />
// //                   ) : (
// //                     <Eye className="w-4 h-4" />
// //                   )}
// //                 </Button>
// //               </div>
// //               {errors.password && (
// //                 <p className="text-xs text-red-500">
// //                   {errors.password?.message as string}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Submit Button */}
// //             <Button
// //               disabled={loading}
// //               type="submit"
// //               className="w-full h-11 text-lg font-semibold"
// //             >
// //               {loading ? "Signing In..." : "Sign In"}
// //             </Button>

// //             <div className="text-center">
// //               <p className="text-sm text-muted-foreground">
// //                 Don&apos;t have an account?{" "}
// //                 <Link
// //                   href="/register"
// //                   className="text-primary font-bold hover:underline"
// //                 >
// //                   Register here
// //                 </Link>
// //               </p>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default LoginForm;

// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Eye, EyeOff, Lock, Mail, UserCheck } from "lucide-react";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useForm, FieldValues } from "react-hook-form";
// import { useRouter } from "next/navigation";

// const LoginPage: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data: FieldValues) => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         // ১. টোকেন এবং ইউজার ডাটা সেভ করা
//         localStorage.setItem("accessToken", result.token);
//         localStorage.setItem("user", JSON.stringify(result.data));

//         // ✅ ২. নেভবারকে আপডেট করার জন্য এই ২ লাইন খুবই গুরুত্বপূর্ণ
//         localStorage.setItem("isLoggedIn", "true");
//         window.dispatchEvent(new Event("authChange"));

//         const role = result.data?.role;

//         // ৩. রোল ভিত্তিক রিডাইরেক্ট
//         if (role === "admin") {
//           router.push("/dashboard/admin/analytics");
//         } else if (role === "user") {
//           router.push("/dashboard/user/profile");
//         } else {
//           router.push("/dashboard");
//         }
//       } else {
//         alert(result.message || "Invalid Email or Password");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("সার্ভারে কানেক্ট করা যাচ্ছে না। আপনার ব্যাকএন্ড রান আছে কি?");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-4">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="text-center">
//           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
//             <UserCheck className="w-8 h-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
//           <CardDescription>Login to your account to continue</CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address *</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   disabled={loading}
//                   placeholder="Enter your email"
//                   {...register("email", { required: "Email is required" })}
//                   className="pl-10"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-xs text-red-500">
//                   {errors.email?.message as string}
//                 </p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   disabled={loading}
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   {...register("password", {
//                     required: "Password is required",
//                   })}
//                   className="pl-10 pr-10"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-4 h-4" />
//                   ) : (
//                     <Eye className="w-4 h-4" />
//                   )}
//                 </Button>
//               </div>
//               {errors.password && (
//                 <p className="text-xs text-red-500">
//                   {errors.password?.message as string}
//                 </p>
//               )}
//             </div>

//             <Button
//               disabled={loading}
//               type="submit"
//               className="w-full h-11 text-lg font-semibold"
//             >
//               {loading ? "Signing In..." : "Sign In"}
//             </Button>

//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Don&apos;t have an account?{" "}
//                 <Link
//                   href="/register"
//                   className="text-primary font-bold hover:underline"
//                 >
//                   Register here
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;

// "use client";

// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useForm, FieldValues } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const LoginPage: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data: FieldValues) => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:5000/api/v1/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         localStorage.setItem("accessToken", result.token);
//         localStorage.setItem("user", JSON.stringify(result.data));
//         localStorage.setItem("isLoggedIn", "true");
//         window.dispatchEvent(new Event("authChange"));

//         const role = result.data?.role;
//         if (role === "admin") router.push("/dashboard/admin/analytics");
//         else if (role === "user") router.push("/dashboard/user/profile");
//         else router.push("/dashboard");
//       } else {
//         alert(result.message || "Invalid Email or Password");
//       }
//     } catch (error) {
//       alert("সার্ভারে কানেক্ট করা যাচ্ছে না।");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#f0f2f5] p-4 font-sans">
//       {/* Main Container */}
//       <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl min-h-[600px]">
//         {/* Left Side: Image Content */}
//         <div className="relative hidden md:block group overflow-hidden">
//           <Image
//             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073"
//             alt="Travel"
//             fill
//             className="object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//           <div className="absolute bottom-12 left-10 right-10 text-white">
//             <h2 className="text-4xl font-bold mb-4 leading-tight">
//               ENJOY THE <br /> WORLD
//             </h2>
//             <p className="text-gray-200 text-sm leading-relaxed mb-6">
//               Experience seamless travel planning with our AI-powered platform.
//               Discover hidden gems and book your next adventure today.
//             </p>
//             <Button
//               variant="outline"
//               className="text-white border-white hover:bg-white hover:text-black rounded-full px-8"
//             >
//               Learn More
//             </Button>
//           </div>
//         </div>

//         {/* Right Side: Login Form */}
//         <div className="flex flex-col justify-center p-8 lg:p-16 bg-[#003B73]">
//           {" "}
//           {/* ইমেজের মতো ডিপ ব্লু কালার */}
//           <div className="mb-10 text-center md:text-left">
//             <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
//               <span className="text-white font-bold text-2xl tracking-tighter italic">
//                 Travel
//               </span>
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//             <p className="text-blue-100/60 text-sm">
//               Please enter your details to sign in
//             </p>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//             {/* Email Field */}
//             <div className="space-y-2">
//               <Label className="text-white/80 text-xs font-semibold uppercase tracking-wider ml-1">
//                 Email Address
//               </Label>
//               <div className="relative">
//                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="hello@example.com"
//                   {...register("email", { required: "Email is required" })}
//                   className="bg-white/10 border-white/10 text-white placeholder:text-white/30 h-12 pl-12 rounded-xl focus:bg-white/20 transition-all border-none focus-visible:ring-1 focus-visible:ring-white/30"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-[10px] text-red-400 ml-1">
//                   {errors.email?.message as string}
//                 </p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                 <Label className="text-white/80 text-xs font-semibold uppercase tracking-wider ml-1">
//                   Password
//                 </Label>
//                 <Link
//                   href="#"
//                   className="text-[10px] text-white/50 hover:text-white transition-colors"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//               <div className="relative">
//                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   {...register("password", {
//                     required: "Password is required",
//                   })}
//                   className="bg-white/10 border-white/10 text-white placeholder:text-white/30 h-12 pl-12 pr-12 rounded-xl focus:bg-white/20 transition-all border-none focus-visible:ring-1 focus-visible:ring-white/30"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
//                 >
//                   {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-[10px] text-red-400 ml-1">
//                   {errors.password?.message as string}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <Button
//               disabled={loading}
//               type="submit"
//               className="w-full h-12 bg-white text-[#003B73] hover:bg-blue-50 font-bold rounded-xl shadow-lg transition-transform active:scale-[0.98] mt-4"
//             >
//               {loading ? "Signing In..." : "Continue"}
//               {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
//             </Button>

//             {/* Google Sign In (Optional but looks good like image) */}
//             <div className="relative py-4">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t border-white/10"></span>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-[#003B73] px-2 text-white/30">Or</span>
//               </div>
//             </div>

//             <Button
//               variant="outline"
//               type="button"
//               className="w-full h-12 bg-transparent border-white/20 text-white hover:bg-white/5 rounded-xl"
//             >
//               Sign up with Google
//             </Button>

//             {/* Bottom Link */}
//             <p className="text-center text-sm text-white/50 pt-4">
//               New here?{" "}
//               <Link
//                 href="/register"
//                 className="text-white font-bold hover:underline underline-offset-4"
//               >
//                 Create Account
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, ArrowRight, Globe } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("accessToken", result.token);
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("authChange"));

        const role = result.data?.role;
        if (role === "admin") router.push("/dashboard/admin/analytics");
        else if (role === "user") router.push("/dashboard/user/profile");
        else router.push("/dashboard");
      } else {
        alert(result.message || "Invalid Email or Password");
      }
    } catch (error) {
      alert("সার্ভারে কানেক্ট করা যাচ্ছে না।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
          alt="Travel Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" />
      </div>

      {/* Main Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 min-h-[650px]">
        {/* Left Side: Branding & Image */}
        <div className="relative hidden md:block group overflow-hidden border-r border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070"
            alt="Adventure"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003B73]/90 via-transparent to-transparent" />

          {/* --- Home Link on Left Side --- */}
          <div className="absolute top-10 left-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-all"
            >
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-2xl tracking-tighter italic">
                TravelFlow
              </span>
            </Link>
          </div>

          <div className="absolute bottom-12 left-10 right-10 text-white">
            <h2 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
              ENJOY THE <br /> WORLD
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Join our community of world travelers and start your journey today
              with seamless experiences.
            </p>
            <Button
              variant="outline"
              className="text-white border-white/40 hover:bg-white hover:text-black rounded-full px-8 backdrop-blur-md transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="flex flex-col justify-center p-8 lg:p-14 bg-[#003B73]/40 md:bg-transparent">
          <div className="mb-8">
            {/* --- Clickable Logo for Desktop & Mobile --- */}
            <Link
              href="/"
              className="flex items-center gap-2 mb-6 text-white hover:opacity-80 transition-all w-fit"
            >
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-2xl tracking-tighter italic">
                TravelFlow
              </span>
            </Link>

            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/50 text-sm">
              Log in to manage your journeys
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest ml-1">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", { required: "Email is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 pl-12 rounded-2xl focus:bg-white/10 transition-all border-none focus-visible:ring-1 focus-visible:ring-white/30 outline-none shadow-none"
                />
              </div>
              {errors.email && (
                <p className="text-[10px] text-red-400 mt-1 ml-1">
                  {errors.email?.message as string}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-[10px] text-white/30 hover:text-white transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 pl-12 pr-12 rounded-2xl focus:bg-white/10 transition-all border-none focus-visible:ring-1 focus-visible:ring-white/30 outline-none shadow-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[10px] text-red-400 mt-1 ml-1">
                  {errors.password?.message as string}
                </p>
              )}
            </div>

            {/* Main Submit Button */}
            <Button
              disabled={loading}
              type="submit"
              className="w-full h-12 bg-white text-[#003B73] hover:bg-blue-50 font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] mt-2 group"
            >
              {loading ? "Signing In..." : "Continue"}
              {!loading && (
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>

            {/* --- Divider --- */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center px-2">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-transparent px-3 text-white/30 font-semibold tracking-widest">
                  Or login with
                </span>
              </div>
            </div>

            {/* --- Google Login Button --- */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 rounded-2xl flex items-center justify-center gap-3 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm font-semibold">
                Continue with Google
              </span>
            </Button>

            {/* Bottom Link */}
            <p className="text-center text-sm text-white/40 pt-4">
              New to TravelFlow?{" "}
              <Link
                href="/register"
                className="text-white font-bold hover:underline underline-offset-8 transition-all"
              >
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
