import OrderTable from "../orderTable";

export default function ManageOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Order Management
          </h1>
          <p className="text-slate-500 font-medium">
            Track and update all customer bookings in real-time.
          </p>
        </div>
      </div>

      {/* Booking API Data Table */}
      <OrderTable />
    </div>
  );
}
