"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  User,
  Mail,
  ShieldCheck,
  Trash2,
  UserMinus,
  Search,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // এখানে আপনার অ্যাডমিন এপিআই কল হবে: GET /api/v1/admin/users
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/`,
        );
        setUsers(response.data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#003B73]">Manage Users</h1>
            <p className="text-gray-500">
              View and manage all registered accounts on TravelFlow.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              placeholder="Search user by email..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    User Details
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Role
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Joined Date
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider">
                    Status
                  </th>
                  <th className="p-6 text-xs font-bold uppercase text-gray-400 tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <UserRowSkeleton key={i} />
                    ))
                  : users.map((user: any) => (
                      <tr
                        key={user._id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                              {user.name?.charAt(0) || "U"}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 dark:text-white">
                                {user.name}
                              </p>
                              <p className="text-sm text-gray-500 flex items-center gap-1">
                                <Mail size={12} /> {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6">
                          <span
                            className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 w-fit ${
                              user.role === "admin"
                                ? "bg-purple-50 text-purple-600 border border-purple-100"
                                : "bg-blue-50 text-blue-600 border border-blue-100"
                            }`}
                          >
                            <ShieldCheck size={14} />{" "}
                            {user.role === "admin" ? "Administrator" : "User"}
                          </span>
                        </td>
                        <td className="p-6 text-sm font-medium text-gray-500">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-6">
                          <span className="flex items-center gap-1.5 text-green-500 text-xs font-bold">
                            <CheckCircle2 size={14} /> Active
                          </span>
                        </td>
                        <td className="p-6 text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              className="h-10 w-10 p-0 rounded-xl text-red-500 hover:bg-red-50"
                            >
                              <Trash2 size={18} />
                            </Button>
                            <Button
                              variant="ghost"
                              className="h-10 w-10 p-0 rounded-xl text-gray-400"
                            >
                              <MoreVertical size={18} />
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

// Skeleton for loading
const UserRowSkeleton = () => (
  <tr>
    <td colSpan={5} className="p-6">
      <div className="flex items-center gap-4 animate-pulse">
        <div className="w-12 h-12 bg-gray-100 rounded-2xl" />
        <div className="space-y-2 flex-grow">
          <div className="h-4 bg-gray-100 w-1/4 rounded" />
          <div className="h-3 bg-gray-100 w-1/3 rounded" />
        </div>
      </div>
    </td>
  </tr>
);

export default ManageUsersPage;
