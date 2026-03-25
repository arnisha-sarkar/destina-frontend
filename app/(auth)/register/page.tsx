// // "use client";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Eye, EyeOff, Link, Lock, Mail, User, UserCheck } from "lucide-react";

// // import React, { useState } from "react";
// // import { Controller } from "react-hook-form";
// // interface RegistrationFormData {
// //   name: string;
// //   email: string;
// //   password: string;
// //   role: "admin" | "user";
// // }

// // const Registration: React.FC = () => {
// //   const [formData, setFormData] = useState<RegistrationFormData>({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "admin",
// //   });
// //   return (
// //     <div className="min-h-screen bg-background flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader className="text-center">
// //           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
// //             <UserCheck className="w-8 h-8 text-primary-foreground" />
// //           </div>
// //           <CardTitle className="text-2xl">Registration</CardTitle>
// //           <CardDescription>Create your account to get started</CardDescription>
// //         </CardHeader>

// //         <CardContent>
// //           <form className="space-y-6">
// //             {/* Name Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="name">Full Name *</Label>
// //               <div className="relative">
// //                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="name"
// //                   type="text"
// //                   placeholder="Enter your full name"
// //                   required
// //                   // {...register("name")}
// //                   className={`pl-10 `}
// //                 />
// //               </div>
// //             </div>

// //             {/* Username Field */}
// //             {/* <div className="space-y-2">
// //               <Label htmlFor="userName">Username *</Label>
// //               <div className="relative">
// //                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="userName"
// //                   type="text"
// //                   placeholder="Choose a username"
// //                   required
// //                   {...register("userName")}
// //                   className={`pl-10 ${
// //                     errors.userName ? "border-destructive" : ""
// //                   }`}
// //                 />
// //               </div>
// //               {errors.userName && (
// //                 <p className="text-sm text-destructive">
// //                   {errors.userName.message}
// //                 </p>
// //               )}
// //             </div> */}

// //             {/* Email Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="email">Email Address *</Label>
// //               <div className="relative">
// //                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   // {...register("email")}
// //                   required
// //                   className={`pl-10 `}
// //                 />
// //               </div>
// //             </div>

// //             {/* Role Selection */}
// //             <div className="space-y-2 w-full">
// //               <Label htmlFor="role">I am a *</Label>
// //               {/* <Controller
// //                 name="role"
// //                 // control={control}
// //                 render={({ field }) => (
// //                   <Select value={field.value} onValueChange={field.onChange}>
// //                     <SelectTrigger className="w-full">
// //                       <SelectValue placeholder="Select your role" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectItem value="applicant">Job Applicant</SelectItem>
// //                       <SelectItem value="employer">Employer</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                 )}
// //               ></Controller> */}
// //             </div>

// //             {/* Password Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="password">Password *</Label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="password"
// //                   // type={showPassword ? "text" : "password"}
// //                   placeholder="Create a strong password"
// //                   required
// //                   // {...register("password")}
// //                   className={`pl-10 pr-10 `}
// //                 />

// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
// //                   // onClick={() => setShowPassword(!showPassword)}
// //                 >
// //                   {/* {showPassword ? (
// //                     <EyeOff className="w-4 h-4 text-muted-foreground" />
// //                   ) : (
// //                     <Eye className="w-4 h-4 text-muted-foreground" />
// //                   )} */}
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Confirm Password Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="confirmPassword">Confirm Password *</Label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="confirmPassword"
// //                   // type={showConfirmPassword ? "text" : "password"}
// //                   placeholder="Confirm your password"
// //                   required
// //                   // {...register("confirmPassword")}
// //                   className={`pl-10 pr-10 `}
// //                 />
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
// //                   // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                 >
// //                   {/* {showConfirmPassword ? (
// //                     <EyeOff className="w-4 h-4 text-muted-foreground" />
// //                   ) : (
// //                     <Eye className="w-4 h-4 text-muted-foreground" />
// //                   )} */}
// //                 </Button>
// //               </div>
// //             </div>

// //             {/* Submit Button */}
// //             <Button type="submit" className="w-full">
// //               Create Account
// //             </Button>

// //             <div className="text-center">
// //               <p className="text-sm text-muted-foreground">
// //                 Already have an account?
// //                 <Link
// //                   href="/login"
// //                   className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
// //                 >
// //                   Sign in here
// //                 </Link>
// //               </p>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default Registration;

// // "use client";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Eye, EyeOff, Lock, Mail, User, UserCheck } from "lucide-react";
// // import Link from "next/link"; // Lucide এর Link এর বদলে Next.js Link
// // import React, { useState } from "react";
// // import { Controller, useForm } from "react-hook-form";

// // interface RegistrationFormData {
// //   name: string;
// //   email: string;
// //   password: string;
// //   // confirmPassword: string;
// //   role: "applicant" | "employer";
// // }

// // const Registration: React.FC = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// //   // React Hook Form Setup
// //   const {
// //     register,
// //     handleSubmit,
// //     control,
// //     formState: { errors },
// //   } = useForm<RegistrationFormData>({
// //     defaultValues: {
// //       role: "applicant",
// //     },
// //   });

// //   // এই ফাংশনটি কল হবে যখন আপনি Submit বাটনে ক্লিক করবেন
// //   const onSubmit = (data: RegistrationFormData) => {
// //     console.log("Form Data Submitted:", data);
// //     alert("Check Console for data!");
// //   };

// //   return (
// //     <div className="min-h-screen bg-background flex items-center justify-center p-4">
// //       <Card className="w-full max-w-md">
// //         <CardHeader className="text-center">
// //           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
// //             <UserCheck className="w-8 h-8 text-primary-foreground" />
// //           </div>
// //           <CardTitle className="text-2xl">Registration</CardTitle>
// //           <CardDescription>Create your account to get started</CardDescription>
// //         </CardHeader>

// //         <CardContent>
// //           {/* handleSubmit(onSubmit) যোগ করা হয়েছে */}
// //           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //             {/* Name Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="name">Full Name *</Label>
// //               <div className="relative">
// //                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="name"
// //                   type="text"
// //                   placeholder="Enter your full name"
// //                   {...register("name", { required: "Name is required" })}
// //                   className="pl-10"
// //                 />
// //               </div>
// //               {errors.name && (
// //                 <p className="text-xs text-red-500">{errors.name.message}</p>
// //               )}
// //             </div>

// //             {/* Email Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="email">Email Address *</Label>
// //               <div className="relative">
// //                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   {...register("email", { required: "Email is required" })}
// //                   className="pl-10"
// //                 />
// //               </div>
// //               {errors.email && (
// //                 <p className="text-xs text-red-500">{errors.email.message}</p>
// //               )}
// //             </div>

// //             {/* Role Selection using Controller */}
// //             <div className="space-y-2 w-full">
// //               <Label htmlFor="role">I am a *</Label>
// //               <Controller
// //                 name="role"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <Select
// //                     onValueChange={field.onChange}
// //                     defaultValue={field.value}
// //                   >
// //                     <SelectTrigger className="w-full">
// //                       <SelectValue placeholder="Select your role" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectItem value="applicant">Job Applicant</SelectItem>
// //                       <SelectItem value="employer">Employer</SelectItem>
// //                     </SelectContent>
// //                   </Select>
// //                 )}
// //               />
// //             </div>

// //             {/* Password Field */}
// //             <div className="space-y-2">
// //               <Label htmlFor="password">Password *</Label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="password"
// //                   type={showPassword ? "text" : "password"}
// //                   placeholder="Create a strong password"
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
// //                   {errors.password.message}
// //                 </p>
// //               )}
// //             </div>

// //             {/* Confirm Password Field */}
// //             {/* <div className="space-y-2">
// //               <Label htmlFor="confirmPassword">Confirm Password *</Label>
// //               <div className="relative">
// //                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
// //                 <Input
// //                   id="confirmPassword"
// //                   type={showConfirmPassword ? "text" : "password"}
// //                   placeholder="Confirm your password"
// //                   {...register("confirmPassword", {
// //                     required: "Please confirm your password",
// //                   })}
// //                   className="pl-10 pr-10"
// //                 />
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   size="sm"
// //                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
// //                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                 >
// //                   {showConfirmPassword ? (
// //                     <EyeOff className="w-4 h-4" />
// //                   ) : (
// //                     <Eye className="w-4 h-4" />
// //                   )}
// //                 </Button>
// //               </div>
// //               {errors.confirmPassword && (
// //                 <p className="text-xs text-red-500">
// //                   {errors.confirmPassword.message}
// //                 </p>
// //               )}
// //             </div> */}

// //             {/* Submit Button */}
// //             <Button type="submit" className="w-full font-semibold">
// //               Create Account
// //             </Button>

// //             <div className="text-center">
// //               <p className="text-sm text-muted-foreground">
// //                 Already have an account?{" "}
// //                 <Link
// //                   href="/login"
// //                   className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
// //                 >
// //                   Sign in here
// //                 </Link>
// //               </p>
// //             </div>
// //           </form>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default Registration;

// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Eye, EyeOff, Lock, Mail, User, UserCheck } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation"; // নেভিগেশনের জন্য
// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";

// interface RegistrationFormData {
//   name: string;
//   email: string;
//   password: string;
//   role: "user" | "admin"; // ব্যাকএন্ড এনামের সাথে মিল রেখে
// }

// const Registration: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter(); // নেক্সট জেএস রাউটার

//   // React Hook Form Setup
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<RegistrationFormData>({
//     defaultValues: {
//       role: "user",
//     },
//   });

//   // API Call Function
//   const onSubmit = async (data: RegistrationFormData) => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/v1/users/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         },
//       );

//       const result = await response.json();

//       if (result.success) {
//         alert("Account Created Successfully! 🚀");
//         console.log("Registered User:", result.data);

//         // রেজিস্ট্রেশন সফল হলে লগইন পেজে পাঠিয়ে দিবে
//         router.push("/login");
//       } else {
//         // ইমেইল অলরেডি থাকলে বা অন্য এরর হলে
//         alert(result.message || "Registration Failed");
//       }
//     } catch (error) {
//       console.error("Connection Error:", error);
//       alert(
//         "সার্ভার কানেক্ট হতে পারছে না। নিশ্চিত করুন আপনার ব্যাকএন্ড রান আছে।",
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-4">
//       <Card className="w-full max-w-md shadow-lg">
//         <CardHeader className="text-center">
//           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
//             <UserCheck className="w-8 h-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl font-bold">Registration</CardTitle>
//           <CardDescription>Create your account to get started</CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//             {/* Full Name */}
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name *</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   placeholder="John Doe"
//                   {...register("name", { required: "Name is required" })}
//                   className="pl-10"
//                 />
//               </div>
//               {errors.name && (
//                 <p className="text-xs text-red-500">{errors.name.message}</p>
//               )}
//             </div>

//             {/* Email Address */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address *</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="name@example.com"
//                   {...register("email", { required: "Email is required" })}
//                   className="pl-10"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-xs text-red-500">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Role Selection */}
//             <div className="space-y-2">
//               <Label>I am joining as *</Label>
//               <Controller
//                 name="role"
//                 control={control}
//                 render={({ field }) => (
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select your role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="user">Candidate / User</SelectItem>
//                       <SelectItem value="admin">Administrator</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 )}
//               />
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="••••••••"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 6,
//                       message: "Minimum 6 characters required",
//                     },
//                   })}
//                   className="pl-10 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-4 h-4 text-gray-500" />
//                   ) : (
//                     <Eye className="w-4 h-4 text-gray-500" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-xs text-red-500">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full h-11 text-lg font-semibold">
//               Create Account
//             </Button>

//             <div className="text-center pt-2">
//               <p className="text-sm text-muted-foreground">
//                 Already have an account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-primary font-bold hover:underline"
//                 >
//                   Sign in here
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Registration;

"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User, Globe, ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

const RegistrationPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    defaultValues: {
      role: "user",
    },
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        alert("Account Created Successfully! 🚀");
        router.push("/login");
      } else {
        alert(result.message || "Registration Failed");
      }
    } catch (error) {
      alert("সার্ভার কানেক্ট হতে পারছে না।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      {/* --- Background Section --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070"
          alt="Travel Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
      </div>

      {/* --- Main Registration Container --- */}
      <div className="relative z-10 w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 min-h-[700px]">
        {/* Left Side: Visual Branding */}
        <div className="relative hidden md:block group overflow-hidden border-r border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974"
            alt="Adventure"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#003B73]/80 via-transparent to-black/40" />

          {/* Clickable Logo on Left Side */}
          <div className="absolute top-12 left-10">
            <Link
              href="/"
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
            >
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-2xl tracking-tighter italic">
                TravelFlow
              </span>
            </Link>
          </div>

          <div className="absolute bottom-12 left-10 right-10 text-white">
            <h2 className="text-5xl font-extrabold mb-4 leading-tight tracking-tighter">
              START YOUR <br /> JOURNEY.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-sm">
              Create an account to unlock personalized travel itineraries and
              exclusive explorer rewards.
            </p>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="flex flex-col justify-center p-8 lg:p-14 bg-[#003B73]/30 md:bg-transparent">
          <div className="mb-8">
            {/* Clickable Logo for Mobile/Small Screens */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white mb-6 md:hidden"
            >
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl tracking-tighter italic">
                TravelFlow
              </span>
            </Link>

            <h1 className="text-3xl font-bold text-white mb-2">
              Create Account
            </h1>
            <p className="text-white/50 text-sm">
              Join thousands of travelers worldwide
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name Field */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest ml-1">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12 pl-12 rounded-2xl focus:bg-white/10 transition-all border-none focus-visible:ring-1 focus-visible:ring-white/30 outline-none shadow-none"
                />
              </div>
              {errors.name && (
                <p className="text-[10px] text-red-400 mt-1 ml-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest ml-1">
                Email Address
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
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Role Selection */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest ml-1">
                I am joining as
              </Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-2xl focus:ring-1 focus:ring-white/30 border-none outline-none shadow-none">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#001F3D] border-white/10 text-white rounded-xl">
                      <SelectItem value="user">Candidate / Explorer</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-[10px] font-bold uppercase tracking-widest ml-1">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
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
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <Button
              disabled={loading}
              type="submit"
              className="w-full h-12 bg-white text-[#003B73] hover:bg-blue-50 font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] mt-4 group"
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && (
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>

            {/* Bottom Link */}
            <p className="text-center text-sm text-white/40 pt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-white font-bold hover:underline underline-offset-8 transition-all"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
