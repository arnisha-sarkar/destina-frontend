"use client";
import React, { useEffect, useState } from "react";
import { Users, ShoppingBag, DollarSign, Loader2 } from "lucide-react";
import StatCard from "./StatCard";

const StatCards = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/dashboard/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <Loader2 className="animate-spin mx-auto my-10" />;

  const cardItems = [
    {
      title: "Total Users",
      value: stats?.totalUsers || 0,
      icon: <Users size={24} className="text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Total Orders",
      value: stats?.totalOrders || 0,
      icon: <ShoppingBag size={24} className="text-green-600" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Total Revenue",
      value: `$${stats?.totalRevenue || 0}`,
      icon: <DollarSign size={24} className="text-purple-600" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardItems.map((item, i) => (
        <StatCard key={i} {...item} description="Real-time data" trend="+5%" />
      ))}
    </div>
  );
};

export default StatCards;
