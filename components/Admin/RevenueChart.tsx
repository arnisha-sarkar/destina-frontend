"use client";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Upload, ChevronDown } from "lucide-react";

// ডামি ডাটা (আপনার এপিআই থেকে না আসা পর্যন্ত এটি দেখাবে)
const data = [
  { name: "Jan", revenue: 35000 },
  { name: "Feb", revenue: 65000 },
  { name: "Mar", revenue: 120000 },
  { name: "Apr", revenue: 75000 },
  { name: "May", revenue: 152400 }, // হাই পয়েন্ট
  { name: "Jun", revenue: 90000 },
];

const RevenueOverview = () => {
  return (
    <div className="bg-[#0F1115] p-8 rounded-[32px] border border-white/5 shadow-2xl w-full max-w-5xl mx-auto">
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Revenue Overview
        </h2>

        <div className="flex items-center gap-3">
          {/* Time Filters */}
          <div className="flex bg-[#1C1F26] p-1 rounded-xl">
            {["1W", "1M", "3M", "1Y", "6M"].map((time) => (
              <button
                key={time}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  time === "6M"
                    ? "bg-[#2D323E] text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 bg-[#1C1F26] text-gray-300 px-4 py-2 rounded-xl text-xs font-bold border border-white/5 hover:bg-[#252a35] transition-all">
            <Upload size={14} /> Export
          </button>
        </div>
      </div>

      {/* --- Chart Section --- */}
      <div className="h-[350px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#1C1F26"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 13, fontWeight: 500 }}
              dy={15}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(val) => `$${val / 1000}K`}
              dx={-10}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#3b82f6", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorRevenue)"
              activeDot={{
                r: 6,
                fill: "#fff",
                stroke: "#3b82f6",
                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* --- Bottom Stats Section --- */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <StatBadge label="Total" value="$284.5K" />
        <StatBadge label="Growth" value="+18.2%" isGreen />
        <StatBadge label="Avg" value="$23.7K" />
      </div>
    </div>
  );
};

// --- কাস্টম টুলটিপ (ছবির মতো সাদা বক্স) ---
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow-2xl border-none">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
          May 2026
        </p>
        <p className="text-[#0F1115] text-lg font-black mt-0.5">
          Revenue{" "}
          <span className="text-[#0F1115] font-black">
            ${payload[0].value.toLocaleString()}
          </span>
        </p>
        <p className="text-green-500 font-bold text-sm mt-0.5">+12.4%</p>
      </div>
    );
  }
  return null;
};

// --- স্ট্যাটাস ব্যাজ সাব-কম্পোনেন্ট ---
const StatBadge = ({ label, value, isGreen }: any) => (
  <div className="bg-[#1C1F26] border border-white/5 px-6 py-2.5 rounded-2xl flex items-center gap-2">
    <span className="text-gray-500 text-sm font-medium">{label}</span>
    <span
      className={`text-sm font-black ${isGreen ? "text-green-400" : "text-white"}`}
    >
      {value} {isGreen && "▲"}
    </span>
  </div>
);

export default RevenueOverview;
