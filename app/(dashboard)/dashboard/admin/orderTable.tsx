"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Loader2,
  PackageCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface Booking {
  _id: string;
  customerName?: string;
  itemName?: string;
  price?: number;
  status: string;
  date?: string;
}

const OrderTable = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/bookings");
        const resData = await response.json();
        // API response structure অনুযায়ী ডাটা সেট করা
        setBookings(resData.data || resData);
        setLoading(false);
      } catch (error) {
        console.error("Booking fetch error:", error);
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // Filtering Logic (নিরাপদভাবে তোমায় এরর থেকে বাঁচাবে)
  const filteredBookings = bookings.filter((booking) => {
    const customer = booking?.customerName?.toLowerCase() || "";
    const item = booking?.itemName?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    return customer.includes(search) || item.includes(search);
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const currentItems = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20">
        <Loader2 className="animate-spin text-blue-600 mb-2" size={32} />
        <p className="text-slate-500 text-sm italic">
          Fetching all bookings...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Search Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30">
        <div>
          <h3 className="text-xl font-bold">Manage Orders</h3>
          <p className="text-xs text-slate-500">
            Total {bookings.length} orders in system
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by customer or item..."
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border rounded-2xl outline-none text-sm focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
              <th className="px-6 py-4">Customer & Item</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Update Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {currentItems.length > 0 ? (
              currentItems.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-slate-50/30 transition-all"
                >
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 dark:text-white">
                      {order?.customerName || "Unknown Customer"}
                    </p>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <PackageCheck size={14} />{" "}
                      {order?.itemName || "General Item"}
                    </p>
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                    ${order?.price || 0}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 w-fit ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {order.status === "Delivered" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <select
                      className="text-xs bg-slate-50 border rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-blue-500"
                      defaultValue={order.status}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-20 text-center text-slate-400 italic"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="p-5 border-t border-slate-100 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          Page {currentPage} of {totalPages || 1}
        </p>
        <div className="flex gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="p-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="p-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
