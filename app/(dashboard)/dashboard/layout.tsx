import DashNav from "@/components/Dashboard/DashNav"; // ধরুন আপনার নেভবার কম্পোনেন্টের নাম এটি
import Sidebar from "@/components/Dashboard/Sideber";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* ১. বাম পাশে ফিক্সড সাইডবার */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950">
        {/* ২. উপরে ড্যাশবোর্ড নেভবার (সার্চ বার, প্রোফাইল ড্রপডাউন ইত্যাদি থাকবে) */}
        <DashNav />

        {/* ৩. মেইন কন্টেন্ট এরিয়া */}
        <main className="p-6 md:p-10 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
