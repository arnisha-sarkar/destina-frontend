"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/dashboard/stats")
      .then((res) => res.json())
      .then((data) => setChartData(data.data.revenueHistory || []));
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl border">
      <h3 className="font-bold mb-4">Revenue Overview</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
