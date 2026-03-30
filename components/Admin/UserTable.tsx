"use client";
import { useEffect, useState } from "react";
import {
  Search,
  MoreVertical,
  Shield,
  User,
  Trash2,
  UserPlus,
} from "lucide-react";
import Image from "next/image";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        // এপিআই থেকে ইউজার লিস্ট সেট করা
        setUsers(data?.data?.usersList || []);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const filteredUsers = users.filter(
    (u: any) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-[#0F1115] rounded-[32px] border border-white/5 shadow-2xl overflow-hidden">
      {/* --- Header & Search Section --- */}
      <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-white/5">
        <div>
          <h3 className="text-xl font-black text-white uppercase italic tracking-wider">
            Manage Users
          </h3>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[2px] mt-1">
            Control access & user permissions
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={16}
          />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full bg-[#1C1F26] border border-white/5 p-3 pl-12 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium placeholder:text-gray-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* --- Table Section --- */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#16191F] text-[#64748b] text-[10px] font-black uppercase tracking-widest">
            <tr>
              <th className="p-6">User Info</th>
              <th className="p-6">Email Address</th>
              <th className="p-6">Role</th>
              <th className="p-6">Status</th>
              <th className="p-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-white/5">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: any) => (
                <tr
                  key={user._id}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  {/* User Info with Avatar */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#1C1F26] border border-white/10 relative">
                        {user.profilePic ? (
                          <Image
                            src={user.profilePic}
                            alt={user.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <User size={20} />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-black text-white italic">
                          {user.name}
                        </p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                          ID: {user._id?.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="p-6 text-gray-400 font-medium">
                    {user.email}
                  </td>

                  {/* Role with Badge */}
                  <td className="p-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase italic flex items-center gap-1.5 w-fit ${
                        user.role === "admin"
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                      }`}
                    >
                      {user.role === "admin" ? (
                        <Shield size={12} />
                      ) : (
                        <User size={12} />
                      )}
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${user.status === "active" ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-red-500"}`}
                      />
                      <span className="text-[10px] font-black uppercase text-gray-400 italic">
                        {user.status || "Active"}
                      </span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-6 text-center">
                    <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors"
                        title="Make Admin"
                      >
                        <UserPlus size={18} />
                      </button>
                      <button
                        className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"
                        title="Delete User"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-20 text-center text-gray-600 font-bold uppercase italic tracking-widest"
                >
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
