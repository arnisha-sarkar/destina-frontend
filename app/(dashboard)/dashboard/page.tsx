import { redirect } from "next/navigation";

export default function DashboardPage() {
  // ইউজার এখানে আসা মাত্রই তাকে অ্যানালিটিক্স পেজে পাঠিয়ে দেবে
  redirect("dashboard/admin/analytics");
}
