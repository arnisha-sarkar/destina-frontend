import RevenueChart from "@/components/Admin/RevenueChart";
import StatCards from "@/components/Admin/StatCards";
import UserTable from "@/components/Admin/UserTable";

export default function AdminAnalytics() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 text-sm">
          Welcome back! Here is what's happening today.
        </p>
      </div>

      {/* Overview Cards */}
      <StatCards />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <RevenueChart />
      </div>

      {/* Data Table Section */}
      <UserTable />
    </div>
  );
}
