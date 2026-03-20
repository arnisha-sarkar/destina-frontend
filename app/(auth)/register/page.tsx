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
// import { Eye, EyeOff, Link, Lock, Mail, User, UserCheck } from "lucide-react";

// import React, { useState } from "react";
// import { Controller } from "react-hook-form";
// interface RegistrationFormData {
//   name: string;
//   email: string;
//   password: string;
//   role: "admin" | "user";
// }

// const Registration: React.FC = () => {
//   const [formData, setFormData] = useState<RegistrationFormData>({
//     name: "",
//     email: "",
//     password: "",
//     role: "admin",
//   });
//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center">
//           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
//             <UserCheck className="w-8 h-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl">Registration</CardTitle>
//           <CardDescription>Create your account to get started</CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form className="space-y-6">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name *</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   required
//                   // {...register("name")}
//                   className={`pl-10 `}
//                 />
//               </div>
//             </div>

//             {/* Username Field */}
//             {/* <div className="space-y-2">
//               <Label htmlFor="userName">Username *</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="userName"
//                   type="text"
//                   placeholder="Choose a username"
//                   required
//                   {...register("userName")}
//                   className={`pl-10 ${
//                     errors.userName ? "border-destructive" : ""
//                   }`}
//                 />
//               </div>
//               {errors.userName && (
//                 <p className="text-sm text-destructive">
//                   {errors.userName.message}
//                 </p>
//               )}
//             </div> */}

//             {/* Email Field */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address *</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   // {...register("email")}
//                   required
//                   className={`pl-10 `}
//                 />
//               </div>
//             </div>

//             {/* Role Selection */}
//             <div className="space-y-2 w-full">
//               <Label htmlFor="role">I am a *</Label>
//               {/* <Controller
//                 name="role"
//                 // control={control}
//                 render={({ field }) => (
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select your role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="applicant">Job Applicant</SelectItem>
//                       <SelectItem value="employer">Employer</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 )}
//               ></Controller> */}
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   // type={showPassword ? "text" : "password"}
//                   placeholder="Create a strong password"
//                   required
//                   // {...register("password")}
//                   className={`pl-10 pr-10 `}
//                 />

//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   // onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {/* {showPassword ? (
//                     <EyeOff className="w-4 h-4 text-muted-foreground" />
//                   ) : (
//                     <Eye className="w-4 h-4 text-muted-foreground" />
//                   )} */}
//                 </Button>
//               </div>
//             </div>

//             {/* Confirm Password Field */}
//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="confirmPassword"
//                   // type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm your password"
//                   required
//                   // {...register("confirmPassword")}
//                   className={`pl-10 pr-10 `}
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   // onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {/* {showConfirmPassword ? (
//                     <EyeOff className="w-4 h-4 text-muted-foreground" />
//                   ) : (
//                     <Eye className="w-4 h-4 text-muted-foreground" />
//                   )} */}
//                 </Button>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <Button type="submit" className="w-full">
//               Create Account
//             </Button>

//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Already have an account?
//                 <Link
//                   href="/login"
//                   className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
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
// import Link from "next/link"; // Lucide এর Link এর বদলে Next.js Link
// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";

// interface RegistrationFormData {
//   name: string;
//   email: string;
//   password: string;
//   // confirmPassword: string;
//   role: "applicant" | "employer";
// }

// const Registration: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // React Hook Form Setup
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<RegistrationFormData>({
//     defaultValues: {
//       role: "applicant",
//     },
//   });

//   // এই ফাংশনটি কল হবে যখন আপনি Submit বাটনে ক্লিক করবেন
//   const onSubmit = (data: RegistrationFormData) => {
//     console.log("Form Data Submitted:", data);
//     alert("Check Console for data!");
//   };

//   return (
//     <div className="min-h-screen bg-background flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center">
//           <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
//             <UserCheck className="w-8 h-8 text-primary-foreground" />
//           </div>
//           <CardTitle className="text-2xl">Registration</CardTitle>
//           <CardDescription>Create your account to get started</CardDescription>
//         </CardHeader>

//         <CardContent>
//           {/* handleSubmit(onSubmit) যোগ করা হয়েছে */}
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name Field */}
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name *</Label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="Enter your full name"
//                   {...register("name", { required: "Name is required" })}
//                   className="pl-10"
//                 />
//               </div>
//               {errors.name && (
//                 <p className="text-xs text-red-500">{errors.name.message}</p>
//               )}
//             </div>

//             {/* Email Field */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address *</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   {...register("email", { required: "Email is required" })}
//                   className="pl-10"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-xs text-red-500">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Role Selection using Controller */}
//             <div className="space-y-2 w-full">
//               <Label htmlFor="role">I am a *</Label>
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
//                       <SelectItem value="applicant">Job Applicant</SelectItem>
//                       <SelectItem value="employer">Employer</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 )}
//               />
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Create a strong password"
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
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Confirm Password Field */}
//             {/* <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password *</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//                 <Input
//                   id="confirmPassword"
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm your password"
//                   {...register("confirmPassword", {
//                     required: "Please confirm your password",
//                   })}
//                   className="pl-10 pr-10"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="w-4 h-4" />
//                   ) : (
//                     <Eye className="w-4 h-4" />
//                   )}
//                 </Button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-xs text-red-500">
//                   {errors.confirmPassword.message}
//                 </p>
//               )}
//             </div> */}

//             {/* Submit Button */}
//             <Button type="submit" className="w-full font-semibold">
//               Create Account
//             </Button>

//             <div className="text-center">
//               <p className="text-sm text-muted-foreground">
//                 Already have an account?{" "}
//                 <Link
//                   href="/login"
//                   className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff, Lock, Mail, User, UserCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // নেভিগেশনের জন্য
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface RegistrationFormData {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin"; // ব্যাকএন্ড এনামের সাথে মিল রেখে
}

const Registration: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // নেক্সট জেএস রাউটার

  // React Hook Form Setup
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

  // API Call Function
  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (result.success) {
        alert("Account Created Successfully! 🚀");
        console.log("Registered User:", result.data);

        // রেজিস্ট্রেশন সফল হলে লগইন পেজে পাঠিয়ে দিবে
        router.push("/login");
      } else {
        // ইমেইল অলরেডি থাকলে বা অন্য এরর হলে
        alert(result.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert(
        "সার্ভার কানেক্ট হতে পারছে না। নিশ্চিত করুন আপনার ব্যাকএন্ড রান আছে।",
      );
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <UserCheck className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Registration</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="pl-10"
                />
              </div>
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  {...register("email", { required: "Email is required" })}
                  className="pl-10"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label>I am joining as *</Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">Candidate / User</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full h-11 text-lg font-semibold">
              Create Account
            </Button>

            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary font-bold hover:underline"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
