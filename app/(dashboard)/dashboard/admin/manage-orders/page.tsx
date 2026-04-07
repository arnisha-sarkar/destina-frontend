"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CheckCircle,
  XCircle,
  Clock,
  User,
  Plane,
  MoreHorizontal,
  ArrowUpRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ManageOrdersPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        // আপনার এপিআই এন্ডপয়েন্ট: GET /api/v1/admin/bookings
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/bookings`,
        );
        setBookings(response.data.data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#003B73]">
              Manage Bookings
            </h1>
            <p className="text-gray-500">
              Track and manage all customer trip reservations.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                Total Bookings:
              </span>
              <span className="text-xl font-black text-blue-600">
                {bookings.length}
              </span>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-xs font-bold uppercase text-gray-400">
                    Customer
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400">
                    Trip Details
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400">
                    Price
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400">
                    Status
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {bookings.map((booking: any) => (
                  <tr
                    key={booking._id}
                    className="hover:bg-gray-50/30 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {booking.userName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {booking.userEmail}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <Plane size={14} className="text-blue-500" />
                        <span className="font-bold text-gray-700">
                          {booking.itemTitle}
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">
                        ID: {booking._id.slice(-6)}
                      </p>
                    </td>
                    <td className="p-6">
                      <span className="font-black text-[#003B73]">
                        ${booking.totalPrice}
                      </span>
                    </td>
                    <td className="p-6">
                      <span
                        className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-1.5 w-fit ${
                          booking.status === "Confirmed"
                            ? "bg-green-50 text-green-600 border border-green-100"
                            : "bg-yellow-50 text-yellow-600 border border-yellow-100"
                        }`}
                      >
                        {booking.status === "Confirmed" ? (
                          <CheckCircle size={12} />
                        ) : (
                          <Clock size={12} />
                        )}
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        <Button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl">
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          className="h-9 w-9 p-0 rounded-xl border-gray-200"
                        >
                          <XCircle size={18} className="text-red-400" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrdersPage;
